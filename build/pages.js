"use strict";
const G = require("./generate.js");
const { TRACKS,SITE,BRAND,SHORT,PRICE,PRICE_PLAIN,WA,WAD,EMAIL,OG,
        esc,jsonld,page,write,writeTrack } = G;

/* =====================================================================  HOME  */
function buildIndex(){
  const trackCards = TRACKS.map(t=>`
<a class="card reveal" href="courses/${t.slug}.html">
  <span class="track-icon">${t.emoji}</span>
  <h3>${esc(t.name)}</h3>
  <p>${esc(t.short)}</p>
  <span class="cr-go">View track &rarr;</span>
</a>`).join("");

  const body = `
<section class="hero">
  <div class="hero-grid"></div>
  <div class="container">
    <div class="hero-inner">
      <span class="eyebrow on-dark">VAA Global Business School for Artisans</span>
      <h1>The business school built <em>/</em> for Nigerian artisans.</h1>
      <p class="lead">You already know how to do the work. We teach the business and brand side — pricing, clients, marketing and money management. Start with a focused 5-week track for your trade, or go all-in with the full 3-month Mini-MBA.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:28px 0;max-width:640px">
        <a class="btn btn-primary btn-lg" href="tracks.html" style="flex-direction:column;align-items:flex-start;padding:18px 22px;height:auto;border-radius:12px">
          <span style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;opacity:.7;margin-bottom:4px">5-week program</span>
          <span style="font-size:1rem;font-weight:800">Business Tracks</span>
          <span style="font-size:.8rem;font-weight:500;opacity:.75;margin-top:2px">Pick the track for your trade</span>
        </a>
        <a class="btn btn-outline-on-dark btn-lg" href="mini-mba.html" style="flex-direction:column;align-items:flex-start;padding:18px 22px;height:auto;border-radius:12px;border:2px solid rgba(207,249,29,.5);color:#fff">
          <span style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--lime);margin-bottom:4px">3-month full program</span>
          <span style="font-size:1rem;font-weight:800">The Mini-MBA</span>
          <span style="font-size:.8rem;font-weight:500;opacity:.65;margin-top:2px">All 6 topics · capstone · certificate</span>
        </a>
      </div>
      <div class="hero-proof">
        <div class="stat"><b>6</b><span>Business tracks</span></div>
        <div class="stat"><b>1,400+</b><span>Graduates trained</span></div>
        <div class="stat"><b>405+</b><span>Placed in paid work</span></div>
      </div>
    </div>
  </div>
</section>

<section>
<div class="container">
  <div class="section-head center">
    <span class="eyebrow" style="justify-content:center">The real problem</span>
    <h2>The skill is not the problem. The business and brand are.</h2>
    <p>Nigeria is full of talented tailors who cannot price a garment, bakers who have no repeat customers, and electricians who lose every job to a cheaper quote. The skill exists. What is missing is the business system and a brand that makes clients choose you over everyone else.</p>
  </div>
  <div class="duo reveal">
    <div class="duo-col skill">
      <span class="tag">What most artisans have</span>
      <h3>The skill</h3>
      <ul class="ticks">
        <li>Trained through an apprenticeship or years of practice</li>
        <li>Can do the work to a high standard</li>
        <li>Has tools, a workspace and the knowledge</li>
      </ul>
    </div>
    <div class="duo-mid"><span>/</span></div>
    <div class="duo-col biz">
      <span class="tag">What most artisans are missing</span>
      <h3>The business</h3>
      <ul class="ticks" style="--tick:#CFF91D">
        <li>Confident pricing that reflects the real value of the skill</li>
        <li>A strong brand that makes clients pick you over anyone else</li>
        <li>A system for getting clients consistently</li>
        <li>Financial discipline that builds something over time</li>
      </ul>
    </div>
  </div>
</div>
</section>

<section class="soft-bg">
<div class="container">
  <div class="section-head">
    <span class="eyebrow">The six tracks</span>
    <h2>Pick the track that matches your trade</h2>
    <p>Every track is built for people who already have the skill. We focus entirely on the business side: branding, pricing, clients, marketing, and money management.</p>
  </div>
  <div class="grid grid-3">${trackCards}</div>
  <div style="margin-top:36px"><a class="btn btn-blue" href="tracks.html">Compare all six tracks &rarr;</a></div>
</div>
</section>

<section class="dark-bg">
<div class="container">
  <div class="section-head center">
    <span class="eyebrow on-dark" style="justify-content:center">How it works</span>
    <h2 style="color:#fff">From enrolment to business results in five weeks</h2>
  </div>
  <div class="steps reveal">
    <div class="step"><span class="n">STEP 01</span><h4>Pick your track</h4><p>Choose the track that matches your trade from the six business programs.</p></div>
    <div class="step"><span class="n">STEP 02</span><h4>Enrol in minutes</h4><p>Pay securely via Paystack. Our team will reach you with your access details within two hours.</p></div>
    <div class="step"><span class="n">STEP 03</span><h4>Learn in a live cohort</h4><p>Structured sessions, recordings, assignments and a community of other artisans in your field.</p></div>
    <div class="step"><span class="n">STEP 04</span><h4>Apply and grow</h4><p>Implement each module as you go. Most participants see real results before the program ends.</p></div>
  </div>
</div>
</section>

<section>
<div class="container">
  <div class="section-head center">
    <span class="eyebrow" style="justify-content:center">Backed by a school that works</span>
    <h2>VAA Global has trained 1,400+ people across Nigeria</h2>
    <p>VAA Global Business School for Artisans is a division of VAA Global Tech Hub, an SDC Canada-endorsed institution with 1,400+ graduates and 405+ placed in paid work.</p>
  </div>
  <div class="stats-band reveal">
    <div class="s"><b>1,400+</b><span>Graduates trained</span></div>
    <div class="s"><b>405+</b><span>Placed in paid work</span></div>
    <div class="s"><b>6+</b><span>Years of training</span></div>
    <div class="s"><b>405+</b><span>Placed in paid work</span></div>
  </div>
</div>
</section>

<section style="background:var(--black);padding:64px 0">
<div class="container">
  <div class="cta-strip reveal" style="background:var(--lime);border-radius:16px;padding:44px 48px">
    <div>
      <span style="font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:rgba(0,0,0,.5)">Flagship program</span>
      <h2 style="color:var(--black);margin-top:8px">The VAA Mini-MBA for Artisans</h2>
      <p style="color:rgba(0,0,0,.65);margin-top:8px">3 months · 6 topics · capstone project · certificate. The complete program for artisans who are serious.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px;flex-shrink:0">
      <a class="btn btn-dark btn-lg" href="mini-mba.html">See the full program</a>
      <a class="btn" style="background:transparent;border:2px solid rgba(0,0,0,.25);color:var(--black);padding:13px 26px;font-size:.9rem;border-radius:8px;text-align:center;font-weight:700" href="enroll.html">Enroll now</a>
    </div>
  </div>
</div>
</section>`;

  write("index.html", page({
    path:"", depth:0,
    title:"Mini-MBA for Artisans | VAA Global Business School",
    desc:"Mini-MBA for Nigerian artisans. Learn branding, pricing, marketing and client management for your trade at VAA Global Business School for Artisans.",
    kw:"business school for artisans Nigeria, mini MBA for artisans Nigeria, artisan MBA Nigeria, how to grow artisan business Nigeria, branding for artisans Nigeria, business training for tradespeople Nigeria",
    ogAlt:"VAA Global Business School for Artisans — Mini-MBA for Nigerian artisans",
    body,
    jsonld:[
      {"@context":"https://schema.org","@type":"WebSite","@id":SITE+"/#website",
        name:BRAND,url:SITE,publisher:{"@id":SITE+"/#org"},
        potentialAction:{"@type":"SearchAction",
          target:{"@type":"EntryPoint",urlTemplate:SITE+"/tracks.html?q={search_term_string}"},
          "query-input":"required name=search_term_string"}},
      {"@context":"https://schema.org","@type":"ItemList",name:"VAA Business School tracks",
        itemListElement:TRACKS.map((t,i)=>({"@type":"ListItem",position:i+1,
          name:t.name,url:SITE+"/courses/"+t.slug+".html"}))}
    ]
  }));
}

