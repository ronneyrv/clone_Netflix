## 🎬 Netflix Clone — Frontend Replication

Este projeto é uma reprodução fiel e responsiva da interface da Netflix, desenvolvida com o objetivo de consolidar conceitos avançados de desenvolvimento frontend, consumo de APIs RESTful e componentização. O projeto consome dados reais de filmes e séries, oferecendo uma experiência de navegação fluida, moderna e sem gargalos de performance.


### 🔗 Demonstração

    https://clone-netflix-snowy-ten.vercel.app


### 🛠️ Stack Tecnológica & Arquitetura

O projeto foi estruturado seguindo boas práticas de clean code, separação de responsabilidades e reutilização de componentes.

    Core: React.js / JavaScript (ES6+)

    Estilização: [Styled Components / CSS Modules] (Garantindo escopo global isolado e estilização dinâmica via Props)

    Consumo de Dados: Axios (Gerenciamento de requisições HTTP e instâncias base para a API)

    Provedor de Dados: TMDB API (The Movie Database)

    Deploy & CI/CD: Vercel

### 🔥 Funcionalidades Implementadas & Desafios Técnicos
#### 1. Consumo Assíncrono e Arquitetura de API

    Implementação de uma instância centralizada do Axios para gerenciar a comunicação com a API do TMDB.

    Manipulação de múltiplos endpoints simultâneos (Trending, Top Rated, Categorias de Ação, Comédia, etc.) utilizando carregamento assíncrono eficiente para evitar o bloqueio da renderização da página.

### 2. Interface Dinâmica e Responsividade

    Banner Principal Dinâmico: Algoritmo implementado para selecionar um filme em destaque aleatório a cada carregamento de página, extraindo a imagem de fundo de alta resolução diretamente da API.

    Carrosséis Horizontais: Listagem de títulos categorizados com comportamento de scroll horizontal fluido, otimizado para navegação via Desktop e Touch em dispositivos móveis.

    Efeitos de Hover Avançados: Transições suaves que ampliam o card do filme em foco sem quebrar o layout dos elementos adjacentes.

### 3. Layout Mobile-First & Responsividade

    Uso de técnicas modernas de CSS ([Flexbox / Grid / Media Queries]) para garantir que a experiência visual seja impecável desde telas pequenas de smartphones até monitores Ultrawide.

## 🚀 Como Executar o Projeto Localmente

Certifique-se de ter o Node.js e um gerenciador de pacotes (NPM ou Yarn) instalados em sua máquina.


### Passo 1: Clonar o Repositório
```
bash

git clone https://github.com/ronneyrv/clone_Netflix.git
cd clone_Netflix
```

### Passo 2: Instalar as Dependências
```
bash

npm install
# ou
yarn install
```

### Passo 3: Configurar as Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto e adicione a sua chave da API do TMDB (caso tenha utilizado variáveis de ambiente para proteger a chave):

```
Snippet de código

REACT_APP_TMDB_API_KEY=sua_chave_aqui
```

### Passo 4: Iniciar o Servidor de Desenvolvimento
```
bash

npm start
# ou
yarn start
```

O projeto abrirá automaticamente no seu navegador no endereço http://localhost:3000.


## 📄 Licença

Este projeto foi desenvolvido estritamente para fins educacionais e de estudo de portfólio. As imagens e dados de filmes pertencem aos seus respectivos criadores e à plataforma TMDB.

#### Desenvolvido com 💻 por Ronney Rocha — Conecte-se comigo no www.linkedin.com/in/ronney-rocha.
