# Extinct Animals Website

A static, multi-page educational website created as a BCA/college web development project.

## Project Overview

**Extinct Animals** is a natural-history-themed website that explains:
- what extinction means,
- major mass extinction events,
- notable extinct species,
- and modern conservation lessons.

The project is designed to be professional, screenshot-ready, and easy to explain in an academic viva.

## Pages Included

1. `index.html` - Home page with hero, featured species, quick facts counters, and extinction importance.
2. `about.html` - Educational explanation of extinction concepts and glossary accordion.
3. `timeline.html` - Five major mass extinction events + modern human impact section with filters.
4. `species.html` - Dynamic species gallery rendered from JavaScript data with search/filter/sort + modal.
5. `lessons.html` - Conservation lessons, extinct vs endangered comparison, and interactive quiz.
6. `contact.html` - Contact info and validated client-side form with success message.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks, backend, package manager, or external JS libraries are used.

## How to Run Locally

### Option 1
Open `index.html` directly in a browser.

### Option 2
Run any simple static server in this folder and open the served URL.

## Folder Structure

```text
Collage/
|-- index.html
|-- about.html
|-- timeline.html
|-- species.html
|-- lessons.html
|-- contact.html
|-- README.md
|-- css/
|   `-- style.css
|-- js/
|   |-- main.js
|   |-- data.js
|   `-- quiz.js
`-- assets/
    |-- images/
    |-- icons/
    `-- banners/
```

## Main Logic Files

- `js/main.js`
  - mobile menu toggle
  - active navigation highlight
  - reveal-on-scroll animations
  - animated counters
  - timeline filter behavior
  - glossary accordion
  - contact form validation

- `js/data.js`
  - extinct species dataset
  - dynamic species card rendering
  - search, filters, sort
  - modal details

- `js/quiz.js`
  - 5-question conservation quiz
  - score calculation
  - restart quiz flow

## Assets and Replacement Guide

Current integrated assets:
- `assets/icons/Logo.png` is used in the navbar logo on all pages.
- `assets/banners/Banner.png` is used as the home hero banner background.
- 10 species images in `assets/images/` are mapped in `js/data.js` and rendered in the species gallery.

Remaining replaceable placeholders are decorative section blocks that use `.media-placeholder` in HTML.

You can replace/add assets later by:
1. Adding real files to `assets/images/`, `assets/icons/`, or `assets/banners/`.
2. Updating HTML sections that use `.media-placeholder`.
3. Updating `image` fields in `js/data.js` (example: `assets/images/dodo.jpg`).

## Notes for Submission

- Fully static project (frontend only)
- Responsive for desktop, tablet, and mobile
- Uses semantic HTML and accessibility basics
- Organized code for academic readability

