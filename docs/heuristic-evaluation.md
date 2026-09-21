# Heuristic Evaluation & Revision Log

No moderated usability study was conducted for this rapid portfolio sprint.

The prototype was reviewed against high-stress UX, accessibility, and service-design heuristics.

## Findings

| Finding | Risk | Revision |
| --- | --- | --- |
| A conventional insurance hero would lead with “Report a claim.” | Creates pressure to perform service tasks before confirming safety. | Hero and triage now lead with safety; claim reporting appears later. |
| Catastrophe content can become one long checklist. | Users under stress must parse too much at once. | Organized guidance into Now / Next / Later. |
| General guidance can ignore hazard differences. | Flood, fire, wind, and outage risks are not interchangeable. | Added hazard-specific scenario paths. |
| Visual urgency can become alarmist. | Red-heavy design may increase anxiety or imply an active emergency feed. | Used storm navy + safety yellow; reserved danger red for explicit unsafe-state feedback. |
| Documentation language can unintentionally encourage unsafe behavior. | Customers may climb, re-enter, or approach hazards for photos. | Repeated “only when safe” and “from a safe location” guidance. |
| A downloadable checklist could feel disconnected from the live experience. | Duplicate content may drift. | The printable guide follows the same safety → documentation → later sequence. |
| Adobe claims could be overstated. | Portfolio credibility risk. | Current SVG assets are explicitly described as coded assets; Adobe source work remains a separate production step. |

## What still needs validation

- Does the safety-first hierarchy feel helpful or patronizing?
- Can users identify what can wait?
- Are the scenario categories understandable?
- Does “Now / Next / Later” reduce scanning effort?
- Does the visual system feel urgent enough without feeling alarming?
- Do users understand that this is not live emergency information?
