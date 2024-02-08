# [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)

## BeautifulSoup이란
- HTMl과 XML 문서를 파싱하고, 데이터를 추출하기 위한 파이썬 라이브러리이다
- 문서를 탐색하고 원하는 요소를 찾기 위해 간편하고 직관적인 API를 제공한다


## BeautifulSoup 설치
```bash
pip install beautifulsoup4
```

## BeautifulSoup 객체 종류
- `Tag`: HTML 태그
  - `name`: 태그 이름
  - `attrs`: 태그 속성
- `NavigableString`: 태그 내부의 텍스트
- `BeautifulSoup`: HTML 문서 전체
- `Comment`: HTML 주석

### HTML 태그 종류
- `Stylesheet`: CSS 스타일시트
- `Script`: JavaScript 코드
- `Template`: HTML 템플릿

### XML 태그 종류
- `ProcessingInstruction`: XML 처리 명령
- `Declaration`: XML 선언
- `Doctype`: XML 문서 유형 선언
- `CData`: XML CDATA 섹션

## BeautifulSoup 사용법
```python
from bs4 import BeautifulSoup

html = """
<html>
    <head>
        <title>웹 페이지 제목</title>
    </head>
    <body>
        <h1>웹 페이지 내용</h1>
        <p>첫 번째 문단입니다.</p>
        <p>두 번째 문단입니다.</p>
    </body>
</html>
"""

soup = BeautifulSoup(html, 'html.parser')

# 웹 페이지 제목
print(soup.title) # <title>웹 페이지 제목</title>

# 웹 페이지 내용
print(soup.h1) # <h1>웹 페이지 내용</h1>

# 첫 번째 문단
print(soup.p) # <p>첫 번째 문단입니다.</p>

# 두 번째 문단
print(soup.p.next_sibling.next_sibling) # <p>두 번째 문단입니다.</p>

# 웹 페이지 내용 전체
print(soup.prettify())
# <html>
#  <head>
#   <title>
#    웹 페이지 제목
#   </title>
#  </head>
#  <body>
#   <h1>
#    웹 페이지 내용
#   </h1>
#   <p>
#    첫 번째 문단입니다.
#   </p>
#   <p>
#    두 번째 문단입니다.
#   </p>
#  </body>
# </html>
```

## BeautifulSoup 메소드
- `find()`: 첫 번째로 일치하는 태그를 찾는다
- `find_all()`: 일치하는 모든 태그를 찾는다
- `select()`: CSS 선택자를 사용하여 태그를 찾는다
- `get_text()`: 태그 내부의 텍스트를 추출한다
- `prettify()`: 들여쓰기를 사용하여 태그를 출력한다
- `parent`: 부모 태그를 찾는다
- `children`: 자식 태그를 찾는다
- `next_sibling`: 다음 형제 태그를 찾는다
- `previous_sibling`: 이전 형제 태그를 찾는다
- `next_element`: 다음 요소를 찾는다
- `previous_element`: 이전 요소를 찾는다
- `get()`: 태그의 속성을 찾는다
- `has_attr()`: 태그가 속성을 가지고 있는지 확인한다
- `decompose()`: 태그를 제거한다
- `extract()`: 태그를 제거하고 반환한다
- `replace_with()`: 태그를 다른 태그로 교체한다
- `wrap()`: 태그를 다른 태그로 감싼다
- `append()`: 태그를 추가한다
- `insert()`: 태그를 삽입한다
- `clear()`: 태그의 내용을 제거한다
- `string`: 태그 내부의 텍스트를 찾는다
- `strings`: 태그 내부의 모든 텍스트를 찾는다
- `stripped_strings`: 태그 내부의 모든 텍스트를 찾고, 공백을 제거한다
- `descendants`: 태그의 모든 하위 태그를 찾는다
- `find_parent()`: 부모 태그를 찾는다
- `find_parents()`: 모든 부모 태그를 찾는다
- `find_next_sibling()`: 다음 형제 태그를 찾는다
- `find_next_siblings()`: 모든 다음 형제 태그를 찾는다
- `find_previous_sibling()`: 이전 형제 태그를 찾는다
- `find_previous_siblings()`: 모든 이전 형제 태그를 찾는다
- `find_next()`: 다음 태그를 찾는다
- `find_all_next()`: 모든 다음 태그를 찾는다
- `find_previous()`: 이전 태그를 찾는다
- `find_all_previous()`: 모든 이전 태그를 찾는다
- `find_all_next()`: 모든 다음 태그를 찾는다
