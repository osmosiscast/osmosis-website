import boto3
import os

account_id = os.getenv("CLOUDFLARE_ACCOUNT_ID")
session = boto3.Session(profile_name="osmosis")
s3 = session.client(
    service_name="s3",
    endpoint_url=f"https://{account_id}.r2.cloudflarestorage.com",
)

# Get object information
bucket_name = "osmosis-assets-prod"
key_name = "content/episodes/001/001/pizza.mp3"
object_information = s3.head_object(Bucket=bucket_name, Key=key_name)
print(object_information)

# Upload/Update single file
filename = "internal/testing/audio.mp3"
key_name = "content/episodes/001/001/thisIsNotReal.mp3"
with open(filename, "rb") as file:
    s3.upload_fileobj(file, bucket_name, key_name)

object_information = s3.head_object(Bucket=bucket_name, Key=key_name)
print(object_information)

# Delete object
# s3.delete_object(Bucket=<R2_BUCKET_NAME>, Key=<FILE_KEY_NAME>)
