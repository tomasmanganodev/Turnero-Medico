/*agregar mas tarde tabla de obras sociales */


CREATE TABLE IF NOT EXISTS medics ( 
    id INT NOT NULL AUTO_INCREMENT,
    specialization varchar(32),
    PRIMARY key (id)

)
; 

CREATE TABLE IF NOT EXISTS clients(
    id INT NOT NULL AUTO_INCREMENT,
    dni varchar(10),
    telephone varchar(32),
    first_name varchar(32) NOT NULL,
    last_name varchar(32) NOT NULL,
    PRIMARY key (id)

);



CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL AUTO_INCREMENT,
    passwrd varchar(32) NOT NULL,
    email varchar(32) NOT NULL,
    first_name varchar(32) NOT NULL,
    last_name varchar(32) NOT NULL,
    id_medic INT(2),
    PRIMARY key (id),
    FOREIGN KEY (id_medic) REFERENCES medics(id)
    

)
;

CREATE TABLE IF NOT EXISTS consults(
    id INT NOT NULL AUTO_INCREMENT,
    id_client INT NOT NULL,
    id_user INT NOT NULL,
    dateConsult DATE NOT NULL,
    star_hour TIME,
    end_hour TIME,
    PRIMARY key (id),
    FOREIGN KEY (id_client) REFERENCES clients(id),
    FOREIGN KEY (id_user) REFERENCES users(id)
);

