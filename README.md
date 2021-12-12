## Introduction

**UQuiz** is a VR game developed in Unity with is own server and an administration page. The main objective is to complete a series of questions with its answers.
You must select the correct answer, and with every correct answer you gain +50 points. Every wrong answer cost you -25 points. Every quiz is separated in chambers.
There are a total of 5 chambers.

The questions are storaged inside a server with its own database. Along with that, there is also an administration page where the teachers can see the active questions,
insert new questions, edit the questions and delete questions, including its answers. There the teachers can also register new users for the game.

There is also a ranking system, but it isn't implemented yet. The idea of the project is to learn while playing a VR videogame, using mechanics common in VR to 
make it more interesting. For the record, this is a student project with the only idea to learn on how to made a fullstack app. This project was assigned by **Aiju**.

![Create Project](/documentation/Images/aiju.jpg)

## Technologies used

Due to the nature of the project, it need to clear things: a server and the game app. For the server It uses **NodeJs with Sequelize as its ORM**. The administration 
page linked directly to the server uses .**EJS**

As for the game, It uses **Unity** because its a game engine easy to use but also very powerful.

## Documentation

* [Database design documentation](/documentation/database_design.md)
* [Use cases diagram](/documentation/Diagrams/use-cases.png)
* [User requirements](/documentation/user_requirements.md)
* [Administration page users manual](/documentation/user_manual_AdministrationPage.md)
* [Game users manual](/documentation/user_manual_Game.md)
* [Usability documentation](/documentation/usability.md)
* [Technology argumentation](/documentation/technology_comparation.md)
* [Administration page mockup](/documentation/Mockup/mockup-schoolChamber-AdministrationPage.xd) - you must download it.
* [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17847912-89e3d135-34f1-437f-8d36-5859995b7e81?action=collection%2Ffork&collection-url=entityId%3D17847912-89e3d135-34f1-437f-8d36-5859995b7e81%26entityType%3Dcollection) - Backend connections through Postman.

## Getting Started

Download links:

From Github: https://github.com/ShundytheFox/School-chamber.git

## Prerequisites

To play the game you need at the bare minimum:
* [Unity](https://unity.com/es) - version 2020.3.18
* [Oculus Quest 2](https://www.oculus.com/quest-2/?locale=es_ES)
* [Oculus Link](https://www.oculus.com/accessories/oculus-link/?locale=es_ES) - It must be connected to your PC.
* GTX 1660
* Ryzen 5 3400
* 16 GB of RAM

For the server need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [MySQL](https://www.mysql.com/)
* [NodeJs](https://nodejs.org/es/)

## General installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/ShundytheFox/School-chamber.git
```

This project contains 2 different parts:
* The game
* The server

Once you have cloned the project install all dependencies.

```
cd school-chamber/server
npm install
```

When everything is installed, you must create your own database connection. Add and run the scripts located [here](/server/database)

Then, go to /server/config/database and change "root" and "adri123" for the user and password of your MySQL. You must use
the database scripts located inside the database folder.

```
const db = new Sequelize
('school_chamber', 'root', 'adri123', {
    host: 'localhost',
    dialect: 'mysql'
});
```

After that, you should be able to run correctly the server.

```
Start the project in Visual Studio Code

cd UQuiz/server
npm run dev
```
To login in the administration page, you just must go to http://localhost:5000/login and you should be able to login.

As for the game, it is still in development, so the easiest way to test it in its current stage is to add it in the Unity Hub and play it inside the Unity Editor.

<img src="/documentation/Images/AddToUnity.PNG" width="700" height="350">

Enjoy!

## Workflow

You can follow the development of the project really close here:

* [Trello](https://trello.com/b/Clemo77M/uquiz) 

The project started with the server and the administration page. There is work to be done there yet, but when it was solid enough, all the development power went to Unity
and the production of the game itself.

In the Trello you can see all the things that are actually in development and its actual stage. 
