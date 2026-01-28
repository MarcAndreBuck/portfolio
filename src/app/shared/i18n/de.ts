export const DE = {
    hero: {
        eyebrow: 'Frontend Developer',
        buttons: {
            projects: 'Check my work',
            contact: 'Contact me',
        },
        aria: {
            github: 'GitHub-Profil in neuem Tab öffnen',
            linkedin: 'LinkedIn-Profil in neuem Tab öffnen',
            mailTo: (email: string) => `E-Mail an ${email}`,
        },
        marquee: [
            'Remote verfügbar',
            'Frontend Developer',
            'Wohnhaft in Deutschland',
            'Offen für Angebote',
        ],
    },
    header: {
        nav: {
            about: 'Über mich',
            skills: 'Skills',
            projects: 'Projekte',
            contact: 'Kontakt',
        },
        primaryLabel: 'Primär',
        languageLabel: 'Sprache',
        mobileLabel: 'Mobil',
    },

    footer: {
        email: 'E-Mail',
        legalNotice: 'Impressum',
        privacyPolicy: 'Datenschutz',
        opensNewTab: '(öffnet in einem neuen Tab)',
        opensEmail: '(öffnet E-Mail-Programm)',
    },
    about: {
        eyebrow: 'Wer ich bin',
        title: 'Über mich',
        intro: 'Ich bin ein leidenschaftlicher Frontend Developer mit einem starken Fokus auf Clean Code, moderne Web-Technologien und intuitive User Experiences. Ich liebe es, komplexe Ideen in klare, funktionale und visuell ansprechende Interfaces zu übersetzen.',
        list: [
            'Wohnhaft in Deutschland — offen für Remote-Arbeit und flexible Zusammenarbeit.',
            'Offen und neugierig — ich lerne gerne neue Technologien und entwickle mich kontinuierlich weiter.',
            'Problemlöser-Mindset — analytisch, kreativ, ausdauernd und fokussiert auf saubere, elegante Lösungen.',
        ],
        imageAlt: 'Porträt von Marc-André Buck',
    },
    skills: {
        eyebrow: 'Technologies',
        title: 'Skill Set',
        intro: 'I work with modern web technologies...',
        needAnother: 'You need',
        needAnotherAccent: 'another skill?',
        outro: `I'm always open to learning...`,
        cta: `Let's talk`,
        labels: {
            html: 'HTML',
            css: 'CSS',
            js: 'JavaScript',
            ts: 'TypeScript',
            angular: 'Angular',
            firebase: 'Firebase',
            git: 'Git',
            restApi: 'REST-API',
            scrum: 'Scrum',
            growthMindset: 'Growth mindset',
        },
        growthTip: {
            title: 'Ich habe ein besonderes Interesse daran, zu lernen',
            items: {
                react: 'React',
                vue: 'Vue.js',
            },
        },
    },

    projects: {
        eyebrow: 'Projekte',
        title: 'Ausgewählte Projekte',
        intro: 'Entdecke eine Auswahl meiner Arbeiten – interagiere mit den Projekten, um meine Skills in Aktion zu sehen.',
        actions: { live: 'Live', github: 'GitHub' },
        items: {
            join: {
                description: 'Ein Kanban-Taskmanager mit Auth und Realtime-Sync.',
                highlights: ['Auth + Firestore', 'Drag & Drop Workflow', 'Responsive UI'],
            },
            pollo: {
                description: 'Ein 2D-Browsergame mit Animationen, Kollisionen und Game-Loop.',
                highlights: ['Canvas Rendering', 'Basic Enemy AI', 'Mobile Controls'],
            },
            bubble: {
                description: 'Realtime App mit Angular + Firebase (Auth/DB).',
                highlights: ['Realtime Daten', 'Auth Flow', 'Clean UI'],
            },
        },
        aria: {
            viewDetails: (title: string) => `Details zum Projekt ${title} ansehen`,
        },
        modal: {
            closeLabel: 'Projektdetails schließen',
            subtitle: 'Worum geht es in diesem Projekt?',
            opensNewTab: '(öffnet in einem neuen Tab)',
            next: 'Nächstes Projekt',
            previewAlt: (title: string) => `Vorschau zu ${title}`,
        },
    },


    references: {
        title: 'What my colleagues say about me',

        items: [
            {
                author: 'Thomas Schulz',
                role: 'Senior Frontend Developer · Projektkollege',
                text: 'Marc arbeitet extrem strukturiert und denkt Probleme wirklich bis zum Ende durch. Besonders beeindruckt hat mich seine Fähigkeit, komplexe Anforderungen in sauberen, wartbaren Code zu übersetzen.',
            },
            {
                author: 'Lisa Becker',
                role: 'UX/UI Designerin · Zusammenarbeit im Teamprojekt',
                text: 'Die Zusammenarbeit mit Marc war sehr angenehm. Er hat ein starkes Gespür für saubere Interfaces und setzt Designvorgaben präzise um, ohne dabei die technische Qualität aus den Augen zu verlieren.',
            },
            {
                author: 'Daniel Hoffmann',
                role: 'Product Owner · Entwickler Akademie',
                text: 'Marc zeichnet sich durch eine sehr hohe Eigenmotivation aus. Er hinterfragt Anforderungen sinnvoll und bringt häufig eigene Verbesserungsvorschläge ein, die das Gesamtprodukt deutlich verbessern.',
            },
            {
                author: 'Sarah Klein',
                role: 'Fullstack Entwicklerin · Pair Programming',
                text: 'Im Pair Programming ist Marc ein extrem verlässlicher Partner. Er erklärt ruhig, denkt logisch und bleibt auch bei schwierigen Bugs fokussiert und lösungsorientiert.',
            },
        ],
        aria: {
            list: 'Testimonials',
            prev: 'Previous testimonial',
            next: 'Next testimonial',
            goto: (index: number) => `Go to testimonial ${index}`,
            card: 'Activate testimonial',
            carousel: 'Karussell',
        },
    },

    contact: {
        eyebrow: 'Kontaktiere mich',
        headlineLine1: 'Lass uns',
        headlineLine2: 'zusammenarbeiten',
        subheadline: 'Hast du ein Problem zu lösen?',
        text1: 'Ermutige Menschen, dich zu kontaktieren und zu beschreiben, welche Rolle sie besetzen möchten. Zeig, welchen Mehrwert du ihren Projekten durch deine Arbeit bringst.',
        text2Lead: 'Du brauchst einen Frontend Developer?',
        text2Accent: 'Lass uns sprechen!',
        labels: {
            name: "Wie ist dein Name?",
            email: "Wie lautet deine E-Mail?",
            message: "Wie kann ich dir helfen?",

            privacyTextA: "Ich habe die ",
            privacyLink: "Datenschutzerklärung",
            privacyTextB: " gelesen und stimme der Verarbeitung meiner Daten zu.",

            submit: "Absenden",
        },

        placeholders: {
            name: "Dein Name kommt hier rein",
            email: "deinemail@email.de",
            message: "Hallo Marc, ich interessiere mich für…",
        },

        errors: {
            required: "Ups! Dieses Feld fehlt noch.",
            email: "Bitte gib eine gültige E-Mail-Adresse ein.",
            minlength: "Bitte gib etwas mehr ein.",
            requiredTrue: "Bitte akzeptiere die Datenschutzerklärung.",
            generic: "Bitte prüfe deine Eingabe.",
        },
    },
} as const;
