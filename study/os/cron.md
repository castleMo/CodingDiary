# Cron

## cron 이란?
- Unix 계열 컴퓨터 운영 체제의 시간 기반 Job 스케줄러이다
- 소프트웨어 환경을 설정하고 관리하는 사람들은 작업을 고정된 시간, 날짜, 간격에 
  주기적으로 실행할 수 있도록 스케줄링하기 위해 cron을 사용한다



## cron 문법
```text
┌───────────── min (0 - 59)
│ ┌────────────── hour (0 - 23)
│ │ ┌─────────────── day of month (1 - 31)
│ │ │ ┌──────────────── month (1 - 12)
│ │ │ │ ┌───────────────── day of week (0 - 6) (0 to 6 are Sunday to Saturday, or use names; 7 is Sunday, the same as 0)
│ │ │ │ │
│ │ │ │ │
* * * * *  command to execute
```


## crontab 명령어
```shell
crontab -e
> crontab 생성?

crontab -l
> crontab 리스트 보기

crontab -r
> crontab 삭제
```


## 깨알 지식
- crontab (cron table)