// =============================================================================
// RAHULX.COM — UPSC PREP DASHBOARD
// Full rapid-revision data set: Prelims (GS1 + CSAT), Mains GS I-IV, all 48
// optional subjects, Essay/Language/Interview, an evergreen current-affairs
// method, and study resources. Every topic below carries a real revision note
// (not placeholder text) and can be marked 'revised' — tracked in this browser
// via localStorage, which also drives the dashboard's stats and progress bars.
// =============================================================================
const appData = { sections: [
  {
    "id": "prelims",
    "title": "Prelims: GS Paper I & CSAT",
    "icon": "📝",
    "description": "The screening stage — 2 objective papers, only Paper I marks count toward the cut-off.",
    "categories": [
      {
        "name": "GS Paper I — Core Areas (200 Marks, 100 Qs)",
        "topics": [
          {
            "name": "Current Events (National & International)",
            "note": "Covers roughly the last 12–15 months. Prelims rarely asks pure trivia — it links current events to static topics (a scheme to its ministry/act, a summit to the organisation behind it). Track PIB and one quality daily editorial rather than memorising headlines."
          },
          {
            "name": "History of India & Indian National Movement",
            "note": "Ancient/medieval get a handful of questions; modern history (1857–1947) is the heavyweight. NCERT Class 8, 11 & 12 plus a standard text like Spectrum's 'A Brief History of Modern India' covers ~90% of what's asked."
          },
          {
            "name": "Indian & World Geography — Physical, Social, Economic",
            "note": "Physical geography (climate systems, ocean currents, soil types, biomes) and map-based location questions dominate. Pair NCERT geography with a physical atlas — you cannot revise geography without a map in front of you."
          },
          {
            "name": "Indian Polity & Governance — Constitution, Political System, Panchayati Raj",
            "note": "Historically the single highest-yield Prelims area. M. Laxmikanth's 'Indian Polity' is the de facto standard text; focus on Articles, Schedules, constitutional/statutory bodies, and recent amendments."
          },
          {
            "name": "Economic & Social Development — Sustainable Development, Poverty, Inclusion",
            "note": "Conceptual economics (inflation, fiscal policy, banking) plus government welfare schemes. The Economic Survey and Union Budget (released annually) refresh the data points examiners draw from."
          },
          {
            "name": "Environment, Ecology, Biodiversity & Climate Change",
            "note": "One of the fastest-growing weightage areas in the last decade. Expect questions on species (IUCN status), protected areas, international agreements (CBD, CITES, Ramsar, COP outcomes), and India's climate commitments."
          },
          {
            "name": "General Science",
            "note": "Pitched at NCERT Class 6–10 level, but increasingly asked through a current-affairs lens (a new vaccine, a space mission, a defence technology) rather than as pure textbook science."
          }
        ]
      },
      {
        "name": "CSAT — Paper II (200 Marks, Qualifying Only)",
        "topics": [
          {
            "name": "Comprehension",
            "note": "Passage-based questions testing whether you can extract the author's actual argument, not just keywords — practice under time pressure since this paper is long relative to the time given."
          },
          {
            "name": "Interpersonal & Communication Skills",
            "note": "Usually folded into comprehension and decision-making questions rather than tested as a standalone category."
          },
          {
            "name": "Logical Reasoning & Analytical Ability",
            "note": "Syllogisms, statement-conclusion, seating arrangements, and puzzles — the section most improved by structured daily practice."
          },
          {
            "name": "Decision Making & Problem Solving",
            "note": "Uniquely, some decision-making questions here have no single 'correct' answer key in the traditional sense and are scenario-judgment based — read UPSC's own past paper patterns rather than generic reasoning books alone."
          },
          {
            "name": "General Mental Ability",
            "note": "Basic aptitude: ratios, percentages, averages, time-speed-distance — Class 10 level maths, not competitive-exam-level maths."
          },
          {
            "name": "Basic Numeracy (Class X Level)",
            "note": "Numbers, orders of magnitude, and basic arithmetic — the goal is speed and accuracy, not advanced technique."
          },
          {
            "name": "Data Interpretation (Charts, Graphs, Tables)",
            "note": "Practice reading bar/line/pie charts quickly; most marks lost here are to slow reading, not wrong maths."
          },
          {
            "name": "The 33% Qualifying Threshold",
            "note": "CSAT marks don't count toward your Prelims merit rank — you only need 33% to qualify. Don't over-invest study time here at the expense of GS Paper I, which decides your actual cut-off."
          }
        ]
      }
    ]
  },
  {
    "id": "constitution",
    "title": "Indian Constitution",
    "icon": "⚖️",
    "description": "The single highest-yield static topic across Prelims, GS Paper II, and often the interview.",
    "categories": [
      {
        "name": "Constitutional Articles (By Range)",
        "topics": [
          {
            "name": "Articles 1–50: The Union and Its Territory",
            "note": "Includes Article 1 (India as a 'Union of States'), citizenship provisions (Art. 5-11), and the Fundamental Rights block (Art. 12-35) — the most heavily tested range in this group."
          },
          {
            "name": "Articles 51–100: Union Executive",
            "note": "Directive Principles (Art. 36-51) transition into the President, Vice-President, Council of Ministers, and Parliament's composition and procedure."
          },
          {
            "name": "Articles 101–150: State Executive",
            "note": "Parliamentary procedure continues, then the Governor, State Council of Ministers, and State Legislature provisions mirror the Union structure."
          },
          {
            "name": "Articles 151–200: Union–State Relations",
            "note": "Comptroller and Auditor General, State legislatures' powers, and the start of Centre-State legislative relations (List I/II/III groundwork)."
          },
          {
            "name": "Articles 201–250: Finance and Trade",
            "note": "President's assent to state bills, financial procedure (money bills, Consolidated Fund), and freedom of trade/commerce across state lines."
          },
          {
            "name": "Articles 251–300: Services",
            "note": "Union-State legislative conflict resolution, All-India Services, Public Service Commissions, and property-related provisions."
          },
          {
            "name": "Articles 301–395: Special Provisions",
            "note": "Trade & commerce freedoms, Emergency Provisions (Art. 352, 356, 360 — a perennial favourite), and miscellaneous/temporary/transitional provisions."
          }
        ]
      },
      {
        "name": "Amendments",
        "topics": [
          {
            "name": "1st–10th Amendments",
            "note": "Includes the 1st Amendment (1951) which added the Ninth Schedule and reasonable restrictions on free speech — foundational for understanding early Constitution-Parliament tension."
          },
          {
            "name": "11th–25th Amendments",
            "note": "Covers the 24th, 25th Amendments tightening Parliament's power to amend Fundamental Rights — direct build-up to the Basic Structure doctrine (Kesavananda Bharati, 1973)."
          },
          {
            "name": "26th–50th Amendments",
            "note": "The 42nd Amendment (1976), often called a 'mini-Constitution', added 'Socialist', 'Secular', 'Integrity' to the Preamble and Fundamental Duties (Art. 51A) — a guaranteed exam topic."
          },
          {
            "name": "51st–75th Amendments",
            "note": "The 73rd and 74th Amendments (1992) constitutionalised Panchayati Raj and urban local bodies — critical for both Prelims and the Panchayati Raj category below."
          },
          {
            "name": "76th–103rd Amendments",
            "note": "Includes the 101st (GST), 102nd (National Commission for Backward Classes), and 103rd (10% EWS reservation) — all recent and exam-relevant."
          }
        ]
      },
      {
        "name": "Parts of Constitution",
        "topics": [
          {
            "name": "Part I: The Union and Its Territory",
            "note": "Defines India as a Union of States and Parliament's power to admit, form, or alter states — relevant to every state-reorganisation current-affairs question."
          },
          {
            "name": "Part II: Citizenship",
            "note": "Articles 5–11 govern citizenship at commencement; subsequent regulation is via the Citizenship Act, 1955 (amended several times since)."
          },
          {
            "name": "Part III: Fundamental Rights",
            "note": "Six rights remain (Right to Property was removed by the 44th Amendment and made a legal right under Art. 300A) — the most-tested Part across every stage of the exam."
          },
          {
            "name": "Part IV: Directive Principles of State Policy",
            "note": "Non-justiciable but 'fundamental in governance' — frequently paired with Fundamental Rights questions on where the two conflict or reinforce each other."
          },
          {
            "name": "Part V: The Union",
            "note": "President, Vice-President, Council of Ministers, Attorney General, and Parliament — the architecture of the central government."
          },
          {
            "name": "Part VI: The States",
            "note": "Mirrors Part V at the state level: Governor, Chief Minister, State Legislature, and the High Courts."
          },
          {
            "name": "Part XI: Relations Between Union and States",
            "note": "Legislative relations (Seventh Schedule lists) and administrative relations — core to any federalism question."
          }
        ]
      },
      {
        "name": "Schedules",
        "topics": [
          {
            "name": "First Schedule: States and Union Territories",
            "note": "Lists the states and UTs and their territorial extent — updated whenever a state is reorganised (most recently J&K's 2019 reorganisation)."
          },
          {
            "name": "Second Schedule: Provisions for Officials",
            "note": "Salaries and allowances of the President, Governors, Speaker, judges, and CAG."
          },
          {
            "name": "Third Schedule: Forms of Oaths",
            "note": "The exact oath text for ministers, MPs/MLAs, and judges — occasionally tested as a direct-recall question."
          },
          {
            "name": "Seventh Schedule: Distribution of Powers",
            "note": "The Union, State, and Concurrent Lists — arguably the most important schedule for GS Paper II and current federalism debates (e.g. GST Council disputes)."
          },
          {
            "name": "Eighth Schedule: Languages",
            "note": "22 officially recognised languages — track any recent additions or demands for inclusion (a recurring current-affairs hook)."
          },
          {
            "name": "Ninth Schedule: Acts and Regulations",
            "note": "Laws placed here were historically immune from judicial review on Fundamental Rights grounds — narrowed significantly after the I.R. Coelho (2007) judgment."
          },
          {
            "name": "Twelfth Schedule: Municipalities",
            "note": "Added by the 74th Amendment; lists the 18 functional areas urban local bodies can be empowered to handle."
          }
        ]
      }
    ]
  },
  {
    "id": "general-studies",
    "title": "General Studies — Mains (GS I–IV)",
    "icon": "📚",
    "description": "Four papers, 250 marks each (1,000 of the 1,750 Mains merit marks) — the descriptive-answer core of the exam.",
    "categories": [
      {
        "name": "GS Paper I — Heritage, History, Society & Geography",
        "topics": [
          {
            "name": "Art Forms (Ancient to Modern)",
            "note": "Classical dance forms, painting schools, music gharanas — Nitin Singhania's 'Indian Art and Culture' is the standard single-source reference."
          },
          {
            "name": "Literature (Ancient to Modern)",
            "note": "Sangam literature through Bhakti-Sufi movements to modern Indian writing — usually tested for its socio-historical context, not literary criticism."
          },
          {
            "name": "Architecture (Ancient to Modern)",
            "note": "Temple architecture styles (Nagara/Dravida/Vesara), Indo-Islamic architecture, and colonial-era buildings — map-and-image recognition helps here."
          },
          {
            "name": "Modern History: Significant Events",
            "note": "1757 (Plassey) to 1947 — the backbone timeline: Company rule, 1857 revolt, nationalist movement phases, and Partition."
          },
          {
            "name": "Modern History: Significant Personalities",
            "note": "Beyond the most famous names — examiners increasingly test regional and lesser-known freedom fighters and reformers."
          },
          {
            "name": "Modern History: Significant Issues",
            "note": "Land revenue systems, deindustrialisation, socio-religious reform movements, and the press/education under colonial rule."
          },
          {
            "name": "Freedom Struggle: Various Stages",
            "note": "Moderate phase (1885-1905) → Extremist/Swadeshi phase → Gandhian mass movements (Non-Cooperation, Civil Disobedience, Quit India)."
          },
          {
            "name": "Freedom Struggle: Important Contributors",
            "note": "Track contributions beyond the Congress mainstream too — revolutionary movements, the INA, and peasant/tribal uprisings."
          },
          {
            "name": "Freedom Struggle: Regional Contributions",
            "note": "Princely-state movements and region-specific struggles are increasingly asked to test breadth beyond a Delhi/Bombay-centric narrative."
          },
          {
            "name": "Post-Independence Consolidation & Reorganisation",
            "note": "Integration of princely states (Sardar Patel's role), linguistic reorganisation of states (1956 States Reorganisation Act), and early nation-building challenges."
          },
          {
            "name": "World History: Industrial Revolution",
            "note": "Causes (agricultural surplus, capital, colonies as raw-material sources) and its ripple effects on colonised nations including India."
          },
          {
            "name": "World History: World Wars",
            "note": "Causes, major turning points, and — most examinable — how each war reshaped India's political and economic trajectory."
          },
          {
            "name": "World History: Redrawal of National Boundaries",
            "note": "Post-WWI and post-WWII boundary changes, including decolonisation-era border disputes still relevant to current geopolitics."
          },
          {
            "name": "World History: Colonization",
            "note": "Comparative colonial styles (British vs. French vs. Portuguese) and their differing long-term institutional legacies."
          },
          {
            "name": "World History: Decolonization",
            "note": "The wave of independence movements from the 1940s-60s and the Non-Aligned Movement's origins."
          },
          {
            "name": "World History: Political Philosophies",
            "note": "Communism, Capitalism, and Socialism — their core tenets and real-world implementation contrasted (useful for GS2/GS3 economy links too)."
          },
          {
            "name": "Indian Society: Salient Features & Diversity",
            "note": "Social, cultural, religious, and linguistic diversity as a governance challenge and strength — frequently linked to current unity-in-diversity debates."
          },
          {
            "name": "Role & Organizations of Women",
            "note": "Constitutional/legal protections, women's movements, and self-help-group-driven empowerment models."
          },
          {
            "name": "Population and Associated Issues",
            "note": "Demographic dividend, population policy history, and the 2011 Census as the last full data baseline."
          },
          {
            "name": "Poverty and Developmental Issues",
            "note": "Poverty line debates (Tendulkar/Rangarajan committees), multidimensional poverty index, and rural-urban gaps."
          },
          {
            "name": "Urbanization: Problems and Remedies",
            "note": "Housing shortages, urban infrastructure strain, and Smart Cities/AMRUT-style policy responses."
          },
          {
            "name": "Social Empowerment",
            "note": "Constitutional and statutory mechanisms for empowering SC/ST/OBC/women/minorities."
          },
          {
            "name": "Communalism, Regionalism & Secularism",
            "note": "Conceptual clarity on each term plus how the Constitution balances them — a favourite for essay-style GS1 answers."
          },
          {
            "name": "Physical Geography of the World",
            "note": "Landforms, climate classification (Koeppen), and ocean current systems — the theoretical backbone for most applied geography questions."
          },
          {
            "name": "Distribution of Natural Resources",
            "note": "Mineral, energy, and water resource distribution globally and in India, and the geopolitics that follows resource concentration."
          },
          {
            "name": "Location of Industries",
            "note": "Factors behind primary/secondary/tertiary sector location decisions — link to current industrial-policy news."
          },
          {
            "name": "Geophysical Phenomena",
            "note": "Earthquakes, tsunamis, volcanic activity, and cyclones — mechanism-level understanding is tested, not just naming disasters."
          },
          {
            "name": "Geographical Features and Their Location",
            "note": "Straits, canals, deserts, and mountain passes with strategic/economic significance — map practice is non-negotiable."
          },
          {
            "name": "Changes in Geographical Features",
            "note": "Glacial retreat, changing river courses, and coastline changes — usually linked to climate-change current affairs."
          },
          {
            "name": "Changes in Flora and Fauna",
            "note": "Species range shifts and biodiversity loss drivers — links directly to the Environment category in Prelims and GS3."
          },
          {
            "name": "Globalization's Effect on Indian Society",
            "note": "Cultural homogenisation concerns versus economic opportunity — a classic two-sided GS1 essay-style theme."
          }
        ]
      },
      {
        "name": "GS Paper II — Governance, Constitution, Polity, Social Justice, IR",
        "topics": [
          {
            "name": "Indian Constitution: Historical Underpinnings & Evolution",
            "note": "The Constituent Assembly's debates and the sources it borrowed from (British parliamentary system, US Bill of Rights, Irish DPSPs, etc.)."
          },
          {
            "name": "Union and State Government: Functions & Responsibilities",
            "note": "Executive, legislative, and financial relations between the Centre and States under a quasi-federal structure."
          },
          {
            "name": "Separation of Powers",
            "note": "The doctrine as practiced in India (not a rigid US-style separation) — judicial review as the key check-and-balance mechanism."
          },
          {
            "name": "Constitutional Comparison with Other Countries",
            "note": "Genuinely comparative questions are rare but recurring — know at least the US, UK, and one other major democracy's contrasting features."
          },
          {
            "name": "Parliament and State Legislatures: Structure & Functioning",
            "note": "Bicameralism, legislative procedure, money bills vs. ordinary bills, and the anti-defection law (Tenth Schedule)."
          },
          {
            "name": "Executive and Judiciary: Structure & Organization",
            "note": "Collegium system, judicial appointments debate, and executive accountability mechanisms."
          },
          {
            "name": "Pressure Groups and Associations",
            "note": "Their role in shaping policy outside formal political channels — trade unions, business associations, and civil society coalitions."
          },
          {
            "name": "Representation of the People Act",
            "note": "Election-related law: qualifications/disqualifications, model code of conduct, and electoral reform debates."
          },
          {
            "name": "Constitutional Posts and Bodies",
            "note": "President, Governor, CAG, Attorney General, Election Commission, and UPSC itself — appointment process and powers of each."
          },
          {
            "name": "Statutory and Regulatory Bodies",
            "note": "NHRC, CCI, SEBI, RBI-type bodies — structure, functions, and how they differ from constitutional bodies."
          },
          {
            "name": "Government Policies and Interventions",
            "note": "Sector-specific policy design and implementation challenges — a direct static-dynamic linkage opportunity."
          },
          {
            "name": "Welfare Schemes for Vulnerable Sections",
            "note": "Design logic of flagship schemes and common implementation bottlenecks (targeting errors, last-mile delivery)."
          },
          {
            "name": "Protection of Vulnerable Sections",
            "note": "Legal and institutional protections for SC/ST/women/children/elderly/disabled populations."
          },
          {
            "name": "Social Sector Development: Health, Education, HR",
            "note": "Public expenditure trends, health/education indices, and human capital policy debates."
          },
          {
            "name": "Poverty and Hunger: Causes and Measures",
            "note": "Structural causes versus policy-design failures, and the government's key anti-poverty/anti-hunger interventions."
          },
          {
            "name": "Transparency and Accountability",
            "note": "RTI Act mechanics, social audits, and citizen-oversight mechanisms."
          },
          {
            "name": "E-Governance: Applications and Models",
            "note": "DBT, single-window portals, and digital-identity infrastructure — successes and persistent digital-divide limitations."
          },
          {
            "name": "Citizens' Charters",
            "note": "Their purpose as a service-delivery accountability tool and common critiques of weak enforcement."
          },
          {
            "name": "Civil Services: Role in a Democracy",
            "note": "Neutrality, permanence, and the tension between political responsiveness and administrative independence."
          },
          {
            "name": "India and Its Neighbourhood",
            "note": "Bilateral relationships and disputes with Pakistan, China, Bangladesh, Nepal, Sri Lanka, Myanmar, Bhutan, and the Maldives."
          },
          {
            "name": "Bilateral Relations with Major Powers",
            "note": "US, Russia, EU, Japan, and other strategic partnerships — track annually through summit outcomes."
          },
          {
            "name": "Regional and Global Groupings",
            "note": "SAARC, BIMSTEC, SCO, QUAD, BRICS, G20 — India's role and stated objectives in each."
          },
          {
            "name": "International Policies and Politics Affecting India",
            "note": "Global power shifts and how they filter into India's strategic choices."
          },
          {
            "name": "Indian Diaspora",
            "note": "Its economic (remittances) and soft-power role, and government engagement mechanisms (Pravasi Bharatiya Divas, OCI cards)."
          },
          {
            "name": "International Institutions",
            "note": "UN system bodies, WTO, IMF, World Bank — mandate, structure, and reform debates India is party to."
          },
          {
            "name": "Global Agreements and Partnerships",
            "note": "Climate accords, trade agreements, and defence partnerships India has signed or is negotiating."
          }
        ]
      },
      {
        "name": "GS Paper III — Economy, Science & Tech, Environment, Security",
        "topics": [
          {
            "name": "Economic Growth and Development",
            "note": "Planning history (Five-Year Plans → NITI Aayog), and growth-vs-development distinctions."
          },
          {
            "name": "Inclusive Growth",
            "note": "Why growth alone doesn't guarantee equitable outcomes, and the policy tools aimed at closing the gap."
          },
          {
            "name": "Government Budgeting",
            "note": "Budget types, fiscal deficit/FRBM targets, and how to read a Union Budget analytically rather than just noting allocations."
          },
          {
            "name": "Agriculture: Cropping Patterns & Irrigation",
            "note": "Major crop belts, irrigation methods, and cropping-pattern shifts driven by MSP and water availability."
          },
          {
            "name": "E-Technology in Agriculture",
            "note": "Digital advisory platforms, precision farming, and agri-tech startups' role in productivity gains."
          },
          {
            "name": "Farm Subsidies and MSP",
            "note": "Minimum Support Price mechanics, the subsidy-versus-market-distortion debate, and recent farm-law history."
          },
          {
            "name": "Public Distribution System",
            "note": "PDS architecture, leakage issues, and reforms like Aadhaar-linked delivery and One Nation One Ration Card."
          },
          {
            "name": "Buffer Stocks and Food Security",
            "note": "FCI's role, storage-capacity constraints, and the National Food Security Act's entitlement framework."
          },
          {
            "name": "Technology Missions in Agriculture",
            "note": "Government missions aimed at seed technology, horticulture, and irrigation efficiency."
          },
          {
            "name": "Economics of Animal Rearing",
            "note": "Livestock's contribution to rural incomes and the White/Blue Revolution-style sectoral policies."
          },
          {
            "name": "Food Processing Industries",
            "note": "Value-addition potential, cold-chain infrastructure gaps, and policy incentives for the sector."
          },
          {
            "name": "Land Reforms",
            "note": "Historical land-reform waves (zamindari abolition, land ceiling acts) and why implementation has been uneven."
          },
          {
            "name": "Liberalization and Industrial Policy",
            "note": "1991 reforms as the pivot point, and how industrial policy has evolved since (PLI schemes, Make in India)."
          },
          {
            "name": "Infrastructure: Energy, Ports, Roads, Airports, Railways",
            "note": "Sector-specific bottlenecks and the financing-model debate (public vs. PPP vs. fully private)."
          },
          {
            "name": "Science & Technology Developments",
            "note": "Track major indigenous developments and their real-world deployment, not just announcements."
          },
          {
            "name": "Achievements of Indians in S&T",
            "note": "Space (ISRO milestones), nuclear, and biotech achievements with global recognition."
          },
          {
            "name": "Indigenization of Technology",
            "note": "Defence and strategic-sector self-reliance push (Atmanirbhar Bharat in tech context)."
          },
          {
            "name": "Emerging Technologies",
            "note": "IT, space, robotics, nanotech, and biotech — know one concrete India-specific application for each."
          },
          {
            "name": "Intellectual Property Rights",
            "note": "Patent/copyright basics and India's IPR policy debates, especially around pharma and agriculture."
          },
          {
            "name": "Environmental Conservation",
            "note": "Protected-area frameworks, conservation programmes, and community-led conservation models."
          },
          {
            "name": "Environmental Pollution",
            "note": "Air/water/soil pollution sources and India's regulatory response (NCAP, pollution-control boards)."
          },
          {
            "name": "Environmental Degradation",
            "note": "Deforestation, desertification, and wetland loss as measurable, policy-relevant trends."
          },
          {
            "name": "Environmental Impact Assessment",
            "note": "EIA process stages and the recurring debate over diluting environmental clearances for faster industrial approval."
          },
          {
            "name": "Disaster Types and Challenges",
            "note": "Natural versus man-made disasters and India's disaster-risk profile by region."
          },
          {
            "name": "Disaster Management Framework",
            "note": "NDMA structure, the Disaster Management Act 2005, and the shift from relief-centric to mitigation-centric policy."
          },
          {
            "name": "Development and Extremism Linkages",
            "note": "How development deficits are argued to fuel Left-Wing Extremism, and the counter-view on governance-deficit causes."
          },
          {
            "name": "External State and Non-State Actors",
            "note": "Cross-border terrorism sponsorship and non-state militant networks as internal-security challenges."
          },
          {
            "name": "Communication Networks and Internal Security",
            "note": "Encrypted communication, social-media radicalisation, and lawful-interception policy debates."
          },
          {
            "name": "Cyber Security Basics",
            "note": "Critical infrastructure protection, data-protection law, and India's cyber-security institutional framework (CERT-In etc.)."
          },
          {
            "name": "Money Laundering and Prevention",
            "note": "PMLA framework and the enforcement-agency ecosystem (ED, FIU-IND)."
          },
          {
            "name": "Border Security Challenges",
            "note": "Border-specific issues (fencing, riverine borders, smart-border tech) across each of India's land borders."
          },
          {
            "name": "Organized Crime and Terrorism Linkages",
            "note": "How organised crime networks fund and enable terrorism, and the legal tools targeting both jointly (UAPA etc.)."
          },
          {
            "name": "Security Forces and Agencies",
            "note": "Mandate and jurisdiction differences between the Army, Central Armed Police Forces, and state police."
          }
        ]
      },
      {
        "name": "GS Paper IV — Ethics, Integrity & Aptitude",
        "topics": [
          {
            "name": "Ethics and Human Interface",
            "note": "Core definitions: essence, determinants, and consequences of ethics in both private and public life."
          },
          {
            "name": "Human Values and Their Sources",
            "note": "Lessons drawn from the lives and teachings of major reformers, administrators, and thinkers — always keep 2-3 ready examples per value."
          },
          {
            "name": "Role of Family, Society, and Educational Institutions",
            "note": "How each shapes moral development — a common short-answer theme."
          },
          {
            "name": "Attitude: Content, Structure, Function",
            "note": "How attitudes form and how they influence and get influenced by behaviour — link to real administrative scenarios."
          },
          {
            "name": "Aptitude and Foundational Values for Civil Service",
            "note": "Integrity, impartiality, non-partisanship — the qualities examiners most want demonstrated through your case-study answers, not just defined."
          },
          {
            "name": "Empathy, Tolerance and Compassion Toward the Weaker Sections",
            "note": "A recurring evaluative lens in case studies involving vulnerable groups."
          },
          {
            "name": "Emotional Intelligence: Concepts and Utility",
            "note": "Goleman's framework is the usual reference point — self-awareness, self-regulation, motivation, empathy, and social skill."
          },
          {
            "name": "Contributions of Moral Thinkers and Philosophers",
            "note": "Keep a short list ready from both Indian (Gandhi, Vivekananda, Kautilya) and Western (Kant, Aristotle, Mill) traditions."
          },
          {
            "name": "Public/Civil Service Values and Ethics in Public Administration",
            "note": "Why the same ethical principle plays out differently in a public-service context versus private life."
          },
          {
            "name": "Ethical Concerns in Government and Private Institutions",
            "note": "Conflicts of interest, whistleblower protection, and institutional culture as ethics enablers or barriers."
          },
          {
            "name": "Laws, Rules and Conscience as Sources of Ethical Guidance",
            "note": "Where formal rules run out and personal conscience has to fill the gap — a frequent case-study hinge point."
          },
          {
            "name": "Ethical Governance",
            "note": "Accountability mechanisms and value-based decision-making frameworks in government."
          },
          {
            "name": "Ethical Issues in International Relations and Funding",
            "note": "Conditionalities attached to foreign aid/loans and the ethics of geopolitical alliances."
          },
          {
            "name": "Corporate Governance",
            "note": "Board accountability, disclosure norms, and where corporate ethics intersects with public-interest regulation."
          },
          {
            "name": "Probity in Governance: Concept",
            "note": "Distinguishing probity (a higher ethical standard) from mere legality."
          },
          {
            "name": "Philosophical Basis of Governance and Probity",
            "note": "Theoretical justification for why probity, not just compliance, should guide public officials."
          },
          {
            "name": "Information Sharing and Transparency in Government",
            "note": "Proactive disclosure obligations beyond what RTI requests alone would surface."
          },
          {
            "name": "Right to Information, Codes of Ethics, Codes of Conduct",
            "note": "Distinguish a code of ethics (aspirational) from a code of conduct (enforceable rules) — a common definitional trap."
          },
          {
            "name": "Citizens' Charters (Ethics Angle)",
            "note": "Their function as a probity and accountability tool, distinct from the GS2 governance-delivery angle."
          },
          {
            "name": "Work Culture and Quality of Public Service Delivery",
            "note": "Service-quality metrics and how administrative culture shapes citizen experience."
          },
          {
            "name": "Challenges of Corruption",
            "note": "Types of corruption, structural enablers, and institutional anti-corruption mechanisms (Lokpal, CVC, vigilance machinery)."
          },
          {
            "name": "Case Studies on the Above Issues",
            "note": "GS4's highest-weightage component — practice writing structured, multi-stakeholder answers rather than one-line moral verdicts."
          }
        ]
      }
    ]
  },
  {
    "id": "optional-subjects",
    "title": "Optional Subjects (All 48)",
    "icon": "🎯",
    "description": "Every candidate picks exactly one. High-level orientation only — always cross-check the live official syllabus for your chosen subject before you commit to it.",
    "categories": [
      {
        "name": "Humanities & Social Sciences",
        "topics": [
          {
            "name": "History",
            "note": "Ancient/medieval/modern Indian history in far greater depth than GS1, plus world history — a natural extension for GS1-strong candidates but genuinely vast. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Geography",
            "note": "Physical, human, and economic geography plus geographical thought — strong overlap with GS1/Prelims geography, popular for that reason. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Political Science and International Relations",
            "note": "Political theory, Indian government & politics, and international relations — heavy overlap with GS2, a common choice for that overlap. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Public Administration",
            "note": "Administrative theory and Indian administration — high overlap with GS2 governance topics; historically one of the most popular optionals for that reason. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Sociology",
            "note": "Sociological theory plus Indian society topics — strong crossover with GS1 Indian Society and the essay paper's social themes. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Psychology",
            "note": "Covers cognitive, developmental, and social psychology plus applied areas — a less common choice but well-suited to candidates from a psychology academic background. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Anthropology",
            "note": "Physical and social-cultural anthropology plus Indian tribal studies — noted for a relatively compact, static syllabus compared to some humanities options. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Philosophy",
            "note": "Western and Indian philosophical traditions — abstract and reading-intensive, but a compact syllabus attracts a steady following. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Economics",
            "note": "Micro/macroeconomics, Indian economy, and economic thought at a rigour well beyond GS3 — better suited to candidates with an economics academic background. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          }
        ]
      },
      {
        "name": "Commerce, Law & Management",
        "topics": [
          {
            "name": "Commerce and Accountancy",
            "note": "Accounting, auditing, financial management, and corporate law — chosen mostly by commerce-background graduates. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Law",
            "note": "Constitutional law, administrative law, and international law in depth — a natural fit for law graduates given the overlap with GS2. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Management",
            "note": "Organisational behaviour, HR, marketing, and strategic management — a less common but scoring option for management-background candidates. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          }
        ]
      },
      {
        "name": "Pure & Applied Sciences",
        "topics": [
          {
            "name": "Mathematics",
            "note": "Pure and applied mathematics at an advanced undergraduate level — demands strong quantitative background but is considered a scoring, objective-style optional. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Statistics",
            "note": "Probability, statistical inference, and applied statistics — similarly rigorous and best suited to a strong quantitative background. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Physics",
            "note": "Classical and modern physics at an advanced level — chosen mainly by physics graduates given its technical depth. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Chemistry",
            "note": "Physical, organic, and inorganic chemistry at an advanced level — best suited to chemistry-background candidates. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Botany",
            "note": "Plant sciences including physiology, genetics, and ecology — a science optional with a moderate but detailed syllabus. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Zoology",
            "note": "Animal sciences including physiology, genetics, and evolution — similar profile to Botany. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Geology",
            "note": "Physical, structural, and economic geology plus mineralogy — a technical optional suited to geology/earth-science graduates. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          }
        ]
      },
      {
        "name": "Engineering & Medical Science",
        "topics": [
          {
            "name": "Civil Engineering",
            "note": "Structural, geotechnical, and transportation engineering — chosen mainly by civil engineering graduates. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Mechanical Engineering",
            "note": "Thermodynamics, machine design, and manufacturing — chosen mainly by mechanical engineering graduates. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Electrical Engineering",
            "note": "Power systems, electronics, and control systems — chosen mainly by electrical engineering graduates. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Medical Science",
            "note": "Human anatomy, physiology, pathology, and medicine at an advanced level — chosen almost exclusively by medical professionals. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          }
        ]
      },
      {
        "name": "Agriculture & Allied",
        "topics": [
          {
            "name": "Agriculture",
            "note": "Crop production, soil science, and agricultural economics — suited to agriculture-background graduates, with useful overlap into GS3. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Animal Husbandry and Veterinary Science",
            "note": "Livestock production, veterinary medicine, and animal biotechnology — chosen mainly by veterinary-background graduates. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          }
        ]
      },
      {
        "name": "Literature (Choose Any One Language)",
        "topics": [
          {
            "name": "Assamese Literature",
            "note": "Tests Assamese literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Assamese literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Assamese literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Bengali Literature",
            "note": "Tests Bengali literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Bengali literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Bengali literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Bodo Literature",
            "note": "Tests Bodo literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Bodo literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Bodo literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Dogri Literature",
            "note": "Tests Dogri literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Dogri literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Dogri literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Gujarati Literature",
            "note": "Tests Gujarati literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Gujarati literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Gujarati literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Hindi Literature",
            "note": "Tests Hindi literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Hindi literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Hindi literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Kannada Literature",
            "note": "Tests Kannada literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Kannada literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Kannada literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Kashmiri Literature",
            "note": "Tests Kashmiri literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Kashmiri literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Kashmiri literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Konkani Literature",
            "note": "Tests Konkani literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Konkani literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Konkani literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Maithili Literature",
            "note": "Tests Maithili literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Maithili literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Maithili literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Malayalam Literature",
            "note": "Tests Malayalam literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Malayalam literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Malayalam literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Manipuri Literature",
            "note": "Tests Manipuri literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Manipuri literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Manipuri literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Marathi Literature",
            "note": "Tests Marathi literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Marathi literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Marathi literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Nepali Literature",
            "note": "Tests Nepali literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Nepali literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Nepali literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Oriya Literature",
            "note": "Tests Oriya literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Oriya literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Oriya literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Punjabi Literature",
            "note": "Tests Punjabi literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Punjabi literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Punjabi literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Sanskrit Literature",
            "note": "Tests Sanskrit literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Sanskrit literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Sanskrit literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Santali Literature",
            "note": "Tests Santali literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Santali literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Santali literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Sindhi Literature",
            "note": "Tests Sindhi literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Sindhi literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Sindhi literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Tamil Literature",
            "note": "Tests Tamil literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Tamil literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Tamil literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Telugu Literature",
            "note": "Tests Telugu literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Telugu literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Telugu literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "Urdu Literature",
            "note": "Tests Urdu literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read Urdu literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official Urdu literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          },
          {
            "name": "English Literature",
            "note": "Tests English literature from its earliest recorded period through the modern era: poetry, prose, drama, and literary criticism, plus the language's own linguistic history. Choose it only if you already read English literature comfortably and fluently write critical answers in it — the prescribed texts and authors are set out in the official English literature syllabus, which is worth reading in full before committing. Two papers, 250 marks each (500 total) — verify the exact paper-wise topic list against the current official UPSC syllabus notification before committing to this subject."
          }
        ]
      }
    ]
  },
  {
    "id": "essay-interview",
    "title": "Essay, Language Papers & Interview",
    "icon": "✍️",
    "description": "250 (Essay) + 275 (Interview) merit marks, plus two qualifying-only language papers.",
    "categories": [
      {
        "name": "Essay Paper (250 Marks)",
        "topics": [
          {
            "name": "Format: Two Essays from a Topic List",
            "note": "You write two essays, choosing one topic from each of two sections, in three hours total — roughly 1,000-1,200 words per essay is a realistic target."
          },
          {
            "name": "Common Theme Areas",
            "note": "Social, political, economic, philosophical, ethical, cultural, environmental, and contemporary issues — practice at least one essay from each theme before the exam."
          },
          {
            "name": "Structure & Approach",
            "note": "A clear introduction, a logically organised body with distinct paragraphs per dimension, and a relevant conclusion — examiners explicitly reward staying 'closely to the subject'."
          },
          {
            "name": "Balancing Multiple Dimensions",
            "note": "The best-scoring essays weave historical, economic, social, and ethical angles into one coherent argument rather than listing them as separate sections."
          },
          {
            "name": "Language & Expression",
            "note": "Marks are explicitly awarded for 'effective and exact expression' — concise, precise sentences outscore long, ornate ones."
          },
          {
            "name": "Time Management",
            "note": "With two essays in three hours, budget planning/outline time (10-15 min) and writing time per essay so you don't run out of time on the second one."
          }
        ]
      },
      {
        "name": "Qualifying Language Papers (300 Marks Each — Non-Merit)",
        "topics": [
          {
            "name": "Paper A: Indian Language",
            "note": "Chosen from the Eighth Schedule languages (or English for some candidates from specific regions per UPSC rules); must be cleared but doesn't count toward the final merit ranking."
          },
          {
            "name": "Paper B: English",
            "note": "Tests comprehension, précis writing, and short essays/translation in English at a qualifying standard only."
          }
        ]
      },
      {
        "name": "Interview / Personality Test (275 Marks)",
        "topics": [
          {
            "name": "Purpose & Format",
            "note": "A roughly 20-30 minute board interview assessing personality, judgement, and suitability for public service — not a further knowledge test."
          },
          {
            "name": "DAF-Based Questioning",
            "note": "Most questions stem directly from your Detailed Application Form: hometown, education, hobbies, work experience, and optional subject — know your own DAF cold."
          },
          {
            "name": "Current Affairs Readiness",
            "note": "Boards frequently probe recent, especially locally or professionally relevant, current events to test awareness and opinion-forming ability."
          },
          {
            "name": "Common Question Themes",
            "note": "Hypothetical administrative dilemmas, opinions on government policy, and questions designed to test composure under pressure as much as content."
          },
          {
            "name": "Body Language & Communication",
            "note": "Clarity, honesty (including comfortably saying 'I don't know'), and composure typically matter more to the panel than performing confidence."
          },
          {
            "name": "Mock Interview Practice",
            "note": "Simulated boards — ideally with people who don't already know your answers — are the highest-value preparation activity for this stage."
          }
        ]
      }
    ]
  },
  {
    "id": "current-affairs",
    "title": "Current Affairs Method",
    "icon": "📰",
    "description": "An evergreen system for staying current — swap in whatever month/year it is when you use this.",
    "categories": [
      {
        "name": "Daily Habits",
        "topics": [
          {
            "name": "One Quality Newspaper or Its Editorial Page",
            "note": "Reading a single reliable paper's editorial and national-news pages daily beats skimming five sources shallowly."
          },
          {
            "name": "PIB (Press Information Bureau) Releases",
            "note": "The primary source for government scheme announcements and official positions — often more precise than secondary news coverage."
          },
          {
            "name": "PRS Legislative Research Bill Tracker",
            "note": "Tracks every bill's progress through Parliament with neutral, well-summarised analysis — invaluable for GS2 governance questions."
          }
        ]
      },
      {
        "name": "Periodic Deep-Dives",
        "topics": [
          {
            "name": "Monthly Current Affairs Compilations",
            "note": "Consolidate scattered daily notes into a monthly review — this is where retention actually happens, not during the first daily read."
          },
          {
            "name": "Yojana & Kurukshetra Magazines",
            "note": "Government publications that go deeper on a themed policy topic each month — good for GS2/GS3 answer-writing material."
          },
          {
            "name": "Economic Survey (Released Ahead of the Union Budget)",
            "note": "The government's own diagnostic of the economy — a goldmine of data and analysis for GS3 economy questions."
          },
          {
            "name": "Union Budget Analysis",
            "note": "Don't just note allocation figures — understand the reasoning behind major shifts year-on-year."
          },
          {
            "name": "India Year Book",
            "note": "An annually updated official reference covering every ministry's activities — useful for filling factual gaps."
          }
        ]
      },
      {
        "name": "Linking Current Affairs to the Static Syllabus",
        "topics": [
          {
            "name": "The Static–Dynamic Linkage Technique",
            "note": "For every current event, ask 'which static GS topic does this belong under?' — this is what actually makes current affairs answerable in Mains, rather than just trivia for Prelims."
          },
          {
            "name": "Government Scheme Tracker",
            "note": "Maintain a running one-line note per major scheme: objective, ministry, and one implementation issue — reusable across GS2 and GS3 answers."
          },
          {
            "name": "International Summits & India's Position",
            "note": "Track what India specifically said or committed to at each summit, not just that the summit happened."
          },
          {
            "name": "Reports & Global Indices Featuring India",
            "note": "Human Development Index, Global Hunger Index, Ease of Doing Business-style rankings — know India's recent trend direction and the report's key methodology caveats."
          }
        ]
      }
    ]
  },
  {
    "id": "resources",
    "title": "Study Resources",
    "icon": "📖",
    "description": "Widely-used foundational texts — verify current editions and always cross-check against the official syllabus.",
    "categories": [
      {
        "name": "Foundational NCERTs",
        "topics": [
          {
            "name": "History (Class 6–12)",
            "note": "Old and new NCERT history textbooks together cover ancient, medieval, and modern India at the depth Prelims typically requires."
          },
          {
            "name": "Geography (Class 6–12)",
            "note": "Physical, human, and Indian geography NCERTs build the conceptual base that GS1 and Prelims geography questions assume you already have."
          },
          {
            "name": "Indian Constitution at Work (Class 11 Political Science)",
            "note": "A surprisingly thorough, exam-relevant introduction to polity before moving to a specialised text."
          },
          {
            "name": "Economics (Class 9–12)",
            "note": "Covers basic micro/macro concepts and the Indian economy's structure — the right starting point before Economic Survey-level material."
          },
          {
            "name": "Biology/Environment (Class 11–12)",
            "note": "Ecosystem and biodiversity basics that underpin the fast-growing Environment section of Prelims."
          }
        ]
      },
      {
        "name": "Standard Reference Texts (Widely Used, Verify Latest Edition)",
        "topics": [
          {
            "name": "Indian Polity — M. Laxmikanth",
            "note": "The most widely used single-volume reference for polity across Prelims and Mains GS2."
          },
          {
            "name": "Modern Indian History — Spectrum's 'A Brief History of Modern India'",
            "note": "A concise, exam-focused modern history text that pairs well with the NCERT base."
          },
          {
            "name": "Indian Art and Culture — Nitin Singhania",
            "note": "The standard single-source reference for the Art & Culture portion of GS1."
          },
          {
            "name": "Certificate Physical and Human Geography — G.C. Leong",
            "note": "A long-standing standard for physical geography fundamentals, paired with an atlas."
          },
          {
            "name": "Indian Economy — Ramesh Singh or a similarly structured text",
            "note": "Bridges NCERT-level economics with the applied policy detail GS3 questions expect."
          },
          {
            "name": "Environment Compilation (e.g. Shankar IAS-style notes)",
            "note": "Consolidated environment/ecology notes are more efficient than hunting the topic across scattered sources."
          },
          {
            "name": "Ethics — a structured case-study-focused text",
            "note": "GS4 rewards structured case-study practice far more than memorised definitions — prioritise a text with worked examples."
          }
        ]
      },
      {
        "name": "Official & Primary Sources",
        "topics": [
          {
            "name": "UPSC's Official Notification & Syllabus PDF",
            "note": "The single authoritative source for exact syllabus wording — always cross-check any third-party summary (including this one) against it."
          },
          {
            "name": "PIB (Press Information Bureau)",
            "note": "Government's own official announcements — the most reliable primary source for scheme and policy details."
          },
          {
            "name": "PRS Legislative Research",
            "note": "Independent, non-partisan analysis of bills and parliamentary functioning."
          },
          {
            "name": "Ministry Annual Reports",
            "note": "Each ministry publishes a detailed annual report — useful for GS3 sector-specific depth."
          },
          {
            "name": "Economic Survey & Union Budget Documents",
            "note": "Published annually by the Finance Ministry — primary-source economic data and policy direction."
          }
        ]
      }
    ]
  }
] };

// ---------------------------------------------------------------------------
// Application State
// ---------------------------------------------------------------------------
let currentSection = 'dashboard';
let timerRunning = false;
let timerInterval = null;
let timerSeconds = 0;

const REVISED_KEY = 'upscRevisedTopics';   // { [topicId]: isoTimestamp }
const STUDY_SECONDS_KEY = 'upscTotalStudySeconds'; // number, accumulated across sessions

let userSettings = {
  theme: 'auto',
  studyGoal: 4,
  notifications: 'enabled'
};

// ---------------------------------------------------------------------------
// Small utilities
// ---------------------------------------------------------------------------
function slugify(str) {
  return String(str).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function topicId(sectionId, categoryName, topicName) {
  return `${sectionId}__${slugify(categoryName)}__${slugify(topicName)}`;
}

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) { /* storage unavailable — fail silently, feature just won't persist */ }
}

function getRevisedMap() {
  return readJSON(REVISED_KEY, {});
}

function isRevised(id) {
  const map = getRevisedMap();
  return Object.prototype.hasOwnProperty.call(map, id);
}

function toggleRevised(id, meta) {
  const map = getRevisedMap();
  if (map[id]) {
    delete map[id];
  } else {
    map[id] = { at: new Date().toISOString(), ...meta };
  }
  writeJSON(REVISED_KEY, map);
  return !!map[id];
}

function countAllTopics() {
  let n = 0;
  appData.sections.forEach(sec => sec.categories.forEach(cat => { n += cat.topics.length; }));
  return n;
}

function countRevisedInSection(sectionId) {
  const map = getRevisedMap();
  const section = appData.sections.find(s => s.id === sectionId);
  if (!section) return 0;
  let n = 0;
  section.categories.forEach(cat => cat.topics.forEach(topic => {
    if (map[topicId(sectionId, cat.name, topic.name)]) n++;
  }));
  return n;
}

function countSectionTopics(sectionId) {
  const section = appData.sections.find(s => s.id === sectionId);
  if (!section) return 0;
  return section.categories.reduce((n, cat) => n + cat.topics.length, 0);
}

// ---------------------------------------------------------------------------
// Initialize Application
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  loadUserSettings();
  applyTheme();
  initializeNavigation();
  populateCategories();
  initializeSearch();
  initializeTimer();
  renderDashboardStats();
  renderRecentlyRevised();
  renderSectionProgress();
});

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
function initializeNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const section = this.getAttribute('data-section');
      if (section) navigateToSection(section);
    });
  });

  const sectionCards = document.querySelectorAll('.section-card');
  sectionCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const section = this.getAttribute('data-section');
      if (section) navigateToSection(section);
    });
  });
}

