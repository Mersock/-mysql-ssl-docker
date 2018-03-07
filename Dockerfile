FROM mysql/mysql-server:5.7

RUN mkdir -p /etc/certs
COPY certs/*.pem /etc/certs/
COPY my.cnf /etc/

ENV MYSQL_ROOT_HOST='172.%.%.%'
ENV MYSQL_ROOT_PASSWORD=passw0rd

VOLUME /var/lib/mysql

EXPOSE 3306 33060
CMD ["mysqld"]
