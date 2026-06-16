<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>UrbanDruid | Premium Streetwear</title>
<meta name="description" content="Premium heavyweight streetwear for deep thinkers and quiet rebels. Sacred geometry, esoteric iconography and anti-establishment satire on Comfort Colors 1717.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,200;0,300;0,400;1,200;1,300&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0D0D0D;
  --bg2:#141414;
  --bg3:#1A1A1A;
  --tx:#F5F0E8;
  --muted:#A89F91;
  --gold:#C8A96E;
  --forest:#1E3A2F;
  --border:#252525;
  --serif:'Cormorant Garamond',Georgia,serif;
  --sans:'DM Sans',system-ui,sans-serif;
  --mono:'Space Mono',monospace;
  --ease:.3s ease;
}
html{scroll-behavior:smooth;background:var(--bg)}
body{background:var(--bg);color:var(--tx);font-family:var(--sans);font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}

/* ── ANNOUNCEMENT ── */
.ann{background:var(--gold);color:var(--bg);text-align:center;padding:.55rem 1rem;font-family:var(--mono);font-size:.65rem;letter-spacing:.35em;text-transform:uppercase;font-weight:700}

/* ── HEADER ── */
header{position:sticky;top:0;z-index:90;background:rgba(13,13,13,.96);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:1.1rem 0}
.hdr{max-width:1400px;margin:0 auto;padding:0 2rem;display:flex;align-items:center;justify-content:space-between;gap:2rem}
.logo{font-family:var(--serif);font-size:1.4rem;font-weight:300;letter-spacing:.3em;text-transform:uppercase;white-space:nowrap;color:var(--tx)}
.logo span{color:var(--gold)}
nav ul{display:flex;gap:2.5rem;list-style:none}
nav a{font-family:var(--mono);font-size:.62rem;letter-spacing:.3em;text-transform:uppercase;color:var(--muted);transition:color var(--ease);padding-bottom:2px;border-bottom:1px solid transparent}
nav a:hover{color:var(--gold);border-bottom-color:var(--gold)}
.hdr-right{display:flex;align-items:center;gap:1.5rem}
.cart-btn{background:none;border:none;color:var(--tx);cursor:pointer;padding:.3rem;display:flex;align-items:center;gap:.5rem;font-family:var(--mono);font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;transition:color var(--ease)}
.cart-btn:hover{color:var(--gold)}
.cart-count{background:var(--gold);color:var(--bg);font-size:.55rem;font-weight:700;width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center}
.ham{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px}
.ham span{display:block;width:22px;height:1px;background:var(--tx);transition:var(--ease)}

/* ── MOBILE NAV ── */
.mob-nav{display:none;position:fixed;inset:0;background:var(--bg);z-index:200;padding:2rem;flex-direction:column;gap:1.5rem;overflow-y:auto}
.mob-nav.open{display:flex}
.mob-close{align-self:flex-end;background:none;border:none;color:var(--tx);font-size:1.5rem;cursor:pointer;margin-bottom:1rem}
.mob-nav a{font-family:var(--serif);font-size:2.2rem;font-weight:200;letter-spacing:.15em;text-transform:uppercase;color:var(--tx);display:block;padding:.5rem 0;border-bottom:1px solid var(--border)}
.mob-nav a:hover{color:var(--gold)}

/* ── BUTTONS ── */
.btn{display:inline-flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:.65rem;letter-spacing:.3em;text-transform:uppercase;padding:.9rem 2rem;border:1px solid transparent;cursor:pointer;transition:all var(--ease);text-decoration:none;white-space:nowrap}
.btn-gold{background:var(--gold);color:var(--bg);border-color:var(--gold)}
.btn-gold:hover{background:transparent;color:var(--gold)}
.btn-outline{background:transparent;color:var(--gold);border-color:var(--gold)}
.btn-outline:hover{background:var(--gold);color:var(--bg)}
.btn-ghost{background:transparent;color:var(--tx);border-color:var(--border)}
.btn-ghost:hover{border-color:var(--gold);color:var(--gold)}
.btn-full{width:100%;justify-content:center}

/* ── LABEL / EYEBROW ── */
.lbl{font-family:var(--mono);font-size:.62rem;letter-spacing:.4em;text-transform:uppercase;color:var(--gold);display:block}

