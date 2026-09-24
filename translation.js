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
    'btn_download': 'Novidades por email',
    'btn_download_short': 'Novidades',
    'nav_about': 'Sobre',
    'nav_pricing': 'Planos',
    'nav_download': 'Novidades',

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
    'pricing_desc': 'Nosso app está em fase final de testes para <strong>App Store</strong> e <strong>Google Play</strong>. Deixe seu email para avisarmos quando estiver pronto ou tivermos novidades.',
    'waitlist_cta_btn': 'Receber novidades',

    'whatis_title': 'O que é o Autkids?',
    'whatis_p1': 'O Autkids ajuda <strong>crianças autistas a se comunicarem</strong> por meio de <strong>cartões com imagens, textos e áudios</strong>, personalizáveis para a rotina de cada criança.',
    'whatis_p2': 'A criança tem uma <strong>experiência simples e protegida</strong>, enquanto responsáveis e profissionais configuram o conteúdo. Tudo isso com <strong>acessibilidade, autonomia e tecnologia</strong> em um só lugar.',
    'whatis_cta': 'Quero na minha Clínica!',

    'waitlist_title': 'Receba novidades do Autkids',
    'waitlist_desc': 'Deixe seu email. Avisaremos quando o app ficar pronto ou tivermos novidades.',
    'waitlist_name_placeholder': 'Seu nome',
    'waitlist_placeholder': 'seu@email.com',
    'waitlist_btn': 'Quero receber novidades',
    'waitlist_success': 'Quase lá! Enviamos um e-mail para você. Clique no botão de confirmação para garantir que vamos te avisar das novidades 💛',
    'waitlist_trust': 'Só enviaremos avisos sobre o app. Sem spam.',

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
    'btn_download': 'Get email updates',
    'btn_download_short': 'Updates',
    'nav_about': 'About',
    'nav_pricing': 'Plans',
    'nav_download': 'Updates',

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
    'pricing_desc': "Our app is in final testing for the <strong>App Store</strong> and <strong>Google Play</strong>. Leave your email and we'll let you know when it's ready or we have news.",
    'waitlist_cta_btn': 'Get updates',

    'whatis_title': 'What is Autkids?',
    'whatis_p1': 'Autkids helps <strong>autistic children communicate</strong> through <strong>cards with images, text, and audio</strong>, customizable for each child\'s routine.',
    'whatis_p2': 'The child gets a <strong>simple, protected experience</strong>, while parents and professionals configure the content. All with <strong>accessibility, autonomy, and technology</strong> in one place.',
    'whatis_cta': 'I want it at my clinic!',

    'waitlist_title': 'Get Autkids updates',
    'waitlist_desc': 'Leave your email. We’ll let you know when the app is ready or we have news.',
    'waitlist_name_placeholder': 'Your name',
    'waitlist_placeholder': 'your@email.com',
    'waitlist_btn': 'Get email updates',
    'waitlist_success': "Almost there! We sent you an email. Click the confirmation button to make sure we can keep you updated 💛",
    'waitlist_trust': 'Only app launch and news emails. No spam.',

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
    'btn_download': 'Novedades por correo',
    'btn_download_short': 'Novedades',
    'nav_about': 'Acerca de',
    'nav_pricing': 'Planes',
    'nav_download': 'Novedades',

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
    'pricing_desc': 'Nuestra app está en fase final de pruebas para la <strong>App Store</strong> y <strong>Google Play</strong>. Déjanos tu correo y te avisaremos cuando esté lista o tengamos novedades.',
    'waitlist_cta_btn': 'Recibir novedades',

    'whatis_title': '¿Qué es Autkids?',
    'whatis_p1': 'Autkids ayuda a <strong>niños autistas a comunicarse</strong> mediante <strong>tarjetas con imágenes, textos y audios</strong>, personalizables según la rutina de cada niño.',
    'whatis_p2': 'El niño tiene una <strong>experiencia simple y protegida</strong>, mientras responsables y profesionales configuran el contenido. Todo con <strong>accesibilidad, autonomía y tecnología</strong> en un solo lugar.',
    'whatis_cta': '¡Lo quiero en mi clínica!',

    'waitlist_title': 'Recibe novedades de Autkids',
    'waitlist_desc': 'Déjanos tu correo. Te avisaremos cuando la app esté lista o tengamos novedades.',
    'waitlist_name_placeholder': 'Tu nombre',
    'waitlist_placeholder': 'tu@correo.com',
    'waitlist_btn': 'Quiero recibir novedades',
    'waitlist_success': '¡Ya casi! Te enviamos un correo. Haz clic en el botón de confirmación para asegurarte de que podamos avisarte de las novedades 💛',
    'waitlist_trust': 'Solo enviaremos avisos sobre la app. Sin spam.',

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
    const key = el.getAttribute('data-i18n');
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
