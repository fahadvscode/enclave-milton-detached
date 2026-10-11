import {
  aboutSundial,
  answerFirstHome,
  answerFirstLocation,
  answerFirstMasterplan,
  budgetNote,
  caslConsent,
  catchmentSentence,
  communityFeatures,
  comparableIntro,
  comparables,
  detachedAnnouncements,
  faqs,
  hero,
  highwayRows,
  hospitalNote,
  hospitals,
  housingMix,
  housingMixNote,
  housingTypeNotes,
  howToRead,
  images,
  independenceDisclaimer,
  locationContext,
  masterplanReading,
  miltonContext,
  navItems,
  overviewParagraphs,
  pageMeta,
  placeNotes,
  pricingDisclaimer,
  privacySections,
  project,
  questionsToAsk,
  quickFacts,
  registerFaqIndexes,
  schoolRows,
  site,
  sourceCitation,
  termsSections,
  townsVersusDetached,
  transitRows,
  whyRegister,
} from "@/lib/content";
import { DETACHED_MODEL } from "@/lib/schema";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  heroImageJsonLd,
  imageObjectJsonLd,
  organizationJsonLd,
  residenceJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";

const BOILERPLATE =
  "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}";

const BOILERPLATE_NOSCRIPT =
  "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}";

const CSS = `
body{margin:0;background:#faf7f2;color:#1b2a41;font-family:Georgia,"Times New Roman",serif;font-size:1.125rem;line-height:1.65}
a{color:#1b2a41}
header,footer{background:#0e1826;color:#faf7f2}
header a,footer a{color:#faf7f2}
.wrap{max-width:1100px;margin:0 auto;padding:1.25rem}
.brand{font-size:1.25rem;text-decoration:none}
.rule{display:block;width:3.5rem;height:1px;margin-top:.4rem;background:#b07d4f}
nav{display:flex;flex-wrap:wrap;gap:.75rem 1.1rem;margin-top:.8rem}
nav a{font-family:Arial,Helvetica,sans-serif;font-size:.95rem}
.hero-copy{padding:1.5rem 0 0}
.badge{font-family:Arial,Helvetica,sans-serif;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase}
h1,h2,h3{font-weight:560;line-height:1.15;margin:0 0 .6rem}
h1{font-size:2.4rem}
h2{font-size:1.8rem;margin-top:0}
h3{font-size:1.2rem;font-family:Arial,Helvetica,sans-serif}
p{margin:.7rem 0}
.alt{background:#f0eae0}
.card{background:#fff;border:1px solid #dcd3c4;padding:1rem}
form.card{display:grid;gap:.8rem}
label,legend{font-family:Arial,Helvetica,sans-serif;font-size:.95rem}
input,select,textarea{width:100%;box-sizing:border-box;border:1px solid #dcd3c4;background:#fff;color:#1b2a41;font:1rem Arial,Helvetica,sans-serif;padding:.65rem}
.pair{display:grid;grid-template-columns:1fr 1fr;gap:.7rem}
.choices{display:flex;flex-wrap:wrap;gap:.8rem 1.2rem}
.choices label{display:flex;align-items:center;gap:.4rem}
.choices input{width:auto}
button{background:#1b2a41;color:#faf7f2;border:0;font:600 1rem Arial,Helvetica,sans-serif;padding:.8rem 1.1rem}
table{width:100%;border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;font-size:1rem}
th,td{border-bottom:1px solid #dcd3c4;text-align:left;vertical-align:top;padding:.55rem .4rem}
.note{font-family:Arial,Helvetica,sans-serif;font-size:.95rem;color:#5b6676}
.hp{position:absolute;left:-9999px;height:1px;width:1px;overflow:hidden}
footer p{font-family:Arial,Helvetica,sans-serif;font-size:.95rem}
.crumbs{font-family:Arial,Helvetica,sans-serif;font-size:.95rem}
@media (max-width:640px){.pair{grid-template-columns:1fr}h1{font-size:2rem}}
`.replace(/\n/g, "");

type AmpPage = {
  title: string;
  description: string;
  path: string;
  body: string;
  jsonLd: unknown[];
  usesForm: boolean;
  usesAccordion: boolean;
};

export function renderAmp(slug: string[] | undefined) {
  const key = !slug || slug.length === 0 ? "home" : slug.length === 1 ? slug[0] : "";
  const page = pages()[key];
  if (!page) return null;
  return document(page);
}

