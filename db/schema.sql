create database burgers_db
use burgers_db
create table burgers(
    ID INT AUTO_INCREMENT not null,
    Burger_name TEXT not null,
    Devoured TRUE/FALSE default 0,
    Created timestamp(),
    PRIMARY KEY (ID)
);
