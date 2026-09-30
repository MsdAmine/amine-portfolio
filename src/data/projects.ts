export const featuredProjects = [
  {
    title: "CSPJ Mini-Mail",
    category: "Secure Institutional Platform",
    description:
      "A full-stack institutional messaging platform focused on secure communication, role-based access, and administrative workflows.",
    technologies: [
      "ASP.NET Core 10",
      "React 19",
      "SQL Server",
      "JWT",
      "TOTP 2FA",
    ],
    highlights: [
      "Secure authentication with JWT and TOTP-based 2FA",
      "Thread-based messaging with attachments and group conversations",
      "Role-based administration and audit logging",
      "Support ticketing and institutional management",
    ],
    github: "https://github.com/MsdAmine/cspj-mini-mail",
    image: "/projects/cspj-mail.png",
  },

  {
    title: "Artisan Marketplace",
    category: "Full-Stack Web Application",
    description:
      "A full-stack marketplace connecting customers with independent artisans, combining e-commerce features with social interactions and data-driven recommendations.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Neo4j",
    ],
    highlights: [
      "JWT authentication with customer, artisan, and admin roles",
      "Product catalog, cart, orders, and artisan profiles",
      "Neo4j-powered social graph and recommendations",
      "Redis caching and notification streams",
    ],
    github: "https://github.com/MsdAmine/artisan-marketplace",
    image: "/projects/artisan-marketplace.png",
  },

  {
    title: "NutriSafe",
    category: "EMSI TECH HACKATHON 2026",
    description:
      "A smart food safety companion designed to help users scan food products, detect allergens, and make more informed food choices.",
    technologies: [
      "Android",
      "Kotlin",
      "Firebase",
      "AI",
      "Barcode Scanning",
    ],
    highlights: [
      "Food product and ingredient scanning",
      "Allergen detection and food safety information",
      "AI-powered food suggestions",
      "Google Sign-In and direct APK distribution",
    ],
    github: "https://github.com/MsdAmine/SafeBite",
    live: "https://nutrisafe-website.vercel.app/",
    image: "/projects/nutrisafe.png",
  },
];

export const otherProjects = [
  {
    title: "E-Recruitment System",
    category: "Recruitment Platform",
    description:
      "A full-stack recruitment platform supporting candidates and recruiters through job offers, applications, role-based workflows, and notifications.",
    technologies: [
      "Spring Boot",
      "Java 17",
      "React",
      "TypeScript",
      "PostgreSQL",
      "JWT",
    ],
    highlights: [
      "Candidate and recruiter role-based access",
      "Job offer lifecycle management",
      "Application tracking and status updates",
      "Notifications for recruitment events",
    ],
    github: "https://github.com/MsdAmine/e-recrutement-system",
  },

  {
    title: "Medical Office Management",
    category: "Healthcare Management",
    description:
      "An internal medical practice management application designed to centralize patient information and streamline daily operations through role-based workflows.",
    technologies: [
      "ASP.NET Core MVC",
      "Razor",
      "Tailwind CSS",
      "C#",
    ],
    highlights: [
      "Role-based access for administrators, doctors, secretaries, and patients",
      "Patient management with filtering and detailed views",
      "Operational dashboard with KPIs",
      "Structured MVC architecture with Controllers and ViewModels",
    ],
    github: "https://github.com/MsdAmine/Medical-Office-Management",
  },
];