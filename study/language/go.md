# [Go](https://go.dev/)

## Go 프로그래밍 언어의 특성
- Go는 전통적인 컴파일, 링크 모델을 따르는 범용 프로그램이 언어이다
- Go는 일차적으로 시스템 프로그래밍을 위해 개발되었으며, C++, Java, Python 의 장점들을 뽑아 만들어졌다
- C++와 같이 Go는 컴파일러를 통해 컴파일되며, 정적 타입(Statically Typed)의 언어이다
- Java 와 같이 Go는 Garbage Collection 기능을 제공한다
- Go 의 큰 특징으로 Go는 Communication Sequential Processes (CSP) 스타일의 Concurrent 프로그래밍을 지원한다

## 설치

### [Window](https://go.dev/dl/)

### Mac
homebrew
```shell
brew install go
```


## 변수
- 변수는 Go 키워드 <code>var</code>를 사용한다
- var 키워드 뒤에 변수명을 적고, 그 뒤에 변수타입을 적는다. (var [변수이름] [타입])
- 변수를 선언하면서 초기값을 지정하지 않으면, Go는 Zero Value를 기본적으로 할당한다. 
  - 숫자형에는 0
  - bool 타입에는 false
  - string 형에는 "" (빈문자열)을 할당한다.


```go
// a라는 정수(int) 변수 선언
var a int

// 변수 선언문에서 변수 초기값을 할당할 수도 있다. 
// 즉, float32 타입의 변수 f 에 11.0 이라는 초기값을 할당하기 위해서는 아래와 같이 쓸 수 있다.
var f float32 = 11.0

// 선언된 변수는 그 뒤의 문장에서 해당 변수 타입의 값을 할당할 수 있다
a = 10
f = 12.0

// 동일한 타입의 변수가 복수 개 있을 경우, 변수들을 나열하고 마지막에 타입을 한번만 지정할 수 있다.
var i, j, k int

// 복수 변수들이 선언된 상황에서 초기값을 지정할 수 있다. 초기값은 순서대로 변수에 할당된다.
var one, two, three int = 1, 2, 3

// Go 에서는 할당되는 값을 보고 그 타입을 추론하는 기능이 자주 사용된다
var vi = 1 // int 타입으로 추론 됨
var vs = "Hi" // string 타입으로 추론 됨

// 변수를 선언하는 또 다른 방식으로 Short Assignment Statement ( := ) 를 사용할 수 있다.
var basic = 1
short := 1
```



## 상수
- 상수는 Go 키워드 <code>const</code>를 사용한다
- const 키워드 뒤에 상수명을 적고, 그 뒤에 상수타입, 그리고 상수값을 할당한다. (const [변수이름] [타입] = [값])

```go
const i int = 10
const s string = "Hello"
const i2 = 10
const s2 = "World"

// 여러 개의 상수들 묶어서 지정할 수 있는데, 아래와 같이 괄호 안에 상수들을 나열하여 사용할 수 있다.
const (
  One = "One"
  Two = "Two"
  Three = "Three"
)
```


## 키워드 
- Go 프로그래밍 언어는 다음과 같은 25개의 예약 키워드들을 갖는다. 
- 이들 Go 키워드들은 변수명, 상수명, 함수명 등의 Identifier로 사용할 수 없다.

```go
break        default      func         interface    select
case         defer        go           map          struct
chan         else         goto         package      switch
const        fallthrough  if           range        type
continue     for          import       return       var
```

| break    | default     | func   | interface | select |
|----------|-------------|--------|-----------|--------|
| case     | defer       | go     | map       | struct |
| chan     | else        | goto   | package   | switch |
| const    | fallthrough | if     | range     | type   |
| continue | for         | import | return    | var    |


## 데이터 타입
1. bool 타입
2. string 타입
   - string은 한번 생성되면 수정될 수 없는 Immutable 타입
3. 정수형 타입
   - int
   - int8
   - int16
   - int32
   - int64
   - uint
   - uint8
   - uint16
   - uint32
   - uint64
   - uintptr
4. 소수 및 복소수 타입
   - float32
   - float64
   - complex64
   - complex128
5. 기타 타입

## 타입 변환 (Type Conversion)
```go
package main

func main() {
	var i int = 100
	var u uint = uint(i)
	var f float32 = float32(i)
	println(f, u) // +1.000000e+002 100

	str := "ABC"
	bytes := []byte(str)
	str2 := string(bytes)
	println(bytes, str2) // [3/32]0x14000068f38 ABC
}
```