function pages(): Record<string, AmpPage> {
  return {
    home: {
      ...meta("home"),
      usesForm: true,
      usesAccordion: false,
      jsonLd: [websiteJsonLd, organizationJsonLd, residenceJsonLd(), breadcrumbJsonLd([{ name: "Home", path: "/" }]), heroImageJsonLd],
      body: [
        heroBlock(),
        section(`<p>${esc(answerFirstHome)}</p>`),
        section(factsTable(), "Quick facts", true),
        section(paragraphs(overviewParagraphs) + sibling(), "Project overview"),
        section(
          `<p>Detached Homes are releasing soon. Count, lot width, unit size, bedroom count, price, deposit, incentives, and a launch date are listed as coming soon.</p>${pairTable("Detached detail", "Status", detachedAnnouncements.map((row) => [row.field, row.value]))}<p>${esc(budgetNote)}</p>`,
          "Detached Homes",
          true,
        ),
        section(mixTable(true) + ampLink("/masterplan", "See the full masterplan breakdown"), "Masterplan snapshot"),
        section(paragraphs(howToRead), "How to read the detached status", true),
        section(paragraphs(townsVersusDetached) + sibling(), "Detached Homes and townhomes"),
        section(paragraphs(aboutSundial), "About Sundial Homes", true),
        section(
          paragraphs(whyRegister) +
            `<ul>${ampLink("/location", "Explore the Britannia Road and James Snow Parkway location")}${ampLink("/faq", "Read the full FAQ")}${ampLink("/register", "Register for detached collection updates")}</ul>`,
          "Why register",
        ),
      ].join(""),
    },
    masterplan: {
      ...meta("masterplan"),
      usesForm: true,
      usesAccordion: false,
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Masterplan", path: "/masterplan" },
        ]),
        imageObjectJsonLd(images.context),
      ],
      body: [
        crumbs([
          ["Home", "/"],
          ["Masterplan", "/masterplan"],
        ]),
        section(
          `<p class="badge">Town file ${esc(project.townFile)}</p><h1>The Enclave Masterplan — 6071 Fourth Line, Milton</h1><p>${esc(answerFirstMasterplan)}</p>${disclaimer()}`,
        ),
        section(paragraphs(masterplanReading) + ampImg(images.context), "", true),
        section(mixTable(false), "Housing-type breakdown"),
        section(
          housingTypeNotes
            .map((note) => `<article class="card"><h3>${esc(note.title)}</h3>${paragraphs(note.paragraphs)}</article>`)
            .join(""),
          "What each housing type means here",
          true,
        ),
        section(
          communityFeatures
            .map((feature) => `<article class="card"><h3>${esc(feature.title)}</h3>${paragraphs(feature.paragraphs)}</article>`)
            .join(""),
          "Community features",
        ),
        section(`<p>${esc(sourceCitation)}</p>${paragraphs(questionsToAsk)}`, "Questions to ask", true),
        section(formHtml("/masterplan"), "Register for detached collection updates"),
      ].join(""),
    },
    location: {
      ...meta("location"),
      usesForm: true,
      usesAccordion: false,
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Location", path: "/location" },
        ]),
        imageObjectJsonLd(images.map),
      ],
      body: [
        crumbs([
          ["Home", "/"],
          ["Location", "/location"],
        ]),
        section(
          `<p class="badge">Southeast Milton</p><h1>Location — Britannia Road &amp; James Snow Parkway, Milton</h1><p>${esc(answerFirstLocation)}</p>${disclaimer()}`,
        ),
        section(
          paragraphs(locationContext) +
            ampImg(images.map) +
            `<p><a href="https://maps.google.com/maps?q=Britannia%20Road%20%26%20James%20Snow%20Parkway%2C%20Milton%2C%20Ontario">Open the map of Britannia Road and James Snow Parkway</a></p>`,
          "",
          true,
        ),
        section(pairTable("Field", "Detail", transitRows.map((row) => [row.field, row.value])), "Transit"),
        section(pairTable("Field", "Detail", highwayRows.map((row) => [row.field, row.value])), "Highway access", true),
        section(
          `<table><caption class="hp">Schools near The Enclave in Milton</caption><thead><tr><th>Level</th><th>School</th><th>Board</th></tr></thead><tbody>${schoolRows
            .map((row) => `<tr><td>${esc(row.level)}</td><td>${esc(row.name)}</td><td>${esc(row.board)}</td></tr>`)
            .join("")}</tbody></table><p>${esc(catchmentSentence)}</p>`,
          "Schools near The Enclave in Milton",
        ),
        section(
          placeNotes.map((place) => `<article class="card"><h3>${esc(place.title)}</h3>${paragraphs(place.paragraphs)}</article>`).join(""),
          "Nearby places",
          true,
        ),
        section(paragraphs(miltonContext), "Milton"),
        section(`<ul>${hospitals.map((name) => `<li>${esc(name)}</li>`).join("")}</ul><p>${esc(hospitalNote)}</p>`, "Hospitals", true),
        section(
          `<p>${esc(comparableIntro)}</p><ul>${comparables
            .map(
              (item) =>
                `<li><a href="${esc(item.sourceUrl)}">${esc(item.name)}</a> — ${esc(item.location)}. ${esc(item.product)}.</li>`,
            )
            .join("")}</ul>`,
          "Other Milton communities",
        ),
        section(formHtml("/location"), "Register for detached collection updates", true),
      ].join(""),
    },
    faq: {
      ...meta("faq"),
      usesForm: false,
      usesAccordion: true,
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]),
        faqPageJsonLd(),
      ],
      body: [
        crumbs([
          ["Home", "/"],
          ["FAQ", "/faq"],
        ]),
        section(
          `<h1>FAQ — The Enclave Detached Homes in Milton</h1><p>These answers cover The Enclave detached homes in Milton. Where Sundial Homes has not published a number, the answer says so.</p>${disclaimer()}${accordion(faqs)}`,
          "",
        ),
      ].join(""),
    },
    register: {
      ...meta("register"),
      usesForm: true,
      usesAccordion: true,
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Register", path: "/register" },
        ]),
      ],
      body: [
        crumbs([
          ["Home", "/"],
          ["Register", "/register"],
        ]),
        section(
          `<h1>Register for The Enclave — Detached Collection Updates</h1><p>${esc(answerFirstHome)}</p>${disclaimer()}${formHtml("/register")}`,
        ),
        section(accordion(registerFaqIndexes.map((index) => faqs[index])), "Registration questions", true),
      ].join(""),
    },
    privacy: {
      ...meta("privacy"),
      usesForm: false,
      usesAccordion: false,
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]),
      ],
      body: [
        crumbs([
          ["Home", "/"],
          ["Privacy Policy", "/privacy"],
        ]),
        section(
          `<h1>Privacy Policy</h1><p class="note">Last updated: ${esc(site.asOfDate)}</p>${privacySections
            .map(
              (item) =>
                `${item.heading ? `<h2>${esc(item.heading)}</h2>` : ""}${paragraphs(item.paragraphs)}`,
            )
            .join("")}${ampLink("/register", "Open the registration form")}`,
        ),
      ].join(""),
    },
    terms: {
      ...meta("terms"),
      usesForm: false,
      usesAccordion: false,
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]),
      ],
      body: [
        crumbs([
          ["Home", "/"],
          ["Terms", "/terms"],
        ]),
        section(
          `<h1>Terms of Use</h1><p class="note">Last updated: ${esc(site.asOfDate)}</p><p>By using this website, you agree to the following terms.</p>${termsSections
            .map((item) => `<h2>${esc(item.heading)}</h2>${paragraphs(item.paragraphs)}`)
            .join("")}`,
        ),
      ].join(""),
    },
  };
}

