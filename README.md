## Introduction

**UQuiz** is a VR game developed in Unity with is own server and an administration page. The main objective is to complete a series of questions with its answers.
You must select the correct answer, and with every correct answer you gain +50 points. Every wrong answer cost you -25 points. Every quiz is separated in chambers.
There are a total of 5 chambers.

The questions are storaged inside a server with its own database. Along with that, there is also an administration page where the teachers can see the active questions,
insert new questions, edit the questions and delete questions, including its answers. There the teachers can also register new users for the game.

There is also a ranking system, but it isn't implemented yet. The idea of the project is to learn while playing a VR videogame, using mechanics common in VR to 
make it more interesting. For the record, this is a student project with the only idea to learn on how to made a fullstack app. This project was assigned by **Aiju**.

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

To play the game you need:
* [Unity](https://unity.com/es) - version 2020.3
18
* [Oculus Quest 2](https://www.oculus.com/quest-2/?locale=es_ES)
* [Oculus Link](https://www.oculus.com/accessories/oculus-link/?locale=es_ES) - It must be connected to your PC.
* GTX 1660
* Ryzen 5 3400
* 16 GB of RAM

For the server need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [NodeJs](https://nodejs.org/es/)

## General Installation instructions

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

Install the NodeJs dependencies
```
And where everything is installed...

```
Start the project in Visual Studio Code

cd school-chamber
npm run dev
```

Enjoy!