/* ── HERO ── */
.hero{min-height:92vh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;background:var(--bg)}
.hero-glow{position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 65% 45%,rgba(42,74,62,.18) 0%,transparent 70%),radial-gradient(ellipse 40% 40% at 30% 75%,rgba(200,169,110,.07) 0%,transparent 60%);pointer-events:none}
.hero-inner{position:relative;z-index:2;text-align:center;padding:4rem 2rem;max-width:1000px}
.hero-eye{font-family:var(--mono);font-size:.62rem;letter-spacing:.55em;text-transform:uppercase;color:var(--gold);margin-bottom:2rem;opacity:.9}
.hero-title{font-family:var(--serif);font-size:clamp(4.5rem,13vw,11rem);font-weight:200;letter-spacing:.12em;line-height:.9;margin-bottom:2.5rem;color:var(--tx);text-transform:uppercase}
.hero-title em{font-style:normal;color:var(--gold)}
.hero-sub{font-family:var(--sans);font-size:clamp(.85rem,1.5vw,1rem);color:var(--muted);letter-spacing:.04em;margin:0 auto 3rem;max-width:48ch;line-height:1.85}
.hero-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.hero-scroll{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);font-family:var(--mono);font-size:.55rem;letter-spacing:.4em;text-transform:uppercase;color:var(--muted);display:flex;flex-direction:column;align-items:center;gap:.75rem;animation:bob 2.5s ease-in-out infinite}
.hero-scroll::after{content:'';width:1px;height:48px;background:linear-gradient(to bottom,var(--gold),transparent)}
@keyframes bob{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(7px)}}

/* ── SECTION ── */
.section{padding:6rem 0}
.section-tight{padding:4rem 0}
.wrap{max-width:1400px;margin:0 auto;padding:0 2rem}
.section-hd{text-align:center;margin-bottom:4rem}
.section-hd h2{font-family:var(--serif);font-size:clamp(1.8rem,4vw,3.2rem);font-weight:300;letter-spacing:.2em;text-transform:uppercase;color:var(--tx);margin:.75rem 0}
.section-hd p{color:var(--muted);font-size:.9rem;max-width:50ch;margin:0 auto;line-height:1.8}

