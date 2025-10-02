# Guia de Contribuição - Limeira Aura Logo

Obrigado por considerar contribuir com o projeto **Limeira Aura Logo**! Este documento fornece diretrizes e boas práticas para garantir que as contribuições sejam consistentes e de alta qualidade.

## Índice

- [Requisitos](#requisitos)
- [Como Abrir uma Issue](#como-abrir-uma-issue)
- [Criação de Branches](#criação-de-branches)
- [Como Abrir um Pull Request](#como-abrir-um-pull-request)
- [Política de Revisão de Código](#política-de-revisão-de-código)
- [Integração Contínua (CI)](#integração-contínua-ci)
- [Deploy](#deploy)
- [Wiki e Documentação](#wiki-e-documentação)
- [Boas Práticas](#boas-práticas)

---

## Requisitos

Antes de começar a contribuir, certifique-se de ter os seguintes requisitos instalados:

### Ferramentas Necessárias

- **Node.js** (versão 18 ou superior) - [Instale com nvm](https://github.com/nvm-sh/nvm)
- **npm** ou **bun** para gerenciamento de pacotes
- **Git** para controle de versão
- Editor de código (recomendamos VS Code)

### Configuração Inicial

1. Clone o repositório:
   ```bash
   git clone https://github.com/limeiralog/limeira-aura-logo.git
   cd limeira-aura-logo
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   bun install
   ```

3. Execute o projeto localmente:
   ```bash
   npm run dev
   # ou
   bun dev
   ```

---

## Como Abrir uma Issue

As issues são essenciais para rastrear bugs, sugerir melhorias e discutir novas funcionalidades.

### Tipos de Issues

1. **Bug Report**: Para reportar problemas ou comportamentos inesperados
2. **Feature Request**: Para sugerir novas funcionalidades
3. **Documentation**: Para melhorias na documentação
4. **Question**: Para dúvidas gerais sobre o projeto

### Boas Práticas ao Abrir Issues

- Use um título claro e descritivo
- Forneça contexto suficiente sobre o problema ou sugestão
- Inclua capturas de tela quando aplicável
- Para bugs, inclua:
  - Passos para reproduzir
  - Comportamento esperado vs. comportamento atual
  - Ambiente (navegador, sistema operacional, etc.)

---

## Criação de Branches

Seguimos uma estratégia de branches organizada para manter o código limpo e rastreável.

### Nomenclatura de Branches

Use o seguinte padrão para nomear suas branches:

- `feature/nome-da-funcionalidade` - Para novas funcionalidades
- `bugfix/descricao-do-bug` - Para correção de bugs
- `hotfix/descricao-urgente` - Para correções urgentes em produção
- `docs/descricao-da-documentacao` - Para atualizações de documentação
- `refactor/descricao-da-refatoracao` - Para refatorações de código

### Exemplo

```bash
git checkout -b feature/adicionar-novo-logo
```

---

## Como Abrir um Pull Request

Pull Requests (PRs) são a principal forma de contribuir com código para o projeto.

### Passos para Criar um PR

1. **Crie uma branch** seguindo as convenções de nomenclatura
2. **Faça suas alterações** e commits com mensagens descritivas
3. **Push para o repositório**:
   ```bash
   git push origin feature/sua-branch
   ```
4. **Abra o PR** no GitHub
5. **Preencha o template** do PR com todas as informações necessárias
6. **Aguarde a revisão** do código

### Template do Pull Request

Ao abrir um PR, preencha o template disponível no repositório, incluindo:

- Descrição das alterações
- Tipo de mudança (bugfix, feature, etc.)
- Checklist de verificação
- Issues relacionadas
- Screenshots (se aplicável)

---

## Política de Revisão de Código

Todas as contribuições passam por um processo de revisão para garantir qualidade e consistência.

### Processo de Revisão

1. **Aprovação Necessária**: Pelo menos 1 aprovação de um mantenedor é necessária
2. **Checks Automatizados**: Todos os checks de CI devem passar
3. **Resolução de Comentários**: Todos os comentários devem ser resolvidos antes do merge

### O que os Revisores Avaliam

- Qualidade e clareza do código
- Aderência às convenções do projeto
- Testes adequados
- Documentação atualizada
- Ausência de breaking changes não documentadas

---

## Integração Contínua (CI)

O projeto utiliza GitHub Actions para automatizar testes e verificações.

### Checks Automáticos

Cada PR passa pelos seguintes checks:

1. **Linting**: Verificação de estilo de código (ESLint)
2. **Type Checking**: Verificação de tipos TypeScript
3. **Build**: Compilação do projeto
4. **Tests**: Execução de testes automatizados (quando disponíveis)

### Como Executar Localmente

```bash
# Linting
npm run lint

# Type checking
npm run type-check

# Build
npm run build
```

---

## Deploy

O deploy do projeto é automatizado e gerenciado através da plataforma Lovable.

### Processo de Deploy

1. **Desenvolvimento**: Alterações são feitas em branches de feature
2. **Pull Request**: PR é criado e revisado
3. **Merge para Main**: Após aprovação, o PR é merged para a branch `main`
4. **Deploy Automático**: Lovable detecta as alterações e realiza o deploy automaticamente

### Ambientes

- **Production**: Branch `main` - deploy automático
- **Preview**: PRs geram URLs de preview automaticamente

### Gerenciamento de Secrets

O projeto utiliza GitHub Secrets para variáveis sensíveis:

- `DATABASE_URL`
- `DEPLOY_API_KEY`
- `SERVICE_TOKEN`

Nunca commite secrets ou credenciais no código.

---

## Wiki e Documentação

A documentação é uma parte essencial do projeto.

### Onde Documentar

1. **README.md**: Visão geral e instruções básicas
2. **CONTRIBUTING.md** (este arquivo): Guia de contribuição
3. **Wiki do GitHub**: Documentação detalhada e tutoriais
4. **Comentários no Código**: Para lógica complexa

### Atualizando a Documentação

Sempre que adicionar uma nova funcionalidade ou fazer alterações significativas:

- Atualize o README.md se necessário
- Adicione ou atualize páginas na Wiki
- Documente funções e componentes complexos
- Atualize o changelog (se aplicável)

---

## Boas Práticas

### Commits

- Use mensagens de commit claras e descritivas
- Siga o padrão de commits convencionais quando possível:
  - `feat:` para novas funcionalidades
  - `fix:` para correções de bugs
  - `docs:` para atualizações de documentação
  - `refactor:` para refatorações
  - `style:` para alterações de formatação
  - `test:` para adição ou modificação de testes

### Código

- **Mantenha o código limpo e legível**
- **Siga as convenções de estilo do projeto** (ESLint/Prettier)
- **Evite duplicação de código**
- **Escreva código autodocumentável**
- **Adicione comentários quando necessário**

### TypeScript

- Sempre defina tipos explícitos
- Evite usar `any`
- Utilize interfaces e types apropriadamente
- Aproveite os recursos de type safety

### React/Vite

- Use componentes funcionais com hooks
- Mantenha componentes pequenos e focados
- Extraia lógica complexa em hooks customizados
- Utilize Tailwind CSS seguindo as convenções do projeto

### Testes

- Escreva testes para funcionalidades críticas
- Mantenha testes simples e focados
- Use nomes descritivos para os testes

### Performance

- Otimize imagens e assets
- Minimize o uso de dependências externas
- Considere lazy loading quando apropriado
- Monitore o tamanho do bundle

---

## Precisa de Ajuda?

Se você tiver dúvidas ou precisar de ajuda:

1. Consulte a [Wiki do projeto](https://github.com/limeiralog/limeira-aura-logo/wiki)
2. Abra uma issue com a tag "question"
3. Entre em contato com os mantenedores

---

## Código de Conduta

Ao contribuir com este projeto, você concorda em seguir nosso Código de Conduta (se aplicável). Seja respeitoso, colaborativo e construtivo em todas as interações.

---

**Obrigado por contribuir com o Limeira Aura Logo! 🎨✨**
