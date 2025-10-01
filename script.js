// =============================
// CyberSisco Animations — Final
// =============================
if (typeof gsap !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Hero Entrance
  gsap.from(".hero-text h1", { y:40, opacity:0, duration:1, ease:"power3.out" });
  gsap.from(".hero-text p", { y:30, opacity:0, duration:1, delay:0.2, ease:"power3.out" });
  gsap.from(".hero-ctas a", { y:20, opacity:0, duration:0.8, delay:0.4, stagger:0.15, ease:"power3.out" });

  // Hero Stacked Cards
  gsap.from(".hero-image.card-stack img", {
    y:60, opacity:0, duration:1,
    stagger:0.2, ease:"power3.out"
  });

  // Section Titles
  gsap.utils.toArray(".section-title").forEach(title=>{
    gsap.from(title,{
      scrollTrigger:{trigger:title,start:"top 85%"},
      y:30, opacity:0, duration:0.8, ease:"power3.out"
    });
  });

  // Cards (Products, Solutions, Projects, Activity, What We Do)
  gsap.utils.toArray(".cards").forEach(group=>{
    gsap.from(group.querySelectorAll(".card"),{
      scrollTrigger:{trigger:group,start:"top 85%"},
      y:40, opacity:0, duration:0.9, stagger:0.15, ease:"power3.out"
    });
  });

  // Stats (Did You Know)
  gsap.utils.toArray(".stat-item").forEach((stat,i)=>{
    gsap.from(stat,{
      scrollTrigger:{trigger:stat,start:"top 90%"},
      y:30, opacity:0, duration:0.7, delay:i*0.1, ease:"power2.out"
    });
  });
}

// Hover effects
document.querySelectorAll(".btn").forEach(btn=>{
  btn.addEventListener("mouseenter",()=>{ 
    btn.style.transform="translateY(-3px) scale(1.02)"; 
    btn.style.boxShadow="0 12px 30px rgba(12,166,120,0.25)"; 
  });
  btn.addEventListener("mouseleave",()=>{ 
    btn.style.transform="translateY(0) scale(1)"; 
    btn.style.boxShadow=""; 
  });
});

document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("mouseenter",()=>{ 
    card.style.transform="translateY(-6px) scale(1.02)"; 
    card.style.boxShadow="0 20px 50px rgba(0,0,0,0.08)"; 
  });
  card.addEventListener("mouseleave",()=>{ 
    card.style.transform="translateY(0) scale(1)"; 
    card.style.boxShadow=""; 
  });
});










