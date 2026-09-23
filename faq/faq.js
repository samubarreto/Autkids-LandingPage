document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
      1. CARREGAR IDIOMA SALVO
  ============================================================ */
  function loadSavedLanguage() {
    const savedLang = localStorage.getItem('autkids-language') || 'pt';
    document.documentElement.lang = savedLang;
    if (typeof changeLanguage === 'function') {
      changeLanguage(savedLang);
    }
  }

  loadSavedLanguage();

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
      pt: { name: 'Português', flag: '../assets/bandeiras/brasil.png'   },
      en: { name: 'English',   flag: '../assets/bandeiras/eua.png'      },
      es: { name: 'Español',   flag: '../assets/bandeiras/espanha.png'  }
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
        const optionLabel = languageLabels[lang][optionLang];
        const labelElement = opt.querySelector('span');
        if (labelElement && optionLabel) {
          labelElement.textContent = optionLabel;
        }
      });

      languageOptions.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
      });

      localStorage.setItem('autkids-language', lang);
      document.documentElement.lang = lang;

      if (typeof changeLanguage === 'function') {
        changeLanguage(lang);
      }
    }

    // Aplica o idioma salvo
    const savedLang = localStorage.getItem('autkids-language') || 'pt';
    applyLanguage(savedLang);

    // Toggle dropdown
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langTrigger.classList.toggle('active');
      langDropdown.classList.toggle('active');
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.language-selector') && !e.target.closest('.language-dropdown')) {
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      }
    });

    // Selecionar idioma
    languageOptions.forEach(option => {
      option.addEventListener('click', () => {
        applyLanguage(option.dataset.lang);
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      });
    });
  }

  /* ============================================================
      3. ACORDEÃO (PERGUNTAS E RESPOSTAS) — por seção + acessível
  ============================================================ */
  let faqUid = 0;

  document.querySelectorAll('.faq-section').forEach(section => {
    const sectionQuestions = Array.from(section.querySelectorAll('.faq-question'));

    sectionQuestions.forEach(question => {
      const answer = question.nextElementSibling;
      faqUid += 1;
      const answerId = `faq-answer-${faqUid}`;
      answer.id = answerId;
      question.setAttribute('aria-expanded', 'false');
      question.setAttribute('aria-controls', answerId);

      question.addEventListener('click', () => {
        const isActive = question.classList.contains('active');

        // Fecha as outras perguntas da mesma seção
        sectionQuestions.forEach(q => {
          q.classList.remove('active');
          q.setAttribute('aria-expanded', 'false');
          const ans = q.nextElementSibling;
          ans.style.maxHeight = null;
          ans.style.paddingTop = '0';
          ans.style.paddingBottom = '0';
        });

        // Abre a clicada (se não estava aberta)
        if (!isActive) {
          question.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          answer.style.paddingTop = '';
          answer.style.paddingBottom = '';
        }
      });
    });
  });

  /* ============================================================
      4. BUSCA
  ============================================================ */
  const searchInput = document.getElementById('faqSearch');
  const noResultsEl = document.getElementById('faqNoResults');
  const faqSections = document.querySelectorAll('.faq-section');

  const normalize = (str) => str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

  if (searchInput && faqSections.length) {
    searchInput.addEventListener('input', () => {
      const term = normalize(searchInput.value.trim());
      let anyVisible = false;

      faqSections.forEach(section => {
        let sectionHasMatch = false;

        section.querySelectorAll('.faq-item').forEach(item => {
          const matches = normalize(item.textContent).includes(term);
          item.hidden = !matches;
          if (matches) sectionHasMatch = true;
        });

        section.hidden = !sectionHasMatch;
        if (sectionHasMatch) anyVisible = true;
      });

      if (noResultsEl) noResultsEl.hidden = anyVisible;
    });
  }

});