export const DE = {
    hero: {
        buttons: {
            projects: 'Check my work',
            contact: 'Contact me',
        },
        marquee: [
            'Remote verfügbar',
            'Frontend Developer',
            'Wohnhaft in Deutschland',
            'Offen für Angebote',
        ],
    },
    identity: {
        email: 'kontakt@marc-buck.de',
        name: 'Marc-André Buck',
        postcode: '19230 Hagenow',
        street: 'Rosenweg 5'
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
            restApi: 'REST API',
            scrum: 'Scrum',
            growthMindset: 'Growth mindset',
        },
        growthTip: {
            title: 'Ich habe ein besonderes Interesse daran, zu lernen'
        }
    },

    projects: {
        intro: 'Entdecke eine Auswahl meiner Arbeiten – interagiere mit den Projekten, um meine Skills in Aktion zu sehen.',
        actions: { live: 'Live', github: 'GitHub' }, // optional; kannst du auch hardcoden
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
        },
    },

    contact: {
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

    legalNotice: {
        title: 'Impressum',
        imprintTitle: 'Impressum',
        exploringTitle: 'Board erkunden',
        emailLabel: 'E-Mail:',
        termsTitle: 'Nutzungsbedingungen',
        termsAfterPortfolio: '...',
        scopeTitle: 'Umfang und Eigentum',
        scopeP1BeforeDA: '...',
        scopeP1AfterDA: '...',
        scopeP2: '...',
        scopeP3AfterDA: '...',
        rightsTitle: 'Schutzrechte',
        rightsBeforeDA: '...',
        rightsAfterDA: '...',
        rightsEnd: '...',
        useTitle: 'Nutzung des Produkts',
        useBefore: '...',
        useMiddle: '...',
        useEnd: '.',
        disclaimerTitle: 'Haftungsausschluss',
        disclaimerBeforeDA: '...',
        disclaimerAfterDA: '...',
        disclaimerEnd: '.',
        indemnityTitle: 'Freistellung',
        indemnityBeforeDA: '...',
        indemnityAfterDA: '...',
        indemnityEnd: '...',
        metaPrefix: 'Bei Fragen kontaktiere uns unter',
        dateLabel: 'Datum:',
        dateIso: '2025-07-26',
        dateHuman: '26. Juli 2025',
    },
} as const;
