/* =========================
   HOA – Sound Effects (SFX)
   isolated & optional
========================= */

(() => {
  "use strict";

  const SFX_KEY = "hoa_sfx_on_v1";
  let SFX_ON = (localStorage.getItem(SFX_KEY) ?? "1") === "1";

  const sfx = {
    click: new Audio("click.mp3"),
    slide: new Audio("slide.mp3"),
  };

  // تهيئة الصوت بعد أول تفاعل (حل منع autoplay)
  function primeSfxOnce(){
    const prime = () => {
      try{
        Object.values(sfx).forEach(a=>{
          a.volume = 0.3;
          a.muted = true;
          a.play().then(()=>{
            a.pause();
            a.currentTime = 0;
          }).catch(()=>{});
          a.muted = false;
        });
      }catch{}
      window.removeEventListener("pointerdown", prime, true);
      window.removeEventListener("keydown", prime, true);
    };
    window.addEventListener("pointerdown", prime, true);
    window.addEventListener("keydown", prime, true);
  }

  function playSfx(name){
    if(!SFX_ON) return;
    const a = sfx[name];
    if(!a) return;
    try{
      a.currentTime = 0;
      a.play().catch(()=>{});
    }catch{}
  }

  // زر تشغيل / إيقاف
  function initSfxUI(){
    const btn = document.getElementById("sfxBtn");
    if(!btn) return;

    const apply = () => {
      btn.textContent = SFX_ON ? "🔊 SFX" : "🔇 SFX";
      btn.setAttribute("aria-pressed", SFX_ON ? "true" : "false");
    };

    apply();
    btn.addEventListener("click", ()=>{
      SFX_ON = !SFX_ON;
      localStorage.setItem(SFX_KEY, SFX_ON ? "1" : "0");
      apply();
      playSfx("click");
    });
  }

  // إتاحة دوال عامة للملف الرئيسي
  window.HOA_SFX = {
    play: playSfx,
    init: () => {
      primeSfxOnce();
      initSfxUI();
    }
  };

})();
