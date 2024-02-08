# [Requests](https://requests.readthedocs.io/en/latest/)

## Requests란?

- Requests는 Python에서 제공하는 HTTP 라이브러리이다.
- 웹 서버와 통신하여 데이터를 요청하고 응답을 받는 작업을 간편하게 수행할 수 있도록 도준다
- 웹 스크래핑, 웹 API 호출, 웹 페이지 테스트 등 다양한 웹 관련 작업을 수행할 수 있다

## Requests 설치

```bash
pip install requests
```

## Requests 사용법

```python
import requests

# GET 요청
response = requests.get('https://api.github.com')
print(response.status_code)  # 200
print(response.text)  # 응답 데이터

r_post = requests.post('https://httpbin.org/post', data={'key': 'value'})
r_put = requests.put('https://httpbin.org/put', data={'key': 'value'})
r_delete = requests.delete('https://httpbin.org/delete')
r_head = requests.head('https://httpbin.org/get')
r_options = requests.options('https://httpbin.org/get')

# URL 매개변수 전달
payload = {'key1': 'value1', 'key2': 'value2'}
r_url_params = requests.get('https://httpbin.org/get', params=payload)

# JSON 응답 다루기
r_json = requests.get('https://api.github.com/events')
print(r_json.json())

# HTTP 헤더
r_headers = requests.get('https://api.github.com', headers={'user-agent': 'my-app/0.0.1'})


# 세션 사용
s = requests.session()
s.get('https://httpbin.org/cookies/set/sessioncookie/123456789')
r_session = s.get('https://httpbin.org/cookies')
print(r_session.text)
s.close()

```

## Requests 주요 메소드

- `requests.get(url, params=None, **kwargs)`: GET 요청
- `requests.post(url, data=None, json=None, **kwargs)`: POST 요청
- `requests.put(url, data=None, **kwargs)`: PUT 요청
- `requests.delete(url, **kwargs)`: DELETE 요청
- `requests.head(url, **kwargs)`: HEAD 요청
- `requests.options(url, **kwargs)`: OPTIONS 요청
- `requests.session()`: 세션 생성

## Response 객체

- `response.status_code`: HTTP 응답 코드
- `response.text`: 응답 데이터
- `response.json()`: JSON 응답 데이터
- `response.headers`: 응답 헤더
- `response.url`: 요청 URL
- `response.cookies`: response 쿠키
- `response.history`: history 배열