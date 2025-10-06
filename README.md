# 🐉 Dragon Ball Universe - Frontend

Projeto desenvolvido em React/Next.js para explorar o universo de Dragon Ball, consumindo uma API REST com dados de personagens, planetas e raças.

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

### Node.js (versão 18 ou superior)
- **Download**: https://nodejs.org/
- **Verificar instalação**: 
  ```bash
  node --version
  npm --version
  ```

## 🚀 Como Executar o Projeto

### Passo 1: Obter o Código do Projeto

**Opção A - Se você recebeu um arquivo ZIP:**
1. Extraia o arquivo ZIP
2. Abra o terminal/prompt de comando
3. Navegue até a pasta do projeto:
   ```bash
   cd caminho/para/dragon-ball-projeto
   ```

**Opção B - Se você tem o link do repositório:**
```bash
git clone https://github.com/giovannig10/dragon-ball-projeto.git
cd dragon-ball-projeto
```

### Passo 2: Instalar as Dependências
No terminal, dentro da pasta do projeto, execute:
```bash
npm install
```
⏰ *Aguarde alguns minutos para o download das dependências*

### Passo 3: Executar o Projeto
```bash
npm run dev
```

### Passo 4: Acessar a Aplicação
Abra seu navegador e acesse:
```
http://localhost:3000
```

## ✅ Verificando se Funcionou

Após executar `npm run dev`, você deve ver no terminal:
```
▲ Next.js 15.5.3
- Local:        http://localhost:3000
- ready - started server on 0.0.0.0:3000
```

No navegador, você verá a página inicial do Dragon Ball Universe.

## 📱 Páginas Disponíveis

Navegue pelo projeto acessando:

- **Página Inicial**: `http://localhost:3000/`
- **Personagens**: `http://localhost:3000/personagens`
- **Planetas**: `http://localhost:3000/planetas`
- **Raças**: `http://localhost:3000/racas`
- **Contato**: `http://localhost:3000/contato`

## 🛠️ Comandos Disponíveis

```bash
npm run dev      # Executa o projeto em modo desenvolvimento
npm run build    # Gera versão otimizada para produção
npm run start    # Executa versão de produção (após build)
npm run lint     # Verifica qualidade do código
```

## ⚠️ Possíveis Problemas e Soluções

### 1. "npm não é reconhecido como comando"
**Problema**: Node.js não está instalado ou não está no PATH
**Solução**: Baixe e instale o Node.js do site oficial

### 2. "Port 3000 is already in use"
**Problema**: Outro projeto está usando a porta 3000
**Solução**: 
- Feche outros projetos Node.js em execução, OU
- Use outra porta: `npm run dev -- -p 3001`

### 3. Erro durante `npm install`
**Problema**: Problemas de conectividade ou cache
**Solução**:
```bash
npm cache clean --force
npm install
```

### 4. Página não carrega ou aparece em branco
**Problema**: JavaScript desabilitado ou erro no código
**Solução**: 
- Verifique se JavaScript está habilitado no navegador
- Verifique o console do navegador (F12) para erros
- Certifique-se de que o terminal ainda está executando

## � Tecnologias Utilizadas

- **Next.js 15.5.3** - Framework React
- **React 19.1.0** - Biblioteca para interfaces
- **CSS Modules** - Estilização componetizada
- **JavaScript ES6+** - Linguagem de programação

## 📁 Estrutura do Projeto

```
dragon-ball-projeto/
├── src/
│   ├── app/                    # Páginas da aplicação (App Router)
│   │   ├── page.jsx           # Página inicial
│   │   ├── layout.js          # Layout principal
│   │   ├── globals.css        # Estilos globais
│   │   ├── contato/           # Página de contato
│   │   ├── personagens/       # Página de personagens
│   │   ├── planetas/          # Página de planetas
│   │   └── racas/             # Página de raças
│   ├── components/            # Componentes reutilizáveis
│   │   ├── Header.jsx         # Cabeçalho com navegação
│   │   ├── Footer.jsx         # Rodapé
│   │   └── Loading.jsx        # Componente de loading
│   └── utils/
│       └── api.js             # Configurações da API
├── public/                    # Imagens e arquivos estáticos
│   └── image/                 # Imagens do projeto
├── package.json               # Dependências e scripts
├── next.config.mjs           # Configurações do Next.js
└── README.md                 # Este arquivo
```

## 🎨 Funcionalidades do Projeto

### Design Responsivo
- Adaptação automática para desktop, tablet e mobile
- Menu lateral em dispositivos móveis
- Cards interativos com hover effects

### Páginas Implementadas
- **Home**: Apresentação do projeto e navegação
- **Personagens**: Lista com cards de personagens (Goku, Vegeta, Piccolo, etc.)
- **Planetas**: Informações sobre planetas (Terra, Nameku, Vegeta)
- **Raças**: Detalhes sobre raças (Saiyajin, Namekuseijin, etc.)
- **Contato**: Formulário de contato estilizado

### Recursos Visuais
- Animações CSS personalizadas
- Paleta de cores temática do Dragon Ball
- Estados de loading customizados
- Efeitos de hover e transições suaves

### Configuração da API

Para usar uma API, crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_API_URL=http://sua-api.com/api
```

### Endpoints Esperados

- `GET /api/personagens` - Lista todos os personagens
- `GET /api/planetas` - Lista todos os planetas  
- `GET /api/racas` - Lista todas as raças

### Funcionamento sem API

**⚠️ IMPORTANTE**: Se a API não estiver disponível, o projeto automaticamente usa dados de exemplo que estão no arquivo `src/utils/api.js`. Isso significa que o projeto funciona 100% offline para demonstração.

### Dados de Exemplo Incluídos

O projeto vem com dados de exemplo para:
- **4 Personagens**: Goku, Vegeta, Piccolo, Gohan
- **3 Planetas**: Terra, Nameku, Vegeta
- **2 Raças**: Saiyajin, Namekuseijin

Estes dados são exibidos quando a API externa não está disponível.

## 💻 Para Parar o Projeto

No terminal onde está executando, pressione:
```
Ctrl + C
```

## 📧 Suporte

Se encontrar problemas:

1. Verifique se seguiu todos os passos na ordem correta
2. Confirme se o Node.js versão 18+ está instalado
3. Certifique-se de estar executando os comandos na pasta correta do projeto
4. Verifique se não há outros projetos usando a porta 3000

---

**Projeto desenvolvido por Giovanni G.**  
**SENAI - Desenvolvimento de Sistemas**  
**Data: Outubro 2024**

### 📝 Notas para Avaliação

- ✅ Projeto funciona 100% offline (com dados de exemplo)
- ✅ Design responsivo testado em diferentes dispositivos
- ✅ Navegação funcional entre todas as páginas
- ✅ Animações e efeitos visuais implementados
- ✅ Código organizado com componentes reutilizáveis
- ✅ Preparado para integração com API externa
