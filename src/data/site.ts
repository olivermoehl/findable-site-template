// Single source of truth. Every fact about the organisation lives here and nowhere else.
// Pages, structured data (JSON-LD) and /llms.txt all read from this file, so a fact can never
// differ between two places. Replace every value; the onboarding brief (onboarding/brief.md) maps to these fields.

export const site = {
  name: 'Example Co',
  legalName: 'Example Co Ltd',
  url: 'https://example.com',
  lang: 'en',
  locale: 'en_US',

  // The definition sentence: who you are, what you do, for whom. Keep it literal and free of slogans.
  // It appears word for word on the homepage, in JSON-LD and in llms.txt. Search engines and AI
  // assistants quote the sentence they see repeated consistently.
  entity: 'Example Co helps mid-sized manufacturers cut quoting time by turning their pricing rules into a guided tool their own team maintains.',

  // Default meta description, 110-160 characters. The build fails outside that range.
  description: 'Example Co helps mid-sized manufacturers cut quoting time with a guided pricing tool their own team maintains. Based in Hamburg.',

  founder: { name: 'Alex Example', jobTitle: 'Founder', url: 'https://www.linkedin.com/in/example/' },
  contact: { email: 'hello@example.com' },
  address: { street: 'Example Street 1', postalCode: '20095', city: 'Hamburg', country: 'DE' },
  areaServed: ['DE', 'AT', 'CH'],

  // Topics you want to be associated with. Use the terms from measurement/keywords.csv.
  knowsAbout: ['Quoting software', 'Pricing rules', 'Configure price quote'],

  // Profiles that are the same organisation elsewhere (company pages, directories). Helps engines merge them.
  sameAs: [] as string[],

  // The one action you want from a visitor.
  cta: { label: 'Book a call', href: '/contact/' },

  nav: [
    { label: 'How it works', href: '/#approach' },
    { label: 'Results', href: '/#results' },
    { label: 'What is CPQ?', href: '/what-is-example-term/' },
  ],

  // Questions real buyers ask, answered in two or three plain sentences. Shown as visible text
  // on the homepage and emitted as FAQPage structured data from the same array.
  faq: [
    { q: 'What does Example Co do?', a: 'Example Co turns the pricing rules of a mid-sized manufacturer into a guided quoting tool. The sales team answers questions and receives a priced quote; the rules stay editable by the team itself.' },
    { q: 'How long does a rollout take?', a: 'Replace this with a specific answer. State a range you can defend and what it depends on.' },
    { q: 'What does it cost?', a: 'Replace this with how pricing works. If you do not publish prices, say what drives the price.' },
  ],
};
