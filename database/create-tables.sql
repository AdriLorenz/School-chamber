create database school_chamber;
use school_chamber;

create table if not exists Roles (
	role_id int auto_increment primary key NOT NULL,
    role_name varchar (50) NOT NULL
);

drop table Roles;

create table if not exists Users (
	user_id int auto_increment primary key NOT NULL,
    user_name varchar(50) NOT NULL,
    user_email varchar(50) NOT NULL,
    user_password varchar(150) NOT NULL,
    role_id_fk int NOT NULL,
    foreign key (role_id_fk) references Roles (role_id) on update cascade on delete cascade
);

drop table Users;

create table if not exists Themes (
	theme_id int auto_increment primary key NOT NULL,
    theme_name varchar (50) NOT NULL
);

drop table Themes;

create table if not exists Questions (
	question_id int auto_increment primary key NOT NULL,
    question_content varchar(100) NOT NULL,
    theme_id_fk int NOT NULL,
    foreign key (theme_id_fk) references Themes (theme_id) on update cascade on delete cascade
);

drop table Questions;

create table if not exists Answers (
	answer_id int auto_increment primary key NOT NULL,
    answer_content varchar(100) NOT NULL,
    answer_points int NOT NULL,
    question_id_fk int NOT NULL,
    foreign key (question_id_fk) references Questions (question_id) on update cascade on delete cascade
);

drop table Answers;



