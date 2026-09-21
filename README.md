# Cedarline Catastrophe Response Hub

A working **catastrophe-response UX and visual-design case study** for the fictional Cedarline Mutual insurance experience.

**Visual design · Responsive web · Crisis UX · Content design · Accessibility · HTML/CSS/JavaScript**

[**Live prototype**](https://joshuaokent-spec.github.io/Cedarline-Catastrophe-Response-Hub/) · [**Project brief**](docs/project-brief.md) · [**Visual direction**](docs/visual-design-direction.md)

> **Cedarline Mutual is fictional.** This project is an independent UX portfolio concept and does not provide emergency or insurance services.

## At a glance

| | |
| --- | --- |
| **Role** | UX / UI Designer + front-end prototyper |
| **Project type** | High-stress service UX + visual-design case study |
| **Core problem** | Help people separate urgent safety actions from insurance tasks after severe weather |
| **Deliverables** | Safety triage, hazard-specific guidance, recovery sequencing, visual system, printable checklist, accessibility review, heuristic evaluation |
| **Tools / tech** | HTML, CSS, JavaScript, JSON, SVG, GitHub |
| **Quality** | Automated validation for JavaScript, scenario data, duplicate IDs, and same-page links |

## Project thesis

After severe weather, people may be dealing with active hazards, damaged property, power loss, displacement, incomplete information, and uncertainty about what they should do first.

A conventional insurance landing page might lead with:

> **Report a claim**

This concept deliberately does not.

The central design question is:

> **How can an insurer help people separate urgent safety actions from insurance tasks, understand what can wait, and move toward recovery without overwhelming them?**

The experience therefore follows:

**Safety first → reduce further harm when safe → document → report → add detail later**

## Working prototype

The coded prototype includes:

- a visually distinct catastrophe hero;
- explicit notice that the site does **not** contain live emergency alerts;
- immediate safety triage;
- hazard-specific paths for:
  - wind / hail / fallen trees;
  - flood / rising water;
  - fire / smoke;
  - storm-related power outage;
- **Now / Next / Later** recovery sequencing;
- safe-documentation guidance;
- a persistent local checklist;
- a printable recovery guide;
- responsive mobile layouts;
- reduced-motion support;
- direct handoff into the Cedarline claim-reporting prototype.

## Why safety comes before insurance

The safety hierarchy is informed by public American Red Cross disaster guidance.

Examples reflected in the experience include:

- returning only when officials say it is safe;
- avoiding downed electrical lines;
- avoiding floodwater;
- using generators and other fuel-burning devices outdoors and away from openings;
- treating immediate danger before documentation or insurance tasks.

See [Safety Reference Research](docs/reference-research.md).

## Crisis content strategy

Catastrophe UX needs different copy rules than routine account management.

The prototype uses language such as:

- **“Can you safely remain where you are?”**
- **“When it is safe…”**
- **“Photograph damage only from a safe location.”**
- **“This can wait.”**

It avoids department-oriented language such as:

- “Catastrophe claims intake”
- “Loss documentation requirements”
- “Complete FNOL immediately”

See [Crisis Content Strategy](docs/content-strategy.md).

## Visual design direction

This project intentionally expands the Cedarline brand rather than repeating the lighter visual language of the earlier projects.

### Storm Navy — `#102F38`
Creates a distinct catastrophe context without using danger-red as the dominant visual language.

### Safety Yellow — `#F5C451`
Reserved for immediate-attention and safety hierarchy.

### Cedar Green — `#0B4A43`
Returns the experience to familiar insurance/service actions after immediate safety is established.

### Recovery Mist — `#EEF4F2`
Softens later-stage recovery content.

The repository also includes a custom coded vector storm illustration in:

`assets/storm-response-hero.svg`

It is a web implementation asset, **not claimed as Illustrator-authored source work**.

See [Visual Design Direction](docs/visual-design-direction.md).

## Accessibility

The prototype includes:

- skip navigation;
- semantic headings and sections;
- native buttons and links;
- large tap targets;
- visible focus;
- text labels in addition to state color;
- live triage/checklist status;
- responsive reflow;
- reduced-motion behavior;
- print-friendly recovery content;
- no auto-playing visual effects.

See [Accessibility Approach](docs/accessibility.md).

## Iteration evidence

The [Heuristic Evaluation & Revision Log](docs/heuristic-evaluation.md) documents key design choices such as:

- moving **Report a claim** below immediate safety;
- replacing one long disaster checklist with **Now / Next / Later**;
- introducing hazard-specific guidance;
- avoiding an alarmist red-heavy visual design;
- repeating safe-documentation boundaries;
- clearly labeling the lack of live emergency data;
- separating coded visual assets from future Adobe source evidence.

## Adobe production plan

Project 5 is intentionally designed to become the strongest **Adobe Creative Suite evidence** in the Cedarline portfolio.

The repository currently contains an explicit [Adobe Production Plan](docs/adobe-production-plan.md) for creating:

### Illustrator
- catastrophe hero master illustration;
- storm / flood / fire / outage icon set;
- safe-documentation icon set;
- production SVG exports.

### Photoshop
- catastrophe photography treatment board;
- desktop/mobile crop examples;
- before/after image treatment standards;
- optimized web imagery.

### InDesign
- a polished 6–8 page **Cedarline Severe Weather Recovery Guide**;
- paragraph and character styles;
- master-page system;
- linked vector assets;
- exported PDF.

### Portfolio integrity

Those applications are **not yet listed as tools used**, because the corresponding source artifacts have not yet been created. Once we create them, this project becomes the visible Adobe evidence the portfolio currently lacks.

## Research integrity

This is a rapid portfolio concept.

I do **not** claim:

- live catastrophe operations;
- real insurance-company emergency data;
- primary interviews or moderated usability results;
- policy-specific coverage decisions;
- formal accessibility certification.

The project demonstrates how I would structure, visually design, document, and prototype a high-stress insurance experience so those questions could be tested in a real engagement.

## Cedarline portfolio

| Project | UX problem |
| --- | --- |
| [Project 1 — Claim Reporting](https://github.com/joshuaokent-spec/cedarline-claim-reporting-ux) | How should a customer report a loss? |
| [Project 2 — Claims Operations](https://github.com/joshuaokent-spec/Cedarline-Claims-Operations-Dashboard) | How should an employee manage the work that follows? |
| [Project 3 — Policy & Coverage IA](https://github.com/joshuaokent-spec/Cedarline-Policy-Coverage-IA) | How should customers find policy and coverage information? |
| [Project 4 — Web Design System](https://github.com/joshuaokent-spec/Cedarline-Web-Design-System) | What shared standards should govern all of those experiences? |
| **Project 5 — Catastrophe Response Hub** | How should the experience change when a customer is in a high-stress disaster context? |

Together:

**transactional UX → enterprise UX → information architecture → design systems → visual / crisis UX**

## Repository structure

```text
.
├── index.html
├── styles.css
├── app.js
├── recovery-checklist.html
├── assets/
│   ├── cedarline-mark.svg
│   └── storm-response-hero.svg
├── data/
│   └── scenarios.json
├── docs/
│   ├── project-brief.md
│   ├── reference-research.md
│   ├── visual-design-direction.md
│   ├── content-strategy.md
│   ├── accessibility.md
│   ├── heuristic-evaluation.md
│   └── adobe-production-plan.md
└── .github/
    └── workflows/
        └── validate.yml
```

## Run locally

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## What I would validate next

In a production setting I would test:

- whether safety-first hierarchy is reassuring rather than patronizing;
- whether users can distinguish emergency guidance from insurance guidance;
- whether **Now / Next / Later** reduces cognitive load;
- whether hazard categories match user expectations;
- whether people understand what documentation can wait;
- mobile/outdoor readability;
- screen-reader and high-zoom behavior;
- whether the stronger visual direction still feels trustworthy.

The next portfolio-production step is the **actual Adobe asset package** described above.
