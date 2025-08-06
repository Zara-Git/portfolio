export const projects = [
  {
    title: "Trust Checker App",
    description: `An advanced fullstack web application that evaluates website trustworthiness by analyzing domain details, SSL certificates, WHOIS data, and Google Safe Browsing status.
  
  Frontend is built with React and MUI (Material UI) to offer a responsive and modern UI, including dark/light theme toggling, animations, and validation. Backend uses Express.js with integrations like WHOIS lookup, SSL checker, and Google's security API.
  
  Users can input a domain name, get real-time insights, and see scan history stored in localStorage. The project emphasizes fullstack architecture, API integration, and polished UI/UX for real-world utility.`,
    video: "/trustchecker.mp4",
    images: ["/Screenshot1.png", "/Screenshot2.png"],
    github: "https://github.com/Zara-Git/Trust-Checker",
    tags: [
      "React",
      "MUI",
      "Express.js",
      "WHOIS",
      "SSL",
      "Safe Browsing API",
      "Fullstack",
    ],
  },
  {
    title: "Webflix",
    description: `This is a Netflix UI clone developed in a collaborative, agile team of three as part of a frontend education program. The app replicates the core visual experience of Netflix with dynamic routing, slick sliders, and basic search functionality.
  
  We used React and Vite for a fast development environment and implemented CI/CD for automatic formatting, linting, and testing using Prettier, ESLint, and Vitest. The application is modular, well-structured, and built with reusable components.`,
    image: "/Webflix.png",
    github: "https://github.com/Zara-Git/Netflix-projekt",
    tags: ["React", "Vite", "Vitest", "CI/CD", "Fuse.js"],
  },
  {
    title: "E-Wallet App",
    description:
      "Digital wallet frontend with transaction UI and balance tracking.",
    image: "/ewallet.png",
    github: "https://github.com/Zara-Git/Evallet-appen",
    tags: ["React", "Tailwind", "UI/UX"],
  },
  {
    title: "Strike Testing App",
    description:
      "Strike Testing App is a React-based internal testing tool designed with a focus on form handling, input validation, and modular UI. Built with Vite for fast development, it utilizes SCSS for styling and includes nanoid for unique ID generation. The app supports unit testing with Vitest and Jest, and uses modern testing tools like Testing Library and MSW for mock API handling. Ideal for simulating real-world form workflows and ensuring robust validation logic during development.",
    image: "/Strike.png",
    github: "https://github.com/Zara-Git/STRIKE-TESTING",
    tags: [
      "React",
      "Forms",
      "Validation",
      "SCSS",
      "Testing",
      "Vite",
      "Jest",
      "Vitest",
      "MSW",
    ],
  },
  {
    title: "Bo With Still",
    description:
      "A clean and functional shopping cart interface designed in Figma for a furniture and home decor e-commerce website. The design focuses on usability, with a clear product overview, pricing, quantity adjustments, and a smooth checkout flow. The layout is responsive and built using reusable components to ensure consistency across the app.",
    image: "/Screenshot 2025-07-24 195046.png",
    figma:
      "https://www.figma.com/design/8ScjRJ2dPmXZkBC2WHIfVe/Bo-withStill?node-id=0-1&t=IWvtCpfyvRN9ImfZ-1",
    tags: ["Figma", "UI Design", "Shopping Cart", "E-commerce", "Furniture"],
  },
];
