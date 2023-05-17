http://taewan.kim/post/ssh_config/
https://blog.naver.com/PostView.nhn?blogId=nttkak&logNo=20130246586&categoryNo=19&viewDate=%C2%A4tPage=1&listtype=0

ㄴ 정리하자

## known_hosts란
- client node 에서 ssh 를 사용하여 server node 로 접속할 때, server node 의 공개 키가 client node 의 `~/.ssh/known_hosts` 파일에 저장됨
- known_hosts 파일에 server node 의 공개 키가 저장되어 있다면, server node 에 대한 검증없이 접속이 가능해짐