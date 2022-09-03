[![BCH compliance](https://bettercodehub.com/edge/badge/HacKairos/Cebraspe-Tracker?branch=main)](https://bettercodehub.com/)
<h1 align="center">
    Cebraspe Tracker
</h1>

<h4 align="center"> 
	🚧  Cebraspe Tracker ♻️ Em progresso 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

♻️ Cebraspe Tracker - é uma forma de ajudar os estudantes a descobrirem se foram aprovados pelo processo seletivo do PAS.


Projeto desenvolvido durante o segundo semestre de 2022 por alunos da UNB .

---

## ⚙️ Funcionalidades

- [x] Alunos podem se cadastrar na plataforma web enviando:
  - [x] Nome do aluno, email e whatsapp
- [x] Escolas podem se cadastrar na plataforma

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/rs895AnU1WtSaW2KDfVpxr/Cebrasp---Tracker">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

### 🖥 Pagina Web 

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="CebraspTracker" title="#CebraspeTracker" src="../Docs/Prototipos/AltaFidelidade/PrototipoDashboard.png" width="600px">

</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)

💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com), [Django](https://www.djangoproject.com). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/fga-eps-mds/Cebraspe-Tracker.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Cebraspe-Tracker/Projeto

# Vá para a pasta server
$ cd ctracker

# Instale as dependências
$ sudo docker compose build

# Execute a aplicação em modo de desenvolvimento
$ sudo docker compose up

# O servidor inciará na porta:8000 - acesse http://localhost:8000 

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/fga-eps-mds/Cebraspe-Tracker-Front.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd Cebraspe-Tracker-Front

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:5173/

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([Reactjs](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))


#### [](https://github.com/fga-eps-mds/Cebraspe-Tracker)**Server**  ([Django](https://www.djangoproject.com)  +  [Python](https://www.python.org)

-   **[Selenium](https://www.selenium.dev)**
-   **[Scrapy](https://scrapy.org)**
-   **[Docker](https://www.docker.org)**
-   **[PostgreSQL](https://www.postgresql.org)**


#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo (Cebraspe Tracker)](https://www.figma.com/file/rs895AnU1WtSaW2KDfVpxr/Cebrasp---Tracker?node-id=5%3A2)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**

---

## 👨‍💻 Contribuidores

Alunos que fazem parte do projeto 😎💦

<table>
  <tr>
	<td align="center"><a href="https://github.com/asafesouza"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/55165673?v=4" width="100px;" alt=""/><br /><sub><b>Asafe Souza</b></sub></a><br /></td>
	<td align="center"><a href="https://github.com/Gabrielribeirof19"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/65191622?v=4" width="100px;" alt=""/><br /><sub><b>Gabriel De Souza</b></sub></a><br /></td>
	<td align="center"><a href="https://github.com/hannanhunny01"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/30380452?v=4" width="100px;" alt=""/><br /><sub><b>hannan</b></sub></a><br /></td>
	<td align="center"><a href="https://github.com/MatheusHenrickSantos"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/79066829?v=4" width="100px;" alt=""/><br /><sub><b>MatheusHenrickSantos</b></sub></a><br /></td>
	<td align="center"><a href="https://github.com/HacKairos"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/57872849?v=4" width="100px;" alt=""/><br /><sub><b>João Lucas Vas</b></sub></a><br /></td>
    
  </tr>
</table>

---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./.github/LICENSE).


