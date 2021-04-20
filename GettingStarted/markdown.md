# MarkDown Getting Started

## 목록
- [제목](https://github.com/castleMo/CodingDiary/blob/master/GettingStarted/markdown.md#1-%EC%A0%9C%EB%AA%A9header)
- 문단 줄바꿈
- 글자체
- 블럭 인용
- 코드
- 웹사이트 링크
- 이미지
- 가로줄
- 목록
- 테이블

## MarkDown 이란?

> 마크다운 (Markdown)은 [마크업 언어](https://namu.wiki/w/%EB%A7%88%ED%81%AC%EC%97%85%20%EC%96%B8%EC%96%B4 "나무위키 마크업언어 링크") 의 일종으로, 존 그루버(John Gruber)와 아론 스워츠(Aaron Swartz)가 만들었다.
> 
> 온갖 태그로 범벅된 HTML 문서 등과 달리, 읽기도 쓰기도 쉬운 문서 양식을 지향한다.
> 
> 그루버는 마크다운으로 작성한 문서를 HTML로 변환하는 [펄(Perl)](https://namu.wiki/w/Perl "나무이키 펄 링크") 스크립트도 만들었다.
> 
> 확장자는 .md 또는 .markdown을 쓰지만, 전자가 압도적으로 많이 쓰인다.
>  
> 출처 [[나무위키](https://namu.wiki/w/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4 "나무위키 마크다운 링크")]


## MarkDown 사용법
### 1. 제목(Header)

```
# 제목1 : HTML의 <h1> 태그

## 제목2 : HTML의 <h2> 태그

### 제목3 : HTML의 <h3> 태그

#### 제목4 : HTML의 <h4> 태그

##### 제목5 : HTML의 <h5> 태그

###### 제목6 : HTML의 <h6> 태그

제목A
=====

제목B
-----
```

# 제목1-1
## 제목 2-1
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6
제목A
=====
제목B
-----

-------

### 2. 문단 줄바꿈

```
방법1: 줄 끝에 공백(spacebar)을 두칸 넣음
ex) 방법1의 문장입니다
    방법1의 문장입니다
방법2: 줄 끝에 역슬래기(\)를 넣음
ex) 방법2의 문장입니다\
    방법2의 문장입니다
방법3: 문장과 문장사이에 엔터키 2번 넣음
ex) 방법3의 문장입니다

    방법3의 문장입니다
```

방법1의 문장입니다  
방법1의 문장입니다
 
방법2의 문장입니다\
방법2의 문장입니다

방법3의 문장입니다

방법3의 문장입니다

-------

### 3. 글자체

```
일반, *이탤릭*, _이탤릭_
일반, **볼드**, __볼드__
일반, _**이탤릭+볼드**_, *__이탤릭+볼드__*, ***이탤릭+볼드***, ___이탤릭+볼드___
```

> 일반, *이탤릭*, _이탤릭_
> 
> 일반, **볼드**, __볼드__
> 
> 일반, _**이탤릭+볼드**_, *__이탤릭+볼드__*, ***이탤릭+볼드***, ___이탤릭+볼드___

-------

### 4. 블럭 인용

```
> 블럭1
>> 블럭2
>>> 블럭3
```    

> 블럭1
>> 블럭2
>>> 블럭3

-------

### 5. 코드

```angular2html
방법1: 글 중간에 코드삽입
ex) javascript로 Hello world 출력방법은 `console.log('Hello world!');`입니다.
방법2: 첫부분에 공백 4칸(spacebar 4번 또는 tab 1번) 띄우기
ex)    console.log('Hello world!');
방법3: 처음과 마지막에 ``` 또는 ~~~ 넣기
ex) ```[javascript]
    console.log('Hello world!');
    ```
```


javascript로 Hello world 출력방법은 `console.log('Hello world!')`입니다.

    console.log('Hello world!');

```javascript
console.log('Hello world!');
```

-------

### 6. 웹사이트 링크
    
```
방법1: [링크명](link)
ex) [Google](https://www.google.com)
방법2: [링크명](link "사이트명")
ex) [GitHub](https://github.com "Github사이트")
```

[Google](https://www.google.com)

[GitHub](https://github.com "Github사이트")

-------

### 7. 이미지

```
방법1: 이미지만 띄울때 ![이미지 이름](이미지 URL)
ex) ![구글 로고](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)
방법2: 이미지에 링크를 달고싶을때 [![이미지 이름]](이미지 URL)
ex) [![구글 로고](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)](https://www.google.com)
```

![구글 로고](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)

[![구글 로고](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)](https://www.google.com)

-------

### 8. 가로줄
```
* * *
***
*****
- - -
------------
```


* * *
***
*****
- - -
------------

### 9. 목록
```
1. 목록1
    2. 목록2
        3. 목록3

+ 목록A
    + 목록B
        + 목록C

- 목록a
    - 목록b
        - 목록c

- 목록I
    * 목록II
        + 목록III
```

1. 목록1
2. 목록2
    3. 목록3

+ 목록A
    + 목록B
        + 목록C

- 목록a
    - 목록b
        - 목록c

- 목록I
  * 목록II
    + 목록III

-------

### 10. 테이블

```
기본적인 테이블
| 제목 | 내용 | 설명 |
| --- | --- | ---  |
| 제목1 | 내용1 | 설명1 | 
| 제목2 | 내용2 | 설명2 |
| 제목3 | 내용3 | 설명3 |

확장
| 제목 | 내용 | 설명 |
| --- | --- | ---  |
| | 내용을 길게적을시 확장됨 | |

| 제목 | 내용 | 설명 |
| --- | --- | ---  |
| |  | 내용을 길게적을시 확장됨 |

정렬
| 제목 | 내용 | 설명 |
| :--- | ---: | :---: |
| 내용을 길게적을시 확장됨 | 내용을 길게적을시 확장됨 | 내용을 길게적을시 확장됨 |
| 왼쪽 정렬됨 | | |
| | 오른쪽 정렬 | |
| | | 중앙 정렬됨 |

```


| 제목 | 내용 | 설명 |
| --- | --- | ---  |
| 제목1 | 내용1 | 설명1 | 
| 제목2 | 내용2 | 설명2 |
| 제목3 | 내용3 | 설명3 |

| 제목 | 내용 | 설명 |
| --- | --- | ---  |
| | 내용을 길게적을시 확장됨 | |

| 제목 | 내용 | 설명 |
| --- | --- | ---  |
| | | 내용을 길게적을시 확장됨 |

| 제목 | 내용 | 설명 |
| :--- | ---: | :---: |
| 내용을 길게적을시 확장됨 | 내용을 길게적을시 확장됨 | 내용을 길게적을시 확장됨 |
| 왼쪽 정렬됨 | | |
| | 오른쪽 정렬 | |
| | | 중앙 정렬됨 |


*Created on 2021/04/20*
