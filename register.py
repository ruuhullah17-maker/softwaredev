from fastapi import APIRouter

router = APIRouter()
@router.get("/")
def reg():
    return " hello from register"