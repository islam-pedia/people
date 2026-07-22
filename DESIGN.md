---
name: People by Islampedia
description: A source-led, full-art editorial world for encountering Islamic lives and their relationships.
---

<!-- SEED: established with the user before implementation; re-run $impeccable document once there's code to capture the actual tokens and components. -->

# Design System: People by Islampedia

## Overview

**Creative North Star: "The Living Isnad"**

People treats knowledge as a living chain: a claim leads to a source, a life
leads to other lives, and every relationship has a visible path. That chain is
not rendered as a technical graph. It becomes editorial choreography—lines that
guide the eye, margins that hold evidence, images that establish place and
period, and transitions that reveal connections at the moment they become
meaningful.

The system has two complementary layers. The institutional layer is stable:
navigation, source language, relationship notation, reading rhythm, and trust
signals always feel like People. The story layer is art-directed per figure:
palette, imagery, display typography, composition, texture, and the dominant
motion metaphor may change to honor the person's story. A page must be
recognizable as People without forcing every life into one template.

This root document is the parent design authority. Every figure may define a
local `src/content/people/<slug>/DESIGN.md` that inherits this system and commits
its own art world. The local file owns figure-specific palette roles, display
voice, image language, composition, texture, transitions, and narrative motion.
It does not own the meaning of navigation, relationship types, certainty,
sources, accessibility, or editorial truth; those remain global invariants.

This is a full-art reading experience. Large imagery, typographic scale, silence,
soundless rhythm, and scrolling storytelling carry the narrative. The interface
recedes whenever it competes with the content. Premium means authored,
controlled, and exact—not glossy chrome or a high density of effects.

**Key Characteristics:**

- Source-led editorial storytelling rather than database presentation.
- Monumental typography paired with a highly readable long-form text system.
- Full-bleed visual fields and decisive images, not galleries of interchangeable
  thumbnails.
- Relationships revealed contextually through the reading journey.
- One stable institutional grammar supporting many figure-specific art worlds.
- Motion with weight, restraint, and a complete reduced-motion path.

**The Content Has Gravity Rule.** Art direction must increase attention to the
subject, the evidence, or the relationship being explained. If an effect pulls
attention toward itself, remove or subordinate it.

**The One Life, One World Rule.** Each major figure may own a distinct visual
world, but not a different usability model. Reading, navigation, citations, and
relationship semantics remain learnable across the site.

**The Nearest Authority Rule.** When designing a figure page, read the root
`DESIGN.md` first and its local `DESIGN.md` second. Local art direction wins on
expression; the root wins on meaning, trust, and usability.

## Colors

The global system uses a restrained institutional base with one page-owned color
field. The exact palette and color values are **to be resolved during the first
implementation**.

### Primary

- **Institutional Ink:** the authoritative color for reading text, navigation,
  source labels, and the stable People identity.
- **Story Field:** a figure-specific dominant color or material field that may
  occupy a substantial part of the page. It establishes the chapter's world
  rather than appearing as scattered accent dots.

### Secondary

- **Relation Trace:** a controlled contrasting color used only when a
  relationship, chronology, or source path must become visible.
- **Evidence Mark:** a distinct but quiet role for citation state, certainty,
  disagreement, and editorial annotation.

### Neutral

- **Reading Ground:** a low-fatigue surface for long text; it may be light or
  dark when the physical scene of the page justifies it.
- **Quiet Structure:** dividers, inactive relation paths, captions, and secondary
  metadata.

**The Field, Not Confetti Rule.** Color belongs to meaningful regions, images,
and narrative transitions. Do not distribute a page color across small badges,
icons, and decorative accents simply to make the interface feel branded.

**The Chapter Palette Rule.** A figure-specific palette must define semantic
roles before it changes the global surface. Source certainty and interaction
states may not change meaning from page to page.

## Typography

The type system is the primary visual architecture. Exact families and metrics
are **to be resolved during implementation**, after testing Bahasa Indonesia,
Arabic, transliteration, honorifics, long-form reading, and mobile rendering.

**Display Character:** monumental, dignified, and capable of carrying a name or
turning point at architectural scale. A figure page may introduce a compatible
display voice when it materially serves that story.

**Reading Character:** calm, contemporary, and exceptionally legible across long
passages. It remains stable across People and must support strong hierarchy
without relying on many weights.

**Arabic Character:** selected as Arabic typography in its own right, with proper
shaping and scholarly review. Never imitate Arabic forms with Latin letters or
use sacred text as decorative texture.

### Hierarchy

- **Display:** names, era-defining phrases, and major narrative thresholds. It
  can fill the viewport but must never make the first factual context disappear.
- **Headline:** chapter turns and major life phases; strong enough to structure a
  long scroll without card containers.
