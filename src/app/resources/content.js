import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Alief",
  lastName: "Firmanda",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/PamanAleph",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammad-alief-firmanda/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:aliefbuscode@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-stack Engineer and Problem Solver</>,
  subline: (
    <>
      Alief Firmanda is a passionate Software Engineer building
      user-friendly web applications. Skilled in{" "}
      <strong>JavaScript (React.js, Next.js, Node.js)</strong>, I focus on
      efficient, scalable solutions.
      <br /> <strong>Scrum Master</strong> experience complements my
      understanding of software development and team collaboration.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Alief is a Results-driven Software Engineer specializing in architecting
        end-to-end digital solutions that align technical excellence with
        business objectives. Adept at leading cross-functional teams through
        Agile/Scrum methodologies to deliver scalable, secure systems that drive
        organizational transformation. Combines expertise in modern full-stack
        development with a strategic focus on system optimization and Scrum
        Master leadership to streamline workflows and accelerate delivery.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Percetakan Uang Republik Indonesia (PERURI)",
        timeframe: "2024 - Present",
        role: "Fullstack Developer (Frontend Focused) Intern",
        achievements: [
          <>
            Modernized the Meterai Elektronik system's frontend by migrating it
            from PHP to Next.js, leveraging TypeScript for enhanced type safety
            and implementing Next.js best practices. This resulted in a 40%
            improvement in application performance, a 50% reduction in page load
            times, and increased scalability while reducing frontend server load
            by 30%.
          </>,
          <>
            Engineered a critical component of the SPBE support application,
            developing over 60 RESTful API endpoints using Express.js and
            PostgreSQL, secured with JWT authentication. These APIs were
            seamlessly integrated with a modern React.js and TypeScript
            frontend, empowering users to perform CRUD operations and visualize
            key performance indicators through interactive tables and charts.
          </>,
          <>
            Optimized the Peruri Dashbent system by migrating it from a
            Service-Oriented Architecture (SOA) to a modern stack featuring
            Next.js and Express.js. This transition decreased server dependency
            by 40%, accelerated API response times by 60%, and improved overall
            system scalability by 50%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/peruri/metel.jpg",
            alt: "Meterai Elektronik System",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "President University",
        timeframe: "2024",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Spearheaded the digital transformation of the Internal Quality
            Assurance Directorate by building an integrated digital
            accreditation system. Leveraging Next.js server-side rendering (SSR)
            and Express.js, the system achieved a 50% reduction in response time
            for data synchronization and improved data accuracy by 35%.
          </>,
          <>
            Developed a modern and responsive accreditation management platform
            using React.js components and Tailwind CSS. This resulted in a 40%
            improvement in loading times, a 30% increase in user satisfaction
            scores, and a 25% decrease in bounce rates across devices.
          </>,
          <>
            Built a modular component library using TypeScript, reducing
            development time for new features by 30% and ensuring consistent UI
            implementation across the platform, which lowered bug rates by 25%.
          </>,
        ],
        images: [],
      },
      {
        company: "PUFA Computing",
        timeframe: "2023 - 2024",
        role: "Frontend Developer",
        achievements: [
          <>
            Implemented secure authentication processes using NextAuth.js and
            Two-Factor Authentication (2FA) via TOTP codes with authenticator
            apps. This security enhancement increased user registrations by 25%
            and reduced unauthorized access attempts by 40%, strengthening
            overall platform integrity.
          </>,
          <>
            Enhanced SEO and accessibility by integrating Next.js best
            practices, including server-side rendering (SSR) for critical pages
            and ARIA roles for improved screen reader support. This resulted in
            a 25% increase in organic traffic and compliance with WCAG
            standards.
          </>,
          <>
            Optimized website performance by leveraging lazy loading for images
            and components, reducing initial page load times by 40% and
            enhancing user experience on mobile devices
          </>,
        ],
        images: [
          {
            src: "/images/projects/pufa/web1.jpg",
            alt: "PUFA Computing Website",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/pufa/web2.jpg",
            alt: "PUFA Computing Website",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/pufa/web3.jpg",
            alt: "PUFA Computing Website",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/pufa/web4.jpg",
            alt: "PUFA Computing Website",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "President University",
        description: <>Informatics Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Developer",
        description: (
          <>
            Experienced in building modern, responsive, and interactive web and
            mobile applications. Skilled in{" "}
            <strong>Next.js and SvelteKit Frameworks</strong> for web
            development, <strong>React.js</strong> for dynamic UI components,
            and <strong>TailwindCSS</strong> for efficient styling. Strong
            proficiency in <strong>TypeScript and JavaScript</strong>, with
            hands-on experience in <strong>React Native</strong> for
            cross-platform mobile development.
          </>
        ),
      },
      {
        title: "Backend Developer",
        description: (
          <>
            Specializes in developing scalable and high-performance backend
            systems. Proficient in{" "}
            <strong>Express.js (Node.js) and API Route (Next.js)</strong> for
            API and server-side development. Expertise in{" "}
            <strong>TypeScript, JavaScript, PHP, and Python</strong>, along with
            extensive experience working with{" "}
            <strong>MySQL, MongoDB, PostgreSQL, and Redis</strong>. Well-versed
            in <strong>Docker, Postman, Jest, and K6</strong> for backend
            testing and deployment.
          </>
        ),
      },
      {
        title: "Scrum Master",
        description: (
          <>
            Adept at leading Agile/Scrum teams to deliver efficient and
            high-quality software products. Skilled in <strong>Jira</strong> for
            sprint planning, backlog management, and tracking team performance.
            Strong facilitator of collaboration, ensuring smooth workflow and
            process optimization.
          </>
        ),
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
