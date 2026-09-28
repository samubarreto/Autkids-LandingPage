document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
      3. ACORDEÃO (PERGUNTAS E RESPOSTAS) - por seção + acessível
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