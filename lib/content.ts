// UNVERIFIED FIELDS — DO NOT HARDCODE A NUMBER HERE.
// Detached-specific pricing, sizes, lot widths, unit counts, and launch date
// are not yet released by Sundial Homes. Every detached-specific UI element
// must read "To be announced" (or equivalent) until this file is updated
// with a sourced, dated figure. See README.md §"Updating unverified fields."

export const site = {
  domain: "theenclavedetached.com",
  url: "https://theenclavedetached.com",
  siteSource: "theenclavedetached.com",
  name: "The Enclave — Detached Collection",
  shortName: "The Enclave Detached",
  asOfDate: "October 2026",
  asOfIso: "2026-10-10",
  siblingUrl: "https://www.enclavemilton.com/",
  siblingAnchor: "See The Enclave's released freehold townhomes",
  townSourceUrl:
    "https://www.milton.ca/en/business-and-development/ward-3-development-applications.aspx",
  townSourceLabel:
    "Town of Milton — Ward 3 Development Applications",
  // Intersection centroid for Britannia Road & James Snow Parkway South, Milton.
  // Confirmed during the October 2026 build against geocoder.ca (43.511120, -79.808120)
  // and the Google Maps place centroid (43.5110939, -79.8080156).
  geo: {
    latitude: 43.51109,
    longitude: -79.80802,
  },
} as const;

export const project = {
  brandedName: "The Enclave",
  siteName: "The Enclave — Detached Collection",
  builder: "Sundial Homes",
  address: "6071 Fourth Line, Milton, Ontario",
  streetAddress: "6071 Fourth Line",
  locality: "Milton",
  region: "ON",
  country: "CA",
  intersection: "Britannia Road & James Snow Parkway",
  intersectionLong: "Northwest corner of Britannia Road and James Snow Parkway",
  marketedLocation:
    "Milton, Ontario, on Britannia Road between James Snow Parkway and Fourth Line — southeast Milton",
  townFile: "24T-21006/M",
  totalUnits: "approximately 1,094",
  totalUnitsLabel: "~1,094",
  detachedStatus: "Releasing soon",
  detachedStatusShort: "Releasing soon",
  applicationStatus:
    "Undergoing technical review by Town of Milton staff and reviewing agencies",
  heroBadge: "Detached Homes — Releasing Soon",
  releasedProduct: {
    type: "freehold townhomes",
    collections: [
      "Village Collection (back-to-back towns)",
      "Park Collection (2–3 storey traditional towns)",
    ],
    sizeRange: "953–2,843 sq ft",
    sizeRangeLong: "953 to 2,843 sq ft",
    startingPrice: 599990,
    occupancy: "targeted for 2027",
    maintenance: "None, on either freehold collection",
    launchStatus: "Registration open; limited release phases",
  },
  asOfDate: "October 2026",
} as const;

