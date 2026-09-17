export type Project = {
  id: "hoyturnos" | "pixoai" | "paytor" | "ceei";
  title: string;
  category: string;
  description: string;
  contribution: string;
  technologies: string[];
  href: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export const projects: Project[] = [
  {
    id: "hoyturnos",
    title: "HoyTurnos",
    category: "Appointment booking SaaS",
    description:
      "A multi-tenant booking platform for businesses that manage professionals, services, schedules, branches, payments, and customer appointments.",
    contribution:
      "I built the product end to end, translating scheduling rules and business workflows into a system that lets customers book while businesses keep control of availability and operations.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Multi-tenancy",
      "Mercado Pago",
    ],
    href: "https://www.hoyturnos.com/",
  },
  {
    id: "pixoai",
    title: "PixoAI",
    category: "AI image generation · mobile",
    description:
      "An iOS-focused consumer app that turns plain-language prompts into images for interiors, fashion, product mockups, and portraits.",
    contribution:
      "I connected generative image APIs to a mobile product, covering the creation flow, subscription lifecycle, App Store delivery, and the supporting web experience.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "AI APIs",
      "Superwall",
      "App Store",
    ],
    href: "https://aipixo.vercel.app/",
  },
  {
    id: "paytor",
    title: "Paytor",
    category: "Payments infrastructure",
    description:
      "A platform that makes Mercado Pago easier to add to a product, with tools for products, one-time payments, subscriptions, checkout links, and transaction tracking.",
    contribution:
      "I built the product around a simple integration path: developers get a smaller surface to connect, while sellers get an interface for the payment operations behind it.",
    technologies: [
      "Next.js",
      "Mercado Pago",
      "Payments",
      "Subscriptions",
      "API integration",
    ],
    href: "https://paytor.vercel.app/",
  },
  {
    id: "ceei",
    title: "CEEI",
    category: "Institutional platform · client work",
    description:
      "The digital home of an international strategic studies center, designed to communicate its research, publications, courses, and institutional work.",
    contribution:
      "I took the project from an Astro prototype used to validate the direction to a client-managed production site, preserving the design while adapting it for ongoing publishing and iteration.",
    technologies: [
      "Astro",
      "WordPress",
      "Custom theme",
      "Responsive UI",
      "Client delivery",
    ],
    href: "https://www.ceei.org/",
    secondaryHref: "https://ceei.vercel.app/",
    secondaryLabel: "View original prototype",
  },
];

export const experience = [
  {
    period: "2024 — Present",
    company: "Wuala",
    role: "Backend Engineer",
    description:
      "Building backend systems and integrations that synchronize ERP data with e-commerce platforms and digital sales channels.",
    details:
      "My work spans API integrations, asynchronous processing, concurrency, data consistency, and the operational details that keep connected systems reliable.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Express",
      "SQL",
      "REST APIs",
      "Integrations",
    ],
  },
  {
    period: "2023 — 2024",
    company: "Universidad Nacional de Córdoba",
    role: "Full Stack Developer",
    description:
      "Developed internal systems for accounting and academic administration, working across backend, frontend, database design, and requirements analysis.",
    details:
      "I worked as both developer and Product Owner on an academic-records project, turning stakeholder requirements into maintainable product workflows.",
    technologies: [
      "Full stack",
      "Data modeling",
      "Product ownership",
      "Requirements",
    ],
  },
];

export const toolbox = [
  {
    label: "Backend",
    items: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Express",
      "REST APIs",
      "Spring Boot",
      "Java",
    ],
  },
  {
    label: "Data",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQL Server",
      "SQLite",
      "Drizzle",
      "Sequelize",
    ],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "React Native", "Vue.js", "Tailwind CSS"],
  },
  {
    label: "Infrastructure & tools",
    items: [
      "Docker",
      "AWS",
      "Git",
      "Bitbucket Pipelines",
      "RabbitMQ",
      "Postman",
    ],
  },
  {
    label: "Engineering",
    items: [
      "API design",
      "System integration",
      "Concurrency",
      "Async processing",
      "SOLID",
      "Testing",
      "Code reviews",
      "Documentation",
    ],
  },
];

export const problems = [
  {
    title: "Connecting systems that were not designed to talk.",
    body: "ERP systems, marketplaces, e-commerce platforms, payment providers, and external APIs.",
  },
  {
    title: "Turning business rules into maintainable software.",
    body: "Workflows, permissions, states, validations, and data consistency that match how a business actually works.",
  },
  {
    title: "Making backend processes reliable.",
    body: "Concurrency, asynchronous work, integrations, observability, and failure handling.",
  },
  {
    title: "Building products from an idea to something useful.",
    body: "From database design and APIs to interfaces, payments, deployment, and iteration.",
  },
];
