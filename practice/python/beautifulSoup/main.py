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