/* =====================================================================  TRACKS */
function buildTracks(){
  const cards = TRACKS.map(t=>`
<div class="card reveal">
  <span class="track-icon lg">${t.emoji}</span>
  <h3>${esc(t.name)}</h3>
  <p>${esc(t.short)}</p>
  <h4 style="font-size:.85rem;margin-top:16px;text-transform:uppercase;letter-spacing:.06em;color:var(--blue)">Who it is for</h4>
  <ul class="ticks sm">${t.audience.map(a=>`<li>${esc(a)}</li>`).join("")}</ul>
  <a class="btn btn-primary" style="margin-top:20px" href="courses/${t.slug}.html">View full track &rarr;</a>
</div>`).join("");

  const body = `
<div class="container"><div class="crumb"><a href="index.html">Home</a> / <span>All tracks</span></div></div>
<section style="padding-top:24px">
<div class="container">
  <div class="section-head">
    <span class="eyebrow">Six tracks</span>
    <h1>Pick the business track that matches your trade</h1>
    <p>These tracks are for people who can already do the work. Each track is five weeks, focused on one area of your business: branding, pricing, marketing, clients or money management. If you want all six topics together with a capstone and certificate, that is the 3-month Mini-MBA.</p>
  </div>
  <div class="grid grid-3">${cards}</div>
</div>
</section>
<section class="soft-bg">
<div class="container">
  <div class="cta-strip reveal">
    <div><h2>Not sure which track suits your trade?</h2><p>Tell us what you do and we will point you to the right one.</p></div>
    <a class="btn btn-dark btn-lg" href="contact.html">Get in touch</a>
  </div>
</div>
</section>`;

  write("tracks.html", page({
    path:"tracks.html", depth:0, crumb:"Tracks",
    title:"Six Business Tracks for Artisans | VAA Global Business School",
    desc:"Choose from six business tracks built for Nigerian artisans: Fashion & Beauty, Food & Hospitality, Home Trades, Automotive, Agriculture and Creative Services.",
    kw:"artisan business training Nigeria, trades business skills Nigeria, vocational business school Lagos",
    body
  }));
}

