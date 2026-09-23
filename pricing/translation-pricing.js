/* ========================================
   PRICING - TRADUÇÕES (PT / EN / ES)
   Linguagem de benefícios, não de recursos técnicos
======================================== */

const currentYear = new Date().getFullYear();

const pricingTranslations = {

  /* ---- PORTUGUÊS ---- */
  pt: {
    page_title: 'Autkids | Planos',
    btn_back: 'Voltar',
    hero_badge: 'Em breve',
    hero_title: 'Escolha o plano <em>ideal para você</em>',
    hero_desc: 'Simples, transparentes e com a criança sempre em primeiro lugar.',
    toggle_monthly: 'Mensal',
    toggle_annual: 'Anual',
    toggle_save: 'Economize 10%',
    price_month: '/mês',
    plan_essential_annual_note: 'R$ 324,99 cobrados uma vez ao ano',
    plan_family_annual_note: 'R$ 649,99 cobrados uma vez ao ano',

    /* GRATUITO */
    plan_free_label: 'Para famílias conhecerem o app',
    plan_free_title: 'Gratuito',
    plan_free_lock: 'Sempre gratuito',
    plan_free_desc: 'Comece sem pagar nada e descubra como o Autkids pode ajudar sua criança a se comunicar.',
    plan_free_stat1: '1 Criança',
    plan_free_stat2: '1 prancha personalizada + padrão',
    plan_free_stat3: '10 Cards personalizados',
    plan_free_stat4: '1 Jogo',
    plan_free_f1: '1 prancha personalizada além da padrão',
    plan_free_f2: '5 saldos gratuitos vitalícios de Áudio com IA',
    plan_free_f3: 'Até 10 cards personalizados',
    plan_free_f4: 'Troca de imagem em conteúdo padrão',

    /* ESSENCIAL */
    plan_essential_label: 'Para famílias que querem personalizar',
    plan_essential_title: 'Essencial',
    plan_essential_desc: 'Tudo do gratuito, sem interrupções - pensado para a rotina da sua família.',
    plan_essential_stat1: '1 Criança',
    plan_essential_stat2: 'Pranchas ilimitadas',
    plan_essential_stat3: '120 Cards personalizados',
    plan_essential_stat4: '4 Jogos',
    plan_essential_f1: 'Tudo do plano Gratuito',
    plan_essential_f2: '100% sem anúncios',
    plan_essential_f3: 'Relatório completo de uso da criança',
    plan_essential_f4: 'Relatório dos resultados dos jogos',
    plan_essential_f5: 'Exportação dos relatórios',
    plan_essential_f6: '10 áudios com IA por mês',

    /* FAMÍLIA */
    popular_badge: '⭐ Mais popular',
    plan_family_label: 'Para uso intenso e múltiplas crianças',
    plan_family_title: 'Família',
    plan_family_desc: 'Tudo do Essencial, com espaço para cada filho ter seu próprio perfil personalizado.',
    plan_family_stat1: '3 Crianças',
    plan_family_stat2: 'Pranchas ilimitadas',
    plan_family_stat3: '230 Cards personalizados',
    plan_family_stat4: '4 Jogos',
    plan_family_f1: 'Tudo do plano Essencial',
    plan_family_f2: '20 áudios com IA por mês',

    /* PROFISSIONAL */
    plan_pro_label: 'Para instituições, clínicas, escolas e profissionais da área',
    plan_pro_title: 'Profissional',
    plan_pro_desc: 'Tudo do Família, com um espaço compartilhado para toda a equipe acompanhar cada criança.',
    plan_pro_stat1: '100 Crianças (por colaborador)',
    plan_pro_stat2: 'Pranchas ilimitadas',
    plan_pro_stat3: '230 Cards personalizados',
    plan_pro_stat4: '4 Jogos',
    plan_pro_f1: 'Sob medida, totalmente adaptado às suas necessidades',
    plan_pro_f2: 'Recursos dedicados por colaborador',
    plan_pro_f3: 'Suporte prioritário',
    plan_pro_f4: 'Perfis separados por colaborador',
    plan_pro_f5: 'Relatórios de uso por colaborador',
    plan_pro_contact: 'Fale com a equipe',
    plan_pro_cta: 'Falar com a equipe',

    /* CTA único */
    plan_cta: 'Entrar na lista de espera',

    /* TABELA */
    compare_title: 'O que está incluído em cada plano',
    compare_child_area: 'Área da criança sem anúncios',
    compare_no_ads: 'Sem anúncios em nenhuma área',
    compare_images: 'Imagens para comunicação',
    compare_custom_images: 'Cards personalizados',
    compare_voices: 'Áudios por IA',
    compare_profiles: 'Crianças',
    compare_games: 'Jogos educativos',
    compare_reports: 'Relatório de uso',
    compare_team: 'Espaço para equipe',

    /* Valores da tabela */
    compare_images_free: '150',
    compare_images_essential: 'Todas',
    compare_images_family: 'Todas',
    compare_images_pro: 'Todas',
    compare_custom_free: '10',
    compare_custom_essential: '120',
    compare_custom_family: '230',
    compare_custom_pro: '230 por colaborador',
    compare_voices_free: '5 vitalícios',
    compare_voices_essential: '10 por mês',
    compare_voices_family: '20 por mês',
    compare_voices_pro: 'Sob medida',
    compare_profiles_free: '1',
    compare_profiles_essential: '1',
    compare_profiles_family: '3',
    compare_profiles_pro: '100 por colaborador',
    compare_games_free: '1',
    compare_games_essential: '4',
    compare_games_family: '4',
    compare_games_pro: '4',

    /* WAITLIST */
    waitlist_title: 'Fique por dentro das novidades',
    waitlist_desc: 'Cadastre seu e-mail para receber novidades, dicas e promoções do Autkids.',
    waitlist_name_placeholder: 'Seu nome (opcional)',
    waitlist_placeholder: 'seu@email.com',
    waitlist_btn: 'Entrar na lista',
    waitlist_success: 'Ótimo! Te avisamos em breve 💛',
    waitlist_trust: 'Sem spam. Cancele quando quiser.',

    /* FAQ */
    faq_title: 'Perguntas frequentes',
    faq_q1: 'Como faço para assinar um plano?',
    faq_a1: 'Assim que o Autkids for lançado nas lojas de aplicativos, você vai poder baixá-lo gratuitamente, criar sua conta e escolher o plano ideal direto no app. Dá pra mudar ou cancelar quando quiser. Entre na lista de espera pra ser avisado assim que isso acontecer.',
    faq_q2: 'A área da criança realmente não tem anúncios?',
    faq_a2: 'Sim! A tela que a criança usa é 100% livre de anúncios em todos os planos. No plano gratuito, pode aparecer um anúncio discreto na área de configuração dos responsáveis - nunca na frente da criança.',
    faq_q3: 'Posso mudar de plano depois?',
    faq_a3: 'Claro! Você pode fazer upgrade ou downgrade a qualquer momento, sem complicação.',
    faq_q4: 'O plano Profissional funciona para clínicas pequenas?',
    faq_a4: 'Sim! O plano é sob medida para instituições, clínicas, escolas e profissionais da área, com recursos dedicados por colaborador. Entre em contato para saber mais sobre condições especiais.',

    footer_rights: `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-05. Todos os direitos reservados`,
  },

  /* ---- ENGLISH ---- */
  en: {
    page_title: 'Autkids | Plans',
    btn_back: 'Back',
    hero_badge: 'Coming soon',
    hero_title: 'Choose the <em>right plan for you</em>',
    hero_desc: 'Simple, transparent, and always putting the child first.',
    toggle_monthly: 'Monthly',
    toggle_annual: 'Annual',
    toggle_save: 'Save 10%',
    price_month: '/mo',
    plan_essential_annual_note: 'R$ 324,99 billed once a year',
    plan_family_annual_note: 'R$ 649,99 billed once a year',

    plan_free_label: 'For families to try the app',
    plan_free_title: 'Free',
    plan_free_lock: 'Always free',
    plan_free_desc: 'Start for free and discover how Autkids can help your child communicate.',
    plan_free_stat1: '1 Child',
    plan_free_stat2: '1 custom board + standard',
    plan_free_stat3: '10 custom cards',
    plan_free_stat4: '1 Game',
    plan_free_f1: '1 custom board in addition to the standard one',
    plan_free_f2: '5 free lifetime AI audio credits',
    plan_free_f3: 'Up to 10 custom cards',
    plan_free_f4: 'Swap images in standard content',

    plan_essential_label: 'For families who want to personalize',
    plan_essential_title: 'Essential',
    plan_essential_desc: 'Everything in Free, without interruptions - designed for your family routine.',
    plan_essential_stat1: '1 Child',
    plan_essential_stat2: 'Unlimited boards',
    plan_essential_stat3: '120 custom cards',
    plan_essential_stat4: '4 Games',
    plan_essential_f1: 'Everything in Free',
    plan_essential_f2: '100% ad-free',
    plan_essential_f3: "Full report of your child's usage",
    plan_essential_f4: 'Game results report',
    plan_essential_f5: 'Export your reports',
    plan_essential_f6: '10 AI audios per month',

    popular_badge: '⭐ Most popular',
    plan_family_label: 'For heavy use and multiple children',
    plan_family_title: 'Family',
    plan_family_desc: 'Everything in Essential, with space for each child to have their own personalized profile.',
    plan_family_stat1: '3 Children',
    plan_family_stat2: 'Unlimited boards',
    plan_family_stat3: '230 custom cards',
    plan_family_stat4: '4 Games',
    plan_family_f1: 'Everything in Essential',
    plan_family_f2: '20 AI audios per month',

    plan_pro_label: 'For institutions, clinics, schools, and professionals',
    plan_pro_title: 'Professional',
    plan_pro_desc: 'Everything in Family, with a shared workspace for the whole team to follow each child.',
    plan_pro_stat1: '100 Children (per staff member)',
    plan_pro_stat2: 'Unlimited boards',
    plan_pro_stat3: '230 custom cards',
    plan_pro_stat4: '4 Games',
    plan_pro_f1: 'Tailor-made, fully adapted to your needs',
    plan_pro_f2: 'Dedicated resources per staff member',
    plan_pro_f3: 'Priority support',
    plan_pro_f4: 'Separate profiles per staff member',
    plan_pro_f5: 'Usage reports per staff member',
    plan_pro_contact: 'Talk to our team',
    plan_pro_cta: 'Talk to our team',

    plan_cta: 'Join the waitlist',

    compare_title: 'What is included in each plan',
    compare_child_area: "Child's area ad-free",
    compare_no_ads: 'Ad-free in every area',
    compare_images: 'Communication images',
    compare_custom_images: 'Custom cards',
    compare_voices: 'AI audios',
    compare_profiles: 'Children',
    compare_games: 'Educational games',
    compare_reports: 'Usage report',
    compare_team: 'Team workspace',

    /* Table cell values */
    compare_images_free: '150',
    compare_images_essential: 'All',
    compare_images_family: 'All',
    compare_images_pro: 'All',
    compare_custom_free: '10',
    compare_custom_essential: '120',
    compare_custom_family: '230',
    compare_custom_pro: '230 per staff member',
    compare_voices_free: '5 lifetime',
    compare_voices_essential: '10 / month',
    compare_voices_family: '20 / month',
    compare_voices_pro: 'Tailor-made',
    compare_profiles_free: '1',
    compare_profiles_essential: '1',
    compare_profiles_family: '3',
    compare_profiles_pro: '100 per staff member',
    compare_games_free: '1',
    compare_games_essential: '4',
    compare_games_family: '4',
    compare_games_pro: '4',

    waitlist_title: 'Stay in the loop',
    waitlist_desc: 'Leave your email to get Autkids news, tips, and special offers.',
    waitlist_name_placeholder: 'Your name (optional)',
    waitlist_placeholder: 'your@email.com',
    waitlist_btn: 'Join the list',
    waitlist_success: "Great! We'll let you know soon 💛",
    waitlist_trust: 'No spam. Cancel anytime.',

    faq_title: 'Frequently asked questions',
    faq_q1: 'How do I subscribe to a plan?',
    faq_a1: 'Once Autkids launches on the app stores, you\'ll be able to download it for free, create your account, and choose your plan right in the app. You can change or cancel anytime. Join the waitlist to be notified as soon as that happens.',
    faq_q2: "Is the child's area really ad-free?",
    faq_a2: "Yes! The screen your child uses is 100% ad-free on all plans. On the free plan, a discreet ad may appear in the parent settings area - never in front of the child.",
    faq_q3: 'Can I change my plan later?',
    faq_a3: 'Of course! You can upgrade or downgrade at any time, hassle-free.',
    faq_q4: 'Does the Professional plan work for small clinics?',
    faq_a4: 'Yes! The plan is tailor-made for institutions, clinics, schools, and professionals, with dedicated resources per staff member. Contact us for more about special conditions.',

    footer_rights: `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-05. All rights reserved`,
  },

  /* ---- ESPAÑOL ---- */
  es: {
    page_title: 'Autkids | Planes',
    btn_back: 'Volver',
    hero_badge: 'Próximamente',
    hero_title: 'Elige el plan <em>ideal para ti</em>',
    hero_desc: 'Simples, transparentes y siempre con el niño primero.',
    toggle_monthly: 'Mensual',
    toggle_annual: 'Anual',
    toggle_save: 'Ahorra 10%',
    price_month: '/mes',
    plan_essential_annual_note: 'R$ 324,99 cobrados una vez al año',
    plan_family_annual_note: 'R$ 649,99 cobrados una vez al año',

    plan_free_label: 'Para que las familias conozcan la app',
    plan_free_title: 'Gratuito',
    plan_free_lock: 'Siempre gratuito',
    plan_free_desc: 'Empieza sin pagar nada y descubre cómo Autkids puede ayudar a tu hijo a comunicarse.',
    plan_free_stat1: '1 Niño',
    plan_free_stat2: '1 tablero personalizado + estándar',
    plan_free_stat3: '10 cards personalizadas',
    plan_free_stat4: '1 Juego',
    plan_free_f1: '1 tablero personalizado además del estándar',
    plan_free_f2: '5 saldos gratuitos vitalicios de Audio con IA',
    plan_free_f3: 'Hasta 10 cards personalizadas',
    plan_free_f4: 'Cambio de imagen en contenido estándar',

    plan_essential_label: 'Para familias que quieren personalizar',
    plan_essential_title: 'Esencial',
    plan_essential_desc: 'Todo lo del gratuito, sin interrupciones - pensado para la rutina de tu familia.',
    plan_essential_stat1: '1 Niño',
    plan_essential_stat2: 'Tableros ilimitados',
    plan_essential_stat3: '120 cards personalizadas',
    plan_essential_stat4: '4 Juegos',
    plan_essential_f1: 'Todo del plan Gratuito',
    plan_essential_f2: '100% sin anuncios',
    plan_essential_f3: 'Informe completo de uso del niño',
    plan_essential_f4: 'Informe de resultados de los juegos',
    plan_essential_f5: 'Exportación de los informes',
    plan_essential_f6: '10 audios con IA por mes',

    popular_badge: '⭐ Más popular',
    plan_family_label: 'Para uso intenso y múltiples niños',
    plan_family_title: 'Familia',
    plan_family_desc: 'Todo lo del Esencial, con espacio para que cada hijo tenga su propio perfil personalizado.',
    plan_family_stat1: '3 Niños',
    plan_family_stat2: 'Tableros ilimitados',
    plan_family_stat3: '230 cards personalizadas',
    plan_family_stat4: '4 Juegos',
    plan_family_f1: 'Todo del plan Esencial',
    plan_family_f2: '20 audios con IA por mes',

    plan_pro_label: 'Para instituciones, clínicas, escuelas y profesionales del área',
    plan_pro_title: 'Profesional',
    plan_pro_desc: 'Todo lo del Familia, con un espacio compartido para que todo el equipo siga a cada niño.',
    plan_pro_stat1: '100 Niños (por colaborador)',
    plan_pro_stat2: 'Tableros ilimitados',
    plan_pro_stat3: '230 cards personalizadas',
    plan_pro_stat4: '4 Juegos',
    plan_pro_f1: 'A medida, totalmente adaptado a tus necesidades',
    plan_pro_f2: 'Recursos dedicados por colaborador',
    plan_pro_f3: 'Soporte prioritario',
    plan_pro_f4: 'Perfiles separados por colaborador',
    plan_pro_f5: 'Informes de uso por colaborador',
    plan_pro_contact: 'Habla con el equipo',
    plan_pro_cta: 'Hablar con el equipo',

    plan_cta: 'Unirme a la lista de espera',

    compare_title: 'Qué incluye cada plan',
    compare_child_area: 'Área del niño sin anuncios',
    compare_no_ads: 'Sin anuncios en ninguna área',
    compare_images: 'Imágenes de comunicación',
    compare_custom_images: 'Cards personalizadas',
    compare_voices: 'Audios por IA',
    compare_profiles: 'Niños',
    compare_games: 'Juegos educativos',
    compare_reports: 'Informe de uso',
    compare_team: 'Espacio de equipo',

    /* Valores de la tabla */
    compare_images_free: '150',
    compare_images_essential: 'Todas',
    compare_images_family: 'Todas',
    compare_images_pro: 'Todas',
    compare_custom_free: '10',
    compare_custom_essential: '120',
    compare_custom_family: '230',
    compare_custom_pro: '230 por colaborador',
    compare_voices_free: '5 vitalicios',
    compare_voices_essential: '10 por mes',
    compare_voices_family: '20 por mes',
    compare_voices_pro: 'A medida',
    compare_profiles_free: '1',
    compare_profiles_essential: '1',
    compare_profiles_family: '3',
    compare_profiles_pro: '100 por colaborador',
    compare_games_free: '1',
    compare_games_essential: '4',
    compare_games_family: '4',
    compare_games_pro: '4',

    waitlist_title: 'Mantente al tanto',
    waitlist_desc: 'Registra tu correo para recibir novedades, consejos y promociones de Autkids.',
    waitlist_name_placeholder: 'Tu nombre (opcional)',
    waitlist_placeholder: 'tu@correo.com',
    waitlist_btn: 'Unirme a la lista',
    waitlist_success: '¡Genial! Te avisaremos pronto 💛',
    waitlist_trust: 'Sin spam. Cancela cuando quieras.',

    faq_title: 'Preguntas frecuentes',
    faq_q1: '¿Cómo contrato un plan?',
    faq_a1: 'En cuanto Autkids sea lanzado en las tiendas de aplicaciones, vas a poder descargarlo gratis, crear tu cuenta y elegir tu plan directamente en la app. Puedes cambiar o cancelar cuando quieras. Únete a la lista de espera para que te avisemos en cuanto eso pase.',
    faq_q2: '¿El área del niño realmente no tiene anuncios?',
    faq_a2: 'Sí! La pantalla que usa el niño es 100% libre de anuncios en todos los planes. En el plan gratuito, puede aparecer un anuncio discreto en el área de configuración de los responsables - nunca frente al niño.',
    faq_q3: '¿Puedo cambiar de plan después?',
    faq_a3: 'Claro! Puedes hacer upgrade o downgrade en cualquier momento, sin complicaciones.',
    faq_q4: '¿El plan Profesional funciona para clínicas pequeñas?',
    faq_a4: '¡Sí! El plan es a medida para instituciones, clínicas, escuelas y profesionales del área, con recursos dedicados por colaborador. Contáctanos para saber más sobre condiciones especiales.',

    footer_rights: `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-05. Todos los derechos reservados`,
  },
};

/* ========================================
   FUNÇÃO DE TRADUÇÃO
======================================== */
function changeLanguage(lang) {
  const t = pricingTranslations[lang] || pricingTranslations['pt'];
  localStorage.setItem('autkids-language', lang);
  document.documentElement.lang = lang;
  if (t.page_title) document.title = t.page_title;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;
    if (key === 'hero_title') {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  const emailInput = document.getElementById('waitlistEmail');
  if (emailInput && t.waitlist_placeholder) emailInput.placeholder = t.waitlist_placeholder;

  const nameInput = document.getElementById('waitlistName');
  if (nameInput && t.waitlist_name_placeholder) nameInput.placeholder = t.waitlist_name_placeholder;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('autkids-language') || 'pt';
  changeLanguage(savedLang);
});