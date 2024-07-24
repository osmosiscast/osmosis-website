import http.client as httplib
import httplib2
import os
import random
import time

from apiclient.discovery import build
from apiclient.errors import HttpError
from apiclient.http import MediaFileUpload
from datetime import datetime
from oauth2client.client import flow_from_clientsecrets
from oauth2client.file import Storage
from oauth2client.tools import run_flow, argparser


class YouTubeUpload:
    def __init__(
        self,
        file: str,
        title: str,
        description: str,
        category: str,
        keywords: list[str],
        privacy_status: str,
    ) -> None:
        self.file = file
        self.title = title
        self.description = description
        self.category = category
        self.keywords = keywords
        self.privacy_status = privacy_status

        # Explicitly tell the underlying HTTP transport library not to retry, since
        # we are handling retry logic ourselves.
        httplib2.RETRIES = 1

        # Maximum number of times to retry before giving up.
        self.MAX_RETRIES = 10

        # Always retry when these exceptions are raised.
        self.RETRIABLE_EXCEPTIONS = (
            httplib2.HttpLib2Error,
            IOError,
            httplib.NotConnected,
            httplib.IncompleteRead,
            httplib.ImproperConnectionState,
            httplib.CannotSendRequest,
            httplib.CannotSendHeader,
            httplib.ResponseNotReady,
            httplib.BadStatusLine,
        )

        # Always retry when an apiclient.errors.HttpError with one of these status
        # codes is raised.
        self.RETRIABLE_STATUS_CODES = [500, 502, 503, 504]

        # The CLIENT_SECRETS_FILE variable specifies the name of a file that contains
        # the OAuth 2.0 information for this application, including its client_id and
        # client_secret.
        CLIENT_SECRETS_DIRECTORY = os.path.expanduser("~")
        CLIENT_SECRETS_FILE = ".client_secrets.json"
        self.CLIENT_SECRETS_FILEPATH = os.path.join(
            CLIENT_SECRETS_DIRECTORY, CLIENT_SECRETS_FILE
        )

        # This OAuth 2.0 access scope allows an application to upload files to the
        # authenticated user's YouTube channel, but doesn't allow other types of access.
        self.YOUTUBE_UPLOAD_SCOPE = "https://www.googleapis.com/auth/youtube.upload"
        self.YOUTUBE_API_SERVICE_NAME = "youtube"
        self.YOUTUBE_API_VERSION = "v3"

        # This variable defines a message to display if the CLIENT_SECRETS_FILE is
        # missing.
        self.MISSING_CLIENT_SECRETS_MESSAGE = """
        WARNING: Please configure OAuth 2.0

        To make this sample run you will need to populate the client_secrets.json file
        found at:

           %s

        with information from the API Console
        https://console.cloud.google.com/

        For more information about the client_secrets.json file format, please visit:
        https://developers.google.com/api-client-library/python/guide/aaa_client_secrets
        """ % os.path.abspath(
            os.path.join(os.path.dirname(__file__), self.CLIENT_SECRETS_FILEPATH)
        )

        return None

    def get_authenticated_service(self):
        flow = flow_from_clientsecrets(
            self.CLIENT_SECRETS_FILEPATH,
            scope=self.YOUTUBE_UPLOAD_SCOPE,
            message=self.MISSING_CLIENT_SECRETS_MESSAGE,
        )

        storage = Storage("%s-storage-oauth2.json" % self.CLIENT_SECRETS_FILEPATH)
        credentials = storage.get()
        token_expired = credentials.token_expiry < datetime.now()

        if credentials is None or credentials.invalid or token_expired:
            args = argparser.parse_args(args=[])
            credentials = run_flow(flow, storage, args)

        return build(
            self.YOUTUBE_API_SERVICE_NAME,
            self.YOUTUBE_API_VERSION,
            http=credentials.authorize(httplib2.Http()),
        )

    def initialise_upload(self, youtube) -> dict:
        body = dict(
            snippet=dict(
                title=self.title,
                description=self.description,
                tags=self.keywords,
                categoryId=self.category,
            ),
            status=dict(privacyStatus=self.privacy_status),
        )

        # Call the API's videos.insert method to create and upload the video.
        insert_request = youtube.videos().insert(
            part=",".join(body.keys()),
            body=body,
            media_body=MediaFileUpload(self.file, chunksize=-1, resumable=True),
        )

        self.resumable_upload(insert_request)

        return insert_request

    def resumable_upload(self, insert_request):
        """
        This method implements an exponential backoff strategy to resume a failed upload
        """
        response = None
        error = None
        retry = 0
        while response is None:
            try:
                print("Uploading file...")
                status, response = insert_request.next_chunk()
                if response is not None:
                    if "id" in response:
                        print(
                            "Video id '%s' was successfully uploaded." % response["id"]
                        )
                    else:
                        exit(
                            "The upload failed with an unexpected response: %s"
                            % response
                        )
            except HttpError as e:
                if e.resp.status in self.RETRIABLE_STATUS_CODES:
                    error = "A retriable HTTP error %d occurred:\n%s" % (
                        e.resp.status,
                        e.content,
                    )
                else:
                    raise
            except self.RETRIABLE_EXCEPTIONS as e:
                error = "A retriable error occurred: %s" % e

            if error is not None:
                print(error)
                retry += 1
                if retry > self.MAX_RETRIES:
                    exit("No longer attempting to retry.")

                max_sleep = 2**retry
                sleep_seconds = random.random() * max_sleep  # nosec
                print("Sleeping %f seconds and then retrying..." % sleep_seconds)
                time.sleep(sleep_seconds)

    def upload_video(self) -> dict:
        youtube = self.get_authenticated_service()
        try:
            response = self.initialise_upload(youtube)
        except HttpError as e:
            print("An HTTP error %d occurred:\n%s" % (e.resp.status, e.content))
            response = {}
        return response
