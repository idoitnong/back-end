# back-end

# 프로젝트 환경 변수

이 프로젝트를 실행하기 위해 필요한 환경 변수 목록입니다. 해당 변수들은 루트 디렉토리의 `.env` 파일에 설정되어야 합니다.

## 환경 변수 목록

- **`DB_HOST`**: 데이터베이스의 HOST

- **`DB_USERNAME`**: 데이터베이스의 USERNAME

- **`DB_PASSWORD`**: 데이터베이스의 PASSWORD

- **`DB_PORT`**: 데이터베이스의 PORT

- **`DB_NAME`**: 데이터베이스의 NAME(프로덕션용)

- **`DB_NAME_DEV`**: 데이터베이스의 NAME(개발용)

- **`CORS_WHITE_LIST`**: CORS 화이트리스트

## 사용 방법

1. 프로젝트 루트 디렉토리에 `.env` 파일을 생성합니다.

2. `.env` 파일에 필요한 환경 변수를 설정합니다. 예:

   ```env
   DB_HOST=localhost
   DB_USERNAME=root
   DB_PASSWORD=root
   DB_PORT=3306
   DB_NAME=idoitnong
   DB_NAME_DEV=idoitnong_dev
   CORS_WHITE_LIST=["https://example.idsan.net", "http://localhost:5173"]
   ```
