const currentYear = new Date().getFullYear();

const translations = {
  pt: {
    page_title: "Autkids | Central de Ajuda",
    btn_back: "Voltar",
    faq_h1: "Central de Ajuda",
    faq_subtitle: "Encontre respostas rápidas para as dúvidas mais comuns 💛",
    faq_search_placeholder: "Buscar uma pergunta...",
    faq_no_results: "Nenhuma pergunta encontrada. Tente outra palavra ou fale com o nosso suporte.",

    faq_sec_about: "Sobre o aplicativo",
    faq_q_what_is: "O que é o Autkids?",
    faq_a_what_is: "O Autkids é um aplicativo criado para apoiar crianças no desenvolvimento da comunicação, rotina e habilidades sociais por meio de atividades divertidas e interativas.",
    faq_q_who_for: "Para quem o aplicativo foi desenvolvido?",
    faq_a_who_for: "Ele foi pensado especialmente para crianças que precisam de apoio extra na comunicação e rotina - incluindo crianças autistas, mas não se limita a isso.",
    faq_q_free: "O app é gratuito?",
    faq_a_free: "Sim! Uma parte essencial é gratuita. Recursos extras podem ser desbloqueados no plano mensal ou anual.",

    faq_sec_account: "Conta e Perfil",
    faq_q_create: "Como criar uma conta?",
    faq_a_create: "Assim que o app for lançado, vai bastar baixá-lo, tocar em 'Entrar com o Google' e pronto! Em poucos segundos você já vai poder começar.",

    faq_sec_privacy: "Privacidade e Segurança de Dados",
    faq_q_privacy_data: "Quais dados do meu filho são coletados?",
    faq_a_privacy_data: "Coletamos apenas o necessário para personalizar a experiência, como progresso nas atividades e preferências de uso. Nunca vendemos ou compartilhamos dados da criança com terceiros para fins de publicidade.",
    faq_q_privacy_safe: "O app é seguro para a criança usar sem supervisão constante?",
    faq_a_privacy_safe: "Sim! A área da criança é livre de anúncios e de conteúdo externo, e as configurações ficam protegidas e acessíveis apenas aos responsáveis.",

    faq_sec_billing: "Planos e Pagamento",
    faq_q_billing_how: "Como funciona a assinatura do Autkids?",
    faq_a_billing_how: "Assim que o Autkids for lançado, você vai poder assinar o plano Essencial, Família ou Profissional direto pelo app, com cobrança mensal ou anual. Veja todos os detalhes na nossa <a href='../pricing/pricing.html'>página de planos</a>.",
    faq_q_billing_cancel: "Posso cancelar a assinatura quando quiser?",
    faq_a_billing_cancel: "Sim! Você pode cancelar a qualquer momento direto pelo app, sem multa e sem burocracia.",
    faq_q_billing_refund: "Existe reembolso caso eu não goste do app?",
    faq_a_billing_refund: "Entre em contato com nosso suporte em até 7 dias após a compra e avaliaremos seu caso conforme as políticas da loja de aplicativos.",

    faq_sec_devices: "Dispositivos e Compatibilidade",
    faq_q_devices_which: "Em quais dispositivos o Autkids funciona?",
    faq_a_devices_which: "O Autkids vai estar disponível para smartphones e tablets Android e iOS.",
    faq_q_devices_offline: "Preciso estar conectado à internet para usar o app?",
    faq_a_devices_offline: "Algumas funcionalidades exigem conexão, mas as atividades principais de comunicação podem ser usadas offline após o download inicial.",

    faq_sec_support: "Suporte",
    faq_q_contact: "Como falar com o suporte?",
    faq_a_contact: "Entre em contato pelo e-mail: <strong><a href='mailto:suporte@autkids.com'>suporte@autkids.com</a></strong> ou pelo Instagram <a href='https://www.instagram.com/autkids_' rel='noopener noreferrer' target='_blank'>@autkids_</a>",
    faq_q_hours: "Qual o horário de atendimento?",
    faq_a_hours: "Nosso suporte funciona de segunda a sexta, das 8h às 18h (horário de Brasília).",

    faq_contact_title: "Não encontrou o que precisava?",
    faq_contact_desc: "Nosso time está pronto para ajudar você e sua família.",
    faq_contact_email: "Enviar e-mail",
    faq_contact_instagram: "Seguir no Instagram",

    footer_rights: `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-05. Todos os direitos reservados`
  },
  en: {
    page_title: "Autkids | Help Center",
    btn_back: "Back",
    faq_h1: "Help Center",
    faq_subtitle: "Find quick answers to common questions 💛",
    faq_search_placeholder: "Search a question...",
    faq_no_results: "No questions found. Try another word or contact our support.",

    faq_sec_about: "About the App",
    faq_q_what_is: "What is Autkids?",
    faq_a_what_is: "Autkids is an app designed to support children in developing communication, routines, and social skills through fun and interactive activities.",
    faq_q_who_for: "Who was the app developed for?",
    faq_a_who_for: "It was designed especially for children who need extra support with communication and routines - including autistic children, but not limited to them.",
    faq_q_free: "Is the app free?",
    faq_a_free: "Yes! An essential part is free. Extra features can be unlocked with a monthly or annual plan.",

    faq_sec_account: "Account and Profile",
    faq_q_create: "How do I create an account?",
    faq_a_create: "As soon as the app launches, you'll just need to download it, tap 'Enter with Google', and you're done! You'll be able to start in a few seconds.",

    faq_sec_privacy: "Privacy and Data Security",
    faq_q_privacy_data: "What data about my child is collected?",
    faq_a_privacy_data: "We only collect what's needed to personalize the experience, such as activity progress and usage preferences. We never sell or share your child's data with third parties for advertising purposes.",
    faq_q_privacy_safe: "Is the app safe for my child to use without constant supervision?",
    faq_a_privacy_safe: "Yes! The child's area is free of ads and external content, and settings are protected and accessible only to parents/guardians.",

    faq_sec_billing: "Plans and Billing",
    faq_q_billing_how: "How does the Autkids subscription work?",
    faq_a_billing_how: "Once Autkids launches, you'll be able to subscribe to the Essential, Family, or Professional plan right in the app, billed monthly or annually. See all details on our <a href='../pricing/pricing.html'>plans page</a>.",
    faq_q_billing_cancel: "Can I cancel my subscription anytime?",
    faq_a_billing_cancel: "Yes! You can cancel anytime directly in the app, with no fees or hassle.",
    faq_q_billing_refund: "Is there a refund if I don't like the app?",
    faq_a_billing_refund: "Contact our support within 7 days of purchase and we'll review your case according to the app store's policies.",

    faq_sec_devices: "Devices and Compatibility",
    faq_q_devices_which: "Which devices does Autkids work on?",
    faq_a_devices_which: "Autkids will be available for Android and iOS smartphones and tablets.",
    faq_q_devices_offline: "Do I need an internet connection to use the app?",
    faq_a_devices_offline: "Some features require a connection, but the main communication activities can be used offline after the initial download.",

    faq_sec_support: "Support",
    faq_q_contact: "How to contact support?",
    faq_a_contact: "Contact us via email: <strong><a href='mailto:suporte@autkids.com'>suporte@autkids.com</a></strong> or on Instagram <a href='https://www.instagram.com/autkids_' rel='noopener noreferrer' target='_blank'>@autkids_</a>",
    faq_q_hours: "What are the support hours?",
    faq_a_hours: "Our support is available Monday to Friday, from 8 AM to 6 PM (Brasília time).",

    faq_contact_title: "Didn't find what you needed?",
    faq_contact_desc: "Our team is ready to help you and your family.",
    faq_contact_email: "Send an email",
    faq_contact_instagram: "Follow on Instagram",

    footer_rights: `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-05. All rights reserved`
  },
  es: {
    page_title: "Autkids | Centro de Ayuda",
    btn_back: "Volver",
    faq_h1: "Centro de Ayuda",
    faq_subtitle: "Encuentra respuestas rápidas a preguntas comunes 💛",
    faq_search_placeholder: "Buscar una pregunta...",
    faq_no_results: "No se encontraron preguntas. Prueba otra palabra o contacta a nuestro soporte.",

    faq_sec_about: "Sobre la Aplicación",
    faq_q_what_is: "¿Qué es Autkids?",
    faq_a_what_is: "Autkids es una aplicación creada para apoyar a los niños en el desarrollo de la comunicación, rutinas y habilidades sociales mediante actividades divertidas e interactivas.",
    faq_q_who_for: "¿Para quién fue desarrollada la aplicación?",
    faq_a_who_for: "Fue pensada especialmente para niños que necesitan apoyo extra en comunicación y rutina - incluyendo niños autistas, pero no se limita a ellos.",
    faq_q_free: "¿La app es gratuita?",
    faq_a_free: "¡Sí! Una parte esencial es gratuita. Se pueden desbloquear funciones extra con el plan mensual o anual.",

    faq_sec_account: "Cuenta y Perfil",
    faq_q_create: "¿Cómo crear una cuenta?",
    faq_a_create: "En cuanto la app sea lanzada, solo tendrá que descargarla, tocar en 'Entrar con Google' y ¡listo! En pocos segundos va a poder comenzar.",

    faq_sec_privacy: "Privacidad y Seguridad de Datos",
    faq_q_privacy_data: "¿Qué datos de mi hijo se recopilan?",
    faq_a_privacy_data: "Recopilamos solo lo necesario para personalizar la experiencia, como el progreso en las actividades y las preferencias de uso. Nunca vendemos ni compartimos los datos del niño con terceros con fines publicitarios.",
    faq_q_privacy_safe: "¿La app es segura para que el niño la use sin supervisión constante?",
    faq_a_privacy_safe: "¡Sí! El área del niño está libre de anuncios y contenido externo, y la configuración está protegida y solo es accesible para los responsables.",

    faq_sec_billing: "Planes y Pago",
    faq_q_billing_how: "¿Cómo funciona la suscripción de Autkids?",
    faq_a_billing_how: "En cuanto Autkids sea lanzado, vas a poder suscribirte al plan Esencial, Familia o Profesional directamente en la app, con cobro mensual o anual. Consulta todos los detalles en nuestra <a href='../pricing/pricing.html'>página de planes</a>.",
    faq_q_billing_cancel: "¿Puedo cancelar la suscripción cuando quiera?",
    faq_a_billing_cancel: "¡Sí! Puedes cancelar en cualquier momento directamente en la app, sin multas ni trámites.",
    faq_q_billing_refund: "¿Hay reembolso si no me gusta la app?",
    faq_a_billing_refund: "Contacta a nuestro soporte dentro de los 7 días posteriores a la compra y evaluaremos tu caso según las políticas de la tienda de aplicaciones.",

    faq_sec_devices: "Dispositivos y Compatibilidad",
    faq_q_devices_which: "¿En qué dispositivos funciona Autkids?",
    faq_a_devices_which: "Autkids va a estar disponible para smartphones y tablets Android e iOS.",
    faq_q_devices_offline: "¿Necesito conexión a internet para usar la app?",
    faq_a_devices_offline: "Algunas funciones requieren conexión, pero las actividades principales de comunicación se pueden usar sin conexión después de la descarga inicial.",

    faq_sec_support: "Soporte",
    faq_q_contact: "¿Cómo contactar al soporte?",
    faq_a_contact: "Contáctenos por correo: <strong><a href='mailto:suporte@autkids.com'>suporte@autkids.com</a></strong> o por nuestro Instagram <a href='https://www.instagram.com/autkids_' rel='noopener noreferrer' target='_blank'>@autkids_</a>",
    faq_q_hours: "¿Cuál es el horario de atención?",
    faq_a_hours: "Nuestro soporte funciona de lunes a viernes, de 8h a 18h (horario de Brasilia).",

    faq_contact_title: "¿No encontraste lo que necesitabas?",
    faq_contact_desc: "Nuestro equipo está listo para ayudarte a ti y a tu familia.",
    faq_contact_email: "Enviar correo",
    faq_contact_instagram: "Seguir en Instagram",

    footer_rights: `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-05. Todos los derechos reservados`
  }
};

function changeLanguage(lang) {
  if (!translations[lang]) lang = 'pt';

  if (translations[lang]['page_title']) {
    document.title = translations[lang]['page_title'];
  }

  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  const searchInput = document.getElementById('faqSearch');
  if (searchInput && translations[lang]['faq_search_placeholder']) {
    searchInput.placeholder = translations[lang]['faq_search_placeholder'];
  }
}
