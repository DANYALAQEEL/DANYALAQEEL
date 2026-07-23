from decouple import config
import bcrypt

mainSalt = config('SALT')

def encrypt_password(password: str) -> str:
    encoded_password = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(encoded_password, salt)
    return hashed.decode('utf-8')

def check_encrypted_password(password: str, hashed_password: str) -> bool:
    encoded_password = password.encode('utf-8')
    encoded_hashed_password = hashed_password.encode('utf-8')
    return bcrypt.checkpw(encoded_password, encoded_hashed_password)