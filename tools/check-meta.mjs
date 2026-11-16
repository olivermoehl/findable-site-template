// Fails the build if a page's title or meta description is outside the limits
// that Google and Bing display without cutting (title ≤ 60, description 110–160).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) files.push(p);
  }
})(DIST);

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
let errors = 0;
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  if (/<meta name="robots" content="noindex"/.test(html)) continue;
  const rel = f.slice(DIST.length);
  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  if (!title || [...title].length > 60) { console.error(`✗ ${rel}: title has ${[...title].length} characters (max 60): ${title}`); errors++; }
  const n = [...desc].length;
  if (n < 110 || n > 160) { console.error(`✗ ${rel}: description has ${n} characters (110–160): ${desc}`); errors++; }
}
if (errors) { console.error(`\n${errors} meta problem(s). Fix them in the page's <Base title=… description=…>.`); process.exit(1); }
console.log(`✓ titles and descriptions OK on ${files.length} pages`);
