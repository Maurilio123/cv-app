CREATE if not EXISTS DATABASE aula_senac;
use aula_senac;             

create if not EXISTS table usuarios(
id_usuario int unsigned not null auto_increment primary key,
nome varchar(255) not null,
idade varchar(10) not null,
peso varchar(10) not null
);