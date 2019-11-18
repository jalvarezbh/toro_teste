# toro_teste

Baixar o Docker Desktop para o computador 
Modificar para rodar Linux container

Montar um Docker do MySql para gravar os dados.
docker build -t mysql-image -f Dockerfile .
docker run -d --rm --name mysql-container mysql-image
docker exec -i mysql-container mysql -uroot -ptoro < script.sql
docker exec -it mysql-container /bin/bash
mysql -uroot -ptoro
use torodata
docker stop mysql-container
docker run -d -v c:\Users\Alvarez\Documents\Toro\db\data:/var/lib/mysql --rm --name mysql-container mysql-image
docker run -d -v “%cd%”/data:/var/lib/mysql --rm --name mysql-container mysql-image

Montar um Docker Node.js API para consumir os dados
Npm init
npm install --save-dev nodemon
npm install --save express mysql
docker inspect mysql-container (verificar o número ip 172.17.0.3)
docker build -t node-image -f dockerfile .
docker run -d -v “%cd%”:/home/node/app -p 9001:9001 –link mysql-container --rm --name node-container node-image
