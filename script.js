document.addEventListener('DOMContentLoaded', () => {

  const scrollToPageTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('backToTop')?.addEventListener('click', scrollToPageTop);
  document.querySelector('.top-logo-button')?.addEventListener('click', scrollToPageTop);

  /* ============================================================
      1. INICIALIZAR IDIOMA
  ============================================================ */
  const savedLang = localStorage.getItem('autkids-language') || 'pt';
  document.documentElement.lang = savedLang;
  if (typeof changeLanguage === 'function') {
    changeLanguage(savedLang);
  }
  updateHeroTitle(savedLang);

  /* ============================================================
      2. SELETOR DE IDIOMAS
  ============================================================ */
  const langTrigger = document.getElementById('langTrigger');
  const langDropdown = document.getElementById('langDropdown');
  const currentFlag = document.getElementById('currentFlag');
  const currentLang = document.getElementById('currentLang');
  const languageOptions = document.querySelectorAll('.language-option');

  if (langTrigger && langDropdown) {

    const languages = {
      pt: { name: 'Português', flag: 'assets/bandeiras/brasil.png' },
      en: { name: 'English', flag: 'assets/bandeiras/eua.png' },
      es: { name: 'Español', flag: 'assets/bandeiras/espanha.png' }
    };

    const languageLabels = {
      pt: { pt: 'Português', en: 'Inglês', es: 'Espanhol' },
      en: { pt: 'Portuguese', en: 'English', es: 'Spanish' },
      es: { pt: 'Portugués', en: 'Inglés', es: 'Español' }
    };

    function applyLanguage(lang) {
      if (!languages[lang]) return;
      currentFlag.src = languages[lang].flag;
      currentLang.textContent = languageLabels[lang][lang];
      languageOptions.forEach(opt => {
        const optionLang = opt.dataset.lang;
        const labelEl = opt.querySelector('span');
        if (labelEl) labelEl.textContent = languageLabels[lang][optionLang] || opt.dataset.name;
        opt.classList.toggle('active', opt.dataset.lang === lang);
      });
      document.documentElement.lang = lang;
      if (typeof changeLanguage === 'function') changeLanguage(lang);
      updateHeroTitle(lang);
      if (typeof window.twRestart === 'function') window.twRestart(lang);
    }

    applyLanguage(savedLang);

    langTrigger.addEventListener('click', e => {
      e.stopPropagation();
      langTrigger.classList.toggle('active');
      langDropdown.classList.toggle('active');
    });

    document.addEventListener('click', e => {
      if (!e.target.closest('.language-selector')) {
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      }
    });

    languageOptions.forEach(option => {
      option.addEventListener('click', () => {
        applyLanguage(option.dataset.lang);
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      });
    });
  }

  /* ============================================================
      3. MENU HAMBURGUER (MOBILE)
  ============================================================ */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const menuDrawer = document.getElementById('menuDrawer');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuClose = document.getElementById('menuClose');

  if (hamburgerBtn && menuDrawer && menuOverlay && menuClose) {
    function openMenu() {
      menuDrawer.classList.add('open');
      menuOverlay.classList.add('open');
      menuDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      menuDrawer.classList.remove('open');
      menuOverlay.classList.remove('open');
      menuDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    hamburgerBtn.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);
    document.getElementById('mobileMenuCta')?.addEventListener('click', closeMenu);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  /* ============================================================
      4. SCROLL REVEAL
  ============================================================ */
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px', threshold: 0.15 });

  document.querySelectorAll(
    'section, .hero-left, .hero-right, .feature, .pricing-left, .pricing-right, .media-item, .testi'
  ).forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  /* ============================================================
      5. CAROUSEL 3D DE PERSONAGENS
  ============================================================ */
  const mockupSlides = document.querySelectorAll('.mockup-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const indicators = document.querySelectorAll('.carousel-indicator');

  if (mockupSlides.length === 0) return;

  let currentIndex = 0;
  const total = mockupSlides.length;
  let autoRotate;

  function getPosition(slideIndex, current, n) {
    const diff = ((slideIndex - current) + n) % n;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right-1';
    if (diff === 2) return 'right-2';
    if (diff === n - 1) return 'left-1';
    if (diff === n - 2) return 'left-2';
    return 'hidden';
  }

  function updateCarousel() {
    mockupSlides.forEach((slide, i) => {
      slide.classList.remove('center', 'right-1', 'right-2', 'left-1', 'left-2', 'hidden');
      slide.classList.add(getPosition(i, currentIndex, total));
    });
    indicators.forEach((ind, i) => ind.classList.toggle('active', i === currentIndex));
  }

  function next() { currentIndex = (currentIndex + 1) % total; updateCarousel(); }
  function prev() { currentIndex = (currentIndex - 1 + total) % total; updateCarousel(); }
  function goTo(i) { currentIndex = i; updateCarousel(); }
  function resetTimer() { clearInterval(autoRotate); autoRotate = setInterval(next, 2500); }

  updateCarousel();
  resetTimer();

  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetTimer(); });
  indicators.forEach((ind, i) => ind.addEventListener('click', () => { goTo(i); resetTimer(); }));
  mockupSlides.forEach((slide, i) => {
    slide.addEventListener('click', () => { if (i !== currentIndex) { goTo(i); resetTimer(); } });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { prev(); resetTimer(); }
    if (e.key === 'ArrowRight') { next(); resetTimer(); }
  });

  /* ============================================================
      6. AOS
  ============================================================ */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out',
      once: true,
      offset: 80,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
  }

  /* ============================================================
      7. TYPEWRITER - integrado ao sistema de idiomas
         As palavras e o sufixo do título mudam por idioma.
         Não usa data-i18n no h1 para preservar o span#tw-word.
  ============================================================ */
  const twWords = {
    pt: ['Aprender', 'Evoluir', 'Expressar'],
    en: ['Learn', 'Grow', 'Express'],
    es: ['Aprender', 'Crecer', 'Expresar']
  };

  const twEl = document.getElementById('tw-word');
  let twTimer = null;
  let twWi = 0, twCi = 0, twDeleting = false;

  function twTick(lang) {
    const words = twWords[lang] || twWords.pt;
    const word = words[twWi % words.length];

    if (!twDeleting) {
      twCi++;
      twEl.textContent = word.slice(0, twCi);
      if (twCi === word.length) {
        twDeleting = true;
        twTimer = setTimeout(() => twTick(lang), 1600);
        return;
      }
      twTimer = setTimeout(() => twTick(lang), 90);
    } else {
      twCi--;
      twEl.textContent = word.slice(0, twCi);
      if (twCi === 0) {
        twDeleting = false;
        twWi = (twWi + 1) % words.length;
        twTimer = setTimeout(() => twTick(lang), 300);
        return;
      }
      twTimer = setTimeout(() => twTick(lang), 55);
    }
  }

  /* Inicia com a primeira palavra já escrita, typewriter começa após 1.8s */
  function twRestart(lang) {
    clearTimeout(twTimer);
    twWi = 0;
    const words = twWords[lang] || twWords.pt;
    twEl.textContent = words[0];
    twCi = words[0].length;
    twDeleting = true;
    twTimer = setTimeout(() => twTick(lang), 1800);
  }

  /* Expõe globalmente para applyLanguage() chamar ao trocar idioma */
  window.twRestart = twRestart;

  if (twEl) {
    const initLang = localStorage.getItem('autkids-language') || 'pt';
    twRestart(initLang);
  }

  /* ============================================================
      8. updateHeroTitle - atualiza sufixo do título por idioma
         sem tocar no span#tw-word
  ============================================================ */

  /* ============================================================
      9. YOUTUBE MODAL - iframe carrega só no clique do play
  ============================================================ */
  const ytPlayBtn = document.getElementById('ytPlayBtn');
  const ytModal = document.getElementById('ytModal');
  const ytModalClose = document.getElementById('ytModalClose');
  const ytIframe = document.getElementById('ytModalIframe');

  if (ytPlayBtn && ytModal && ytIframe) {
    function openYtModal() {
      const vid = ytPlayBtn.dataset.videoId;
      if (!vid) { window.open('https://www.youtube.com/@Autkids01', '_blank', 'noopener,noreferrer'); return; }
      ytIframe.src = `https://www.youtube.com/embed/${vid}?autoplay=1&rel=0`;
      ytModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeYtModal() {
      ytModal.classList.remove('open');
      ytIframe.src = '';
      document.body.style.overflow = '';
    }
    ytPlayBtn.addEventListener('click', openYtModal);
    if (ytModalClose) ytModalClose.addEventListener('click', closeYtModal);
    ytModal.addEventListener('click', e => { if (e.target === ytModal) closeYtModal(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && ytModal.classList.contains('open')) closeYtModal();
    });
  }

  /* ============================================================
      WAITLIST (captação de e-mail - pré-lançamento)
  ============================================================ */
  const WAITLIST_API_BASE_URL = 'https://api.autkids.tech';

  // Mesmo enum de idioma usado pela API de marketing (0=pt, 2=en, 3=es)
  const WAITLIST_LANGUAGE_CODES = { pt: 0, en: 2, es: 3 };

  const waitlistBtn = document.getElementById('waitlistBtn');
  const waitlistBtnText = waitlistBtn ? waitlistBtn.querySelector('.waitlist-btn-text') : null;
  const waitlistName = document.getElementById('waitlistName');
  const waitlistEmail = document.getElementById('waitlistEmail');
  const waitlistTitle = document.getElementById('waitlistTitle');
  const waitlistDesc = document.getElementById('waitlistDesc');
  const waitlistForm = document.getElementById('waitlistForm');
  const waitlistSuccess = document.getElementById('waitlistSuccess');
  const waitlistError = document.getElementById('waitlistError');
  const waitlistRetry = document.getElementById('waitlistRetry');

  if (waitlistBtn && waitlistEmail) {
    const submitWaitlist = async () => {
      const email = waitlistEmail.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (waitlistError) waitlistError.style.display = 'none';

      if (!valid) {
        waitlistEmail.style.borderColor = '#e57373';
        waitlistEmail.focus();
        setTimeout(() => { waitlistEmail.style.borderColor = ''; }, 2000);
        return;
      }

      const lang = localStorage.getItem('autkids-language') || 'pt';
      const fullName = waitlistName ? waitlistName.value.trim() : '';
      const payload = {
        email,
        fullName: fullName || null,
        language: WAITLIST_LANGUAGE_CODES[lang] ?? 0,
      };

      const originalLabel = waitlistBtnText ? waitlistBtnText.textContent : waitlistBtn.textContent;
      waitlistBtn.disabled = true;
      if (waitlistBtnText) waitlistBtnText.textContent = '...';
      else waitlistBtn.textContent = '...';

      try {
        const response = await fetch(`${WAITLIST_API_BASE_URL}/api/marketing/contacts`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          if (waitlistError) waitlistError.style.display = 'flex';
          return;
        }

        waitlistForm.style.display = 'none';
        if (waitlistDesc) waitlistDesc.hidden = true;
        if (waitlistTitle) waitlistTitle.hidden = true;
        waitlistSuccess.style.display = 'flex';
      } catch {
        if (waitlistError) waitlistError.style.display = 'flex';
      } finally {
        waitlistBtn.disabled = false;
        if (waitlistBtnText) waitlistBtnText.textContent = originalLabel;
        else waitlistBtn.textContent = originalLabel;
      }
    };

    waitlistBtn.addEventListener('click', submitWaitlist);
    if (waitlistRetry) {
      waitlistRetry.addEventListener('click', () => {
        if (waitlistName) waitlistName.value = '';
        waitlistEmail.value = '';
        waitlistEmail.style.borderColor = '';
        if (waitlistError) waitlistError.style.display = 'none';
        if (waitlistForm) waitlistForm.style.display = '';
        waitlistEmail.focus();
      });
    }
    waitlistEmail.addEventListener('keydown', e => {
      if (e.key === 'Enter') submitWaitlist();
    });
    if (waitlistName) {
      waitlistName.addEventListener('keydown', e => {
        if (e.key === 'Enter') submitWaitlist();
      });
    }
  }

});

/* Exposta globalmente para ser chamada em applyLanguage() */
function updateHeroTitle(lang) {
  const suffix = document.getElementById('hero-suffix');
  if (!suffix) return;

  const suffixes = {
    pt: ' e se<br /><span class="highlight">divertir</span> - tudo em um <br>aplicativo seguro!',
    en: ' and<br /><span class="highlight">have fun</span> - all in one<br>safe app!',
    es: ' y<br /><span class="highlight">divertirse</span> - todo en una<br>aplicación segura!'
  };

  suffix.innerHTML = suffixes[lang] || suffixes.pt;
}

document.querySelectorAll('a[href="#waitlist"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('#waitlist').scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
});