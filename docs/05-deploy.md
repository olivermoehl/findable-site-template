# Deploying

The build produces a folder of static files (`dist/`). Any static host can serve it.

## Options

- **A static hosting service** (GitHub Pages, Cloudflare Pages, Netlify and similar): connect the repository and set the build command to `npm run build` and the output folder to `dist`.
- **Your own server:** let the server fetch the built files instead of giving the build pipeline access to the server. The site this template came from builds in GitHub Actions, publishes the result to a separate branch, and the server pulls that branch on a timer. No server credentials are stored with the code host.

Set `site.url` in `src/data/site.ts` to the real domain before the first public build; canonical URLs, the sitemap and `/llms.txt` depend on it.

## Telling search engines about changes

- **Google:** submit the sitemap once in Search Console. For an important new page, request indexing by hand in the URL inspection tool. Google does not use IndexNow.
- **Bing and others:** [IndexNow](https://www.indexnow.org) lets you report changed addresses directly. Generate a key, serve it as `/<key>.txt` from `public/`, and post the sitemap's addresses after each deploy. `.github/workflows/build.yml` contains an optional job for this; it runs only when the repository variables `SITE_HOST` and `INDEXNOW_KEY` are set. Log the list of reported addresses so you can check what was sent.

If the host takes a few minutes to publish, wait before reporting, otherwise the engine fetches the old version.