## 포인터연산자
- 포인터연산자는 C++와 같이 & 혹은 * 을 사용하여 해당 변수의 주소를 얻어내거나 이를 반대로 Dereference 할 때 사용한다.
- Go 는 포인터연산자를 제공하지만 포인터 산술 즉 포인터에 더하고 빼는 기능은 제공하지 않는다.

```go
var k int = 10
var p = &k  //k의 주소를 할당
println(*p) //p가 가리키는 주소에 있는 실제 내용을 출력
```

## 조건문

### if
```go
// Go의 if 조건식은 ()로 감쌀 필요가 없으며 반드시 Boolean 값이어야 한다
// { 괄호는 반드시 if 문과 같은 라인에 있어야 한다
var is = true
if is { // 같은 라인
	
}

// ---------
	
// if 문에서 조건식을 사용하기 이전에 간단한 문장(Optional Statement)을 함께 실행할 수 있다
// 여기서 주의할 점은 이때 정의된 변수 num은 if문 블럭 (혹은 if-else 블럭 scope) 안에서만 사용할 수 있다
var max = 10;
var i = 1;
if num := i * 2; num < max {
	println(num)
}

// 아래 처럼 사용하면 Scope가 벗어나 에러 발생
num++
```

### switch
- 다른 언어들과 비슷하게 switch 문 뒤에 하나의 변수(혹은 Expression)를 지정하고, case 문에 해당 변수가 가질 수 있는 값들을 지정하여, 각 경우에 다른 문장 블럭들을 실행할 수 있다.
- 복수개의 case 값들이 있을 경우는 아래 예제에서 보듯이 case 3,4 처럼 콤마를 써서 나열할 수 있다.
```go
package main
 
func main() {
    var name string
    var category = 1
 
    switch category {
    case 1:
        name = "Paper Book"
    case 2:
        name = "eBook"
    case 3, 4:
        name = "Blog"
    default:
        name = "Other"
    }
    println(name)
     
    // Expression을 사용한 경우
    switch x := category << 2; x - 1 {
        //...
    }   
}
```
- switch 뒤에 expression이 없을 수 있음	
  - 다른 언어는 switch 키워드 뒤에 변수나 expression 반드시 두지만, Go는 이를 쓰지 않아도 된다. 이 경우 Go는 switch expression을 true로 생각하고 첫번째 case문으로 이동하여 검사한다 
- case문에 expression을 쓸 수 있음	
  - 다른 언어의 case문은 일반적으로 리터럴 값만을 갖지만, Go는 case문에 복잡한 expression을 가질 수 있다
- No default fall through	
  - 다른 언어의 case문은 break를 쓰지 않는 한 다음 case로 이동하지만, Go는 다음 case로 가지 않는다
- Type switch	
  - 다른 언어의 switch는 일반적으로 변수의 값을 기준으로 case로 분기하지만, Go는 그 변수의 Type에 따라 case로 분기할 수 있다

## 반복문

### 1. for
- Go 프로그래밍 언어에서는 반복문은 for 하나 뿐이다
- for루프는 <code>for 초기값; 조건식; 증감식 {...}</code>의 형식을 사용한다
  - 다른언어처럼 괄호를 사용하면 에러가 난다
```go
// 1부터 100까지 더하는 예제
package main

func main() {
   sum := 0
   
   for i := 1; i <= 100; i++ {
      sum += i
   }
   
   println(sum)
}
```

### 2. for - 무한 루프
- for 루프로 무한루프를 만들려면 "초기값; 조건식; 증감" 모두를 생략하면 된다.
```go
package main
 
func main() {
    for {
        println("Infinite loop")        
    }
}
```

### 3. for - 조건식만 쓰는 for
- Go에서 for 루프는 초기값과 증감식을 생략하고 조건식만을 사용할 수 있는데, 이는 마치 for 루프가 다른 언어의 while 루프와 같이 쓰이도록 한다
```go
package main
 
func main() {
    n := 1
    for n < 100 {
        n *= 2      
    }
    println(n)
}
```

### 4. for range
- for range 문은 컬렉션으로 부터 한 요소(element)씩 가져와 차례로 for 블럭의 문장들을 실행한다.
- for range 문은 "for 인덱스,요소값 := range 컬렉션" 같이 for 루프를 구성하는데, range 키워드 다음의 컬렉션으로부터 하나씩 요소를 리턴해서 그 요소의 위치인덱스와 값을 for 키워드 다음의 2개의 변수에 각각 할당한다.
```go
names := []string{"홍길동", "이순신", "강감찬"}
 
for index, name := range names {
    println(index, name)
}
```

