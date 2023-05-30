# [Gradle](https://docs.gradle.org/current/userguide/userguide.html)

## Gradle 이란?


## Plugin
- plugin 이란 Gradle Task의 집합이다


## build.gradle
### 프로퍼티
- build.gradle에는 Project 객체를 위한 프로퍼티를 정의할 수 있다

#### 프로퍼티 재정의하기
```groovy
project.[프로퍼티명] = [값]
Or
[프로퍼티명] = [값]

예시
group = 'com.example1'
project.group = 'com.example2'

println group // com.example2
```

#### 커스텀 프로퍼티
커스텀 프로퍼티를 만들기 위해서는 project 객체의 extension 에 넣어 사용한다
```groovy
project.ext.[프로퍼티명] = [값]
ext {
  [프로퍼티명] = [값]
}
```