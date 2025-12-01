
# 📄 README.md — Projeto ABOA (Versão Oficial)

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

Antes de rodar o projeto, é necessário instalar:

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

# 3. Como Rodar o Back-end

Acesse a pasta:

```

cd backend

```

Instale as dependências:

```

npm install

```

---

## 3.1 Criar o arquivo `.env`

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

## 3.2 Rodar o servidor

```
npm run dev
```

Se tudo estiver correto, aparecerão mensagens como:

```
Servidor rodando na porta 5000
MongoDB conectado com sucesso!
```

---

# 4. Como Rodar o Front-end

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

# 5. Tecnologias Utilizadas

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

# 6. Estrutura de pastas

```
📦 
└─ ABOA - lllSEM
   ├─ aboa-react
eslint.config.js
   │  ├─ index.html
package-lock.json
   │  ├─ package.json
   │  ├─ public
   │  │  ├─ imgs
   │  │  │  ├─ Beer.png
   │  │  │  ├─ Burger.png
   │  │  │  ├─ Chicken.png
   │  │  │  ├─ Cocktail.png
   │  │  │  ├─ Desktop - 1 (1).png
   │  │  │  ├─ Food.png
   │  │  │  ├─ Group 10.png
   │  │  │  ├─ Group 11.png
   │  │  │  ├─ Group 12.png
   │  │  │  ├─ Group 5 - Copia - Copia.png
   │  │  │  ├─ Group 5 - Copia.png
   │  │  │  ├─ Group 5.png
   │  │  │  ├─ Japanese food.png
   │  │  │  ├─ Logo Aboa 1.png
   │  │  │  ├─ Nigiri.png
   │  │  │  ├─ Pizza.png
   │  │  │  ├─ backgrounnd.png
   │  │  │  ├─ bk.jpg
   │  │  │  ├─ fast food.png
   │  │  │  ├─ fundo.png
   │  │  │  ├─ icons8-facebook-30.png
   │  │  │  ├─ icons8-instagram-50.png
   │  │  │  └─ icons8-x-50.png
   │  │  └─ vite.svg
   │  ├─ src
   │  │  ├─ App.jsx
   │  │  ├─ assets
   │  │  │  └─ react.svg
   │  │  ├─ components
   │  │  │  ├─ Header.jsx
   │  │  │  └─ header.module.css
main.jsx
pages
   │  │  │  ├─ Cadastro
   │  │  │  │  ├─ Cadastro.jsx
   │  │  │  │  └─ cadastro.module.css
   │  │  │  ├─ CadastroEstabelecimento
   │  │  │  │  ├─ CadastroEstabelecimento.jsx
   │  │  │  │  └─ cadastroestabelecimento.module.css
   │  │  │  ├─ Cardapio
   │  │  │  │  ├─ Cardapio.jsx
   │  │  │  │  └─ cardapio.module.css
   │  │  │  ├─ ContaEstabelecimento
   │  │  │  │  ├─ EditarItemModal.jsx
   │  │  │  │  ├─ EditarPerfilModal.jsx
   │  │  │  │  ├─ MinhaContaRest.jsx
   │  │  │  │  ├─ editaritem.module.css
   │  │  │  │  ├─ editarperfil.module.css
   │  │  │  │  └─ minhaconta.module.css
   │  │  │  ├─ Home
   │  │  │  │  ├─ Home.jsx
   │  │  │  │  └─ Home.module.css
   │  │  │  ├─ Login
   │  │  │  │  ├─ Login.jsx
   │  │  │  │  └─ login.module.css
   │  │  │  ├─ MinhaContaUsuario
   │  │  │  │  ├─ MinhaContaUsuario.jsx
   │  │  │  │  └─ minhacontausuario.module.css
   │  │  │  └─ Recomenda
   │  │  │     ├─ Recomenda.jsx
   │  │  │     └─ recomenda_nova.module.css
styles
   │  │     └─ global.css
   │  └─ vite.config.js
   └─ backend
      ├─ config
      │  └─ db.js
      ├─ middleware
      │  └─ auth.js
      ├─ models
      │  ├─ Estabelecimento.js
      │  ├─ ItemCardapio.js
      │  └─ Usuario.js
      ├─ package-lock.json
      ├─ package.json
      ├─ routes
      │  ├─ authRoutes.js
      │  ├─ cardapioRoutes.js
      │  └─ estabelecimentoRoutes.js
      ├─ server.js
      └─ uploads
         ├─ 1764551191780-7633.jpg
         ├─ 1764551327589-9923.jpg
         ├─ 1764551372489-1195.jpg
         ├─ 1764551409565-7428.jpg
         ├─ 1764553314963-8933.jpg
         ├─ 1764553901369-4875.jpg
         ├─ 1764553920507-5703.jpg
         ├─ 1764553958245-5468.jpg
         ├─ 1764554039679-7811.jpg
         ├─ 1764554312036-1316.jpg
         ├─ 1764554363889-4898.jpg
         ├─ 1764554396358-1600.jpg
         ├─ 1764555682854-2465.jpg
         ├─ 1764555699780-2327.jpg
         ├─ 1764557818104-9852.jpg
         ├─ 1764557927826-7307.jpg
         └─ 1764557948384-6631.jpg


# 7. Erros Comuns e Como Resolver

### ❌ Erro:

```
MongooseError: The uri parameter to openUri() must be a string, got "undefined"
```

### ✔ Solução:

O arquivo `.env` está faltando ou escrito incorretamente.

Verifique se existe:

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

# 7. Como Rodar o Projeto Completo

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

# 8. Conclusão

Seguindo essas instruções:

1. Instalar Node
2. Instalar MongoDB
3. Criar o `.env` dentro de `/backend`
4. Rodar `npm install` nas duas pastas
5. Iniciar ambos os servidores


```
