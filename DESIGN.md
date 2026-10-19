# Design

## Strategy

Committed. Pine carries the hero and the closing bands. The rest of the page is a cool near-white (a trace of the same hue, not a warm paper). Persimmon is the only accent, and it is reserved for the callback button and focus rings.

## Theme

Light is the reading default because the scene is daylight. Dark mode keeps the same pine hero and inverts the reading surfaces. Sections do not flip theme on their own.

## Type

Geist for everything readable. Geist Mono is available for figures if a schedule is added later. No serif. Display tracking is -0.03em. Headings use `text-wrap: balance`.

## Shape

Buttons are pills. Photos, inputs, and the callback panel use a 12px radius.

## Motion

Transform and opacity only. The year sequence is GSAP ScrollTrigger (`x`, scrub, pin at the top) on fine pointers with motion allowed. Everyone else gets a vertical stack or a native horizontal swipe. Reduced motion removes the pin and the entrance shifts.

## Z-index

- 40: header
- 60: mobile menu (native dialog, top layer)
- 70: skip link when focused
