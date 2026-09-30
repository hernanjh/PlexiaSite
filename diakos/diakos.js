/* =========================================================
   DIAKOS · by Plexia — landing de producto
   Nav, animaciones e i18n propios (no depende de js/main.js).
   El texto en español se toma del HTML; acá sólo va el inglés.
   Comparte la preferencia de idioma con el resto del sitio.
   ========================================================= */

const dkEn = {
  dk_by: 'by',
  dk_nav_how: 'How it works',
  dk_nav_features: 'Features',
  dk_nav_ai: 'Artificial intelligence',
  dk_nav_ai_short: 'AI',
  dk_nav_who: 'Who it’s for',
  dk_nav_faq: 'FAQ',
  dk_cta_demo: 'Request a demo',

  dk_hero_eyebrow: 'Delinquency & collections management',
  dk_hero_t1: 'Recover more,',
  dk_hero_t2: 'with less effort.',
  dk_hero_text: 'Diakos is the platform to manage delinquency and credit recovery: your whole portfolio, every collection activity and every payment agreement in one place, so your team always knows what to do next and with whom.',
  dk_hero_btn2: 'See how it works',
  dk_hero_n1: '100% web-based',
  dk_hero_n2: 'Adapts to your process',
  dk_hero_n3: 'AI assistant included',

  dk_mock_client: 'Client',
  dk_mock_badge: '95 days past due',
  dk_mock_k1: 'Updated debt',
  dk_mock_k2: 'Overdue installments',
  dk_mock_k3: 'Last activity',
  dk_mock_t1a: 'Call',
  dk_mock_t1b: 'promises to pay on 05/10/2026',
  dk_mock_t2a: 'Agreement proposal',
  dk_mock_t2b: '12 installments sent by email',
  dk_mock_t3a: 'Formal notice',
  dk_mock_t3b: 'delivered 10/09/2026',
  dk_mock_s_label: 'Suggested next step',
  dk_mock_s_text: 'Remind them of the payment promise two days before it’s due.',

  dk_pb_label: 'The challenge',
  dk_pb_title: 'Collections don’t fail for lack of effort',
  dk_pb_sub: 'They fail when information is scattered and no one has the full picture of each case.',
  dk_pb1_t: 'Spreadsheets nobody updates',
  dk_pb1_p: 'Every agent has their own Excel file, balances don’t match and building a report takes days.',
  dk_pb2_t: 'Calls and promises with no record',
  dk_pb2_p: 'What was agreed with the debtor stays in someone’s head, and nobody follows up.',
  dk_pb3_t: 'Agreements that silently fall apart',
  dk_pb3_p: 'An unpaid installment goes unnoticed and the payment plan breaks before anyone reacts.',
  dk_pb_answer1: 'Diakos brings all of it together in',
  dk_pb_answer2: 'one place, with the next step always clear.',

  dk_how_label: 'How it works',
  dk_how_title: 'From portfolio to payment, in four steps',
  dk_how1_t: 'Load your portfolio',
  dk_how1_p: 'Import clients, contracts and installments from your spreadsheets or systems. Diakos builds a file for each case.',
  dk_how2_t: 'Prioritize',
  dk_how2_p: 'See who owes, how much and since when. The most urgent cases come first, with a suggested action.',
  dk_how3_t: 'Manage and negotiate',
  dk_how3_p: 'Your team logs calls, sends communications and builds payment plans in minutes, all with full history.',
  dk_how4_t: 'Collect and measure',
  dk_how4_p: 'Record payments, track every agreement and see results on clear dashboards.',

  dk_ft_label: 'Features',
  dk_ft_title: 'Everything your collections team needs',
  dk_ft_sub: 'One tool for daily work, negotiation and control.',
  dk_f1_t: '360° portfolio view',
  dk_f1_p: 'Client, case file, contracts, installments, guarantees and contacts in a single view.',
  dk_f2_t: 'Daily collections',
  dk_f2_p: 'Calls, payment promises and tasks on record, with a suggested next step for each case.',
  dk_f3_t: 'Agreements & payment plans',
  dk_f3_p: 'Simulate installments, generate the pre-agreement PDF and track compliance of every plan.',
  dk_f4_t: 'Always-updated debt',
  dk_f4_p: 'Interest, penalties and fees calculated to any date, with a clear, detailed statement.',
  dk_f5_t: 'Legal follow-up',
  dk_f5_p: 'Cases that go to court stay in the same place, with their file and progress.',
  dk_f6_t: 'Communications',
  dk_f6_p: 'Emails and letters from custom templates, with debtor data filled in automatically.',
  dk_f7_t: 'Dashboards & reports',
  dk_f7_p: 'Real-time portfolio indicators and reports ready to export to Excel.',
  dk_f8_t: 'Alerts',
  dk_f8_p: 'Automatic notices when a promise is due, an installment is late or an agreement breaks.',

  dk_ai_label: 'Artificial intelligence',
  dk_ai_title: 'An assistant that knows your portfolio',
  dk_ai_sub: 'Ask in plain language and get answers from your own cases, with direct links to each file.',
  dk_ai1_t: 'Today’s focus',
  dk_ai1_p: 'Tells you which cases to handle first and why.',
  dk_ai2_t: 'Instant summaries',
  dk_ai2_p: 'The whole history of a case, summarized in seconds.',
  dk_ai3_t: 'Message drafting',
  dk_ai3_p: 'Email drafts in a friendly, formal or firm tone, signed with your company name.',
  dk_ai4_t: 'Weekly digest & alerts',
  dk_ai4_p: 'What happened this week and which situations are worth reviewing.',
  dk_ai_trust_t: 'You stay in control',
  dk_ai_trust_p: 'Each feature is enabled separately, the assistant only sees what each user can see, and it never records anything without your confirmation.',
  dk_chat_title: 'Diakos Assistant',
  dk_chat_q: 'Which cases should I handle today?',
  dk_chat_a: 'These are the 3 most urgent:',
  dk_chat_a1: 'payment promise due on 05/10/2026.',
  dk_chat_a2: 'installment 3 of the agreement unpaid for 8 days.',
  dk_chat_a3: 'no contact for 30 days.',
  dk_chat_q2: 'Draft a friendly reminder for the first one.',
  dk_chat_ph: 'Type your question…',

  dk_who_label: 'Who it’s for',
  dk_who_title: 'Built for those whose business is recovering credit',
  dk_who1_t: 'Service companies',
  dk_who1_p: 'Unpaid subscriptions, service plans and invoices.',
  dk_who2_t: 'Lenders & fintech',
  dk_who2_p: 'Loan portfolios with a high volume of cases.',
  dk_who3_t: 'Mutuals & cooperatives',
  dk_who3_p: 'Close-to-the-member collections, organized and traceable.',
  dk_who4_t: 'Retailers with in-house credit',
  dk_who4_p: 'Installment sales and current accounts.',
  dk_who5_t: 'Collection agencies',
  dk_who5_p: 'Out-of-court and legal collections for multiple clients.',

  dk_cfg_label: 'Tailored',
  dk_cfg_title: 'Adapts to the way you work, no coding needed',
  dk_cfg_sub: 'Every organization collects differently. Diakos is configured from within the platform.',
  dk_cfg1_b: 'Your own stages',
  dk_cfg1_s: 'define which statuses each case goes through.',
  dk_cfg2_b: 'Custom data',
  dk_cfg2_s: 'add the fields your business needs.',
  dk_cfg3_b: 'Calculation rules',
  dk_cfg3_s: 'rates, charges and fees under your own terms.',
  dk_cfg4_b: 'Your brand',
  dk_cfg4_s: 'your company logo and name on screens, PDFs and communications.',
  dk_sec_label: 'Security',
  dk_sec_title: 'Your data, protected and under control',
  dk_sec_sub: 'Built by Plexia with the same standards we apply in banking and regulated organizations.',
  dk_sec1_b: 'Role-based permissions',
  dk_sec1_s: 'each user sees and does only what they should.',
  dk_sec2_b: 'Everything is logged',
  dk_sec2_s: 'who changed what, and when.',
  dk_sec3_b: 'Sensitive data protected',
  dk_sec3_s: 'information safeguarded and masked.',
  dk_sec4_b: 'Wherever you need it',
  dk_sec4_s: 'in the cloud or on your own servers.',

  dk_impl_label: 'Implementation',
  dk_impl_title: 'We don’t leave you alone with the software',
  dk_impl_sub: 'The Plexia team supports you from day one until Diakos is part of your team’s routine.',
  dk_impl1_t: 'Assessment',
  dk_impl1_p: 'We learn how you collect today and configure Diakos to fit.',
  dk_impl2_t: 'Data migration',
  dk_impl2_p: 'We bring over your current portfolio from spreadsheets or other systems.',
  dk_impl3_t: 'Training',
  dk_impl3_p: 'We train agents and supervisors, with built-in help on every screen.',
  dk_impl4_t: 'Ongoing support',
  dk_impl4_p: 'Support and improvements as your operation grows.',

  dk_faq_label: 'FAQ',
  dk_faq_title: 'What people usually ask us',
  dk_faq1_q: 'Can I load my portfolio from Excel?',
  dk_faq1_a: 'Yes. Diakos imports clients, contracts and installments from spreadsheets, and can export any list to Excel.',
  dk_faq2_q: 'How long does setup take?',
  dk_faq2_a: 'It depends on the size of the portfolio and how much needs to be adapted. In the demo we review your case and give you a concrete plan.',
  dk_faq3_q: 'Do I need to install anything?',
  dk_faq3_a: 'No. Diakos runs in the browser, on a computer, tablet or phone.',
  dk_faq4_q: 'Where is my data stored?',
  dk_faq4_a: 'You can use it in the cloud or install it on your own servers. Either way, access is protected and everything is logged.',
  dk_faq5_q: 'Is artificial intelligence mandatory?',
  dk_faq5_a: 'No. It’s optional and enabled feature by feature. Diakos works fully without it.',
  dk_faq6_q: 'Does it work if I already have a management system?',
  dk_faq6_a: 'Yes. Diakos works alongside your current system and can be integrated to receive portfolio data.',

  dk_final_title: 'Get to know Diakos in 30 minutes',
  dk_final_text: 'We’ll walk you through the platform with a case like yours and answer all your questions.',
  dk_final_btn2: 'Ask a question',

  dk_footer_desc: 'Delinquency management and credit recovery.',
  dk_footer_by: 'A Plexia product.',
  dk_footer_product: 'Product',
  dk_footer_contact: 'Contact',
  dk_footer_loc: 'Argentina',
  dk_footer_copy: '© 2026 Plexia. All rights reserved.',
};