- **Title:** related figures, events, sources, and local narrative units.
- **Body:** long-form reading with a controlled line length, generous leading,
  and stable rhythm across page worlds.
- **Label:** dates, relationship types, certainty, captions, and source metadata.
  Labels are concise and never used as decorative microtext.

**The Name Is Architecture Rule.** A person's name may become the dominant
visual form of the opening, but title, honorific, context, and pronunciation must
remain semantically correct and accessible.

**The Two Voices Rule.** Each page should usually need one reading voice and one
display voice. Add a third only for a real linguistic or evidentiary function.

## Layout

People uses a cinematic editorial canvas with a protected reading spine. The
canvas may break the viewport edge, layer imagery, or shift alignment between
chapters; the reading spine preserves sequence, line length, source access, and
orientation.

Pages are composed as narrative movements rather than repeated horizontal
sections. Scale and density must change through the scroll: an immersive opening,
a legible establishment of context, dense passages where evidence demands it,
quiet visual releases, relational turns, and a deliberate close. A screenful of
equal cards is not a story rhythm.

Desktop composition may be asymmetric and spatial. On small screens the page is
re-authored as one strong sequence—not merely a desktop grid stacked into a
column. Full-bleed art remains decisive, captions stay attached to their subject,
and relation paths simplify without losing their meaning.

Global navigation remains compact and calm. Local wayfinding can use chapter
markers, time, place, or relationship context, depending on the story. Reading
progress is never gamified.

**The Protected Spine Rule.** Art may cross the grid; essential prose, sources,
and controls may not become unstable, obscured, or dependent on pointer hover.

**The No Section Factory Rule.** Do not build long pages by repeating the same
heading–paragraph–card-grid block. Every movement needs a narrative purpose and a
distinct spatial response within the same visual world.

## Elevation & Depth

Depth comes from authored image planes, scale, occlusion, tonal fields, and
controlled movement. Generic card shadows, glass panels, glow, and stacked
floating rectangles are not the material language of People.

Parallax or pinned passages may be used for one important narrative sequence
when they clarify travel, time, separation, succession, or relationship. Content
is visible by default; animation enhances its arrival rather than being required
to reveal it. Motion should accelerate and settle with physical confidence, not
float continuously.

**The One Orchestrated Gesture Rule.** Each page earns one dominant motion idea
derived from its story. Small interactions inherit that timing; they do not
compete with a collection of unrelated effects.

**The Still Page Test.** If a screenshot without motion loses the hierarchy or
meaning, the composition is unfinished.

## Shapes

The base system favors editorial edges, image crops, rules, source marks, and
open spatial boundaries. Corners follow the material of the page rather than a
universal rounded scale. Relationship paths may bend, branch, disappear behind
an image plane, and re-emerge, but their endpoints and meaning must remain clear.

Repeated rounded rectangles and pills are prohibited as a default organizing
device. Containers should exist only when content truly has a boundary, such as
a source excerpt, a comparison of riwayat, or an interactive detail.

Signature source and certainty marks must feel official and reproducible, never
like ornamental wax seals or invented historical artifacts. Their final form is
**to be resolved with the data model and first implementation**.

**The Honest Edge Rule.** A boundary communicates a real grouping, state, or
layer. Do not draw boxes merely because the page needs visual variety.

## Do's and Don'ts

### Do:

- **Do** begin each figure with a visual thesis specific to that life, not a
  reusable hero component with swapped content.
- **Do** use large, carefully authored imagery that establishes place, material,
  atmosphere, or historical context.
- **Do** make citations, certainty, and differing reports easy to reach without
  breaking the reading experience.
- **Do** keep the prose readable and semantically complete without JavaScript,
  animation, or decorative imagery.
- **Do** design motion with `prefers-reduced-motion` from the beginning.
- **Do** treat Arabic text, honorifics, and religious source material with
  typographic and editorial care.
- **Do** use non-figurative, respectful visual storytelling for prophets; never
  depict Nabi Muhammad ﷺ.

### Don't:

- **Don't** imitate Wikipedia, a dashboard, an admin interface, a SaaS landing
  page, or a shadcn component showcase.
- **Don't** reduce “premium” to dark backgrounds, gold accents, glassmorphism,
  gradients, soft shadows, or excessive polish effects.
- **Don't** use generic mosque silhouettes, random geometric patterns,
  pseudo-Arabic lettering, or manuscript texture as shorthand for Islam.
- **Don't** turn relationships into a graph canvas before the reading experience
  proves that interaction necessary.
- **Don't** invent imagery, quotations, sanad, events, or historical artifacts
  that a reader could mistake for evidence.
- **Don't** allow bespoke art direction to change the meaning of navigation,
  relationship types, certainty, or sources.
