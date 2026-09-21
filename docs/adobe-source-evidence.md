# Adobe Source-Work Evidence

## Status

**Adobe production pass completed on September 21, 2026.**

This document records the Adobe Creative Cloud operations that were actually performed for Project 5. It distinguishes real source-work evidence from concept art and avoids claiming source formats that were not created.

## 1. Vector / Illustrator-ready evidence

### Cedarline primary logo

A raster Cedarline logo treatment was isolated from the brand board and processed through Adobe's vectorization workflow.

**Result:** editable SVG vector paths suitable for opening and further editing in Illustrator.

### Catastrophe icon set

The catastrophe icon board was isolated and processed through the same Adobe vectorization workflow.

The set includes visual concepts for:
- wind / hail;
- flood;
- fire / smoke;
- power outage;
- safety;
- photo documentation;
- checklist;
- home damage;
- auto damage;
- emergency kit;
- phone / text contact;
- document upload.

**Result:** editable SVG vector paths.

### Integrity note

This project does **not** claim a native `.ai` file was manually authored in Illustrator. The evidence is Adobe-generated editable SVG vector output that is Illustrator-ready.

A final desktop-app pass could open the SVGs in Illustrator, organize layers/groups, refine paths, and save native `.ai` masters.

---

## 2. Photoshop image-treatment evidence

A central storm-damage property photograph was isolated from the catastrophe photography board and processed through Adobe's imaging pipeline.

### Operations performed

1. isolated the primary storm-damage photograph;
2. applied Adobe auto-tone;
3. applied targeted adjustments:
   - highlights: **-28**;
   - darks: **+18**;
   - contrast: **+16**;
   - vibrance: **+10**;
4. created a desktop **16:9** production crop;
5. created a mobile **9:16** production crop.

### Design intent

The treatment was deliberately restrained:
- recover detail in bright areas;
- lift shadow detail without flattening the scene;
- add enough contrast for visual hierarchy;
- keep color believable rather than sensational;
- preserve a documentary, trustworthy tone.

### Crop tradeoffs

The Adobe crop engine preserved the desktop subject/context by using padding when the requested ratio could not be satisfied without clipping important content.

The mobile crop required a centered fallback after prompt-based detection did not find the requested region. That fallback is retained as evidence of the production process rather than represented as a perfect automatic result.

### Integrity note

This is real Adobe image-processing work. The project does **not** claim a layered native `.psd` was manually assembled in the Photoshop desktop UI.

A final desktop-app pass could place original and treated variants in a layered PSD, recreate the adjustments as named adjustment layers, and save desktop/mobile artboards.

---

## 3. InDesign source evidence

A complete **8-page Cedarline Severe Weather Recovery Guide** was authored as a branded editorial document and then taken through Adobe's InDesign conversion workflow.

### Guide structure

1. Cover
2. What to do right now
3. Wind, hail & fallen trees
4. Flood & rising water
5. Fire & smoke
6. Power outage after a storm
7. Document damage safely
8. What can wait / recovery notes

### Adobe InDesign operations performed

- converted the completed PDF into an editable **INDD** document;
- generated an InDesign package;
- exported the INDD to **IDML**;
- rendered the INDD back to PDF through Adobe;
- rendered selected INDD pages back to PNG for visual verification.

This round trip demonstrates that Adobe's InDesign engine could open, interpret, export, and render the generated source successfully.

### Source formats produced

- editable `.indd`;
- editable `.idml`;
- InDesign package ZIP;
- InDesign-rendered PDF;
- page-render PNGs.

### Integrity note

The original page composition was created programmatically and then converted into editable InDesign source through Adobe's InDesign workflow.

It should therefore be described as:

> **Created an editable InDesign source package through Adobe's InDesign conversion workflow and verified it through InDesign render/export.**

It should **not** be described as:

> “Manually laid out the entire guide in the InDesign desktop application.”

A short manual desktop pass—opening the INDD, adjusting paragraph/master-page styling, and saving the file—would provide additional evidence of hands-on desktop UI proficiency.

---

## 4. What this now demonstrates

The completed Adobe pass provides concrete evidence of:

- Adobe Creative Cloud asset handling;
- raster-to-vector production;
- Illustrator-ready SVG preparation;
- image treatment and tonal correction;
- responsive image cropping;
- visual-production decision making;
- multi-page editorial design;
- editable InDesign source creation;
- IDML export;
- InDesign render/export verification;
- disciplined documentation of production tradeoffs.

## 5. What is deliberately not claimed

This project does not claim:

- a native Illustrator `.ai` master;
- a layered Photoshop `.psd` master;
- that every layout decision was made manually in the InDesign desktop UI;
- Adobe desktop-app usage that did not actually occur.

Those distinctions keep the portfolio evidence accurate and defensible in an interview.
