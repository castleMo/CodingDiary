# 문법

- [네이밍 컨벤션](https://peps.python.org/pep-0008/)

## 변수

```python
a = 1 # a는 변수, 1은 값
b = 2.1 # b는 변수, 2.1는 값
c = "Hello World" # c는 변수, "Hello World"는 값
d = True # d는 변수, True는 값
e = False # e는 변수, False는 값
f = None # f는 변수, None은 값

my_list = [1, 2, 3] # my_list는 변수, [1, 2, 3]은 값
my_tuple = (1, 2, 3) # my_tuple은 변수, (1, 2, 3)은 값
my_set = {1, 2, 3} # my_set은 변수, {1, 2, 3}은 값
my_dict = {"a": 1, "b": 2, "c": 3} # my_dict는 변수, {"a": 1, "b": 2, "c": 3}은 값
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

# while 문
i = 0
while i < 10: # i가 10보다 작으면
    print(i) # 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    i += 1 # i = i + 1
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
    
calc = Calculator(1, 2) # Calculator 클래스의 인스턴스 생성
calc.add() # 3

class Calculator2(Calculator): # Calculator 클래스를 상속받는 Calculator2 클래스 정의

    # constructor
    def __init__(self, a, b):
        super().__init__(a, b) # super() = Calculator 클래스
        self.a = a
        self.b = b

    # method
    def add2(self):
        return self.a + self.b + 1

# Class Method
# 클래스 변수를 사용할 때 사용

class MyClass:
    staticVar = 1

    @classmethod
    def add(cls, a, b):
        return a + b + cls.staticVar

print(MyClass.add(1, 2)) # 4

# Dataclass
# 데이터 클래스를 정의할 때 사용

from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int
    
p = Point(1, 2)

print(p) # Point(x=1, y=2)
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

## 예외처리

```python

try:
    a = 1 / 0
except ZeroDivisionError as e:
    print(e) # division by zero
finally:
    print("finally") # finally

```

## 람다

```python

# lambda
# lambda arguments: expression

add = lambda a, b: a + b

print(add(1, 2)) # 3

```

## List Comprehension

```python

# List Comprehension
# [expression for item in iterable]

a = [1, 2, 3, 4, 5]

b = [i * 2 for i in a]

print(b) # [2, 4, 6, 8, 10]

# List Comprehension with if
# [expression for item in iterable if condition]

c = [i * 2 for i in a if i % 2 == 0]

print(c) # [4, 8]

```

## Generator

```python

# Generator Comprehension
# (expression for item in iterable)

a = [1, 2, 3, 4, 5]

b = (i * 2 for i in a)

print(b) # <generator object <genexpr> at 0x7f8e3c3e3f90>

print(next(b)) # 2
print(next(b)) # 4
print(next(b)) # 6
print(next(b)) # 8
print(next(b)) # 10


def gen():
    yield 1
    yield 2
    yield 3

c = gen()

print(next(c)) # 1
print(next(c)) # 2
print(next(c)) # 3

```

# Decorator

```python

# Decorator
# 함수를 수정하지 않고 기능을 추가할 때 사용

def decorator(func):
    def wrapper():
        print("before")
        func()
        print("after")
    return wrapper

@decorator
def hello():
    print("hello")

hello()
# before
# hello
# after

```

## Context Manager

```python

# Context Manager
# with문을 사용할 때 사용

class MyContextManager:
    def __enter__(self):
        print("enter")
        return self
    def __exit__(self, exc_type, exc_value, traceback):
        print("exit")

with MyContextManager() as m:
    print("hello")
# enter
# hello
# exit

```

## Type Hint

```python

# Type Hint
# 변수의 타입을 명시할 때 사용

def add(a: int, b: int) -> int:
    return a + b
    
print(add(1, 2)) # 3
    
```

## Enum

```python

# Enum
# 상수를 정의할 때 사용

from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3
    
print(Color.RED) # Color.RED
print(Color.RED.value) # 1

```

## *args, **kwargs

```python

# *args
# 가변인자

def add(*args):
    return sum(args)
    
print(add(1, 2, 3, 4, 5)) # 15

# **kwargs
# 키워드 가변인자

def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
        
print_kwargs(a=1, b=2, c=3)
# a: 1
# b: 2
# c: 3

```


## Reference

- [Python 공식 문서](https://docs.python.org/3/)

---

# 유틸함수

## Partial

```python

# Partial
# 함수의 일부 인자를 고정할 때 사용

from functools import partial

def add(a, b):
    return a + b
    
add_1 = partial(add, 1)

print(add_1(2)) # 3

```

## Map, Filter, Reduce

```python

# Map
# 리스트의 모든 요소에 함수를 적용할 때 사용

a = [1, 2, 3, 4, 5]

b = list(map(lambda x: x * 2, a))

print(b) # [2, 4, 6, 8, 10]

# Filter

c = list(filter(lambda x: x % 2 == 0, a))

print(c) # [2, 4]

# Reduce

from functools import reduce

d = reduce(lambda x, y: x + y, a)

print(d) # 15

```

## Zip

```python

# Zip
# 두 개 이상의 리스트를 합칠 때 사용

a = [1, 2, 3]
b = [4, 5, 6]

c = list(zip(a, b))

print(c) # [(1, 4), (2, 5), (3, 6)]

```