/* =====================================================================  ABOUT */
function buildAbout(){
  const body = `
<div class="container"><div class="crumb"><a href="index.html">Home</a> / <span>About</span></div></div>
<section style="padding-top:24px">
<div class="container">
  <div class="section-head">
    <span class="eyebrow">Our story</span>
    <h1>We stopped teaching skills. We started building businesses and brands.</h1>
    <p>VAA Global spent years training people in digital and remote skills. The pattern was clear: graduates who earned were not the ones with the best technical skills. They were the ones who knew how to build a brand, price their work, find clients and manage their money.</p>
  </div>
  <div class="grid grid-2" style="align-items:start;gap:44px">
    <div>
      <p style="color:var(--gray)">Nigeria has millions of artisans who are genuinely skilled but chronically underpaid. They trained through apprenticeships, they can do the work, but nobody ever taught them how to build a brand or run a business. That is the gap VAA Global Business School for Artisans was built to close.</p>
      <p style="color:var(--gray)">We do not teach you how to sew, cook, fix a car or take a photo. We teach the person who already does those things how to build a brand, price their work, market it, get clients and build something that lasts. Think of it as a Mini-MBA, built specifically for Nigerian artisans.</p>
      <p style="color:var(--gray)">The school runs fully online with live sessions and recorded lessons. No commute. No equipment required beyond a phone or laptop. Just the willingness to run your trade like a real business.</p>
    </div>
    <div class="form-card">
      <h3 style="margin-bottom:1rem">Why this model works</h3>
      <ul class="ticks">
        <li>Targets the real gap: not the skill, but the business and brand</li>
        <li>Fully online — no commute, no missed work days</li>
        <li>Live sessions and recordings you can revisit at any time</li>
        <li>Practical from day one — every module has an immediate action</li>
        <li>Built around the Nigerian market, not generic global advice</li>
      </ul>
    </div>
  </div>
</div>
</section>
<section class="dark-bg">
<div class="container">
  <div class="section-head center">
    <span class="eyebrow on-dark" style="justify-content:center">The parent school</span>
    <h2 style="color:#fff">Part of VAA Global Tech Hub</h2>
    <p>VAA Global Business School for Artisans sits inside a wider institution with a proven track record.</p>
  </div>
  <div class="grid grid-3">
    <div class="card" style="background:#111;border-color:#222;color:#fff"><h3 style="color:#fff">1,400+ graduates</h3><p style="color:#b9c0ca">Over 1,400 people trained, with 405+ placed in paid work across Nigeria and globally.</p></div>
    <div class="card" style="background:#111;border-color:#222;color:#fff"><h3 style="color:#fff">SDC Canada endorsed</h3><p style="color:#b9c0ca">Endorsed by the Skills Development Council of Canada for training quality and outcomes.</p></div>
    <div class="card" style="background:#111;border-color:#222;color:#fff"><h3 style="color:#fff">1,400+ graduates</h3><p style="color:#b9c0ca">Over 1,400 people trained with 405+ placed in paid work across Nigeria and globally.</p></div>
  </div>
</div>
</section>
<section class="soft-bg">
<div class="container">
  <div class="cta-strip reveal">
    <div><h2>Ready to build the business side of your trade?</h2><p>Pick a track and start this week.</p></div>
    <a class="btn btn-dark btn-lg" href="tracks.html">See the tracks</a>
  </div>
</div>
</section>`;

  write("about.html", page({
    path:"about.html", depth:0, crumb:"About",
    title:"About VAA Global Business School for Artisans",
    desc:"VAA Business School teaches Nigerian artisans the business side of their skill: pricing, clients and money management. Taught online in a live cohort.",
    body,
    jsonld:[{"@context":"https://schema.org","@type":"AboutPage",name:"About "+BRAND,url:SITE+"/about.html"}]
  }));
}

/* =====================================================================  PRICING */
function buildPricing(){
  const body = `
<div class="container"><div class="crumb"><a href="index.html">Home</a> / <span>Pricing</span></div></div>
<section style="padding-top:24px">
<div class="container">
  <div class="section-head center">
    <span class="eyebrow" style="justify-content:center">Pricing</span>
    <h1>Two ways to learn. One clear price for each.</h1>
    <p>Start with a 5-week track focused on your trade, or go all-in with the full 3-month Mini-MBA. Both include a certificate. No hidden fees.</p>
  </div>
  <div class="grid grid-2" style="align-items:start;gap:32px;margin-bottom:48px">

    <div class="pricecard reveal">
      <div class="pc-top">
        <span class="ribbon">5-Week Business Track</span>
        <div class="price">${PRICE}<small> /once</small></div>
        <span class="pc-note">Pick one track for your trade &middot; certificate included</span>
      </div>
      <div class="pc-body">
        <ul class="ticks">
          <li>5-week focused program for your trade</li>
          <li>Covers branding, pricing, marketing, clients and money</li>
          <li>Live online cohort with recordings</li>
          <li>Business templates: price list, quote, content plan</li>
          <li>Certificate of completion</li>
          <li>Alumni community access</li>
        </ul>
        <a class="btn btn-primary btn-block btn-lg" href="tracks.html">Choose your track</a>
        <p class="form-note center" style="margin-top:14px">Secure payment via Paystack</p>
      </div>
    </div>

    <div class="pricecard reveal" style="border:2px solid var(--black)">
      <div class="pc-top" style="background:var(--black)">
        <span class="ribbon" style="background:var(--lime);color:var(--black)">3-Month Mini-MBA</span>
        <div class="price" style="color:var(--lime)">&#8358;225,000<small style="color:#9aa2ac"> /once</small></div>
        <span class="pc-note" style="color:#9aa2ac">All 6 topics &middot; capstone &middot; graduation &middot; certificate</span>
      </div>
      <div class="pc-body">
        <ul class="ticks">
          <li>All 6 business modules across 3 months</li>
          <li>Branding, pricing, marketing, clients, money &mdash; all covered</li>
          <li>Monthly deliverables you keep and use</li>
          <li>Capstone project and defence</li>
          <li>Graduation ceremony and certificate</li>
          <li>Alumni network access</li>
          <li>Pay in instalments: 50% + 25% + 25%</li>
        </ul>
        <a class="btn btn-dark btn-block btn-lg" href="mini-mba.html">See the Mini-MBA</a>
        <p class="form-note center" style="margin-top:14px">Payment plans available on the Mini-MBA page</p>
      </div>
    </div>
  </div>

  <div class="grid grid-2" style="gap:24px;margin-bottom:48px">
    <div class="card">
      <h3>Which one should I choose?</h3>
      <p>If you want to fix one area of your business quickly — pricing, branding, clients or marketing — start with a 5-week track at ${PRICE}. If you want to build everything from scratch with a 3-month commitment, capstone and graduation, go for the Mini-MBA.</p>
    </div>
    <div class="card">
      <h3>Can I upgrade from a track to the Mini-MBA?</h3>
      <p>Yes. If you complete a track and want to continue with the full Mini-MBA, we will credit your track fee toward the Mini-MBA price. Talk to us before you enrol to set this up.</p>
    </div>
  </div>
</div>
</section>

<section class="soft-bg">
<div class="container">
  <div class="cta-strip reveal">
    <div><h2>Not sure where to start?</h2><p>Talk to us and we will point you to the right option for your trade and your goals.</p></div>
    <a class="btn btn-dark btn-lg" href="contact.html">Talk to us</a>
  </div>
</div>
</section>`;

  write("pricing.html", page({
    path:"pricing.html", depth:0, crumb:"Pricing",
    title:"Pricing | Business Tracks ${PRICE_PLAIN} & Mini-MBA ₦225,000 | VAA Business School",
    desc:"Business tracks are ${PRICE_PLAIN} for 5 weeks. The Mini-MBA is ₦225,000 for 3 months. Both include a certificate. VAA Global Business School for Artisans.",
    kw:"artisan business training fee Nigeria, mini MBA price Nigeria, business track cost Lagos",
    body
  }));
}

