/* ===========================================================
   DATA — skills, projects, typed roles
   =========================================================== */

const TYPED_ROLES = [
  "Python Developer",
  "Power BI Developer",
  "Data Analyst",
  "Java Full Stack Developer"
];

const SKILLS = [
  // Languages
  { name:"Python", cat:"lang", icon:"fa-brands fa-python", color:"#3776AB", level:"Advanced" },
  { name:"Java", cat:"lang", icon:"fa-brands fa-java", color:"#EA2D2E", level:"Advanced" },
  { name:"SQL", cat:"lang", icon:"fa-solid fa-database", color:"#38BDF8", level:"Advanced" },
  { name:"JavaScript", cat:"lang", icon:"fa-brands fa-js", color:"#F7DF1E", level:"Intermediate" },
  { name:"HTML", cat:"lang", icon:"fa-brands fa-html5", color:"#E34F26", level:"Advanced" },
  { name:"CSS", cat:"lang", icon:"fa-brands fa-css3-alt", color:"#1572B6", level:"Advanced" },

  // Frameworks
  { name:"React", cat:"frame", icon:"fa-brands fa-react", color:"#61DAFB", level:"Intermediate" },
  { name:"Node.js", cat:"frame", icon:"fa-brands fa-node-js", color:"#339933", level:"Intermediate" },
  { name:"Angular", cat:"frame", icon:"fa-brands fa-angular", color:"#DD0031", level:"Intermediate" },
  { name:"REST APIs", cat:"frame", icon:"fa-solid fa-plug", color:"#8B5CF6", level:"Advanced" },

  // Analytics
  { name:"Power BI", cat:"analytics", icon:"fa-solid fa-chart-column", color:"#F2C811", level:"Advanced" },
  { name:"Excel", cat:"analytics", icon:"fa-solid fa-table-cells", color:"#217346", level:"Advanced" },
 { name:"Pandas", cat:"analytics", icon:"https://cdn.simpleicons.org/pandas/150458", iconType:"img", color:"#150458", level:"Advanced" },
  { name:"NumPy", cat:"analytics", icon:"fa-solid fa-square-root-variable", color:"#4DABCF", level:"Advanced" },
  { name:"Matplotlib", cat:"analytics", icon:"fa-solid fa-chart-line", color:"#38BDF8", level:"Intermediate" },
  { name:"MySQL", cat:"analytics", icon:"fa-solid fa-server", color:"#4479A1", level:"Advanced" },

  // Tools
  { name:"Git", cat:"tools", icon:"fa-brands fa-git-alt", color:"#F05032", level:"Advanced" },
  { name:"GitHub", cat:"tools", icon:"fa-brands fa-github", color:"#F8FAFC", level:"Advanced" },
  { name:"VS Code", cat:"tools", icon:"fa-solid fa-code", color:"#38BDF8", level:"Advanced" },
  { name:"Linux", cat:"tools", icon:"fa-brands fa-linux", color:"#FCC624", level:"Intermediate" },
  { name:"Windows", cat:"tools", icon:"fa-brands fa-windows", color:"#00A4EF", level:"Advanced" },
];

