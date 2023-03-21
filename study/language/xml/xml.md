# XML (Extensible Markup Language)

## XML 구성
- root
- element
- attribute
- text

### 예제
```xml
<?xml version="1.0" encoding="UTF-8"?>
<rootElement>
  <element attribute="attribute">text</element>
  <parent>
    <child>child</child>
  </parent>
</rootElement>
```


## XML Schema 란?
- XML 스키마는 XML 파일의 구조에 대한 몇 가지 규칙이나 제한을 설명하는 문서입니다. 
- 다음과 같은 여러 가지 방법으로 이러한 제약 조건을 설명할 수 있습니다.
  - 요소의 순서를 결정하는 문법 규칙
  - 콘텐츠가 충족해야 하는 예 또는 아니요 조건
  - XML 파일의 콘텐츠에 대한 데이터 유형
  - 데이터 무결성에 대한 제약 조건

## namespace 란?
- XML 요소 간의 이름에 대한 충돌을 방지해 주는 방법
- 요소의 이름과 속성의 이름을 하나의 그룹으로 묶어주어 이름에 대한 충돌을 해결 함
- URI(Uniform Resource Identifiers)로 식별됨

> 예제
```xml
<root>

    <a:body xmlns:a="https://www.w3.org/TR/html5/">

        <a:h1>html에서의 제목</a:h1>

        <a:p>html에서의 단락</a:p>

    </a:body>

    <b:body xmlns:b="http://codingsam.com/xml/physical/">

        <b:arm>70</b:arm>

        <b:leg>110</b:leg>

    </b:body>

</root>
```


### namespace 선언
- namespace를 선언하는 문법은 xmlns나 xmlns:로 시작함
- namespace가 선언되면 해당 요소의 모든 자식(child) 요소에도 같은 네임스페이스가 선언 됨
- namespace 선언은 XML 루트(root) 요소에서도 선언할 수 있다

> 예제
```xml
<root

    xmlns:a="https://www.w3.org/TR/html5/"

    xmlns:b="http://codingsam.com/xml/physical/">

    <a:body>

        <a:h1>html에서의 제목</a:h1>

        <a:p>html에서의 단락</a:p>

    </a:body>

    <b:body>

        <b:arm>70</b:arm>

        <b:leg>110</b:leg>

    </b:body>

</root>
```

### URI(Uniform Resource Identifiers)
- URI란 통합 자원 식별자를 의미함
- 인터넷에 있는 자원을 타나내는 유일한 주소를 의미
- URI의 존재는 인터넷에서 요구되는 기본조건으로서 인터넷 프로토콜에도 항상 명시됨
> 가장 잘 알려진 URI로는 인터넷 도메인 주소를 나타내는 URL(Uniform Resource Locator)이 있음


## XSD (XML Schema Definition) 란?
- XML 스키마 정의를 의미함
- XML 문서의 구조 및 해당 문서가 포함할 수 있는 적법한 요소와 속성을 명시
- XML에서 스키마를 정의할 때는 XSD 뿐만 아니라 DTD 를 사용할 수도 있음


### XSD 특징
1. namespace 를 지원함
2. XML 문법으로 작성할 수 있어 재사용과 확징이 쉬움
3. 정수, 문자열 등의 다양한 타입을 지원






















