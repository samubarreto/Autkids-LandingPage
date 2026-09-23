/* ========================================
   SISTEMA DE TRADUÇÃO (PT / EN / ES)
   NOTA: hero_title foi removido deste arquivo.
   O título do hero é gerenciado pelo script.js via
   updateHeroTitle(lang), preservando o typewriter.
======================================== */

const currentYear = new Date().getFullYear();

const translations = {
  'pt': {
    'page_title': 'Autkids',
    'hero_desc': 'Toda criança merece se comunicar com alegria - e nós estamos aqui para tornar essa experiência única',
    'btn_download': 'Entrar na lista de espera',
    'btn_download_short': 'Lista de espera',
    'nav_about': 'Sobre',
    'nav_pricing': 'Planos',
    'nav_download': 'Lista de espera',

    'section_why': 'Por que o Autkids?',
    'feature_1_title': 'Totalmente personalizável',
    'feature_1_desc': 'O app será totalmente adaptável ao ritmo, interesses e necessidades de cada pequeno.',
    'feature_2_title': 'Ambiente Seguro',
    'feature_2_desc': 'Aqui prezamos pela experiência segura da criança. Por isso, nosso app é 100% livre de anúncios.',
    'feature_3_title': 'Cadastro de Perfis Múltiplos',
    'feature_3_desc': 'Cada criança terá seu espaço, suas preferências e seu próprio perfil.',
    'feature_4_title': 'Parceria entre casa e escola',
    'feature_4_desc': 'Conecta pais e educadores para alinhar o desenvolvimento da criança.',

    'coming_soon_badge': 'Em breve',
    'pricing_title': 'O Autkids está <strong>quase pronto</strong>!',
    'pricing_desc': 'Nosso app está em fase final de testes para <strong>App Store</strong> e <strong>Google Play</strong>. Entre na lista de espera para ser avisado no lançamento e testar antes de todo mundo.',
    'waitlist_cta_btn': 'Entrar na lista de espera',

    'whatis_title': 'O que é o Autkids?',
    'whatis_p1': 'O Autkids ajuda <strong>crianças autistas a se comunicarem</strong> por meio de <strong>cartões com imagens, textos e áudios</strong>, personalizáveis para a rotina de cada criança.',
    'whatis_p2': 'A criança tem uma <strong>experiência simples e protegida</strong>, enquanto responsáveis e profissionais configuram o conteúdo. Tudo isso com <strong>acessibilidade, autonomia e tecnologia</strong> em um só lugar.',
    'whatis_cta': 'Quero na minha Clínica!',

    'waitlist_title': 'Entre na lista de espera do Autkids',
    'waitlist_desc': 'Cadastre-se para garantir seu lugar na lista de espera e testar as novidades em primeira mão.',
    'waitlist_name_placeholder': 'Seu nome',
    'waitlist_placeholder': 'seu@email.com',
    'waitlist_btn': 'Quero ser avisado',
    'waitlist_success': 'Ótimo! Te avisamos em breve 💛',
    'waitlist_trust': 'Receba um alerta de novas vagas. Sem spam.',

    'footer_help': 'Central de Ajuda',
    'footer_about': 'Sobre Nós',
    'footer_terms': 'Termos de Uso',
    'footer_privacy': 'Política de Privacidade',
    'footer_cookies': 'Política de Cookies',
    'footer_social': 'Entre em contato conosco:',
    'footer_rights': `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-05. Todos os direitos reservados`
  },

  'en': {
    'page_title': 'Autkids',
    'hero_desc': 'Every child deserves to communicate with joy - and we are here to make this experience unique.',
    'btn_download': 'Join the waitlist',
    'btn_download_short': 'Waitlist',
    'nav_about': 'About',
    'nav_pricing': 'Plans',
    'nav_download': 'Waitlist',

    'section_why': 'Why Autkids?',
    'feature_1_title': 'Fully Customizable',
    'feature_1_desc': 'The app will be fully adaptable to each child\'s rhythm, interests, and needs.',
    'feature_2_title': 'Safe Environment for Kids',
    'feature_2_desc': 'We prioritize a safe experience for children. That\'s why our app is 100% ad-free for kids.',
    'feature_3_title': 'Multiple Profiles',
    'feature_3_desc': 'Each child will have their own space, preferences, and profile.',
    'feature_4_title': 'Home & School Partnership',
    'feature_4_desc': 'Connects parents and educators to support the child\'s development.',

    'coming_soon_badge': 'Coming soon',
    'pricing_title': 'Autkids is <strong>almost ready</strong>!',
    'pricing_desc': "Our app is in final testing for the <strong>App Store</strong> and <strong>Google Play</strong>. Join the waitlist to be notified at launch and test it before everyone else.",
    'waitlist_cta_btn': 'Join the waitlist',

    'whatis_title': 'What is Autkids?',
    'whatis_p1': 'Autkids helps <strong>autistic children communicate</strong> through <strong>cards with images, text, and audio</strong>, customizable for each child\'s routine.',
    'whatis_p2': 'The child gets a <strong>simple, protected experience</strong>, while parents and professionals configure the content. All with <strong>accessibility, autonomy, and technology</strong> in one place.',
    'whatis_cta': 'I want it at my clinic!',

    'waitlist_title': 'Join the Autkids waitlist',
    'waitlist_desc': 'Sign up to secure your spot on the waitlist and try new features first.',
    'waitlist_name_placeholder': 'Your name',
    'waitlist_placeholder': 'your@email.com',
    'waitlist_btn': 'I want to be notified',
    'waitlist_success': "Great! We'll let you know soon 💛",
    'waitlist_trust': "Get an alert when new spots open up. No spam.",

    'footer_help': 'Help Center',
    'footer_about': 'About Us',
    'footer_terms': 'Terms of Use',
    'footer_privacy': 'Privacy Policy',
    'footer_cookies': 'Cookie Policy',
    'footer_social': 'Contact Us:',
    'footer_rights': `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-05. All rights reserved`
  },

  'es': {
    'page_title': 'Autkids',
    'hero_desc': 'Todos los niños merecen comunicarse con alegría - y estamos aquí para hacer de esta experiencia algo único.',
    'btn_download': 'Unirme a la lista de espera',
    'btn_download_short': 'Lista de espera',
    'nav_about': 'Acerca de',
    'nav_pricing': 'Planes',
    'nav_download': 'Lista de espera',

    'section_why': '¿Por qué Autkids?',
    'feature_1_title': 'Totalmente personalizable',
    'feature_1_desc': 'La aplicación será totalmente adaptable al ritmo, intereses y necesidades de cada niño.',
    'feature_2_title': 'Entorno seguro para niños',
    'feature_2_desc': 'Priorizamos una experiencia segura para los niños. Por eso, nuestra app es 100% libre de anuncios.',
    'feature_3_title': 'Perfiles múltiples',
    'feature_3_desc': 'Cada niño tendrá su propio espacio, preferencias y perfil.',
    'feature_4_title': 'Alianza entre el hogar y la escuela',
    'feature_4_desc': 'Conecta a padres y educadores para alinear el desarrollo del niño.',

    'coming_soon_badge': 'Próximamente',
    'pricing_title': '¡Autkids está <strong>casi listo</strong>!',
    'pricing_desc': 'Nuestra app está en fase final de pruebas para la <strong>App Store</strong> y <strong>Google Play</strong>. Únete a la lista de espera para que te avisemos en el lanzamiento y probarla antes que todos.',
    'waitlist_cta_btn': 'Unirme a la lista de espera',

    'whatis_title': '¿Qué es Autkids?',
    'whatis_p1': 'Autkids ayuda a <strong>niños autistas a comunicarse</strong> mediante <strong>tarjetas con imágenes, textos y audios</strong>, personalizables según la rutina de cada niño.',
    'whatis_p2': 'El niño tiene una <strong>experiencia simple y protegida</strong>, mientras responsables y profesionales configuran el contenido. Todo con <strong>accesibilidad, autonomía y tecnología</strong> en un solo lugar.',
    'whatis_cta': '¡Lo quiero en mi clínica!',

    'waitlist_title': 'Únete a la lista de espera de Autkids',
    'waitlist_desc': 'Regístrate para asegurar tu lugar en la lista de espera y probar las novedades antes que nadie.',
    'waitlist_name_placeholder': 'Tu nombre',
    'waitlist_placeholder': 'tu@correo.com',
    'waitlist_btn': 'Quiero recibir una notificación',
    'waitlist_success': '¡Genial! Te avisaremos pronto 💛',
    'waitlist_trust': 'Recibe una alerta de nuevos lugares. Sin spam.',

    'footer_help': 'Centro de Ayuda',
    'footer_about': 'Sobre Nosotros',
    'footer_terms': 'Términos de Uso',
    'footer_privacy': 'Política de Privacidad',
    'footer_cookies': 'Política de Cookies',
    'footer_social': 'Contáctanos:',
    'footer_rights': `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-05. Todos los derechos reservados`
  }
};

