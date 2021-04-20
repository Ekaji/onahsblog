---
title: Nodejs, express and POstgreSQL REST api tutorial.
author: Ekaji
date: 2021-03-14
tags: Nodejs
featuredImage: ../images/BingWallpaper.jpg
---

As developers creating and consuming API's is an important aspect of our job, in this tutorial we would learn how to create RESTfull API's using Nodejs, expressjs and postgreSQL as the database.
To follow along Nodejs and postgreSQL must be installed on your computer.

## postgres setup
Postgres is a free and open source relational database management system to install it head over to the official download page https://www.postgresql.org/download/ and select the installer for your operating system.
for windows users after installation you need to add postgres to your path https://sqlbackupandftp.com/blog/setting-windows-path-for-postgres-tools

once installation is complete open up your terminal and type ```psql -U postgres``` this would prompt you for the password you created during installation enter the password and you would be connected to the default postgres database 
next we create a role/user you can name it anything you want mine would be named my_project
the comand to create it would be ```postgres=# CREATE ROLE my_project WITH LOGIN PASSWORD '12345';```
we also want This role/user to be able to create databases ```postgres=# ALTER ROLE my_project CREATEDB;```
to get a list of all roles/users type ```\du```
to create a new database for my_project we first have to exit this session ```\q```
entering  ```psql -d postgres -U my_project``` connects us to the role\user my_project.
next we create a new database ```postgres=> CREATE DATABASE api;```,
Use the ```\list``` command to see the available databases.

to connect the new 'api' database with 'my_project' we use the \c comand
```postgres=> \c api```

### creating tables
The final thing we need to do is to create a tabel since we are building a todo app i named the table todo
```api=> CREATE TABLE todos (ID SERIAL PRIMARY KEY, task VARCHAR(30), completed BOOLEAN NOT NULL );```
the comand above creates a table with an auto incrementing primary key, a VARCHAR type and a boolean type which should not be empty or null.

to test this out we would enter two values
```INSERT INTO my_project (task, completed) VALUES ('clean my room', FALSE) , ('do the dishes', TRUE);```

make sure it got added using the ```SELECT * FROM todos;``` comand


