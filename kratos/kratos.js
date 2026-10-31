/* =========================================================
   KRATOS · by Plexia — landing de producto
   Nav, animaciones e i18n propios (no depende de js/main.js).
   El texto en español se toma del HTML; acá sólo va el inglés.
   Comparte la preferencia de idioma con el resto del sitio.
   ========================================================= */

const krEn = {
  kr_by: 'by',
  kr_nav_how: 'How it works',
  kr_nav_portal: 'Portal',
  kr_nav_exec: 'Execution',
  kr_nav_dash: 'Dashboard',
  kr_nav_ai_short: 'AI',
  kr_nav_doc: 'Document',
  kr_nav_approve: 'Approve & publish',
  kr_nav_integ: 'Integrations',
  kr_nav_ai: 'Artificial intelligence',
  kr_nav_faq: 'FAQ',
  kr_cta_demo: 'Request a demo',

  kr_hero_eyebrow: 'Processes & procedures',
  kr_hero_t1: 'Clear processes.',
  kr_hero_t2: 'Working every single day.',
  kr_hero_text: 'Kratos is the platform to document, approve, publish and run your organization’s procedures. Everyone knows their part, every case moves forward step by step, and you see exactly where things get stuck.',
  kr_hero_btn2: 'See how it works',
  kr_hero_n1: '100% web-based',
  kr_hero_n2: 'Automatic diagrams',
  kr_hero_n3: 'AI assistant included',
  kr_hero_n4: 'Works on your phone',

  kr_mk_manual: 'Administration Manual',
  kr_mk_proc: 'Supplier payments',
  kr_mk_published: 'Published',
  kr_mk_tab1: 'Activities',
  kr_mk_tab2: 'Flowchart',
  kr_mk_tab3: 'Execution',
  kr_mk_tab4: 'Indicators',
  kr_mk_l1: 'Purchasing',
  kr_mk_l2: 'Management',
  kr_mk_l3: 'Treasury',
  kr_mk_no: 'No: fix it',
  kr_mk_yes: 'Yes',
  kr_mk_n1: 'Receive invoice',
  kr_mk_n2: 'Check',
  kr_mk_n3: 'Approve payment',
  kr_mk_n4: 'Schedule payment',
  kr_mk_n5: 'Pay & notify',
  kr_mk_reads: 'reads confirmed',
  kr_mk_exec_label: 'Case in progress',
  kr_mk_exec_step: 'Step 3 of 5 · Approve payment',
  kr_mk_exec_due: 'due today',

  kr_strip1: 'Document.',
  kr_strip2: 'Publish.',
  kr_strip3: 'Run.',
  kr_strip_sub: 'The full lifecycle of your processes, in a single platform.',

  kr_pb_label: 'The challenge',
  kr_pb_title: 'Your processes exist. The problem is nobody can see them.',
  kr_pb_sub: 'They live in a few people’s heads, in an old Word file or in a shared folder nobody opens.',
  kr_pb1_t: 'Manuals nobody updates',
  kr_pb1_p: 'There are three versions of the same document and none reflects how work is done today.',
  kr_pb2_t: '“Wait, who does this?”',
  kr_pb2_p: 'When someone joins or leaves, knowledge gets lost and the same mistakes happen again.',
  kr_pb3_t: 'Cases stuck without anyone noticing',
  kr_pb3_p: 'A payment, a purchase or an onboarding sits on someone’s desk and nobody knows where or since when.',
  kr_pb_answer1: 'Kratos turns your procedures into',
  kr_pb_answer2: 'something alive: clear, shared and measured.',

  kr_how_label: 'How it works',
  kr_how_title: 'From paper to operations, in four steps',
  kr_how1_t: 'Document',
  kr_how1_p: 'Write each step, who does it and with what. The diagram draws itself.',
  kr_how2_t: 'Approve',
  kr_how2_p: 'Each procedure goes through review and approval before it’s published, with every version saved.',
  kr_how3_t: 'Share',
  kr_how3_p: 'Everyone sees their part in the portal and confirms they’ve read it.',
  kr_how4_t: 'Run & measure',
  kr_how4_p: 'Real cases move through the procedure step by step, with deadlines, alerts and indicators.',

  kr_ft_label: 'Features',
  kr_ft_title: 'Everything your processes need',
  kr_ft_sub: 'One tool to write them, share them and make them work.',
  kr_f1_t: 'Organized manuals',
  kr_f1_p: 'Manuals and procedures with a common format, table of contents, glossary and process map.',
  kr_f2_t: 'Automatic diagrams',
  kr_f2_p: 'The flowchart is built from the steps, and you can fine-tune it by dragging on the drawing.',
  kr_f3_t: 'Who does what',
  kr_f3_p: 'Each step is owned by a position, not a person: if someone changes, the process keeps going.',
  kr_f4_t: 'Versions & history',
  kr_f4_p: 'Every change is saved and any two versions can be compared.',
  kr_f5_t: 'Official PDF',
  kr_f5_p: 'Branded documents, approval signatures and a code to verify they’re authentic.',
  kr_f6_t: 'A portal for everyone',
  kr_f6_p: 'Simple search, “your part”, mandatory reading and suggestions, also from your phone.',
  kr_f7_t: 'Case execution',
  kr_f7_p: 'Payments, purchases or onboardings that move from position to position, with deadlines and alerts.',
  kr_f8_t: 'Dashboard & indicators',
  kr_f8_p: 'How long each process takes, where it gets stuck and whether it meets the target you set.',

  kr_doc_label: 'Document',
  kr_doc_title: 'Write the process. Kratos draws it.',
  kr_doc_sub: 'You enter the steps as if you were explaining them to a new hire. Kratos builds the diagram, the responsibility matrix and the final document.',
  kr_doc1_b: 'Step by step',
  kr_doc1_s: 'with owner, forms and the tools being used.',
  kr_doc2_b: 'Drag and arrange',
  kr_doc2_s: 'steps right on the diagram.',
  kr_doc3_b: 'Responsibility matrix',
  kr_doc3_s: '(who does it, who approves, who is consulted and who is informed).',
  kr_doc4_b: 'Import what you already have',
  kr_doc4_s: 'from Word, PDF or diagrams made in other tools.',
  kr_mk_raci: 'Responsibilities',
  kr_mk_a1: 'Receive the supplier invoice',
  kr_mk_a1s: 'Purchasing analyst · Invoice',
  kr_mk_a2: 'Check against the purchase order',
  kr_mk_a2s: 'Purchasing analyst · Purchase order',
  kr_mk_a3: 'Approve the payment',
  kr_mk_a3s: 'Administration manager · 1-day deadline',
  kr_mk_a4: 'Schedule the payment',
  kr_mk_a4s: 'Treasurer · Banking system',
  kr_mk_r4: 'Accounting',
  kr_map_title: 'Process map',
  kr_map_sub: 'Your whole organization at a glance, with the status of every procedure.',
  kr_map_r1: 'Strategic',
  kr_map_c1: 'Annual planning',
  kr_map_c2: 'Budget',
  kr_map_c3: 'Project management',
  kr_map_r2: 'Core',
  kr_map_c4: 'Customer onboarding',
  kr_map_c5: 'Sales',
  kr_map_c6: 'Purchase request',
  kr_map_c7: 'Complaint handling',
  kr_map_c8: 'Logistics',
  kr_map_r3: 'Support',
  kr_map_c9: 'Employee onboarding',
  kr_map_c10: 'Expense reimbursement',
  kr_map_c11: 'Help desk',
  kr_map_c12: 'Training',
  kr_map_lg1: 'Published',
  kr_map_lg2: 'Under review',
  kr_map_lg3: 'Draft',

  kr_ap_label: 'Approve & publish',
  kr_ap_title: 'One current version. Always.',
  kr_ap_sub: 'Nothing gets published without going through the people who must review and approve it. And the previous version is kept.',
  kr_ap1_t: 'Draft',
  kr_ap1_p: 'Written and refined.',
  kr_ap2_t: 'Under review',
  kr_ap2_p: 'Comments and corrections.',
  kr_ap3_t: 'Approved',
  kr_ap3_p: 'By the owner or the board.',
  kr_ap4_t: 'Published',
  kr_ap4_p: 'Available to everyone, with a notice.',
  kr_ap4_w: '312 people notified',
  kr_ver_title: 'Version history',
  kr_ver_sub: 'What changed, who approved it and when.',
  kr_ver1_b: 'Current since 10/14/2026',
  kr_ver1_s: 'Approved by Diego Ferreyra · Administration',
  kr_ver1_d1: '+1 step',
  kr_ver1_d2: '1 owner changed',
  kr_ver2_b: '06/03/2026',
  kr_ver2_s: 'New approval flow by amount',
  kr_ver2_d1: '+2 steps',
  kr_ver2_d2: '−1 form',
  kr_ver3_b: '02/12/2025',
  kr_ver3_s: 'First published version',
  kr_pdf_title: 'The official document, ready to sign and share',
  kr_pdf_sub: 'Kratos generates the PDF with your brand, the diagram, the owners and the approvals.',
  kr_pdf_ok: 'Approved',
  kr_pdf1: 'With your logo, colors and cover page.',
  kr_pdf2: 'A watermark when a version is no longer current.',
  kr_pdf3: 'A code to verify it hasn’t been altered.',
  kr_pdf4: 'An automatic reminder when it’s due for review.',

  kr_po_label: 'Procedures portal',
  kr_po_title: 'Everyone gets their part. And you know they read it.',
  kr_po_sub: 'A simple portal so everyone can find how things are done, without 80-page manuals.',
  kr_po1_b: '“Your part”:',
  kr_po1_s: 'each person sees only the steps that apply to their position.',
  kr_po2_b: 'Mandatory reading',
  kr_po2_s: 'with confirmation and tracking by department.',
  kr_po3_b: 'Suggestions:',
  kr_po3_s: 'the people doing the work propose improvements and get an answer.',
  kr_po4_b: 'On your phone',
  kr_po4_s: 'and, if you want, with an open portal for customers or suppliers.',
  kr_ph_hi: 'Hi, Carla 👋',
  kr_ph_title: 'Your procedures',
  kr_ph_search: '🔍 How do I…?',
  kr_ph_sec1: 'Pending reading',
  kr_ph_new: 'New version 2.1 · 4 min',
  kr_ph_btn: 'I confirm I’ve read it',
  kr_ph_sec2: 'Your part',
  kr_ph_p1: '2 steps are yours',
  kr_ph_p2: '1 step is yours',
  kr_ph_p3: '3 steps are yours',
  kr_rd_read: 'read',
  kr_rd_title: 'Reads of v2.1',
  kr_rd_sub: '271 of 312 people have already confirmed. The rest get a reminder.',
  kr_ar1: 'Sales',
  kr_ar2: 'Operations',
  kr_ar3: 'Administration',
  kr_sg_text: '“Let’s check the supplier’s tax ID before approving.”',
  kr_sg_meta: 'Suggestion by Martín Sosa · answered and applied in v2.1',

  kr_ex_badge: 'Procedure execution',
  kr_ex_title: 'From manual to action: real cases follow your procedure',
  kr_ex_sub: 'A payment, a purchase, a new customer: each case moves from position to position following what’s published. Every step has a deadline, and who did it, when and with what data is recorded.',
  kr_ex1_b: 'My tasks:',
  kr_ex1_s: 'everyone sees what’s theirs today, what’s due and what was sent back to them.',
  kr_ex2_b: 'Timely alerts:',
  kr_ex2_s: 'one day before the deadline, and to the manager if the step is overdue.',
  kr_ex3_b: 'Send back with a reason:',
  kr_ex3_s: 'if something is missing, the case returns to the previous step with the reason written down.',
  kr_ex4_b: 'Reassign without losing anything:',
  kr_ex4_s: 'primary and backup people per position, to cover vacations and leave.',
  kr_tk_eyebrow: 'Administration manager',
  kr_tk_title: 'My tasks',
  kr_tk_k1: 'Pending',
  kr_tk_k2: 'Due today',
  kr_tk_k3: 'Overdue',
  kr_tk_k4: 'On time',
  kr_tk1_b: 'Review new supplier',
  kr_tk1_d: '1 day overdue',
  kr_tk_btn: 'Resolve',
  kr_tk2_d: 'Due today',
  kr_tk3_b: 'Approve purchase request',
  kr_tk3_s: 'Laptops for Sales',
  kr_tk3_d: 'Due tomorrow',
  kr_tk4_b: 'Sent back:',
  kr_tk4_s: '“Bank account proof is missing”',
  kr_tk4_d: 'In 2 days',
  kr_run_eyebrow: 'Case',
  kr_run_d1: 'Amount',
  kr_run_d2: 'Invoice',
  kr_run_d3: 'Started',
  kr_run_s3: 'Management · Diego Ferreyra',
  kr_run_s3b: 'Due today 6:00 pm',
  kr_run_s4: 'Treasury · 1-day deadline',
  kr_run_s5: 'Treasury · 2-day deadline',
  kr_xm_subj: 'Your turn: Approve the payment · EJ-0418',
  kr_xm_body: 'Hi Diego, a step is waiting for you. It’s due today.',
  kr_xm_btn: 'Open and resolve →',
  kr_x1_t: 'Everyone takes part, even without a user account',
  kr_x1_p: 'Each owner gets a personal link by email to complete their step without logging in.',
  kr_xs_h1: 'Supplier',
  kr_xs_h3: 'Status',
  kr_xs_err: ' Missing',
  kr_x2_t: 'Many cases at once',
  kr_x2_p: 'Upload a spreadsheet and every valid row starts a case. Rows with errors are flagged first.',
  kr_x3_t: 'Deadlines in business days',
  kr_x3_p: 'Using your company calendar: holidays and non-working days don’t count.',

  kr_db_label: 'Dashboard & indicators',
  kr_db_title: 'See how your processes really work',
  kr_db_sub: 'How many cases come in, how long they take versus what’s expected, which step slows them down and whether they hit the target.',
  kr_db_f2: 'October 2026',
  kr_db_f3: 'All procedures',
  kr_db_k1: 'Started',
  kr_db_k1e: '▲ 12% vs. Sept.',
  kr_db_k2: 'Completed',
  kr_db_k2e: '▲ 8% vs. Sept.',
  kr_db_k3: 'Average time',
  kr_db_k3v: '2.8 days',
  kr_db_k3e: 'expected: 3 days',
  kr_db_k4: 'On time',
  kr_db_k4e: '▼ 2 pts vs. Sept.',
  kr_db_ch1: 'Cases completed per week',
  kr_db_lg1: 'On time',
  kr_db_lg2: 'Delayed',
  kr_db_ch2: 'Where does it get stuck?',
  kr_db_ch2s: 'average time per step',
  kr_db_t1: '0.4 d',
  kr_db_t2: '0.9 d',
  kr_db_t3: '1.9 d',
  kr_db_t4: '0.8 d',
  kr_db_t5: '1.1 d',
  kr_in1_t: 'Payments on time',
  kr_in_ok: 'On target',
  kr_in1_g: 'Target: 90% or more',
  kr_in2_t: 'Send-backs',
  kr_in_risk: 'At risk',
  kr_in2_g: 'Target: 5% or less',
  kr_in3_t: 'Approval time',
  kr_in_off: 'Off target',
  kr_db_t3b: '1.9 days',
  kr_in3_g: 'Target: 1 day or less',

  kr_in_label: 'Integrations',
  kr_int_title: 'Connects with the systems you already use',
  kr_int_sub: 'Your ERP, front desk or supplier portal can start cases in Kratos, complete steps and get notified of what happens, without entering anything twice.',
  kr_int1_b: 'Cases that start on their own',
  kr_int1_s: 'when an invoice or request comes in through another system.',
  kr_int2_b: 'Outgoing notifications',
  kr_int2_s: 'when a case moves forward, is delayed or finishes.',
  kr_int3_b: 'Compatible diagrams',
  kr_int3_s: 'with other process modeling tools (BPMN).',
  kr_hub_c: 'your processes',
  kr_hub1: 'ERP',
  kr_hub2: 'Front desk',
  kr_hub3: 'Suppliers',
  kr_hub4: 'Email & alerts',
  kr_hub5: 'Excel sheets',
  kr_hub6: 'BPMN diagrams',

  kr_ai_label: 'Artificial intelligence',
  kr_ai_title: 'An assistant that knows your processes',
  kr_ai_sub: 'Ask the way you’d ask an experienced colleague. And let it help you write what isn’t written yet.',
  kr_ai1_t: 'Instant answers',
  kr_ai1_p: '“How do I register a supplier?” and it replies with the steps and a link to the procedure.',
  kr_ai2_t: 'From a document to a procedure',
  kr_ai2_p: 'Upload a Word file or a PDF and it proposes the steps, owners and diagram.',
  kr_ai3_t: 'Complete manuals',
  kr_ai3_p: 'Builds the structure of an entire manual from what you already have.',
  kr_ai4_t: 'On your terms',
  kr_ai4_p: 'It only sees what each user can see, and nothing is published without a person reviewing it.',
  kr_chat_title: 'Kratos Assistant',
  kr_chat_q: 'What do I need to do to pay a new supplier?',
  kr_chat_a: 'First they need to be registered. Then:',
  kr_chat_a1: 'Purchasing receives and checks the invoice.',
  kr_chat_a2: 'Management approves the payment (deadline: 1 day).',
  kr_chat_a3: 'Treasury schedules it and notifies the supplier.',
  kr_chat_link: 'Open “Supplier payments” v2.1 →',
  kr_chat_q2: 'Build the expense reimbursement procedure from this Word file.',
  kr_conv1: 'Enter the expense',
  kr_conv2: 'Attach receipts',
  kr_conv3: 'Approve (manager)',
  kr_conv4: 'Reimburse',

  kr_who_label: 'Who it’s for',
  kr_who_title: 'For organizations that want to work in an orderly way',
  kr_who_sub: 'Companies, financial institutions, public agencies and growing SMBs.',
  kr_who1_t: 'Organization & processes',
  kr_who1_p: 'The people who write and maintain procedures.',
  kr_who2_t: 'Quality & improvement',
  kr_who2_p: 'Measure, find bottlenecks and improve.',
  kr_who3_t: 'Operations',
  kr_who3_p: 'Day-to-day cases that must be done on time.',
  kr_who4_t: 'Human resources',
  kr_who4_p: 'Onboarding new hires and clear job roles.',
  kr_who5_t: 'Leadership',
  kr_who5_p: 'A clear view of how the organization works.',

  kr_org_label: 'Your organization',
  kr_org_title: 'Departments, positions and people, always up to date',
  kr_org_sub: 'Procedures rely on your real structure. If someone changes positions, their tasks go to whoever replaces them.',
  kr_org_b1: 'General management',
  kr_org_s1: '3 positions',
  kr_org_s2: '2 positions',
  kr_org_s3: '4 positions',
  kr_sec_label: 'Security',
  kr_sec_title: 'Your information, protected and under control',
  kr_sec_sub: 'Built by Plexia with the same standards we apply in demanding organizations.',
  kr_sec1_b: 'Role-based permissions:',
  kr_sec1_s: 'each user sees and does only what they should.',
  kr_sec2_b: 'Everything is logged:',
  kr_sec2_s: 'who changed what, and when.',
  kr_sec3_b: 'Secure sign-in,',
  kr_sec3_s: 'with two-step verification.',
  kr_sec4_b: 'In the cloud or on your servers,',
  kr_sec4_s: 'whichever your organization prefers.',
  kr_sec5_b: 'Multiple companies,',
  kr_sec5_s: 'each with its own separate data.',

  kr_impl_label: 'Implementation',
  kr_impl_title: 'You don’t start from scratch',
  kr_impl_sub: 'We support you from the first procedure until your team runs it on its own.',
  kr_impl1_t: 'Ready-made templates',
  kr_impl1_p: 'Model procedures for the most common processes, to adapt in minutes.',
  kr_impl2_t: 'Migrating what you have',
  kr_impl2_p: 'We bring your current manuals into Kratos, with help from AI.',
  kr_impl3_t: 'Demo company',
  kr_impl3_p: 'To try things out and train people without touching real data.',
  kr_impl4_t: 'Training & support',
  kr_impl4_p: 'User manual, in-app help on every screen and the Plexia team close by.',

  kr_faq_label: 'FAQ',
  kr_faq_title: 'What everyone asks us',
  kr_q1: 'Do I have to enter everything from scratch?',
  kr_a1: 'No. You can start from your Word or PDF documents, from diagrams you already have or from our templates. The AI assistant helps you bring them into Kratos.',
  kr_q2: 'Does everyone need a user account?',
  kr_a2: 'No. The portal can be open to the whole organization and, during execution, people without an account get an email link to complete their step.',
  kr_q3: 'Do I have to use case execution from day one?',
  kr_a3: 'No. Many organizations start by documenting and publishing, then turn on execution for the processes that matter most, one at a time.',
  kr_q4: 'Does it work on my phone?',
  kr_a4: 'Yes. Kratos is 100% web-based and adapts to any screen: you can read procedures, confirm reads and resolve tasks from your phone.',
  kr_q5: 'Can I customize it with our brand?',
  kr_a5: 'Yes. Your logo and details appear on screens and in the PDF documents Kratos generates.',
  kr_q6: 'Is it available in other languages?',
  kr_a6: 'Kratos is available in Spanish and English, and each user picks their own.',

  kr_final_title: 'Get to know Kratos in 30 minutes',
  kr_final_text: 'We’ll walk you through the platform with a process like yours and answer all your questions.',
  kr_final_btn2: 'Ask a question',
  kr_footer_desc: 'Processes & procedures.',
  kr_footer_by: 'A Plexia product.',
  kr_footer_product: 'Product',
  kr_footer_contact: 'Contact',
  kr_footer_loc: 'Argentina',
  kr_footer_copy: '© 2026 Plexia. All rights reserved.',
};

