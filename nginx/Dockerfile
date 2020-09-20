FROM nginx:latest
RUN apt-get update -y
RUN apt-get install vim -y

COPY /etc/letsencrypt/archive/chukduk.net/fullchain1.pem /etc/nginx/certs/fullchain.pem
COPY /etc/letsencrypt/archive/chukduk.net/privkey1.pem /etc/nginx/certs/privkey.pem

COPY ./static /var/www/html
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]