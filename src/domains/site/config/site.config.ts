export const siteConfig = {
    fallbackUrl: 'https://impulse.expert',
    email: 'hello@impulse.expert',
    features: {
        testimonials: false,
    },
    contact: {
        phone: {
            display: '+1 (360) 342-4460',
            href: 'tel:+13603424460',
        },
        address: {
            display: '1220 Main St, Suite 400 Vancouver, WA',
            streetAddress: '1220 Main St, Suite 400',
            locality: 'Vancouver',
            region: 'WA',
            country: 'US',
            mapUrl: 'https://www.google.com/maps/dir//Svetek+IT+Experts,+Main+Street,+Vancouver,+WA/@45.6308436,-122.7130112,13z/data=!3m1!5s0x5495b045ea46d16d:0x5bd38715078244f3!4m8!4m7!1m0!1m5!1m1!1s0x5495af2e5cce26fd:0x945a4dfcd5699139!2m2!1d-122.6718118!2d45.630791?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D',
        },
    },
} as const;
