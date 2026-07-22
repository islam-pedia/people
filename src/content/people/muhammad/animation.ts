import { animate, inView, scroll } from "motion"

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

if (!reducedMotion.matches) {
  document.documentElement.classList.add("motion-ready")

  const hero = document.querySelector<HTMLElement>("[data-hero]")
  const heroImage = document.querySelector<HTMLElement>("[data-hero-image]")

  if (hero && heroImage) {
    const heroDrift = animate(
      heroImage,
      { scale: [1, 1.075], y: [0, 22] },
      { ease: "linear" },
    )
    scroll(heroDrift, { target: hero, offset: ["start start", "end start"] })
  }

  const story = document.querySelector<HTMLElement>("[data-story]")
  const trace = document.querySelector<HTMLElement>("[data-trace-fill]")

  if (story && trace) {
    const traceDraw = animate(trace, { scaleY: [0, 1] }, { ease: "linear" })
    scroll(traceDraw, { target: story, offset: ["start 70%", "end 65%"] })
  }

  const journey = document.querySelector<HTMLElement>("[data-journey]")
  const journeyImage = document.querySelector<HTMLElement>(
    "[data-journey-image]",
  )

  if (journey && journeyImage) {
    const journeyDrift = animate(
      journeyImage,
      { scale: [1.02, 1.1], x: [0, -18] },
      { ease: "linear" },
    )
    scroll(journeyDrift, {
      target: journey,
      offset: ["start end", "end start"],
    })
  }

  inView(
    "[data-reveal]",
    (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [28, 0], filter: ["blur(8px)", "blur(0px)"] },
        { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
      )
    },
    { margin: "0px 0px -12% 0px" },
  )

  document
    .querySelectorAll<HTMLElement>("[data-relation]")
    .forEach((relation, index) => {
      inView(
        relation,
        () => {
          animate(
            relation,
            { opacity: [0, 1], x: [-20, 0] },
            {
              duration: 0.65,
              delay: Math.min(index * 0.06, 0.3),
              ease: [0.16, 1, 0.3, 1],
            },
          )
        },
        { margin: "0px 0px -8% 0px" },
      )
    })
}
