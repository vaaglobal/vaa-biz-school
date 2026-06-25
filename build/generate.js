"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const COURSES_DIR = path.join(ROOT, "courses");

/* load track data */
const dataSrc = fs.readFileSync(path.join(ROOT, "assets/js/courses-data.js"), "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dataSrc, sandbox);
const TRACKS = sandbox.window.VAA_TRACKS;

/* constants */
const SITE  = "https://biz.vaaglobal.tech";
const BRAND = "VAA Global Business School for Artisans";
const SHORT = "VAA Business School";
const PRICE = "&#8358;35,000";
const PRICE_PLAIN = "₦35,000";
const WA    = "2349025367017";
const WAD   = "0902 536 7017";
const EMAIL = "support@vaaglobal.tech";
const OG    = SITE + "/assets/img/og-default.png";

const esc     = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const jsonld  = o => `<script type="application/ld+json">${JSON.stringify(o,null,0)}</script>`;

const NAV = [["index.html","Home"],["tracks.html","Tracks"],["mini-mba.html","Mini-MBA"],
             ["pricing.html","Pricing"],["faq.html","FAQ"],["contact.html","Contact"]];

const ORG_LD = {
  "@context":"https://schema.org","@type":"EducationalOrganization",
  "@id":SITE+"/#org", name:BRAND, url:SITE,
  description:"Business school for Nigerian artisans. Mini-MBA-style training covering branding, pricing, marketing, client management and money management. You have the skill — we help you build the business and brand around it.",
  email:EMAIL, telephone:"+234-902-536-7017",
  address:{"@type":"PostalAddress",addressLocality:"Lagos",addressCountry:"NG"},
  areaServed:{"@type":"Country",name:"Nigeria"},
  sameAs:["https://instagram.com/vaa_global","https://x.com/vaa_global"],
  parentOrganization:{"@type":"Organization",name:"VAA Global Tech Hub",url:"https://vaaglobal.tech"}
};

function head(o){
  const rel = o.depth ? "../" : "";
  const canon = SITE+"/"+(o.path||"");
  const ogImg = o.og || OG;
  const lds = [ORG_LD].concat(o.jsonld||[]);
  return `<!doctype html>
<html lang="en-NG">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.desc)}">
<link rel="canonical" href="${canon}">
<meta name="keywords" content="${esc(o.kw||"business skills for artisans Nigeria, how to grow trade business Nigeria, artisan marketing Nigeria")}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<meta name="author" content="${BRAND}">
<meta name="geo.region" content="NG-LA">
<meta name="geo.placename" content="Lagos, Nigeria">
<meta property="og:type" content="${o.ogType||"website"}">
<meta property="og:site_name" content="${BRAND}">
<meta property="og:locale" content="en_NG">
<meta property="og:title" content="${esc(o.title)}">
<meta property="og:description" content="${esc(o.desc)}">
<meta property="og:url" content="${canon}">
<meta property="og:image" content="${ogImg}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@vaa_global">
<meta name="twitter:title" content="${esc(o.title)}">
<meta name="twitter:description" content="${esc(o.desc)}">
<meta name="twitter:image" content="${ogImg}">
<meta name="theme-color" content="#000000">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="sitemap" type="application/xml" href="${rel}sitemap.xml">
<link rel="stylesheet" href="${rel}assets/css/styles.css">
${lds.map(jsonld).join("\n")}
</head><body>`;
}

function header(o){
  const rel = o.depth ? "../" : "";
  const links = NAV.map(([h,l])=>`<li><a href="${rel}${h}">${l}</a></li>`).join("");
  return `<header class="nav">
<div class="container nav-inner">
  <a class="brand" href="${rel}index.html" aria-label="${BRAND}">
    <img src="${rel}assets/img/vaa-logo.png" alt="VAA Global" class="nav-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <span class="brand-fallback" style="display:none">
      <span class="brand-mark">V</span>
      <span class="brand-txt"><b>VAA GLOBAL</b><span>Business School</span></span>
    </span>
  </a>
  <button class="nav-toggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
  <nav><ul class="nav-links">${links}</ul></nav>
  <div class="nav-cta"><a class="btn btn-primary nav-enroll" href="${rel}enroll.html">Enroll now</a></div>
</div>
</header>`;
}

function footer(o){
  const rel = o.depth ? "../" : "";
  const yr  = new Date().getFullYear();
  return `<footer class="footer">
<div class="container">
  <div class="footer-grid">
    <div class="f-brand">
      <a class="brand" href="${rel}index.html">
        <span class="brand-mark">V</span>
        <img src="${rel}assets/img/vaa-logo.png" alt="VAA Global" class="nav-logo footer-logo" onerror="this.style.display='none'">
        <span class="brand-txt"><b style="color:#fff">VAA GLOBAL</b><span>Business School</span></span>
      </a>
      <p style="margin-top:14px">You have the skill. We help you build the business and brand around it. Mini-MBA-style training for Nigerian artisans.</p>
      <div class="socials">
        <a href="https://wa.me/${WA}" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.5-1.2-2.9 0-1.4.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.5.1.3.7 1.1 1.4 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.5-.1l1.8.9c.2.1.4.2.4.3.1.1.1.6-.1 1.2Z"/></svg></a>
        <a href="https://instagram.com/vaa_global" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.1 3.3c0 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2 0 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-3.3s0-2.1-.1-3.3c0-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.3-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z"/></svg></a>
        <a href="https://x.com/vaa_global" aria-label="X"><svg viewBox="0 0 24 24"><path d="M18.2 2.5h3.3l-7.2 8.2 8.5 11.3h-6.6l-5.2-6.8-6 6.8H1.7l7.7-8.8L1.3 2.5H8l4.7 6.2 5.5-6.2Zm-1.2 17.6h1.8L7.1 4.3H5.2l11.8 15.8Z"/></svg></a>
      </div>
    </div>
    <div>
      <h5>Tracks</h5>
      ${TRACKS.map(t=>`<a href="${rel}courses/${t.slug}.html">${esc(t.name)}</a>`).join("")}
    </div>
    <div>
      <h5>School</h5>
      <a href="${rel}about.html">About us</a>
      <a href="${rel}pricing.html">Pricing</a>
      <a href="${rel}faq.html">FAQ</a>
      <a href="${rel}contact.html">Contact</a>
      <a href="${rel}blog.html">Resources</a>
      <a href="${rel}referral.html">Referral program</a>
    </div>
    <div>
      <h5>Get in touch</h5>
      <a href="https://wa.me/${WA}">WhatsApp ${WAD}</a>
      <a href="mailto:${EMAIL}">${EMAIL}</a>
      <form data-form="subscribe" style="margin-top:14px">
        <input type="email" name="email" placeholder="Email for updates" required>
        <button type="submit">Join</button>
      </form>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; ${yr} ${BRAND}. A division of VAA Global Tech Hub.</span>
    <span class="tagline">YOUR SKILL. YOUR BRAND. YOUR BUSINESS.</span>
  </div>
</div>
</footer>`;
}

function scripts(o){
  const rel = o.depth ? "../" : "";
  const ps  = o.paystack ? `<script src="https://js.paystack.co/v1/inline.js"></script>\n` : "";
  return `${ps}<script src="${rel}assets/js/courses-data.js"></script>
<script src="${rel}assets/js/main.js"></script>
</body></html>`;
}

function page(o){
  if(o.crumb && !o.depth){
    const bl = {"@context":"https://schema.org","@type":"BreadcrumbList",
      itemListElement:[
        {"@type":"ListItem",position:1,name:"Home",item:SITE+"/"},
        {"@type":"ListItem",position:2,name:o.crumb,item:SITE+"/"+o.path}
      ]};
    o.jsonld = (o.jsonld||[]).concat([bl]);
  }
  return head(o)+"\n"+header(o)+"\n"+o.body+"\n"+footer(o)+"\n"+scripts(o);
}

function write(file, html){ fs.writeFileSync(path.join(ROOT,file),html,"utf8"); console.log("  wrote",file); }
function writeTrack(slug,html){ fs.writeFileSync(path.join(COURSES_DIR,slug+".html"),html,"utf8"); }

module.exports = { TRACKS,SITE,BRAND,SHORT,PRICE,PRICE_PLAIN,WA,WAD,EMAIL,OG,
  esc,jsonld,page,write,writeTrack,head,header,footer,scripts };

require("./pages.js");
