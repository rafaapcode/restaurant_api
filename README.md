# Restaurant API

- Este desafio foi retirado de um processo seletivo, onde é preciso fazer uma API sobre Restaurantes.

## Tecnologias
- Express
- MYSQL
- Husky
- Prisma ( ORM )

## Funcionalidades
- [x] CRUD Restaurantes
- [x] CRUD Produtos
- [x] Criar Categoria para os produtos
- [x] Deletar Categoria
- [x] Pegar Categoria
- [x] Criar promoções para os produtos
- [x] Atualizar as promoções
- [x] Adicionar fotos para os restaurantes e produtos
- [x] Deletar as fotos
- [x] Atualizar as fotos

## Aprendizados
- Este projeto foi um dos mais desafiadores, pois pratiquei bastante o relacionamento entre as tabelas.
- Aprendi muito sobre o prisma e principalmente sobre como criar relacionamentos com ele.
- Aprendi para que serve e como usar o Husky
- Também aprendi mais a fundo sobre o JOI ( Validador de Schema )

## Como usar a API
- Clone ou faça o download do repositório.
- Execute o seguinte comando para instalar as dependências ``` npm i ```
- Crie o arquivo .env
  - Dentro dele você irá colocar as seguintes informações :
    ```
      PORT=3000

      DATABASE_URL="mysql://youruser:yourpassword@hot:port/DBNAME"
    ```
- Depois dessas configurações só executar o comando : ``` npm start ```
