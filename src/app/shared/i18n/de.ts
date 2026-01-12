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
    contact: {
        email: 'kontakt@marc-buck.de',
        name: 'Marc-André Buck',
        postcode: '19230 Hagenow',
        street: 'Rosenweg 5'
    },

    referencesTitle: 'What my colleagues say about me',

    references: [
        {
            name: 'Thomas Schulz',
            position: 'Senior Frontend Developer · Projektkollege',
            text: 'Marc arbeitet extrem strukturiert und denkt Probleme wirklich bis zum Ende durch. Besonders beeindruckt hat mich seine Fähigkeit, komplexe Anforderungen in sauberen, wartbaren Code zu übersetzen.',
        },
        {
            name: 'Lisa Becker',
            position: 'UX/UI Designerin · Zusammenarbeit im Teamprojekt',
            text: 'Die Zusammenarbeit mit Marc war sehr angenehm. Er hat ein starkes Gespür für saubere Interfaces und setzt Designvorgaben präzise um, ohne dabei die technische Qualität aus den Augen zu verlieren.',
        },
        {
            name: 'Daniel Hoffmann',
            position: 'Product Owner · Entwickler Akademie',
            text: 'Marc zeichnet sich durch eine sehr hohe Eigenmotivation aus. Er hinterfragt Anforderungen sinnvoll und bringt häufig eigene Verbesserungsvorschläge ein, die das Gesamtprodukt deutlich verbessern.',
        },
        {
            name: 'Sarah Klein',
            position: 'Fullstack Entwicklerin · Pair Programming',
            text: 'Im Pair Programming ist Marc ein extrem verlässlicher Partner. Er erklärt ruhig, denkt logisch und bleibt auch bei schwierigen Bugs fokussiert und lösungsorientiert.',
        },
    ],

    legalNotice: {
        title: 'Impressum',
        imprintTitle: 'Impressum',
        exploringTitle: 'Board erkunden',
        emailLabel: 'E-Mail:',
        // den Rest kannst du 1:1 später übersetzen
        // (oder erstmal EN drin lassen, wenn du willst)
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