const KEYS_WITH_HTML = ['whatis_p1', 'whatis_p2', 'pricing_title', 'pricing_desc'];

function sanitizeHTML(html) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    if (!doc || !doc.body) {
      const temp = document.createElement('div');
      temp.textContent = html;
      return temp.textContent;
    }
    function sanitizeNode(node) {
      if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.textContent);
      if (node.nodeType === Node.ELEMENT_NODE) {
        const tag = node.tagName.toLowerCase();
        if (tag === 'span') {
          const ok = node.attributes.length === 1 && node.getAttribute('class') === 'highlight';
          if (ok) {
            const s = document.createElement('span');
            s.className = 'highlight';
            Array.from(node.childNodes).forEach(c => { const sc = sanitizeNode(c); if (sc) s.appendChild(sc); });
            return s;
          }
          return document.createTextNode(node.textContent);
        }
        if (tag === 'strong' && node.attributes.length === 0) {
          const s = document.createElement('strong');
          Array.from(node.childNodes).forEach(c => { const sc = sanitizeNode(c); if (sc) s.appendChild(sc); });
          return s;
        }
        if (tag === 'br' && node.attributes.length === 0) return document.createElement('br');
        return document.createTextNode(node.textContent);
      }
      return null;
    }
    const result = document.createElement('div');
    Array.from(doc.body.childNodes).forEach(c => { const sc = sanitizeNode(c); if (sc) result.appendChild(sc); });
    return result.innerHTML;
  } catch (e) {
    const temp = document.createElement('div');
    temp.textContent = html;
    return temp.textContent;
  }
}

function changeLanguage(lang) {
  localStorage.setItem('autkids-language', lang);
  if (translations[lang]?.['page_title']) document.title = translations[lang]['page_title'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key   = el.getAttribute('data-i18n');
    const value = translations[lang]?.[key];
    if (!value) return;
    if (KEYS_WITH_HTML.includes(key)) {
      el.innerHTML = sanitizeHTML(value);
    } else {
      el.textContent = value;
    }
  });

  const waitlistNameInput = document.getElementById('waitlistName');
  if (waitlistNameInput && translations[lang]?.['waitlist_name_placeholder']) {
    waitlistNameInput.placeholder = translations[lang]['waitlist_name_placeholder'];
  }
  const waitlistEmailInput = document.getElementById('waitlistEmail');
  if (waitlistEmailInput && translations[lang]?.['waitlist_placeholder']) {
    waitlistEmailInput.placeholder = translations[lang]['waitlist_placeholder'];
  }
}