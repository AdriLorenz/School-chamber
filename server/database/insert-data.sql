ALTER TABLE Roles AUTO_INCREMENT = 1;   
insert into Roles VALUES 
	(default, "Basic"),
    (default, "Admin");

select * from Roles;

ALTER TABLE Users AUTO_INCREMENT = 1;   
insert into Users VALUES 
	(default, "Tiburcio", "Tiburcio@gmail.com", "1234", 2),
    (default, "Pino", "Pino@gmail.com", "1234", 2 ),
    (default, "Alberto", "Alberto@gmail.com", "1234", 2),
    (default, "Gemma", "Gemma@gmail.com", "1234", 1),
    (default, "Alfredo", "Alfredo@gmail.com", "1234", 1);
 
select * from Users;
    
ALTER TABLE Themes AUTO_INCREMENT = 1;   
insert into Themes VALUES 
	(default, "Historia"),
    (default, "Geografía"),
    (default, "Informática");
    
select * from Themes;

ALTER TABLE Questions AUTO_INCREMENT = 1;   
insert into Questions VALUES
	(default, "¿Quién ganó la batalla de Hastings?", 3, 1),
    (default, "¿En qué año terminó la 2da Guerra Mundial?", 3, 1),
    (default, "¿Cual es la capital de Alemania?", 2, 2),
    (default, "¿Es Casa Blanca la capital de Marruecos?", 2, 2),
    (default, "¿Es HTML un lenguaje de programación?", 1, 3),
    (default, "¿Qué es un ORM?", 4, 3);
    
select * from Questions;
    
ALTER TABLE Answers AUTO_INCREMENT = 1;       
insert into Answers VALUES
	(default, "El Rey Harold", 0, 1),
    (default, "El Rey Guillermo", 10, 1),
    (default, "Yo", 0, 1),
    (default, "1945", 10, 2),
    (default, "1939", 0, 2),
    (default, "1944", 0, 2),
    (default, "París", 0, 3),
    (default, "Munich", 0, 3),
    (default, "Berlín", 10, 3),
    (default, "No", 10, 4),
    (default, "Sí", 0, 4),
    (default, "No", 10, 5),
    (default, "Sí", 0, 5),
    (default, "Es un sistema gestor", 0, 5),
    (default, "Un lenguaje de programación", 0, 6),
    (default, "Una librería para Java", 0, 6),
    (default, "Un sistema de acceso a la base de datos", 10, 6);
    
select * from answers;