function navigateToSection(sectionId) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-section') === sectionId);
  });

  document.querySelectorAll('.section').forEach(section => {
    const active = section.id === sectionId;
    section.classList.toggle('active', active);
    if (active) {
      section.classList.add('fade-in');
      setTimeout(() => section.classList.remove('fade-in'), 300);
    }
  });

  currentSection = sectionId;
  hideSearch();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------------------------------------------------------------------------
// Categories Population
// ---------------------------------------------------------------------------
function populateCategories() {
  appData.sections.forEach(section => {
    const container = document.getElementById(`${section.id}-categories`);
    if (container) {
      container.innerHTML = '';
      section.categories.forEach(category => {
        const categoryCard = createCategoryCard(category, section.id);
        container.appendChild(categoryCard);
      });
    }
  });
}

function createCategoryCard(category, sectionId) {
  const card = document.createElement('div');
  card.className = 'category-card';

  const revisedCount = category.topics.filter(t => isRevised(topicId(sectionId, category.name, t.name))).length;

  const header = document.createElement('div');
  header.className = 'category-header';
  header.innerHTML = `<h3>${category.name}</h3><span class="category-progress-tag">${revisedCount}/${category.topics.length} revised</span>`;

  const topicsList = document.createElement('div');
  topicsList.className = 'topics-list';

  category.topics.forEach(topic => {
    const id = topicId(sectionId, category.name, topic.name);
    const topicItem = document.createElement('div');
    topicItem.className = 'topic-item';
    if (isRevised(id)) topicItem.classList.add('revised');

    topicItem.innerHTML = `
      <span class="topic-check" title="Mark as revised" aria-label="Mark as revised">${isRevised(id) ? '✅' : '⬜'}</span>
      <span class="topic-text">${topic.name}</span>
      <span class="topic-arrow">→</span>
    `;

    const checkEl = topicItem.querySelector('.topic-check');
    checkEl.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const nowRevised = toggleRevised(id, { section: sectionId, category: category.name, topic: topic.name });
      checkEl.textContent = nowRevised ? '✅' : '⬜';
      topicItem.classList.toggle('revised', nowRevised);
      renderDashboardStats();
      renderRecentlyRevised();
      renderSectionProgress();
      refreshCategoryProgressTags();
    });

    topicItem.addEventListener('click', function() {
      openTopicModal(topic, category.name, sectionId);
    });

    topicsList.appendChild(topicItem);
  });

  card.appendChild(header);
  card.appendChild(topicsList);

  return card;
}

