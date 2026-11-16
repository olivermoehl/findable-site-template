// Glossary: every term a buyer might search for, defined in one to three sentences that still make
// sense when quoted alone. Start each definition with the term itself.
export type Term = { id: string; term: string; text: string; more?: { href: string; label: string } };

export const glossary: Term[] = [
  { id: 'cpq', term: 'CPQ (Configure, Price, Quote)', text: 'CPQ is software that guides a salesperson through configuring a product, applies the pricing rules and produces a quote. It replaces spreadsheets that only one person understands.', more: { href: '/what-is-example-term/', label: 'What is CPQ?' } },
  { id: 'pricing-rule', term: 'Pricing rule', text: 'A pricing rule is a condition that changes a price, for example a surcharge for a special material or a discount above a quantity. Written down, it can be checked and maintained.' },
];
