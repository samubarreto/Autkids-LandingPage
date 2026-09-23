document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
      1. SELETOR DE IDIOMAS
  ============================================================ */
  const langTrigger     = document.getElementById('langTrigger');
  const langDropdown    = document.getElementById('langDropdown');
  const currentFlag     = document.getElementById('currentFlag');
  const currentLangEl   = document.getElementById('currentLang');
  const languageOptions = document.querySelectorAll('.language-option');

  const languages = {
    pt: { flag: '../assets/bandeiras/brasil.png' },
    en: { flag: '../assets/bandeiras/eua.png'    },
    es: { flag: '../assets/bandeiras/espanha.png' }
  };

  const languageLabels = {
    pt: { pt: 'Português', en: 'Inglês',    es: 'Espanhol' },
    en: { pt: 'Portuguese', en: 'English',  es: 'Spanish'  },
    es: { pt: 'Portugués',  en: 'Inglés',   es: 'Español'  }
  };

  function applyLanguage(lang) {
    if (!languages[lang]) lang = 'pt';
    if (currentFlag)   currentFlag.src = languages[lang].flag;
    if (currentLangEl) currentLangEl.textContent = languageLabels[lang][lang];
    languageOptions.forEach(opt => {
      const lbl = opt.querySelector('span');
      if (lbl) lbl.textContent = languageLabels[lang][opt.dataset.lang] || opt.dataset.lang;
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
    localStorage.setItem('autkids-language', lang);
    document.documentElement.lang = lang;
    if (typeof changeLanguage === 'function') changeLanguage(lang);
  }

  const savedLang = localStorage.getItem('autkids-language') || 'pt';
  applyLanguage(savedLang);

  if (langTrigger && langDropdown) {
    langTrigger.addEventListener('click', e => {
      e.stopPropagation();
      langTrigger.classList.toggle('active');
      langDropdown.classList.toggle('active');
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('.language-wrapper')) {
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      }
    });
    languageOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        applyLanguage(opt.dataset.lang);
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      });
    });
  }

  /* ============================================================
      2. TOGGLE MENSAL / ANUAL
  ============================================================ */
  const toggleBtn   = document.getElementById('toggleBtn');
  const lblMensal   = document.getElementById('lbl-mensal');
  const lblAnual    = document.getElementById('lbl-anual');
  const priceValues = document.querySelectorAll('.price-value');
  let anual = false;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      anual = !anual;
      toggleBtn.classList.toggle('anual', anual);
      lblMensal.classList.toggle('active', !anual);
      lblAnual.classList.toggle('active', anual);
      document.body.classList.toggle('annual-billing', anual);
      priceValues.forEach(v => {
        v.textContent = anual ? v.dataset.priceAnnual : v.dataset.priceMonthly;
      });
    });
  }

  /* ============================================================
      3. FAQ ACCORDION
  ============================================================ */
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ============================================================
      5. CARROSSEL DE PLANOS - MOBILE
  ============================================================ */
  const plansGrid = document.querySelector('.plans-grid');
  const dots      = document.querySelectorAll('.carousel-dot');

  if (plansGrid && dots.length) {
    function getActiveIndex() {
      const cards   = plansGrid.querySelectorAll('.plan-card');
      const centerX = plansGrid.scrollLeft + plansGrid.clientWidth / 2;
      let closest = 0, minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - centerX);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      return closest;
    }

    function updateDots(index) {
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }

    let scrollTimer;
    plansGrid.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => updateDots(getActiveIndex()), 60);
    }, { passive: true });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const cards = plansGrid.querySelectorAll('.plan-card');
        if (!cards[i]) return;
        const left = cards[i].offsetLeft - (plansGrid.clientWidth - cards[i].offsetWidth) / 2;
        plansGrid.scrollTo({ left, behavior: 'smooth' });
        updateDots(i);
      });
    });

    // Abre o carrossel já no plano Família (recomendado) no mobile
    if (window.matchMedia('(max-width: 700px)').matches) {
      const cards = plansGrid.querySelectorAll('.plan-card');
      const popularIndex = 2;
      const popularCard = cards[popularIndex];
      if (popularCard) {
        plansGrid.scrollLeft = popularCard.offsetLeft - (plansGrid.clientWidth - popularCard.offsetWidth) / 2;
        updateDots(popularIndex);
      }
    }
  }

  /* ============================================================
      6. INDICADOR DE SCROLL - TABELA COMPARATIVA
  ============================================================ */
  const compareWrap = document.querySelector('.compare-wrap');

  if (compareWrap) {
    const checkScrollEnd = () => {
      const atEnd = compareWrap.scrollLeft + compareWrap.clientWidth >= compareWrap.scrollWidth - 2;
      compareWrap.classList.toggle('scrolled-end', atEnd);
    };
    checkScrollEnd();
    compareWrap.addEventListener('scroll', checkScrollEnd, { passive: true });
    window.addEventListener('resize', checkScrollEnd);
  }

});