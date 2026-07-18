@RTK.md

# Project Instructions

This repository contains Patrice Lauret's static portfolio.

The site is published with GitHub Pages. It has no build system, package manager, CMS, or generated frontend files.

## Project Structure

- `index.html`: main page structure and public content.
- `404.html`: custom not-found page.
- `assets/css/style.css`: layout, components, animations, and responsive styles.
- `assets/js/main.js`: navigation and global interactions.
- `assets/js/animations.js`: reveal animations.
- `assets/js/reflections.js`: tilt and reflection effects.
- `Readme.md`: project documentation.

Keep `index.html` and `404.html` available at their current public URLs.

## Working Rules

- Prefer small, focused changes.
- Preserve the existing static HTML, CSS, and JavaScript architecture.
- Do not add a framework, dependency, or build step without a clear need and the user's agreement.
- Keep the interface responsive and accessible by keyboard.
- Preserve reduced-motion behavior when changing animations.
- Do not scan the full repository when a targeted read is sufficient.
- Do not include `.DS_Store` changes in commits.

## Contact Data and Privacy

- Never write the real e-mail address or telephone number in clear text in HTML, Markdown, issues, logs, or other public files.
- The contact buttons in `index.html` reveal values reconstructed from `characterCodes` in `assets/js/main.js`.
- When changing contact details, update only the corresponding character-code array and verify that the clear-text value does not appear in public files.
- Do not use `innerHTML`, `eval`, or external scripts to implement contact reveal behavior.
- Never expose secrets, tokens, API keys, or private credentials in client-side code.
- See `Readme.md`, section "Protection antispam des coordonnées", for maintenance instructions and limitations.

## Validation

There is no `package.json` and no automated build, lint, or test command.

Before delivery, run the checks relevant to the modified files:

```bash
node --check assets/js/main.js
git diff --check
```

For contact changes, also verify that the real address and number are absent from public source files without printing them in reports.

Report clearly what was changed, what was tested, and any remaining uncertainty. Do not claim browser or deployment validation unless it was actually performed.

## Skill Usage

For larger changes, use relevant skills when appropriate:

1. `context-router` to limit project reading.
2. `web-ui-sober-designer` for UX and responsive layout work.
3. `clean-code-builder` for HTML, CSS, and JavaScript changes.
4. `secure-web-auditor` for security and privacy checks.
5. `delivery-reviewer` before publication.

Do not invoke every skill mechanically for small changes.

## Output Discipline

Keep responses concise by default. Prefer a short summary, changed files, validation performed, remaining risks, and the next useful action.