const DK_LANG_KEY = 'plexia_lang';
const dkEs = {};

function dkGetLang() {
  try { return localStorage.getItem(DK_LANG_KEY) || 'es'; } catch { return 'es'; }
}

function dkApplyLanguage(lang) {
  try { localStorage.setItem(DK_LANG_KEY, lang); } catch { /* sin storage: sólo en memoria */ }
  const dict = lang === 'en' ? dkEn : dkEs;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

function dkInitI18n() {
  // El HTML ya está en español: se guarda como diccionario base.
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (dkEs[el.dataset.i18n] === undefined) dkEs[el.dataset.i18n] = el.textContent;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => dkApplyLanguage(btn.dataset.lang));
  });
  dkApplyLanguage(dkGetLang());
}

function dkInitNav() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  const menu = document.querySelector('.mobile-menu');

  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  const setOpen = open => {
    menu?.classList.toggle('open', open);
    burger?.setAttribute('aria-expanded', String(open));
    const spans = burger?.querySelectorAll('span') || [];
    if (open) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  };
  burger?.addEventListener('click', () => setOpen(!menu?.classList.contains('open')));
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));

  // Compensa el nav fijo al saltar a una sección
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = (nav?.offsetHeight || 72) + 8;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });
}

function dkInitAnimations() {
  const items = document.querySelectorAll('.fade-up');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  dkInitI18n();
  dkInitNav();
  dkInitAnimations();
});
