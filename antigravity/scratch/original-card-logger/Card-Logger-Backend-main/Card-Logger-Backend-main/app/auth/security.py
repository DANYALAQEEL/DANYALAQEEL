from decouple import config
import bcrypt

mainSalt = config('SALT')

def encrypt_password(password: str) -> str:

    if not mainSalt:
        print("No salt found")
        exit(1)

    salt_str = str(mainSalt)
    # convert salt into bytes
    salt = salt_str.encode('utf-8')
    encoded_password = password.encode('utf-8')
    hashed = bcrypt.hashpw(encoded_password, salt_str.encode('utf-8'))
    return hashed.decode('utf-8')

def check_encrypted_password(password: str, hashed_password: str) -> bool:
    encoded_password = password.encode('utf-8')
    encoded_hashed_password = hashed_password.encode('utf-8')
    return bcrypt.checkpw(encoded_password, encoded_hashed_password)