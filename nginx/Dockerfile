FROM nginx:latest
RUN apt-get update -y
RUN apt-get install vim -y

COPY ./static /var/www/html
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]