function meta(key: keyof typeof pageMeta) {
  const item = pageMeta[key];
  return { title: item.title, description: item.description, path: item.path };
}

function document(page: AmpPage) {
  const canonical = page.path === "/" ? `${site.url}/` : `${site.url}${page.path}`;
  const scripts = [
    `<script async src="https://cdn.ampproject.org/v0.js"></script>`,
    page.usesForm ? `<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>` : "",
    page.usesAccordion
      ? `<script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>`
      : "",
  ].join("");
  const ld = page.jsonLd
    .map((data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`)
    .join("");
  return `<!doctype html>
<html amp lang="en">
<head>
<meta charset="utf-8">
${scripts}
<title>${esc(page.title)}</title>
<link rel="canonical" href="${esc(canonical)}">
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
<meta name="description" content="${esc(page.description)}">
${ld}
<style amp-boilerplate>${BOILERPLATE}</style><noscript><style amp-boilerplate>${BOILERPLATE_NOSCRIPT}</style></noscript>
<style amp-custom>${CSS}</style>
</head>
<body>
${chrome()}
<main>
${page.body}
</main>
${footer()}
</body>
</html>`;
}

function chrome() {
  const links = navItems
    .map((item) => `<a href="${ampPath(item.href)}">${esc(item.label)}</a>`)
    .join("");
  return `<header><div class="wrap"><a class="brand" href="/amp">${esc(project.siteName)}</a><span class="rule"></span><nav>${links}</nav></div></header>`;
}

function footer() {
  const links = [
    `<a href="/amp">Home</a>`,
    ...navItems.map((item) => `<a href="${ampPath(item.href)}">${esc(item.label)}</a>`),
    `<a href="/amp/privacy">Privacy Policy</a>`,
    `<a href="/amp/terms">Terms</a>`,
    `<a href="${esc(site.siblingUrl)}">${esc(site.siblingAnchor)}</a>`,
  ].join("");
  return `<footer><div class="wrap"><p>${esc(project.siteName)}</p><span class="rule"></span><p>${esc(independenceDisclaimer)}</p><p>Last updated: ${esc(site.asOfDate)}</p><nav>${links}</nav></div></footer>`;
}

function heroBlock() {
  return `<section><div class="wrap hero-copy"><p class="badge">${esc(project.heroBadge)}</p><h1>${esc(hero.h1)}</h1><p>${esc(hero.subhead)}</p></div>${ampImg(images.hero)}<div class="wrap">${formHtml("/")}${disclaimer()}</div></section>`;
}

function section(body: string, title = "", alt = false) {
  return `<section class="${alt ? "alt" : ""}"><div class="wrap">${title ? `<h2>${esc(title)}</h2>` : ""}${body}${title ? disclaimer() : ""}</div></section>`;
}

function paragraphs(items: readonly string[]) {
  return items.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("");
}

function disclaimer() {
  return `<p class="note">${esc(pricingDisclaimer)}</p>`;
}

function sibling() {
  return `<p><a href="${esc(site.siblingUrl)}">${esc(site.siblingAnchor)}</a></p>`;
}

function ampLink(path: string, label: string) {
  return `<p><a href="${ampPath(path)}">${esc(label)}</a></p>`;
}

function ampPath(path: string) {
  return path === "/" ? "/amp" : `/amp${path}`;
}

function crumbs(items: [string, string][]) {
  return `<div class="wrap crumbs"><p>${items
    .map(([label, path], index) =>
      index === items.length - 1 ? esc(label) : `<a href="${ampPath(path)}">${esc(label)}</a> / `,
    )
    .join("")}</p></div>`;
}

function ampImg(image: { src: string; width: number; height: number; alt: string }) {
  return `<amp-img src="${esc(image.src)}" width="${image.width}" height="${image.height}" layout="responsive" alt="${esc(image.alt)}"></amp-img>`;
}

function pairTable(left: string, right: string, rows: [string, string][]) {
  return `<table><thead><tr><th>${esc(left)}</th><th>${esc(right)}</th></tr></thead><tbody>${rows
    .map(([field, value]) => `<tr><th>${esc(field)}</th><td>${esc(value)}</td></tr>`)
    .join("")}</tbody></table>`;
}

function factsTable() {
  return pairTable(
    "Fact",
    "Detail",
    quickFacts.map((row) => [row.field, row.value]),
  );
}

function mixTable(condensed: boolean) {
  const rows = condensed ? housingMix.slice(0, 6) : housingMix;
  return `<table><thead><tr><th>Housing type</th><th>Included in approved plan</th><th>Released by Sundial Homes?</th><th>Status</th></tr></thead><tbody>${rows
    .map((row) => {
      const status = row.registerLink ? `${esc(row.status)} — <a href="/amp/register">register for updates</a>` : esc(row.status);
      return `<tr><th>${esc(row.type)}</th><td>${esc(row.approved)}</td><td>${esc(row.released)}</td><td>${status}</td></tr>`;
    })
    .join("")}</tbody></table>${condensed ? "" : `<p>${esc(housingMixNote)}</p>`}`;
}

function accordion(items: readonly { question: string; answer: string }[]) {
  return `<amp-accordion>${items
    .map(
      (item) =>
        `<section><h3>${esc(item.question)}</h3><div><p>${esc(item.answer)}</p></div></section>`,
    )
    .join("")}</amp-accordion>`;
}

function formHtml(pagePath: string) {
  return `<form class="card" method="post" action-xhr="${site.url}/api/lead" target="_top">
<div class="pair"><div><label for="firstName">First name</label><input id="firstName" name="firstName" type="text" autocomplete="given-name" required></div><div><label for="lastName">Last name</label><input id="lastName" name="lastName" type="text" autocomplete="family-name" required></div></div>
<div><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>
<div><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" required></div>
<div><label for="model">Model</label><select id="model" name="model" required><option value="${esc(DETACHED_MODEL)}">${esc(DETACHED_MODEL)}</option></select></div>
<div class="hp"><label for="honeypot">Company website</label><input id="honeypot" name="honeypot" type="text" tabindex="-1" autocomplete="off"></div>
<input type="hidden" name="pagePath" value="${esc(pagePath)}">
<button type="submit">Register for Updates</button>
<p class="note">${esc(caslConsent)}</p>
<div submitting><p>Sending…</p></div>
<div submit-success><p>Registration received.</p></div>
<div submit-error><p>Check the form and try again.</p></div>
</form>`;
}

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
