## Introduction

**UQuiz** is a VR game developed in Unity with is own server and an administration page. The main objective is to complete a series of questions with its answers.
You must select the correct answer, and with every correct answer you gain +50 points. Every wrong answer cost you -25 points. Every quiz is separated in chambers.
There are a total of 5 chambers.

The questions are storaged inside a server with its own database. Along with that, there is also an administration page where the teachers can see the active questions,
insert new questions, edit the questions and delete questions, including its answers. There the teachers can also register new users for the game.

There is also a ranking system, but it isn't implemented yet. The idea of the proyect is to learn while playing a VR videogame, using mechanics common in VR to 
make it more interesting. For the record, this is a student proyect with the only idea to learn on how to made a fullstack app. This proyect was assigned by **Aiju**.

## Database design

![Create Project](/server/database/relational-diagram.png)

For the database design I created two differents diagram. The first one is the upper image. There you can see how I designed the main part of the game (the quiz with the
questions and its answers) and how it is divided (by topics inside themes).

![Create Project](/server/database/users_permissions_diagram.png)

The second one it's a diagram that shows the design for the users and its roles. It is mainly for the administration page.

For more diagrams you can check [here](/server/database).

## Getting Started

Download links:

From Github: https://github.com/ShundytheFox/VRWorld.git

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [MySQL](https://www.mysql.com) - You can install it from https://www.mysql.com/downloads/.
* [Angular](https://angular.io/)
* [Spring boot](https://spring.io/projects/spring-boot)

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/ShundytheFox/VRWorld.git
```

This project contains 2 different parts:
* Frontend
* Backend

You need Angular installed and Eclipse with Java Spring is totally recommended

Once you have cloned the project install all dependencies.

```
cd VRWorld/frontend
npm install

Install Maven dependencies in Eclipse for the backend.
```

* For your backend part:

2. You need a mysql server working.

3. Create the mysql database, that in our case is "db_vr". You can import it from the file db_vr.sql included in this project. https://github.com/ShundytheFox/VRWorld/blob/master/backend/database/db_vr.sql

4. I have also included the scripts for MySQL in case you want to see it.

Here you can see the MySQL connection:

```
spring.datasource.url=jdbc:mysql://localhost/db_vr?useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=adri123
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQL5InnoDBDialect
spring.jpa.hibernate.ddl-auto= none
logging.level.org.hibernate.SQL=debug
````

For the backend it use de 8080 ports, and the for the frontend it use the 4200 port


Finally to start enjoying this project.

```
Start Spring Boot in Eclipse to run the backend

cd VRWorld/frontend
ng serve
```

Enjoy!


## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project for the frontend
* [Angular](https://angular.io/) - The framework used for the frontend
* [Spring boot](https://spring.io/projects/spring-boot) - Framework used for the backend
* [Eclipse](https://www.eclipse.org/ide/) - The IDE used for the backend
