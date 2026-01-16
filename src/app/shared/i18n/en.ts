export const EN = {
    hero: {
        buttons: {
            projects: 'Check my work',
            contact: 'Contact me',
        },
        marquee: [
            'Available for remote work',
            'Frontend Developer',
            'Based in Germany',
            'Open to work',
        ],
    },

    identity: {
        email: 'kontakt@marc-buck.de',
        name: 'Marc-André Buck',
        postcode: '19230 Hagenow',
        street: 'Rosenweg 5',
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
                role: 'Product Owner · Developer Academy',
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
        },
    },
    contact: {
        labels: {
            name: "What's your name?",
            email: "What's your email?",
            message: 'How can I help you?',
            privacyTextA: "I've read the ",
            privacyLink: 'privacy policy',
            privacyTextB: ' and agree to the processing of my data.',
            submit: 'Say Hello ;)',
        },

        placeholders: {
            name: 'Your name',
            email: 'youremail@email.com',
            message: 'Hello Marc, I am interested in...',
        },

        errors: {
            nameRequired: 'Please enter your name.',
            nameMin: 'Please enter at least 2 characters.',
            emailRequired: 'Please enter your email address.',
            emailInvalid: 'Please enter a valid email address.',
            messageRequired: 'Please enter a message.',
            messageMin: 'Please enter at least 10 characters.',
            privacyRequired: 'You must accept the privacy policy.',
        }
    },


    legalNotice: {
        title: 'Impressum',
        imprintTitle: 'Impressum',
        exploringTitle: 'Board erkunden',
        emailLabel: 'E-Mail:',
        // den Rest kannst du 1:1 später übersetzen
        // (oder erstmal EN drin lassen, wenn du willst)
        termsTitle: 'Nutzungsbedingungen',
        termsAfterPortfolio: `  <h2 id="imprint-title" class="legal-notice__subtitle">Imprint</h2>

            <ul class="legal-notice__list">
                <li>{{ lang.dict().identity.name }}</li>
                <li>{{ lang.dict().identity.street }}</li>
                <li>{{ lang.dict().identity.postcode }}</li>
            </ul>







            <!-- Exploring the Board -->
            <h2 id="exploring-title" class="legal-notice__subtitle">Exploring the Board</h2>
            <p class="legal-notice__text">
                Email:
                <a class="email" [href]="'mailto:' + lang.dict().identity.email">
                    {{ lang.dict().identity.email }}
                </a>
            </p>


            <!-- Acceptance of terms -->
            <h2 id="terms-title" class="legal-notice__subtitle">Acceptance of terms</h2>
            <p class="legal-notice__text">
                By accessing and using
                <span class="legal-notice__highlight">Portfolio</span> (Product), you acknowledge and agree to the
                following terms and conditions, and any policies, guidelines, or amendments thereto that may be
                presented to you from time to time. We, the listed students, may update or change the terms and
                conditions from time to time without notice.
            </p>


            <!-- Scope and ownership -->
            <h2 id="scope-title" class="legal-notice__subtitle">Scope and ownership of the product</h2>
            <p class="legal-notice__text">
                <span class="legal-notice__highlight">Portfolio</span> has been developed as part of a student group
                project in a web development bootcamp at the
                <span class="legal-notice__highlight">Developer Akademie</span> GmbH. It has an educational purpose
                and is not intended for extensive personal &amp; business usage.
            </p>
            <p class="legal-notice__text">
                As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect
                of quality regarding this Product.
            </p>
            <p class="legal-notice__text">
                The design of <span class="legal-notice__highlight">Portfolio</span> is owned by the
                <span class="legal-notice__highlight">Developer Akademie</span> GmbH. Unauthorized use, reproduction,
                modification, distribution, or replication of the design is strictly prohibited.
            </p>


            <!-- Proprietary rights -->
            <h2 id="rights-title" class="legal-notice__subtitle">Proprietary rights</h2>
            <p class="legal-notice__text">
                Aside from the design owned by <span class="legal-notice__highlight">Developer Akademie</span> GmbH,
                we, the listed students, retain all proprietary rights in
                <span class="legal-notice__highlight">Portfolio</span>, including any associated copyrighted material,
                trademarks, and other proprietary information.
            </p>


            <!-- Use of the product -->
            <h2 id="use-title" class="legal-notice__subtitle">Use of the product</h2>
            <p class="legal-notice__text">
                <span class="legal-notice__highlight">Portfolio</span> is intended to be used for lawful purposes only,
                in accordance with all applicable laws and regulations. Any use of
                <span class="legal-notice__highlight">Portfolio</span> for illegal activities, or to harass, harm,
                threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your
                interactions with other users of <span class="legal-notice__highlight">Portfolio</span>.
            </p>


            <!-- Disclaimer -->
            <h2 id="disclaimer-title" class="legal-notice__subtitle">
                Disclaimer of warranties and limitation of liability
            </h2>
            <p class="legal-notice__text">
                <span class="legal-notice__highlight">Portfolio</span> is provided "as is" without warranty of any kind,
                whether express or implied, including but not limited to the implied warranties of merchantability,
                fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or
                the <span class="legal-notice__highlight">Developer Akademie</span>, be liable for any direct, indirect,
                incidental, special, consequential, or exemplary damages, including but not limited to, damages for
                loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the
                possibility of such damages, arising out of or in connection with the use or performance of
                <span class="legal-notice__highlight">Portfolio</span>.
            </p>


            <!-- Indemnity -->
            <h2 id="indemnity-title" class="legal-notice__subtitle">Indemnity</h2>
            <p class="legal-notice__text">
                You agree to indemnify, defend and hold harmless us, the listed students, the
                <span class="legal-notice__highlight">Developer Akademie</span> and our affiliates, partners, officers,
                directors, agents, and employees, from and against any claim, demand, loss, damages, cost, or
                liability (including reasonable legal fees) arising out of or relating to your use of
                <span class="legal-notice__highlight">Portfolio</span> and/or your breach of this Legal Notice.
            </p>


            <!-- Contact + Date -->
            <h2 id="meta-title" class="sr-only">Meta</h2>

            <p class="legal-notice__text">
                For any questions or notices, please contact us at
                <a class="legal-notice__link" [href]="'mailto:' + lang.dict().identity.email">
                    {{ lang.dict().identity.email }}
                </a>
            </p>

            <p class="legal-notice__date">
                Date: <time datetime="2025-07-26">July 26, 2025</time>
            </p>
`,
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