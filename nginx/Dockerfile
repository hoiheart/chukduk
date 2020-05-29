FROM nginx:latest

COPY ./html /var/www/html
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]