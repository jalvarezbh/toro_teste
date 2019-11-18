DROP DATABASE torodata;
CREATE DATABASE torodata;

USE torodata;

CREATE TABLE usuario (
    id INT(11) AUTO_INCREMENT,
    nome VARCHAR(255),
    usuario varchar(25),
    senha varchar(25),
    PRIMARY KEY(id)
);

CREATE TABLE conta (
    id INT(11) AUTO_INCREMENT,
    id_usuario INT(11),
    valor_total decimal(15,2),
    PRIMARY KEY(id)
);

CREATE TABLE operacao (
    id INT(11) AUTO_INCREMENT,
    id_conta INT(11),
    valor decimal(15,2),
    data_operacao datetime,
    tipo INT(1),
    PRIMARY KEY(id)
);

INSERT INTO usuario VALUES(0, 'Joao', 'joao','123');
INSERT INTO usuario VALUES(0, 'Talita', 'talita','123');

INSERT INTO conta VALUES(0, 1, 100.50);
INSERT INTO conta VALUES(0, 2, 500.10);
