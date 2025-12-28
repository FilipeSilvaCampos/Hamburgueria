# 🍔 Chefes do Asfalto - Landing Page

Landing page de alta conversão para hamburgueria artesanal urbana.

## 🎯 Objetivo

Criar uma experiência visual impactante que faça o usuário sentir fome imediatamente e clicar no botão de pedido, direcionando para WhatsApp ou sistema próprio.

## 🎨 Identidade Visual

- **Vibe:** Urbana, forte, noturna, street, agressiva (no bom sentido)
- **Cores:** 
  - Fundo: #0a0a0a (preto asfalto), #222222 (cinza chumbo)
  - Destaque: #ff6b1a (laranja fogo), #ffd700 (amarelo sinalização)
  - Texto: #ffffff (branco), #e0e0e0 (cinza claro)

## 📁 Estrutura de Arquivos

```
Hamburguers/
├── index.html          # Estrutura HTML da página
├── styles.css          # Estilos e animações
├── script.js           # Funcionalidades interativas
├── README.md           # Documentação
└── assets/             # (criar para imagens futuras)
    ├── images/
    └── icons/
```

## 🚀 Como Usar

1. **Abrir a página:**
   - Abra o arquivo `index.html` no navegador
   - Ou use Live Server no VS Code

2. **Configurar WhatsApp:**
   - Edite o arquivo `script.js`
   - Linha 3: Altere `5511999999999` para seu número real
   - Formato: código do país + DDD + número (sem espaços ou caracteres especiais)

3. **Configurar URL do App:**
   - Linha 4 do `script.js`: altere `https://app.chefesdoasfalto.com`

4. **Customizar informações:**
   - **Endereço:** Linha 183 do `index.html`
   - **Horários:** Linha 187 do `index.html`
   - **Telefone:** Linha 192 do `index.html`

## 📱 Seções da Página

1. **Hero Section** - Impacto visual imediato
2. **Conceito** - Quem somos
3. **Os Motores da Casa** - Destaques do cardápio
4. **Diferenciais** - Por que escolher
5. **Prova Social** - Depoimento de cliente
6. **Footer de Conversão** - CTA final

## 🎨 Adicionar Imagens Reais

Para substituir os emojis por fotos reais dos hambúrgueres:

1. Adicione as imagens na pasta `assets/images/`
2. Edite o `styles.css` nas linhas 329-348:

```css
.interceptor-image {
    background-image: url('assets/images/interceptor.jpg');
    background-size: cover;
    background-position: center;
}

.nitro-image {
    background-image: url('assets/images/nitro.jpg');
    background-size: cover;
    background-position: center;
}

.combo-image {
    background-image: url('assets/images/combo.jpg');
    background-size: cover;
    background-position: center;
}
```

3. Remova o `::before` dessas classes

## 🔧 Otimizações Implementadas

- ✅ Mobile-first e totalmente responsivo
- ✅ Animações suaves e modernas
- ✅ Efeito parallax no hero
- ✅ Lazy loading para imagens
- ✅ Botões com ripple effect
- ✅ Detecção de dispositivo (mobile/desktop)
- ✅ Redirecionamento inteligente para WhatsApp
- ✅ Tracking de eventos para analytics
- ✅ Acessibilidade (prefers-reduced-motion)

## 📊 Analytics

Para adicionar tracking de conversões:

1. Adicione o Google Analytics no `<head>` do `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

2. Substitua `GA_MEASUREMENT_ID` pelo seu ID do Google Analytics

## 🚀 Deploy

### Opção 1: Netlify (Recomendado)
1. Crie conta em netlify.com
2. Arraste a pasta do projeto
3. Pronto! URL gerada automaticamente

### Opção 2: Vercel
1. Instale Vercel CLI: `npm i -g vercel`
2. Na pasta do projeto: `vercel`
3. Siga as instruções

### Opção 3: GitHub Pages
1. Crie repositório no GitHub
2. Faça push dos arquivos
3. Ative GitHub Pages nas configurações

## 🎨 Customizações Comuns

### Alterar cores principais:
Edite as variáveis CSS no `styles.css` (linhas 8-18):

```css
:root {
    --primary-orange: #ff6b1a;
    --secondary-yellow: #ffd700;
    /* ... outras variáveis ... */
}
```

### Adicionar nova seção:
1. Adicione HTML em `index.html`
2. Estilize em `styles.css`
3. Adicione funcionalidade em `script.js` se necessário

## 📞 Suporte

Para dúvidas ou customizações adicionais, consulte a documentação dos arquivos ou entre em contato.

## 📄 Licença

Projeto desenvolvido para fins comerciais - Chefes do Asfalto © 2025
