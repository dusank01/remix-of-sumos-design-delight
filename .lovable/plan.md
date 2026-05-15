## Goal
Fix the Hero background "cloud" shape so it doesn't drift far left on wide screens. Anchor it to the right edge of the hero, and let it extend to the left as far as needed (clipped by the section).

## Change
In `src/components/sumos/Hero.tsx`:

- Ensure the parent `<section>` keeps `relative overflow-hidden` (already does).
- Replace the bg shape image positioning:
  - Remove `-left-[61px] -top-[67px]` (left-anchored absolute).
  - Anchor it right + top instead, so it stays fixed on the right and overflows to the left:
    - `absolute top-[-67px] right-[calc(100%-791px-61px+...)]` — simpler: position it relative to the right side of the content container.
  - Concretely: use `right-[649px]` (so the 791px-wide shape ends 649px from right, matching Figma where shape right edge sits at left+791-61 = 730px from left of 1440 frame → 710px from right). We'll compute against the max-width container.

Cleanest approach — wrap the shape in a right-anchored positioning context:

```tsx
<div className="pointer-events-none absolute inset-y-0 right-0 left-0 overflow-hidden">
  <img
    src={heroBgShape}
    alt=""
    aria-hidden
    className="absolute -top-[67px] h-[637px] w-[791px] max-w-none"
    style={{ right: 'calc(50% + 80px)' }}  /* anchor to right side of the 1440 max-width container's left column */
  />
</div>
```

Or simpler and matching Figma intent exactly: position the image so its **right edge** sits at a fixed offset from the right edge of the inner 1440 container (mirroring how `lg:px-[160px]` anchors content). On screens wider than 1440 the shape will appear to extend left toward the viewport edge while keeping a stable right anchor under the text column.

Final implementation:
- Add a centered max-w-[1440px] wrapper `relative` around the shape with `mx-auto`.
- Inside, position `<img>` absolutely with `right-[649px] top-[-67px]` (so its right edge lands ~710px from the right of the 1440 container — aligned with the text/illustration split). On screens narrower than 1440, the wrapper shrinks and shape moves with it; on wider screens the shape stays anchored to that right-side reference and extends further left as the viewport grows (clipped by section `overflow-hidden`).

```tsx
<section className="relative overflow-hidden bg-background">
  <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto max-w-[1440px]">
    <img
      src={heroBgShape}
      alt=""
      aria-hidden
      className="absolute -top-[67px] right-[649px] h-[637px] w-[791px] max-w-none"
    />
  </div>
  {/* existing content unchanged */}
</section>
```

## Notes
- No content/layout changes; only the bg shape positioning.
- `overflow-hidden` on the section prevents horizontal scrollbars from the overflowing shape.
- Right-anchored offset (`right-[649px]`) keeps the cloud visually tied to the text column on all viewport widths.