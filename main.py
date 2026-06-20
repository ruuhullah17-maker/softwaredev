from fastapi import FastAPI
from fastapi import APIRouter
from register import router as activities


app = FastAPI()
app.include_router(activities, prefix="/new")
@app.get("/")
def main():
    return "greetings from the homepage"