/* =====================================================================  ENROLL */
function buildEnroll(){
  const trackOpts = TRACKS.map(t=>`<option value="${t.slug}" data-price="35000">${esc(t.name)} — &#8358;35,000</option>`).join("");
  const body = `
<div class="container"><div class="crumb"><a href="index.html">Home</a> / <span>Enroll</span></div></div>
<section style="padding-top:24px">
<div class="container">
  <div id="successBox" class="form-card hide" style="border:2px solid var(--lime-deep);margin-bottom:30px">
    <span class="eyebrow">Payment received</span>
    <h2 style="font-size:1.6rem">You are in. Welcome to the cohort.</h2>
    <p style="color:var(--gray)">We have your payment. Our team will reach you within two hours with your cohort details.</p>
    <p class="form-note">Payment reference: <b id="payRef"></b></p>
    <a class="btn btn-primary" href="contact.html">Get in touch with us</a>
  </div>
  <div class="course-layout" style="padding-top:0">
    <div class="course-body">
      <div class="section-head" style="margin-bottom:30px">
        <span class="eyebrow">Enrollment</span>
        <h1>Enroll in a business track</h1>
        <p>Pick your trade track below, fill in your details and pay securely via Paystack. Each track is 5 weeks, focused on the business side of your specific trade.</p>
      </div>
      <div class="form-card">
        <form id="enrollForm" novalidate>
          <div class="form-row">
            <div class="field"><label for="fullname">Full name</label><input id="fullname" name="fullname" type="text" placeholder="e.g. Amaka Okonkwo" required></div>
            <div class="field"><label for="phone">Phone number</label><input id="phone" name="phone" type="tel" placeholder="0801 234 5678" required></div>
          </div>
          <div class="field"><label for="email">Email address</label><input id="email" name="email" type="email" placeholder="you@email.com" required></div>
          <div class="field">
            <label for="courseSelect">Choose your business track</label>
            <select id="courseSelect" name="course" required>
              <option value="">Select a program...</option>
              <optgroup label="5-Week Business Tracks — &#8358;35,000">
                ${trackOpts}
              </optgroup>
              <!-- Mini-MBA has its own form on mini-mba.html -->
            </select>
          </div>
          <div id="priceDisplay" style="display:none;margin:0 0 18px;padding:14px 18px;background:var(--soft);border-radius:10px;border:1px solid var(--line)">
            <span style="font-size:.78rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.06em" id="priceLabel"></span>
            <div style="font-size:1.8rem;font-weight:900;color:var(--ink);margin-top:4px" id="priceAmount"></div>
          </div>
          <div class="field"><label for="refCode">Referral code (optional)</label><input id="refCode" name="refcode" type="text" placeholder="Enter code if you have one"></div>
          <button type="submit" class="btn btn-primary btn-block btn-lg" id="payBtn" disabled>Select a program above</button>
          <p class="form-note center" style="margin-top:14px">Secure payment via Paystack. Certificate included.</p>
        </form>
      </div>
    </div>
    <aside class="course-aside">
      <div class="aside-card">
        <div class="ac-top" style="padding-bottom:16px">
          <span class="ribbon">What you get</span>
          <div style="margin-top:16px">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0">
              <span style="color:rgba(255,255,255,.7);font-size:.85rem">5-Week Track</span>
              <span style="color:var(--lime);font-weight:800">&#8358;35,000</span>
            </div>
          </div>
          <p style="font-size:.78rem;color:rgba(255,255,255,.5);margin-top:8px">Enrolling in the Mini-MBA? <a href="mini-mba.html#enroll" style="color:var(--lime)">Go to the Mini-MBA page</a>.</p>
        </div>
        <div class="ac-body">
          <ul class="ticks">
            <li>Live online cohort sessions</li>
            <li>Business templates included</li>
            <li>Brand guide + price list</li>
            <li>Certificate of completion</li>
            <li>Alumni community access</li>
          </ul>
          <p class="form-note" style="margin-top:12px">Questions? <a href="contact.html" style="color:var(--lime);font-weight:700">Talk to us first</a>.</p>
        </div>
      </div>
    </aside>
  </div>
</div>
</section>`;

  write("enroll.html", page({
    path:"enroll.html", depth:0, paystack:true, crumb:"Enroll",
    title:"Enroll | VAA Global Business School for Artisans",
    desc:"Enroll in a 5-week business track or the 3-month Mini-MBA at VAA Global Business School. Pay via Paystack. Business training for Nigerian artisans.",
    body
  }));
}

