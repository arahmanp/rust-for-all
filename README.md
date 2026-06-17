<p align="center">
  <img src="assets/logo/Rust for All.png" alt="Rust for All" width="200">
</p>

<h1 align="center">Rust for All</h1>

<p align="center" style="padding: 0 15%;">A reimagined learning experience for <a href="https://doc.rust-lang.org/book/">The Rust Programming Language</a> (TRPL) — same content, way better vibes.</p>

---

## Why this exists

The official TRPL book is a great resource, but let's be real: the layout is stiff, the design is plain, and reading it feels like staring at a wall of text. Five minutes in and you're already fighting sleep.

**Rust for All** takes all the original TRPL material and repackages it into a proper web experience — clean design, dark mode, syntax highlighting, smooth navigation, the works. The content itself is untouched; only the presentation is different.

---

## What's inside

- **22 chapters** covering everything from installation to building a multithreaded web server
- **90+ lessons** — each section from TRPL is its own readable page
- **Client-side Markdown rendering** — the `book/` directory holds the original `.md` files, rendered on the fly in the browser via marked.js
- **Syntax highlighting** powered by Prism.js (Rust, TOML, Bash)
- **Dark / light mode** with system preference detection and zero flash on load (FOUC prevention)
- **"On this page" TOC** with scroll-spy on lesson pages
- **Prev / Next navigation** across all lessons in order
- **`{{#include}}` directive support** — code listings from `listings/` are fetched and inlined just like mdBook does it
- **Fully static** — no build step, no server-side code, no framework

---

## Tech stack

| Thing | What |
|---|---|
| UI framework | Bootstrap 5 (bundled locally) |
| Icons | Bootstrap Icons |
| DOM / AJAX | jQuery |
| Markdown rendering | marked.js 4 (CDN) |
| Syntax highlighting | Prism.js (CDN) |
| Fonts | Inter (UI) + JetBrains Mono (code) — bundled locally |
| Styling | Custom CSS on top of Bootstrap — Rust orange (`#f74c00`) as brand color |

No npm. No bundler. No build step. Just open and go.

---

## Project structure

```
rust-for-all/
├── index.html          # Homepage — hero + chapter grid
├── chapter.html        # Chapter overview — section accordion
├── material.html       # Lesson reader — markdown content + TOC
│
├── js/
│   ├── data.js         # All chapter/section metadata (single source of truth)
│   ├── main.js         # Homepage — renders chapter cards
│   ├── chapter.js      # Chapter page — builds the accordion
│   ├── material.js     # Lesson page — fetches & renders markdown, TOC, nav
│   └── theme.js        # Dark/light theme manager
│
├── css/
│   └── style.css       # All custom styles
│
├── book/               # Markdown source files from TRPL (unmodified)
├── listings/           # Code listings referenced by {{#include}} in the book
└── assets/             # Bootstrap, Bootstrap Icons, jQuery, fonts, logo
```

---

## Running locally

Since the lesson pages fetch `.md` files via `fetch()`, you need a local HTTP server — you can't just open `index.html` directly in a browser.

```bash
# Python (no install needed)
python -m http.server 8080

# Or Node.js
npx serve .
```

Then open `http://localhost:8080` and you're good.

---

## Content license

All content in `book/` and `listings/` is from [The Rust Programming Language](https://doc.rust-lang.org/book/), © Steve Klabnik and Carol Nichols, dual-licensed under the [MIT License](https://opensource.org/licenses/MIT) and the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). The site design and code are original work.