function refreshCategoryProgressTags() {
  appData.sections.forEach(section => {
    section.categories.forEach(category => {
      const revisedCount = category.topics.filter(t => isRevised(topicId(section.id, category.name, t.name))).length;
      // Find the matching header by re-querying DOM structure order
    });
  });
  // Simpler: just re-render everything — the data set is small enough that this is instant.
  populateCategories();
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------
function initializeSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
      displaySearchResults(searchContent(query));
    });
  }
}

function searchContent(query) {
  const results = [];
  appData.sections.forEach(section => {
    section.categories.forEach(category => {
      category.topics.forEach(topic => {
        if (topic.name.toLowerCase().includes(query) || (topic.note || '').toLowerCase().includes(query)) {
          results.push({ topic: topic.name, note: topic.note, category: category.name, section: section.title, sectionId: section.id });
        }
      });
    });
  });
  return results.slice(0, 40);
}

function displaySearchResults(results) {
  const searchResults = document.getElementById('searchResults');
  if (!searchResults) return;

  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
    return;
  }

  searchResults.innerHTML = '';
  results.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.className = 'search-result-item';
    resultItem.innerHTML = `
      <div>
        <strong>${result.topic}</strong>
        <div style="font-size: 12px; color: var(--color-text-secondary);">
          ${result.section} → ${result.category}
        </div>
      </div>
    `;
    resultItem.addEventListener('click', () => {
      navigateToSection(result.sectionId);
      const topicObj = { name: result.topic, note: result.note };
      openTopicModal(topicObj, result.category, result.sectionId);
      hideSearch();
    });
    searchResults.appendChild(resultItem);
  });
}

