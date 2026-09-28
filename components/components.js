(() => {
  const flags = {
    pt: { name: 'Português', flag: 'bandeiras/brasil.png' },
    en: { name: 'English', flag: 'bandeiras/eua.png' },
    es: { name: 'Español', flag: 'bandeiras/espanha.png' }
  };

  const labels = {
    pt: { pt: 'Português', en: 'Inglês', es: 'Espanhol' },
    en: { pt: 'Portuguese', en: 'English', es: 'Spanish' },
    es: { pt: 'Portugués', en: 'Inglés', es: 'Español' }
  };

  const selectorAriaLabels = {
    pt: 'Selecionar idioma',
    en: 'Choose language',
    es: 'Seleccionar idioma'
  };

  const arrow = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>';
  const chevron = '<svg class="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 6L8 9.5L11.5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>';
  const bell = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.27 2.82A2 2 0 0 1 13.73 2.82" /><path d="M18 8a6 6 0 0 0-12 0c0 4.5-2 6-2 6h16s-2-1.5-2-6" /><path d="M9.5 17a2.5 2.5 0 0 0 5 0" /></svg>';
  const socialIcons = {
    instagram: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#ffc300" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    youtube: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#ffc300" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    linkedin: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#ffc300" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    tiktok: '<svg width="24" height="24" viewBox="0 0 16 16" fill="#ffc300" aria-hidden="true"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/></svg>',
    email: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#ffc300" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
  };
  const socialLinksMarkup = (className) => `
    <div class="${className}">
      <a href="https://instagram.com/autkids_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${socialIcons.instagram}</a>
      <a href="https://www.youtube.com/@Autkids01" target="_blank" rel="noopener noreferrer" aria-label="YouTube">${socialIcons.youtube}</a>
      <a href="https://www.linkedin.com/company/autkids/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${socialIcons.linkedin}</a>
      <a href="https://www.tiktok.com/@autkids.oficial" target="_blank" rel="noopener noreferrer" aria-label="TikTok">${socialIcons.tiktok}</a>
      <a href="mailto:suporte@autkids.com" aria-label="Email">${socialIcons.email}</a>
    </div>`;

  function languageOptions(root) {
    return Object.entries(flags).map(([lang, item]) => `
      <button class="language-option" type="button" data-lang="${lang}">
        <img src="${root}assets/${item.flag}" alt=""><span>${item.name}</span>
      </button>`).join('');
  }

  class MobileLanguageSelector extends HTMLElement {
    connectedCallback() {
      const root = this.dataset.root || './';
      this.innerHTML = `
        <div class="language-selector language-selector--shared language-selector--mobile">
          <button class="language-trigger" type="button" aria-label="Selecionar idioma" aria-expanded="false">
            <img class="current-flag" src="${root}assets/bandeiras/brasil.png" alt="">
            <span class="current-language">Português</span>${chevron}
          </button>
          <div class="language-dropdown" hidden>
            <div class="language-grid">${languageOptions(root)}</div>
          </div>
        </div>`;
    }
  }

  class DesktopLanguageSelector extends HTMLElement {
    connectedCallback() {
      const root = this.dataset.root || './';
      this.innerHTML = `
        <div class="language-selector language-selector--shared language-selector--desktop">
          <button class="language-trigger" type="button" aria-label="Selecionar idioma" aria-expanded="false">
            <img class="current-flag" src="${root}assets/bandeiras/brasil.png" alt="">
            <span class="current-language">Português</span>${chevron}
          </button>
          <div class="language-dropdown" hidden>
            <div class="language-grid">${languageOptions(root)}</div>
          </div>
        </div>`;
    }
  }

  class MobileHeader extends HTMLElement {
    connectedCallback() {
      const root = this.dataset.root || './';
      const isHome = this.hasAttribute('data-homepage');
      const startControl = isHome
        ? `<button class="hamburger-btn" id="hamburgerBtn" type="button" aria-label="Abrir menu" aria-controls="menuDrawer" aria-expanded="false"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /></svg></button>`
        : `<a href="${root}index.html" class="back-btn">${arrow}<span data-i18n="btn_back">Voltar</span></a>`;
      const waitlistHref = isHome ? '#waitlist' : `${root}index.html#waitlist`;
      const drawer = isHome ? `
        <div class="mobile-menu-overlay" id="menuOverlay"></div>
        <aside class="mobile-menu-drawer" id="menuDrawer" aria-hidden="true" role="dialog" aria-label="Menu de navegação">
          <div class="mobile-menu-header"><span>Autkids</span><button class="mobile-menu-close" id="menuClose" type="button" aria-label="Fechar menu"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="m18 6-12 12M6 6l12 12" /></svg></button></div>
          <nav class="mobile-menu-nav">
            <a href="faq/faq.html" data-i18n="footer_help">Central de Ajuda</a>
            <a href="terms-of-use/terms.html" data-i18n="footer_terms">Termos de Uso</a>
            <a href="privacy-policy/privacy.html" data-i18n="footer_privacy">Política de Privacidade</a>
          </nav>
          <div class="mobile-menu-footer">
            <a href="#waitlist" class="mobile-menu-cta" id="mobileMenuCta">${bell}<span data-i18n="nav_download">Novidades</span></a>
            <div class="mobile-menu-social"><span data-i18n="footer_social">Entre em contato conosco:</span>${socialLinksMarkup('mobile-menu-social-links')}</div>
          </div>
        </aside>` : '';

      this.innerHTML = `${drawer}
        <header class="top-flags shared-header shared-header--mobile">
          <div class="site-header__inner">
            <div class="site-header__identity">${startControl}</div>
            <div class="site-header__actions">
              <a href="${waitlistHref}" class="header-btn header-btn--download site-header__updates">${bell}<span data-i18n="nav_download">Novidades</span></a>
              <mobile-language-selector data-root="${root}"></mobile-language-selector>
            </div>
          </div>
        </header>`;
    }
  }

  class DesktopHeader extends HTMLElement {
    connectedCallback() {
      const root = this.dataset.root || './';
      const isHome = this.hasAttribute('data-homepage');
      const identity = isHome
        ? `<button class="top-logo-button" type="button" aria-label="Voltar ao topo"><img src="${root}assets/Lp_inicial/adaptive-icon.png" alt="Autkids" class="top-icon"></button>`
        : `<div class="site-header__identity"><a href="${root}index.html" class="back-btn">${arrow}<span data-i18n="btn_back">Voltar</span></a></div>`;
      const homeAction = isHome
        ? `<a href="#waitlist" class="header-btn header-btn--download">${bell}<span data-i18n="nav_download">Novidades</span></a>`
        : '';

      this.innerHTML = `
        <header class="top-flags shared-header shared-header--desktop">
          <div class="site-header__inner">
            ${identity}
            <div class="site-header__actions">${homeAction}<desktop-language-selector data-root="${root}"></desktop-language-selector></div>
          </div>
        </header>`;
    }
  }

  const footerMarkup = (root, size) => `
    <footer class="site-footer site-footer--${size}">
      <div class="footer-top">
        <div class="footer-inner">
          <a class="footer-brand" href="${root}index.html" aria-label="Autkids, página inicial">
            <img src="${root}assets/Lp_inicial/LogoAutkids.png" alt="Autkids">
          </a>
          <nav class="footer-links" aria-label="Links do rodapé">
            <a href="${root}faq/faq.html" data-i18n="footer_help">Central de Ajuda</a>
            <a href="${root}terms-of-use/terms.html" data-i18n="footer_terms">Termos de Uso</a>
            <a href="${root}privacy-policy/privacy.html" data-i18n="footer_privacy">Política de Privacidade</a>
          </nav>
          <div class="footer-right-group">
            <div class="social-group">
              <span data-i18n="footer_social">Entre em contato conosco:</span>
              ${socialLinksMarkup('social-links')}
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-bar footer-mini"><span data-i18n="footer_rights"></span></div>
    </footer>`;

  class MobileFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = footerMarkup(this.dataset.root || './', 'mobile');
    }
  }

  class DesktopFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = footerMarkup(this.dataset.root || './', 'desktop');
    }
  }

  customElements.define('mobile-language-selector', MobileLanguageSelector);
  customElements.define('desktop-language-selector', DesktopLanguageSelector);
  customElements.define('mobile-header', MobileHeader);
  customElements.define('desktop-header', DesktopHeader);
  customElements.define('mobile-footer', MobileFooter);
  customElements.define('desktop-footer', DesktopFooter);

  document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('autkids-language') || 'pt';

    function applyLanguage(lang) {
      if (!flags[lang]) lang = 'pt';
      localStorage.setItem('autkids-language', lang);
      document.documentElement.lang = lang;

      document.querySelectorAll('mobile-language-selector, desktop-language-selector').forEach(selector => {
        const root = selector.dataset.root || './';
        const trigger = selector.querySelector('.language-trigger');
        const flag = selector.querySelector('.current-flag');
        const currentLabel = selector.querySelector('.current-language');
        if (flag) flag.src = `${root}assets/${flags[lang].flag}`;
        if (currentLabel) currentLabel.textContent = labels[lang][lang];
        if (trigger) trigger.setAttribute('aria-label', selectorAriaLabels[lang]);
        selector.querySelectorAll('.language-option').forEach(option => {
          const optionLang = option.dataset.lang;
          const optionFlag = option.querySelector('img');
          const optionLabel = option.querySelector('span');
          if (optionFlag) optionFlag.src = `${root}assets/${flags[optionLang].flag}`;
          if (optionLabel) optionLabel.textContent = labels[lang][optionLang];
          option.classList.toggle('active', optionLang === lang);
        });
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });

      if (typeof changeLanguage === 'function') changeLanguage(lang);
      if (typeof updateHeroTitle === 'function') updateHeroTitle(lang);
      if (typeof window.twRestart === 'function') window.twRestart(lang);
    }

    document.querySelectorAll('mobile-language-selector, desktop-language-selector').forEach(selector => {
      const trigger = selector.querySelector('.language-trigger');
      const dropdown = selector.querySelector('.language-dropdown');
      if (!trigger || !dropdown) return;

      trigger.addEventListener('click', event => {
        event.stopPropagation();
        const willOpen = dropdown.hidden;
        document.querySelectorAll('.language-dropdown').forEach(menu => {
          menu.hidden = true;
          menu.classList.remove('active');
        });
        document.querySelectorAll('.language-trigger').forEach(button => {
          button.classList.remove('active');
          button.setAttribute('aria-expanded', 'false');
        });
        dropdown.hidden = !willOpen;
        dropdown.classList.toggle('active', willOpen);
        trigger.classList.toggle('active', willOpen);
        trigger.setAttribute('aria-expanded', String(willOpen));
      });

      selector.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', () => {
          applyLanguage(option.dataset.lang);
          dropdown.hidden = true;
          dropdown.classList.remove('active');
          trigger.classList.remove('active');
        });
      });
    });

    document.addEventListener('click', event => {
      if (event.target.closest('mobile-language-selector, desktop-language-selector')) return;
      document.querySelectorAll('.language-dropdown').forEach(menu => {
        menu.hidden = true;
        menu.classList.remove('active');
      });
      document.querySelectorAll('.language-trigger').forEach(button => {
        button.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
      });
    });

    applyLanguage(savedLanguage);
  });
})();
