# salfordX, centralized header and footer

This is a GitHub Pages and Jekyll site skeleton that centralizes the header and footer.

## How to use
1. Download the ZIP provided in ChatGPT and extract it.
2. Copy your existing page **main content** into the Markdown files here, for example `research.md`. Do not include any old `<header>` or `<footer>` blocks.
3. Keep shared navigation in `_data/nav.yml`.
4. Commit and push to your `salfordX` repository.

## Local preview
- With Ruby:
  ```bash
  gem install bundler
  bundle install
  bundle exec jekyll serve --livereload
  ```
  Open http://127.0.0.1:4000/salfordX/

- Without Ruby, you can still preview the HTML structure on GitHub Pages after pushing. Liquid includes do not render in a simple file preview.