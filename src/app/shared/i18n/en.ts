export const EN = {
    hero: {
        eyebrow: 'Frontend Developer',
        buttons: {
            projects: 'Check my work',
            contact: 'Contact me',
        },
        aria: {
            github: 'Open GitHub profile in new tab',
            linkedin: 'Open LinkedIn profile in new tab',
            mailTo: (email: string) => `Mail to ${email}`,
        },
        marquee: [
            'Available for remote work',
            'Frontend Developer',
            'Based in Germany',
            'Open to work',
        ],
    },

    header: {
        nav: {
            about: 'About me',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        },
        primaryLabel: 'Primary',
        languageLabel: 'Language',
        mobileLabel: 'Mobile',
    },

    footer: {
        email: 'Email',
        legalNotice: 'Legal Notice',
        privacyPolicy: 'Privacy Policy',
        opensNewTab: '(opens in a new tab)',
        opensEmail: '(opens email client)',
    },

    about: {
        eyebrow: 'Who I Am',
        title: 'About me',
        intro: `I'm a passionate Frontend Developer with a strong focus on clean code, modern web technologies, and intuitive user experiences. I enjoy turning complex ideas into clear, functional, and visually appealing interfaces.`,
        list: [
            'Based in Germany — open to remote work and flexible collaboration.',
            'Open-minded and curious — I love learning new technologies and improving continuously.',
            'Problem-solver mindset — analytical, creative, persistent, and focused on clean, elegant solutions.',
        ],
        imageAlt: 'Portrait of Marc-André Buck',
    },

    skills: {
        eyebrow: 'Technologies',
        title: 'Skill Set',
        intro: `My skills focus on modern front-end development using HTML, CSS/SCSS, JavaScript, and Angular, with a strong emphasis on clean, maintainable code, responsive design, and accessible user interfaces. I continuously expand my skill set by keeping up with new technologies, tools, and best practices, and I'm always open to learning and adapting in a fast-evolving web development landscape.`,
        needAnother: 'You need',
        needAnotherAccent: 'another skill?',
        outro: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
        cta: `Let's talk`,
        labels: {
            html: 'HTML',
            css: 'CSS',
            js: 'JavaScript',
            ts: 'TypeScript',
            angular: 'Angular',
            firebase: 'Firebase',
            git: 'Git',
            restApi: 'REST API',
            scrum: 'Scrum',
            growthMindset: 'Growth mindset',
        },
        growthTip: {
            title: 'I have a special interest in learning',
            items: {
                react: 'React',
                vue: 'Vue.js',
            },
        },
    },

    projects: {
        eyebrow: 'Projects',
        title: 'Featured Projects',
        intro: 'Explore a selection of my work here - interact with projects to see my skills in action.',
        actions: { live: 'Live', github: 'GitHub' },
        items: {
            join: {
                description: 'A Kanban-style task manager with authentication and realtime sync.',
                highlights: ['Auth + Firestore', 'Drag & drop workflow', 'Responsive UI'],
            },
            pollo: {
                description: 'A 2D browser game with animations, collisions and game-loop logic.',
                highlights: ['Canvas rendering', 'Basic enemy AI', 'Mobile controls'],
            },
            bubble: {
                description: 'Realtime app built with Angular + Firebase (auth/db).',
                highlights: ['Realtime data', 'Auth flow', 'Clean UI'],
            },
        },
        aria: {
            viewDetails: (title: string) => `View ${title} project details`,
        },
        modal: {
            closeLabel: 'Close project details',
            subtitle: 'What is this project about?',
            opensNewTab: '(opens in a new tab)',
            next: 'Next project',
            previewAlt: (title: string) => `${title} preview`,
        },
    },

    references: {
        title: 'What my colleagues say about me',

        items: [
            {
                author: 'Thomas Schulz',
                role: 'Senior Frontend Developer · Project Colleague',
                text: 'Marc works in a highly structured way and consistently thinks problems through to the end. His ability to translate complex requirements into clean, maintainable code is impressive.',
            },
            {
                author: 'Lisa Becker',
                role: 'UX/UI Designer · Team Project',
                text: 'Working with Marc was a great experience. He has a strong sense for clean interfaces and implements designs precisely while keeping technical quality high.',
            },
            {
                author: 'Daniel Hoffmann',
                role: 'Product Owner',
                text: 'Marc shows a very high level of intrinsic motivation. He challenges requirements in a constructive way and often contributes valuable improvements to the overall product.',
            },
            {
                author: 'Sarah Klein',
                role: 'Fullstack Developer · Pair Programming',
                text: 'Marc is a very reliable partner in pair programming. He explains things calmly, thinks logically and stays focused even when debugging complex issues.',
            },
        ] as const,

        aria: {
            list: 'Testimonials',
            prev: 'Previous testimonial',
            next: 'Next testimonial',
            goto: (index: number) => `Go to testimonial ${index}`,
            card: 'Activate testimonial',
            carousel: 'carousel',
        },
    },
    contact: {
        eyebrow: 'Contact me',
        headlineLine1: "Let's work",
        headlineLine2: 'together',
        subheadline: 'Got a problem to solve?',
        text1: `I'm currently looking for opportunities as a Frontend Developer, where I can contribute clean, accessible, and well-structured user interfaces.
                If you're building a product that values quality, clarity, and thoughtful UX, I'd love to hear from you and help turn ideas into reliable, maintainable solutions.`,
        text2Lead: 'Need a Frontend developer?',
        text2Accent: "Let's talk!",
        labels: {
            name: "What's your name?",
            email: "What's your email?",
            message: "How can I help you?",

            privacyTextA: "I've read the ",
            privacyLink: "privacy policy",
            privacyTextB: " and agree to the processing of my data.",

            submit: "Say Hello :)",
        },

        placeholders: {
            name: "Your name goes here",
            email: "youremail@email.com",
            message: "Hello Marc, I am interested in…",
        },

        errors: {
            required_name: "Oops! it seems your name is missing.",
            required_email: "Hoppla! your email is required",
            required_message: "What do you need to develop?",
            email: "Please enter a valid email address.",
            email_format: (example: string) => `Email format: ${example}`,
            minlength: "Please enter a bit more.",
            requiredTrue: "Please accept the privacy policy.",
            generic: "Please check your input.",
        },
    },
} as const;