function toggleSearch() {
  const searchContainer = document.querySelector('.search-container');
  const searchInput = document.getElementById('searchInput');
  if (searchContainer && searchContainer.classList.contains('hidden')) {
    searchContainer.classList.remove('hidden');
    if (searchInput) searchInput.focus();
  } else {
    hideSearch();
  }
}

function hideSearch() {
  const searchContainer = document.querySelector('.search-container');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  if (searchContainer) searchContainer.classList.add('hidden');
  if (searchInput) searchInput.value = '';
  if (searchResults) searchResults.innerHTML = '';
}

// ---------------------------------------------------------------------------
// Modal — now shows the real rapid-revision note, not canned filler
// ---------------------------------------------------------------------------
function openTopicModal(topic, category, sectionId) {
  const modal = document.getElementById('contentModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const revisedBtn = document.getElementById('modalRevisedBtn');

  if (modal && modalTitle && modalBody) {
    modalTitle.textContent = topic.name;
    const id = topicId(sectionId, category, topic.name);
    modalBody.innerHTML = generateTopicContent(topic, category, sectionId, id);

    modal.classList.remove('hidden');
    modal.setAttribute('data-current-topic-id', id);
    modal.setAttribute('data-current-section', sectionId);
    modal.setAttribute('data-current-category', category);
    modal.setAttribute('data-current-topic-name', topic.name);

    if (revisedBtn) {
      updateRevisedButton(id);
    }
  }
}

function updateRevisedButton(id) {
  const revisedBtn = document.getElementById('modalRevisedBtn');
  if (!revisedBtn) return;
  revisedBtn.textContent = isRevised(id) ? '✅ Revised' : '📌 Mark as Revised';
  revisedBtn.classList.toggle('btn--revised', isRevised(id));
}

function generateTopicContent(topic, category, sectionId) {
  return `
    <div class="topic-content">
      <div class="topic-meta">
        <span class="status status--info">${category}</span>
        <span class="topic-section">${getSectionTitle(sectionId)}</span>
      </div>

      <div class="topic-description">
        <h4>Rapid Revision Note</h4>
        <p>${topic.note || 'No note yet for this topic.'}</p>
      </div>
    </div>
  `;
}

function getSectionTitle(sectionId) {
  const section = appData.sections.find(s => s.id === sectionId);
  return section ? section.title : '';
}

function closeModal() {
  const modal = document.getElementById('contentModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.removeAttribute('data-current-topic-id');
  }
}

function toggleRevisedFromModal() {
  const modal = document.getElementById('contentModal');
  if (!modal) return;
  const id = modal.getAttribute('data-current-topic-id');
  const sectionId = modal.getAttribute('data-current-section');
  const category = modal.getAttribute('data-current-category');
  const topicName = modal.getAttribute('data-current-topic-name');
  if (!id) return;

  const nowRevised = toggleRevised(id, { section: sectionId, category, topic: topicName });
  updateRevisedButton(id);
  showNotification(nowRevised ? 'Marked as revised' : 'Unmarked', 'success');
  renderDashboardStats();
  renderRecentlyRevised();
  renderSectionProgress();
  populateCategories();
}

// ---------------------------------------------------------------------------
// Dashboard: real stats, real progress bars, real "recently revised" feed
// ---------------------------------------------------------------------------
function renderDashboardStats() {
  const map = getRevisedMap();
  const total = countAllTopics();
  const revised = Object.keys(map).length;
  const seconds = readJSON(STUDY_SECONDS_KEY, 0);
  const hours = Math.round((seconds / 3600) * 10) / 10;

  setStatCard('stat-total-topics', total, 'Total Topics');
  setStatCard('stat-revised', revised, 'Marked Revised');
  setStatCard('stat-study-hours', hours, 'Study Hours (this browser)');
  setStatCard('stat-optionals', 48, 'Optional Subjects');
}

function setStatCard(id, value, label) {
  const numEl = document.querySelector(`#${id} .stat-number`);
  if (numEl) numEl.textContent = value;
}

function renderSectionProgress() {
  document.querySelectorAll('.section-card').forEach(card => {
    const sectionId = card.getAttribute('data-section');
    const fill = card.querySelector('.progress-fill');
    if (!fill || !sectionId) return;
    const total = countSectionTopics(sectionId);
    const revised = countRevisedInSection(sectionId);
    const pct = total ? Math.round((revised / total) * 100) : 0;
    fill.style.width = pct + '%';
    const label = card.querySelector('.progress-label');
    if (label) label.textContent = `${revised}/${total} topics revised`;
  });
}

function renderRecentlyRevised() {
  const container = document.getElementById('recentlyRevisedList');
  if (!container) return;
  const map = getRevisedMap();
  const entries = Object.entries(map)
    .map(([id, meta]) => ({ id, ...meta }))
    .sort((a, b) => new Date(b.at) - new Date(a.at))
    .slice(0, 8);

  if (entries.length === 0) {
    container.innerHTML = "<p style=\"opacity:0.75;font-size:0.9rem;\">You haven't marked any topics as revised yet — open any section above and tap the checkbox next to a topic to start tracking your rapid-revision pass.</p>";
    return;
  }

  container.innerHTML = entries.map(e => `
    <div class="update-item">
      <div class="update-date">${new Date(e.at).toLocaleDateString()}</div>
      <div class="update-title">${e.topic || ''}</div>
      <div class="update-category">${e.category || ''}</div>
    </div>
  `).join('');
}

// ---------------------------------------------------------------------------
// Study Timer — now accumulates a real persisted total
// ---------------------------------------------------------------------------
function initializeTimer() {
  updateTimerDisplay();
}

function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    timerInterval = setInterval(() => {
      timerSeconds++;
      const total = readJSON(STUDY_SECONDS_KEY, 0) + 1;
      writeJSON(STUDY_SECONDS_KEY, total);
      updateTimerDisplay();
      if (timerSeconds % 60 === 0) renderDashboardStats();
    }, 1000);
    showNotification('Timer started', 'success');
  }
}