/* ── COLLECTIONS SPLIT ── */
.collections{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:var(--border)}
.col-card{position:relative;overflow:hidden;aspect-ratio:4/5;background:var(--bg3);display:block;cursor:pointer}
.col-card-bg{position:absolute;inset:0;transition:transform .7s ease}
.col-card:hover .col-card-bg{transform:scale(1.05)}
.col-card-grad{position:absolute;inset:0;background:linear-gradient(to top,rgba(13,13,13,.95) 0%,rgba(13,13,13,.3) 50%,transparent 100%)}
.col-card-body{position:absolute;bottom:0;left:0;right:0;padding:2.5rem}
.col-card-num{font-family:var(--mono);font-size:.58rem;letter-spacing:.4em;text-transform:uppercase;color:var(--gold);margin-bottom:.75rem;display:block}
.col-card-title{font-family:var(--serif);font-size:clamp(1.8rem,3vw,2.8rem);font-weight:300;letter-spacing:.1em;text-transform:uppercase;color:var(--tx);line-height:1;margin-bottom:.75rem}
.col-card-desc{font-size:.78rem;color:var(--muted);line-height:1.7;max-width:28ch;margin-bottom:1.5rem}
/* placeholder bg colours */
.col-bg-a{background:linear-gradient(135deg,#0f1a14,#0d0d0d)}
.col-bg-b{background:linear-gradient(135deg,#1a120d,#0d0d0d)}

/* ── PRODUCT GRID ── */
.grid-3{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem}
.prod-card{background:var(--bg3);border:1px solid var(--border);overflow:hidden;transition:border-color var(--ease),transform var(--ease);display:block;cursor:pointer}
.prod-card:hover{border-color:var(--gold);transform:translateY(-4px)}
.prod-img{aspect-ratio:1;overflow:hidden;background:#111;position:relative}
.prod-img-inner{width:100%;height:100%;object-fit:cover;transition:transform .55s ease}
.prod-card:hover .prod-img-inner{transform:scale(1.07)}
.prod-badge{position:absolute;top:1rem;left:1rem;background:var(--gold);color:var(--bg);font-family:var(--mono);font-size:.55rem;letter-spacing:.2em;text-transform:uppercase;padding:.3rem .65rem;font-weight:700}
.prod-body{padding:1.25rem}
.prod-col-tag{font-family:var(--mono);font-size:.58rem;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);margin-bottom:.35rem}
.prod-name{font-family:var(--serif);font-size:1.05rem;font-weight:400;letter-spacing:.05em;text-transform:uppercase;color:var(--tx);line-height:1.3;margin-bottom:.75rem}
.prod-foot{display:flex;align-items:center;justify-content:space-between}
.prod-price{font-family:var(--mono);font-size:.88rem;color:var(--tx)}
.swatches{display:flex;gap:4px}
.sw{width:11px;height:11px;border-radius:50%;border:1px solid var(--border)}
.sw-w{background:#f5f0e8}.sw-b{background:#222;border-color:#444}.sw-s{background:#d4c5a9}

/* ── FEATURED PRODUCT ── */
.featured{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.feat-img-wrap{position:relative;aspect-ratio:4/5;background:var(--bg3);overflow:hidden}
.feat-img{width:100%;height:100%;object-fit:cover}
.feat-tag{position:absolute;top:1.5rem;right:1.5rem;writing-mode:vertical-rl;font-family:var(--mono);font-size:.55rem;letter-spacing:.35em;text-transform:uppercase;color:var(--gold)}
.feat-content{}
.feat-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3.8rem);font-weight:200;letter-spacing:.1em;text-transform:uppercase;color:var(--tx);line-height:1;margin:.75rem 0 1.5rem}
.feat-desc{color:var(--muted);font-size:.88rem;line-height:1.9;margin-bottom:2rem}
.feat-price{font-family:var(--serif);font-size:2.2rem;font-weight:200;color:var(--tx);display:block;margin-bottom:2rem}
.feat-meta{display:flex;gap:2rem;flex-wrap:wrap;margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid var(--border)}
.feat-meta-item{font-family:var(--mono);font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted)}
.feat-meta-item strong{display:block;color:var(--tx);margin-bottom:.2rem;font-size:.65rem}
.sizes{display:flex;gap:.5rem;flex-wrap:wrap;margin:1rem 0 2rem}
.size-btn{width:46px;height:46px;border:1px solid var(--border);background:transparent;color:var(--muted);font-family:var(--mono);font-size:.62rem;letter-spacing:.05em;cursor:pointer;transition:all var(--ease);text-transform:uppercase}
.size-btn:hover,.size-btn.on{border-color:var(--gold);color:var(--gold);background:rgba(200,169,110,.08)}
.feat-atc{display:flex;flex-direction:column;gap:.75rem}
.guarantee{display:flex;align-items:center;gap:.75rem;font-family:var(--mono);font-size:.58rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-top:1.25rem}

/* ── MANIFESTO ── */
.manifesto{text-align:center;padding:8rem 2rem;position:relative;background:var(--bg)}
.manifesto::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 50%,rgba(30,58,47,.14) 0%,transparent 70%);pointer-events:none}
.manifesto-line{width:1px;height:64px;background:linear-gradient(to bottom,transparent,var(--gold),transparent);margin:2.5rem auto}
.manifesto-quote{font-family:var(--serif);font-size:clamp(1.8rem,5vw,4.5rem);font-weight:200;font-style:italic;letter-spacing:.06em;line-height:1.25;color:var(--tx);max-width:22ch;margin:0 auto 2rem}
.manifesto-attr{font-family:var(--mono);font-size:.62rem;letter-spacing:.45em;text-transform:uppercase;color:var(--gold)}

/* ── BRAND STRIP ── */
.brand-strip{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.brand-item{padding:3rem 2.5rem;border-right:1px solid var(--border);text-align:center}
.brand-item:last-child{border-right:none}
.brand-item-title{font-family:var(--serif);font-size:1.3rem;font-weight:300;letter-spacing:.15em;text-transform:uppercase;color:var(--gold);margin-bottom:.75rem}
.brand-item-text{font-size:.82rem;color:var(--muted);line-height:1.75}

/* ── INNER CIRCLE ── */
.inner-circle{background:var(--bg2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:6rem 2rem;text-align:center}
.ic-symbol{width:52px;height:52px;border:1px solid var(--gold);border-radius:50%;margin:0 auto 2.5rem;display:flex;align-items:center;justify-content:center;position:relative}
.ic-symbol::after{content:'';width:22px;height:22px;border:1px solid var(--gold);border-radius:50%;position:absolute}
.ic-title{font-family:var(--serif);font-size:clamp(1.6rem,4vw,3.2rem);font-weight:300;letter-spacing:.2em;text-transform:uppercase;color:var(--tx);margin-bottom:1rem}
.ic-desc{color:var(--muted);font-size:.88rem;max-width:44ch;margin:0 auto 2.5rem;line-height:1.85}
.email-form{display:flex;max-width:460px;margin:0 auto;border:1px solid var(--border);transition:border-color var(--ease)}
.email-form:focus-within{border-color:var(--gold)}
.email-input{flex:1;background:transparent;border:none;padding:1rem 1.25rem;color:var(--tx);font-family:var(--sans);font-size:.85rem;outline:none}
.email-input::placeholder{color:var(--muted)}
.email-submit{background:var(--gold);border:none;color:var(--bg);padding:0 1.5rem;font-family:var(--mono);font-size:.62rem;letter-spacing:.3em;text-transform:uppercase;cursor:pointer;font-weight:700;transition:background var(--ease);white-space:nowrap}
.email-submit:hover{background:#d4b87a}
.ic-disclaimer{margin-top:1rem;font-size:.65rem;color:var(--muted);font-family:var(--mono);letter-spacing:.1em}

/* ── ABOUT PREVIEW ── */
.about-split{display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center}
.about-crack{font-family:var(--serif);font-size:clamp(2rem,5vw,4rem);font-weight:200;font-style:italic;color:var(--gold);line-height:1.15;margin-bottom:2rem}
.about-body p{color:var(--muted);font-size:.9rem;line-height:1.9;margin-bottom:1.25rem}
.about-visual{position:relative;aspect-ratio:3/4;background:var(--bg3);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;overflow:hidden}
.about-sigil{width:180px;height:180px;opacity:.35}

/* ── FOOTER ── */
footer{background:var(--bg2);border-top:1px solid var(--border);padding:5rem 0 2rem}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:4rem}
.footer-brand{font-family:var(--serif);font-size:1.3rem;font-weight:300;letter-spacing:.3em;text-transform:uppercase;color:var(--tx);margin-bottom:.85rem}
.footer-tagline{font-size:.82rem;color:var(--muted);line-height:1.7;max-width:28ch;margin-bottom:1.5rem}
.footer-socials{display:flex;gap:.75rem;flex-wrap:wrap}
.footer-soc{font-family:var(--mono);font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);border:1px solid var(--border);padding:.4rem .75rem;transition:all var(--ease)}
.footer-soc:hover{border-color:var(--gold);color:var(--gold)}
.footer-col-title{font-family:var(--mono);font-size:.6rem;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);margin-bottom:1.25rem;display:block}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:.65rem}
.footer-links a{font-size:.82rem;color:var(--muted);transition:color var(--ease)}
.footer-links a:hover{color:var(--tx)}
.footer-bottom{border-top:1px solid var(--border);padding-top:2rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
.footer-copy{font-family:var(--mono);font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted)}
.footer-legal{display:flex;gap:1.5rem}
.footer-legal a{font-family:var(--mono);font-size:.58rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted)}
.footer-legal a:hover{color:var(--gold)}

