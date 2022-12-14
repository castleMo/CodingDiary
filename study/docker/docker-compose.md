# Docker Compose

## CLI
```shell
docker-compose up -d // 도커 백그라운드 실행

docker-compose up --force-recreate // 도커 컨테이너 새로 만들기

docker-compose up --build // 도커 이미지 빌드 후 compose up

docker-compose start // 정지한 컨테이너를 시작
docker-compose start mysql // mysql 컨테이너만 시작

docker-compose restart // 이미 실행 중인 컨테이너 다시 시작
docker-compose restart redis // 이미 실행중인 redis 재시작

docker-compose stop // gracefully stop함.
docker-compose stop wordpress

docker-compose down // stop 뿐만 아니라 컨테이너 삭제까지

docker-compose logs
docker-compose logs -f // 로그 watching

docker-compose ps // 컨테이너 목록

docker-compose exec [컨테이너] [명령어]
docker-compose exec wordpress bash // wordpress에서 bash 명령어 실행

docker-compose build // build 부분에 정의된 대로 빌드
docker-compose build wordpress // wordpess 컨테이너만 빌드

docker-compose run [service] [command] // 이미 docker-compose 가동 중인 것과 별개로 하나 더 올릴 때
docker-compose run nginx bash
```