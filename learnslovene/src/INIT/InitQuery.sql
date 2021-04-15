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
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('moški','férfi','m moškega');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('otrok','gyermek','m otroka');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('hči','lánya','f hčera');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('sin','fia','m sina/sinú');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('žena','feleség','f žene');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('mož','férj','m moža');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('grad','vár','m grada/gradú');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('in','és','kötőszó');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('ali','vagy','kötőszó');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('da','hogy','kötőszó');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('imeti','birtokol','folyamatos');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('biti','létige','folyamatos');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('kupiti','vesz','befejezett');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('kupovati','vásárol','folyamatos');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('stanovati','lakik','folyamatos');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('živeti','él','folyamatos');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('črn','fekete','-a -o');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('rdeč','piros','-a -e');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('bel','fehér','-a -o');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('zelen','zöld','-a -o');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('siv','szürke','-a -o');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('lila','lila','nem ragozható');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('rumen','sárga','-a o');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('mačka','macska','f mačke');
INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('pes','kutya','m psa');
/*INSERT INTO dictionary (SLOword, HUNword, details) VALUES ('','','');*/