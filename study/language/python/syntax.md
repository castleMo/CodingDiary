# 문법

## 변수

```python
a = 1 # a는 변수, 1은 값
b = 2 # b는 변수, 2는 값

c = a + b

print(c)
```

## 조건문

```python
a = 1
b = 2

# if문
if a > b: # a가 b보다 크면
    print("a가 크다")
elif a < b: # a가 b보다 작으면
    print("b가 크다")
else:
    print("a와 b가 같다")
```

## 반복문

```python
# for 문
# range(시작, [끝], [증가값]) = 시작 부터 끝까지 증가값 만큼 증가 = [시작, ..., 끝]
for i in range(10): # 0부터 9까지
    print(i) # 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

## 매치문
매치문의 경우 python 3.10 이상에서 사용 가능하다.

```python
a = 1
b = 2

# match문 (python 3.10 이상, js의 switch문과 비슷)
match a, b: # a, b를 비교, switch(a, b)와 비슷
    case 1, 2: # a가 1이고 b가 2이면
        print("a가 1이고 b가 2이다")
    case 1, _: # _ = default
        print("a가 1이다")
    case _, 2: # _ = default
        print("b가 2이다")
    case _: # js의 default문과 비슷
        print("a와 b가 1과 2가 아니다")
```


## 함수

```python
# 함수 정의
def add(a, b): # a, b는 매개변수
    return a + b # a + b의 결과를 반환

print(add(1, 2))

def sub(a, b):
    return a - b

print(sub(1, 2))

def mul(a, b):
    return a * b

print(mul(1, 2))

def div(a, b):
    return a / b

print(div(1, 2))

def mod(a, b):
    return a % b

print(mod(1, 2))
```

## 클래스

```python
class Calculator: # Calculator 클래스 정의
    
    # static variable
    staticVar = 1 
    
    # constructor
    def __init__(self, a, b):
        self.a = a
        self.b = b

    # method
    def add(self):
        return self.a + self.b

    def sub(self):
        return self.a - self.b

    def mul(self):
        return self.a * self.b

    def div(self):
        return self.a / self.b

    def mod(self):
        return self.a % self.b

    def pow(self):
        return self.a ** self.b

class Calculator2(Calculator): # Calculator 클래스를 상속받는 Calculator2 클래스 정의

    # constructor
    def __init__(self, a, b):
        super().__init__(a, b) # super() = Calculator 클래스
        self.a = a
        self.b = b

    # method
    def add2(self):
        return self.a + self.b + 1
```

## 모듈

```python
import math # math 모듈 불러오기

print(math.pi) # math 모듈의 pi 변수 출력

print(math.pow(2, 3)) # math 모듈의 pow 함수 사용

```

## 파일 입출력

```python
# 파일 열기
f = open("test.txt", "w") # test.txt 파일을 쓰기 모드로 열기

# 파일 쓰기
f.write("Hello World") # test.txt 파일에 Hello World 쓰기

# 파일 닫기
f.close() # test.txt 파일 닫기

```

## Dictionary

```python
# Dictionary
# key-value pair

# dictionary 생성
d = {
    "a": 1,
    "b": 2,
    "c": 3
}

# key로 value 가져오기
print(d["a"]) # 1

# key로 value 변경
d["a"] = 4
print(d["a"]) # 4

# key-value 추가
d["d"] = 5
print(d["d"]) # 5

# key-value 삭제
del d["d"]
print(d) # {'a': 4, 'b': 2, 'c': 3}

# key-value 모두 삭제
d.clear()
print(d) # {}

# dictionary 삭제
del d
```