const PROJECT_GRAPHICS = {
  surveillance: `
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gSurv" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity=".22"/>
          <stop offset="100%" stop-color="var(--accent-2)" stop-opacity=".22"/>
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#gSurv)"/>
      <g stroke="var(--accent)" stroke-width="1" opacity=".35">
        <line x1="133" y1="0" x2="133" y2="250"/>
        <line x1="266" y1="0" x2="266" y2="250"/>
        <line x1="0" y1="125" x2="400" y2="125"/>
      </g>
      <g fill="none" stroke="var(--accent)" stroke-width="2.5">
        <rect x="20" y="20" width="93" height="85" rx="6" opacity=".9"/>
        <rect x="153" y="20" width="93" height="85" rx="6" opacity=".5"/>
        <rect x="286" y="20" width="93" height="85" rx="6" opacity=".5"/>
        <rect x="20" y="145" width="93" height="85" rx="6" opacity=".5"/>
        <rect x="153" y="145" width="93" height="85" rx="6" opacity=".9"/>
        <rect x="286" y="145" width="93" height="85" rx="6" opacity=".5"/>
      </g>
      <circle cx="66" cy="62" r="7" fill="var(--accent-2)"/>
      <circle cx="199" cy="187" r="7" fill="var(--accent-2)"/>
      <g stroke="var(--accent-2)" stroke-width="1.5" fill="none" opacity=".8">
        <path d="M50 45 L66 62 L82 45" />
        <path d="M183 170 L199 187 L215 170" />
      </g>
      <circle cx="350" cy="40" r="5" fill="#F87171"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle>
      <text x="335" y="58" font-family="monospace" font-size="9" fill="var(--text-dim)">REC</text>
    </svg>`,

  sentiment: `
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gSent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity=".2"/>
          <stop offset="100%" stop-color="var(--accent-2)" stop-opacity=".2"/>
        </linearGradient>
        <linearGradient id="gSentLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="var(--accent)"/>
          <stop offset="100%" stop-color="var(--accent-2)"/>
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#gSent)"/>
      <g stroke="var(--border)" stroke-width="1">
        <line x1="0" y1="60" x2="400" y2="60"/>
        <line x1="0" y1="120" x2="400" y2="120"/>
        <line x1="0" y1="180" x2="400" y2="180"/>
      </g>
      <polyline points="20,170 70,140 120,155 170,90 220,110 270,60 320,80 380,40"
        fill="none" stroke="url(#gSentLine)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <polygon points="20,170 70,140 120,155 170,90 220,110 270,60 320,80 380,40 380,230 20,230"
        fill="var(--accent)" opacity=".08"/>
      <g fill="var(--accent-2)">
        <circle cx="170" cy="90" r="4"/>
        <circle cx="270" cy="60" r="4"/>
        <circle cx="380" cy="40" r="4"/>
      </g>
      <g font-family="monospace" font-size="10" fill="var(--text-dim)">
        <text x="20" y="205">😟 Neg</text>
        <text x="170" y="205">😐 Neu</text>
        <text x="320" y="205">😊 Pos</text>
      </g>
    </svg>`,

  rfm: `
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gRfm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity=".2"/>
          <stop offset="100%" stop-color="var(--accent-2)" stop-opacity=".2"/>
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#gRfm)"/>
      <g stroke="var(--border)" stroke-width="1">
        <line x1="40" y1="20" x2="40" y2="220"/>
        <line x1="40" y1="220" x2="380" y2="220"/>
      </g>
      <g font-family="monospace" font-size="9" fill="var(--text-dimmer)">
        <text x="160" y="240">Frequency →</text>
        <text x="8" y="120" transform="rotate(-90 8 120)">Monetary →</text>
      </g>
      <g>
        <circle cx="100" cy="180" r="9" fill="var(--accent)" opacity=".55"/>
        <circle cx="140" cy="150" r="13" fill="var(--accent)" opacity=".65"/>
        <circle cx="190" cy="100" r="18" fill="var(--accent-2)" opacity=".75"/>
        <circle cx="250" cy="70" r="24" fill="var(--accent-2)" opacity=".85"/>
        <circle cx="310" cy="50" r="14" fill="var(--accent)" opacity=".6"/>
        <circle cx="220" cy="170" r="8" fill="var(--accent)" opacity=".4"/>
        <circle cx="160" cy="200" r="6" fill="var(--accent)" opacity=".4"/>
      </g>
      <g font-family="monospace" font-size="9" fill="var(--text)" opacity=".85">
        <text x="232" y="44">High-Value</text>
      </g>
    </svg>`,

  retail: `
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gRetail" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity=".2"/>
          <stop offset="100%" stop-color="var(--accent-2)" stop-opacity=".2"/>
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#gRetail)"/>
      <g stroke="var(--border)" stroke-width="1">
        <line x1="30" y1="20" x2="30" y2="210"/>
        <line x1="30" y1="210" x2="380" y2="210"/>
      </g>
      <g>
        <rect x="50" y="120" width="34" height="90" rx="3" fill="var(--accent)" opacity=".5"/>
        <rect x="100" y="90" width="34" height="120" rx="3" fill="var(--accent)" opacity=".65"/>
        <rect x="150" y="140" width="34" height="70" rx="3" fill="var(--accent)" opacity=".45"/>
        <rect x="200" y="60" width="34" height="150" rx="3" fill="var(--accent-2)" opacity=".85"/>
        <rect x="250" y="100" width="34" height="110" rx="3" fill="var(--accent)" opacity=".6"/>
        <rect x="300" y="80" width="34" height="130" rx="3" fill="var(--accent-2)" opacity=".75"/>
        <rect x="350" y="130" width="20" height="80" rx="3" fill="var(--accent)" opacity=".4"/>
      </g>
      <polyline points="67,150 117,120 167,160 217,75 267,130 317,95"
        fill="none" stroke="var(--text)" stroke-width="1.5" stroke-dasharray="4 3" opacity=".6"/>
      <g font-family="monospace" font-size="9" fill="var(--text-dimmer)">
        <text x="195" y="232">Store-wise Revenue</text>
      </g>
    </svg>`,

  placement: `
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gPlace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity=".2"/>
          <stop offset="100%" stop-color="var(--accent-2)" stop-opacity=".2"/>
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#gPlace)"/>
      <rect x="40" y="30" width="320" height="32" rx="6" fill="var(--card)" stroke="var(--border)"/>
      <circle cx="58" cy="46" r="4" fill="var(--accent)"/>
      <rect x="72" y="40" width="120" height="6" rx="3" fill="var(--text-dim)" opacity=".5"/>
      <g font-family="monospace" font-size="9" fill="var(--accent)" opacity=".8">
        <text x="300" y="50">300+ records</text>
      </g>
      <g>
        <rect x="40" y="80" width="150" height="60" rx="6" fill="var(--card)" stroke="var(--border)"/>
        <circle cx="65" cy="105" r="12" fill="var(--accent)" opacity=".5"/>
        <rect x="85" y="98" width="80" height="6" rx="3" fill="var(--text-dim)" opacity=".5"/>
        <rect x="85" y="112" width="55" height="6" rx="3" fill="var(--text-dim)" opacity=".3"/>

        <rect x="210" y="80" width="150" height="60" rx="6" fill="var(--card)" stroke="var(--border)"/>
        <circle cx="235" cy="105" r="12" fill="var(--accent-2)" opacity=".5"/>
        <rect x="255" y="98" width="80" height="6" rx="3" fill="var(--text-dim)" opacity=".5"/>
        <rect x="255" y="112" width="55" height="6" rx="3" fill="var(--text-dim)" opacity=".3"/>

        <rect x="40" y="155" width="150" height="60" rx="6" fill="var(--card)" stroke="var(--border)"/>
        <circle cx="65" cy="180" r="12" fill="var(--accent-2)" opacity=".5"/>
        <rect x="85" y="173" width="80" height="6" rx="3" fill="var(--text-dim)" opacity=".5"/>
        <rect x="85" y="187" width="55" height="6" rx="3" fill="var(--text-dim)" opacity=".3"/>

        <rect x="210" y="155" width="150" height="60" rx="6" fill="var(--card)" stroke="var(--border)"/>
        <circle cx="235" cy="180" r="12" fill="var(--accent)" opacity=".5"/>
        <rect x="255" y="173" width="80" height="6" rx="3" fill="var(--text-dim)" opacity=".5"/>
        <rect x="255" y="187" width="55" height="6" rx="3" fill="var(--text-dim)" opacity=".3"/>
      </g>
      <circle cx="345" cy="100" r="5" fill="#4ADE80"/>
    </svg>`
};

