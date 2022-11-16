# MySQL

## 문자열 Split 하기
- MYSQL에서는 SPLIT 함수가 없다
- SUBSTRING_INDEX 함수를 사용해서 SPLIT 기능을 구현할 수 있다
- 문자열을 시작 or 끝부터 index번째 구분자까지 자르는 것입니다.


| Data        |
|-------------|
| a@gmail.com |
| b@naver.com |
| 1-2-3-4     |


```sql
SUBSTRING_INDEX('a@gmail.com', '@', 1)
// a

SUBSTRING_INDEX('b@naver.com', '@', -1)
// naver.com 

SUBSTRING_INDEX('1-2-3-4', '-', 1)
// 1

SUBSTRING_INDEX('1-2-3-4', '-', 3)
// 1-2-3

SUBSTRING_INDEX('1-2-3-4', '-', -1)
// 4

SUBSTRING_INDEX('1-2-3-4', '-', -3)
// 2-3-4

SUBSTRING_INDEX(SUBSTRING_INDEX('1-2-3-4', '-', -3), '-', 1)
// 2
```



































