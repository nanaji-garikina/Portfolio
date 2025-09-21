// ---------- DATA (updated with your changes) ----------
const DATA = {
  name: "Nanaji Garikina",
  roles: ["Frontend Developer", "Backend Developer", "DSA Enthusiast"],
  objective:
    "Motivated and tech-savvy IT graduate seeking an entry-level position to apply skills in programming, networking, and system analysis while continuing to learn and grow.",
  about:
    "I'm a creative developer who enjoys building dynamic, responsive web apps. Comfortable across the stack—HTML/CSS/JS, React for UI, Node/Express + Python basics on the backend—and solid with DSA in C++/Java.",
  phone: "8374443995",
  email: "nanajigarikina7643@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/nanaji-garikina/",
    github: "https://github.com/nanaji-garikina",
    mailto: "mailto:nanajigarikina7643@gmail.com",
  },
  skills: {
    "Frontend": [
      ["HTML", 95],
      ["CSS / Flexbox", 90],
      ["Bootstrap", 85],
      ["JavaScript", 85],
      ["React.js", 80],
    ],
    "Backend": [
      ["Node.js", 75],
      ["Express", 70],
      ["Python (basics)", 65],
    ],
    "Databases": [["SQLite", 75]],
    "Other": [
      ["C++", 95],
      ["Java", 80],
      ["Data Structures & Algorithms", 80],
    ],
  },
  experience: [
    {
      role: "DSA Trainee",
      org: "Smart Interviews",
      when: "Jan 2025 – Jun 2025",
      location: "Offline",
      bullets: [
        "Completed intensive training in Data Structures & Algorithms.",
        "Solved a wide range of problems using C++ and Java.",
        "Focused on interview strategies and coding efficiency.",
      ],
    },
    {
      role: "Web Development Intern",
      org: "Motion Cut",
      when: "Jan 2025 – Mar 2025",
      location: "Remote",
      bullets: [
        "Developed responsive websites using HTML, CSS, and JavaScript.",
        "Built dynamic UI with React.js and integrated REST APIs.",
      ],
    },
  ],
  projects: [
    {
      title: "Tic Tac Toe Game",
      stack: "C++ (console)",
      link: "https://github.com/nanaji-garikina/Tic-Tac-Toe-game_in_cpp",
      desc: "Two-player console game with input validation and clean game logic.",
    },
    {
      title: "Portfolio Website",
      stack: "HTML, CSS, JavaScript",
      link: "https://github.com/nanaji-garikina/Portfolio.git", // replace with your GitHub repo link if available
      desc: "Personal responsive portfolio website showcasing skills, projects, and experience.",
    },
    {
      title: "SGPA Calculator",
      stack: "HTML,CSS, JavaScript",
      link: "https://nanaji-garikina.github.io/SGPA_Calculator/", // replace with your GitHub repo link if available
      desc: "Created an SGPA Calculator for quick and reliable grade point calculation.",
    },
    {
      title: "Weather App",
      stack: "HTML, CSS, JavaScript,REST API",
      link: "https://github.com/nanaji-garikina/weather-app.git",
      desc: "Responsive web app using HTML, CSS, JavaScript, and REST API for real-time weather data.",
    },
  ],

  education: [
    {
      school: "Raghu Institute Of Technology, Visakhapatnam",
      program: "B.Tech, Computer Science and Engineering",
      when: "2022 – 2026",
      details: "CGPA: 8.26",
    },
    {
      school: "A.I.A.T Junior College",
      program: "Intermediate (MPC)",
      when: "2020 – 2022",
      details: "Percentage: 94.3",
    },
    {
      school: "Z.P High School Rambilli",
      program: "Secondary School Certificate",
      when: "2019 – 2020",
      details: "Percentage: 93.3",
    },
  ],

  certifications: [
  {
    name: "Problem Solving Through Programming in C — NPTEL",
    link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs121/Course/NPTEL23CS121S55010579620269695.pdf"
  },
  {
    name: "Programming in Modern C++ — NPTEL",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs44/Course/NPTEL24CS44S117020012730599994.pdf"
  },
  {
    name: "The Joy of Computing using Python — NPTEL",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs113/Course/NPTEL24CS113S75290043904160587.pdf"
  },

  {
    name: "The Complete Full-Stack Web Development Bootcamp — Udemy",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-fd6f8628-539a-4580-bdf4-cb792fa9d66c.jpg"
  },
 
  {
    name: "Data Structures and Algorithms — Smart Interviews",
    link: "https://smartinterviews.in/certificate/bb3f3f3f"
  }
  ],

  stats: { projects: 4, experiences: 2, certs: 5, cgpa: "8.26" },
};

// ---------- Helpers ----------
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// Mobile nav
$(".menu").addEventListener("click", () =>
  $(".links").classList.toggle("show")
);

// Active link on scroll
const sections = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "certifications",
  "contact",
].map((id) => $("#" + id));
window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  let current = "home";
  sections.forEach((sec) => {
    if (sec && sec.offsetTop <= y) current = sec.id;
  });
  $$(".links a").forEach((a) =>
    a.classList.toggle(
      "active",
      a.getAttribute("href") === "#" + current
    )
  );
});

