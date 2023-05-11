# FullStack-Typescript Motors

## 📚 Idealização 
- A aplicação "Motors" é uma aplicação fullstack que foi desenvolvida com o propósito de fornecer aos usuários a possibilidade de gerenciar e utilizar de um marketplace de venda de veículos. 

## 💻 Tecnologias
- Node Js - PostgreSQL (Back-end)
- React (Front-end)
- Typescript

## 🔮 Dependencias (Front-end)

- "@hookform/resolvers": valida dados de formulários no React Hook Form.
- "axios": faz requisições HTTP.
- "react": cria interfaces do usuário com React.
- "react-dom": interage com o DOM em aplicativos React.
- "react-hook-form": gerencia formulários e validação de entrada de dados no React.
- "react-imask": adiciona máscaras de entrada a campos de formulários React.
- "react-dotenv": carrega variáveis de ambiente de um arquivo ".env" no React.js.
- "react-router-dom": adiciona navegação por rotas em aplicativos React.
- "react-toastify": exibe notificações de estilo de tostador no React.
- "styled-components": estiliza componentes com CSS-in-JS.
- "yup": valida esquemas para JavaScript.

## 🔮 Dependencias (Back-end)

- "@prisma/client": ORM para Node.js que oferece uma interface de banco de dados tipo SQL.
- "bcryptjs": biblioteca para criptografia de senhas em JavaScript.
- "cors": pacote para permitir solicitações de outros domínios no Node.js.
- "cross-env": define variáveis de ambiente de forma consistente em diferentes sistemas operacionais.
- "dotenv": carrega variáveis de ambiente de um arquivo ".env" no Node.js.
- "express": framework para aplicativos da web Node.js que fornece recursos para construir APIs e aplicativos da web.
- "jsonwebtoken": cria e verifica tokens de autenticação JWT.
- "pg": cliente de banco de dados PostgreSQL para Node.js.
- "reflect-metadata": biblioteca para refletir informações de metadados em tempo de execução do TypeScript.
- "ts-node": transpilador TypeScript para Node.js.
- "ts-node-dev": reinicia automaticamente o servidor Node.js ao detectar alterações em arquivos do tipo TypeScript.
- "yup": biblioteca de validação de esquema para JavaScript.
 
## 🔆 Algumas Funcionalidades
- Organizar Rotas da aplicação com react router dom.
- Criação de formulários com validação e efetivação em Api.
- Gerenciamento em CRUD.

## Como rodar o projeto?

Ao clonar o projeto, você seguirá os passos abaixo:

Front-End:

1. Abra o terminal e navegue até a pasta do projeto ("project").
2. Execute o comando "yarn install" para instalar as dependências do servidor.
3. Após a instalação, execute o comando "yarn start" para iniciar o servidor.

Back-End:

1. Execute o comando "yarn install" para instalar as dependências do servidor.
2. Após a instalação, preencha as variáveis .env e execute o comando "yarn prisma migrate dev" para executar as migrações do banco de dados (postgresql).
3. Execute o comando "yarn dev" para iniciar o servidor. Certifique-se de que o servidor está rodando. (Necessário deixar o terminal aberto rodando o servidor).

OBS: Certifique-se de manter o servidor rodando em uma instância do terminal e o cliente rodando em outra. Para interromper a execução, pressione "CTRL+C" no terminal correspondente.
