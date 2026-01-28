export const DE = {
    hero: {
        eyebrow: 'Frontend Developer',
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
        intro: `Ich bin ein leidenschaftlicher Frontend Developer mit starkem Fokus auf Clean Code, moderne Webtechnologien und intuitive Nutzererlebnisse. Ich liebe es, komplexe Ideen in klare, funktionale und visuell ansprechende Interfaces zu verwandeln.`,
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
        intro: `Meine Fähigkeiten liegen im modernen Frontend-Development mit HTML, CSS/SCSS, JavaScript und Angular - mit besonderem Fokus auf sauberen, wartbaren Code, responsives Design und barrierefreie Benutzeroberflächen. Ich erweitere mein Skillset kontinuierlich, indem ich neue Technologien, Tools und Best Practices verfolge und mich gerne an eine sich schnell wandelnde Weblandschaft anpasse.`,
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
            bubble: {
                description: 'Bald in Entwicklung: Realtime-App mit Angular und Firebase (Auth/DB).',
                highlights: ['Echtzeit-Daten', 'Auth-Flow', 'Sauberes UI'],
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
                author: 'Thomas Schulz',
                role: 'Senior Frontend Developer · Projektkollege',
                text: 'Marc arbeitet sehr strukturiert und denkt Probleme konsequent bis zum Ende durch. Seine Fähigkeit, komplexe Anforderungen in sauberen und wartbaren Code zu übersetzen, ist beeindruckend.',
            },
            {
                author: 'Lisa Becker',
                role: 'UX/UI Designerin · Teamprojekt',
                text: 'Die Zusammenarbeit mit Marc war großartig. Er hat ein starkes Gespür für saubere Interfaces und setzt Designs präzise um, ohne die technische Qualität aus den Augen zu verlieren.',
            },
            {
                author: 'Daniel Hoffmann',
                role: 'Product Owner',
                text: 'Marc zeigt ein sehr hohes Maß an intrinsischer Motivation. Er hinterfragt Anforderungen konstruktiv und bringt häufig wertvolle Verbesserungen für das Gesamtprodukt ein.',
            },
            {
                author: 'Sarah Klein',
                role: 'Fullstack Developer · Pair Programming',
                text: 'Marc ist ein sehr zuverlässiger Partner im Pair Programming. Er erklärt ruhig, denkt logisch und bleibt auch beim Debuggen komplexer Probleme fokussiert.',
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
        text1: `Aktuell suche ich nach Möglichkeiten als Frontend Developer, bei denen ich saubere, barrierefreie und gut strukturierte Benutzeroberflächen umsetzen kann.
            Wenn du an einem Produkt arbeitest, das Qualität, Klarheit und durchdachte UX schätzt, freue ich mich über deine Nachricht und helfe gerne dabei, Ideen in zuverlässige und wartbare Lösungen zu verwandeln.`,
        text2Lead: 'Du brauchst einen Frontend Developer?',
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