## 함수
- Go에서 함수는 func 키워드를 사용하여 정의한다
- func 뒤에 함수명을 적고 괄호 ()안에 그 함수에 전달하는 파라미터들을 작성 한다
- 함수 파라미터는 0개 이상 사용할 수 있고, 각 파라미터는 파라미터명 뒤에 int, string 등의 파라미터 타입을 적어서 정의한다
- 함수의 리턴 타입은 파라미터 괄호 () 뒤에 작성한다
  - 리턴 값이 없으면 별도의 리턴타입을 정의하지 않아도 된다
```go
package main
func main() {
    msg := "Hello"
	num := 1
    say(msg)
	is := isOne(num)
	if is {
		println("num is 1")
    } else {
		println("num isn't 1")
    }
}
 
func say(msg string) {
    println(msg)
}

func isOne(num int) bool {
	return num == 1
}
```

### 1. Pass By Value & Pass By Reference
- Go에서 파라미터를 전달하는 방식은 크게 Pass By Value 와 Pass By Reference 로 나뉜다
```go
package main
func main() {
    msg := "Hello"
    say(&msg)
    println(msg) //변경된 메시지 출력
}
 
func say(msg *string) {
    println(*msg)
    *msg = "Changed" //메시지 변경
}
```

### 2. Variadic Function (가변인자함수)
- 함수에 고정된 수의 파라미터들을 전달하지 않고 다양한 숫자의 파라미터를 전달하고자 할 때 가변 파라미터를 나타내는 ...(3개의 마침표)을 사용한다
  - 즉 문자열 가변 파라미터를 나타내기 위해서 ...string과 같이 표현한다
- 가변 파라미터를 갖는 함수를 호출할 때는 0개, 1개 혹은 n개의 동일타입 파라미터를 전달할 수 있다.
- 이렇게 가변 파라미터를 받아들이는 함수를 Variadic Function(가변인자함수)라고 부른다
```go
package main
func main() {   
    say("This", "is", "a", "book")
    say("Hi")
}
 
func say(msg ...string) {
    for _, s := range msg {
        println(s)
    }
}
```

### 3. 함수 리턴값
- Go 프로그래밍 언어에서 함수는 리턴값이 없을 수도, 리턴갑싱 하나 일 수도, 또는 리턴값이 복수 개일 수 도 있다.
- Go 언어는 Named Return Parameter라는 기능을 제공한다
  - 리턴되는 값들을 (함수에 정의된) 리턴 파라미터들에 할당할 수 있는 기능이다
- 함수에서 리턴값이 있는 경우는 func 문의 (파라미터 괄호 다음) 마지막에 리턴값의 타입을 정의해준다
```go
package main


func main() {
    total1 := sum1(1, 7, 3, 5, 9) 
	count2, total2 := sum2(1, 7, 3, 5, 9) 
	count3, total3 := sum3(1, 7, 3, 5, 9) 
	println(total1) // 25
	println(count2, total2) // 5 25
	println(count3, total3) // 5 25
}

// 리턴값이 하나일때
func sum1(nums ...int) int {
    s := 0
    for _, n := range nums {
        s += n
    }
    return s
}

// 리턴값이 여러개일때
func sum2(nums ...int) (int, int) {
	s := 0      // 합계
	count := 0  // 요소 갯수
	for _, n := range nums {
		s += n
		count++
	}
	return count, s
}

// Named Return Parameter 사용시
/**
주의사항
1. 마지막에 return 문을 반드시 써주어야 한다 (생략시 에러 발생)
 */
func sum3(nums ...int) (count int, total int) {
	for _, n := range nums {
		total += n
	}
	count = len(nums)
	return
}
```

## 컬렉션
### 1. 배열 - (Zero based array)
- 배열의 선언은 <code>var 변수명 [배열크기] 데이터타입</code> 형태로 선언한다
```go
package main
 
func main() {
    var a [3]int  //정수형 3개 요소를 갖는 배열 a 선언
    a[0] = 1
    a[1] = 2
    a[2] = 3
    println(a[1]) // 2 출력
	
	// 배열의 초기화
	var a1 = [3]int{1, 2, 3}
	var a3 = [...]int{1, 2, 3} // 배열크기 자동으로
	
	// 다차원 배열
	var multiArray = [2][3]int{
		{1, 2, 3},
		{4, 5, 6},
    } // 정의 및 초기화
	multiArray[0][1] = 10
}
```

### 2. Slice


### 3. Map



[참고](http://golang.site/go/article/1-Go-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%96%B8%EC%96%B4-%EC%86%8C%EA%B0%9C)