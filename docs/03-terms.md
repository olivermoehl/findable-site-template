# Finding the right terms

The words on the site decide which searches it can match. This step finds the words buyers actually use and assigns each to one page.

## What you need

- The phrases from the onboarding brief (question 7).
- A source of search data. A keyword data service with an API is the most convenient, because an agent can query it directly. [DataForSEO](https://dataforseo.com) is one such service (paid, per request); the live example used it. Free alternatives are Google Keyword Planner, Bing Webmaster Tools keyword research and, once the site is live, your own Search Console queries.

No service is required to start. Without one, use the buyers' phrases as they are and let the first Search Console data correct you.

## Steps

1. **Seed list.** Take the buyers' phrases and the technical terms from the brief. Add the question forms: "what is X", "X vs Y", "X cost", "X for [industry]".
2. **Get the numbers.** For each term, fetch monthly search volume for your country and language, the twelve-month trend, and related terms. With a data service, ask your agent: "For the terms in measurement/keywords.csv, fetch search volume, trend and related keywords for [country] in [language], and add them to the file."
3. **Sort into three groups.**
   - *Problem terms:* what people search before they know a solution exists. These belong on the homepage and in case pages.
   - *Solution terms:* named categories and methods. Each gets an explainer page.
   - *Your own terms:* words you coined. They have no search volume. Use them, but always next to the term people already know, and define them in the glossary.
4. **Assign each term to exactly one page.** Write the page path into `measurement/keywords.csv`. If two terms mean the same thing, they share a page. If a term has no page, either create one or drop the term.
5. **Check the wording.** The assigned term appears in the page title, the main heading and the first paragraph, in the form people search for it. Do not repeat it beyond what reads naturally.
6. **Decide what not to chase.** Very large terms dominated by big publishers are usually out of reach for a new site. Note them as "watch" and aim for the more specific variants first.

## What the numbers mean

- A small volume is not a reason to drop a term. Ten searches a month by the right buyer are worth more than ten thousand by students.
- Zero volume means the service has no data, not that nobody asks. Assistants are asked many questions that never show up in keyword tools.
- A rising trend matters more than the current level.

## Output

`measurement/keywords.csv` with one row per term: term, group, monthly volume, trend, assigned page, date checked. This file is the input for the loop in `docs/04-measure-and-improve.md`.
