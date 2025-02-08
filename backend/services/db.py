from motor.motor_asyncio import AsyncIOMotorClient
from os import getenv
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = getenv("DB_DETAILS")
DB_NAME = getenv("DB_NAME")

client = AsyncIOMotorClient(MONGO_URI)
database = client[DB_NAME]

users = database["users"]
flagged = database['flagged']
