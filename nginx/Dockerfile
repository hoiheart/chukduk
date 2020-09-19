FROM nginx:latest

COPY ./static /var/www/html
COPY ./cert /var/www/cert
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]