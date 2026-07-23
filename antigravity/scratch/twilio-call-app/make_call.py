# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client

import time

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = "AC2e52a7c93381f5df412890f80656bbbe"
auth_token = "c00c9b06475ef71cc9c3517be7a73b9a"
client = Client(account_sid, auth_token)

print("Initiating call...")
call = client.calls.create(
    url="http://demo.twilio.com/docs/voice.xml",
    to="+923345831453",
    from_="+19786503823",
)

print(f"Call SID: {call.sid}")

# Wait for Twilio to process and check status
print("Waiting 10 seconds for status update...")
time.sleep(10)
call_status = client.calls(call.sid).fetch()
print(f"Final Call Status: {call_status.status}")
