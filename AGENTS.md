## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Product Direction

People is the first Islampedia project: an editorial, artistic encyclopedia of
Islamic figures and the relationships between them. It is not an admin dashboard
or CRUD application, and should not resemble Wikipedia, a SaaS template, or a
generic component-library site.

The initial goal is to collect Islamic figures and model their relationships,
starting with lineage. The knowledge graph must be expandable to relationships
such as teacher–student, family, companions, and involvement in events.

Each figure has a page that readers can explore and follow to related figures,
categories, sources, and references. The presentation may vary meaningfully by
figure: data stays consistent, while the art direction can be specific to the
person and their story.

## Technical Principles

- Prefer Astro's static-first model and generate static HTML at build time.
- Keep browser-side JavaScript deliberately small; add interactive islands only
  where they provide clear reader value.
- Use TypeScript, vanilla CSS, SQLite, Drizzle, and Motion JS for the initial
  stack.
- Do not add Svelte, GSAP, Tailwind, shadcn, a CMS, authentication, a server
  database, or a graph database unless a concrete requirement justifies it.
- SQLite is a structured build-time knowledge source, not a production runtime
  dependency for every request.

## Knowledge Model

Keep reusable facts in SQLite and keep visual storytelling in files. A typical
person-specific page can live at:

```
src/content/people/<slug>/
├── DESIGN.md
├── page.astro
├── theme.css
├── animation.ts
└── assets/
```

The root `DESIGN.md` is the parent design authority for People. A person's local
`DESIGN.md` inherits it and defines that figure's own visual world: narrative
material, palette, display typography, imagery, composition, and motion grammar.
Local design files may extend the parent identity but must not override shared
semantics, source and certainty language, accessibility, navigation behavior, or
editorial integrity.

Model relationships as generic, sourceable edges rather than a family-tree-only
structure. A relationship should be able to record its origin, target, type,
certainty, source/reference, and editorial notes. Do not assume all claims are
uncontested: historical and genealogical facts may have multiple narrations or
levels of certainty.

Design identifiers and relationships so their targets can eventually include
people, events, places, works, and other knowledge entities—not only people.
Keep core facts independent from a page's bespoke layout so they can later power
indexes, search, timelines, and automatically generated relation views.

## Delivery Priorities

Build the smallest proven foundation first:

1. Establish the minimal Astro structure and lightweight development workflow.
2. Add SQLite and Drizzle with a compact, evidence-aware schema.
3. Enter one initial figure and its sourced relationships.
4. Create one exceptional editorial page with a distinct, official-looking art
   direction, strong typography, large imagery, scrolling storytelling, and
   restrained, polished animation.
5. Generalize only patterns that have been proven by that page.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
