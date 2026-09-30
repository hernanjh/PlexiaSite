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
  dk_who5_t: 'Agencies & law firms',
  dk_who5_p: 'Out-of-court and legal collection of third-party portfolios.',

  dk_cfg_label: 'Tailored',
  dk_cfg_title: 'Adapts to the way you work, no coding needed',
  dk_cfg_sub: 'Every organization collects differently. Diakos is configured from within the platform.',
  dk_cfg1_b: 'Your own templates',
  dk_cfg1_s: 'letters and emails in your style, with your data.',
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
  dk_sec3_b: 'History that can’t be erased',
  dk_sec3_s: 'logged collection activities can’t be edited or deleted.',
  dk_sec4_b: 'Controlled changes',
  dk_sec4_s: 'each stage checks who can move forward and with what data.',

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
  dk_faq_title: 'What everyone asks us (and that’s fine)',
  dk_faq1_q: 'Everything I have is in Excel… do I start from scratch?',
  dk_faq1_a: 'Not at all. We bring your portfolio over from your spreadsheets and everything ends up organized in Diakos. And if you ever need a list, you export it to Excel in one click.',
  dk_faq2_q: 'How long until it’s up and running?',
  dk_faq2_a: 'It depends on the size of your portfolio and how much needs to be adapted. In the demo we look at your case and you leave with a concrete plan, with dates.',
  dk_faq3_q: 'The way I collect is pretty unique. Will it adapt?',
  dk_faq3_a: 'That’s the whole idea. Stages, rules, fields, calculations and templates are configured so Diakos works the way you do, not the other way around.',
  dk_faq4_q: 'Does it get along with my other systems?',
  dk_faq4_a: 'Yes. It can receive data from your management system, notify other applications when something changes and exchange data via spreadsheets.',
  dk_faq5_q: 'Does everyone see everything?',
  dk_faq5_a: 'Only if you want them to. Each user has a role with its own permissions, and every change is logged with name and date.',
  dk_faq6_q: 'Is artificial intelligence mandatory?',
  dk_faq6_a: 'No. It’s an optional extra you turn on feature by feature, whenever you want. Diakos works fully without it.',

  dk_final_title: 'Get to know Diakos in 30 minutes',
  dk_final_text: 'We’ll walk you through the platform with a case like yours and answer all your questions.',
  dk_final_btn2: 'Ask a question',

  dk_footer_desc: 'Delinquency management and credit recovery.',
  dk_footer_by: 'A Plexia product.',
  dk_footer_product: 'Product',
  dk_footer_contact: 'Contact',
  dk_footer_loc: 'Argentina',
  dk_footer_copy: '© 2026 Plexia. All rights reserved.',
  dk_nav_states: 'State engine',
  dk_nav_integ: 'Integrations',
  dk_nav_ext: 'Agencies & law firms',
  dk_st_label: 'State engine',
  dk_st_title: 'Every case follows your path, not ours',
  dk_st_sub: 'Diakos has a fully configurable state engine: you define the stages, how a case moves from one to the next and what happens on each change. Here is a standard collections flow to give you an idea.',
  dk_st_e1: 'Assign',
  dk_st_e2: 'Promises',
  dk_st_e3: 'Signs',
  dk_st_e4: 'Pays off',
  dk_st_e5: 'Breaks the promise',
  dk_st_e6: 'No response',
  dk_st_e7: 'Agreement broken',
  dk_st_e8: 'No recovery',
  dk_st_n1: 'Past due',
  dk_st_n2: 'In collection',
  dk_st_n3: 'Payment promise',
  dk_st_n4: 'Active agreement',
  dk_st_n5: 'Settled ✓',
  dk_st_n6: 'Legal action',
  dk_st_n7: 'Uncollectible',
  dk_st_lg1: 'Usual path',
  dk_st_lg2: 'Detours',
  dk_st_hint: 'Just an example: each company builds its own.',
  dk_st1_t: 'Stages your way',
  dk_st1_p: 'Create the statuses you need and define which moves forward or back are allowed.',
  dk_st2_t: 'Rules to move forward',
  dk_st2_p: 'Require data or documents before a case can change stage.',
  dk_st3_t: 'Who can do what',
  dk_st3_p: 'Each status change can be limited to certain roles.',
  dk_st4_t: 'Automatic actions',
  dk_st4_p: 'On a status change, Diakos can send alerts, create tasks or notify other systems.',
  dk_st5_t: 'Full history',
  dk_st5_p: 'Every step is logged: who did it, when and from which status.',
  dk_st6_t: 'Not just for cases',
  dk_st6_p: 'Also works for agreements, lawsuits or any other record in your operation.',
  dk_ex_label: 'External agencies & law firms',
  dk_ex_title: 'Your team and your partners, on the same platform',
  dk_ex_sub: 'If you work with collection agencies, law firms or process agents, Diakos lets you assign them cases and track their work without losing control.',
  dk_ex1_b: 'Flexible assignment',
  dk_ex1_s: 'hand over a whole client, a case file or a single contract, to your team or to a partner.',
  dk_ex2_b: 'Partner portal',
  dk_ex2_s: 'each agency or firm logs in, sees only the cases you assigned and records its work right there.',
  dk_ex3_b: 'Or tracking only',
  dk_ex3_s: 'if they use their own tools, your team updates progress and everything is logged just the same.',
  dk_ex4_b: 'Commissions & performance',
  dk_ex4_s: 'agreed commission per assignment and a ranking of each partner to decide who gets what.',
  dk_ex5_b: 'Always someone in charge',
  dk_ex5_s: 'every assignment has an internal supervisor following it closely.',
  dk_ex_th1: 'Handled by',
  dk_ex_th2: 'Cases',
  dk_ex_th3: 'Commission',
  dk_ex_th4: 'Mode',
  dk_ex_r1: 'In-house team',
  dk_ex_r1s: 'Own negotiators',
  dk_ex_r2s: 'Agency · Tier 1',
  dk_ex_r3s: 'Law firm · Tier 1',
  dk_ex_r4s: 'Agency · Tier 2',
  dk_ex_m0: 'In-house',
  dk_ex_m1: 'Portal',
  dk_ex_m2: 'Tracking',
  dk_in_label: 'Integrations',
  dk_in_title: 'Connects with the systems you already use',
  dk_in_sub: 'Diakos doesn’t have to be an island. Integrations are configured so information flows on its own between your tools.',
  dk_in_s1: 'Your core system',
  dk_in_s2: 'Email',
  dk_in_s3: 'Spreadsheets',
  dk_in_s4: 'Other systems',
  dk_in1_t: 'Receives your portfolio',
  dk_in1_p: 'Your systems send clients, debts and payments to Diakos through secure access.',
  dk_in2_t: 'Notifies when something changes',
  dk_in2_p: 'A payment, an agreement or a status change can automatically notify another application.',
  dk_in3_t: 'Import & export',
  dk_in3_p: 'Data in and out via spreadsheets, for bulk loads or to take your information with you.',
  dk_in4_t: 'Communications',
  dk_in4_p: 'Set up your sending channels and Diakos sends messages using your templates.',
  dk_faq_sub: 'If you’re thinking about getting your collections in order, you’re probably wondering about some of these. Here are the short answers.',
  dk_faq_more_t: 'Question not here?',
  dk_faq_more_p: 'Write to us and a real person will answer, not a bot.',
  dk_faq_more_btn: 'Ask us',
  dk_faq8_q: 'I work with external agencies and lawyers. Can they use it?',
  dk_faq8_a: 'Yes. You assign them the cases you want and they log into a portal where they only see their own. If they prefer their own tools, your team records the progress.',
  dk_faq7_q: 'Do I need to install anything?',
  dk_faq7_a: 'Nothing. Open your browser and you’re set: on your computer, tablet or phone.',
  dk_nav_debt: 'Debt engine',
  dk_strip1: 'Manage.',
  dk_strip2: 'Negotiate.',
  dk_strip3: 'Recover.',
  dk_strip_sub: 'The complete delinquency and recovery cycle, in a single platform.',
  dk_jud_b: 'If there’s no agreement or the plan falls through,',
  dk_jud_s: 'the case moves to legal action with all prior collection work as backup.',
  dk_tr_title: 'What Diakos does at each delinquency stage',
  dk_tr1_d: 'DAY 1 – 30',
  dk_tr1_t: 'Early delinquency',
  dk_tr1_p: 'Flags the delinquency, updates the debt and creates the contact task.',
  dk_tr2_d: 'DAY 31 – 60',
  dk_tr2_t: 'Active collection',
  dk_tr2_p: 'Tracks every promise and suggests the next step for the case.',
  dk_tr3_d: 'DAY 61 – 90',
  dk_tr3_t: 'Hard delinquency',
  dk_tr3_p: 'Escalates by rule, alerts the supervisor and prepares the formal notice.',
  dk_tr4_d: 'DAY 90 +',
  dk_tr4_t: 'Legal stage',
  dk_tr4_p: 'Opens the case file and tracks fees and guarantees.',
  dk_tr_note: 'Stages and actions are defined by each company.',
  dk_shot1_cap: 'Your whole portfolio at a glance: search, filter, export and see which stage each client is in.',
  dk_db_label: 'Debt engine',
  dk_db_title: 'Debt always up to date, calculated the way you calculate it',
  dk_db_sub: 'Diakos updates every debt with your own rules and builds payment plans in seconds, ready to print and sign.',
  dk_db_c1: 'Principal',
  dk_db_c2: 'Interest',
  dk_db_c3: 'Penalties',
  dk_db_c4: 'Fees',
  dk_db_c5: 'VAT',
  dk_db_c6: 'Payments',
  dk_db_c7: 'Current debt',
  dk_db1_b: 'Rates by stage',
  dk_db1_s: 'different depending on days past due.',
  dk_db2_b: 'Every charge, your way',
  dk_db2_s: 'you define the order and what it’s calculated on.',
  dk_db3_b: 'Bulk statements',
  dk_db3_s: 'for a single case or the whole portfolio.',
  dk_db4_b: 'Multi-currency',
  dk_db4_s: 'with exchange rates by date.',
  dk_shot2_cap: 'Refinancing calculator: installments, interest and total financial cost instantly, plus the pre-agreement PDF.',
  dk_wf_title: 'Workflows you draw, not code',
  dk_wf_text: 'The administrator builds each flow by dragging statuses and connecting them with arrows. For example, this legal flow: from formal notice to closed case.',
  dk_chip1: 'Custom entities',
  dk_chip2: 'Custom fields',
  dk_chip3: 'Calculated fields',
  dk_chip4: 'Screens & menu',
  dk_chip5: 'Catalogs',
  dk_chip6: 'Configuration packs',
  dk_chip7: 'Documented API',
  dk_chip8: 'Per-system credentials',
  dk_chip9: 'Webhooks',
  dk_chip10: 'Import & export',
  dk_final_wa: 'Or message Diego on WhatsApp: +54 9 11 3422-5536',
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
