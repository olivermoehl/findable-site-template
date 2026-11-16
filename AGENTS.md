# Instructions for AI agents

You are building or maintaining a website whose first goal is to be found and understood by search engines and AI assistants. Read this file completely before changing anything.

## Order of work

1. **Read** `docs/01-principles.md`. Every rule there applies to everything you write.
2. **Onboard.** If `onboarding/brief.md` still contains unanswered questions, ask the user the questions from `docs/02-onboarding.md`, a few at a time, and write the answers into the brief. Do not invent answers. If the user does not know something, record that and move on.
3. **Choose the terms.** Follow `docs/03-terms.md` to fill `measurement/keywords.csv`. Each term is assigned to exactly one page.
4. **Fill the data.** Write the organisation's facts into `src/data/site.ts`, the terms into `src/data/glossary.ts` and the page list into `src/data/pages.ts`.
5. **Write the pages.** Replace every line marked `Replace:` in `src/pages/`. Copy the explainer and case patterns for each additional term and case. Rename `what-is-example-term.astro` and `cases/example-case.astro` to real names and update links, `site.nav` and `pages.ts`.
6. **Apply the brand.** Change the tokens at the top of `src/styles/global.css`. Add a logo only if the user provides one.
7. **Build.** Run `npm run build`. It must pass. Fix titles and descriptions the check rejects.
8. **Show before publishing.** Present the built site to the user for review. Publish only after an explicit yes.
9. **Set up measurement.** Follow `docs/04-measure-and-improve.md`: baseline test questions, search consoles, first entry in `measurement/changelog.md`.

## Rules you must not break

- **Facts come only from `src/data/site.ts` and from the user.** Never write a number, a client name, a quote or a capability the user has not given you. If a placeholder has no real content yet, leave the section out instead of filling it.
- **Only what is true today.** Features that are planned or in preparation stay off the site.
- **The definition sentence (`site.entity`) is repeated word for word.** Do not paraphrase it on the homepage.
- **Every number names its source and can be checked by the reader.**
- **Every technical term is defined in plain words the first time it appears on a page.**
- **No content behind scripts, tabs or accordions.** Everything is in the HTML as shipped.
- **One topic per page, one page per topic.** Do not create two pages that answer the same question.
- **Titles up to 60 characters, descriptions 110 to 160.** The build enforces this; do not weaken the check.
- **Do not add tracking, cookies or third-party embeds** unless the user asks, and then update the privacy page in the same change.
- **Client confidentiality.** Clients are anonymous unless the user states they have written permission to name them. Never describe a client's starting point in a way that makes them look bad.
- **Nothing goes live without the user's explicit approval** of the exact change.

## When you maintain the site later

Run the loop in `docs/04-measure-and-improve.md`. Change one thing per page per cycle, write it into `measurement/changelog.md` with the date and the reason, and wait for the next cycle before judging it.

## Definition of done for the first build

- `npm run build` passes.
- No line containing `Replace:` or `Example Co` remains in `src/`.
- `/llms.txt` lists every indexable page with an accurate one-line summary.
- Each page has its own title, description and structured data.
- `measurement/keywords.csv`, `measurement/ai-test-questions.md` and `measurement/changelog.md` each have their first entries.
- The user has reviewed and approved the site.