const PROJECTS = [
  {
    title:"CCTV Surveillance Streaming & Management Platform",
    graphic:"surveillance",
    date:"May 2025",
    desc:"Scalable video surveillance platform supporting 10+ simultaneous live CCTV feeds with real-time recording and playback. RESTful APIs cut average server response time by 30%, with role-based access control achieving 99.9% uptime.",
    stack:["Python","REST API","SQL-Plus","JavaScript"],
    filters:["python","sql","web"],
    tag:"Platform",
    icon:"fa-solid fa-video"
  },
  {
    title:"Sentiment Analysis Dashboard",
    graphic:"sentiment",
    date:"Jul 2024",
    desc:"Automated data pipeline processing 50,000+ text entries with Python NLP libraries. Interactive Power BI dashboards visualize sentiment trends, reducing reporting turnaround by 40% and surfacing top-performing keywords.",
    stack:["Python","MySQL","Power BI","Excel"],
    filters:["python","sql","powerbi"],
    tag:"Dashboard",
    icon:"fa-solid fa-face-smile"
  },
  {
    title:"Customer Credit & Sales Behavior Analysis",
    graphic:"rfm",
    date:"Mar 2025",
    desc:"End-to-end customer analytics pipeline with RFM segmentation to identify high-value cohorts and predict churn — methodology directly applicable to asset-backed lending. Power BI dashboards with 10+ KPIs projected 15–20% retention improvement.",
    stack:["Python","Pandas","SQL","Power BI"],
    filters:["python","sql","powerbi"],
    tag:"Analytics",
    icon:"fa-solid fa-chart-pie"
  },
  {
    title:"Walmart Retail Sales Analysis",
    graphic:"retail",
    date:"Sep 2024",
    desc:"End-to-end retail analytics pipeline processing 100K+ sales records. Cleaned data with Pandas improving quality by ~30%, then ran 25+ advanced SQL queries to uncover store-wise performance and seasonal demand trends.",
    stack:["Python","MySQL","Pandas"],
    filters:["python","sql"],
    tag:"Analytics",
    icon:"fa-solid fa-cart-shopping"
  },
  {
    title:"College Placement Management System",
    graphic:"placement",
    date:"Dec 2023",
    desc:"Centralized placement portal managing 300+ student records and company listings on a secure MySQL backend. Achieved 100% data integrity in testing and cut manual recruiter data entry time by 35%.",
    stack:["MySQL","JavaScript","HTML","CSS"],
    filters:["sql","web"],
    tag:"Web App",
    icon:"fa-solid fa-building-columns"
  },
];
