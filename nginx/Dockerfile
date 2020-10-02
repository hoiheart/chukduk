FROM nginx:latest
RUN apt-get update -y
RUN apt-get install vim -y

COPY ./static /var/www/html
# COPY ./cert /var/www/cert
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]