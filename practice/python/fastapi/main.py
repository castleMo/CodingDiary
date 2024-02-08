from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

# FastAPI 인스턴스 생성
app = FastAPI()


# req, res 로그찍는 미들웨어 추가
@app.middleware("http")
async def log_request(request, call_next):
    print(f"Request: {request.URL}")
    response = await call_next(request)
    print(f"Response: {response.URL}")
    return response


# Pydantic 모델 생성
class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


# 라우터 생성
# 라우터는 HTTP 메소드와 URL 경로에 대한 함수
@app.get("/")
def read_root():
    return {"Hello": "World"}  # JSON 형태로 반환


# 경로 Query 매개변수
# 경로 매개변수는 URL 경로에 있는 데이터를 가져옴
@app.get("/items/{item_id}")  # 경로 매개변수
def read_item(item_id: int, q: str = None):  # q는 선택적 매개변수
    return {"item_id": item_id, "q": q}  # JSON 형태로 반환


# 요청 Body
# 요청 Body는 POST, PUT, DELETE 등의 메소드로 전송된 데이터를 가져옴
@app.put("/items/{item_id}")  # PUT 메소드
def update_item(item_id: int, item: Item):  # Item 모델 사용
    return {"item_name": item.name, "item_id": item_id}  # JSON 형태로 반환

# 실행
# uvicorn main:app --reload