/* =====================================================================  FAQ */
const FAQS = [
  ["Do I need to be trained in my trade before joining?","Yes. These programs are for people who already have the skill and want to build the business side. If you are still learning the craft, complete your training first, then join us."],
  ["How is the program delivered?","Fully online through live sessions and recorded lessons. You learn in a cohort with other artisans in the same field, with access to recordings after each session. Think of it as a Mini-MBA format: structured, practical and built around real outcomes."],
  ["How long is each track?","Five weeks. Each track covers one area of your business completely — branding and pricing in the first two weeks, then marketing, clients and money in the remaining three. You finish with a real deliverable you can use immediately."],
  ["How much does it cost?",`Every track is a flat ${PRICE_PLAIN}, paid once through Paystack. Your certificate of completion is included.`],
  ["Will this work in my city outside Lagos?","Yes. Everything taught applies across Nigeria. We include examples from Lagos, Abuja, Port Harcourt, Enugu and other cities. The strategies work wherever you have clients."],
  ["What if I am not good with technology?","Not at all technical. If you can join an online video call and open a PDF, you can follow the program. A basic smartphone is enough."],
  ["What templates and tools do I get?","Every participant receives a price list template, quote and invoice template, content calendar, booking script, and financial tracking sheet — all ready to use from week one."],
  ["Do I get a certificate?","Yes. A certificate of completion from VAA Global Business School for Artisans is included in your fee. It is issued when you finish the program."],
  ["Can I earn a referral commission?","Yes. Our referral program pays 10% for every person who enrols with your code. Register on the referral page."],
  ["What if I have already started a business but it is not growing?","This program is actually designed for that. Many of our participants are already working but are undercharging, have no system for getting clients, or cannot keep track of their money. The program fixes all of that."]
];

function buildFaq(){
  const items = FAQS.map(([q,a])=>`
<details class="faq-item">
  <summary>${esc(q)}<span class="chev">+</span></summary>
  <div class="faq-a">${esc(a)}</div>
</details>`).join("");

  const body = `
<div class="container"><div class="crumb"><a href="index.html">Home</a> / <span>FAQ</span></div></div>
<section style="padding-top:24px">
<div class="container" style="max-width:840px">
  <div class="section-head">
    <span class="eyebrow">Questions</span>
    <h1>Frequently asked questions</h1>
    <p>Everything you need to know before you enrol. Still have a question? Reach out and we will answer it before you commit.</p>
  </div>
  <div>${items}</div>
  <div style="margin-top:40px">
    <a class="btn btn-primary btn-lg" href="enroll.html">Enroll now</a>
    <a class="btn btn-ghost btn-lg" href="contact.html">Ask us a question</a>
  </div>
</div>
</section>`;

  write("faq.html", page({
    path:"faq.html", depth:0, crumb:"FAQ",
    title:"FAQ | VAA Global Business School for Artisans",
    desc:`Answers to common questions about VAA Business School: who it is for, how the online program works, what it costs, what you get, and how long it takes.`,
    kw:"vocational business training FAQ Nigeria, artisan business school questions, online trade business course Nigeria",
    body,
    jsonld:[{"@context":"https://schema.org","@type":"FAQPage",
      mainEntity:FAQS.map(([q,a])=>({"@type":"Question",name:q,
        acceptedAnswer:{"@type":"Answer",text:a}}))}]
  }));
}