function pauseTimer() {
  if (timerRunning) {
    timerRunning = false;
    clearInterval(timerInterval);
    renderDashboardStats();
    showNotification('Timer paused', 'info');
  }
}

function resetTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
  timerSeconds = 0;
  updateTimerDisplay();
  showNotification('Session timer reset (your total accumulated hours are kept)', 'info');
}

function updateTimerDisplay() {
  const display = document.getElementById('timerDisplay');
  if (display) {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

// ---------------------------------------------------------------------------
// Theme
// ---------------------------------------------------------------------------
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-color-scheme', newTheme);
  userSettings.theme = newTheme;
  writeJSON('upscUserSettings', userSettings);

  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  showNotification(`Switched to ${newTheme} theme`, 'success');
}

function applyTheme() {
  if (userSettings.theme === 'auto') {
    document.documentElement.removeAttribute('data-color-scheme');
  } else {
    document.documentElement.setAttribute('data-color-scheme', userSettings.theme);
  }
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const isDark = userSettings.theme === 'dark' ||
      (userSettings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  }
}

// ---------------------------------------------------------------------------
// Settings — now actually persisted
// ---------------------------------------------------------------------------
function openSettings() {
  const modal = document.getElementById('settingsModal');
  const themeSelect = document.getElementById('themeSelect');
  const studyGoal = document.getElementById('studyGoal');
  const notifications = document.getElementById('notifications');

  if (modal) {
    if (themeSelect) themeSelect.value = userSettings.theme;
    if (studyGoal) studyGoal.value = userSettings.studyGoal;
    if (notifications) notifications.value = userSettings.notifications;
    modal.classList.remove('hidden');
  }
}

function closeSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.add('hidden');
}

