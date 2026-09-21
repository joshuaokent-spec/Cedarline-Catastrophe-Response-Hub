# Accessibility Approach

This prototype is accessibility-informed but has not been formally audited.

## High-stress accessibility considerations

Catastrophe UX should assume:
- mobile use;
- low battery;
- distraction;
- bright/dark environments;
- cognitive overload;
- users who rely on assistive technology.

## Implemented considerations

- skip link;
- semantic sections and headings;
- native buttons and links;
- visible focus;
- large tap targets;
- text labels in addition to color;
- live triage/checklist status;
- reduced-motion support;
- responsive one-column layouts;
- printable checklist;
- no auto-playing animation;
- no live-alert language that could be mistaken for emergency monitoring.

## Triage

The safety choices use native buttons and persistent text.

Results use:
- color;
- headings;
- explicit copy.

Meaning does not depend on red/yellow/green alone.

## Now / Next / Later tabs

The recovery timeline uses tab semantics:
- role="tablist";
- role="tab";
- aria-selected;
- aria-controls;
- role="tabpanel".

A production pass should add arrow-key tab navigation to match full ARIA Authoring Practices behavior.

## Production testing needed

- keyboard-only walkthrough;
- screen-reader review;
- 200–400% zoom/reflow;
- contrast audit;
- outdoor/mobile usability;
- low-bandwidth performance;
- cognitive-load testing during stressful scenarios.
