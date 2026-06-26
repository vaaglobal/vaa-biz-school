/* =====================================================================
   VAA GLOBAL VOCATIONAL SCHOOL — client runtime
   ===================================================================== */
(function(){
  "use strict";

  /* ---- config (edit these for production) ---- */
  window.VAA = window.VAA || {};
  VAA.PRICE_NAIRA = 25750;
  VAA.PRICE_KOBO = VAA.PRICE_NAIRA * 100;
  VAA.PAYSTACK_PUBLIC_KEY = "pk_live_REPLACE_WITH_YOUR_PAYSTACK_PUBLIC_KEY";
  // Google Apps Script web-app URL that records enrolments / leads / referrers:
  VAA.APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxag8tKFw3Re89sq3-68wUmKqH82jZczN_3-fAOncaAe9OqlGlXP-bERhlyjiHlgm8BMA/exec";
  VAA.WHATSAPP = "2349025367017";

  /* ---- mobile nav ---- */
  function initNav(){
    var toggle   = document.querySelector(".nav-toggle");
    var links    = document.querySelector(".nav-links");
    var closeBtn = document.querySelector(".nav-close");
    var backdrop = document.querySelector(".nav-backdrop");
    if(!toggle || !links) return;

    function openNav(){
      links.classList.add("open");
      if(backdrop) backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
      toggle.setAttribute("aria-expanded","true");
    }
    function closeNav(){
      links.classList.remove("open");
      if(backdrop) backdrop.classList.remove("open");
      document.body.style.overflow = "";
      toggle.setAttribute("aria-expanded","false");
    }

    toggle.addEventListener("click", function(){
      links.classList.contains("open") ? closeNav() : openNav();
    });
    if(closeBtn) closeBtn.addEventListener("click", closeNav);
    if(backdrop) backdrop.addEventListener("click", closeNav);

    // close on link click
    links.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", closeNav);
    });
  }

  /* ---- reveal on scroll ---- */
  function initReveal(){
    var els = document.querySelectorAll(".reveal");
    if(!("IntersectionObserver" in window) || !els.length){
      els.forEach(function(e){ e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
      });
    },{threshold:.12});
    els.forEach(function(e){ io.observe(e); });
  }

  /* ---- toast ---- */
  function toast(msg){
    var t = document.createElement("div");
    t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(function(){ t.classList.add("show"); });
    setTimeout(function(){ t.classList.remove("show"); setTimeout(function(){ t.remove(); },400); }, 3200);
  }
  VAA.toast = toast;

  /* ---- generic lead post (newsletter, contact, referral) ----
     Posts to Apps Script if configured; always gives the user feedback. */
  function postLead(payload){
    if(!VAA.APPS_SCRIPT_URL || VAA.APPS_SCRIPT_URL.indexOf("REPLACE_WITH") > -1){
      return Promise.resolve({ok:true, mocked:true});
    }
    return fetch(VAA.APPS_SCRIPT_URL, {
      method:"POST", mode:"no-cors",
      headers:{"Content-Type":"text/plain;charset=utf-8"},
      body:JSON.stringify(payload)
    }).then(function(){ return {ok:true}; }).catch(function(){ return {ok:false}; });
  }
  VAA.postLead = postLead;

  /* ---- simple forms (data-form="type") ---- */
  function initForms(){
    document.querySelectorAll("form[data-form]").forEach(function(form){
      form.addEventListener("submit", function(e){
        e.preventDefault();
        var type = form.getAttribute("data-form");
        var data = {}; new FormData(form).forEach(function(v,k){ data[k]=v; });
        data.type = type; data.page = location.pathname; data.ts = new Date().toISOString();
        var btn = form.querySelector("[type=submit]");
        if(btn){ btn.disabled = true; btn.dataset._t = btn.textContent; btn.textContent = "Sending..."; }
        postLead(data).then(function(){
          form.reset();
          if(btn){ btn.disabled=false; btn.textContent = btn.dataset._t; }
          var msg = type==="subscribe"  ? "Subscribed. Watch your inbox."
                  : type==="referral"   ? "Request received. We will send your code shortly."
                  : type==="contact"    ? "Message sent. Our team will reach out soon."
                  : "Done. Our team will reach out soon.";
          toast(msg);
        });
      });
    });
  }

  /* ---- Mini-MBA enrolment form (on mini-mba page) ---- */
  function initMBAForm(){
    var form    = document.getElementById("mbaEnrollForm");
    if(!form) return;
    var btn     = document.getElementById("mbaPayBtn");
    var success = document.getElementById("mbaSuccessBox");
    var planSel = document.getElementById("mba-plan");
    var disp    = document.getElementById("mbaAmountDisplay");
    var lbl     = document.getElementById("mbaPlanLabel");
    var amt     = document.getElementById("mbaPriceAmt");

    if(planSel){
      planSel.addEventListener("change", function(){
        var opt   = planSel.options[planSel.selectedIndex];
        var price = opt ? opt.getAttribute("data-price") : null;
        if(price){
          if(lbl) lbl.textContent = planSel.options[planSel.selectedIndex].textContent.split("—")[0].trim();
          if(amt) amt.textContent = "\u20a6" + Number(price).toLocaleString();
          if(disp) disp.style.display = "block";
          if(btn){ btn.disabled = false; btn.textContent = "Submit application — \u20a6" + Number(price).toLocaleString(); }
        } else {
          if(disp) disp.style.display = "none";
          if(btn){ btn.disabled = true; btn.textContent = "Select a payment plan above"; }
        }
      });
    }

    form.addEventListener("submit", function(e){
      e.preventDefault();
      var name  = (document.getElementById("mba-name")  || {}).value || "";
      var phone = (document.getElementById("mba-phone") || {}).value || "";
      var email = (document.getElementById("mba-email") || {}).value || "";
      var plan  = planSel ? planSel.value : "";
      var ref   = (document.getElementById("mba-ref")   || {}).value || "";

      if(!name.trim() || !phone.trim() || !email.trim() || !plan){
        alert("Please fill in all required fields and choose a payment plan.");
        return;
      }

      var opt   = planSel ? planSel.options[planSel.selectedIndex] : null;
      var price = opt ? Number(opt.getAttribute("data-price")) : 225000;
      var kobo  = price * 100;

      var payload = {
        type:"mini-mba", fullname:name, email:email, phone:phone,
        plan:plan, refcode:ref, ts:new Date().toISOString()
      };

      var noKey = !VAA.PAYSTACK_PUBLIC_KEY || VAA.PAYSTACK_PUBLIC_KEY.indexOf("REPLACE_WITH") > -1;
      if(noKey || typeof PaystackPop === "undefined"){
        postLead(payload);
        if(form) form.style.display = "none";
        if(success) success.style.display = "block";
        return;
      }

      var handler = PaystackPop.setup({
        key: VAA.PAYSTACK_PUBLIC_KEY,
        email: email,
        amount: kobo,
        currency: "NGN",
        ref: "MBA-" + Date.now(),
        metadata:{ custom_fields:[
          {display_name:"Full Name",  variable_name:"fullname", value:name},
          {display_name:"Phone",      variable_name:"phone",    value:phone},
          {display_name:"Program",    variable_name:"program",  value:"VAA Mini-MBA"},
          {display_name:"Plan",       variable_name:"plan",     value:plan}
        ]},
        callback: function(res){
          payload.ref = res.reference; payload.status = "paid";
          postLead(payload);
          if(form) form.style.display = "none";
          if(success) success.style.display = "block";
        },
        onClose: function(){}
      });
      handler.openIframe();
    });
  }

  /* ---- catalog search (courses.html) ---- */
  function initCatalogSearch(){
    var input = document.getElementById("courseSearch");
    if(!input) return;
    var rows = Array.prototype.slice.call(document.querySelectorAll(".course-row"));
    var depts = Array.prototype.slice.call(document.querySelectorAll(".dept"));
    var counter = document.getElementById("searchCount");
    input.addEventListener("input", function(){
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      rows.forEach(function(r){
        var hit = r.getAttribute("data-search").indexOf(q) > -1;
        r.classList.toggle("hide", q && !hit);
        if(!q || hit) shown++;
      });
      depts.forEach(function(d){
        var anyVisible = d.querySelectorAll(".course-row:not(.hide)").length > 0;
        d.classList.toggle("hide", !anyVisible);
      });
      if(counter) counter.textContent = q ? (shown+" course"+(shown===1?"":"s")+" found") : "";
    });
  }

  /* ---- enrollment page ---- */
  function initEnroll(){
    var form = document.getElementById("enrollForm");
    if(!form) return;
    var sel  = document.getElementById("courseSelect");
    var btn  = document.getElementById("payBtn");
    var disp = document.getElementById("priceDisplay");
    var lbl  = document.getElementById("priceLabel");
    var amt  = document.getElementById("priceAmount");

    // DO NOT re-populate — options are already in the HTML as optgroups
    // Just handle preselect from ?course= param
    var pre = new URLSearchParams(location.search).get("course");
    if(pre && sel){ sel.value = pre; updatePrice(); }

    // Prefill referral code from ?ref=
    var ref = new URLSearchParams(location.search).get("ref");
    var refField = document.getElementById("refCode");
    if(ref && refField){ refField.value = ref; }

    // Dynamic price display when selection changes
    function updatePrice(){
      var opt = sel.options[sel.selectedIndex];
      var price = opt ? opt.getAttribute("data-price") : null;
      if(price){
        var isMBA = sel.value === "mini-mba";
        lbl.textContent = isMBA ? "3-Month Mini-MBA" : "5-Week Business Track";
        amt.textContent = "₦" + Number(price).toLocaleString();
        disp.style.display = "block";
        btn.disabled = false;
        btn.textContent = "Submit application — ₦" + Number(price).toLocaleString();
        VAA.PRICE_KOBO = Number(price) * 100;
      } else {
        disp.style.display = "none";
        btn.disabled = true;
        btn.textContent = "Select a program above";
        VAA.PRICE_KOBO = VAA.PRICE_NAIRA * 100;
      }
    }

    if(sel){ sel.addEventListener("change", updatePrice); }

    form.addEventListener("submit", function(e){
      e.preventDefault();
      var data = {}; new FormData(form).forEach(function(v,k){ data[k]=v; });
      if(!data.fullname || !data.email || !data.phone || !data.course){
        toast("Please fill in your name, email, phone and choose a program."); return;
      }
      startPayment(data);
    });
  }

  function startPayment(data){
    var sel = document.getElementById("courseSelect");
    var opt = sel ? sel.options[sel.selectedIndex] : null;
    var price = opt ? Number(opt.getAttribute("data-price")) : VAA.PRICE_NAIRA;
    var kobo  = price * 100;
    var courseName = opt ? opt.textContent.replace(/\s*—.*/, "").trim() : data.course;
    var meta = {
      custom_fields:[
        {display_name:"Full Name", variable_name:"fullname", value:data.fullname},
        {display_name:"Phone", variable_name:"phone", value:data.phone},
        {display_name:"Course", variable_name:"course", value:courseName},
        {display_name:"Referral Code", variable_name:"ref", value:data.refcode||"none"}
      ]
    };
    var noKey = !VAA.PAYSTACK_PUBLIC_KEY || VAA.PAYSTACK_PUBLIC_KEY.indexOf("REPLACE_WITH")>-1;
    if(noKey || typeof PaystackPop === "undefined"){
      postLead(Object.assign({type:"enroll", course:courseName, status:"pending_payment"}, data));
      var box = document.getElementById("successBox");
      var ref = document.getElementById("payRef");
      if(ref) ref.textContent = "APP-" + Date.now();
      if(box){ box.classList.remove("hide"); box.scrollIntoView({behavior:"smooth"}); }
      document.getElementById("enrollForm").classList.add("hide");
      return;
    }
    var handler = PaystackPop.setup({
      key: VAA.PAYSTACK_PUBLIC_KEY,
      email: data.email,
      amount: kobo,
      currency: "NGN",
      metadata: meta,
      callback: function(res){
        postLead(Object.assign({type:"enroll", course:courseName, status:"paid", reference:res.reference}, data));
        window.location.href = "enroll.html?status=success&ref="+encodeURIComponent(res.reference);
      },
      onClose: function(){ toast("Payment window closed. You can try again anytime."); }
    });
    handler.openIframe();
  }

  /* ---- success banner on enroll page (Paystack redirect only) ---- */
  function initSuccess(){
    var p = new URLSearchParams(location.search);
    if(p.get("status")==="success"){
      // Show paid confirmation box, hide bank transfer box
      var boxPaid = document.getElementById("successBoxPaid");
      if(boxPaid){
        boxPaid.classList.remove("hide");
        var r = document.getElementById("payRefPaid");
        if(r) r.textContent = p.get("ref")||"";
        boxPaid.scrollIntoView({behavior:"smooth"});
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function(){
    initNav(); initReveal(); initForms();
    initCatalogSearch(); initEnroll(); initMBAForm(); initSuccess();
  });
})();
