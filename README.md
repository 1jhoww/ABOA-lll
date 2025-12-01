# 📄 README.md — Projeto ABOA (Atualizado com instruções de instalação)

```markdown
# Aboa — Aplicativo de Recomendação de Restaurantes

O Aboa é um aplicativo desenvolvido com foco em facilitar a vida de pessoas que querem encontrar restaurantes próximos,
descobrir novos lugares e visualizar cardápios completos antes mesmo de chegar ao estabelecimento.
O sistema permite que usuários encontrem opções variadas e que restaurantes ganhem mais visibilidade,
podendo cadastrar seus dados, fotos e itens de cardápio de forma simples.

O Aboa é um aplicativo web composto por:

- **Front-end:** React (pasta `aboa-react`)
- **Back-end:** Node.js + Express + MongoDB (pasta `backend`)

Este documento explica como instalar, configurar e rodar o sistema em qualquer computador.

---

# 1. Requisitos Obrigatórios

Antes de rodar o projeto, é necessário instalar na máquina:

### ✔ Node.js (versão 18+)
Download: https://nodejs.org/

### ✔ NPM (vem junto com o Node)

### ✔ MongoDB Community Server  
Download: https://www.mongodb.com/try/download/community

Após instalar, verificar se está funcionando:

```

mongod

```

Se o servidor iniciar, o Mongo está OK.

---

# 2. Estrutura do Projeto

```

/backend        → Servidor Node.js + Express + MongoDB
/aboa-react     → Front-end React + Vite

```

---

# 3. Instalação das Tecnologias do Backend

Todas as tecnologias abaixo já estão declaradas no `package.json`.  
O professor **não precisa instalar nada manualmente** além de rodar:

```

npm install

```

na pasta `backend`.

Mas segue a lista para documentação:

### ✔ Node.js  
Já instalado pelo requisito inicial.

### ✔ Express  
Framework do servidor.  
Instalação (já embutida):  
```

npm install express

```

### ✔ MongoDB + Mongoose  
Banco de dados + ORM.  
```

npm install mongoose

```

### ✔ Multer (upload de imagens)  
Responsável por salvar fotos enviadas pelo usuário.  
```

npm install multer

```

### ✔ JWT (Json Web Token) – Autenticação  
```

npm install jsonwebtoken

```

### ✔ Bcrypt – Criptografia de senhas  
```

npm install bcrypt

```

### ✔ CORS – Permitir comunicação com o frontend  
```

npm install cors

```

### ✔ Dotenv – Leitura de variáveis do .env  
```

npm install dotenv

```

---

# 4. Como Rodar o Back-end

Acesse a pasta:

```

cd backend

```

Instale as dependências:

```

npm install

```

---

## 4.1 Criar o arquivo `.env`

Dentro da pasta **backend**, crie um arquivo chamado:

```

.env

````

E coloque dentro:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/aboa
JWT_SECRET=uma_chave_qualquer
JWT_EXPIRES_IN=1d
````

Essas variáveis **são obrigatórias**.
Sem esse arquivo o back-end não conecta ao MongoDB.

---

## 4.2 Rodar o servidor

```
npm run dev
```

Se tudo estiver correto, aparecerão mensagens como:

```
Servidor rodando na porta 5000
MongoDB conectado com sucesso!
```

---

# 5. Como Rodar o Front-end

Acesse a pasta:

```
cd aboa-react
```

Instale as dependências:

```
npm install
```

Inicie o React:

```
npm run dev
```

O Vite abrirá o projeto em:

```
http://localhost:5173
```

---

# 6. Tecnologias Utilizadas

### Back-end

* Node.js
* Express
* MongoDB + Mongoose
* Multer (upload de imagens)
* JWT (autenticação)
* Bcrypt
* CORS
* Dotenv

### Front-end

* React
* Vite
* React Router DOM
* CSS Modules
* Fetch API (para chamadas ao backend)

---

# 7. Estrutura de pastas

```
📦 
└─ ABOA - lllSEM
   ├─ aboa-react
   │  ├─ index.html
   │  ├─ package.json
   │  ├─ public
   │  ├─ src
   │  │  ├─ App.jsx
   │  │  ├─ assets
   │  │  ├─ components
   │  │  ├─ main.jsx
   │  │  ├─ pages
   │  │  └─ styles
   │  └─ vite.config.js
   └─ backend
      ├─ config
      ├─ middleware
      ├─ models
      ├─ routes
      ├─ server.js
      ├─ uploads
      └─ package.json
```

---

# 8. Erros Comuns e Como Resolver

### ❌ Erro:

```
MongooseError: The uri parameter to openUri() must be a string, got "undefined"
```

### ✔ Solução:

O arquivo `.env` está faltando ou escrito incorretamente.

Confirme se existe:

```
backend/.env
```

E se contém:

```
MONGO_URI=mongodb://127.0.0.1:27017/aboa
```

---

### ❌ Erro: MongoDB não inicia

Solução:

* O MongoDB não está instalado
* O serviço não está ativo
* Porta 27017 ocupada

Verifique com:

```
mongod
```

---

### ❌ Front-end não encontra o back-end

O back-end deve estar rodando na porta **5000**
E o front-end deve fazer requisições para:

```
http://localhost:5000
```

---

# 9. Como Rodar o Projeto Completo

## Passo 1 — Iniciar o MongoDB

```
mongod
```

## Passo 2 — Iniciar o backend

```
cd backend
npm run dev
```

## Passo 3 — Iniciar o frontend

```
cd aboa-react
npm run dev
```

Acesse no navegador:

```
http://localhost:5173
```

---

# 10. Conclusão

Seguindo essas instruções:

1. Instalar Node
2. Instalar MongoDB
3. Criar o `.env` dentro de `/backend`
4. Rodar `npm install` nas duas pastas
5. Iniciar ambos os servidores

O projeto funcionará perfeitamente.


```
