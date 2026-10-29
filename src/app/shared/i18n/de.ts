export const DE = {
    hero: {
        eyebrow: 'Fullstack Developer',
        buttons: {
            projects: 'Meine Projekte',
            contact: 'Kontakt',
        },
        aria: {
            github: 'GitHub-Profil in neuem Tab öffnen',
            linkedin: 'LinkedIn-Profil in neuem Tab öffnen',
            mailTo: (email: string) => `E-Mail an ${email}`,
        },
        marquee: [
            'Remote verfügbar',
            'Frontend Developer',
            'Backend Developer',
            'Fullstack Developer',
            'Ansässig in Deutschland',
            'Offen für neue Projekte',
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
        opensNewTab: '(öffnet in neuem Tab)',
        opensEmail: '(öffnet E-Mail-Programm)',
    },

    about: {
        eyebrow: 'Wer ich bin',
        title: 'Über mich',
        intro: `Ich bin ein leidenschaftlicher Fullstack Developer mit Fokus auf Clean Code, moderne Webtechnologien und gut strukturierte Anwendungen. Ich entwickle intuitive und responsive Benutzeroberflächen mit Angular und TypeScript sowie REST-APIs und Backend-Systeme mit Python, Django und Django REST Framework. Dabei lege ich besonderen Wert auf wartbaren Code, eine klare Architektur und zuverlässige Lösungen.`,
        list: [
            'Ansässig in Deutschland — offen für Remote-Arbeit und flexible Zusammenarbeit.',
            'Offen und neugierig — ich lerne gerne neue Technologien und entwickle mich kontinuierlich weiter.',
            'Problemlöser-Mindset — analytisch, kreativ, ausdauernd und fokussiert auf saubere, elegante Lösungen.',
        ],
        imageAlt: 'Porträt von Marc-André Buck',
    },

    skills: {
        eyebrow: 'Technologien',
        title: 'Skill Set',
        intro: `Meine Fähigkeiten liegen in der modernen Fullstack-Entwicklung mit Angular, TypeScript, Python und Django. Dabei verbinde ich responsive und benutzerfreundliche Frontends mit strukturierten REST-APIs und zuverlässigen Backend-Systemen. Besonderen Wert lege ich auf Clean Code, wartbare Architekturen und den kontinuierlichen Ausbau meines technischen Skillsets.`,
        needAnother: 'Du brauchst',
        needAnotherAccent: 'noch einen Skill?',
        outro: 'Melde dich gerne bei mir. Ich freue mich darauf, mein Wissen weiter auszubauen.',
        cta: 'Kontakt aufnehmen',
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
            title: 'Was ich gerne lernen würde',
            items: {
                react: 'React',
                vue: 'Vue.js',
            },
        },
    },

    projects: {
        eyebrow: 'Projekte',
        title: 'Meine Projekte',
        intro: 'Entdecke hier eine Auswahl meiner Arbeiten - interagiere mit den Projekten, um meine Skills in Aktion zu sehen.',
        actions: { live: 'Live', github: 'GitHub' },
        items: {
            join: {
                description: 'Ein Kanban-ähnlicher Task-Manager mit Authentifizierung und Realtime-Synchronisation.',
                highlights: ['Auth + Firestore', 'Drag & Drop-Workflow', 'Responsives UI'],
            },
            pollo: {
                description: 'Ein 2D-Browser-Game mit Animationen, Kollisionen und Game-Loop-Logik.',
                highlights: ['Canvas-Rendering', 'Einfache Gegner-KI', 'Mobile Steuerung'],
            },
            coderr: {
                description: 'Eine Freelancer-Plattform mit Benutzerprofilen, Angeboten, Bestellungen und Kundenbewertungen.',
                highlights: ['Django REST Framework', 'REST API', 'Docker'],
            },
            videoflix: {
                description: 'Ein Backend für eine Video-Streaming-Plattform mit Benutzerverwaltung und Videoverarbeitung.',
                highlights: ['Django REST Framework', 'PostgreSQL + Redis', 'Docker'],
            },
        },
        aria: {
            viewDetails: (title: string) => `Projektdetails zu ${title} ansehen`,
        },
        modal: {
            closeLabel: 'Projektdetails schließen',
            subtitle: 'Worum geht es in diesem Projekt?',
            opensNewTab: '(öffnet in neuem Tab)',
            next: 'Nächstes Projekt',
            previewAlt: (title: string) => `Vorschau von ${title}`,
        },
    },

    references: {
        title: 'Was Kolleg:innen über mich sagen',

        items: [
            {
                author: 'Florian',
                role: 'Service Techniker für Wasserstoffsysteme · Ehemaliger Kollege',
                text: 'Freundlich, teamfähig, wissbegierig, engagiert und zielorientiert - und dabei immer für einen Spaß zu haben. Die Zusammenarbeit mit Marc macht einfach Spaß.',
            },
            {
                author: 'Philipp M.',
                role: 'Servicetechniker im Außendienst · Ehemaliger Kollege bei Cummins',
                text: 'Die Zusammenarbeit mit Marc war für mich weit mehr als nur ein gewöhnliches kollegiales Miteinander. Wir haben unzählige Stunden, lange Abende und teilweise ganze Nächte gemeinsam gearbeitet, Lösungen gesucht und selbst in den schwierigsten Situationen nie den Humor verloren.',
            },
            {
                author: 'Nico Eenhuis',
                role: 'Servicetechniker · Ehemaliger Kollege',
                text: 'Marc ist ein unglaublich zuverlässiger, belastbarer und charakterstarker Mensch. Er kann zuhören, hinterfragt Dinge, denkt mit und schafft es, Gespräche zu führen, die nachhaltig im Gedächtnis bleiben. Ich schätze ihn sowohl fachlich als auch menschlich sehr.',
            },
        ] as const,

        aria: {
            list: 'Referenzen',
            prev: 'Vorherige Referenz',
            next: 'Nächste Referenz',
            goto: (index: number) => `Zur Referenz ${index} wechseln`,
            card: 'Referenz aktivieren',
            carousel: 'Karussell',
        },
    },

    contact: {
        eyebrow: 'Kontakt',
        headlineLine1: 'Lass uns',
        headlineLine2: 'zusammenarbeiten',
        subheadline: 'Du hast ein Problem zu lösen?',
        text1: `Aktuell suche ich nach Möglichkeiten als Fullstack Developer, bei denen ich moderne Frontends und zuverlässige Backend-Systeme entwickeln kann.
                Wenn du an einem Produkt arbeitest, das Qualität, klare Strukturen und wartbaren Code schätzt, freue ich mich über deine Nachricht und helfe gerne dabei, Ideen in zuverlässige und durchdachte Lösungen zu verwandeln.`,

        text2Lead: 'Du brauchst einen Fullstack Developer?',
        text2Accent: 'Lass uns sprechen!',
        labels: {
            name: 'Wie heißt du?',
            email: 'Wie lautet deine E-Mail?',
            message: 'Wie kann ich dir helfen?',

            privacyTextA: 'Ich habe die ',
            privacyLink: 'Datenschutzerklärung',
            privacyTextB: ' gelesen und stimme der Verarbeitung meiner Daten zu.',

            submit: 'Nachricht senden :)',
        },

        placeholders: {
            name: 'Dein Name',
            email: 'deinname@email.de',
            message: 'Hallo Marc, ich interessiere mich für …',
        },

        errors: {
            required_name: 'Ups! Dein Name fehlt noch.',
            required_email: 'Ups! Deine E-Mail-Adresse fehlt.',
            required_message: 'Was soll entwickelt werden?',
            email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
            email_format: (example: string) => `E-Mail Format: ${example}`,
            minlength: 'Die Nachricht ist zu kurz',
            requiredTrue: 'Bitte akzeptiere die Datenschutzerklärung.',
            generic: 'Bitte prüfe deine Eingabe.',
        },
        messages: {
            success: 'Vielen Dank für deine Nachricht! Ich werde mich so schnell wie möglich bei dir melden.',
            error: 'Beim Senden deiner Nachricht ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.',
        },
    },
} as const;
