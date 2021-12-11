## ER Diagrams and basic structure

![Create Project](/documentation/Diagrams/E-R_Diagram-Questions.png)

For the database design I created two differents diagram. The first one is the upper image. There you can see how I designed the main part of the game (the quiz with the
questions and its answers) and how it is divided (by topics inside themes).

![Create Project](/documentation/Diagrams/E-R_Diagram_Users.png)

The second one it's a diagram that shows the design for the users and its roles. It is mainly for the administration page.

## Relational diagrams and basic structure

![Create Project](/documentation/Diagrams/Relational_Diagram-Questions.png)

After the ER Diagrams it was time for the design of the logical part of the database. I tried to did it as simple as possible but always focusing on what really makes
sense for the proyect. The upper image shows the logical part of the actual game.

![Create Project](/documentation/Diagrams/Relational_Diagram-Users.png)

The user part is not very complex. It doesn't differ much from the rest.

## UML Diagram

![Create Project](/documentation/Diagrams/UML-Questions.png)

The UML diagram allows me to have a clear vision on how it should be represented inside the ORM.

![Create Project](/documentation/Diagrams/UML-Users.png)

With the users also implemented in a UML diagram, i was able to start coding.

## Database scripts

* [Creation of the tables](/server/database/create-tables.sql)
* [Insert test data](/server/database/insert-data.sql)
