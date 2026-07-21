/* ===========================================================
   MAIN JS — loader, smooth scroll, particles, interactions
   =========================================================== */

(function(){
  "use strict";

  /* ---------------- LOADER ---------------- */
  const loader = document.getElementById('loader');
  const loaderFill = document.getElementById('loaderFill');
  const loaderPct = document.getElementById('loaderPct');
  let pct = 0;
  const loadInterval = setInterval(()=>{
    pct += Math.random()*18 + 6;
    if(pct >= 100){
      pct = 100;
      clearInterval(loadInterval);
      loaderFill.style.width = '100%';
      loaderPct.textContent = '100%';
      setTimeout(()=>{
        loader.classList.add('hide');
        document.body.style.overflow = '';
        startEntranceAnimations();
      }, 350);
      return;
    }
    loaderFill.style.width = pct + '%';
    loaderPct.textContent = Math.floor(pct) + '%';
  }, 160);
  document.body.style.overflow = 'hidden';
  // Safety: never block longer than 3.5s
  setTimeout(()=>{ if(!loader.classList.contains('hide')){ loader.classList.add('hide'); document.body.style.overflow=''; startEntranceAnimations(); } }, 3500);

  function startEntranceAnimations(){
    document.querySelectorAll('#hero .reveal, #hero .reveal-right').forEach((el,i)=>{
      setTimeout(()=> el.classList.add('in'), i*90);
    });
  }

  /* ---------------- CUSTOM CURSOR ---------------- */
  const glow = document.getElementById('cursorGlow');
  const dot = document.getElementById('cursorDot');
  let mx=0,my=0,gx=0,gy=0;
  window.addEventListener('mousemove', e=>{
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  });
  (function raf(){
    gx += (mx-gx)*0.12; gy += (my-gy)*0.12;
    glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%,-50%)`;
    requestAnimationFrame(raf);
  })();
  document.querySelectorAll('a, button, .skill-tab, .btn, .icon-btn, [data-q], .glass').forEach(el=>{
    el.addEventListener('mouseenter', ()=> dot.classList.add('hovering'));
    el.addEventListener('mouseleave', ()=> dot.classList.remove('hovering'));
  });

  /* ---------------- SCROLL PROGRESS + NAVBAR ---------------- */
  const progressBar = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');
  const navLinkEls = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pctScroll = docHeight > 0 ? (scrollTop/docHeight)*100 : 0;
    progressBar.style.width = pctScroll + '%';

    navbar.classList.toggle('scrolled', scrollTop > 40);
    backToTop.classList.toggle('show', scrollTop > 600);

    // active nav link
    let current = '';
    sections.forEach(sec=>{
      const top = sec.offsetTop - 140;
      if(scrollTop >= top) current = sec.id;
    });
    navLinkEls.forEach(link=>{
      link.classList.toggle('active', link.getAttribute('href') === '#'+current);
    });

    // timeline fill
    const timeline = document.getElementById('timeline');
    const fill = document.getElementById('timelineFill');
    if(timeline && fill){
      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh*0.8;
      const total = rect.height + start - vh*0.3;
      let progressed = start - rect.top;
      let p = Math.max(0, Math.min(1, progressed/total));
      fill.style.height = (p*100) + '%';
    }

    revealOnScroll();
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  backToTop.addEventListener('click', ()=> smoothScrollTo(0));

  /* ---------------- REVEAL ON SCROLL ---------------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  function revealOnScroll(){
    const vh = window.innerHeight;
    revealEls.forEach(el=>{
      if(el.classList.contains('in')) return;
      const top = el.getBoundingClientRect().top;
      if(top < vh*0.88) el.classList.add('in');
    });
  }
  revealOnScroll();

  /* ---------------- SMOOTH SCROLL (Lenis-style easing) ---------------- */
  function easeOutQuart(t){ return 1 - Math.pow(1-t, 4); }
  function smoothScrollTo(target){
    const startY = window.scrollY;
    const targetY = typeof target === 'number' ? target : target.getBoundingClientRect().top + startY - 84;
    const dist = targetY - startY;
    const duration = Math.min(1100, Math.max(500, Math.abs(dist)*0.6));
    let startTime = null;
    function step(ts){
      if(!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const t = Math.min(1, elapsed/duration);
      window.scrollTo(0, startY + dist*easeOutQuart(t));
      if(t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href');
      if(id.length>1){
        const el = document.querySelector(id);
        if(el){ e.preventDefault(); smoothScrollTo(el); closeMobileNav(); }
      }
    });
  });

  /* ---------------- MOBILE NAV ---------------- */
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  mobileToggle.addEventListener('click', ()=>{
    mobileToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  function closeMobileNav(){ mobileToggle.classList.remove('open'); navLinks.classList.remove('open'); }

  /* ---------------- THEME TOGGLE ---------------- */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const html = document.documentElement;
  themeToggle.addEventListener('click', ()=>{
    const isLight = html.getAttribute('data-theme') === 'light';
    html.setAttribute('data-theme', isLight ? 'dark' : 'light');
    themeIcon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  });

  /* ---------------- TYPING EFFECT ---------------- */
  const typeTarget = document.getElementById('typeTarget');
  let roleIdx = 0, charIdx = 0, deleting = false;
  function typeLoop(){
    const word = TYPED_ROLES[roleIdx];
    if(!deleting){
      charIdx++;
      typeTarget.textContent = word.slice(0, charIdx);
      if(charIdx === word.length){ deleting = true; setTimeout(typeLoop, 1500); return; }
      setTimeout(typeLoop, 75);
    } else {
      charIdx--;
      typeTarget.textContent = word.slice(0, charIdx);
      if(charIdx === 0){ deleting = false; roleIdx = (roleIdx+1)%TYPED_ROLES.length; setTimeout(typeLoop, 350); return; }
      setTimeout(typeLoop, 35);
    }
  }
  typeLoop();

  /* ---------------- COUNTERS ---------------- */
  const counters = document.querySelectorAll('.counter');
  let countersTriggered = new Set();
  function checkCounters(){
    counters.forEach(c=>{
      if(countersTriggered.has(c)) return;
      const top = c.getBoundingClientRect().top;
      if(top < window.innerHeight*0.9){
        countersTriggered.add(c);
        animateCounter(c);
      }
    });
  }
  function animateCounter(el){
    const target = parseInt(el.dataset.target, 10);
    const duration = 1400;
    let startTime = null;
    function step(ts){
      if(!startTime) startTime = ts;
      const t = Math.min(1, (ts-startTime)/duration);
      const eased = 1 - Math.pow(1-t, 3);
      el.textContent = Math.floor(eased*target);
      if(t < 1) requestAnimationFrame(step); else el.textContent = target;
    }
    requestAnimationFrame(step);
  }
  window.addEventListener('scroll', checkCounters, { passive:true });
  checkCounters();

  /* ---------------- PARTICLES (tsParticles-style canvas) ---------------- */
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resizeCanvas(){
    const hero = document.getElementById('hero');
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  function initParticles(){
    resizeCanvas();
    const count = Math.min(70, Math.floor(canvas.width/22));
    particles = Array.from({length:count}, ()=>({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      r:Math.random()*1.6+0.6,
      vx:(Math.random()-0.5)*0.25,
      vy:(Math.random()-0.5)*0.25,
      o:Math.random()*0.5+0.2
    }));
  }
  function drawParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent-rgb').trim();
    particles.forEach(p=>{
      p.x += p.vx; p.y += p.vy;
      if(p.x<0) p.x=canvas.width; if(p.x>canvas.width) p.x=0;
      if(p.y<0) p.y=canvas.height; if(p.y>canvas.height) p.y=0;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(${accent},${p.o})`;
      ctx.fill();
    });
    // connecting lines
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx = particles[i].x-particles[j].x, dy = particles[i].y-particles[j].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < 110){
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${accent},${0.08*(1-dist/110)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  initParticles();
  drawParticles();
  window.addEventListener('resize', initParticles);

  /* ---------------- RENDER SKILLS ---------------- */
  const skillGrid = document.getElementById('skillGrid');
  function renderSkills(filter){
    skillGrid.innerHTML = '';
    SKILLS.filter(s => filter==='all' || s.cat===filter).forEach((s,i)=>{
      const card = document.createElement('div');
      card.className = 'glass skill-card reveal-scale in';
      card.style.transitionDelay = (i*0.03)+'s';
      card.innerHTML = `
        <div class="skill-icon" style="color:${s.color};">${s.iconType==='img' ? `<img src="${s.icon}" style="width:32px;height:32px;">` : `<i class="${s.icon}"></i>`}</div>
        <div class="skill-name">${s.name}</div>
        <div class="skill-level">${s.level}</div>`;
      skillGrid.appendChild(card);
    });
  }
  renderSkills('all');
  document.querySelectorAll('.skill-tab[data-cat]').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      document.querySelectorAll('.skill-tab[data-cat]').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      renderSkills(tab.dataset.cat);
    });
  });

  /* ---------------- RENDER PROJECTS ---------------- */
  const projGrid = document.getElementById('projGrid');
  function renderProjects(filter){
    projGrid.innerHTML = '';
    PROJECTS.filter(p => filter==='all' || p.filters.includes(filter)).forEach((p,i)=>{
      const card = document.createElement('div');
      card.className = 'glass proj-card reveal-scale in';
      card.style.transitionDelay = (i*0.05)+'s';
      card.innerHTML = `
        <div class="proj-img">
          <div class="ph">${PROJECT_GRAPHICS[p.graphic] || `<i class="${p.icon}" style="font-size:2.4rem; color:var(--accent); opacity:.5;"></i>`}</div>
          <div class="proj-tag">${p.tag}</div>
        </div>
        <div class="proj-body">
          <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <div class="proj-title">${p.title}</div>
          </div>
          <div class="font-mono" style="color:var(--text-dimmer); font-size:.72rem;">${p.date}</div>
          <div class="proj-desc">${p.desc}</div>
          <div class="proj-stack">${p.stack.map(s=>`<span class="stack-pill">${s}</span>`).join('')}</div>
          <div class="proj-links">
            <a href="https://github.com/Dar-KnighT-ech" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
            <a href="#" onclick="return false;" style="opacity:.5; cursor:default;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>
          </div>
        </div>`;
      projGrid.appendChild(card);
    });
  }
  renderProjects('all');
  document.querySelectorAll('.skill-tab[data-filter]').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      document.querySelectorAll('.skill-tab[data-filter]').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      renderProjects(tab.dataset.filter);
    });
  });

  /* ---------------- CONTACT FORM (EmailJS — delivers to tanmay20pa@gmail.com) ---------------- */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('form-status');

  // 2) Fill these in after creating your EmailJS Service + Template (see README.md)
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const DESTINATION_EMAIL = 'tanmay20pa@gmail.com';

  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    formStatus.style.color = 'var(--accent)';
    formStatus.textContent = 'Sending...';

    const notConfigured = EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID';

    if(notConfigured || typeof emailjs === 'undefined'){
      formStatus.style.color = '#F87171';
      formStatus.textContent = 'Form not connected yet — see README.md to link EmailJS. Meanwhile, email tanmay20pa@gmail.com directly.';
      return;
    }

    // to_email is read by the EmailJS template's "To Email" field so messages land in your inbox
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm, { to_email: DESTINATION_EMAIL })
      .then(()=>{
        formStatus.style.color = '#4ADE80';
        formStatus.textContent = 'Message sent — thank you! I\'ll get back to you soon.';
        contactForm.reset();
      })
      .catch((err)=>{
        console.error('EmailJS error:', err);
        formStatus.style.color = '#F87171';
        formStatus.textContent = 'Something went wrong. Please email tanmay20pa@gmail.com directly.';
      });
  });

  /* ---------------- AI ASSISTANT ---------------- */
  const aiToggle = document.getElementById('ai-toggle');
  const aiPanel = document.getElementById('ai-panel');
  const aiBody = document.getElementById('aiBody');
  const aiIcon = document.getElementById('aiIcon');

  aiToggle.addEventListener('click', ()=>{
    const open = aiPanel.classList.toggle('open');
    aiIcon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-sparkles';
  });

  const AI_RESPONSES = {
    about: "Tanmay is a B.E. Computer Engineering graduate working as a Business Development Executive at LaunchEd Global, with hands-on experience as a Data Analyst Intern and Software Engineering Intern at Goldman Sachs & EA. He works across Python, SQL, Power BI, and full-stack web development.",
    projects: "Tanmay's featured work includes a CCTV Surveillance Platform, a Sentiment Analysis Dashboard, Customer Credit & Sales Behavior Analysis (RFM segmentation), and a Walmart Retail Sales Analysis processing 100K+ records. Scroll to the Projects section to explore each one!",
    resume: "You can download Tanmay's resume using the button in the navbar or hero section — or scroll to the Resume section to preview it inline first.",
    contact: "Reach Tanmay directly at tanmay20pa@gmail.com or +91 7620059348, based in Wardha, Maharashtra. Or just use the contact form at the bottom of this page!"
  };

  function aiAddMsg(text, who){
    const div = document.createElement('div');
    div.className = 'ai-msg ' + who;
    div.textContent = text;
    aiBody.appendChild(div);
    aiBody.scrollTop = aiBody.scrollHeight;
  }

  document.querySelectorAll('.ai-chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      aiAddMsg(chip.textContent, 'user');
      setTimeout(()=>{
        aiAddMsg(AI_RESPONSES[chip.dataset.q], 'bot');
        if(chip.dataset.q === 'projects') smoothScrollTo(document.getElementById('projects'));
        if(chip.dataset.q === 'contact') smoothScrollTo(document.getElementById('contact'));
      }, 450);
    });
  });

})();
