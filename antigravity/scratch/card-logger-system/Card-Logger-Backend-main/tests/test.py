
import bcrypt

# generate 32 bit sha256 salt

salt = bcrypt.gensalt(rounds=12, prefix=b'2b')

print(len(salt), salt.decode('utf-8'))

