// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Smart Dent AI",
    description:
      "An AI-powered dental diagnostic platform designed to assist professionals with precision and speed.",
    href: "https://smart-dent-ai-app.vercel.app/",
    image: "/assets/projects/dental.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "AI/ML" },
    ],
  },
  {
    id: 2,
    name: "Symetra",
    description:
      "A sophisticated and modern landing page showcasing sleek design and seamless user experience.",
    href: "https://symetra-main.vercel.app/",
    image: "/assets/projects/image.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "K27 Animated Web",
    description:
      "An immersive, highly animated web experience featuring cutting-edge frontend interactions.",
    href: "https://react-animated-web-l9i8.vercel.app/",
    image: "/assets/projects/k27.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Framer Motion" },
      { id: 3, name: "GSAP" },
    ],
  },
  {
    id: 4,
    name: "One Piece Fan Hub",
    description:
      "A dynamic platform dedicated to One Piece fans, featuring character data and series information.",
    href: "https://one-piece-eight-henna.vercel.app/",
    image: "/assets/projects/one-piece.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Vite" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 5,
    name: "Talent Ella",
    description:
      "A comprehensive talent management and recruitment platform streamlining the hiring process.",
    href: "https://www.talentella.in/",
    image: "/assets/projects/tallent-ella.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
    ],
  },
  {
    id: 6,
    name: "Animated Portfolio",
    description:
      "A stunning, high-performance portfolio built with Astro and advanced animation libraries.",
    href: "https://astro-portfolio-opal-ten.vercel.app/",
    image: "/assets/projects/animate-portfolio.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Astro" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "GSAP" },
    ],
  },
  {
    id: 7,
    name: "Thrifty Clothing",
    description:
      "A modern e-commerce marketplace for sustainable and thrifted fashion enthusiasts.",
    href: "https://thrifty-clothing-frontend.vercel.app/",
    image: "/assets/projects/thrift.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Stripe" },
      { id: 3, name: "Redux" },
    ],
  },
];

export const socials = [
  { name: "LinkedIn", href: import.meta.env.VITE_USER_LINKEDIN || "https://www.linkedin.com/in/shaurya-kumar-1487aa365/" },
  { name: "GitHub", href: import.meta.env.VITE_USER_GITHUB || "https://github.com/Shaurya1608" },
];

