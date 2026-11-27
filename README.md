# Findable Site Template

A website skeleton built for one goal: being found, by search engines and by AI assistants. It comes with the reasoning behind every rule and a process for improving the site from its own search data, so the site stays a living thing instead of a one-off launch.

Hand this repository to an AI coding agent together with your answers to the onboarding questions, and it can build your site on it. Or use it yourself as a checklist.

**Deutsch, kurz:** Dieses Repository ist eine Vorlage für Websites, deren oberstes Ziel Auffindbarkeit ist, in Suchmaschinen und in KI-Assistenten. Es enthält das Skelett, die Regeln mit Begründung und einen Prozess, mit dem man die Seite anhand ihrer eigenen Suchdaten laufend verbessert. Die Dokumentation ist englisch.

## Why this exists

Most company websites are built to look good to the person who commissioned them. This one is built so that a machine reading the raw HTML understands who the company is, what it does and for whom, and so that a person who lands on any single page understands the same.

The approach was worked out while building a company website that runs on this structure. This repository contains none of its content, only the method.

## What you get

| Part | Where | What it is for |
|---|---|---|
| The rules and their reasons | [`docs/01-principles.md`](docs/01-principles.md) | Why the skeleton looks the way it does |
| Onboarding questions | [`docs/02-onboarding.md`](docs/02-onboarding.md), [`onboarding/brief.md`](onboarding/brief.md) | What an agent (or you) must know before writing a line |
| Finding the right terms | [`docs/03-terms.md`](docs/03-terms.md) | Choosing the words people actually search for, with a keyword data service |
| Measure and improve | [`docs/04-measure-and-improve.md`](docs/04-measure-and-improve.md) | The loop: what to look at, how often, and what to change when a number is off |
| Deploying | [`docs/05-deploy.md`](docs/05-deploy.md) | Hosting options and telling search engines about changes |
| Instructions for AI agents | [`AGENTS.md`](AGENTS.md) | The order of work and the rules an agent must follow |
| The skeleton | `src/`, `tools/` | An [Astro](https://astro.build) site with placeholder content that builds as is |

## Quick start

```bash
npm install
npm run dev      # local preview
npm run build    # builds the site and fails if a title or description is out of range
```

Then either:

- **With an AI agent:** open the repository in your coding agent and say: "Read AGENTS.md and start the onboarding." The agent asks the questions in `docs/02-onboarding.md`, records your answers in `onboarding/brief.md` and builds from there.
- **By hand:** fill in `onboarding/brief.md`, then replace the values in `src/data/site.ts` and every line marked `Replace:` in `src/pages/`.

## How the skeleton is organised

```
src/data/site.ts        every fact about the organisation, in one place
src/data/pages.ts       one line per page; /llms.txt is generated from it
src/data/glossary.ts    terms with short, quotable definitions
src/layouts/Base.astro  title, description, canonical URL and structured data for every page
src/pages/              homepage, one explainer page, one case page, glossary, contact, legal
tools/check-meta.mjs    fails the build when a title or description is too long or too short
measurement/            keyword list, test questions for AI assistants, change log
```

The site ships no JavaScript, sets no cookies and loads nothing from third parties. What a crawler downloads is the complete page.

## What this template does not promise

It does not promise rankings. The rules here are the ones used on that website, and each one has a stated reason, but search engines and assistants decide for themselves what they show. Results depend on your market, your content and how consistently you run the loop in `docs/04-measure-and-improve.md`.

## License

MIT, see [`LICENSE`](LICENSE). Provided as is, without support. The license covers the code and documentation in this repository. It does not cover the name, logo or content of any site built with it.