function saveSettings() {
  const themeSelect = document.getElementById('themeSelect');
  const studyGoal = document.getElementById('studyGoal');
  const notifications = document.getElementById('notifications');

  if (themeSelect) userSettings.theme = themeSelect.value;
  if (studyGoal) userSettings.studyGoal = parseInt(studyGoal.value, 10);
  if (notifications) userSettings.notifications = notifications.value;

  writeJSON('upscUserSettings', userSettings);
  applyTheme();
  closeSettings();
  showNotification('Settings saved', 'success');
}

function loadUserSettings() {
  userSettings = readJSON('upscUserSettings', { theme: 'auto', studyGoal: 4, notifications: 'enabled' });
}

// ---------------------------------------------------------------------------
// Notifications
// ---------------------------------------------------------------------------
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification status status--${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 3000;
    padding: 12px 16px;
    border-radius: 8px;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
    max-width: 80vw;
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in forwards';
    setTimeout(() => {
      if (document.body.contains(notification)) document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

const injectedStyle = document.createElement('style');
injectedStyle.textContent = `
  @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
  @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
  .topic-meta { display: flex; gap: 12px; margin-bottom: 16px; align-items: center; }
  .topic-section { color: var(--color-text-secondary); font-size: 14px; }
`;
document.head.appendChild(injectedStyle);

// ---------------------------------------------------------------------------
// Global click / key handlers
// ---------------------------------------------------------------------------
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeModal();
    closeSettings();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeSettings();
    hideSearch();
  }
});

// Expose functions used via inline onclick handlers
window.toggleSearch = toggleSearch;
window.toggleTheme = toggleTheme;
window.openSettings = openSettings;
window.closeSettings = closeSettings;
window.saveSettings = saveSettings;
window.closeModal = closeModal;
window.toggleRevisedFromModal = toggleRevisedFromModal;
window.startTimer = startTimer;
window.pauseTimer = pauseTimer;
window.resetTimer = resetTimer;
