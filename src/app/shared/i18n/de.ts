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
