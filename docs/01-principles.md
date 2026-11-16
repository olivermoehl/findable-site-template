# Principles

Each rule is followed by its reason. If you understand the reason, you can decide the cases this document does not cover.

## 1. One place for every fact

All facts about the organisation live in `src/data/site.ts`. Pages, structured data and `/llms.txt` read from it.

*Why:* Search engines and assistants cross-check. A phone number, a founding year or a description that differs between the footer, the structured data and a directory entry lowers their confidence in all of them. With one source, a fact cannot differ between two places on your own site.

## 2. One sentence that defines you

Write one literal sentence: who you are, what you do, for whom. No slogan, no adjectives you could not prove. Use it word for word on the homepage, in the structured data and in `/llms.txt`.

*Why:* When someone asks an assistant "what does this company do?", the assistant needs a sentence to quote. If you give it the same sentence in several places, that is the one it finds. If you give it three paraphrases, it writes a fourth.

## 3. Lead with the reader's problem, in the reader's words

The homepage starts from situations the buyer recognises, before it explains the method or the technology.

*Why:* People search for their problem, not for your product category. A page that names the problem in the words they use matches what they type and what they ask an assistant.

## 4. One page per term people search for

Each important term gets its own page with its own address, title and description. Technical terms move off the homepage onto such pages, and the homepage links to them.

*Why:* A search result is a page, not a paragraph. A term buried in the middle of a long homepage competes with everything else on it. On its own page it can be the best answer to one question.

## 5. Define first, then explain

An explainer page opens with a two-sentence definition in plain words. Detail, comparison and examples follow.

*Why:* Search engines lift the first clear definition into answer boxes, and assistants quote it. A reader who only reads the first paragraph should still leave with the answer.

## 6. Every passage stands on its own

Write each section so that it makes sense if someone reads only that section. Start glossary definitions with the term itself. Avoid "as mentioned above".

*Why:* Assistants retrieve passages, not pages. A passage that depends on the previous one is useless when quoted alone.

## 7. Everything is in the HTML

No content behind tabs, accordions, sliders or scripts. The site ships no JavaScript.

*Why:* Not every crawler runs scripts, and those that do may not wait. What is in the HTML is certain to be read. It also makes the site fast and removes the need for a cookie banner.

## 8. Structured data on every page

Each page carries JSON-LD that says what it is: `Organization` and `WebSite` on the homepage, `Article` on explainers and cases, `FAQPage` where questions are answered, `DefinedTermSet` on the glossary. The structured data is generated from the same data as the visible text.

*Why:* Structured data removes guessing. It tells a machine "this is the organisation, this is its founder, these are questions and their answers". Generating it from the visible content guarantees the two never disagree, which matters because engines penalise markup that claims things the page does not show.

## 9. Questions as questions

Frequent questions are written as the question a buyer would ask, answered in two or three sentences, shown as normal text and marked up as `FAQPage`.

*Why:* People type and speak questions. A page that contains the question verbatim, followed directly by a short answer, is the easiest thing for an engine to match and quote.

## 10. Proof with numbers a reader can check

Each case has its own page: starting point, what was built, what changed. Every figure states what it measures and where it comes from, in a form the reader can verify ("1.5 to 2 days of about ten, so 15 to 20 percent").

*Why:* Specific, checkable claims are what both people and assistants repeat. A figure that looks more precise than its basis is the first thing a careful reader distrusts.

## 11. State limits and say only what is true today

Say what your product or service cannot do. Leave out anything that is planned but not in use.

*Why:* Pages that only praise read as advertising and are treated as such. A stated limit is a signal of a trustworthy source. And a claim that turns out to be untrue costs more than it ever earned.

## 12. A map for machines

`/llms.txt` lists every page with a one-line summary, the definition sentence and the frequent questions. It is generated from `src/data/pages.ts` and `site.ts`. `robots.txt` allows crawlers and names the sitemap. The sitemap is generated at build time.

*Why:* These files cost nothing and tell a crawler what exists. Generated files cannot fall out of date. Whether a given assistant reads `/llms.txt` varies and is not guaranteed; it is a low-cost bet.

## 13. Titles and descriptions inside the limits

Titles up to 60 characters, descriptions 110 to 160. The build fails otherwise.

*Why:* Longer ones are cut off in results, and Bing reports them as errors. A check in the build means nobody has to remember the rule.

## 14. Link the same organisation elsewhere

List your company profiles in `site.sameAs` and link to them from the site. Make sure those profiles link back and use the same name, address and description.

*Why:* It lets engines merge the entries into one entity instead of treating them as several weak ones.

## 15. Change only after review

No change goes live before a person has seen it and said yes.

*Why:* On a site where every sentence may be quoted as a fact about your company, an unreviewed sentence is a risk.
