DROP DATABASE IF EXISTS learnslovene;

CREATE DATABASE learnslovene CHARACTER SET = "latin2" COLLATE = "latin2_hungarian_ci";

USE learnslovene;


CREATE TABLE dictionary (
    ID INT NOT NULL AUTO_INCREMENT,
    SLOword VARCHAR(255) NOT NULL,
    HUNword VARCHAR(255) NOT NULL,
    details VARCHAR(255) NOT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('hiša', 'ház', 'f hiše');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('ženska', 'nő', 'f ženske');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('škarje', 'olló', 'f pl škarij');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('avto', 'autó', 'm avta');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('zrak', 'levegő', 'm zraka');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('drevo', 'fa', 'n drevesa');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('tele', 'borjú', 'n teleta');