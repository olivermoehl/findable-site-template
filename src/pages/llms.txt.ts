// /llms.txt: a plain-text map of the site for AI assistants, generated from the same data as the pages.
// It cannot drift from the site because nobody writes it by hand.
import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { pages } from '../data/pages';

export const GET: APIRoute = () => {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.entity}`,
    '',
    '## Pages',
    '',
    ...pages.map((p) => `- [${p.title}](${new URL(p.path, site.url).href}): ${p.summary}`),
    '',
    '## Frequent questions',
    '',
    ...site.faq.flatMap(({ q, a }) => [`### ${q}`, '', a, '']),
    '## Contact',
    '',
    `${site.legalName}, ${site.address.city}. ${site.contact.email}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