// Theme toggle
const root = document.documentElement;
$("#themeToggle").addEventListener("click", () => {
  const light = root.classList.toggle("light");
  $("#themeToggle").textContent = light ? "🌞" : "🌙";
});

// ---------- Typing effect ----------
const typingSpan = $(".typing");
let roleIdx = 0,
  charIdx = 0,
  typing = true;
function loopType() {
  const role = DATA.roles[roleIdx];
  if (typing) {
    typingSpan.textContent = role.slice(0, ++charIdx);
    if (charIdx === role.length) {
      typing = false;
      setTimeout(loopType, 1200);
      return;
    }
  } else {
    typingSpan.textContent = role.slice(0, --charIdx);
    if (charIdx === 0) {
      typing = true;
      roleIdx = (roleIdx + 1) % DATA.roles.length;
    }
  }
  setTimeout(loopType, typing ? 90 : 50);
}
document.addEventListener("DOMContentLoaded", loopType);

// ---------- Fill content ----------
$("#objective").textContent = DATA.objective;
$("#aboutText").textContent = DATA.about;

$("#mail").href = DATA.links.mailto;
$("#linkedin").href = DATA.links.linkedin;
$("#github").href = DATA.links.github;

$("#contactPhone").textContent = `📞 ${DATA.phone}`;
$("#contactEmail").href = DATA.links.mailto;
$("#contactEmail").textContent = `📧 ${DATA.email}`;
$("#contactLinkedin").href = DATA.links.linkedin;
$("#contactGithub").href = DATA.links.github;
$("#year").textContent = new Date().getFullYear();

// Quick facts
const facts = [
  "Web Development",
  "React.js",
  "Node.js",
  "C++ & Java",
  "DSA",
  "REST APIs",
];
const factsWrap = $("#quickFacts");
facts.forEach((f) => {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = f;
  factsWrap.appendChild(chip);
});

// Skills
const skillsGrid = $("#skillsGrid");
Object.entries(DATA.skills).forEach(([group, items]) => {
  const card = document.createElement("div");
  card.className = "card skill-card";
  const title = document.createElement("div");
  title.className = "skill-head";
  title.innerHTML = `<h3>${group}</h3><span class="muted">${items.length} items</span>`;
  card.appendChild(title);
  items.forEach(([name, pct]) => {
    const wrap = document.createElement("div");
    wrap.style.margin = "10px 0";
    wrap.innerHTML = `<div class="muted" style="display:flex;justify-content:space-between">
        <span>${name}</span><span>${pct}%</span></div>
      <div class="progress"><span style="width:${pct}%"></span></div>`;
    card.appendChild(wrap);
  });
  skillsGrid.appendChild(card);
});

// Experience
const expWrap = $("#experienceTimeline");
DATA.experience.forEach((e) => {
  const div = document.createElement("div");
  div.className = "card exp observe";
  div.innerHTML = `<h3>${e.role} — <span class="muted">${e.org}</span></h3>
                   <div class="when">${e.when} · ${e.location}</div>`;
  const ul = document.createElement("ul");
  e.bullets.forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    ul.appendChild(li);
  });
  div.appendChild(ul);
  expWrap.appendChild(div);
});

// Projects
const projWrap = $("#projectsGrid");
DATA.projects.forEach((p) => {
  const card = document.createElement("div");
  card.className = "card observe";
  card.innerHTML = `<h3>${p.title}</h3>
     <div class="kicker">${p.stack}</div>
     <p class="muted">${p.desc}</p>
     <a class="btn-mini" href="${p.link}" target="_blank" rel="noopener">GitHub →</a>`;
  projWrap.appendChild(card);
});

// Education
const eduWrap = $("#educationGrid");
DATA.education.forEach((ed) => {
  const card = document.createElement("div");
  card.className = "card edu observe";
  card.innerHTML = `<h3>${ed.school}</h3>
     <div class="meta">${ed.program}</div>
     <div class="meta">${ed.when}</div>
     <p class="muted">${ed.details}</p>`;
  eduWrap.appendChild(card);
});

// Certifications
const certWrap = $("#certs");
DATA.certifications.forEach((c) => {
  const div = document.createElement("div");
  div.className = "cert-card";
  div.innerHTML = `
    <a href="${c.link}" target="_blank" rel="noopener">
      <p>${c.name}</p>
    </a>
  `;
  certWrap.appendChild(div);
});


// Stats
$("#statProjects").textContent = `${DATA.stats.projects}+`;
$("#statExperiences").textContent = `${DATA.stats.experiences}`;
$("#statCerts").textContent = `${DATA.stats.certs}`;
$("#statCGPA").textContent = DATA.stats.cgpa;

// Interactions
const links = document.querySelectorAll('.links a[href^="#"]');
links.forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(a.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    document.querySelector(".links").classList.remove("show");
  })
);

// Observer fade-in
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".observe").forEach((el) => io.observe(el));

// Contact form demo
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
  e.target.reset();
});

