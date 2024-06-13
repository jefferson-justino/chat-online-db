Criação de banco de dados

assistir playlist ensinando a criar o back end da aplicação, fixada no canal "estudos" no discord.

recursos necessários:
-instalar programa node.js;

dentro do terminal:
- instalar pg(postgress);
- instalar mysql2;
- instalar sequelize;
- instalar express;
- instalar cors.


adicionar no package.json:
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx nodemon app.js"
  },
  para iniciar o servidor

as pastas configBanco e models são independentes, podem ser criadas primeiro, em seguida, crie as rotas
e por último o app.js

para navegação local utilizar informações do seu próprio servior(sua máquina)
exemplo:

adicionar no arquivo ''database.js''
module.exports={
 dialect:'mysql',
 host: 'localhost',
database:  'teste',
 username: 'root',
 password: 'root'
 }
 logo em seguida adicionar dentro  do arquivo ''sequelize.js'' as seguintes linhas de código

 const configDatabase = require('./database') aqui ele importa o script anterior e instancia dentro de uma variável

const sequelize = new Sequelize(configDatabase) aqui ele cria a conexão com o banco de dados local.

sites que utilizaremos para subir o banco para a nuvem: 
https://dashboard.render.com/


para utilizar em nuvem tem outros passos

1- criar um arquivo chamado ''.env'' (arquivo onde vai conter as informações de chaves do banco);
2- ir no banco em nuvem e pegar o link do banco;
3- dentro do arquivo .env adicionar '' DATABASE_URL = *aqui você coloca o link do banco de dados* '' com isso,
 seu banco vai ter mais segurança em relação as informações contidas em nuvem.
3- criar um arquivo chamado ''.gitignore'' e nele apenas digite ''.env'', com isso, sempre que o código for compartilhado no github, 
o arquivo .env nunca será exibido com as informações sensível do seu banco. e sempre que você baixar, vai ter que repetir este processo.


dentro do site do render após criar um serviço web, na aba "Environment" você deverá criar um Environment variables e definir o seguinte valor :
KEY: DATABASE_URL;
VALOR: *LINK DO BANCO DE DADOS*.



	dentro do arquivo de codificação, você deverá adicionar 2 novo campos dentro do "package.json", 

após as chaves de devDependences, colocar 

  "engines": {
    "node": ">=14"
  }
e pronto, pode fazer deploy da aplicação back end pra nuvem.