---
name: Muhammad — People by Islampedia
description: A monumental editorial journey where a single luminous trace connects revelation, migration, community, and legacy.
colors:
  charcoal-night: "#241a0e"
  deep-umber: "#3a2818"
  sepia: "#573819"
  parchment-low: "#cda763"
  parchment: "#ddb87b"
  parchment-high: "#ecd6a6"
  ember: "#66300f"
  firelight: "#d6a15f"
  trace-olive: "#66583c"
  trace-light: "#b19a68"
typography:
  display:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "clamp(3.75rem, 10vw, 6rem)"
    fontWeight: 650
    lineHeight: 0.88
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)"
    fontWeight: 590
    lineHeight: 0.95
    letterSpacing: "-0.038em"
  title:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "clamp(2rem, 4.2vw, 3.6rem)"
    fontWeight: 540
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  lead:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "clamp(1.35rem, 2.5vw, 2rem)"
    fontWeight: 560
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "clamp(1.08rem, 1.6vw, 1.28rem)"
    fontWeight: 410
    lineHeight: 1.7
  body-small:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "0.92rem"
    fontWeight: 410
    lineHeight: 1.55
  label:
    fontFamily: "Familjen Grotesk Variable, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 620
    lineHeight: 1.2
    letterSpacing: "0.08em"
  micro:
    fontFamily: "Familjen Grotesk Variable, Arial, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 620
    lineHeight: 1.2
    letterSpacing: "0.04em"
  arabic:
    fontFamily: "Noto Kufi Arabic Variable, serif"
    fontWeight: 500
    lineHeight: 1.6
  field-art:
    fontFamily: "Familjen Grotesk Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(8rem, 28vw, 28rem)"
    fontWeight: 720
    lineHeight: 0.8
    letterSpacing: "-0.06em"
rounded:
  edge: "2px"
spacing:
  trace: "8px"
  passage: "clamp(5rem, 12vw, 11rem)"
---

# Design System: Muhammad — People by Islampedia

## Overview

**Creative North Star: "A Line Across the Mountain"**

The page interprets The Living Isnad as one continuous luminous trace. It begins
as a distant line of dawn, becomes the reading spine, marks chronological turns,
crosses the Hijrah landscape, and finally branches into relationships and source
paths. It is never a decorative progress bar; every appearance must carry time,
movement, relation, or evidence.

The physical world is volcanic stone before dawn, charcoal shadow, pale
parchment under sun, and the measured warmth of a lamp, painted as cinematic
ink-wash on aged parchment. Imagery is generated through `imagegen` and inherits
the material language of the canonical `sirah-nabawiyah-2` plates: monumental
terrain, charcoal and sepia pigment, deliberate parchment negative space,
scarce light, and painted edges that dissolve into the page. Landscape
establishes scale and atmosphere but is always labeled as editorial art rather
than historical reconstruction.

**Key Characteristics:**

- Monumental Latin typography counterweighted by quiet, properly shaped Arabic.
- Full-bleed landscape fields followed by disciplined reading passages.
- Original imagegen plates derived from the shared ink-wash reference language,
  never photographic reconstruction.
- A single trace that changes semantic function through the story.
- Charcoal darkness and deep umber rather than violet, blue, or black-and-gold
  luxury shorthand.
- Stillness at rest; motion appears as settling, drawing, and uncovering.

**The No Portrait Rule.** Nabi Muhammad ﷺ is never depicted, silhouetted,
represented by a body-shaped absence, or replaced by an object pretending to be
his presence.

## Colors

The page moves from charcoal night into parchment light, crosses deep umber, and
returns to charcoal for its close. Firelight is rare and signals arrival or
revelation; muted olive-brown belongs to relationships and evidence. Every
surface is sampled from the same warm material family as the image plates so a
reader never feels that an illustration has been dropped into a separate UI.

**The Horizon Rule.** Firelight appears as a line, point, or small field of
arrival. It never becomes luxury trim distributed across the interface.

## Typography

Source Serif 4 gives names and chapter turns a literary, monumental authority
that belongs beside the ink-wash plates. Familjen Grotesk remains the stable
institutional voice for navigation, places, dates, relations, and source labels.
Noto Kufi Arabic is reserved for correctly rendered Arabic names and short
primary-source excerpts.

Display text is compact and architectural. Body copy holds a 65–72 character
measure. Labels encode actual time, place, relationship, source, or certainty;
they are not ornamental eyebrows.

## Layout

The page alternates between immersive image planes and protected text passages.
The continuous trace occupies the left reading margin on desktop, then moves
inside the content column on mobile. The Hijrah chapter uses a sticky landscape
so distance accumulates while the reader advances through the text.

Mobile is its own authored sequence: image, context, passage, and source stay
together, while oversized type crops deliberately without obscuring meaning.

## Elevation & Depth

Depth comes from ink density, wash bloom, parchment, scale, crop, occlusion, and
a slow image drift. Surfaces are flat; there are no card shadows, glass panels,
glowing boxes, or floating UI. The dominant motion is the trace being drawn as
the story advances.

