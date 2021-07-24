# Avanço Desafio

Descrição:
Aplicação consumindo uma REST API (NestJs) que consome um banco de dados Postgres. Apresentando um dashboard com linhas que podem ser editas, excluidas e criadas. Juntamente com uma guarda de rotas para proteção de paginas não autorizadas sem uma autenticação.
					
   
Ferramentas/Linguagens usadas:

   - Angular (12.1)
   - NestJs  (8.0)
   - PostgresSQL (13.3)
					
# Como usar a aplicação localmente :

* Data-base(postgresSQL):
 
    * instalar o postgresSQL : https://www.postgresql.org/download/
    * instalar o pgAdmin4 para gerenciamento do banco de dados : https://www.pgadmin.org/download/
    * Dentro do pgAdmin4 criar uma nova conexão :
    
       - Depois dentro de Databases, criar um database nomeado "blog-app" 
       - Dentro de Login/Groups Roles, criar um novo Login/Group Role nomeado como "blog-user" com todos os privilégios marcados e o password como "123"
       

* Back-end

    * No caminho relativo da pasta AvançoDesafio/postApi/post-api abrir o prompt de comando como administrador e digitar os seguintes comandos: 
    
        - npm install
        - npm start
        
					

* Front-end

   * No caminho relativo da pasta AvançoDesafio/avancoDesafio abrir o prompt de comando como administrador e digitar os seguintes comandos:
    
      - npm install
      - ng serve --open
      


        
 
		
 