/* =====================================================================  CONTACT */
function buildContact(){
  const body = `
<div class="container"><div class="crumb"><a href="index.html">Home</a> / <span>Contact</span></div></div>
<section style="padding-top:24px">
<div class="container">
  <div class="grid grid-2" style="align-items:start;gap:44px">
    <div>
      <div class="section-head" style="margin-bottom:30px">
        <span class="eyebrow">Get in touch</span>
        <h1>Get in touch before you commit. We will answer every question.</h1>
        <p>Ask which track is right for you, get payment help, or ask anything about the program before you commit. We reply fast.</p>
      </div>
      <div class="grid" style="gap:14px">
        <a class="card" href="https://wa.me/${WA}" style="display:flex;align-items:flex-start;gap:14px">
          <span style="font-size:1.4rem;flex-shrink:0">📞</span>
          <div><h3 style="margin-bottom:4px">Phone / WhatsApp</h3><p style="margin:0">${WAD}</p></div>
        </a>
        <a class="card" href="mailto:${EMAIL}" style="display:flex;align-items:flex-start;gap:14px">
          <span style="font-size:1.4rem;flex-shrink:0">✉️</span>
          <div><h3 style="margin-bottom:4px">Email</h3><p style="margin:0">${EMAIL}</p></div>
        </a>
        <div class="card" style="display:flex;align-items:flex-start;gap:14px">
          <span style="font-size:1.4rem;flex-shrink:0">📍</span>
          <div>
            <h3 style="margin-bottom:4px">Address</h3>
            <p style="margin:0">33 Lateef Bello Street, Igando, Lagos, Nigeria</p>
            <p style="margin:6px 0 0;font-size:.84rem;color:var(--blue);font-weight:600">Training is fully online — we know your time is valuable and getting across Lagos is not always easy.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="form-card">
      <h3 style="margin-bottom:1rem">Send a message</h3>
      <form data-form="contact" novalidate>
        <div class="field"><label for="c-name">Full name</label><input id="c-name" name="fullname" type="text" placeholder="Your name" required></div>
        <div class="form-row">
          <div class="field"><label for="c-email">Email</label><input id="c-email" name="email" type="email" placeholder="you@email.com" required></div>
          <div class="field"><label for="c-phone">Phone number</label><input id="c-phone" name="phone" type="tel" placeholder="0801 234 5678"></div>
        </div>
        <div class="field"><label for="c-msg">Message</label><textarea id="c-msg" name="message" placeholder="What would you like to know?" required></textarea></div>
        <button type="submit" class="btn btn-primary btn-block btn-lg">Send message</button>
      </form>
    </div>
  </div>
</div>
</section>

<section style="padding:0 0 72px">
<div class="container">
  <div class="section-head" style="margin-bottom:24px">
    <span class="eyebrow">Our location</span>
    <h2>Find us in Igando, Lagos</h2>
    <p>33 Lateef Bello Street, Igando, Lagos. All training is online but you are always welcome to visit.</p>
  </div>
  <div style="border-radius:16px;overflow:hidden;border:1px solid var(--line);height:400px">
    <iframe
      title="VAA Global Business School location"
      width="100%" height="100%" frameborder="0" style="border:0;display:block"
      loading="lazy" allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8!2d3.2586!3d6.5195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLateef+Bello+Street%2C+Igando%2C+Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng">
    </iframe>
  </div>
</div>
</section>`;

  write("contact.html", page({
    path:"contact.html", depth:0, crumb:"Contact",
    title:"Contact VAA Global Business School for Artisans | Igando, Lagos",
    desc:`Contact VAA Global Business School for Artisans. Call ${WAD} or email ${EMAIL}. We are at 33 Lateef Bello Street, Igando, Lagos. Training is fully online.`,
    body,
    jsonld:[
      {"@context":"https://schema.org","@type":"ContactPage",name:"Contact "+BRAND,url:SITE+"/contact.html"},
      {"@context":"https://schema.org","@type":"LocalBusiness",
        name:BRAND, telephone:"+234-902-536-7017", email:EMAIL,
        address:{"@type":"PostalAddress",streetAddress:"33 Lateef Bello Street",
          addressLocality:"Igando",addressRegion:"Lagos",addressCountry:"NG"},
        url:SITE, description:"Business school for Nigerian artisans. Mini-MBA and business tracks for tradespeople."}
    ]
  }));
}

/* =====================================================================  BLOG */
const POSTS = [
  {slug:"pricing-your-services-nigeria", title:"How to price your services as an artisan in Nigeria (without guessing)", desc:"The three numbers every Nigerian artisan must know before setting a price — and a simple formula to calculate them.", kw:"how to price services Nigeria, artisan pricing Nigeria, trade service pricing"},
  {slug:"get-clients-nigeria-artisan", title:"How to get your first 10 clients as a Nigerian artisan (no ad budget needed)", desc:"Step-by-step tactics for tailors, bakers, mechanics, photographers and other tradespeople to build a real client base from zero.", kw:"how to get clients Nigeria, artisan marketing Nigeria, grow trade business"},
  {slug:"whatsapp-business-artisans-nigeria", title:"How to use WhatsApp Business to grow your trade in Nigeria", desc:"Practical setup and content strategies for Nigerian artisans using WhatsApp Status, broadcast lists and quick replies to convert more clients.", kw:"WhatsApp Business for artisans Nigeria, WhatsApp marketing trade Nigeria"},
  {slug:"instagram-for-tradesperson-nigeria", title:"Instagram for tradespeople: how Nigerian tailors, bakers and mechanics get clients from it", desc:"What to post, when to post, and how to turn Instagram followers into paying clients — for people who make or fix things.", kw:"Instagram for artisans Nigeria, social media for tradespeople Nigeria"},
  {slug:"how-to-build-website-artisan-nigeria", title:"How to build a simple website or booking page for your trade in Nigeria", desc:"Free and cheap tools to put your services online so clients can find you, book you, and pay you — no coding needed.", kw:"website for artisan Nigeria, booking page Nigeria no-code, online presence for tradespeople"},
  {slug:"money-management-artisan-nigeria", title:"Money management for Nigerian artisans: stop spending your business income", desc:"How to separate your personal and business money, track your real profit, and build savings as a self-employed tradesperson.", kw:"money management artisan Nigeria, financial discipline self-employed Nigeria"}
];

function buildBlog(){
  const cards = POSTS.map(p=>`
<article class="card reveal">
  <h3><a href="blog/${p.slug}.html" style="color:inherit;text-decoration:none">${esc(p.title)}</a></h3>
  <p>${esc(p.desc)}</p>
  <a href="blog/${p.slug}.html" class="cr-go" style="margin-top:14px;display:inline-flex;color:var(--blue);font-weight:800;font-size:.85rem">Read &rarr;</a>
</article>`).join("");

  const body = `
<div class="container"><div class="crumb"><a href="index.html">Home</a> / <span>Resources</span></div></div>
<section style="padding-top:24px">
<div class="container">
  <div class="section-head">
    <span class="eyebrow">Resources</span>
    <h1>Practical guides for Nigerian artisans building a business</h1>
    <p>Everything here is aimed at one outcome: helping Nigerian artisans and tradespeople earn more from skills they already have.</p>
  </div>
  <div class="grid grid-3">${cards}</div>
</div>
</section>
<section class="soft-bg">
<div class="container">
  <div class="cta-strip reveal">
    <div><h2>Ready to go beyond guides and actually build your business?</h2><p>Enrol in the right track and start this week.</p></div>
    <a class="btn btn-dark btn-lg" href="tracks.html">See the tracks</a>
  </div>
</div>
</section>`;

  write("blog.html", page({
    path:"blog.html", depth:0, crumb:"Resources",
    title:"Resources for Nigerian Artisans | VAA Business School",
    desc:"Practical guides on branding, pricing, getting clients, Instagram and Facebook ads and money management for Nigerian artisans. VAA Global Business School.",
    kw:"artisan business guides Nigeria, how to grow trade business blog, Nigerian tradesperson tips",
    body
  }));
}

