# Kitchen Gardening Website

# Assignment 01 — HTML & CSS  
# Multi-Page, Accessible, and Responsive Website: Kitchen Gardening

# Link : https://rajatunio.github.io/kitchengardening/index.html

## Overview
Kitchen Gardening is a user-friendly, informative website designed to promote home and kitchen gardening as a simple, sustainable, and rewarding lifestyle choice. The site provides practical tips, featured plants, gardening tutorials, and a gallery to inspire gardening enthusiasts of all levels to grow fresh, healthy food at home.

 

## Project Overview  
This project is a 3-page website focused on kitchen gardening, designed and developed to meet modern web standards and assignment requirements. It uses semantic HTML5, CSS3 styling, accessibility best practices, and responsive design techniques to create an engaging user experience across devices.

 

## Features Implemented

### Part A: Project Setup  
- Created a project folder structure with:  
  - `index.html`, `about.html`, `contact.html`  
  - CSS files in `assets/css/`  
  - Images in `assets/images/`  
  - Media files (video) in `assets/media/`  
- All pages linked with a consistent navigation menu  
- Shared header and footer included on every page for consistency

### Part B: HTML Content

#### `index.html`  
- Added a main `<h1>` heading  
- Used `<strong>` and `<em>` within paragraphs for emphasis  
- Included three types of lists: unordered, ordered, and description lists  
- Implemented a responsive image with `<picture>` and `<figcaption>`  
- Added a table with `<caption>`, `<thead>`, `<tbody>`, and `<tfoot>`  
- Included an external link, a mailto link, and a file download link  
- Embedded videos with controls and captions using `<video>` and `<track>`

#### `about.html`  
- Structured content with `<article>` and `<section>`  
- Added styled block-level (`<div>`) and inline (`<span>`) elements with distinct CSS styles  
- Demonstrated CSS specificity with overriding selectors  
- Included a button with a hover animation effect  
- Added a collapsible section using `<details>` and `<summary>`

#### `contact.html`  
- Created a form with multiple input types: text, email, URL, date, color, range, checkbox  
- Used `<label for="">` tags for all inputs to ensure accessibility  
- Enabled built-in HTML5 validation  
- Included submit and reset buttons  
- Added a “Download brochure” link

### Part C: CSS Styling  
- Created and linked `styles.css` in `assets/css/` across all pages  
- Styled headings and body text using responsive typography with `clamp()`  
- Designed a horizontal navigation menu with hover and focus states  
- Styled buttons with padding, rounded corners, and smooth hover transitions  
- Styled tables with borders and alternating row colors for readability  
- Applied box model properties (margin, border, padding) on multiple elements  
- Built a responsive gallery of 6+ images using CSS Grid  
- Added media queries for screen widths ≤ 600px to ensure responsiveness  
- Used `aspect-ratio` and `object-fit` on gallery images for consistent layout  
- Implemented CSS variables for theme colors  
- Added dark mode support using `@media (prefers-color-scheme: dark)`

### Part D: Accessibility & SEO  
- Provided descriptive alt text for all images; used empty alt for decorative images  
- Ensured visible focus styles for keyboard navigation  
- Added ARIA roles such as `role="navigation"` and `role="main"`  
- Verified color contrast meets WCAG 2.1 AA standard (minimum 4.5:1)  
- Included `<meta name="description">` tags for each page for SEO  
- Tested site usability with keyboard-only navigation and screen readers (NVDA/VoiceOver)

### Part E: Performance & Extras  
- Applied `loading="lazy"` to all non-critical images for improved load times  
- Added a favicon for branding  
- Included Open Graph meta tags to enhance social media sharing previews  
- Created a print-friendly stylesheet with `@media print`  
- Performed a Lighthouse audit in Chrome and fixed issues until accessibility score ≥ 90%

### Part F: Advanced Features  
- Implemented a native HTML `<dialog>` element opened via JavaScript for modal dialogs  
- Integrated Bootstrap (via CDN) to style specific components like cards and navbar for improved UI

---

## Accessibility Improvements  
- Semantic HTML5 tags for meaningful content structure  
- Proper labeling and keyboard focus management for forms and navigation  
- ARIA roles and attributes for enhanced screen reader support  
- Color contrast and visual focus indicators meeting accessibility standards

---

## SEO and Performance Enhancements  
- Descriptive meta tags and semantic markup for better search engine indexing  
- Optimized images with lazy loading and appropriate formats  
- Open Graph tags to improve link previews on social media platforms  
- Minimized CSS and structured stylesheets for faster rendering  
- Print styles for better usability when printing pages

## Folder Structure

kitchen-gardening-website/
│
├── index.html               # Home page
├── about.html               # About page
├── contact.html             # Contact page
│
├── css/
│   ├── home.css             # Styles for Home
│   ├── about.css            # Styles for About
│   └── contact.css          # Styles for Contact
│
├── images/
│   ├── mint.webp
│   ├── tomato.webp
│   ├── coriandar.webp
│   ├── chilli.webp
│   ├── spinich.webp
│   ├── 1.webp
│   ├── 2.1.webp
│   ├── 3.3.webp
│   ├── ...                  # All other image files
│
├── media/
│   ├── tomatos.webm
│   ├── coriander.mp4
│   ├── mint.webm
│   ├── spinach.webm
│
└── README.md                # Project documentation




 

## How to Run  
1. Clone the repository  
2. Open `index.html` in any modern browser  
3. Navigate through the pages using the top menu  
4. Explore the gallery, watch tutorials, and try out the contact form

 

## Contact  
**Email:** bcsf23m0XX@gamil.com  
**Phone:** +92 XXX XXXXXXX  
**Location:** Anarkali, Lahore  

 
## Jira Sprint Notes  
- Created a Jira sprint board to track tasks  
- Documented each task with status updates (To Do, In Progress, Done)  
- Logged challenges such as ensuring cross-browser compatibility and accessibility fixes  
- Applied solutions including ARIA attributes and media queries  
- Completed all tasks as per assignment requirements within the sprint timeline

 

## Live Demo  
[Kitchen Gardening Website Live](https://rajatunio.github.io/kitchengardening/index.html)

 

Thank you for reviewing this project!  
 