const KR_LANG_KEY = 'plexia_lang';
const krEs = {};

function krGetLang() {
  try { return localStorage.getItem(KR_LANG_KEY) || 'es'; } catch { return 'es'; }
}

function krApplyLanguage(lang) {
  try { localStorage.setItem(KR_LANG_KEY, lang); } catch { /* sin storage: sólo en memoria */ }
  const dict = lang === 'en' ? krEn : krEs;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

function krInitI18n() {
  // El HTML ya está en español: se guarda como diccionario base.
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (krEs[el.dataset.i18n] === undefined) krEs[el.dataset.i18n] = el.textContent;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => krApplyLanguage(btn.dataset.lang));
  });
  krApplyLanguage(krGetLang());
}

function krInitNav() {
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

function krInitAnimations() {
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

// Código de verificación ilustrativo del PDF (patrón fijo, no codifica nada)
function krInitQr() {
  const box = document.getElementById('kr-qr');
  if (!box) return;
  const n = 9;
  let seed = 7;
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const finder = (r, c) => {
    const inBox = (r0, c0) => r >= r0 && r < r0 + 3 && c >= c0 && c < c0 + 3;
    return inBox(0, 0) || inBox(0, n - 3) || inBox(n - 3, 0);
  };
  let html = '';
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const on = finder(r, c) || rnd() > 0.5;
      html += `<i class="${on ? 'on' : ''}"></i>`;
    }
  }
  box.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  krInitI18n();
  krInitNav();
  krInitAnimations();
  krInitQr();
});