### Imagegen Brief

Use these plates as style references before producing Muhammad-page imagery:

- `/Users/farhantallei/vibe-code/sirah-nabawiyah-2/demo/assets/prolog2/02-malam-panjang.png`
  for monumental scale, solitary landscape, ink-darkness, and parchment void;
- `/Users/farhantallei/vibe-code/sirah-nabawiyah-2/demo/assets/prolog2/01-hero.png`
  for desert distance, night sky, and dissolving lateral composition; and
- `/Users/farhantallei/vibe-code/sirah-nabawiyah-2/demo/assets/prolog2/05-fajar.png`
  for restrained dawn as a narrative event.

The Muhammad page uses two original landscape plates: a Hijaz-before-dawn opener
with clean parchment space for the identity lockup, and a Hijrah passage plate
whose terrain carries distance without reconstructing the route. Do not depict
Nabi Muhammad ﷺ, his body, face, silhouette, footprints, shadow, clothing,
mount, or an object staged as his substitute. Prefer unpeopled terrain. No baked
Arabic or Latin text.

#### Accepted opener — `assets/hijaz-dawn-ink.png`

> Create an original wide 16:9 editorial opener plate for the People by
> Islampedia page about Prophet Muhammad ﷺ. The provided images are STYLE
> REFERENCES ONLY: inherit their cinematic ink-wash on warm aged parchment,
> charcoal and sepia pigment, concept-art scale, irregular watercolor blooms and
> splatters, scarce luminous dawn, large quiet negative space, and edges
> dissolving naturally into paper. Do not copy any reference composition or exact
> terrain. Scene: the volcanic Hijaz before dawn, an immense dark mountain ridge
> and distant arid valleys, with a restrained amber horizon beginning to break.
> Composition must reserve a broad, calm, darker-but-readable field across the
> lower-left and left-center for live HTML identity typography, while the most
> detailed mountain mass and dawn light sit toward the right half. No people, no
> human figure or silhouette, no footprints, no animals, no buildings, no Kaaba,
> no mosque, no crescent symbol, no sacred or identifying proxy object. Never
> depict or imply the presence of Prophet Muhammad ﷺ. No text, no Arabic, no
> calligraphy, no lettering, no logo, no watermark, no border, no frame.
> Reverent, monumental, quiet, official editorial art; matte parchment texture;
> not photography, not photorealistic, not 3D, not fantasy kitsch.

#### Accepted journey plate — `assets/hijrah-route-ink.png`

> Create an original wide 16:9 editorial landscape plate for the Hijrah passage
> in the People by Islampedia page about Prophet Muhammad ﷺ. The provided images
> are STYLE REFERENCES ONLY: inherit their cinematic ink-wash on warm aged
> parchment, charcoal and sepia pigment, monumental scale, watercolor blooms,
> dry-brush rock texture, deliberate parchment void, and edges dissolving into
> paper. Do not copy their exact layout, mountains, or figure placement. Scene: a
> vast unpeopled Hijaz landscape seen from a high ridge, layered volcanic
> mountains and a narrow natural path moving diagonally through deep shadow toward
> a distant open basin under the first restrained amber light of dawn. The path
> communicates distance and passage but must not claim to reconstruct the
> historical Hijrah route. Compose the detailed dark terrain across the left and
> lower field, opening into lighter parchment and horizon toward the upper-right;
> allow generous calm areas for crop and responsive layout. Absolutely no humans,
> silhouettes, faces, footprints, animals, caravan, mounts, buildings, mosque,
> Kaaba, crescent symbol, sacred proxy object, or staged absence. Never depict or
> imply Prophet Muhammad ﷺ. No text, no Arabic, no calligraphy, no lettering, no
> logo, no watermark, no frame, no border. Reverent, quiet, severe, official
> editorial art; matte parchment; not photography, not photorealistic, not 3D,
> not fantasy.

## Shapes

Edges are nearly square. Content boundaries use open space and fine rules.
Circles appear only as relationship nodes or points in time. The page avoids
pill-shaped metadata and generic rounded containers.

## Do's and Don'ts

### Do:

- **Do** keep every factual passage close to a source marker.
- **Do** let large images create silence between dense passages.
- **Do** generate every final landscape plate through `imagegen` using the
  canonical reference set as the style authority.
- **Do** label generated landscapes as atmospheric, not documentary.
- **Do** preserve meaningful reading order with styles and scripts disabled.

### Don't:

- **Don't** depict the Prophet ﷺ or stage a literal scene around his absence.
- **Don't** use photographic landscapes, stock imagery, or copy a reference
  plate's exact composition.
- **Don't** use a mosque silhouette, crescent, geometric pattern, or manuscript
  texture as generic Islamic decoration.
- **Don't** animate every paragraph with the same entrance.
- **Don't** turn the relation section into a draggable graph.
