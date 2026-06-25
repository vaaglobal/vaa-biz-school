"use strict";
/* =====================================================================
   VAA GLOBAL BUSINESS SCHOOL FOR ARTISANS
   Track data — 6 two-week focused business tracks
   Mini-MBA = all 6 topics in sequence + capstone (6 weeks total)
   ===================================================================== */
window.VAA_TRACKS = [
  {
    n:1, slug:"fashion-beauty-business",
    name:"Fashion & Beauty Business",
    emoji:"✂", deptSlug:"fashion-beauty",
    short:"For tailors, makeup artists, hair stylists, nail technicians and beauty therapists who want to build a brand and earn what they deserve.",
    heroKw:"How to grow your fashion or beauty business in Nigeria",
    audience:["Tailors and fashion designers","Makeup artists","Hair stylists and braiders","Nail technicians","Cosmetologists and skincare therapists"],
    painPoints:[
      "Customers always push your prices down and you end up accepting less than you should",
      "You have no clear brand — clients cannot explain why they should pick you over someone cheaper",
      "You rely on referrals and have no system to bring in new bookings consistently",
      "You cannot explain clearly what makes you different from the next tailor or makeup artist"
    ],
    modules:[
      { t:"WEEKS 1 & 2 — Brand, Pricing & Positioning", p:[
          "What a brand really is and why it determines what clients pay you",
          "Choosing your niche and standing out in a market full of tailors and makeup artists",
          "Creating your business name, logo and visual identity using free tools (Canva, Adobe Express)",
          "Writing a brand statement and Instagram bio clients actually remember",
          "How to calculate your real cost and add a genuine profit margin on top",
          "Setting a price list you can send to any client without apologising",
          "Packages vs per-service pricing — which earns you more and when",
          "How to respond confidently when a client says your price is too expensive"
        ]
      },
      { t:"WEEKS 3, 4 & 5 — Marketing, Clients & Money", p:[
          "What to post on Instagram and WhatsApp to convert followers into paying bookings",
          "How to run Instagram and Facebook ads on a small budget to reach local buyers",
          "Setting up your Google My Business profile so people find you when they search",
          "Local SEO basics — how to show up when someone searches for a tailor or makeup artist near them",
          "Building a simple booking system and deposit policy that protects your time",
          "How to follow up on leads and convert enquiries without sounding desperate",
          "Separating your business money from personal money from day one",
          "Simple record-keeping using free tools like Bumpa or Kippa"
        ]
      }
    ],
    outcomes:[
      "A clear brand identity — name, logo, colours and positioning — ready to use",
      "A confident price list and service packages built from your real costs",
      "A 30-day content plan and at least one live ad running",
      "A Google My Business profile live and collecting reviews",
      "A booking and deposit system so clients cannot cancel without notice",
      "A simple financial tracker showing your real weekly profit"
    ],
    faqs:[
      ["Do I need to be a professional before joining?","No. If you can already do the work — sew, do makeup, braid hair — this track is for you. You only need the skill. We build everything else in five weeks."],
      ["Will this work in my city outside Lagos?","Yes. Every strategy works across Nigeria. We include examples from Lagos, Abuja, Port Harcourt, Enugu and smaller markets."],
      ["How is this different from watching YouTube videos?","YouTube gives you random fragments. This is a structured five-week program with a clear sequence, weekly assignments and a peer community — so you finish with real deliverables, not just notes."]
    ]
  },
  {
    n:2, slug:"food-hospitality-business",
    name:"Food & Hospitality Business",
    emoji:"🍰", deptSlug:"food-hospitality",
    short:"For caterers, bakers, cake decorators, confectioners and food vendors who want to turn their food skill into a real, profitable business.",
    heroKw:"How to grow a food business in Nigeria",
    audience:["Caterers and home cooks selling food","Bakers and cake decorators","Confectioners and small chops vendors","Food vendors and home delivery businesses","Bartenders and event drink vendors"],
    painPoints:[
      "You price per piece and still barely break even after buying ingredients",
      "Orders flood in before events then disappear for weeks with nothing in between",
      "Customers place orders and pay late or cancel at the last minute",
      "You are doing everything yourself and cannot grow past a certain point"
    ],
    modules:[
      { t:"WEEKS 1 & 2 — Brand, Pricing & Packaging", p:[
          "Why two caterers with the same food charge very different prices — and what makes the difference",
          "Naming your food business, designing a simple logo and creating a brand look that stands out",
          "Packaging design that makes your product look premium even on a budget",
          "Cost-per-unit calculations for cakes, food pots and event packs the right way",
          "Adding overhead, labour and profit without guessing",
          "How to price seasonal products during high-demand periods like Christmas and Sallah",
          "Creating packages — corporate orders, event packages, weekly meal plans — that clients love",
          "Deposit policies and booking processes that protect you from last-minute cancellations"
        ]
      },
      { t:"WEEKS 3, 4 & 5 — Marketing, Clients & Money", p:[
          "Food photography on your phone — lighting, plating and angles that make people want to order",
          "What to post on Instagram and WhatsApp Stories to bring in consistent orders",
          "Running Instagram and Facebook ads to reach people planning events, parties and daily meals",
          "Setting up your Google My Business so nearby buyers find you when they search",
          "How to work with event planners, aso-ebi coordinators and corporate canteen managers",
          "Simple order tracking with free tools so you stop losing track of who owes what",
          "Tracking ingredient costs before and after market price changes",
          "Setting aside money for restocking without touching your business profit"
        ]
      }
    ],
    outcomes:[
      "A real cost-of-production sheet for your core products",
      "A brand identity — name, logo, packaging style — ready to use",
      "A content plan and at least one live ad running",
      "A Google Business profile live in your city",
      "A booking and deposit policy clients will respect",
      "A simple financial tracking system that shows your real profit"
    ],
    faqs:[
      ["I already have customers. Will this still help me?","Especially for you. Most food vendors with existing customers are underpricing, undercharging and overworking. Two weeks fixes that."],
      ["Is this for caterers or just bakers?","Both. The track covers the full food business space: catering, baking, confectionery, event drinks and home food delivery."],
      ["Do I need any equipment before starting?","No. The business modules work regardless of your current setup. We show you how to grow with what you have."]
    ]
  },
  {
    n:3, slug:"home-trades-business",
    name:"Home Trades Business",
    emoji:"🔧", deptSlug:"home-trades",
    short:"For electricians, plumbers, carpenters, painters, tilers and POP artisans who are skilled but struggling to build a steady, well-paying client base.",
    heroKw:"How to get more clients as an electrician plumber carpenter Nigeria",
    audience:["Electricians and electrical installers","Plumbers and pipe fitters","Carpenters and joiners","Painters, decorators and tilers","POP artisans and interior finishing specialists"],
    painPoints:[
      "You finish a big job then wait weeks with nothing lined up",
      "Clients treat you like a handyman and pay you accordingly",
      "You have no way to show past work or collect testimonials professionally",
      "You quote a price and they always say 'let me call another person first'"
    ],
    modules:[
      { t:"WEEKS 1 & 2 — Brand, Pricing & Portfolio", p:[
          "Why some tradespeople get called back and referred while others are forgotten — and how branding explains it",
          "Creating a professional business name, logo and visual identity using free tools",
          "How to present yourself professionally: branded quotes, business cards, even your uniform",
          "Photographing your work on a basic Android phone to build a convincing portfolio",
          "Building a portfolio that convinces new clients before you even arrive on site",
          "Labour, materials and markup — how to build a proper job quote",
          "When to charge a site inspection fee and how to explain it without losing the client",
          "Flat-rate vs per-day pricing and which makes you more money"
        ]
      },
      { t:"WEEKS 3, 4 & 5 — Marketing, Clients & Money", p:[
          "Setting up your Google My Business the right way so you show up when people search for your trade near them",
          "How Google Maps works for local tradespeople — the single best free tool you have",
          "Local SEO steps that put you above competitors in Google search at no cost",
          "Running Facebook and Instagram ads that reach homeowners and property managers in your area",
          "Working with estate managers, property developers and agents for steady repeat work",
          "Writing simple quotes and invoices that clients take seriously",
          "Taking deposits to protect your time and materials on every job",
          "Building a savings habit from every contract so slow months don't destroy you"
        ]
      }
    ],
    outcomes:[
      "A professional brand identity and a portfolio of past work that sells you",
      "A branded quote and invoice template ready to send on WhatsApp",
      "A Google My Business profile live and appearing in local search",
      "A pricing structure you can defend confidently to any client",
      "A deposit policy and booking process that filters out time-wasters",
      "A simple savings and money tracking system"
    ],
    faqs:[
      ["I work mostly through word of mouth. Do I need this?","Yes — referrals alone are unpredictable. Two weeks gives you a steady pipeline that does not dry up between jobs."],
      ["Will this work for all trades or just some?","It covers all home and construction trades: electrical, plumbing, carpentry, painting, tiling, POP and related finishing work."],
      ["I am not great with phones and online tools. Is this still for me?","Absolutely. Everything we teach works from a basic Android phone. No laptop required."]
    ]
  },
  {
    n:4, slug:"automotive-business",
    name:"Automotive & Tech Repairs Business",
    emoji:"🚗", deptSlug:"automotive",
    short:"For mechanics, auto electricians, phone and laptop repairers, panel beaters and detailers who want to stop trading time for too little money.",
    heroKw:"How to grow an auto repair or phone repair business Nigeria",
    audience:["Auto mechanics and technicians","Auto electricians","Panel beaters and spray painters","Phone and laptop repairers","Vehicle detailers and car wash operators"],
    painPoints:[
      "You spend all day in the workshop but your income does not reflect the hours",
      "Customers negotiate your labour fee down after the work is already done",
      "You fix a vehicle or phone, get paid once and never hear from that customer again",
      "You cannot explain your value to someone who knows nothing about engines or circuits"
    ],
    modules:[
      { t:"WEEKS 1 & 2 — Brand, Pricing & Workshop Identity", p:[
          "Why branded workshops charge more and get more referrals than unbranded ones",
          "Creating a business name, logo and visual identity for your workshop",
          "How to make your workshop look professional with signage, uniforms and branded receipts",
          "Writing a clear business description that tells customers exactly what you offer",
          "Diagnostic fees — how to charge before you even start the job",
          "Parts plus labour pricing that protects your profit margin every time",
          "How to communicate your value to a customer who only sees the end result",
          "Handling disputes professionally without losing the customer or your reputation"
        ]
      },
      { t:"WEEKS 3, 4 & 5 — Marketing, Clients & Money", p:[
          "Setting up Google My Business so vehicle owners and phone users find your workshop on Google Maps",
          "How Google reviews work and how to collect them so you rank above other workshops nearby",
          "Local SEO for mechanics and phone repairers — steps that bring in calls without spending money",
          "Running Facebook and Instagram ads to reach car owners and phone users in your city",
          "Turning one-time repair customers into regulars with a simple follow-up system",
          "Working with fleet operators, logistics companies and corporate clients for steady repeat work",
          "Tracking jobs, parts and payments without a complicated system",
          "Stocking spare parts smartly without tying up too much cash"
        ]
      }
    ],
    outcomes:[
      "A professional workshop brand identity ready to apply everywhere",
      "A diagnostic fee policy and invoice template ready to use",
      "A Google Maps listing that generates inbound calls",
      "A pricing structure for parts and labour that protects your margin",
      "A customer follow-up system that brings back past clients",
      "A simple job tracking and money management system"
    ],
    faqs:[
      ["This covers both auto mechanics and phone repairers?","Yes. The business principles are identical: undercharging, no repeat customer system, no marketing. The track applies to both."],
      ["I work alone from a roadside spot. Is this still for me?","Especially for you. The biggest gains often come from artisans who have real skills but no business structure. That is exactly who this track is for."],
      ["Do I need to be on social media?","It helps, but it is not the only strategy we teach. We cover offline referral systems, fleet partnerships and platform listings that work with or without social media."]
    ]
  },
  {
    n:5, slug:"agriculture-agro-business",
    name:"Agriculture & Agro-Processing Business",
    emoji:"🌱", deptSlug:"agriculture",
    short:"For poultry farmers, fish farmers, crop farmers, food processors and agro-entrepreneurs who produce well but struggle to sell at the right price.",
    heroKw:"How to sell farm produce and grow agribusiness in Nigeria",
    audience:["Poultry and fish farmers","Crop and vegetable farmers","Food processors and packagers","Mushroom and beekeeping farmers","Agro-entrepreneurs and rural producers"],
    painPoints:[
      "You produce well but sell cheaply to middlemen who make the real profit",
      "Your income is seasonal and you have no plan for off-season months",
      "You have no idea how to sell directly to restaurants, supermarkets or end buyers",
      "You produce more than the local market can absorb and cannot reach wider buyers"
    ],
    modules:[
      { t:"WEEKS 1 & 2 — Brand, Pricing & Value Addition", p:[
          "Why branded agro-products sell for more than unbranded ones — even when they are identical",
          "Naming your farm or product line and designing a simple label and logo",
          "Packaging that communicates quality and makes buyers trust your product before they taste it",
          "How to tell your farm story in a way that builds loyalty with buyers",
          "The difference between what you produce and what you actually profit",
          "Why the processing step is where agro wealth is created — and how to get there",
          "Cost-per-unit for farm produce and processed goods done correctly",
          "How to price above market rate by adding value through processing or better packaging"
        ]
      },
      { t:"WEEKS 3, 4 & 5 — Marketing, Buyers & Money", p:[
          "How to approach restaurants, hotels, supermarkets and food processors as direct buyers",
          "Running Facebook and Instagram ads to reach food businesses and households in your area",
          "Getting onto food delivery platforms and agro marketplaces in Nigeria",
          "Setting up a Google Business profile for your farm or agro-processing business",
          "Corporate supply deals — canteens, hotels and institutional buyers that give steady orders",
          "Farm records that tell you your real production cost every week",
          "Planning your planting or production cycle around market demand",
          "Cash flow for producers — managing the gap between producing and getting paid"
        ]
      }
    ],
    outcomes:[
      "A branded product with a label and packaging you can sell this week",
      "A direct buyer list of restaurants, vendors or supermarkets in your area",
      "A Google Business profile and at least one running ad",
      "A production cost calculator showing your real margin",
      "A direct sales system via WhatsApp and delivery",
      "A production and financial plan for the next harvest cycle"
    ],
    faqs:[
      ["I am a small-scale farmer. Is this too advanced for me?","No. We start where you are. The strategies scale from a backyard poultry setup to a mid-size commercial farm."],
      ["Does this cover both crop farming and animal farming?","Yes. The business principles apply across all agro-production: poultry, fish, crops, vegetables, honey, mushrooms and food processing."],
      ["What if I do not have fast internet?","You do not need fast internet. Materials are shared as files you can download and use offline between sessions."]
    ]
  },
  {
    n:6, slug:"creative-services-business",
    name:"Creative Services Business",
    emoji:"📷", deptSlug:"creative",
    short:"For photographers, videographers, graphic designers, screen printers and event decorators who are talented but not yet consistently profitable.",
    heroKw:"How to make money from photography or creative skills Nigeria",
    audience:["Photographers — portrait, event and product","Videographers and content creators","Graphic designers and illustrators","Event decorators and planners","Screen printers and custom apparel brands"],
    painPoints:[
      "You are doing free or cheap work and cannot seem to raise your prices",
      "Your work looks great but you have no consistent flow of paying clients",
      "You spend time on clients who pay late or want endless revisions for the same price",
      "You compare your prices to others online and always end up lowering yours"
    ],
    modules:[
      { t:"WEEKS 1 & 2 — Brand, Pricing & Positioning", p:[
          "Why talented creatives stay broke — the positioning problem and how to fix it",
          "Choosing a profitable niche: bridal, product, corporate, content creation",
          "Defining your visual style and brand voice so clients know exactly what you stand for",
          "Designing a simple logo, colour palette and portfolio layout that looks professional",
          "Writing a bio and service description that sells your value before clients see your work",
          "Day rates, package rates and project rates — which to use and when",
          "How to price bridal packages, corporate retainers and content shoots correctly",
          "Raising your prices without losing existing clients"
        ]
      },
      { t:"WEEKS 3, 4 & 5 — Marketing, Clients & Money", p:[
          "Using Instagram and TikTok as a booking tool, not just a display board",
          "How to run Instagram and Facebook ads on a small budget to reach event organisers, businesses and brides",
          "Google Ads basics — how to show up when someone searches for a photographer or designer in your city",
          "Setting up Google My Business so clients find you locally on Google Maps",
          "Local SEO — how to rank for searches like 'photographer in Lagos' or 'graphic designer in Abuja'",
          "A simple contract template that protects you from non-payers and scope creep",
          "Deposit policies and follow-up systems that filter out time-wasters",
          "How to save from every job and plan your financial year so January is never a disaster"
        ]
      }
    ],
    outcomes:[
      "A clear niche, brand identity and portfolio positioned at your right price point",
      "A package and price list for your services ready to send to any client",
      "A contract template and deposit policy that protects every job",
      "A 30-day Instagram content plan attracting your ideal clients",
      "A Google My Business profile and at least one ad running",
      "A financial tracking and savings habit from every job"
    ],
    faqs:[
      ["Is this just for photographers?","No. The track covers all creative service providers: photographers, videographers, graphic designers, event decorators, screen printers and content creators."],
      ["I have no clients yet. Can I still join?","Yes. The second week covers landing your first paying clients even with a thin portfolio."],
      ["How technical is this? I am not a business person.","Not technical at all. If you can send a WhatsApp message you can apply everything here."]
    ]
  }
];

window.VAA_COURSES = window.VAA_TRACKS;
