
const translations = {
  en:{navAbout:"ABOUT",navAreas:"BUSINESS AREAS",navOffers:"OFFERS",navPartner:"PARTNERS",navContact:"CONTACT",
      homeEyebrow:"INTERNATIONAL TRADING COMPANY",heroTitle:"CONNECTING",heroSub:"BUSINESSES WORLDWIDE",
      heroLead:"FIDDEXA connects businesses, markets and opportunities through international trade, sourcing and strategic partnerships.",
      points:["PEOPLE","MARKETS","OPPORTUNITIES"],whoKicker:"WHO WE ARE",whoTitle:"BRIDGING MARKETS. BUILDING OPPORTUNITIES.",
      whoText:"We work across markets to connect reliable partners, commercial opportunities and practical solutions. Our approach is built around communication, transparency and long-term cooperation.",
      areasKicker:"OUR DIRECTIONS",areasTitle:"BUSINESS AREAS",approachKicker:"OUR APPROACH",approachTitle:"GLOBAL MINDSET. REAL RESULTS.",
      reachKicker:"GLOBAL REACH",reachTitle:"DIFFERENT MARKETS. ONE VISION. A BETTER TOMORROW.",
      ctaTitle:"LET’S BUILD A STRONGER TOMORROW.",ctaText:"For business inquiries, sourcing requests and partnership proposals.",ctaButton:"BECOME A PARTNER",
      aboutTitle:"WHO WE ARE",aboutLead:"FIDDEXA is an international trading company focused on connecting businesses, markets and opportunities.",
      mission:"Our mission",missionText:"To create practical connections between suppliers, buyers and business partners across international markets.",
      vision:"Our vision",visionText:"A trusted international business network built on relationships, transparency and mutual growth.",
      values:"Our values",partnerTitle:"BUILD WITH US",partnerLead:"Tell us about your company, market or opportunity and our team will review your request.",
      offersTitle:"OUR OFFERS",offersLead:"Selected international trade opportunities and sourcing directions.",
      partnerPageTitle:"BECOME A PARTNER",partnerPageLead:"We welcome companies, distributors, suppliers, buyers and strategic partners.",
      formType:"ENTITY TYPE",formCountry:"COUNTRY",formContact:"CONTACT",formMessage:"QUESTION OR PROPOSAL",formSend:"SEND REQUEST",
      formNote:"Your information is used only to review your business inquiry.",footer:"CONNECTING BUSINESSES WORLDWIDE"},
  ru:{navAbout:"О КОМПАНИИ",navAreas:"НАШИ НАПРАВЛЕНИЯ",navOffers:"ПРЕДЛОЖЕНИЯ",navPartner:"ПАРТНЁРЫ",navContact:"КОНТАКТЫ",
      homeEyebrow:"МЕЖДУНАРОДНАЯ ТОРГОВАЯ КОМПАНИЯ",heroTitle:"СОЕДИНЯЕМ",heroSub:"БИЗНЕС ПО ВСЕМУ МИРУ",
      heroLead:"FIDDEXA соединяет бизнес, рынки и возможности через международную торговлю, поиск поставщиков и стратегические партнёрства.",
      points:["ЛЮДИ","РЫНКИ","ВОЗМОЖНОСТИ"],whoKicker:"О КОМПАНИИ",whoTitle:"СОЕДИНЯЕМ РЫНКИ. СОЗДАЁМ ВОЗМОЖНОСТИ.",
      whoText:"Мы работаем с международными рынками, соединяя надёжных партнёров, коммерческие возможности и практические решения. В основе нашего подхода — коммуникация, прозрачность и долгосрочное сотрудничество.",
      areasKicker:"НАШИ НАПРАВЛЕНИЯ",areasTitle:"БИЗНЕС-НАПРАВЛЕНИЯ",approachKicker:"НАШ ПОДХОД",approachTitle:"ГЛОБАЛЬНОЕ МЫШЛЕНИЕ. РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ.",
      reachKicker:"ГЛОБАЛЬНЫЙ ОХВАТ",reachTitle:"РАЗНЫЕ РЫНКИ. ЕДИНАЯ ЦЕЛЬ. ЛУЧШЕЕ ЗАВТРА.",
      ctaTitle:"СОЗДАДИМ СИЛЬНОЕ ЗАВТРА ВМЕСТЕ.",ctaText:"По вопросам сотрудничества, поставок и партнёрства.",ctaButton:"СТАТЬ ПАРТНЁРОМ",
      aboutTitle:"О КОМПАНИИ",aboutLead:"FIDDEXA — международная торговая компания, соединяющая бизнес, рынки и возможности.",
      mission:"Наша миссия",missionText:"Создавать практические связи между поставщиками, покупателями и бизнес-партнёрами на международных рынках.",
      vision:"Наше видение",visionText:"Надёжная международная бизнес-сеть, основанная на отношениях, прозрачности и взаимном росте.",
      values:"Наши ценности",partnerTitle:"СТАНЬТЕ НАШИМ ПАРТНЁРОМ",partnerLead:"Расскажите о вашей компании, рынке или возможности — мы рассмотрим запрос.",
      offersTitle:"НАШИ ПРЕДЛОЖЕНИЯ",offersLead:"Международные торговые возможности и направления поиска.",
      partnerPageTitle:"СТАТЬ ПАРТНЁРОМ",partnerPageLead:"Мы открыты к сотрудничеству с компаниями, дистрибьюторами, поставщиками, покупателями и стратегическими партнёрами.",
      formType:"ТИП СУБЪЕКТА",formCountry:"СТРАНА",formContact:"КОНТАКТ",formMessage:"ВОПРОС ИЛИ ПРЕДЛОЖЕНИЕ",formSend:"ОТПРАВИТЬ ЗАПРОС",
      formNote:"Информация используется только для рассмотрения вашего делового запроса.",footer:"СОЕДИНЯЕМ БИЗНЕС ПО ВСЕМУ МИРУ"},
  zh:{navAbout:"关于我们",navAreas:"业务领域",navOffers:"商业机会",navPartner:"合作伙伴",navContact:"联系我们",
      homeEyebrow:"国际贸易公司",heroTitle:"连接",heroSub:"全球企业",heroLead:"FIDDEXA 通过国际贸易、全球采购和战略合作连接企业、市场与商业机会。",
      points:["人才","市场","机会"],whoKicker:"关于我们",whoTitle:"连接市场，创造机会。",whoText:"我们专注于国际市场合作，通过沟通、透明和长期合作连接可靠伙伴与商业机会。",
      areasKicker:"业务方向",areasTitle:"业务领域",approachKicker:"我们的方式",approachTitle:"全球视野，实际成果。",
      reachKicker:"全球业务",reachTitle:"不同市场，共同愿景，更好的未来。",ctaTitle:"共同创造更强的未来。",ctaText:"欢迎咨询国际贸易、采购与合作机会。",
      ctaButton:"成为合作伙伴",aboutTitle:"关于我们",aboutLead:"FIDDEXA 是一家连接企业、市场与机会的国际贸易公司。",
      mission:"我们的使命",missionText:"在全球市场中建立供应商、买家和商业伙伴之间的实际联系。",
      vision:"我们的愿景",visionText:"建立以信任、透明和共同发展为基础的国际商业网络。",
      values:"我们的价值观",partnerTitle:"与我们合作",partnerLead:"介绍您的公司、市场或商业机会，我们将审核您的请求。",
      offersTitle:"商业机会",offersLead:"国际贸易机会与采购方向。",
      partnerPageTitle:"成为合作伙伴",partnerPageLead:"欢迎企业、供应商、买家、分销商和战略合作伙伴。",
      formType:"主体类型",formCountry:"国家",formContact:"联系方式",formMessage:"问题或建议",formSend:"发送请求",
      formNote:"您的信息仅用于处理商务咨询。",footer:"连接全球企业"}
};

