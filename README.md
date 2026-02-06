# Projeto Cypress: Do Zero à Nuvem

Este repositório tem como objetivo demonstrar, de forma **prática e didática**, como configurar, estruturar e executar testes automatizados com **Cypress**, partindo do zero até a execução em ambiente de **CI/CD na nuvem**.

O projeto foi pensado para quem está aprendendo **QA Automation** ou deseja consolidar **boas práticas em automação de testes end-to-end**.

Neste projeto, é possível executar os testes simulando **visualização desktop e mobile**, utilizando comandos já configurados.

---

## Objetivos do Projeto

* Configurar o Cypress do zero
* Estruturar um projeto de automação escalável
* Aplicar boas práticas na escrita de testes
* Executar testes localmente (desktop e mobile)
* Integrar a execução em pipeline CI/CD (nuvem)

---

## Tecnologias Utilizadas

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
</p>

---

## Estrutura do Projeto

```
📦 cypress-do-zero-a-nuvem
 ┣ 📂 cypress 
 ┃ ┣ 📂 e2e             # Casos de teste end-to-end
 ┃ ┣ 📂 fixtures        # Dados de teste (mocks)
 ┃ ┣ 📂 support         # Comandos customizados e configurações
 ┣ 📂 .github/workflows # Pipeline CI/CD
 ┣ 📄 cypress.config.js
 ┣ 📄 package.json
 ┣ 📄 README.md
```

---

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

* **Node.js** (versão LTS recomendada)
* **Git**
* Um editor de código (VS Code é recomendado)

---

## Instalação do Projeto

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto:

```bash
cd cypress-do-zero-a-nuvem
```

3. Instale as dependências:

```bash
npm install
```

---

## Executando os Testes

O projeto já possui **scripts configurados** para facilitar a execução dos testes em **desktop** e **mobile**.

### Modo Interativo (Desktop)

```bash
npm run cy:open
```

---

### Modo Interativo (Mobile)

```bash
npm run cy:open:mobile
```

**Viewport configurado:**

* Largura: `410px`
* Altura: `860px`

---

### Execução Headless (Desktop)

```bash
npm test
```

---

### Execução Headless (Mobile)

```bash
npm run test:mobile
```

---

## Execução na Nuvem (CI/CD)

O projeto conta com uma pipeline de **CI/CD** configurada para:

* Instalar dependências
* Executar os testes Cypress
* Fornecer feedback automático a cada **push** ou **pull request**

Ferramenta utilizada:

* **GitHub Actions**

---

## Contribuição

Contribuições são bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas alterações
4. Abra um Pull Request

---

## Licença

Este projeto é livre para **estudo e aprendizado**.
