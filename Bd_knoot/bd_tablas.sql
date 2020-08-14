drop database if exists bd_knoot;
create database bd_knoot;
use bd_knoot;

CREATE TABLE IF NOT EXISTS Persona(
	persona_ID INT  AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50),
	apellido VARCHAR(50),
	telefono VARCHAR(10),
	fecha_nacimiento date,
    lugar_origen VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Usuario(
	usuario_ID INT AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(30),
	link_foto VARCHAR(30),
	pass VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS Habilidad(
	habilidad_ID INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50)
);
CREATE TABLE IF NOT EXISTS Facultad(
	facultad_ID INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Consumidor(
	consumidor_ID INT AUTO_INCREMENT PRIMARY KEY,
	descripcion VARCHAR(150),
    habilidad_ID INT,
    facultad_ID INT,
    FOREIGN KEY (consumidor_ID) REFERENCES Usuario(usuario_ID),
    FOREIGN KEY (habilidad_ID) REFERENCES Habilidad(habilidad_ID),
    FOREIGN KEY (facultad_ID) REFERENCES Facultad(facultad_ID)
);

CREATE TABLE IF NOT EXISTS HabilidadXConsumidor(
	habilidad_ID INT AUTO_INCREMENT PRIMARY KEY,
    consumidor_ID INT,
    FOREIGN KEY (habilidad_ID) REFERENCES Habilidad(habilidad_ID),
    FOREIGN KEY (consumidor_ID) REFERENCES Consumidor(consumidor_ID)
);




CREATE TABLE IF NOT EXISTS Administrador(
	administrador_ID INT AUTO_INCREMENT PRIMARY KEY,
	rol VARCHAR(30),
	FOREIGN KEY (administrador_ID) REFERENCES Usuario(usuario_ID)
);



CREATE TABLE IF NOT EXISTS Categoria(
	categoria_ID INT  AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Anuncio(
	anuncio_ID INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50),
	descripcion VARCHAR(50),
    banner VARCHAR(50),
	estado INT,
	fecha_inicio DATE,
    fecha_termino DATE,
	vacantes VARCHAR(30),
    cant_interesados VARCHAR(30),
    categoria_ID INT,
    consumidor_ID INT,
    FOREIGN KEY (categoria_ID) REFERENCES Categoria(categoria_ID),
    FOREIGN KEY (consumidor_ID) REFERENCES Consumidor(consumidor_ID)
);

CREATE TABLE IF NOT EXISTS HabilidadXAnuncio(
	habilidad_ID INT AUTO_INCREMENT PRIMARY KEY,
    anuncio_ID INT,
    FOREIGN KEY (habilidad_ID) REFERENCES Habilidad(habilidad_ID),
    FOREIGN KEY (anuncio_ID) REFERENCES Anuncio(anuncio_ID)
);



CREATE TABLE IF NOT EXISTS Interesados(
	consumidor_ID INT,
    anuncio_ID INT,
	FOREIGN KEY (consumidor_ID) REFERENCES Consumidor(consumidor_ID),
    FOREIGN KEY (anuncio_ID) REFERENCES Anuncio(anuncio_ID)
);



CREATE TABLE IF NOT EXISTS Sugerencia(
	sugerencia_ID INT  AUTO_INCREMENT PRIMARY KEY,
    link_detalle VARCHAR(150),
    persona_ID INT,
    administrador_ID INT,
    FOREIGN KEY (persona_ID) REFERENCES Persona(persona_ID),
    FOREIGN KEY (administrador_ID) REFERENCES Administrador(administrador_ID)
);

CREATE TABLE IF NOT EXISTS Noticia(
	noticia_ID INT  AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(50),
	descripcion VARCHAR(150),
    administrador_ID INT,
    FOREIGN KEY (administrador_ID) REFERENCES Administrador(administrador_ID)
);