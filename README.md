# 🐉 Dragon Ball Universe - Frontend

Um frontend moderno e responsivo para explorar o universo de Dragon Ball, desenvolvido em React/Next.js com CSS puro e consumindo uma API REST personalizada.

## ✨ Características

- **Design Temático**: Visual inspirado no universo Dragon Ball com cores vibrantes e elementos estilizados
- **Totalmente Responsivo**: Adaptação perfeita para desktop, tablet e mobile
- **CSS Puro**: Estilização sem frameworks externos, mantendo controle total sobre o design
- **Navegação Intuitiva**: Menu responsivo com animações suaves
- **Consumo de API**: Integração com backend para dados dinâmicos
- **Carregamento Animado**: Estados de loading personalizados para cada seção
- **Acessibilidade**: Implementação de boas práticas de acessibilidade

## 🚀 Tecnologias Utilizadas

- **Next.js 15.5.3** - Framework React com App Router
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **CSS Modules** - Estilização modular e escopo local
- **CSS Puro** - Sem dependências de frameworks CSS
- **JavaScript ES6+** - Recursos modernos da linguagem

## 📱 Páginas Implementadas

### 🏠 Home
- Apresentação geral do universo Dragon Ball
- Seções de funcionalidades com cards interativos
- Call-to-actions para navegação
- Animações de esferas energéticas

### 👨‍🚀 Personagens
- Listagem de personagens com cards estilizados
- Informações detalhadas (raça, planeta, descrição)
- Sistema de hover com overlay
- Imagens responsivas

### 🪐 Planetas
- Exploração de mundos do universo DB
- Estatísticas detalhadas (população, clima, gravidade)
- Tags de habitantes
- Tema espacial com estrelas animadas

### ⚡ Raças
- Catálogo de espécies do universo
- Características físicas e habilidades
- Níveis de poder com cores dinâmicas
- Animações de DNA e elementos genéticos

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para execução

1. **Clone o repositório**
```bash
git clone [seu-repositorio]
cd front-end-dbz
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

4. **Execute o projeto**
```bash
npm run dev
```

5. **Acesse a aplicação**
Abra [http://localhost:3001](http://localhost:3001) no seu navegador

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Executa em modo desenvolvimento
npm run build    # Gera build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa verificação de código
```

## 🎨 Estrutura de Design

### Paleta de Cores
- **Laranja Principal**: `#ff6b00` (Inspirado nas esferas)
- **Azul Principal**: `#004085` (Uniformes e elementos)
- **Amarelo Energia**: `#ffd700` (Efeitos energéticos)
- **Verde Nameku**: `#00ff88` (Elementos namekuseijins)

### Tipografia
- **Títulos**: Impact, Arial Black (estilo marcante)
- **Texto**: Segoe UI, Tahoma (legibilidade)
- **Tamanhos**: Sistema responsivo com clamp()

### Componentes Visuais
- Gradientes para simular energia
- Sombras com blur para profundidade
- Animações CSS para elementos dinâmicos
- Borders e cantos arredondados

## 📁 Estrutura do Projeto

```
src/
├── app/                 # App Router do Next.js
│   ├── globals.css     # Estilos globais e variáveis CSS
│   ├── layout.js       # Layout principal
│   ├── page.jsx        # Página inicial
│   ├── personagens/    # Página de personagens
│   ├── planetas/       # Página de planetas
│   └── racas/          # Página de raças
├── components/         # Componentes reutilizáveis
│   ├── Header.jsx     # Navegação principal
│   ├── Footer.jsx     # Rodapé
│   └── Loading.jsx    # Estados de carregamento
├── styles/            # Estilos adicionais
└── utils/             # Utilitários e configurações
    └── api.js         # Configuração da API
```

## 🔌 Integração com API

### Endpoints Esperados
```javascript
GET /api/personagens    # Lista todos os personagens
GET /api/planetas      # Lista todos os planetas  
GET /api/racas         # Lista todas as raças
```

### Formato de Dados

**Personagens:**
```json
{
  "id": 1,
  "nome": "Goku",
  "raca": "Saiyajin",
  "planeta": "Terra",
  "imagem": "url_da_imagem",
  "descricao": "Descrição do personagem"
}
```

**Planetas:**
```json
{
  "id": 1,
  "nome": "Terra",
  "descricao": "Descrição do planeta",
  "populacao": "7.8 bilhões",
  "clima": "Temperado variado",
  "gravidade": "1x",
  "imagem": "url_da_imagem",
  "habitantes": ["Humanos", "Saiyajins"]
}
```

**Raças:**
```json
{
  "id": 1,
  "nome": "Saiyajin",
  "descricao": "Descrição da raça",
  "caracteristicas": ["Lista", "de", "características"],
  "habilidades": ["Lista", "de", "habilidades"],
  "planeta": "Planeta de origem",
  "populacao": "População atual",
  "imagem": "url_da_imagem",
  "nivelPoder": "Alto"
}
```

## 🎯 Funcionalidades Principais

### ⚡ Responsividade
- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Adaptação com menos colunas
- **Mobile**: Layout single-column com menu lateral

### 🎨 Animações
- **Energy Pulse**: Animação de energia nas esferas
- **Planet Orbit**: Rotação orbital para planetas
- **DNA Spiral**: Rotação de DNA para raças
- **Hover Effects**: Transformações suaves nos cards

### 🔄 Estados de Carregamento
- **Loading Personalizado**: Diferentes animações por página
- **Fallback Data**: Dados de exemplo quando API indisponível
- **Error Handling**: Tratamento gracioso de erros

### 📱 Menu Mobile
- **Slide Animation**: Menu lateral deslizante
- **Overlay**: Fundo escuro para foco
- **Touch Friendly**: Botões otimizados para toque

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Build Manual
```bash
npm run build
npm run start
```

## 📝 Licença

Este é um projeto educacional inspirado na obra de Akira Toriyama. Todos os direitos de Dragon Ball pertencem aos seus respectivos proprietários.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

**Desenvolvido com ❤️ e ⚡ por [Seu Nome]**
