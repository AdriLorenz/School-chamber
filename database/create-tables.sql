create database school_chamber;
use school_chamber;

create table if not exists Teachers (
	teacher_id int auto_increment primary key NOT NULL,
    teacher_name varchar (50) NOT NULL
);

drop table Teachers;

create table if not exists Students (
	student_id int auto_increment primary key NOT NULL,
    student_name varchar(50) NOT NULL,
    teacher_id_fk int NOT NULL,
    foreign key (teacher_id_fk) references Teachers (teacher_id) on update cascade on delete cascade
);

drop table Students;

create table if not exists Themes (
	theme_id int auto_increment primary key NOT NULL,
    theme_name varchar (50) NOT NULL
);

drop table Themes;

create table if not exists Questions (
	question_id int auto_increment primary key NOT NULL,
    question_content varchar(100) NOT NULL,
    teacher_id_fk int NOT NULL,
    theme_id_fk int NOT NULL,
    foreign key (teacher_id_fk) references Teachers (teacher_id) on update cascade on delete cascade,
    foreign key (theme_id_fk) references Themes (theme_id) on update cascade on delete cascade
);

drop table Questions;