/* ── CART DRAWER ── */
.cart-overlay{position:fixed;inset:0;background:rgba(0,0,0,.72);z-index:150;opacity:0;pointer-events:none;transition:opacity var(--ease)}
.cart-overlay.open{opacity:1;pointer-events:all}
.cart-drawer{position:fixed;top:0;right:-100%;width:420px;max-width:100vw;height:100vh;background:var(--bg2);border-left:1px solid var(--border);z-index:160;transition:right .4s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:column}
.cart-drawer.open{right:0}
.cart-hdr{display:flex;align-items:center;justify-content:space-between;padding:1.5rem 2rem;border-bottom:1px solid var(--border)}
.cart-hdr-title{font-family:var(--serif);font-size:1.2rem;font-weight:300;letter-spacing:.2em;text-transform:uppercase}
.cart-hdr-close{background:none;border:none;color:var(--tx);cursor:pointer;font-size:1.3rem;padding:.25rem;transition:color var(--ease)}
.cart-hdr-close:hover{color:var(--gold)}
.cart-body{flex:1;overflow-y:auto;padding:1.5rem 2rem}
.cart-empty{text-align:center;padding:4rem 0;font-family:var(--mono);font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted)}
.cart-empty a{color:var(--gold);display:block;margin-top:1.5rem}
.cart-ftr{padding:1.5rem 2rem;border-top:1px solid var(--border)}
.cart-subtotal{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:1.25rem}
.cart-sub-label{font-family:var(--mono);font-size:.65rem;letter-spacing:.25em;text-transform:uppercase;color:var(--muted)}
.cart-sub-amount{font-family:var(--serif);font-size:1.6rem;font-weight:200;color:var(--tx)}
.cart-note{font-family:var(--mono);font-size:.6rem;letter-spacing:.1em;color:var(--muted);margin-bottom:1.25rem}
.cart-btns{display:flex;flex-direction:column;gap:.6rem}

/* ── REVEAL ANIMATIONS ── */
.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
.reveal.on{opacity:1;transform:translateY(0)}
.d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}

/* ── DIVIDER ── */
hr.sec{border:none;border-top:1px solid var(--border);margin:0}

