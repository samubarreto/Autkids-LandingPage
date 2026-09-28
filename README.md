<img width="1393" height="448" alt="image" src="https://github.com/user-attachments/assets/d38b08bf-89ed-4f0a-b702-c57f442e723a" />

## Componentes compartilhados

As telas usam os componentes de `components/components.js` e `components/components.css` para manter os cabeçalhos, seletores de idioma e rodapés consistentes. Em uma nova página, carregue o CSS depois do estilo próprio da tela e o JavaScript antes do arquivo de traduções:

```html
<link rel="stylesheet" href="../components/components.css">
```

```html
<mobile-header data-root="../"></mobile-header>
<desktop-header data-root="../"></desktop-header>
<!-- conteúdo da página -->
<mobile-footer data-root="../"></mobile-footer>
<desktop-footer data-root="../"></desktop-footer>

<script src="../components/components.js"></script>
<script src="translation-page.js"></script>
```

Use `data-root="./"` para arquivos na raiz e `data-root="../"` para arquivos dentro de uma pasta. Na página inicial, adicione `data-homepage` nos dois cabeçalhos para habilitar o menu hambúrguer no mobile. Nas páginas internas, omita esse atributo para exibir o botão voltar.

O botão Novidades usa `nav_download`. O rodapé usa `footer_help`, `footer_terms`, `footer_privacy`, `footer_social` e `footer_rights`.
