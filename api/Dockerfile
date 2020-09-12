FROM node:14-alpine

# 포트 바인딩
EXPOSE 3001

# ENV
ARG MONGODB_HOST
ARG MONGODB_USER
ARG MONGODB_PASS
ARG MONGODB_DATABASE
ARG SCHEDULE_WORLD
ARG SCHEDULE_KOREA
ENV MONGODB_HOST=${MONGODB_HOST}
ENV MONGODB_USER=${MONGODB_USER}
ENV MONGODB_PASS=${MONGODB_PASS}
ENV MONGODB_DATABASE=${MONGODB_DATABASE}
ENV SCHEDULE_WORLD=${SCHEDULE_WORLD}
ENV SCHEDULE_KOREA=${SCHEDULE_KOREA}

# 앱 디렉터리 생성
WORKDIR /usr/api

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./

# RUN npm install
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production
RUN npm i typescript pm2 -g
RUN npm ci

# 앱 소스 추가
COPY . .

# 빌드
RUN npm run build

# CMD 구동
CMD npm run pm2