FROM mariadb:10.5

LABEL maintainer="Alberto Gonzalez tokicross05@gmail.com"
LABEL org.label-schema.name="tokibd"

# Configuración de MariaDB
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=tokibd
ENV MYSQL_USER=desa
ENV MYSQL_PASSWORD=rrollo


# Copia el archivo .sql al directorio de trabajo del contenedor (No consigo que copie el script desde Dockerfile)
# COPY genera_bd.sql /docker-entrypoint-initdb.d/

# Establece una carpeta dentro del contenedor como directorio de trabajo
WORKDIR /app

# Ejecuta el script sql al arrancar el contenedor (No consigo que copie el script desde Dockerfile)
# CMD ["mysql", "-u", "root", "-e", "source genera_bd.sql"]

# Expone el puerto 3306 para acceder a la base de datos desde el host
EXPOSE 3306

CMD ["mysqld"]

