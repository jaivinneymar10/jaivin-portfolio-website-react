(function () {
  document.documentElement.classList.add('js');
  var P = {
    school: { c: '#3B2FD0', t: 'School website', type: 'UI/UX design', tools: 'Figma, HTML, CSS', lead: 'A multi-page school website designed end to end in Figma, from first wireframes to a responsive high-fidelity prototype.', pts: ['Designed the complete UI/UX, from wireframes to the final prototype.', 'Created a consistent design system for typography, colour palette and components, giving the school a clean and accessible visual identity.', 'Structured navigation and page layouts around the key journeys of students, parents and staff.'], goal: 'Give students, parents and staff one clear place to find what they need, on any screen, without hunting through menus.', how: 'I started with low-fidelity wireframes to settle the page structure and navigation, then built a design system so every page shared the same type, colours and components. The wireframes became a responsive high-fidelity prototype that is ready to be built in HTML and CSS.', chips: ['Wireframes', 'Design system', 'Responsive prototype'], label: 'Open School Website Design in Figma', url: 'https://www.figma.com/design/y12FHYRmuItwDZOS7zCGMd/project?node-id=0-1&t=ZNNSr0ZmKeTBkWlQ-1' },
    crm: { c: '#0B7A5C', t: 'CRM system', type: 'UI/UX design', tools: 'Figma, wireframing', lead: 'A Customer Relationship Management system designed so teams can manage customer data quickly and clearly.', pts: ['Designed dashboards, lead tracking and contact management screens.', 'Built low-fidelity wireframes and carried them through to high-fidelity interactive prototypes to map the key user flows.', 'Put usability and information hierarchy first, so customer data is efficient to manage.'], goal: 'Help a sales team see their leads, follow up on time and find any contact without digging through screens.', how: 'I mapped the main user flows first and sketched them as low-fidelity wireframes. Then I refined the dashboard, lead tracking and contact screens into an interactive prototype, keeping the most important numbers and next actions at the top of each screen.', chips: ['Low-fi wireframes', 'Interactive prototype', 'User flows'], label: 'View Figma prototype', url: 'https://www.figma.com/' },
    cooking: { c: '#C42658', t: 'AI cooking assistant', type: 'AI application', tools: 'Python, NLU, gTTS, Deep Translator', lead: 'An AI-powered multilingual cooking assistant that recommends recipes and guides you through cooking, step by step.', pts: ['Built in Python to give personalised recipe recommendations and step-by-step cooking guidance.', 'Used NLU-based intent recognition and entity extraction so the assistant understands what the user asks for.', 'Added voice output with gTTS and translation with Deep Translator for accessibility and multilingual support.', 'Improved engagement through conversational AI and optimised NLP pipelines.'], goal: 'Let anyone cook hands-free in their own language, by asking for recipes and hearing each step read aloud.', how: 'I used natural language understanding to pick out what the user wants and which dish or ingredient they mean. Recipe suggestions and steps are translated into the chosen language and spoken with text-to-speech, so the user can keep their hands on the food.', chips: ['Intent recognition', 'Voice output', 'Multilingual'], label: 'View code on GitHub', url: 'https://github.com/jaivinneymar10/AI-Cooking-Assistant' },
    shalom: { c: '#8A5A3C', t: 'Shalom Studio Website', type: 'Website project', tools: 'Live website', lead: 'Explore the published Shalom Studio website.', pts: ['Open the live website in a new browser tab.'], goal: 'View the Shalom Studio website.', how: 'This portfolio entry links directly to the live website without modifying that project.', chips: ['Website', 'Live preview'], label: 'Visit live website', url: 'https://shalom-studio-website.vercel.app/' },
    iphone: { c: '#2563EB', t: 'iPhone App Prototype', type: 'Mobile UI/UX design', tools: 'Figma, mobile interface design, prototyping', lead: 'An iPhone app interface concept presented as an interactive Figma prototype.', pts: ['Explore the mobile screens in the interactive prototype.', 'Review the interface layout and the flow between screens.', 'Open the Figma prototype to experience the design directly.'], goal: 'Present a clear and intuitive mobile app experience through an interactive prototype.', how: 'I created this project as an iPhone interface concept and shared it as a Figma prototype. Open the prototype to explore the screens and experience the intended flow.', chips: ['Mobile UI', 'Figma prototype', 'iPhone concept'], label: 'Open iPhone App Prototype in Figma', url: 'https://www.figma.com/proto/lMIfbhTXDrKRdWO1ltc6Jd/i-phone?node-id=0-1&t=0ThL3aJtPFPMHmQd-1' }
  };
  var dt = document.createElement('div'), last = null;
  dt.className = 'dt'; dt.hidden = true; dt.setAttribute('role', 'dialog'); dt.setAttribute('aria-modal', 'true'); dt.setAttribute('aria-label', 'Project page');
  dt.innerHTML = '<div class="wrap"><button type="button" class="back">Back to projects</button><h2 class="huge"></h2><div class="dgrid"><div><p class="lead2"></p><ul class="pts"></ul></div><div class="facts"></div></div><div class="case"><div><h3>The goal</h3><p class="g"></p></div><div><h3>My approach</h3><p class="a"></p></div></div><div class="steps"></div></div>';
  document.body.appendChild(dt);
  function q(s) { return dt.querySelector(s) }
  function openP(k) {
    var p = P[k], f = q('.facts'), ul = q('.pts');
    dt.style.setProperty('--sc', p.c); q('.huge').textContent = p.t; q('.lead2').textContent = p.lead; q('.g').textContent = p.goal; q('.a').textContent = p.how;
    ul.innerHTML = ''; p.pts.forEach(function (x) { var li = document.createElement('li'); li.textContent = x; ul.appendChild(li) });
    q('.steps').innerHTML = ''; p.chips.forEach(function (x) { var s = document.createElement('span'); s.textContent = x; q('.steps').appendChild(s) });
    f.innerHTML = '<div><b>Type</b><span></span></div><div><b>Built with</b><span></span></div><div><b>Year</b><span>2026</span></div><a target="_blank" rel="noopener"></a>';
    var sp = f.querySelectorAll('span'), a = f.querySelector('a'); sp[0].textContent = p.type; sp[1].textContent = p.tools; a.textContent = p.label; a.href = p.url;
    last = document.activeElement; dt.hidden = false; dt.scrollTop = 0; document.body.classList.add('lock'); q('.back').focus();
    try { if (location.hash.slice(1) !== k) location.hash = k } catch (e) { }
  }
  function closeP() { if (dt.hidden) return; dt.hidden = true; document.body.classList.remove('lock'); try { location.hash = 'work' } catch (e) { } if (last) last.focus({ preventScroll: true }) }
  function route() { var h = location.hash.slice(1); if (P[h]) { if (dt.hidden) openP(h) } else closeP() }
  q('.back').addEventListener('click', closeP);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeP() });
  window.addEventListener('hashchange', route);
  document.querySelectorAll('.proj').forEach(function (c) { c.addEventListener('click', function () { openP(c.dataset.p) }) });
  route();

  document.querySelectorAll('a[href^="#"]').forEach(function (a) { a.addEventListener('click', function (e) { var t = document.getElementById(a.getAttribute('href').slice(1)); if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }) } }) });
  document.querySelectorAll('.cp').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.dataset.c; function done() { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy' }, 1500) }
      function fb() { var x = document.createElement('textarea'); x.value = t; x.style.position = 'fixed'; x.style.opacity = '0'; document.body.appendChild(x); x.select(); try { document.execCommand('copy') } catch (e) { } document.body.removeChild(x); done() }
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t).then(done, fb) } else fb()
    })
  });

  var msg = document.getElementById('msg'), send = document.getElementById('send'), chips = document.querySelectorAll('.chips button'), subj = 'Portfolio enquiry';
  function upd() { send.href = 'mailto:jaijaivin2004@gmail.com?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(msg.value); msg.style.height = 'auto'; msg.style.height = msg.scrollHeight + 'px' }
  chips.forEach(function (c) { c.addEventListener('click', function () { chips.forEach(function (x) { x.setAttribute('aria-pressed', x === c) }); subj = c.textContent; msg.value = c.dataset.t; msg.focus(); upd() }) });
  msg.addEventListener('input', upd); upd();

  // Placeholder links: replace each URL with your own. Empty ones are hidden.
  var LINKS = { Figma: "https://www.figma.com/files/team/1579919283973827586/drafts?fuid=1579919281765307167", 'GitHub Dashboard': "https://share.google/RuoBG3axYFMfQWBrZ", LinkedIn: "https://www.linkedin.com/in/jaivin-a-16573829b?utm_source=share_via&utm_content=profile&utm_medium=member_android" }, lk = document.getElementById('links');
  var IC = { Figma: '<svg viewBox="0 0 38 57" aria-hidden="true"><path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"/><path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 019.5 38H19v9.5a9.5 9.5 0 11-19 0z"/><path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 100-19H19z"/><path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 009.5 19H19V0H9.5A9.5 9.5 0 000 9.5z"/><path fill="#A259FF" d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z"/></svg>', GitHub: '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>', LinkedIn: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#0A66C2"/><path fill="#fff" d="M6.94 9.5H4.1V19h2.84V9.5zM5.52 5a1.65 1.65 0 100 3.3 1.65 1.65 0 000-3.3zM19.9 13.4c0-2.55-1.36-3.74-3.18-3.74-1.47 0-2.13.81-2.5 1.38V9.5h-2.83V19h2.83v-5.3c0-1.4.27-2.75 2-2.75 1.7 0 1.72 1.6 1.72 2.84V19h2.83v-5.6z"/></svg>', Resume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>' }; IC['GitHub Dashboard'] = IC.GitHub; Object.keys(LINKS).forEach(function (k) { if (!LINKS[k]) return; var a = document.createElement('a'); a.href = LINKS[k]; a.innerHTML = (IC[k] || '') + '<span>' + k + '</span>'; a.target = '_blank'; a.rel = 'noopener'; lk.appendChild(a) });
  // Resume menu: open either role-specific PDF in the browser viewer.
  var resumeWrap = document.createElement('div');
  resumeWrap.className = 'resume-menu';
  var resumeBtn = document.createElement('button');
  resumeBtn.type = 'button';
  resumeBtn.className = 'resume-trigger';
  resumeBtn.setAttribute('aria-expanded', 'false');
  resumeBtn.innerHTML = IC.Resume + '<span>Resume</span><span class="resume-chevron" aria-hidden="true">⌄</span>';
  var resumeOptions = document.createElement('div');
  resumeOptions.className = 'resume-options';
  resumeOptions.hidden = true;
  [['Full Stack Developer', '/resume.pdf'], ['UI/UX Designer', '/ui-ux-resume.pdf']].forEach(function (item) {
    var option = document.createElement('a');
    option.href = item[1];
    option.target = '_blank';
    option.rel = 'noopener';
    option.textContent = item[0];
    option.setAttribute('aria-label', 'View ' + item[0] + ' resume');
    resumeOptions.appendChild(option);
  });
  resumeBtn.addEventListener('click', function () {
    var opening = resumeOptions.hidden;
    resumeOptions.hidden = !opening;
    resumeBtn.setAttribute('aria-expanded', String(opening));
  });
  document.addEventListener('click', function (event) {
    if (!resumeWrap.contains(event.target)) {
      resumeOptions.hidden = true;
      resumeBtn.setAttribute('aria-expanded', 'false');
    }
  });
  resumeWrap.appendChild(resumeBtn);
  resumeWrap.appendChild(resumeOptions);
  lk.appendChild(resumeWrap);

  var calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Sidebar: scroll-spy with sliding highlight, progress line, clock, theme, magnetic links
  var sd = document.querySelector('.side'), nv = sd.querySelector('nav'), ni = nv.querySelector('.ni'), nl = [].slice.call(nv.querySelectorAll('a')),
    secs = ['work', 'about', 'experience', 'skills', 'contact'].map(function (i) { return document.getElementById(i) }), act = null;
  function mvI(a) { nl.forEach(function (l) { l.classList.toggle('hv', l === a) }); if (a && getComputedStyle(ni).display !== 'none') { ni.style.top = a.offsetTop + 'px'; ni.style.height = a.offsetHeight + 'px'; ni.style.opacity = 1 } else ni.style.opacity = 0 }
  function spy() {
    var y = innerHeight * .4, cu2 = null; secs.forEach(function (s, i) { if (s.getBoundingClientRect().top < y) cu2 = nl[i] }); nl.forEach(function (l) { l.classList.toggle('on', l === cu2) }); act = cu2; if (!nv.matches(':hover')) mvI(cu2);
    var m = document.documentElement.scrollHeight - innerHeight; sd.style.setProperty('--sp', m > 0 ? Math.min(1, scrollY / m) : 0)
  }
  nl.forEach(function (l) { l.addEventListener('pointerenter', function () { mvI(l) }) }); nv.addEventListener('pointerleave', function () { mvI(act) });
  addEventListener('scroll', spy, { passive: true }); addEventListener('resize', spy); spy();
  var clk = document.getElementById('clk'); function ck() { clk.textContent = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata' }) } ck(); setInterval(ck, 1000);
  var th = document.getElementById('thm'), tn = 0; th.addEventListener('click', function () { var d = document.documentElement, now = d.dataset.theme || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'); d.dataset.theme = now === 'dark' ? 'light' : 'dark'; th.style.rotate = (++tn * 180) + 'deg' });
  [].forEach.call(document.querySelectorAll('#links a'), function (a) { a.addEventListener('pointermove', function (e) { var r = a.getBoundingClientRect(); a.style.translate = (e.clientX - r.left - r.width / 2) * .35 + 'px ' + (e.clientY - r.top - r.height / 2) * .5 + 'px' }); a.addEventListener('pointerleave', function () { a.style.translate = '' }) });
  [].forEach.call(document.querySelectorAll('.logo,.role,.side nav a,.thm,.sfoot>*'), function (el, i) { el.style.setProperty('--s', i) });
  var lg = sd.querySelector('.logo'); if (!calm) { lg.classList.add('sel'); setTimeout(function () { lg.classList.remove('sel') }, 2600) }
  document.querySelectorAll('.split:not(.h)').forEach(function (h) { var t = h.textContent.trim().split(' '); h.setAttribute('aria-label', t.join(' ')); h.innerHTML = t.map(function (w, i) { return '<span class="w" aria-hidden="true"><span style="--w:' + i + '">' + w + '</span></span>' }).join(' ') });
  function count(el) {
    var t = +el.dataset.n, d = t % 1 ? 1 : 0, s = performance.now(); if (calm) { el.textContent = t.toFixed(d); return }
    (function f(n) { var k = Math.min(1, (n - s) / 1500); el.textContent = (t * (1 - Math.pow(1 - k, 3))).toFixed(d); if (k < 1) requestAnimationFrame(f) })(s)
  }
  // Hero: word-by-word headline, typed role line, draggable design canvas
  function ww(n, c) { [].slice.call(n.childNodes).forEach(function (x) { if (x.nodeType === 3) { var f = document.createDocumentFragment(); x.textContent.split(/(\s+)/).forEach(function (t) { if (!t) return; if (/^\s+$/.test(t)) f.appendChild(document.createTextNode(' ')); else { var o = document.createElement('span'), i = document.createElement('span'); o.className = 'w'; o.setAttribute('aria-hidden', 'true'); i.style.setProperty('--w', c.n++); i.textContent = t; o.appendChild(i); f.appendChild(o) } }); n.replaceChild(f, x) } else if (x.nodeType === 1) ww(x, c) }) }
  document.querySelectorAll('.split.h').forEach(function (h) { h.setAttribute('aria-label', h.textContent); ww(h, { n: 0 }) });
  var ty = document.getElementById('ty'), TW = ['designing screens in Figma', 'building with JavaScript', 'training chatbots in Python', 'turning mockups into Flutter apps'], ti = 0, ci = 0, dl = false;
  function tick() { var w = TW[ti], d = dl ? 26 : 55; ci += dl ? -1 : 1; ty.textContent = w.slice(0, ci); if (!dl && ci === w.length) { dl = true; d = 1700 } else if (dl && ci === 0) { dl = false; ti = (ti + 1) % TW.length; d = 350 } setTimeout(tick, d) }
  if (calm) ty.textContent = TW[0]; else setTimeout(tick, 900);
  var st = document.getElementById('stage'), fr = [].slice.call(st.querySelectorAll('.fr')), cu = document.getElementById('scur'), sb = st.querySelectorAll('.sb button'), z = 1, busy = false;
  function cl(v, a, b) { return Math.max(a, Math.min(b, v)) }
  function sel(f) { fr.forEach(function (x) { x.classList.toggle('sel', x === f) }); if (f) f.style.zIndex = ++z }
  function mode(m) { st.dataset.mode = m; sb.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.m === m) }) }
  function halt() { busy = false; cu.classList.add('off') }
  sb.forEach(function (b) { b.addEventListener('click', function () { halt(); mode(b.dataset.m) }) });
  fr.forEach(function (f) {
    f.tabIndex = 0; f.addEventListener('focus', function () { sel(f) });
    f.addEventListener('keydown', function (e) { var d = { ArrowLeft: [-14, 0], ArrowRight: [14, 0], ArrowUp: [0, -14], ArrowDown: [0, 14] }[e.key]; if (!d) return; e.preventDefault(); f.style.left = cl(f.offsetLeft + d[0], 0, st.clientWidth - f.offsetWidth) + 'px'; f.style.top = cl(f.offsetTop + d[1], 0, st.clientHeight - f.offsetHeight) + 'px' });
    f.addEventListener('pointerdown', function (e) {
      halt(); f.classList.remove('auto'); sel(f); var ox = e.clientX - f.offsetLeft, oy = e.clientY - f.offsetTop; f.setPointerCapture(e.pointerId); f.classList.add('drag');
      function mv(ev) { f.style.left = cl(ev.clientX - ox, 0, st.clientWidth - f.offsetWidth) + 'px'; f.style.top = cl(ev.clientY - oy, 0, st.clientHeight - f.offsetHeight) + 'px' }
      function up() { f.removeEventListener('pointermove', mv); f.classList.remove('drag') }
      f.addEventListener('pointermove', mv); f.addEventListener('pointerup', up, { once: true }); f.addEventListener('pointercancel', up, { once: true })
    })
  });
  st.addEventListener('pointerdown', function (e) { if (e.target === st) sel(null) });
  if (calm) mode('hifi'); else {
    var f2 = document.getElementById('f2'); function at(ms, fn) { setTimeout(function () { if (busy) fn() }, ms) }
    busy = true; cu.style.left = (st.clientWidth - 90) + 'px'; cu.style.top = '70px';
    at(1000, function () { cu.classList.remove('off') });
    at(1300, function () { cu.style.left = (f2.offsetLeft + 80) + 'px'; cu.style.top = (f2.offsetTop + 20) + 'px' });
    at(2300, function () { sel(f2); f2.classList.add('auto'); var nl = cl(Math.round(st.clientWidth * .28), 0, st.clientWidth - f2.offsetWidth), nt = cl(f2.offsetTop - 60, 30, 9999); cu.style.left = (nl + 80) + 'px'; cu.style.top = (nt + 20) + 'px'; f2.style.left = nl + 'px'; f2.style.top = nt + 'px' });
    at(3500, function () { mode('hifi'); sel(null) });
    at(4100, function () { cu.style.left = (st.clientWidth * .72) + 'px'; cu.style.top = (st.clientHeight - 80) + 'px' });
    at(5700, function () { halt(); f2.classList.remove('auto') })
  }
  // About: design / code prototype toggle
  var pr = document.getElementById('proto'), pb = pr.querySelectorAll('.tg button'), auto;
  function view(v) { pr.dataset.v = v; pb.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.v === v) }) }
  pb.forEach(function (b) { b.addEventListener('click', function () { clearInterval(auto); view(b.dataset.v) }) });
  if (!calm) auto = setInterval(function () { view(pr.dataset.v === 'design' ? 'code' : 'design') }, 4500);
  // Experience: Figma-style layers panel + canvas
  var X = [{ w: '2026 · 6 months', t: 'Full Stack & UI/UX Intern', o: 'Kenmac Corporate Limited, Chennai', d: 'Designed website and mobile app interfaces in Figma, built WordPress sites to match design specs, and turned mockups into Flutter screens.' },
  { w: '14 Apr–24 May 2025', t: 'Data Science & Analytics Intern', o: 'Remark Skill Education, Hyderabad (online)', d: 'Successfully completed RemarkSkill Summer Training and Internship 2025 in Data Science & Analytics.', cert: '/certificates/remarkskill-data-science-analytics.pdf' },
  { w: '9 Jul–8 Aug 2025', t: 'Data Science & AI Intern', o: 'Rasa.AI Labs, Chennai', d: 'Completed an internship focused on Data Science and Artificial Intelligence, contributing to related projects and team deliverables.', cert: '/certificates/rasa-ai-labs-internship.pdf' }];
  var ly = document.getElementById('lay'), tabs = ly.querySelectorAll('.ly'), cd = ly.querySelector('.cd'), cur = 0, tm;
  function pick(i) {
    cur = i; tabs.forEach(function (b, k) { b.classList.toggle('on', k === i); b.setAttribute('aria-selected', k === i) });
    var x = X[i]; var logo = cd.querySelector('.exp-logo'); if (logo) { logo.src = ['/images/kenmac.jpg', '/images/remarkskill_logo.jpg', '/images/rasa_ai_labs_logo.jpg'][i]; logo.alt = ['Kenmac logo', 'Remark Skill Education logo', 'Rasa AI Labs logo'][i]; } cd.querySelector('.fn').textContent = 'Frame ' + (i + 1); cd.querySelector('.when').textContent = x.w; cd.querySelector('h3').textContent = x.t; cd.querySelector('.mute').textContent = x.o; cd.querySelector('p').textContent = x.d;
    var certActions = cd.querySelector('.exp-cert-actions');
    if (!certActions) { certActions = document.createElement('div'); certActions.className = 'exp-cert-actions'; cd.appendChild(certActions); }
    certActions.innerHTML = x.cert ? '<a class="btn p" href="' + x.cert + '" target="_blank" rel="noreferrer">View certificate ↗</a><a class="btn" href="' + x.cert + '" download>Download certificate ↓</a>' : '';
    cd.classList.remove('sw'); void cd.offsetWidth; cd.classList.add('sw')
  }
  function stop() { clearInterval(tm); ly.classList.add('manual') }
  tabs.forEach(function (b, k) { b.addEventListener('click', function () { stop(); pick(k) }) });
  pick(0);
  if (calm) ly.classList.add('manual'); else tm = setInterval(function () { pick((cur + 1) % X.length) }, 6000);
  // Skill logos: brand-coloured badges [background, text colour, glyph]
  var FIG = '<svg viewBox="0 0 12 18" aria-hidden="true"><path fill="#F24E1E" d="M3 0h3v6H3a3 3 0 010-6z"/><path fill="#FF7262" d="M6 0h3a3 3 0 010 6H6z"/><path fill="#A259FF" d="M3 6h3v6H3a3 3 0 010-6z"/><circle fill="#1ABCFE" cx="9" cy="9" r="3"/><path fill="#0ACF83" d="M3 12h3v3a3 3 0 11-3-3z"/></svg>';
  var LG = { figma: ['#1E1E1E', '#fff', FIG], html: ['#E34F26', '#fff', '5'], css: ['#1572B8', '#fff', '3'], javascript: ['#F7DF1E', '#141412', 'JS'], python: ['#3776AB', '#FFD43B', 'Py'], 'node.js': ['#3C873A', '#fff', 'N'], 'express.js': ['#141412', '#fff', 'ex'], mysql: ['#00758F', '#fff', 'My'], postgresql: ['#336791', '#fff', 'Pg'], mongodb: ['#13AA52', '#fff', 'M'], flutter: ['#02569B', '#54C5F8', 'F'], 'github copilot': ['#141412', '#fff', 'Co'], chatgpt: ['#10A37F', '#fff', 'GPT'], wireframing: ['#8A5CF6', '#fff', '\u25AD'], prototyping: ['#E03A6B', '#fff', '\u25B6'], 'responsive ui design': ['#0B7A5C', '#fff', '\u21C6'], 'prompt engineering': ['#F0A020', '#141412', '\u270E'], 'rest apis': ['#3B2FD0', '#fff', '{}'], 'jwt and oauth authentication': ['#D63AFF', '#fff', 'JWT'] };
  function logo(t) { var l = LG[t.toLowerCase().replace(/\s*\(.*\)/, '')]; return l ? '<u style="background:' + l[0] + ';color:' + l[1] + '">' + l[2] + '</u>' : '' }
  // Skills: chips, spotlight and tilt
  document.querySelectorAll('.sk').forEach(function (c) {
    var s = c.querySelector('span'); s.innerHTML = s.textContent.split(', ').map(function (t, k) { return '<i style="--k:' + k + '">' + logo(t) + t + '</i>' }).join('');
    c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height; c.style.setProperty('--mx', x * 100 + '%'); c.style.setProperty('--my', y * 100 + '%'); c.style.setProperty('--rx', (.5 - y) * 8 + 'deg'); c.style.setProperty('--ry', (x - .5) * 8 + 'deg') });
    c.addEventListener('pointerleave', function () { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg') })
  });
  // Projects: tilting previews + "Open project" cursor
  var pcur = document.createElement('div'); pcur.className = 'pcur'; pcur.textContent = 'Open project \u2197'; pcur.setAttribute('aria-hidden', 'true'); document.body.appendChild(pcur);
  if (matchMedia('(hover:hover) and (pointer:fine)').matches) document.querySelectorAll('.proj').forEach(function (c) {
    var pv = c.querySelector('.pv');
    c.addEventListener('pointermove', function (e) { pcur.style.transform = 'translate(' + (e.clientX + 16) + 'px,' + (e.clientY + 16) + 'px)'; pcur.classList.add('on'); var r = c.getBoundingClientRect(); pv.style.setProperty('--rx', -((e.clientY - r.top) / r.height - .5) * 14 + 'deg'); pv.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 18 + 'deg') });
    c.addEventListener('pointerleave', function () { pcur.classList.remove('on'); pv.style.setProperty('--rx', '0deg'); pv.style.setProperty('--ry', '0deg') })
  });
  // Education: prototype flow (Frame 1 -> tap -> Frame 2)
  var fl = document.getElementById('flow'), eds = [].slice.call(fl.querySelectorAll('.ed')), pt = [];
  function setEd(e, on, fin) { e.classList.toggle('on', on); if (fin && !e.classList.contains('done')) { e.classList.add('done'); var b = e.querySelector('b[data-t]'); b.dataset.n = b.dataset.t; count(b) } }
  function at2(ms, fn) { pt.push(setTimeout(fn, ms)) }
  function playF() {
    pt.forEach(clearTimeout); pt = []; fl.classList.remove('go'); eds.forEach(function (e) { e.classList.remove('on', 'done'); e.querySelector('b[data-t]').textContent = '0' });
    if (calm) { fl.classList.add('go'); eds.forEach(function (e) { setEd(e, false, true) }); return }
    at2(300, function () { setEd(eds[0], true, true) }); at2(1700, function () { fl.classList.add('go') }); at2(2900, function () { setEd(eds[0], false); setEd(eds[1], true, true) })
  }
  document.getElementById('play').addEventListener('click', playF);
  eds.forEach(function (e) {
    e.tabIndex = 0; e.setAttribute('role', 'button'); function pk() { pt.forEach(clearTimeout); eds.forEach(function (x) { setEd(x, x === e, x === e) }) }
    e.addEventListener('click', pk); e.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); pk() } })
  });
  if ('IntersectionObserver' in window) {
    // Start the education sequence as soon as its container enters the viewport.
    // A high threshold fails on phones when the full flow is taller than the screen.
    var fio = new IntersectionObserver(function (es) {
      if (es.some(function (entry) { return entry.isIntersecting; })) {
        playF();
        fio.disconnect();
      }
    }, { threshold: 0.05, rootMargin: '0px 0px -8% 0px' });
    fio.observe(fl);
  } else playF();
  // Contact: step tracker + live chat preview
  var mine = document.getElementById('mine'), dots = document.getElementById('dots'), rep = document.getElementById('rep'), stp = [].slice.call(document.querySelectorAll('.stp li')), sp = send.querySelector('span'), pref = '', ct = [];
  function sync() {
    ct.forEach(clearTimeout); ct = []; send.classList.remove('go2'); sp.textContent = 'Send as email'; var v = msg.value.trim(); mine.hidden = !v; mine.textContent = v; mine.classList.remove('sent'); dots.hidden = true; rep.hidden = true;
    var s = !pref ? 1 : (v.length > pref.trim().length ? 3 : 2); stp.forEach(function (li, i) { li.classList.toggle('on', i + 1 === s); li.classList.toggle('dn', i + 1 < s) })
  }
  chips.forEach(function (c) { c.addEventListener('click', function () { pref = c.dataset.t; sync() }) });
  msg.addEventListener('input', sync); sync();
  send.addEventListener('click', function () {
    send.classList.add('go2'); sp.textContent = 'Opening your email…'; mine.classList.add('sent'); stp.forEach(function (li) { li.classList.remove('on'); li.classList.add('dn') });
    ct.push(setTimeout(function () { dots.hidden = false }, 500), setTimeout(function () { dots.hidden = true; rep.hidden = false }, 2000), setTimeout(function () { send.classList.remove('go2'); sp.textContent = 'Send as email' }, 2300))
  });
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    send.addEventListener('pointermove', function (e) { var r = send.getBoundingClientRect(); send.style.translate = (e.clientX - r.left - r.width / 2) * .08 + 'px ' + (e.clientY - r.top - r.height / 2) * .16 + 'px' });
    send.addEventListener('pointerleave', function () { send.style.translate = '' });
  }
  var rv = document.querySelectorAll('.rv,.split,[data-n],.proj,.contact');
  function show(el) { el.classList.add('in'); if (el.dataset.n) count(el) }
  if ('IntersectionObserver' in window) { var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { show(en.target); io.unobserve(en.target) } }) }, { threshold: .2 }); rv.forEach(function (s) { io.observe(s) }) }
  else rv.forEach(show);
})();
(function () { var pf = document.getElementById("pf"); if (!pf) return; var cur = pf.querySelector(".pfc"), bs = pf.querySelectorAll(".pfs button"), auto = true, t; function mode(m) { pf.setAttribute("data-m", m); bs.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-m") === m) }) } function go(el, fx, fy) { var a = pf.getBoundingClientRect(), r = el.getBoundingClientRect(); cur.style.transform = "translate(" + (r.left - a.left + r.width * fx) + "px," + (r.top - a.top + r.height * fy) + "px)" } bs.forEach(function (b) { b.addEventListener("click", function () { auto = false; clearTimeout(t); mode(b.getAttribute("data-m")) }) }); if (matchMedia("(prefers-reduced-motion:reduce)").matches) return; function loop() { if (!auto) return; var n = pf.getAttribute("data-m") === "design" ? "build" : "design"; go(pf.querySelector(".pfs button[data-m=" + n + "]"), .55, .6); t = setTimeout(function () { if (!auto) return; cur.classList.add("clk"); setTimeout(function () { cur.classList.remove("clk") }, 400); mode(n); t = setTimeout(function () { if (!auto) return; go(pf.querySelector(n === "build" ? ".hd.br" : ".hd.tl"), .5, .5); t = setTimeout(loop, 3200) }, 900) }, 1300) } t = setTimeout(loop, 2200) })();
(function () { var c = document.getElementById("contact"); if (!c) return; var cur = c.querySelector(".cfc"); if (!cur) return; if (matchMedia("(prefers-reduced-motion:reduce)").matches) return; var T = [].slice.call(c.querySelectorAll(".chips button")).concat([c.querySelector("#msg"), c.querySelector("#send")]), i = 0, on = false, t, auto = true; function go(el) { var a = c.getBoundingClientRect(), r = el.getBoundingClientRect(); cur.style.transform = "translate(" + (r.left - a.left + r.width * .6) + "px," + (r.top - a.top + r.height * .6) + "px)" } function step() { if (!auto || !on) return; var el = T[i % T.length]; go(el); t = setTimeout(function () { if (!auto) return; cur.classList.add("clk"); el.classList.add("hl"); setTimeout(function () { cur.classList.remove("clk"); el.classList.remove("hl") }, 800); i++; t = setTimeout(step, 1500) }, 1300) } function stop() { auto = false; clearTimeout(t); cur.style.opacity = 0; T.forEach(function (e) { e.classList.remove("hl") }) } c.addEventListener("pointerdown", stop); c.addEventListener("focusin", stop); new IntersectionObserver(function (e) { on = e[0].isIntersecting; clearTimeout(t); if (on && auto) step() }, { threshold: .3 }).observe(c) })();
(function () { var p = document.querySelector(".role"); if (!p || matchMedia("(prefers-reduced-motion:reduce)").matches) return; var L = p.querySelectorAll(".rl"), T = [].map.call(L, function (e) { return e.textContent }); function w(ms) { return new Promise(function (r) { setTimeout(r, ms) }) } function cur(i) { [].forEach.call(L, function (e) { e.classList.remove("cr") }); L[i].classList.add("cr") } async function type(i) { cur(i); for (var k = 1; k <= T[i].length; k++) { L[i].textContent = T[i].slice(0, k); await w(70) } } async function erase(i) { cur(i); for (var k = T[i].length - 1; k >= 0; k--) { L[i].textContent = T[i].slice(0, k); await w(35) } } (async function () { [].forEach.call(L, function (e) { e.textContent = "" }); cur(0); await w(1400); while (true) { await type(0); await w(250); await type(1); await w(3200); await erase(1); await erase(0); await w(500) } })() })();
(function () { function f() { [].forEach.call(document.querySelectorAll("link[media=print]"), function (l) { l.media = "all" }) } addEventListener("load", function () { setTimeout(f, 50) }); if (!("IntersectionObserver" in window)) return; var io = new IntersectionObserver(function (es) { es.forEach(function (e) { e.target.classList.toggle("off", !e.isIntersecting) }) }, { rootMargin: "120px" });[].forEach.call(document.querySelectorAll("main section,.hero,.mq,.pf"), function (s) { io.observe(s) }) })();

/* scroll progress bar */
(function () {
  try {
    var jw = document.createElement('div'); jw.className = 'jvw'; jw.setAttribute('aria-hidden', 'true');
    var T1 = 'const jarvis = new Developer("Jaivin"); // design -&gt; build -&gt; ship | npm run build | git push origin main | SELECT * FROM projects; | &lt;h1&gt;Hello, World&lt;/h1&gt; | def build(design): return code | ',
      T2 = '01001010 01000001 01001001 01010110 01001001 01001110 // J A I V I N | .card { display: grid; } | async function load() { await fetch(url) } | console.log("online"); | ',
      P = function (id, r) { return '<path id="' + id + '" fill="none" d="M300,300 m-' + r + ',0 a' + r + ',' + r + ' 0 1,1 ' + (2 * r) + ',0 a' + r + ',' + r + ' 0 1,1 -' + (2 * r) + ',0"/>' },
      S = function (c, i) { return '<svg class="' + c + '" viewBox="0 0 600 600">' + i + '</svg>' };
    jw.innerHTML = '<div class="jv">'
      + S('r1', '<circle cx="300" cy="300" r="292" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="1 9" opacity=".22"/><circle cx="300" cy="300" r="284" fill="none" stroke="currentColor" stroke-width=".7" opacity=".14"/><circle cx="300" cy="300" r="278" fill="none" stroke="currentColor" stroke-width="7" stroke-dasharray="1.5 13" opacity=".16"/>')
      + S('r2', '<defs>' + P('jp1', 262) + '</defs><text font-size="11" opacity=".34"><textPath href="#jp1" textLength="1640" lengthAdjust="spacing">' + T1 + '</textPath></text>')
      + S('r3', '<circle class="ac" cx="300" cy="300" r="238" fill="none" stroke-width="3" stroke-linecap="round" stroke-dasharray="190 70 100 45 60 90" opacity=".4"/><circle cx="300" cy="300" r="230" fill="none" stroke="currentColor" stroke-width=".8" opacity=".16"/>')
      + S('r4', '<defs>' + P('jp2', 200) + '</defs><text font-size="10" opacity=".3"><textPath href="#jp2" textLength="1250" lengthAdjust="spacing">' + T2 + '</textPath></text>')
      + S('r5', '<circle cx="300" cy="300" r="168" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="6 10" opacity=".22"/><circle class="ac" cx="300" cy="300" r="150" fill="none" stroke-width="2" stroke-linecap="round" stroke-dasharray="130 40 60 60" opacity=".4"/>')
      + '<svg viewBox="0 0 600 600"><circle cx="300" cy="300" r="112" fill="none" stroke="currentColor" stroke-width="1" opacity=".18"/><circle cx="300" cy="300" r="62" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".22"/><path class="ac" d="M300,262 L333,319 L267,319 Z" fill="none" stroke-width="1.6" opacity=".45"/><circle class="core" cx="300" cy="303" r="7"/><text x="300" y="392" text-anchor="middle" font-size="10" letter-spacing="4" opacity=".4">J.A.I.V.I.N</text></svg>'
      + '</div>';
    document.body.appendChild(jw);
    var pr = document.createElement('div'); pr.className = 'fxp'; pr.setAttribute('aria-hidden', 'true');
    document.body.appendChild(pr);
    var t = false; function u() { t = false; var h = document.documentElement.scrollHeight - window.innerHeight; pr.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, Math.max(0, window.pageYOffset / h)) : 0) + ')' }
    window.addEventListener('scroll', function () { if (!t) { t = true; requestAnimationFrame(u) } }, { passive: true });
    window.addEventListener('resize', u, { passive: true }); u();
  } catch (e) { }
})();

/* Portfolio polish: section reveals + active section navigation. */
(function () {
  try {
    var sections = Array.prototype.slice.call(document.querySelectorAll('main > section[id]'));
    if (!sections.length) return;
    if ('IntersectionObserver' in window) {
      var reveal = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('jp-visible');
            reveal.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
      sections.forEach(function (section) { reveal.observe(section); });
    } else sections.forEach(function (section) { section.classList.add('jp-visible'); });

    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.side nav a[href^="#"]'));
    if ('IntersectionObserver' in window && navLinks.length) {
      var active = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            var match = link.getAttribute('href') === '#' + entry.target.id;
            if (match) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        });
      }, { rootMargin: '-24% 0px -58% 0px', threshold: 0 });
      sections.forEach(function (section) { active.observe(section); });
    }
  } catch (err) { /* Keep the portfolio usable if an enhancement fails. */ }
})();