const areas = {
  en:["Petroleum Products","Agricultural Products","Metals","Precious Metals","Medical Products","International Trade"],
  ru:["Нефтепродукты","Сельскохозяйственная продукция","Металлы","Драгоценные металлы","Медицинская продукция","Международная торговля"],
  zh:["石油产品","农产品","金属","贵金属","医疗产品","国际贸易"]
};

function applyLanguage(lang){
  if(!translations[lang]) lang="en";
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[lang][key]!==undefined) el.textContent=translations[lang][key];
  });
  document.querySelectorAll("[data-area-list]").forEach(el=>{
    const list=areas[lang]||areas.en;
    el.innerHTML=list.map((x,i)=>`<div class="number-row"><span class="number">0${i+1}</span><div><h3>${x}</h3></div><span class="arrow">→</span></div>`).join("");
  });
  document.querySelectorAll("[data-lang-label]").forEach(el=>el.textContent=lang.toUpperCase());
  localStorage.setItem("fiddexa-lang",lang);
  document.querySelector(".lang-menu")?.classList.remove("show");
}

document.addEventListener("DOMContentLoaded",()=>{
  const saved=localStorage.getItem("fiddexa-lang")||"en";
  applyLanguage(saved);

  document.querySelector(".lang-btn")?.addEventListener("click",()=>{
    document.querySelector(".lang-menu")?.classList.toggle("show");
  });
  document.querySelectorAll("[data-lang]").forEach(btn=>{
    btn.addEventListener("click",()=>applyLanguage(btn.dataset.lang));
  });
  document.querySelector(".menu-btn")?.addEventListener("click",()=>{
    document.querySelector(".nav")?.classList.toggle("open");
  });
  document.addEventListener("click",(e)=>{
    if(!e.target.closest(".lang")) document.querySelector(".lang-menu")?.classList.remove("show");
  });
});
