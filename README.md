
# Node.js + MySQL Simple App

A very basic NodeJS full-stack application demonstrating frontend, backend, and database integration.



## Cloning

Open Terminal and type the following commands

```bash
  git clone https://github.com/YOUR-USERNAME/node-mysql-app.git
  cd node-mysql-app
```
    
## Installing Dependencies

Inside the cloned project

```bash
  npm install
```
## Database Set-Up

Pulling MySQl Docker Image and Creating Database in Dbeaver

```bash
  docker run --name mysql-server -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -d -p 3306:3306 mysql:latest
```

Creating the database
```bash
 CREATE DATABASE IF NOT EXISTS testdb;
```

```bash
  USE testdb;
```

```bash
  CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
);
```


## Run Locally / Start the Node.js Server

Clone the project

```bash
  node index.js
```
Terminal output should be: 
```bash
  Server running at http://localhost:3000
  Connected!
```
Visit in browser

```bash
  http://localhost:3000
```





