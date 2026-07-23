from twilio.rest import Client

# Your credentials
account_sid = "AC2e52a7c93381f5df412890f80656bbbe"
auth_token = "c00c9b06475ef71cc9c3517be7a73b9a"
client = Client(account_sid, auth_token)

# The Twilio number you bought
twilio_number = "+19786503823"

# Person A (The verified number - Twilio calls this first)
person_a = "+923345831453" 

# Person B (The other number - Twilio dials this after you answer)
person_b = "+923135188467"

print(f"Calling {person_a} first...")

# When person_a picks up, Twilio will execute the TwiML below
# It will say a message, then Dial person_b
call = client.calls.create(
    twiml=f'<Response><Say>Connecting you to the other person now.</Say><Dial>{person_b}</Dial></Response>',
    to=person_a,
    from_=twilio_number
)

print(f"Call started! SID: {call.sid}")
