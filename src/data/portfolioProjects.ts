import { publicUrl } from "../lib/publicUrl";

export interface PortfolioProject {
  title: string;

  summary: string;

  detail: string;
  techStack: string[];
  thumbnail: string;
  githubUrl: string;

  highlights: string[];
}

export const featuredCapstone: PortfolioProject = {
  title: "WrenchIT Front-End Development",
  summary:
    "Front-end implementation for a team-based web platform that helps users discover, compare, and review auto repair services.",
  detail:
    "WrenchIT is a team-based web application designed to improve how users find and evaluate auto repair services. I focused on the front-end: a multi-page React SPA with routing for public browsing and authenticated workflows, dashboards tailored to different user roles, and pages that consume backend APIs for search, side-by-side comparison, and reviews. Google Maps is integrated for location-based discovery, and the interface is built with Bootstrap 5 plus custom CSS for a responsive, consistent experience across devices.",
  techStack: [
    "React",
    "Vite",
    "React Router DOM",
    "Bootstrap 5",
    "JavaScript",
    "CSS",
    "Fetch API",
    "Google Maps API",
  ],
  thumbnail: publicUrl("assets/images/portfolio-capstone.png"),
  githubUrl: "https://github.com/hcustod/wrench-it",
  highlights: [
    "Built a multi-page React SPA with routing for public and authenticated flows",
    "Implemented role-based dashboards for different user types",
    "Developed API-integrated pages for search, comparison, and reviews",
    "Integrated Google Maps for location-based browsing",
    "Applied responsive UI design using Bootstrap and custom theming",
  ],
};

export const academicProjects: PortfolioProject[] = [
  {
    title: "Restaurant Locator — Android (Capacitor + React)",
    summary:
      "Cross-platform restaurant browser packaged for Android with Capacitor. Browse and search sample listings, save favorites, and add or edit entries in a single-session, offline-first UI (no live backend).",
    detail:
      "This COMP3074 mobile prototype implements a multi-screen restaurant app as a React SPA synced into a native Android shell. Users explore a small seeded set of Toronto-style sample venues, narrow results with a text search over names and cuisine-style tags, and open a detail view for address, contact, description, and ratings. Favorites and a full add/edit/delete flow demonstrate interactive state management entirely on the client. A map tab and reviews area illustrate future direction but remain visual or placeholder rather than integrated mapping or review storage. The scope is intentionally prototype-level (in-memory data, decorative map, stubbed reviews/share), which is stated clearly so reviewers understand the boundaries of the work.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Capacitor",
      "Android",
      "Tailwind CSS",
      "Motion",
      "Lucide React",
    ],
    thumbnail: publicUrl("assets/images/Portfolio-Restaurant.png"),
    githubUrl: "https://github.com/HosseinKhanzadeh/MobileApp-UI",
    highlights: [
      "Multi-screen mobile UX (home, details, favorites, about, map tab) with bottom navigation and a slide-out menu",
      "Client-side CRUD and favorites on a typed Restaurant model",
      "Text search across restaurant names and tag lists",
      "Capacitor-based Android packaging from a Vite/React build",
      "Motion-driven detail affordances (e.g., expandable action panel) for a more app-like feel",
      "Clear separation of concerns: centralized state in the root component with screen-level presentation",
    ],
  },
  {
    title: "Employee Management Dashboard (React Frontend)",
    summary:
      "A React-based employee management interface with authentication, CRUD operations, search functionality, and image upload support.",
    detail:
      "This project is a single-page React application built as part of a full-stack assignment, focused on creating a functional and well-structured employee management interface. The application allows users to register, authenticate, and manage employee records through a clean dashboard workflow, including adding, viewing, editing, deleting, and searching employees. The frontend communicates with a REST API and supports image uploads for employee profiles. It was developed with a strong emphasis on component structure, routing, and user flow, and later refined with a custom dark-themed UI to improve visual consistency and usability.",
    techStack: [
      "React",
      "React Router",
      "Axios",
      "Material UI",
      "JavaScript",
      "Docker",
      "REST API",
      "MongoDB",
    ],
    thumbnail: publicUrl("assets/images/portfolio-dashboard.png"),
    githubUrl: "https://github.com/HosseinKhanzadeh/101508476_COMP3123_Assignment2",
    highlights: [
      "Implemented full CRUD interface with structured routing and protected pages",
      "Integrated JWT-based authentication flow with persistent session handling",
      "Designed reusable API layer with Axios and centralized request handling",
      "Built employee search functionality with filtered API queries",
      "Added file upload support with preview and validation for profile images",
      "Applied consistent dark-themed UI using Material UI with custom styling",
      "Structured the frontend into modular pages, components, and context for clarity and maintainability",
    ],
  },
  {
    title: "Responsive Login Interface (HTML/CSS/JS)",
    summary:
      "A responsive login page built with HTML, CSS, and JavaScript, focusing on layout structure, form design, and visual styling.",
    detail:
      "This project is a responsive login interface designed as part of early frontend practice, focusing on layout composition, form structure, and visual styling. The page uses a two-column layout that adapts to smaller screens, presenting a centered login form alongside decorative imagery. The implementation explores input styling, hover effects, and basic form validation using native HTML attributes. While authentication is handled on the server side via PHP, this project highlights foundational UI construction and responsiveness.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP"],
    thumbnail: publicUrl("assets/images/portfolio-login.png"),
    githubUrl: "https://github.com/HosseinKhanzadeh/login1",
    highlights: [
      "Built a responsive two-column login layout that adapts cleanly to smaller screens",
      "Structured form inputs with clear hierarchy and minimal design",
      "Applied custom CSS styling including hover effects and visual enhancements",
      "Implemented native HTML validation for required fields",
      "Demonstrated basic DOM interaction using JavaScript for UI effects",
    ],
  },
  {
    title: "Animated Login UI Concept",
    summary:
      "A visually styled login interface focused on layout, animation, and modern form presentation using HTML and CSS.",
    detail:
      "This project is a front-end login page concept built to explore visual styling, centered layout composition, and motion-based UI design. It uses animated decorative elements, rounded input fields, and a gradient call-to-action to create a more polished and design-focused auth screen. While it is not connected to a real authentication flow, it works well as a UI concept piece that demonstrates attention to visual presentation and structured form design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    thumbnail: publicUrl("assets/images/login-ring.png"),
    githubUrl: "https://github.com/HosseinKhanzadeh/login-ring",
    highlights: [
      "Built a centered full-screen login layout with consistent spacing and clear visual hierarchy",
      "Designed animated decorative borders and gradient button styling for a more distinctive interface",
      "Used custom form styling to move beyond a default browser-based login screen",
      "Demonstrated clean separation between markup and styling for a small UI-focused component",
      "Created a strong base that could be extended into a fully functional authentication component",
    ],
  },
];
