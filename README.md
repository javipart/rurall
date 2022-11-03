### RURALL TEST

##

## Descripción
La prueba se desarrolló con JavaScript, para despliegue Docker.
* Backend:
  * NodeJS
  * Express
  * MongoDB (Mongoose - MongoAtlas)
  * Test (Supertest, Jest)

* Frontend:
  * ReactJS (create-react-app)
  * MUI ([https://mui.com/])

* APIS Externas
  * [https://ipapi.com/]
  * [https://restcountries.com/]
  * [https://apilayer.com/]

## Instrucciones
1. Clonar el proyecto
2. Ubicarse en la raíz del Proyecto y ubicarse en la rama `initial-app`
3. Continuando en la raíz del proyecto, escribir el comando `docker-compose up --build -d`.
4. Esperar la finalización del proceso de Docker
5. Para ingresar al cliente, debe ir a [http://localhost:3000]
6. Ya en el navegador, ingresar IPs para probar el funcionamiento.

En la DB Mongo, existe una IP bloqueada (blacklist) y es: **10.20.30.40**.

## Diagrama de Flujo
![alt text](https://github.com/javipart/rurall/blob/initial-app/D1.png?raw=true)

## Diagrama de Secuencia
![alt text](https://github.com/javipart/rurall/blob/initial-app/D2.png?raw=true)