export function formatCad(amount: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const startingTownPrice = formatCad(project.releasedProduct.startingPrice);

export const toBeAnnounced = "Coming soon";

export const detachedAnnouncements = [
  { field: "Detached dwelling count", value: toBeAnnounced },
  { field: "Lot widths", value: toBeAnnounced },
  { field: "Unit sizes", value: toBeAnnounced },
  { field: "Bedroom and bathroom counts", value: toBeAnnounced },
  { field: "Price range", value: toBeAnnounced },
  { field: "Deposit structure", value: toBeAnnounced },
  { field: "Incentives", value: toBeAnnounced },
  { field: "Release / launch date", value: toBeAnnounced },
  { field: "Collection or model names", value: toBeAnnounced },
] as const;

export const pricingDisclaimer =
  "Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of October 2026.";

export const independenceDisclaimer =
  "This is an independent information and registration website for Detached Homes at The Enclave, a masterplan community by Sundial Homes. It is not the official website of Sundial Homes and is not affiliated with or endorsed by the builder. Detached Homes are releasing soon. Pricing, lot sizes, and timing are not guaranteed. All imagery, figures, and specifications are for illustration only and are subject to change without notice. E.&O.E.";

export const caslConsent =
  "I agree to receive updates about Detached Homes. I can unsubscribe at any time.";

export const answerFirstHome =
  "Detached Homes are releasing soon at The Enclave, a 1,094-unit masterplan community by Sundial Homes at Britannia Road and James Snow Parkway in Milton, Ontario, under Town of Milton file 24T-21006/M. Pricing and lot sizes for Detached Homes are coming soon. Freehold townhomes in this community start from $599,990.";

export const answerFirstMasterplan =
  "The Enclave is a 1,094-unit masterplan community by Sundial Homes at 6071 Fourth Line, Milton, under Town of Milton file 24T-21006/M. The housing mix includes Detached Homes, street townhouses, rear-lane townhouses, back-to-back units, and apartments. Detached Homes are releasing soon.";

export const answerFirstLocation =
  "The Enclave sits at the northwest corner of Britannia Road and James Snow Parkway in southeast Milton, Ontario, near the Milton GO Station on the Kitchener line and with direct access to Highway 401. The surrounding area includes Mohawk Park, the Niagara Escarpment trail network, and downtown Milton's Dundas Street retail corridor.";

export const hero = {
  h1: "Detached Homes",
  subhead:
    "Releasing soon at The Enclave in Milton, at Britannia Road and James Snow Parkway.",
} as const;

export const quickFacts = [
  { field: "Builder", value: project.builder },
  { field: "Community", value: "The Enclave (6071 Fourth Line)" },
  { field: "Detached Homes", value: project.detachedStatusShort },
  { field: "Town file", value: project.townFile },
  { field: "Total masterplan units", value: project.totalUnitsLabel },
  { field: "Location", value: "Britannia Road & James Snow Parkway, Milton, ON" },
  {
    field: "Released product (towns)",
    value: `From ${startingTownPrice}, ${project.releasedProduct.sizeRange}`,
  },
  { field: "Occupancy (towns, released phase)", value: "Targeted 2027" },
  { field: "Transit", value: "Milton GO Station (Kitchener line)" },
] as const;

export const overviewParagraphs = [
  "Sundial Homes holds an active development application with the Town of Milton — file 24T-21006/M — for a large masterplan community at 6071 Fourth Line, on the northwest corner of Britannia Road and James Snow Parkway in southeast Milton. The approved application outlines approximately 1,094 residential dwelling units across a mix of housing types, including detached dwellings, street townhouses, rear-lane-access townhouses, back-to-back townhouse units, and apartment units within a planned high-density block.",
  "Sundial Homes has begun marketing the first phase of this community under the name \"The Enclave.\" That phase, as currently released, consists exclusively of freehold townhomes: a Village Collection of back-to-back towns and a Park Collection of traditional two- and three-storey towns, ranging from 953 to 2,843 square feet and starting from $599,990, with occupancy targeted for 2027.",
  "Detached Homes at this community are releasing soon. Lot widths, unit sizes, pricing, and a launch date are coming soon. Register here to be among the first to hear those details.",
  "The broader masterplan includes a greenlands channel with trails, a stormwater management pond, a village square, and a site for a public elementary school — amenities that will serve the entire community once built out, detached and townhome phases alike.",
  "The community sits within walking and short driving distance of the Milton GO Station on the Kitchener line to Toronto Union Station, with direct access to Highway 401, placing it within Milton's established and fast-growing southeast residential corridor.",
] as const;

export const whyRegister = [
  "Registering is free and takes under a minute. Buyers who register are added to the update list Sundial Homes and its sales team use to notify prospective purchasers when detached-home pricing, floor plans, lot availability, and a release date are announced for this community. Registration does not commit you to a purchase and does not require a deposit.",
  "Registration is a request to hear about Detached Homes as they release. It does not reserve a lot, a price, or a place in a lineup.",
] as const;

export const budgetNote =
  "Pricing for Detached Homes is coming soon, so this page does not quote a detached price. The published starting price on this community for freehold townhomes is from $599,990.";

export const aboutSundial = [
  "Sundial Homes is the applicant named on Town of Milton file 24T-21006/M for 6071 Fourth Line. That is the public-record basis for identifying Sundial Homes as the developer of this masterplan. Sundial Homes is also the builder currently marketing The Enclave freehold townhomes — the Village Collection and the Park Collection — at the same Britannia Road location.",
  "This website does not speak for Sundial Homes. It does not use the builder's logo, it does not describe the detached homes as a product Sundial Homes is selling today, and it does not invent a collection name the builder has not published. Questions about agreements of purchase and sale, deposits, and allocation belong with Sundial Homes' sales team once a detached release exists.",
] as const;

export const housingMix = [
  {
    type: "Detached dwellings",
    approved: "Yes",
    released: "Releasing soon",
    status: "Detached Homes",
    registerLink: true,
  },
  {
    type: "Street townhouses",
    approved: "Yes",
    released: "Not under “The Enclave” branding specifically — see note below",
    status: "Not confirmed as a distinct Sundial Homes release",
    registerLink: false,
  },
  {
    type: "Rear-lane-access townhouses",
    approved: "Yes",
    released: "Not specified separately",
    status: "Not confirmed as a distinct Sundial Homes release",
    registerLink: false,
  },
  {
    type: "Back-to-back townhouses",
    approved: "Yes",
    released: "Yes — Village Collection",
    status: `Released, registration open, from ${startingTownPrice}`,
    registerLink: false,
  },
  {
    type: "Traditional 2–3 storey freehold towns",
    approved: "Yes",
    released: "Yes — Park Collection",
    status: `Released, registration open, from ${startingTownPrice}`,
    registerLink: false,
  },
  {
    type: "Apartment units (high-density block)",
    approved: "Yes",
    released: "No",
    status: "Not yet released",
    registerLink: false,
  },
] as const;

export const housingMixNote =
  "Sundial Homes' public marketing for \"The Enclave\" names only the Village and Park freehold-town collections. The Town's approved application lists a broader mix, including street and rear-lane townhouses, that has not been explicitly matched to a named Sundial Homes collection. Treat any housing type without a confirmed Sundial Homes release as unreleased.";

export const housingTypeNotes = [
  {
    title: "Detached dwellings",
    paragraphs: [
      "A detached dwelling is a house that does not share a wall with a neighbour. Town of Milton file 24T-21006/M names detached dwellings inside the housing mix for the 6071 Fourth Line masterplan. That is a planning fact. It is not a sales release.",
      "Sundial Homes has not published a detached count, lot width, floor area, bedroom count, price, deposit, or launch date. Each of those fields is to be announced. Nothing on this page should be read as a model name, a lot map, or a price list for detached homes.",
    ],
  },
  {
    title: "Street townhouses",
    paragraphs: [
      "Street townhouses usually front a municipal street and share side walls with neighbouring homes. The Town filing includes them in the mix at 6071 Fourth Line. Sundial Homes' current Enclave marketing does not give this type its own collection name.",
      "The released Village and Park townhomes may overlap with one or more of the Town's townhouse categories. That match has not been published. Until Sundial Homes says so, street townhouses stay in the not-confirmed column.",
    ],
  },
  {
    title: "Rear-lane-access townhouses",
    paragraphs: [
      "Rear-lane townhouses take vehicle access from a lane behind the home rather than from a driveway on the front street. The Town application lists rear-lane-access townhouses as part of the 6071 Fourth Line mix.",
      "Sundial Homes has not labeled a rear-lane collection under The Enclave name as of October 2026. This page does not assign a price, a width, or a release phase to them.",
    ],
  },
  {
    title: "Back-to-back townhouses",
    paragraphs: [
      `Back-to-back townhouses share a rear wall as well as side walls. Sundial Homes has released this form at The Enclave as the Village Collection, within the freehold townhome range of ${project.releasedProduct.sizeRangeLong}, starting from ${startingTownPrice}, with no monthly maintenance fee on that freehold collection.`,
      "Those figures describe the townhomes. They are not a proxy for Detached Homes. Occupancy for the town phase is targeted for 2027.",
    ],
  },
  {
    title: "Traditional two- and three-storey towns",
    paragraphs: [
      `Sundial Homes markets traditional two- and three-storey freehold towns at The Enclave as the Park Collection. They sit in the same published size range, ${project.releasedProduct.sizeRangeLong}, and the same published starting price, ${startingTownPrice}. Maintenance fees on this freehold collection are none.`,
      "The Park Collection is a townhome release. It does not fill in the detached columns on this page.",
    ],
  },
  {
    title: "Apartment units",
    paragraphs: [
      "The Town filing includes apartment units in a high-density residential block. Sundial Homes has not released that block under The Enclave marketing as of October 2026. No apartment price, storey count, or suite size is stated here.",
      "Buyers who only want a detached house can ignore the apartment line. It is listed so the masterplan is described the way the Town application describes it, not as towns alone.",
    ],
  },
] as const;

export const communityFeatures = [
  {
    title: "Greenlands channel and trails",
    paragraphs: [
      "Town of Milton file 24T-21006/M includes a greenlands channel with trails among the community features for 6071 Fourth Line. The filing identifies the channel as part of the plan. It does not publish a finished trail map, a length, or public hours.",
      "Sundial Homes' marketing for the released town phase also refers to trails and green space and to cycling connections. Those amenities are planned for the community as a whole. They are not exclusive to the detached component, and they are not described here as already built.",
    ],
  },
  {
    title: "Stormwater management pond",
    paragraphs: [
      "The same Town application includes a stormwater management pond. A pond of this kind is a servicing feature of a large subdivision. The filing does not publish the pond's area, its path network, or whether it will be a public viewing point.",
      "This page names the pond because it is on the public application. It does not treat the pond as a completed park or as a selling feature with a measured size.",
    ],
  },
  {
    title: "Village square",
    paragraphs: [
      "A village square is named both in the Town of Milton application and in Sundial Homes' marketing for The Enclave. It is a planned gathering place for the masterplan, meant to serve the community once it is built out.",
      "No square dimensions, retailer list, or opening date have been published for this page to repeat. The square is a planned feature, shared by whatever housing types are eventually built on the site.",
    ],
  },
  {
    title: "Public elementary school site",
    paragraphs: [
      "The Town application includes a public elementary school site. Sundial Homes' marketing describes a future on-site elementary school and notes that it is subject to school board approval. A site on a plan is not the same thing as an open school with a name and a catchment.",
      "Nearby existing Halton schools are listed on the location page. The on-site school, if it proceeds, would be a later piece of community infrastructure. Confirm any future school directly with the Halton District School Board.",
    ],
  },
  {
    title: "Internal road network",
    paragraphs: [
      "The application includes an internal road network serving the housing blocks, the school site, the square, and the open-space features. Street names, lane locations, and which roads would front detached lots have not been published as a consumer map.",
      "Until a detached release includes a lot plan, the internal roads are context for the scale of the masterplan, not a way to pick a lot.",
    ],
  },
] as const;

export const masterplanReading = [
  "Two records describe this community, and they do not say the same thing. The Town of Milton planning record describes the whole masterplan: about 1,094 homes, several housing types, and a list of community features, under file 24T-21006/M. Sundial Homes' current marketing describes the first branded release, The Enclave, and that release is freehold townhomes only.",
  "The detached page exists because the Town record includes detached dwellings and the builder's current Enclave marketing does not price or name them. Reading either source alone gives an incomplete picture. The housing table on this page keeps the two sources in separate columns so a detached dwelling is not mistaken for a Village or Park townhome.",
  "As of October 2026, the Town's Ward 3 development applications page described file 24T-21006/M as undergoing technical review by Town staff and reviewing agencies, rather than as a file that had received final approval. Technical review is a municipal step. It is not a sales launch, and it is not a promise that every housing type in the mix will be offered on a particular date. Confirm the live status with the Town of Milton planning department.",
] as const;

export const sourceCitation =
  "Source: Town of Milton, Ward 3 Development Applications, file 24T-21006/M, viewed October 2026.";

export const schools = {
  elementary: [
    "Viola Desmond Public School",
    "Ethel Gardiner Public School",
    "Hawthorne Village Public School",
  ],
  secondary: [
    "Craig Kielburger Secondary School",
    "Milton District High School",
  ],
  catholicSecondary: [
    "Bishop Reding Catholic Secondary School",
    "St. Benedict Catholic Secondary School",
  ],
} as const;

export const schoolRows = [
  {
    level: "Elementary",
    name: "Viola Desmond Public School",
    board: "Halton District School Board",
  },
  {
    level: "Elementary",
    name: "Ethel Gardiner Public School",
    board: "Halton District School Board",
  },
  {
    level: "Elementary",
    name: "Hawthorne Village Public School",
    board: "Halton District School Board",
  },
  {
    level: "Secondary",
    name: "Craig Kielburger Secondary School",
    board: "Halton District School Board",
  },
  {
    level: "Secondary",
    name: "Milton District High School",
    board: "Halton District School Board",
  },
  {
    level: "Catholic Secondary",
    name: "Bishop Reding Catholic Secondary School",
    board: "Halton Catholic District School Board",
  },
  {
    level: "Catholic Secondary",
    name: "St. Benedict Catholic Secondary School",
    board: "Halton Catholic District School Board",
  },
] as const;

export const catchmentSentence =
  "School catchments are determined by exact address and can change. Confirm current boundaries with the relevant school board before relying on this list.";

export const transitRows = [
  {
    field: "Station",
    value: "Milton GO Station",
  },
  {
    field: "Line",
    value: "Kitchener line to Toronto Union Station",
  },
  {
    field: "Distance from 6071 Fourth Line",
    value:
      "To be confirmed — exact driving and walking distance depends on the final site plan",
  },
] as const;

export const highwayRows = [
  {
    field: "Corridor",
    value: "Highway 401",
  },
  {
    field: "Nearest interchange",
    value:
      "To be confirmed — the nearest interchange has not been measured from the final site plan",
  },
] as const;

export const placeNotes = [
  {
    title: "Mohawk Park",
    paragraphs: [
      "Mohawk Park is a public park in Milton that sits among the landmarks buyers ask about when they look at southeast Milton. Sundial Homes' Enclave marketing names it as a nearby landmark.",
      "This page does not state a distance from 6071 Fourth Line to Mohawk Park. That measurement is not in the Town filing, and a guessed minute-count would be less useful than none.",
    ],
  },
  {
    title: "Niagara Escarpment trail network",
    paragraphs: [
      "The Niagara Escarpment is the long limestone ridge that shapes north Milton and the wider Halton landscape, with a public trail network along it. Southeast Milton is in the same town, not on the escarpment brow.",
      "The Enclave's marketed location is southeast Milton, with the escarpment trail network listed as a nearby landmark. No trailhead distance is published here.",
    ],
  },
  {
    title: "Downtown Milton",
    paragraphs: [
      "Downtown Milton is the older centre of the town, separate from the Britannia Road and James Snow Parkway growth area. It is named as a nearby landmark in the Enclave marketing.",
      "A drive time from 6071 Fourth Line to downtown is not stated on this page. Use a map for a current route rather than a rounded claim.",
    ],
  },
  {
    title: "Dundas Street retail corridor",
    paragraphs: [
      "Dundas Street is Milton's main east-west retail street, with grocery, everyday services, and larger shops. Enclave marketing identifies the Dundas Street retail corridor as a nearby landmark.",
      "Which plaza is closest to the site, and how long the drive takes, depends on the final street access. Those details are not confirmed here.",
    ],
  },
] as const;

export const hospitals = [
  "Milton District Hospital",
  "Oakville-Trafalgar Memorial Hospital",
  "Credit Valley Hospital",
] as const;

export const hospitalNote =
  "Distances from 6071 Fourth Line to Milton District Hospital, Oakville-Trafalgar Memorial Hospital, and Credit Valley Hospital are not confirmed against the final site plan. Earlier third-party listings have quoted hospital distances for this address. Those figures are not repeated here. Confirm a current route before relying on any travel time.";

export const comparables = [
  {
    name: "Elements Milton",
    location: "Bronte Street South and Britannia Road, Milton",
    product: "Townhomes",
    sourceLabel: "theelementsmilton.ca",
    sourceUrl: "https://theelementsmilton.ca/",
  },
  {
    name: "The Valleylands of Sixteen Mile Creek",
    location: "8625 Britannia Road, Milton",
    product: "Freehold detached homes by Fieldgate Homes",
    sourceLabel: "thevalleylands.ca",
    sourceUrl: "https://thevalleylands.ca/",
  },
] as const;

export const comparableIntro =
  "Buyers comparing The Enclave in Milton with other pre-construction communities can look at two projects whose own websites were live in October 2026. Elements Milton is a townhome community at Bronte Street South and Britannia Road. The Valleylands of Sixteen Mile Creek is a Fieldgate Homes detached community at 8625 Britannia Road. Names and locations only are given here. Detached pricing at The Enclave has not been released, so this page does not compare prices, deposits, or incentives.";

export const locationContext = [
  "The municipal address is 6071 Fourth Line. The Town of Milton locates the site at the northwest corner of Britannia Road and James Snow Parkway, in southeast Milton. Sundial Homes markets The Enclave on Britannia Road between James Snow Parkway and Fourth Line. Those descriptions point at the same masterplan, not at two different communities.",
  "Fourth Line and James Snow Parkway both run north-south in this part of Milton. Britannia Road runs east-west. The northwest corner of Britannia and James Snow is the planning location. A diagram on this page shows that relationship. It is not a survey, and it is not a lot plan.",
  "An exact walking time to Milton GO Station, and the nearest Highway 401 interchange measured from a future driveway, are still to be confirmed. Both are left blank on purpose. The station and the highway are real. A made-up minute count is not.",
] as const;

export const faqs: { question: string; answer: string; registerCta: boolean }[] = [
  {
    question: "What is The Enclave detached collection in Milton?",
    answer:
      "Detached Homes at The Enclave are releasing soon within Sundial Homes' 1,094-unit masterplan community at 6071 Fourth Line in Milton, Ontario, under Town of Milton file 24T-21006/M. Pricing and lot sizes are coming soon as of October 2026.",
    registerCta: true,
  },
  {
    question: "Who is building The Enclave in Milton?",
    answer:
      "Sundial Homes is the developer of The Enclave, a masterplan community at 6071 Fourth Line in Milton, Ontario. The Town of Milton's development application records, file 24T-21006/M, name Sundial Homes as the applicant for approximately 1,094 residential units at the Britannia Road and James Snow Parkway site.",
    registerCta: false,
  },
  {
    question: "How much do detached homes at The Enclave cost?",
    answer:
      "Pricing for Detached Homes at The Enclave is coming soon as of October 2026. Freehold townhomes in the same community start from $599,990. Registering on this site notifies buyers as detached pricing is announced.",
    registerCta: true,
  },
  {
    question: "When will Sundial Homes release detached homes at The Enclave?",
    answer:
      "Detached Homes at The Enclave are releasing soon. A calendar date is coming soon. Freehold townhomes in this Milton community have occupancy targeted for 2027. Registered buyers receive notice as detached details are confirmed.",
    registerCta: true,
  },
  {
    question: "Where exactly is The Enclave located?",
    answer:
      "The Enclave is located at 6071 Fourth Line, at the northwest corner of Britannia Road and James Snow Parkway, in southeast Milton, Ontario. The site is near the Milton GO Station on the Kitchener line and has direct access to Highway 401.",
    registerCta: false,
  },
  {
    question: "What home types are planned at The Enclave?",
    answer:
      "The Enclave's Town of Milton housing mix includes Detached Homes, street townhouses, rear-lane-access townhouses, back-to-back townhouses, and apartment units, totalling approximately 1,094 units. Detached Homes are releasing soon. Sundial Homes is marketing a Village and a Park Collection of freehold townhomes as of October 2026.",
    registerCta: false,
  },
  {
    question: "Is The Enclave in Milton a good investment?",
    answer:
      "The Enclave sits within an approved 1,094-unit masterplan near Milton GO transit and Highway 401, in a growing Halton Region corridor. Whether any pre-construction purchase is a good investment depends on individual financial circumstances, deposit structure, and market conditions; this site does not provide investment advice or return projections.",
    registerCta: false,
  },
  {
    question: "What schools serve The Enclave in Milton?",
    answer:
      "The Enclave is near Halton District School Board elementary schools Viola Desmond, Ethel Gardiner, and Hawthorne Village Public Schools, and secondary schools Craig Kielburger SS and Milton District HS, plus Halton Catholic District School Board's Bishop Reding and St. Benedict secondary schools. Catchments should be confirmed with each board.",
    registerCta: false,
  },
  {
    question: "What is the deposit structure for The Enclave's detached homes?",
    answer:
      "No deposit structure has been published for the detached component of The Enclave. Sundial Homes typically shares deposit details with registered buyers once a collection is ready to launch. Registering on this site is the way to receive that structure when it is released.",
    registerCta: true,
  },
  {
    question: "How do I get VIP access to The Enclave's detached collection?",
    answer:
      "Registering on this site adds you to the update list for The Enclave's detached collection. Sundial Homes has not announced a formal VIP program for the detached component as of October 2026; registration is the current way to be notified first when one is confirmed.",
    registerCta: true,
  },
  {
    question: "What is being built at 6071 Fourth Line in Milton?",
    answer:
      "6071 Fourth Line in Milton is the site of The Enclave, a Sundial Homes masterplan community approved for approximately 1,094 residential units, including detached dwellings, townhouses of several types, and apartment units, under Town of Milton file 24T-21006/M.",
    registerCta: false,
  },
  {
    question: "Is Town of Milton file 24T-21006/M approved?",
    answer:
      "As of October 2026, Town of Milton file 24T-21006/M — Sundial Homes' application for the 6071 Fourth Line community — was undergoing technical review by Town staff and reviewing agencies, rather than carrying final approval. Confirm current status directly with the Town of Milton planning department.",
    registerCta: false,
  },
  {
    question: "Are there incentives for The Enclave's detached homes?",
    answer:
      "No incentives have been announced for The Enclave's detached component. Sundial Homes has not published incentive details for either the released freehold townhomes or the unreleased detached product as of October 2026. Registered buyers are notified if and when incentive details are confirmed for either collection.",
    registerCta: true,
  },
  {
    question: "What is the assignment and rental policy for The Enclave?",
    answer:
      "Sundial Homes has not published an assignment or rental policy for The Enclave's detached component, and none is confirmed for the released freehold-town phase either. Buyers should request the current agreement of purchase and sale directly from Sundial Homes' sales team for exact assignment and rental terms once available.",
    registerCta: false,
  },
  {
    question: "Is there a cost to register for The Enclave detached updates?",
    answer:
      "No. Registering for The Enclave's detached-collection updates on this site is free and takes under a minute. It adds you to the notification list for pricing, floor plans, and launch-date announcements and does not commit you to a purchase or require a deposit.",
    registerCta: true,
  },
];

export const registerFaqIndexes = [9, 14, 3] as const;

export const images = {
  hero: {
    src: "/images/enclave-detached-hero.webp",
    width: 2400,
    height: 1350,
    alt: "A generated view of a detached-home community street, with several detached houses on their own lots. This is not a photograph of 6071 Fourth Line and not a Sundial Homes rendering.",
    name: "Detached Homes community",
  },
  context: {
    src: "/images/enclave-masterplan-site-context.webp",
    width: 2000,
    height: 1200,
    alt: "Sunrise over an open meadow, used as illustrative context for 6071 Fourth Line detached homes in Milton. This is not a Sundial Homes rendering.",
    name: "Illustrative meadow near the 6071 Fourth Line masterplan topic",
  },
  map: {
    src: "/images/enclave-location-map.webp",
    width: 1600,
    height: 900,
    alt: "Diagram of new detached homes at Britannia Road in Milton, marking the northwest corner of Britannia Road and James Snow Parkway as 6071 Fourth Line. Not a survey.",
    name: "Diagram of Britannia Road and James Snow Parkway, Milton",
  },
} as const;

export const pageMeta = {
  home: {
    title: "The Enclave Detached Homes — Milton, ON | Sundial Homes",
    description:
      "Detached homes are planned at The Enclave, Sundial Homes' 1,094-unit Milton masterplan. Register for pricing & launch updates.",
    path: "/",
  },
  masterplan: {
    title: "The Enclave Masterplan — 6071 Fourth Line, Milton",
    description:
      "See the full approved housing mix for Sundial Homes' 1,094-unit Enclave masterplan at 6071 Fourth Line, Milton — detached, towns & more.",
    path: "/masterplan",
  },
  location: {
    title: "Location — Britannia Rd & James Snow Pkwy, Milton",
    description:
      "Explore the location of The Enclave in Milton: Milton GO transit, Highway 401 access, and nearby Halton schools near Britannia Road.",
    path: "/location",
  },
  faq: {
    title: "FAQ — The Enclave Detached Homes, Milton",
    description:
      "Answers on pricing, launch timing, deposit structure, and VIP access for detached homes at The Enclave in Milton, Ontario.",
    path: "/faq",
  },
  register: {
    title: "Register — The Enclave Detached Collection Updates",
    description:
      "Register free for priority updates when Sundial Homes releases detached-home pricing and floor plans at The Enclave, Milton.",
    path: "/register",
  },
  thankYou: {
    title: "Registration received — The Enclave Detached",
    description:
      "Your registration for The Enclave detached collection updates has been received.",
    path: "/thank-you",
  },
  privacy: {
    title: "Privacy Policy — The Enclave Detached",
    description:
      "How this independent Enclave detached registration site collects, stores, and deletes personal information.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Use — The Enclave Detached",
    description:
      "Terms for using this independent information site about detached homes at The Enclave in Milton.",
    path: "/terms",
  },
} as const;

export const privacySections = [
  {
    heading: null,
    paragraphs: [
      "This website collects personal information when you submit the registration form, including your first name, last name, email address, phone number, whether you are a broker, and any optional details you provide about budget range, buyer type, timeline, and message. We also record the page you registered from and standard marketing-attribution data (UTM parameters) associated with your visit.",
    ],
  },
  {
    heading: "Why we collect it",
    paragraphs: [
      "This information is used solely to notify registrants about updates to the detached-home component of The Enclave — including pricing, floor plans, and launch-date announcements — once Sundial Homes releases them, and to pass registrant information to Sundial Homes' sales team for that purpose.",
    ],
  },
  {
    heading: "Where it's stored",
    paragraphs: [
      "Submitted information is stored using Supabase, a third-party database processor, on infrastructure located in accordance with Supabase's own data-residency practices. We do not sell your information to unrelated third parties.",
    ],
  },
  {
    heading: "Your consent",
    paragraphs: [
      "By checking the consent box on the registration form, you expressly consent to receive electronic communications about The Enclave and similar pre-construction opportunities, in accordance with Canada's Anti-Spam Legislation (CASL). You may withdraw consent at any time using the unsubscribe link included in any message you receive.",
    ],
  },
  {
    heading: "Requesting deletion",
    paragraphs: [
      "To request that your information be deleted, use the registration form and write \"deletion request\" in the optional message field, together with the email address you used to register. That form is the contact channel for this site. We will process deletion requests within a reasonable time and confirm once complete.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "This site uses Google Analytics 4 and the Meta Pixel to understand site usage and measure the effectiveness of registration. These tools may set cookies in your browser. You can control cookie behaviour through your browser's settings.",
    ],
  },
  {
    heading: "PIPEDA compliance",
    paragraphs: [
      "This site handles personal information in accordance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).",
      "This is an independent website and is not the official website of Sundial Homes. Questions about this policy can be directed through the registration form.",
    ],
  },
] as const;

export const termsSections = [
  {
    heading: "Independent information resource",
    paragraphs: [
      "This website is an independent information and registration resource tracking the detached-home component of The Enclave, a masterplan community by Sundial Homes at 6071 Fourth Line, Milton, Ontario. It is not the official website of Sundial Homes and is not affiliated with, endorsed by, or representing Sundial Homes or any builder sales office.",
    ],
  },
  {
    heading: "No guarantee of accuracy",
    paragraphs: [
      "While this site cites its sources — including the Town of Milton's public development application records — for the facts it presents, all renderings, figures, specifications, pricing, and availability referenced on this site are for illustration only, subject to change without notice, and not guaranteed. Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E.",
    ],
  },
  {
    heading: "Not financial or investment advice",
    paragraphs: [
      "Nothing on this site constitutes financial, legal, or investment advice. Any decision to register interest in or purchase a home at The Enclave should be made in consultation with qualified professionals and directly with Sundial Homes' sales team.",
    ],
  },
  {
    heading: "Registration is not a purchase",
    paragraphs: [
      "Submitting the registration form does not reserve a unit, lot, or price, does not create any binding obligation, and does not constitute an agreement of purchase and sale.",
    ],
  },
  {
    heading: "Third-party links",
    paragraphs: [
      "This site may link to third-party resources, including the Town of Milton's website and the related sibling site covering The Enclave's released townhome collection. We are not responsible for the content or accuracy of third-party sites.",
    ],
  },
  {
    heading: "Changes to these terms",
    paragraphs: [
      "These terms may be updated from time to time; the \"Last updated\" date above reflects the most recent revision.",
    ],
  },
] as const;

export const navItems = [
  { href: "/masterplan", label: "Masterplan" },
  { href: "/location", label: "Location" },
  { href: "/faq", label: "FAQ" },
  { href: "/register", label: "Register" },
] as const;

export const howToRead = [
  "Detached Homes at The Enclave are releasing soon. They are part of the Town of Milton housing mix for 6071 Fourth Line. Pricing is coming soon. The freehold townhomes Sundial Homes is marketing — Village back-to-back towns and Park two- and three-storey towns — are a separate product, from $599,990, at 953 to 2,843 square feet, with occupancy targeted for 2027.",
  "Three documents matter, and they answer different questions. The Town of Milton Ward 3 development applications page answers what the municipality is reviewing under file 24T-21006/M. Sundial Homes' Enclave marketing answers what is actually being offered for the townhome phase. This site answers the gap between those two: the detached dwellings in the filing that do not yet have a price, a lot width, or a launch date.",
  "Detached count, lot width, floor area, bedrooms, bathrooms, price, deposit, incentives, and a launch date read \"coming soon.\" Filling any of those with a townhome figure would describe the wrong home. The townhome starting price is printed only where the sentence is about townhomes.",
  "File status and sales status are also different. As of October 2026 the Town described file 24T-21006/M as undergoing technical review by Town staff and reviewing agencies. That is not final approval, and it is not a grand opening. A buyer can register interest in detached updates without treating the file as a finished approval or as a house that can be purchased this week.",
  "The hero shows a generated detached-home community, with several houses on their own lots. It is not a Sundial Homes rendering and it is not a photograph of 6071 Fourth Line.",
] as const;

export const questionsToAsk = [
  "When Sundial Homes does release detached details for 6071 Fourth Line, the useful questions are specific. Ask for the lot width, the model name, the interior floor area, the bedroom and bathroom count, the price for that lot, and the occupancy date written into the agreement. Ask which of those items are fixed and which can change before closing.",
  "Ask for the deposit schedule in writing: how much is due on signing, how much is due on later dates, and where the deposit is held. No deposit structure for the detached component has been published as of October 2026, so any figure offered in conversation should be checked against the agreement of purchase and sale.",
  "Ask whether incentives exist for that release, and whether they change the price or sit beside it. No incentives have been announced for the detached component, and none have been published on this site for the released freehold townhomes either.",
  "Ask for the assignment clause and the rental clause before assuming a home can be sold or leased before closing. Sundial Homes has not published an assignment or rental policy for the detached component, and none is confirmed here for the released town phase.",
  "Ask which school board boundaries apply to the exact lot, not to \"Milton\" in general. The nearby Halton District and Halton Catholic schools listed on this site are a starting map. Catchments change, and a corner lot on the edge of a plan can sit in a different boundary than the marketing brochure implies.",
  "Ask whether the home will be enrolled in Ontario's new home warranty program, and ask for the warranty enrolment number when one exists. Confirm that with the purchase documents rather than with a general statement on a website.",
  "Ask what is included in the base price and what is a finish upgrade. Detached pricing has not been released, so there is no inclusion list to publish today. The question still belongs on the list so the first price sheet can be read against it.",
  "Registration on this site does not answer those questions early. It puts a name on the update list so the questions can be asked when Sundial Homes publishes the detached release. It does not create an agreement of purchase and sale.",
] as const;

export const miltonContext = [
  "Milton is a town in Halton Region, Ontario. Halton Region also includes Burlington, Oakville, and Halton Hills. The Enclave site is in southeast Milton, at 6071 Fourth Line, on the northwest corner of Britannia Road and James Snow Parkway. That intersection is the planning location in Town file 24T-21006/M.",
  "Commuter rail from this part of Milton uses Milton GO Station on GO Transit's Kitchener line, with service to Toronto Union Station. Highway 401 is the east-west freeway for the south end of Milton. Both are real pieces of regional infrastructure. The walking distance from a future front door at 6071 Fourth Line to the GO platform, and the nearest 401 interchange measured from that driveway, are still to be confirmed against the final site plan.",
  "The Niagara Escarpment crosses the north of Milton and carries a public trail network. Southeast Milton is not the escarpment brow. The escarpment is listed as a nearby landmark because Sundial Homes' Enclave marketing names it, not because this page has measured a trailhead.",
  "Everyday retail in Milton concentrates along Dundas Street. Downtown Milton is the older centre of the town, separate from the Britannia Road growth area. Mohawk Park is another named landmark. None of those places is given a drive time here.",
  "Hospitals people ask about from this address are Milton District Hospital, Oakville-Trafalgar Memorial Hospital, and Credit Valley Hospital. They are named without a kilometre figure. A third-party distance is easy to copy and easy to get wrong once the internal road network of the masterplan is built. Confirm a route when the street access is final.",
  "Schools named as nearby are Viola Desmond Public School, Ethel Gardiner Public School, and Hawthorne Village Public School for Halton District elementary; Craig Kielburger Secondary School and Milton District High School for Halton District secondary; and Bishop Reding Catholic Secondary School and St. Benedict Catholic Secondary School for Halton Catholic secondary. The Town filing also includes a public elementary school site inside the masterplan, subject to school board approval. A site on a plan is not an open school.",
] as const;

export const townsVersusDetached = [
  "The released Enclave product is freehold townhomes. Freehold, on the Village and Park collections, means Sundial Homes is marketing those towns with no monthly maintenance fee. The Village Collection is back-to-back towns. The Park Collection is traditional two- and three-storey towns. Together they run from 953 to 2,843 square feet and start from $599,990, with occupancy targeted for 2027. Registration for that town phase is open, in limited release phases, on the separate townhome site.",
  "Detached Homes do not share a wall with a neighbour. They are releasing soon at this masterplan. Using the townhome starting price as a stand-in for a detached price would describe the wrong home.",
  "The Town mix is wider than the two townhome collections. It also names street townhouses, rear-lane-access townhouses, and apartment units in a high-density block, inside a total of approximately 1,094 residential units. Detached Homes are releasing soon.",
  "Someone who wants a townhome today can use the sibling site for The Enclave's released freehold towns. Someone who wants a detached house at this masterplan is early. The honest offer is notice, not a lot number.",
] as const;

export function buildLlmsFull() {
  const lines: string[] = [];
  const push = (...parts: string[]) => {
    parts.forEach((part) => lines.push(part));
  };

  push(
    `# ${project.siteName}`,
    "",
    answerFirstHome,
    "",
    `## ${hero.h1}`,
    "",
    hero.subhead,
    "",
    project.heroBadge,
    "",
    answerFirstHome,
    "",
    "### Quick facts",
    "",
    ...quickFacts.map((row) => `- ${row.field}: ${row.value}`),
    "",
    "### Project overview",
    "",
    ...overviewParagraphs.flatMap((paragraph) => [paragraph, ""]),
    "### Detached details still to be announced",
    "",
    ...detachedAnnouncements.map((row) => `- ${row.field}: ${row.value}`),
    "",
    budgetNote,
    "",
    "### About Sundial Homes",
    "",
    ...aboutSundial.flatMap((paragraph) => [paragraph, ""]),
    "### Why register",
    "",
    ...whyRegister.flatMap((paragraph) => [paragraph, ""]),
    "### How to read this site",
    "",
    ...howToRead.flatMap((paragraph) => [paragraph, ""]),
    "### Townhomes and detached homes",
    "",
    ...townsVersusDetached.flatMap((paragraph) => [paragraph, ""]),
    `# The Enclave Masterplan — 6071 Fourth Line, Milton`,
    "",
    answerFirstMasterplan,
    "",
    ...masterplanReading.flatMap((paragraph) => [paragraph, ""]),
    "### Housing mix",
    "",
    ...housingMix.map(
      (row) =>
        `- ${row.type}: approved ${row.approved}; released ${row.released}; ${row.status}`,
    ),
    "",
    housingMixNote,
    "",
    ...housingTypeNotes.flatMap((note) => [
      `### ${note.title}`,
      "",
      ...note.paragraphs.flatMap((paragraph) => [paragraph, ""]),
    ]),
    "### Community features",
    "",
    ...communityFeatures.flatMap((feature) => [
      `### ${feature.title}`,
      "",
      ...feature.paragraphs.flatMap((paragraph) => [paragraph, ""]),
    ]),
    sourceCitation,
    "",
    "### Questions to ask when detached details are released",
    "",
    ...questionsToAsk.flatMap((paragraph) => [paragraph, ""]),
    `# Location — Britannia Road & James Snow Parkway, Milton`,
    "",
    answerFirstLocation,
    "",
    ...locationContext.flatMap((paragraph) => [paragraph, ""]),
    "### Milton context",
    "",
    ...miltonContext.flatMap((paragraph) => [paragraph, ""]),
    "### Transit",
    "",
    ...transitRows.map((row) => `- ${row.field}: ${row.value}`),
    "",
    "### Highway access",
    "",
    ...highwayRows.map((row) => `- ${row.field}: ${row.value}`),
    "",
    "### Schools",
    "",
    ...schoolRows.map((row) => `- ${row.level}: ${row.name} (${row.board})`),
    "",
    catchmentSentence,
    "",
    ...placeNotes.flatMap((place) => [
      `### ${place.title}`,
      "",
      ...place.paragraphs.flatMap((paragraph) => [paragraph, ""]),
    ]),
    "### Hospitals",
    "",
    hospitalNote,
    "",
    "### Nearby Milton pre-construction context",
    "",
    comparableIntro,
    "",
    ...comparables.map(
      (item) => `- ${item.name}: ${item.product}, ${item.location} (${item.sourceUrl})`,
    ),
    "",
    "# FAQ — The Enclave Detached Homes, Milton",
    "",
    ...faqs.flatMap((faq) => [`## ${faq.question}`, "", faq.answer, ""]),
    "# Register for The Enclave — Detached Collection Updates",
    "",
    answerFirstHome,
    "",
    ...whyRegister.flatMap((paragraph) => [paragraph, ""]),
    "Registration is free. It does not reserve a home.",
    "",
    `Last updated: ${site.asOfDate}`,
    "",
  );

  return lines.join("\n");
}