/* ── RESPONSIVE ── */
@media(max-width:1024px){
  .featured{grid-template-columns:1fr;gap:2.5rem}
  .about-split{grid-template-columns:1fr;gap:2.5rem}
  .footer-grid{grid-template-columns:1fr 1fr;gap:2rem}
}
@media(max-width:768px){
  nav{display:none}
  .ham{display:flex}
  .collections{grid-template-columns:1fr}
  .col-card{aspect-ratio:3/2}
  .brand-strip{grid-template-columns:1fr}
  .brand-item{border-right:none;border-bottom:1px solid var(--border)}
  .brand-item:last-child{border-bottom:none}
  .footer-grid{grid-template-columns:1fr}
  .footer-bottom{flex-direction:column;text-align:center}
  .section{padding:4rem 0}
  .hdr{padding:0 1.25rem}
  .wrap{padding:0 1.25rem}
}
@media(max-width:500px){
  .hero-title{font-size:clamp(3.5rem,18vw,6rem)}
  .feat-meta{gap:1.25rem}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
</style>
</head>
<body>

<!-- ANNOUNCEMENT -->
<div class="ann">FREE UK SHIPPING ON ORDERS OVER £60 &nbsp;·&nbsp; WORLDWIDE DELIVERY &nbsp;·&nbsp; MADE TO ORDER</div>

<!-- HEADER -->
<header>
  <div class="hdr">
    <button class="ham" id="ham" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <a href="#" class="logo">Urban<span>Druid</span></a>
    <nav>
      <ul>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#dissent">Dissent</a></li>
        <li><a href="#signal">Signal</a></li>
        <li><a href="#about">The Brand</a></li>
        <li><a href="#drops">Drops</a></li>
      </ul>
    </nav>
    <div class="hdr-right">
      <button class="cart-btn" id="cartBtn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <span class="cart-count" id="cartCount">0</span>
      </button>
    </div>
  </div>
</header>

<!-- MOBILE NAV -->
<nav class="mob-nav" id="mobNav">
  <button class="mob-close" id="mobClose">✕</button>
  <a href="#shop" class="mob-link">Shop</a>
  <a href="#dissent" class="mob-link">The Dissent Collection</a>
  <a href="#signal" class="mob-link">The Signal Collection</a>
  <a href="#about" class="mob-link">The Brand</a>
  <a href="#drops" class="mob-link">Drops</a>
  <div style="margin-top:auto;display:flex;gap:.75rem;flex-wrap:wrap;padding-top:2rem">
    <a href="https://www.instagram.com/urbandruid.art/" class="footer-soc" target="_blank">Instagram</a>
    <a href="https://www.tiktok.com/@urbandruid.art" class="footer-soc" target="_blank">TikTok</a>
    <a href="https://uk.pinterest.com/UrbanDruidArt/" class="footer-soc" target="_blank">Pinterest</a>
  </div>
</nav>

<!-- CART OVERLAY + DRAWER -->
<div class="cart-overlay" id="cartOverlay"></div>
<div class="cart-drawer" id="cartDrawer">
  <div class="cart-hdr">
    <span class="cart-hdr-title">Your Cart</span>
    <button class="cart-hdr-close" id="cartClose">✕</button>
  </div>
  <div class="cart-body">
    <div class="cart-empty">
      Your cart is empty.<br>
      <a href="#shop">Browse the drop →</a>
    </div>
  </div>
  <div class="cart-ftr">
    <div class="cart-subtotal">
      <span class="cart-sub-label">Subtotal</span>
      <span class="cart-sub-amount">£0.00</span>
    </div>
    <p class="cart-note">Shipping calculated at checkout</p>
    <div class="cart-btns">
      <a href="/checkout" class="btn btn-gold btn-full">Checkout</a>
      <a href="/cart" class="btn btn-ghost btn-full">View Cart</a>
    </div>
  </div>
</div>

<!-- ═══ HERO ═══ -->
<section class="hero">
  <div class="hero-glow"></div>
  <div class="hero-inner">
    <span class="hero-eye reveal">Premium Heavyweight Streetwear</span>
    <h1 class="hero-title reveal d1">Urban<em>Druid</em></h1>
    <p class="hero-sub reveal d2">Premium streetwear for people who read the fine print on civilisation.</p>
    <div class="hero-btns reveal d3">
      <a href="#shop" class="btn btn-gold">Shop the Drop</a>
      <a href="#about" class="btn btn-outline">The Brand</a>
    </div>
  </div>
  <div class="hero-scroll">Scroll</div>
</section>

<!-- ═══ COLLECTIONS SPLIT ═══ -->
<section id="shop" class="section-tight" style="background:var(--bg)">
  <div class="collections reveal">

    <a href="#dissent" id="dissent" class="col-card">
      <div class="col-card-bg col-bg-a">
        <!-- Replace with: <img src="YOUR_DISSENT_IMAGE.jpg" style="width:100%;height:100%;object-fit:cover;filter:brightness(.55)"> -->
        <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity:.12">
            <circle cx="60" cy="60" r="58" stroke="#C8A96E" stroke-width="1"/>
            <line x1="60" y1="2" x2="60" y2="118" stroke="#C8A96E" stroke-width="1"/>
            <line x1="60" y1="60" x2="12" y2="105" stroke="#C8A96E" stroke-width="1"/>
            <line x1="60" y1="60" x2="108" y2="105" stroke="#C8A96E" stroke-width="1"/>
          </svg>
        </div>
      </div>
      <div class="col-card-grad"></div>
      <div class="col-card-body">
        <span class="col-card-num">Collection 01</span>
        <h2 class="col-card-title">The Dissent<br>Collection</h2>
        <p class="col-card-desc">Anti-establishment. Anti-war. Anti-everything-they-told-you-was-normal.</p>
        <span class="btn btn-outline">Explore →</span>
      </div>
    </a>

    <a href="#signal" id="signal" class="col-card">
      <div class="col-card-bg col-bg-b">
        <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity:.12">
            <circle cx="70" cy="70" r="60" stroke="#C8A96E" stroke-width="1"/>
            <circle cx="70" cy="70" r="40" stroke="#C8A96E" stroke-width="1"/>
            <circle cx="70" cy="70" r="20" stroke="#C8A96E" stroke-width="1"/>
            <circle cx="70" cy="70" r="5" fill="#C8A96E"/>
            <line x1="70" y1="10" x2="70" y2="130" stroke="#C8A96E" stroke-width=".5"/>
            <line x1="10" y1="70" x2="130" y2="70" stroke="#C8A96E" stroke-width=".5"/>
          </svg>
        </div>
      </div>
      <div class="col-card-grad"></div>
      <div class="col-card-body">
        <span class="col-card-num">Collection 02</span>
        <h2 class="col-card-title">The Signal<br>Collection</h2>
        <p class="col-card-desc">Sacred geometry. Esoteric iconography. Ancient knowledge in modern fabric.</p>
        <span class="btn btn-outline">Explore →</span>
      </div>
    </a>

  </div>
</section>

<!-- ═══ FEATURED PRODUCT ═══ -->
<section class="section" style="background:var(--bg2)">
  <div class="wrap">
    <div class="featured reveal">

      <div class="feat-img-wrap">
        <!-- Replace with: <img class="feat-img" src="YOUR_PRODUCT_IMAGE.jpg" alt="Scan This Tee"> -->
        <div class="feat-img" style="display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;background:var(--bg3)">
          <svg width="160" height="200" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity:.25">
            <rect x="10" y="60" width="4" height="80" fill="#F5F0E8"/>
            <rect x="18" y="60" width="8" height="80" fill="#F5F0E8"/>
            <rect x="30" y="60" width="2" height="80" fill="#F5F0E8"/>
            <rect x="36" y="60" width="6" height="80" fill="#F5F0E8"/>
            <rect x="46" y="60" width="3" height="80" fill="#F5F0E8"/>
            <rect x="52" y="40" width="4" height="100" fill="#F5F0E8"/>
            <rect x="60" y="60" width="8" height="80" fill="#F5F0E8"/>
            <rect x="72" y="60" width="2" height="80" fill="#F5F0E8"/>
            <rect x="78" y="60" width="6" height="80" fill="#F5F0E8"/>
            <rect x="88" y="60" width="4" height="80" fill="#F5F0E8"/>
            <rect x="96" y="60" width="8" height="80" fill="#F5F0E8"/>
            <rect x="108" y="60" width="2" height="80" fill="#F5F0E8"/>
            <rect x="114" y="60" width="6" height="80" fill="#F5F0E8"/>
            <rect x="124" y="60" width="3" height="80" fill="#F5F0E8"/>
            <rect x="131" y="60" width="5" height="80" fill="#F5F0E8"/>
            <rect x="140" y="60" width="3" height="80" fill="#F5F0E8"/>
            <rect x="52" y="140" width="14" height="14" fill="#F5F0E8" transform="rotate(45 52 140)"/>
            <text x="80" y="185" fill="#C8A96E" font-family="Space Mono" font-size="11" letter-spacing="6" text-anchor="middle">SCAN THIS</text>
          </svg>
          <p style="font-family:var(--mono);font-size:.6rem;letter-spacing:.3em;text-transform:uppercase;color:var(--muted)">Add product image</p>
        </div>
        <span class="feat-tag">New Drop</span>
      </div>

      <div class="feat-content">
        <span class="lbl">Just Dropped</span>
        <h2 class="feat-title">Scan This</h2>
        <p class="feat-desc">They scan everything. Your commute. Your purchases. Your search history. Your face.<br><br>This is the only barcode that scans back.</p>
        <span class="feat-price">£35.00</span>
        <div class="feat-meta">
          <div class="feat-meta-item"><strong>Blank</strong>Comfort Colors 1717</div>
          <div class="feat-meta-item"><strong>Weight</strong>6.1oz Heavyweight</div>
          <div class="feat-meta-item"><strong>Fit</strong>Relaxed Unisex</div>
        </div>
        <span class="lbl" style="margin-bottom:.75rem">Select Size</span>
        <div class="sizes">
          <button class="size-btn">S</button>
          <button class="size-btn on">M</button>
          <button class="size-btn">L</button>
          <button class="size-btn">XL</button>
          <button class="size-btn">2XL</button>
          <button class="size-btn">3XL</button>
        </div>
        <div class="feat-atc">
          <button class="btn btn-gold btn-full" onclick="addToCart()">Add to Cart — £35.00</button>
          <a href="#" class="btn btn-ghost btn-full">View Full Details</a>
        </div>
        <div class="guarantee" style="margin-top:1.5rem">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Made to order &nbsp;·&nbsp; Worldwide shipping &nbsp;·&nbsp; 14-day returns
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ MANIFESTO ═══ -->
<section class="manifesto">
  <div class="manifesto-line"></div>
  <blockquote class="manifesto-quote reveal">"The concrete remembers the forest.<br>The forest never forgot the concrete."</blockquote>
  <cite class="manifesto-attr">— UrbanDruid</cite>
  <div class="manifesto-line"></div>
</section>

<!-- ═══ PRODUCT GRID ═══ -->
<section class="section" style="background:var(--bg2)">
  <div class="wrap">
    <div class="section-hd reveal">
      <span class="lbl">The Capsule</span>
      <h2>Latest Drops</h2>
      <p>100 heavyweight designs. A capsule, not a catalogue. Every piece earns its place.</p>
    </div>

    <div class="grid-3">

      <a href="#" class="prod-card reveal">
        <div class="prod-img">
          <div class="prod-img-inner" style="background:var(--bg3);display:flex;align-items:center;justify-content:center">
            <span style="font-family:var(--mono);font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted)">Add Image</span>
          </div>
          <span class="prod-badge">New</span>
        </div>
        <div class="prod-body">
          <div class="prod-col-tag">The Dissent Collection</div>
          <div class="prod-name">Scan This</div>
          <div class="prod-foot">
            <span class="prod-price">£35.00</span>
            <div class="swatches"><span class="sw sw-w" title="White"></span><span class="sw sw-b" title="Black"></span></div>
          </div>
        </div>
      </a>

      <a href="#" class="prod-card reveal d1">
        <div class="prod-img">
          <div class="prod-img-inner" style="background:var(--bg3);display:flex;align-items:center;justify-content:center">
            <span style="font-family:var(--mono);font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted)">Add Image</span>
          </div>
          <span class="prod-badge">New</span>
        </div>
        <div class="prod-body">
          <div class="prod-col-tag">The Signal Collection</div>
          <div class="prod-name">Labyrinth Mind</div>
          <div class="prod-foot">
            <span class="prod-price">£38.00</span>
            <div class="swatches"><span class="sw sw-b" title="Black"></span></div>
          </div>
        </div>
      </a>

      <a href="#" class="prod-card reveal d2">
        <div class="prod-img">
          <div class="prod-img-inner" style="background:var(--bg3);display:flex;align-items:center;justify-content:center">
            <span style="font-family:var(--mono);font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted)">Add Image</span>
          </div>
          <span class="prod-badge">New</span>
        </div>
        <div class="prod-body">
          <div class="prod-col-tag">The Signal Collection</div>
          <div class="prod-name">Myco Mystics Hoodie</div>
          <div class="prod-foot">
            <span class="prod-price">£72.00</span>
            <div class="swatches"><span class="sw sw-b" title="Black"></span></div>
          </div>
        </div>
      </a>

    </div>

    <div style="text-align:center;margin-top:3rem" class="reveal">
      <a href="#" class="btn btn-outline">View All Products</a>
    </div>
  </div>
</section>

<!-- ═══ BRAND STRIP ═══ -->
<section class="section-tight" style="background:var(--bg)">
  <div class="wrap">
    <div class="brand-strip reveal">
      <div class="brand-item">
        <div class="brand-item-title">The Product</div>
        <p class="brand-item-text">Comfort Colors 1717, Shaka Wear 7.5oz, Lane Seven LS14001 hoodies. Premium heavyweight blanks only. Built to last a decade.</p>
      </div>
      <div class="brand-item">
        <div class="brand-item-title">The Process</div>
        <p class="brand-item-text">Every design conceived, refined and approved before a single unit is printed. No filler. No compromise. No catalogue bloat.</p>
      </div>
      <div class="brand-item">
        <div class="brand-item-title">The Promise</div>
        <p class="brand-item-text">100 pieces. A capsule, not a catalogue. Every piece earns its place or it doesn't exist.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══ ABOUT PREVIEW ═══ -->
<section id="about" class="section" style="background:var(--bg2)">
  <div class="wrap">
    <div class="about-split">
      <div class="about-visual reveal">
        <svg class="about-sigil" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="#C8A96E" stroke-width="1"/>
          <circle cx="100" cy="100" r="60" stroke="#C8A96E" stroke-width="1"/>
          <circle cx="100" cy="100" r="30" stroke="#C8A96E" stroke-width="1"/>
          <circle cx="100" cy="100" r="8" fill="#C8A96E" opacity=".6"/>
          <line x1="100" y1="10" x2="100" y2="190" stroke="#C8A96E" stroke-width=".75"/>
          <line x1="10" y1="100" x2="190" y2="100" stroke="#C8A96E" stroke-width=".75"/>
          <line x1="27" y1="27" x2="173" y2="173" stroke="#C8A96E" stroke-width=".75"/>
          <line x1="173" y1="27" x2="27" y2="173" stroke="#C8A96E" stroke-width=".75"/>
          <polygon points="100,15 185,160 15,160" stroke="#C8A96E" stroke-width=".75" fill="none"/>
          <polygon points="100,185 15,40 185,40" stroke="#C8A96E" stroke-width=".75" fill="none"/>
        </svg>
      </div>
      <div class="about-body reveal d1">
        <span class="lbl" style="margin-bottom:1.5rem">The Brand</span>
        <p class="about-crack">"There is a crack in every pavement."</p>
        <p>Something grows there — stubborn, chemical-resistant, architecturally inconvenient, and completely indifferent to the city's opinion of it.</p>
        <p>UrbanDruid started from a single observation: the two worlds we're told are opposites — the urban and the natural, the systemic and the sacred — have never actually been at war.</p>
        <p style="color:var(--gold);font-style:italic">UrbanDruid is a signal, not a broadcast. If you know, you know.</p>
        <div style="margin-top:2rem">
          <a href="#" class="btn btn-outline">Read the Full Story</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ INNER CIRCLE ═══ -->
<section id="drops" class="inner-circle">
  <div class="ic-symbol"></div>
  <h2 class="ic-title reveal">The Inner Circle</h2>
  <p class="ic-desc reveal d1">Drop alerts. Early access. Transmissions from the urban wilderness.<br>No noise. No spam. Just signal.</p>
  <form class="email-form reveal d2" onsubmit="handleEmail(event)">
    <input type="email" class="email-input" placeholder="your@email.com" required>
    <button type="submit" class="email-submit">Join</button>
  </form>
  <p class="ic-disclaimer reveal d3">No spam. Unsubscribe anytime. Your data stays ours — never sold.</p>
</section>

<!-- ═══ FOOTER ═══ -->
<footer>
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">Urban<span style="color:var(--gold)">Druid</span></div>
        <p class="footer-tagline">Premium heavyweight streetwear for deep thinkers and quiet rebels. Where the concrete meets the ancient.</p>
        <div class="footer-socials">
          <a href="https://www.instagram.com/urbandruid.art/" class="footer-soc" target="_blank" rel="noopener">IG</a>
          <a href="https://www.tiktok.com/@urbandruid.art" class="footer-soc" target="_blank" rel="noopener">TT</a>
          <a href="https://uk.pinterest.com/UrbanDruidArt/" class="footer-soc" target="_blank" rel="noopener">PT</a>
        </div>
      </div>
      <div>
        <span class="footer-col-title">Shop</span>
        <ul class="footer-links">
          <li><a href="#">All Products</a></li>
          <li><a href="#dissent">The Dissent Collection</a></li>
          <li><a href="#signal">The Signal Collection</a></li>
          <li><a href="#">New Arrivals</a></li>
        </ul>
      </div>
      <div>
        <span class="footer-col-title">The Brand</span>
        <ul class="footer-links">
          <li><a href="#about">About UrbanDruid</a></li>
          <li><a href="#drops">Drops & Transmissions</a></li>
          <li><a href="#">Size Guide</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div>
        <span class="footer-col-title">Help</span>
        <ul class="footer-links">
          <li><a href="#">Shipping & Delivery</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 UrbanDruid. All rights reserved. UK Sole Trader.</span>
      <div class="footer-legal">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Returns</a>
      </div>
    </div>
  </div>
</footer>

<script>
const ham=document.getElementById('ham'),mobNav=document.getElementById('mobNav'),mobClose=document.getElementById('mobClose');
ham.addEventListener('click',()=>{mobNav.classList.add('open');document.body.style.overflow='hidden'});
mobClose.addEventListener('click',()=>{mobNav.classList.remove('open');document.body.style.overflow=''});
mobNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobNav.classList.remove('open');document.body.style.overflow=''}));

