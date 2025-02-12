# main.py
from fastapi import FastAPI
from sqlalchemy import text
from db import engine  # Import engine from db.py
from user import router as user_router  # Import the router from user.py

app = FastAPI()

# Function to initialize DB
def initialize_database():
    with engine.connect() as connection:
        result = connection.execute(text("SHOW DATABASES;"))
        databases = [row[0] for row in result]
        if os.getenv("DB_NAME") not in databases:
            connection.execute(text(f"CREATE DATABASE {os.getenv('DB_NAME')};"))
            print(f"Database '{os.getenv('DB_NAME')}' created successfully.")

initialize_database()

# Include the user router
app.include_router(user_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Backend is running"}
