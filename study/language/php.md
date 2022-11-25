****# Hello PHP...

<details>
<summary>javascript</summary>

```javascript
```
<br />

</details>


### 변수 선언
<details>
<summary>javascript</summary>

```javascript
const var1 = '변수1';
let var2 = '변수2';
```
<br />

</details>

```php
<?php
$var1 = '변수1';
$var2 = '변수2';
$Var = '변수3';

echo "$var1, $var1, $Var"; // 결과: "변수1, 변수2"
?>
```

### 객체 변수에 스트링으로 접근하기
<details>
<summary>javascript</summary>

```javascript
class Foo {
    bar = 'I am bar.';
    arr = ['I am A.', 'I am B.', 'I am C.'];
    r   = 'I am r.'; 
}

const foo = new Foo();
const bar = 'bar';
const baz = ['foo', 'bar', 'baz', 'quux'];
console.log(foo[bar]); // I am bar.
console.log(foo[baz[1]]); // I am bar.

const start = 'b';
const end = 'ar';
console.log(foo[`${start}${end}`]); // I am bar.

const arr = 'arr';
console.log(foo[arr[1]]); // I am r.
```
<br />

</details>

```php
<?php
class foo {
    var $bar = 'I am bar.';
    var $arr = array('I am A.', 'I am B.', 'I am C.');
    var $r   = 'I am r.';
}

$foo = new foo();
$bar = 'bar';
$baz = array('foo', 'bar', 'baz', 'quux');
echo $foo->$bar . "\n"; // I am bar.
echo $foo->{$baz[1]} . "\n"; // I am bar.

$start = 'b';
$end   = 'ar';
echo $foo->{$start . $end} . "\n"; // I am bar.

$arr = 'arr';
echo $foo->{$arr[1]} . "\n"; // I am r.
?>
```

### 배열 선언
- 부동소수점은 정수로 변환됨 (1.1 = 1, 8.7 = 8)
- Boolean 값은 정수로 변환됨 (true = 1, false = 0)
<details>
<summary>javascript</summary>

```javascript
const arr = [1,2,3];
```
<br />

</details>

```php
<?php
$array = array(
    "foo" => "bar",
    "bar" => "foo",
);

// Using the short array syntax
$array = [
    "foo" => "bar",
    "bar" => "foo",
];
?>
```

```php
<?php
$array = array("foo", "bar", "hello", "world");
var_dump($array);
?>

// 결과
array(4) {
  [0]=>
  string(3) "foo"
  [1]=>
  string(3) "bar"
  [2]=>
  string(5) "hello"
  [3]=>
  string(5) "world"
}
```

```php
<?php
$array = array(
    1    => 'a',
    '1'  => 'b', // the value "a" will be overwritten by "b"
    1.5  => 'c', // the value "b" will be overwritten by "c"
    -1 => 'd',
    '01'  => 'e', // as this is not an integer string it will NOT override the key for 1
    '1.5' => 'f', // as this is not an integer string it will NOT override the key for 1
    true => 'g', // the value "c" will be overwritten by "g"
    false => 'h',
    '' => 'i',
    null => 'j', // the value "i" will be overwritten by "j"
    'k', // value "k" is assigned the key 2. This is because the largest integer key before that was 1
    2 => 'l', // the value "k" will be overwritten by "l"
);

var_dump($array);
?>

// 결과
array(7) {
  [1]=>
  string(1) "g"
  [-1]=>
  string(1) "d"
  ["01"]=>
  string(1) "e"
  ["1.5"]=>
  string(1) "f"
  [0]=>
  string(1) "h"
  [""]=>
  string(1) "j"
  [2]=>
  string(1) "l"
}
```

### 상수
<details>
<summary>javascript</summary>

```javascript
const constant = 'Constant';
```
<br />

</details>


```php
<?php
define("CONSTANT", "Hello world.");
echo CONSTANT; // outputs "Hello world."
echo Constant; // Emits an Error: Undefined constant "Constant"
               // Prior to PHP 8.0.0, outputs "Constant" and issues a warning.
?>
```
```php
<?php
// Simple scalar value
const CONSTANT = 'Hello World';

echo CONSTANT;

// Scalar expression
const ANOTHER_CONST = CONSTANT.'; Goodbye World';
echo ANOTHER_CONST;

const ANIMALS = array('dog', 'cat', 'bird');
echo ANIMALS[1]; // outputs "cat"

// Constant arrays
define('ANIMALS', array(
    'dog',
    'cat',
    'bird'
));
echo ANIMALS[1]; // outputs "cat"
?>
```










