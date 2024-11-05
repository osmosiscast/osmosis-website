import os
from speechlib import Transcriptor

file = "/Users/jamiemcmillan/Documents/Osmosis/Documents/Episodes/Season 2/009 Mini Moon/mini-moon.mp3"  # your audio file
voices_folder = ""  # voices folder containing voice samples for recognition
language = "en"  # language code
log_folder = "logs"  # log folder for storing transcripts
modelSize = "medium"  # size of model to be used [tiny, small, medium, large-v1, large-v2, large-v3]
quantization = (
    False  # setting this 'True' may speed up the process but lower the accuracy
)
ACCESS_TOKEN = os.getenv(
    "HUGGING_FACE_API_KEY"
)  # get permission to access pyannote/speaker-diarization@2.1 on huggingface

# quantization only works on faster-whisper
transcriptor = Transcriptor(
    file, log_folder, language, modelSize, ACCESS_TOKEN, voices_folder, quantization
)

# use faster-whisper (simply faster)
res = transcriptor.faster_whisper()

print(res)
