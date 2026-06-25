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
  VAA.APPS_SCRIPT_URL = "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT/exec";
  VAA.WHATSAPP = "2349025367017";

  /* ---- mobile nav ---- */
  function initNav(){
    var t = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if(!t || !links) return;
    t.addEventListener("click", function(){
      links.classList.toggle("open");
      var open = links.classList.contains("open");
      t.setAttribute("aria-expanded", open ? "true":"false");
    });
    links.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){ links.classList.remove("open"); });
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
          var msg = type==="subscribe" ? "Subscribed. Watch your inbox for new tracks."
                  : type==="referral" ? "Referral request received. We'll send your code shortly."
                  : "Message sent. Our team will reach out soon.";
          toast(msg);
        });
      });
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
    var sel = document.getElementById("courseSelect");
    // populate course dropdown from data
    if(sel && window.VAA_COURSES){
      var byDept = {};
      window.VAA_COURSES.forEach(function(c){ (byDept[c.dept]=byDept[c.dept]||[]).push(c); });
      Object.keys(byDept).forEach(function(d){
        var og = document.createElement("optgroup"); og.label = d;
        byDept[d].forEach(function(c){
          var o = document.createElement("option"); o.value = c.slug; o.textContent = c.name; og.appendChild(o);
        });
        sel.appendChild(og);
      });
    }
    // preselect from ?course=slug
    var pre = new URLSearchParams(location.search).get("course");
    if(pre && sel){ sel.value = pre; }
    // prefill referral from ?ref=
    var ref = new URLSearchParams(location.search).get("ref");
    var refField = document.getElementById("refCode");
    if(ref && refField){ refField.value = ref; }

    form.addEventListener("submit", function(e){
      e.preventDefault();
      var data = {}; new FormData(form).forEach(function(v,k){ data[k]=v; });
      if(!data.fullname || !data.email || !data.phone || !data.course){
        toast("Please fill in your name, email, phone and course."); return;
      }
      startPayment(data);
    });
  }

  function startPayment(data){
    var courseName = "";
    if(window.VAA_COURSES){
      var c = window.VAA_COURSES.find(function(x){ return x.slug===data.course; });
      courseName = c ? c.name : data.course;
    }
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
      // Demo / not-configured fallback: record the lead and confirm.
      postLead(Object.assign({type:"enroll", course:courseName, status:"pending_payment"}, data));
      toast("Demo mode: add your Paystack key to take live payments.");
      console.info("[VAA] Enrolment captured (demo):", data);
      return;
    }
    var handler = PaystackPop.setup({
      key: VAA.PAYSTACK_PUBLIC_KEY,
      email: data.email,
      amount: VAA.PRICE_KOBO,
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

  /* ---- success banner on enroll page ---- */
  function initSuccess(){
    var p = new URLSearchParams(location.search);
    if(p.get("status")==="success"){
      var box = document.getElementById("successBox");
      if(box){
        box.classList.remove("hide");
        var r = document.getElementById("payRef");
        if(r) r.textContent = p.get("ref")||"";
        box.scrollIntoView({behavior:"smooth"});
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function(){
    initNav(); initReveal(); initForms();
    initCatalogSearch(); initEnroll(); initSuccess();
  });
})();
