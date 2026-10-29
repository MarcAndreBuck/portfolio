export const EN = {
    hero: {
        eyebrow: 'Fullstack Developer',
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
            'Backend Developer',
            'Fullstack Developer',
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
        intro: `I'm a passionate Fullstack Developer focused on clean code, modern web technologies, and well-structured applications. I build intuitive and responsive user interfaces with Angular and TypeScript, as well as REST APIs and backend systems with Python, Django, and Django REST Framework. I place particular emphasis on maintainable code, clear architecture, and reliable solutions.`,
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
        intro: `My skills lie in modern fullstack development with Angular, TypeScript, Python, and Django. I combine responsive and user-friendly frontends with well-structured REST APIs and reliable backend systems. I place particular emphasis on clean code, maintainable architectures, and continuously expanding my technical skill set.`,
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
            growthMindset: 'Growth Mindset',
            python: 'Python',
            django: 'Django',
            drf: 'DRF',
            postgresql: 'PostgreSQL',
            redis: 'Redis',
            docker: 'Docker',
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
            coderr: {
                description: 'A freelancer platform with user profiles, service offers, orders and customer reviews.',
                highlights: ['Django REST Framework', 'REST API', 'Docker'],
            },
            videoflix: {
                description: 'A backend for a video streaming platform with user management and video processing.',
                highlights: ['Django REST Framework', 'PostgreSQL + Redis', 'Docker'],
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
                author: 'Florian',
                role: 'Hydrogen Systems Service Technician · Former Colleague',
                text: 'Friendly, team-oriented, eager to learn, committed and goal-driven - while always being up for a laugh. Working with Marc is simply a great experience.',
            },
            {
                author: 'Philipp M.',
                role: 'Field Service Technician · Former Colleague at Cummins',
                text: 'Working with Marc was far more than just an ordinary professional collaboration. We spent countless hours, long evenings and sometimes entire nights working together, finding solutions and never losing our sense of humor, even in the most challenging situations.',
            },
            {
                author: 'Nico Eenhuis',
                role: 'Service Technician · Former Colleague',
                text: 'Marc is an incredibly reliable, resilient and strong-minded person. He listens, questions things, thinks ahead and has a way of creating conversations that stay with you. I value him greatly, both professionally and personally.',
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
        text1: `I'm currently looking for opportunities as a Fullstack Developer where I can build modern frontends and reliable backend systems.
                If you're working on a product that values quality, clear structures, and maintainable code, I'd be happy to hear from you and help turn ideas into reliable and well-designed solutions.`,

        text2Lead: 'Looking for a Fullstack Developer?',
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
        messages: {
            success: 'Thank you for your message! I will get back to you as soon as possible.',
            error: 'Something went wrong while sending your message. Please try again later.',
        },
    },
} as const;