/* =====================================================================  REFERRAL */
function buildReferral(){
  const body = `
<div class="container"><div class="crumb"><a href="index.html">Home</a> / <span>Referral</span></div></div>
<section style="padding-top:24px">
<div class="container">
  <div class="section-head">
    <span class="eyebrow">Referral program</span>
    <h1>Earn 10% every time you send someone our way.</h1>
    <p>Know a tailor who is undercharging, a baker who cannot get clients, or a mechanic who is overwhelmed? Send them to us. When they enrol with your code, you earn 10% of their fee.</p>
  </div>
  <div class="steps reveal" style="margin-bottom:60px">
    <div class="step"><span class="n">01</span><h4>Register below</h4><p>Sign up and receive your unique referral code by email.</p></div>
    <div class="step"><span class="n">02</span><h4>Share it</h4><p>Send your code to artisans and tradespeople in your network.</p></div>
    <div class="step"><span class="n">03</span><h4>They enrol</h4><p>They enter your code at checkout when they pay.</p></div>
    <div class="step"><span class="n">04</span><h4>You get paid</h4><p>10% of their enrolment fee sent to your account.</p></div>
  </div>
  <div class="grid grid-2" style="align-items:start;gap:40px">
    <div>
      <div class="biz-callout">
        <span class="tag">The numbers</span>
        <h3>10% of every enrolment</h3>
        <p>Refer five people and you have made back more than your own enrolment fee. No cap. No expiry.</p>
      </div>
    </div>
    <div class="form-card">
      <h3 style="margin-bottom:1rem">Get your referral code</h3>
      <form data-form="referral" novalidate>
        <div class="field"><label for="r-name">Full name</label><input id="r-name" name="fullname" type="text" required></div>
        <div class="form-row">
          <div class="field"><label for="r-email">Email</label><input id="r-email" name="email" type="email" required></div>
          <div class="field"><label for="r-phone">Phone number</label><input id="r-phone" name="phone" type="tel" required></div>
        </div>
        <button type="submit" class="btn btn-primary btn-block btn-lg">Get my referral code</button>
      </form>
    </div>
  </div>
</div>
</section>`;

  write("referral.html", page({
    path:"referral.html", depth:0, crumb:"Referral",
    title:"Refer Artisans. Earn 10% Commission | VAA Business School",
    desc:"Refer artisans and tradespeople to VAA Business School and earn 10% commission on every enrolment. No cap, no expiry.",
    body
  }));
}

