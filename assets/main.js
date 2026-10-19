(() => {
  'use strict';
  const cfg = window.AMS_SITE || {};
  const $ = (s, scope=document) => scope.querySelector(s);
  const $$ = (s, scope=document) => [...scope.querySelectorAll(s)];
  $$('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
  const details = {
    'data-legal-name': cfg.legalBusinessName || 'Legal business name to be added',
    'data-legal-email': cfg.email || 'Business email to be added',
    'data-legal-address': cfg.businessAddress || 'Business address to be added where required',
    'data-legal-jurisdiction': cfg.jurisdiction || 'Applicable jurisdiction to be confirmed',
    'data-updated': cfg.lastUpdated || '19 October 2026'
  };
  for (const [key, val] of Object.entries(details)) $$('[' + key + ']').forEach(el => el.textContent = val);
  const navButton = $('.mobile-toggle'); const nav = $('#primary-nav');
  if (navButton && nav) {
    const setNav = open => {nav.classList.toggle('is-open',open);navButton.setAttribute('aria-expanded',String(open));navButton.setAttribute('aria-label',open?'Close menu':'Open menu');};
    navButton.addEventListener('click',()=>setNav(navButton.getAttribute('aria-expanded')!=='true'));
    $$('a',nav).forEach(a=>a.addEventListener('click',()=>setNav(false)));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')setNav(false)});
    document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!navButton.contains(e.target))setNav(false)});
  }
  const choice = $('#service-choice');
  $$('[data-inquiry-service]').forEach(a=>a.addEventListener('click',()=>{if(choice)choice.value=a.dataset.inquiryService;}));
  const channel = $('#direct-contact'); const channelText = $('#direct-contact-label');
  const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.email||'');
  const digits = String(cfg.whatsapp||'').replace(/\D/g,'');
  const waOK = digits.length>=8&&digits.length<=15;
  if (channel&&channelText&&(emailOK||waOK)) {channel.hidden=false;channelText.textContent=emailOK?'Contact: '+cfg.email:'WhatsApp enquiries available';}
  const form = $('#inquiry-form');if(!form)return;
  const result=$('#inquiry-result');const output=$('#inquiry-output');const emailLink=$('#send-email');const waLink=$('#send-whatsapp');const copyStatus=$('#copy-status');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    // Browser-native validation is intentionally triggered only on user action.
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const name=String(data.get('name')||'').trim();const reply=String(data.get('reply')||'').trim();const service=String(data.get('service')||'').trim();const message=String(data.get('message')||'').trim();
    if(!name||!reply||!service||!message)return;
    const text=`Hello Action My Service,\n\nI'm interested in: ${service}\n\nName: ${name}\nContact: ${reply}\n\nWhat I'm looking for:\n${message}\n\nPlease let me know the scope, current availability, price and important terms before any purchase.\n\nThank you.`;
    output.value=text;result.hidden=false;copyStatus.textContent='';
    if(emailOK){emailLink.hidden=false;emailLink.href='mailto:'+encodeURIComponent(cfg.email)+'?subject='+encodeURIComponent('Action My Service inquiry: '+service)+'&body='+encodeURIComponent(text);}else{emailLink.hidden=true;emailLink.removeAttribute('href');}
    if(waOK){waLink.hidden=false;waLink.href='https://wa.me/'+digits+'?text='+encodeURIComponent(text);}else{waLink.hidden=true;waLink.removeAttribute('href');}
    result.focus({preventScroll:true});result.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
  $('#copy-inquiry')?.addEventListener('click',async()=>{
    try{
      if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(output.value);copyStatus.textContent='Copied. You can now paste your message.';}
      else{output.focus();output.select();copyStatus.textContent='Message selected — use your device’s Copy option.';}
    }catch(err){output.focus();output.select();copyStatus.textContent='Select and copy your message manually.';}
  });
})();
