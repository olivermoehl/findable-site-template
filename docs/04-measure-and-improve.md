# Measure and improve

A findable site is not finished at launch. This is the process that keeps it improving from its own data. It is written so that a person can run it in half an hour, or hand it to an agent.

## The loop

```
measure  ->  compare with the term list  ->  decide one change per page  ->  review  ->  publish  ->  log  ->  wait  ->  measure
```

## Before launch: the baseline

1. Write ten questions a buyer might ask an assistant into `measurement/ai-test-questions.md`. Include your company name in two of them and leave it out of eight.
2. Ask each question to the assistants your buyers use. Record the date, the assistant, whether your company was mentioned, and what was said.
3. This is the "before" picture. Without it you cannot show what changed.

## Set up once

- **Google Search Console** and **Bing Webmaster Tools**: verify the domain and submit `/sitemap-index.xml`.
- **Change notifications:** see `docs/05-deploy.md` for IndexNow.
- **`measurement/changelog.md`:** first entry is the launch.

## Each cycle

Weekly for the first eight weeks, then monthly.

**1. Collect**

- Search Console and Bing: for the last 28 days, the queries, the pages, impressions, clicks and average position; the indexing report.
- The ten test questions, asked again.
- Once a quarter: refresh volumes and related terms in `measurement/keywords.csv`.

**2. Compare and decide**

Use the table. Pick the one signal per page that matters most.

| What you see | What it usually means | What to do |
|---|---|---|
| A page is "discovered" or "crawled" but not indexed after three weeks | The engine does not see enough distinct value, or nothing links to the page | Link to it from the homepage and one other page. Make the first paragraph answer one clear question. Check it does not repeat another page |
| Impressions but almost no clicks, position 1 to 10 | Title and description do not promise what the searcher wants | Rewrite title and description around the query's wording. Put the benefit or the number first |
| Impressions at position 11 to 30 | The page is relevant but not the best answer yet | Add what the top results have and you lack: a definition up front, a comparison table, a concrete example, a question people also ask |
| Queries appear that no page was written for | You have found demand | If it fits your offer, give the term its own page or section and add it to `keywords.csv`. If it does not fit, ignore it |
| A term from `keywords.csv` gets no impressions after six weeks | The page does not use the term the way people search it, or the term is out of reach | Check title, heading and first paragraph. Try the more specific variant. Otherwise mark it "watch" |
| Two of your pages show up for the same query | They compete with each other | Merge them, or sharpen each to its own question and link them |
| Clicks but visitors do not take the next step | The page answers the question but does not lead anywhere | Add one clear next step that matches the page's topic |
| An assistant describes your company wrongly | It found conflicting or thin facts | Fix the fact in `site.ts`, check the same fact on every external profile, add the question and a short answer to the FAQ |
| An assistant does not mention you for a question you should own | No page answers that exact question in a quotable form | Add the question verbatim with a two-sentence answer on the matching page |
| An assistant quotes you correctly | It works | Leave that passage alone |
| Search Console or Bing reports an error | A technical problem | Fix it first, before any content change |

**3. Change one thing per page**

If you change the title, the first paragraph and the structure in the same week, you will not know which one helped.

**4. Review, publish, log**

Show the change to whoever approves changes. After publishing, add a line to `measurement/changelog.md`: date, page, what changed, why, which signal you expect to move.

**5. Wait**

Search data lags. Give a change two to four weeks before judging it. Assistants can take longer, because they rely on search indexes and on their own refresh cycles.

## Handing the loop to an agent

Give the agent the exported data and say:

> Run the cycle in docs/04-measure-and-improve.md. Here are the Search Console and Bing exports for the last 28 days and the current answers to the test questions. Compare them with measurement/keywords.csv and measurement/changelog.md. Propose at most one change per page, each with the signal from the table that justifies it and the exact new wording. Do not publish anything. After I approve, make the changes and add the changelog entries.

## What to publish about your own results

If you report results, report the plain numbers with their date range: indexed pages, impressions, clicks, queries, and how many of the ten test questions mention you. Do not publish server logs, IP addresses or details of your infrastructure.