const cartBtn=document.getElementById('cartBtn'),cartDrawer=document.getElementById('cartDrawer'),cartOverlay=document.getElementById('cartOverlay'),cartClose=document.getElementById('cartClose');
function openCart(){cartDrawer.classList.add('open');cartOverlay.classList.add('open');document.body.style.overflow='hidden'}
function closeCart(){cartDrawer.classList.remove('open');cartOverlay.classList.remove('open');document.body.style.overflow=''}
cartBtn.addEventListener('click',openCart);
cartClose.addEventListener('click',closeCart);
cartOverlay.addEventListener('click',closeCart);

document.querySelectorAll('.size-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.size-btn').forEach(x=>x.classList.remove('on'));b.classList.add('on')}));

let cartItems=0;
function addToCart(){
  cartItems++;
  document.getElementById('cartCount').textContent=cartItems;
  openCart();
}

function handleEmail(e){
  e.preventDefault();
  const btn=e.target.querySelector('button');
  btn.textContent='Joined ✓';
  btn.style.background='#2A4A3E';
  setTimeout(()=>{btn.textContent='Join';btn.style.background='';e.target.reset()},3000);
}

const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');obs.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

const hdr=document.querySelector('header');
window.addEventListener('scroll',()=>{hdr.style.borderBottomColor=window.scrollY>60?'rgba(37,37,37,.6)':''},{ passive:true});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));
</script>
</body>
</html>