/* =====================================================================  TRACK PAGES */
function buildTrackPage(t){
  const mods = t.modules.map((m,i)=>`
<details class="module"${i===0?" open":""}>
  <summary><span><span class="mod-n">MODULE ${String(i+1).padStart(2,"0")}</span>${esc(m.t)}</span><span class="chev">+</span></summary>
  <div class="mod-body"><ul>${m.p.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>
</details>`).join("");

  const audience = t.audience.map(a=>`<li>${esc(a)}</li>`).join("");
  const pains = t.painPoints.map(p=>`
<div class="pain-card"><span class="pain-x">✕</span><p>${esc(p)}</p></div>`).join("");
  const outcomes = t.outcomes.map(o=>`<li>${esc(o)}</li>`).join("");
  const related = TRACKS.filter(x=>x.slug!==t.slug).slice(0,3).map(r=>`
<a class="card reveal" href="${r.slug}.html">
  <span class="track-icon">${r.emoji}</span>
  <h3>${esc(r.name)}</h3>
  <p>${esc(r.short)}</p>
</a>`).join("");

  const faqItems = t.faqs.map(([q,a])=>`
<details class="faq-item">
  <summary>${esc(q)}<span class="chev">+</span></summary>
  <div class="faq-a">${esc(a)}</div>
</details>`).join("");

  const body = `
<div class="container"><div class="crumb"><a href="../index.html">Home</a> / <a href="../tracks.html">Tracks</a> / <span>${esc(t.name)}</span></div></div>
<section class="course-hero" style="padding-top:10px">
<div class="container">
  <div class="inner">
    <span class="dept-pill">${esc(t.emoji)} Business Track</span>
    <h1>${esc(t.heroKw)}</h1>
    <p class="sub">${esc(t.short)}</p>
    <div class="course-meta">
      <div class="m"><b>Focus</b><span>Business + Brand</span></div>
      <div class="m"><b>Format</b><span>Live online cohort</span></div>
      <div class="m"><b>Duration</b><span>5 weeks</span></div>
      <div class="m"><b>Certificate</b><span>Included</span></div>
    </div>
    <div class="hero-cta" style="margin-top:26px">
      <a class="btn btn-primary btn-lg" href="../enroll.html?course=${t.slug}">Start building your business</a>
      <a class="btn btn-ghost on-dark btn-lg" href="../contact.html">I have a question first</a>
    </div>
  </div>
</div>
</section>

<div class="container">
<div class="course-layout">
  <div class="course-body">

    <div class="block">
      <h2>Who this track is for</h2>
      <ul class="ticks">${audience}</ul>
    </div>

    <div class="block">
      <h2>Does this sound like you?</h2>
      <div class="pain-grid">${pains}</div>
      <p style="color:var(--gray);margin-top:20px">If even one of those sounds familiar, you are in exactly the right place. This track fixes all of it.</p>
    </div>

    <div class="block">
      <h2>What you will learn</h2>
      <div style="margin-top:20px">${mods}</div>
    </div>

    <div class="block">
      <h2>What you will leave with</h2>
      <ul class="ticks">${outcomes}</ul>
    </div>

    <div class="block">
      <h2>Questions about this track</h2>
      <div>${faqItems}</div>
    </div>

  </div>
  <aside class="course-aside">
    <div class="aside-card">
      <div class="ac-top">
        <span class="ribbon">${esc(t.name)}</span>
        <div class="price">${PRICE}</div>
        <small>One-time &middot; certificate included</small>
      </div>
      <div class="ac-body">
        <ul class="ticks">
          <li>Focused 5-week track</li>
          <li>Live online cohort</li>
          <li>Live Q&amp;A sessions</li>
          <li>Business templates</li>
          <li>Certificate included</li>
        </ul>
        <a class="btn btn-primary btn-block btn-lg" href="../enroll.html?course=${t.slug}">Enroll now</a>
        <a class="btn btn-ghost btn-block" href="https://wa.me/${WA}" style="margin-top:10px">Chat with us</a>
      </div>
    </div>
  </aside>
</div>
</div>

<section class="soft-bg">
<div class="container">
  <div class="section-head"><span class="eyebrow">Other tracks</span><h2>Explore related tracks</h2></div>
  <div class="grid grid-3">${related}</div>
  <div style="margin-top:30px"><a class="btn btn-blue" href="../tracks.html">See all six tracks &rarr;</a></div>
</div>
</section>`;

  const courseLD = {
    "@context":"https://schema.org","@type":"Course",
    name:t.name+" — Business Track",
    description:t.short,
    url:`${SITE}/courses/${t.slug}.html`,
    provider:{"@id":SITE+"/#org"},
    courseMode:["online"],
    timeRequired:"P5W",
    offers:{"@type":"Offer",price:"35000",priceCurrency:"NGN",
      availability:"https://schema.org/InStock",url:`${SITE}/enroll.html?course=${t.slug}`}
  };
  const crumbLD = {
    "@context":"https://schema.org","@type":"BreadcrumbList",
    itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:SITE+"/"},
      {"@type":"ListItem",position:2,name:"Tracks",item:SITE+"/tracks.html"},
      {"@type":"ListItem",position:3,name:t.name,item:`${SITE}/courses/${t.slug}.html`}
    ]
  };
  const faqLD = {
    "@context":"https://schema.org","@type":"FAQPage",
    mainEntity:t.faqs.map(([q,a])=>({"@type":"Question",name:q,
      acceptedAnswer:{"@type":"Answer",text:a}}))
  };

  // title — keep under 62
  const fullT = `${t.heroKw} | VAA Business School`;
  const shortN = t.name.replace(" Business","").replace(" & Agro-Processing","").replace(" & Tech Repairs","");
  const title  = fullT.length<=62 ? fullT : `${shortN} Business Track Nigeria | VAA Business School`.slice(0,62);

  writeTrack(t.slug, page({
    path:`courses/${t.slug}.html`, depth:1,
    title, ogType:"article",
    desc:(()=>{const r=t.short.slice(0,80)+"... Pricing, clients, marketing and money management. Taught online."; return r.length>158?r.slice(0,155)+"...":r;})(),
    kw:`${t.name.toLowerCase()} business Nigeria, ${t.heroKw.toLowerCase()}, trade business course Nigeria`,
    body,
    jsonld:[courseLD,crumbLD,faqLD]
  }));
}

/* =====================================================================  SITEMAP / ROBOTS */
function buildMeta(){
  const today = new Date().toISOString().slice(0,10);
  const tops = ["","tracks.html","about.html","pricing.html","enroll.html",
                "faq.html","contact.html","blog.html","referral.html"];
  const urls = tops.map(u=>`  <url><loc>${SITE}/${u}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${u===''?'1.0':'0.8'}</priority></url>`);
  TRACKS.forEach(t=>urls.push(`  <url><loc>${SITE}/courses/${t.slug}.html</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>`));
  POSTS.forEach(p=>urls.push(`  <url><loc>${SITE}/blog/${p.slug}.html</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`));
  write("sitemap.xml",`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`);
  write("robots.txt",`User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
  write("README.md",`# VAA Global Business School for Artisans\n\nStatic site — drop the folder onto Vercel, Netlify or any host.\n\n## Before going live\nOpen \`assets/js/main.js\` and set:\n1. \`VAA.PAYSTACK_PUBLIC_KEY\` — your live \`pk_live_...\` key\n2. \`VAA.APPS_SCRIPT_URL\` — your Google Apps Script endpoint\n\nBlog pages in \`/blog/\` are stubs — write the articles and deploy.\n`);
}

/* =====================================================================  RUN */
console.log("Building VAA Global Business School for Artisans (new business-tracks model)...");
buildIndex();
buildTracks();
buildAbout();
buildPricing();
buildEnroll();
buildFaq();
buildContact();
buildBlog();
buildReferral();
console.log("Building 6 track pages...");
TRACKS.forEach(buildTrackPage);
buildMeta();
console.log("Done.");
