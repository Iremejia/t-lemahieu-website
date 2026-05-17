"use client";

import React, { useMemo, useState } from "react";

const DATA = [
  {
    "code": "PA-124",
    "title": "Chromatic Balance",
    "collection": "Pure Abstraction",
    "dimensions": "86 x 196 cm",
    "units": "1 piece",
    "price": "$4.300",
    "technique": "Acrylic on canvas",
    "format": "Statement Work",
    "status": "Available",
    "image": "/images/available-pa-124.jpg"
  },
  {
    "code": "RIT-056",
    "title": "Object of Pause",
    "collection": "Rituals",
    "dimensions": "70 x 80 cm",
    "units": "1 piece",
    "price": "$2.000",
    "technique": "Acrylic on canvas",
    "format": "Signature Work",
    "status": "Available",
    "image": "/images/available-rit-056.jpg"
  },
  {
    "code": "CAR-087",
    "title": "Blue Current",
    "collection": "Cardúmenes",
    "dimensions": "80 x 200 cm",
    "units": "1 piece",
    "price": "$4.500",
    "technique": "Acrylic on canvas",
    "format": "Statement Work",
    "status": "Available",
    "image": "/images/available-car-087.jpg"
  },
  {
    "code": "PA-139",
    "title": "Color Architecture",
    "collection": "Pure Abstraction",
    "dimensions": "100 x 240 cm",
    "units": "1 piece",
    "price": "Private inquiry",
    "technique": "Acrylic on canvas",
    "format": "Monumental Work",
    "status": "Available",
    "image": "/images/available-pa-139.jpg"
  },
  {
    "code": "CAR-092",
    "title": "Living Tide",
    "collection": "Cardúmenes",
    "dimensions": "100 x 240 cm",
    "units": "1 piece",
    "price": "Private inquiry",
    "technique": "Acrylic on canvas",
    "format": "Monumental Work",
    "status": "Available",
    "image": "/images/available-car-092.jpg"
  },
  {
    "code": "RIT-061",
    "title": "Ceremonial Table",
    "collection": "Rituals",
    "dimensions": "156 x 136 cm",
    "units": "1 piece",
    "price": "$5.200",
    "technique": "Acrylic on canvas",
    "format": "Statement Work",
    "status": "Available",
    "image": "/images/available-rit-061.jpg"
  },
  {
    "code": "PA-147",
    "title": "Vertical Balance",
    "collection": "Pure Abstraction",
    "dimensions": "160 x 80 cm",
    "units": "1 piece",
    "price": "$3.700",
    "technique": "Acrylic on canvas",
    "format": "Statement Work",
    "status": "Available",
    "image": "/images/available-pa-147.jpg"
  },
  {
    "code": "CAR-104",
    "title": "Collective Motion",
    "collection": "Cardúmenes",
    "dimensions": "140 x 225 cm",
    "units": "1 piece",
    "price": "Private inquiry",
    "technique": "Acrylic on canvas",
    "format": "Monumental Work",
    "status": "Available",
    "image": "/images/available-car-104.jpg"
  },
  {
    "code": "RIT-073",
    "title": "The Gathering",
    "collection": "Rituals",
    "dimensions": "77 x 100 cm",
    "units": "1 piece",
    "price": "$2.400",
    "technique": "Acrylic on canvas",
    "format": "Signature Work",
    "status": "Available",
    "image": "/images/available-rit-073.jpg"
  },
  {
    "code": "RIT-079",
    "title": "The Red Vessel",
    "collection": "Rituals",
    "dimensions": "140 x 190 cm",
    "units": "1 piece",
    "price": "Private inquiry",
    "technique": "Acrylic on canvas",
    "format": "Monumental Work",
    "status": "Available",
    "image": "/images/available-rit-079.jpg"
  },
  {
    "code": "OBJ-060",
    "title": "The Rewritten Chair",
    "collection": "Cardúmenes",
    "dimensions": "—",
    "units": "1 piece",
    "price": "$3.200",
    "technique": "Acrylic on textile",
    "format": "Painted Object",
    "status": "Available",
    "image": "/images/obj-060-the-rewritten-chair.jpg"
  },
  {
    "code": "RIT-084",
    "title": "Ritual Sequence",
    "collection": "Rituals",
    "dimensions": "32 x 24 cm",
    "units": "Set of 3 pieces",
    "price": "$900",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "status": "Commission reference",
    "image": "/images/intimate-rit-146.jpg"
  },
  {
    "code": "CAR-118",
    "title": "Architectural Current",
    "collection": "Cardúmenes",
    "dimensions": "—",
    "units": "1 piece",
    "price": "Private inquiry",
    "technique": "Acrylic on canvas",
    "format": "Monumental Work",
    "status": "Commission reference",
    "image": "/images/work-large-blue.jpg"
  },
  {
    "code": "PA-152",
    "title": "Open Rhythm",
    "collection": "Pure Abstraction",
    "dimensions": "—",
    "units": "1 piece",
    "price": "Private inquiry",
    "technique": "Acrylic on canvas",
    "format": "Monumental Work",
    "status": "Commission reference",
    "image": "/images/work-xl.jpg"
  },
  {
    "code": "PA-166",
    "title": "Collected Balance",
    "collection": "Pure Abstraction",
    "dimensions": "31 x 21 cm",
    "units": "Set of 10 pieces",
    "price": "$3.200",
    "technique": "Acrylic on wood",
    "format": "Intimate Work",
    "status": "Commission reference",
    "image": "/images/set-composition-10.jpg"
  },
  {
    "code": "PA-171",
    "title": "Three Forms",
    "collection": "Pure Abstraction",
    "dimensions": "28 x 28 cm",
    "units": "Set of 3 pieces",
    "price": "$600",
    "technique": "Acrylic on canvas",
    "format": "Intimate Work",
    "status": "Commission reference",
    "image": "/images/set-3.jpg"
  },
  {
    "code": "PA-184",
    "title": "Two Gestures",
    "collection": "Pure Abstraction",
    "dimensions": "32 x 24 cm",
    "units": "Set of 2 pieces",
    "price": "$700",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "status": "Commission reference",
    "image": "/images/set-2-pieces.jpg"
  },
  {
    "code": "RIT-091",
    "title": "Domestic Pair",
    "collection": "Rituals",
    "dimensions": "—",
    "units": "Set of 2 pieces",
    "price": "$600",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "status": "Commission reference",
    "image": "/images/intimate-rit-103.jpg"
  },
  {
    "code": "CAR-126",
    "title": "Blue Gathering",
    "collection": "Cardúmenes",
    "dimensions": "60 x 40 cm",
    "units": "1 piece",
    "price": "$1.400",
    "technique": "Acrylic on canvas",
    "format": "Signature Work",
    "status": "Commission reference",
    "image": "/images/car-126.jpg"
  },
  {
    "code": "PA-193",
    "title": "Green Threshold",
    "collection": "Pure Abstraction",
    "dimensions": "—",
    "units": "1 piece",
    "price": "$2.200",
    "technique": "Acrylic on canvas",
    "format": "Signature Work",
    "status": "Available",
    "image": "/images/medium-bench.jpg"
  },
  {
    "code": "CAR-132",
    "title": "A Field in Motion",
    "collection": "Cardúmenes",
    "dimensions": "—",
    "units": "1 piece",
    "price": "$4.800",
    "technique": "Acrylic on canvas",
    "format": "Statement Work",
    "status": "Commission reference",
    "image": "/images/large-corner.jpg"
  },
  {
    "code": "PA-201",
    "title": "Tropical Structure",
    "collection": "Pure Abstraction",
    "dimensions": "—",
    "units": "1 piece",
    "price": "$4.200",
    "technique": "Acrylic on canvas",
    "format": "Statement Work",
    "status": "Commission reference",
    "image": "/images/large-premium-living.jpg"
  },
  {
    "code": "PA-214",
    "title": "Small Color Wall",
    "collection": "Pure Abstraction",
    "dimensions": "28 x 28 cm",
    "units": "Set of 5 pieces",
    "price": "$2.200",
    "technique": "Acrylic on canvas",
    "format": "Intimate Work",
    "status": "Commission reference",
    "image": "/images/set-5.jpg"
  },
  {
    "code": "RIT-103",
    "title": "Cup, Bowl, Gesture",
    "collection": "Rituals",
    "dimensions": "22 x 22 cm",
    "units": "Set of 2 pieces",
    "price": "$600",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/intimate-rit-103.jpg"
  },
  {
    "code": "PA-227",
    "title": "Paper Gesture",
    "collection": "Pure Abstraction",
    "dimensions": "32 x 24 cm",
    "units": "Set of 2 pieces",
    "price": "$700",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/cf-128.jpg"
  },
  {
    "code": "RIT-117",
    "title": "Quiet Object",
    "collection": "Rituals",
    "dimensions": "32 x 24 cm",
    "units": "1 piece",
    "price": "$350",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/intimate-rit-117.jpg"
  },
  {
    "code": "RIT-124",
    "title": "Ritual Sequence",
    "collection": "Rituals",
    "dimensions": "32 x 24 cm",
    "units": "Set of 4 pieces",
    "price": "$1.200",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/intimate-rit-124.jpg"
  },
  {
    "code": "RIT-138",
    "title": "Ritual Pair",
    "collection": "Rituals",
    "dimensions": "32 x 24 cm",
    "units": "Set of 2 pieces",
    "price": "$700",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/intimate-rit-138.jpg"
  },
  {
    "code": "CAR-141",
    "title": "Current Pair I",
    "collection": "Cardúmenes",
    "dimensions": "32 x 24 cm",
    "units": "Set of 2 pieces",
    "price": "$700",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/intimate-car-141.jpg"
  },
  {
    "code": "CAR-154",
    "title": "Current Pair II",
    "collection": "Cardúmenes",
    "dimensions": "32 x 24 cm",
    "units": "Set of 2 pieces",
    "price": "$700",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/intimate-car-154.jpg"
  },
  {
    "code": "CAR-169",
    "title": "Three Currents",
    "collection": "Cardúmenes",
    "dimensions": "32 x 24 cm",
    "units": "Set of 3 pieces",
    "price": "$900",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/intimate-car-169.jpg"
  },
  {
    "code": "RIT-146",
    "title": "Ritual Trio",
    "collection": "Rituals",
    "dimensions": "32 x 24 cm",
    "units": "Set of 3 pieces",
    "price": "$900",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/intimate-rit-146.jpg"
  },
  {
    "code": "CF-041",
    "title": "Fragments in Dialogue",
    "collection": "Collected Fragments",
    "dimensions": "20 x 20 cm",
    "units": "Set of 2 pieces",
    "price": "$450",
    "technique": "Collage",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/cf-041.jpg"
  },
  {
    "code": "CF-064",
    "title": "Layered Fragment I",
    "collection": "Collected Fragments",
    "dimensions": "20 x 20 cm",
    "units": "1 piece",
    "price": "$250",
    "technique": "Collage",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/cf-064.jpg"
  },
  {
    "code": "CF-078",
    "title": "Layered Fragment II",
    "collection": "Collected Fragments",
    "dimensions": "20 x 20 cm",
    "units": "1 piece",
    "price": "$250",
    "technique": "Collage",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/cf-078.jpg"
  },
  {
    "code": "CF-083",
    "title": "Layered Fragment III",
    "collection": "Collected Fragments",
    "dimensions": "20 x 20 cm",
    "units": "1 piece",
    "price": "$250",
    "technique": "Collage",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/cf-083.jpg"
  },
  {
    "code": "CF-097",
    "title": "Layered Fragment IV",
    "collection": "Collected Fragments",
    "dimensions": "20 x 20 cm",
    "units": "1 piece",
    "price": "$250",
    "technique": "Collage",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/cf-097.jpg"
  },
  {
    "code": "CF-105",
    "title": "Layered Fragment V",
    "collection": "Collected Fragments",
    "dimensions": "20 x 20 cm",
    "units": "1 piece",
    "price": "$250",
    "technique": "Collage",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/cf-105.jpg"
  },
  {
    "code": "CF-116",
    "title": "Layered Fragment VI",
    "collection": "Collected Fragments",
    "dimensions": "20 x 20 cm",
    "units": "1 piece",
    "price": "$250",
    "technique": "Collage",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/cf-116.jpg"
  },
  {
    "code": "CF-128",
    "title": "Cut Surface Pair",
    "collection": "Collected Fragments",
    "dimensions": "22 x 16 cm",
    "units": "Set of 2 pieces",
    "price": "$450",
    "technique": "Collage",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/cf-128.jpg"
  },
  {
    "code": "CF-196",
    "title": "Grey Shoals",
    "collection": "Collected Fragments",
    "dimensions": "22 x 16 cm",
    "units": "Set of 2 pieces",
    "price": "$450",
    "technique": "Collage on canvas",
    "format": "Intimate Work",
    "status": "Available",
    "image": "/images/cf-196.jpg"
  },
  {
    "code": "CF-152",
    "title": "Tiny Fragments",
    "collection": "Collected Fragments",
    "dimensions": "10 x 10 cm",
    "units": "Set of 2 pieces",
    "price": "$250",
    "technique": "Collage",
    "format": "Intimate Work",
    "status": "Commission reference",
    "image": "/images/cf-152.jpg"
  },
  {
    "code": "OBJ-048",
    "title": "The Indoor Mountain",
    "collection": "Pure Abstraction",
    "dimensions": "—",
    "units": "1 piece",
    "price": "Private inquiry",
    "technique": "Acrylic on wood",
    "format": "Painted Object",
    "status": "Commission reference",
    "image": "/images/object-indoor-mountain.jpg"
  }
];

const collectionOrder = ["Cardúmenes", "Rituals", "Pure Abstraction", "Collected Fragments"];
const formatOrder = ["Intimate Work", "Signature Work", "Statement Work", "Monumental Work", "Painted Object"];

const copy = {
  en: {
    navCollections: "Collections",
    navFormats: "Formats",
    navWorks: "Available Works",
    navObjects: "Painted Objects",
    navArtist: "Artist",
    navContact: "Contact",
    language: "ES",
    heroEyebrow: "Belgian artist · Venezuelan soul",
    heroTitle1: "Two worlds,",
    heroTitle2: "one brush.",
    heroText: "Abstract works shaped by color, light, depth and balance — created as unique originals for collectors, interiors and architectural spaces.",
    heroButtonWorks: "Explore the work",
    heroButtonContact: "Contact the studio",
    originalLine: "Each piece is a unique original, painted by the artist as a singular work — created for collectors, interiors and spaces where art is meant to hold presence.",
    collectionsKicker: "Browse by Collection",
    collectionsTitle: "A more intentional way to enter the work.",
    collectionsText: "The collections organize the artist’s universe through movement, gesture, object, color and fragment. Each territory has its own rhythm and visual presence.",
    formatsKicker: "Browse by Format",
    formatsTitle: "Choose by scale, space and presence.",
    formatsText: "Discover available works by scale, from intimate collectible pieces to large-scale statement works for interiors, private collections and architectural spaces.",
    availableKicker: "Available Works",
    availableTitle: "Current pieces and selected references.",
    availableText: "Select a collection or format to view works. Monumental pieces and painted objects are handled by private inquiry.",
    objectsKicker: "Painted Objects",
    objectsTitle: "Functional forms transformed through painting.",
    objectsText: "Each object is conceived as a unique painted surface: chairs, screens and domestic forms transformed into collectible works.",
    specialKicker: "Special Projects",
    specialTitle: "For spaces that require something singular.",
    specialText: "The studio is open to selected special projects: painted objects, site-specific commissions, large-format series and tailored proposals for interiors, hospitality or private collections.",
    aboutKicker: "The Artist",
    aboutTitle: "Born in Belgium. Shaped by Venezuela.",
    aboutText1: "Truusje Lemahieu studied Fine Arts in Bruges, Paris and Brussels before leaving for Venezuela at 22, where she would spend four decades developing a visual language rooted in gesture, rhythm and color.",
    aboutText2: "Color had always been central to her sensibility. In the tropics, that instinct found its natural territory: the intensity of light, vegetation, warmth and daily life made her relationship with color feel fully alive.",
    contactKicker: "Contact",
    contactTitle: "Begin with a work.",
    request: "Request pricing & availability",
    open: "Open details",
    close: "Close",
    codeOptional: "Artwork code of interest (optional)",
    name: "Name",
    email: "Email",
    phone: "WhatsApp / Phone",
    country: "Country / City",
    interest: "Interest",
    message: "Message",
    send: "Send inquiry",
    contactBelgium: "Belgium contact",
    contactVenezuela: "Venezuela contact",
    instagram: "Instagram",
    confirmation: "Thank you for your inquiry. The studio will contact you shortly with pricing, availability and placement details.",
    available: "Available",
    commission: "Commission reference",
    private: "Private inquiry",
    inDevelopment: "In development",
    cacaosText: "Cacaos will be introduced as a future collection — a warm exploration of origin, memory and Caribbean sensibility.",
    from: "From",
    inquiry: "Private inquiry"
  },
  es: {
    navCollections: "Colecciones",
    navFormats: "Formatos",
    navWorks: "Obras disponibles",
    navObjects: "Objetos pintados",
    navArtist: "Artista",
    navContact: "Contacto",
    language: "EN",
    heroEyebrow: "Artista belga · alma venezolana",
    heroTitle1: "Dos mundos,",
    heroTitle2: "un pincel.",
    heroText: "Obras abstractas construidas desde el color, la luz, la profundidad y el equilibrio — piezas únicas y originales para coleccionistas, interiores y espacios arquitectónicos.",
    heroButtonWorks: "Explorar obras",
    heroButtonContact: "Contactar atelier",
    originalLine: "Cada pieza es una obra única y original, pintada por la artista como una creación singular — pensada para coleccionistas, interiores y espacios donde el arte tiene presencia.",
    collectionsKicker: "Explorar por colección",
    collectionsTitle: "Una entrada más intencional al universo de la obra.",
    collectionsText: "Las colecciones organizan el universo de la artista a través del movimiento, el gesto, el objeto, el color y el fragmento. Cada territorio tiene su propio ritmo y presencia visual.",
    formatsKicker: "Explorar por formato",
    formatsTitle: "Elegir por escala, espacio y presencia.",
    formatsText: "Descubre obras disponibles según su escala, desde piezas íntimas de colección hasta obras de gran formato para interiores, colecciones privadas y espacios arquitectónicos.",
    availableKicker: "Obras disponibles",
    availableTitle: "Piezas actuales y referencias seleccionadas.",
    availableText: "Selecciona una colección o formato para ver las obras. Las piezas monumentales y objetos pintados se manejan por consulta privada.",
    objectsKicker: "Objetos pintados",
    objectsTitle: "Formas funcionales transformadas por la pintura.",
    objectsText: "Cada objeto se concibe como una superficie pintada única: sillas, parabanes y formas domésticas transformadas en piezas coleccionables.",
    specialKicker: "Proyectos especiales",
    specialTitle: "Para espacios que requieren algo singular.",
    specialText: "El atelier está abierto a proyectos especiales seleccionados: objetos pintados, encargos site-specific, series de gran formato y propuestas a medida para interiores, hospitalidad o colecciones privadas.",
    aboutKicker: "La artista",
    aboutTitle: "Nacida en Bélgica. Transformada por Venezuela.",
    aboutText1: "Truusje Lemahieu estudió Bellas Artes en Brujas, París y Bruselas antes de irse a Venezuela a los 22 años, donde pasaría cuatro décadas desarrollando un lenguaje visual basado en gesto, ritmo y color.",
    aboutText2: "El color siempre fue parte central de su sensibilidad. En el trópico, esa intuición encontró su territorio natural: la intensidad de la luz, la vegetación, la calidez y la vida cotidiana hicieron que su relación con el color cobrara pleno sentido.",
    contactKicker: "Contacto",
    contactTitle: "Comenzar con una obra.",
    request: "Consultar precio y disponibilidad",
    open: "Ver detalles",
    close: "Cerrar",
    codeOptional: "Código de la obra de interés (opcional)",
    name: "Nombre",
    email: "Email",
    phone: "WhatsApp / Teléfono",
    country: "País / Ciudad",
    interest: "Interés",
    message: "Mensaje",
    send: "Enviar consulta",
    contactBelgium: "Contacto en Bélgica",
    contactVenezuela: "Contacto en Venezuela",
    instagram: "Instagram",
    confirmation: "Gracias por tu consulta. El atelier se pondrá en contacto pronto con información sobre precio, disponibilidad y opciones de ubicación.",
    available: "Disponible",
    commission: "Referencia de encargo",
    private: "Consulta privada",
    inDevelopment: "En desarrollo",
    cacaosText: "Cacaos se presentará más adelante como una nueva colección: una exploración cálida de origen, memoria y sensibilidad caribeña.",
    from: "Desde",
    inquiry: "Consulta privada"
  }
};

const collectionCopy = {
  "Cardúmenes": {
    en: { subtitle: "Shoals, currents and collective movement.", text: "A study of movement as collective force: direction, synchronicity, abundance and rhythm moving through the composition." },
    es: { subtitle: "Cardúmenes, corrientes y movimiento colectivo.", text: "Una exploración del movimiento como fuerza colectiva: dirección, sincronía, abundancia y ritmo dentro de la composición." }
  },
  "Rituals": {
    en: { subtitle: "Objects, pause and ceremonial presence.", text: "Objects detach from everyday function and become moments of pause, gathering and ceremony." },
    es: { subtitle: "Objetos, pausa y presencia ceremonial.", text: "Los objetos se desprenden de su función cotidiana y se convierten en momentos de pausa, reunión y ceremonia." }
  },
  "Pure Abstraction": {
    en: { subtitle: "Color, form and intentional balance.", text: "Free, recurring and unmistakably personal forms emerge through color, light and depth, held by a precise sense of balance." },
    es: { subtitle: "Color, forma y equilibrio intencional.", text: "Formas libres, recurrentes e inconfundiblemente personales emergen a través del color, la luz y la profundidad, sostenidas por un equilibrio preciso." }
  },
  "Collected Fragments": {
    en: { subtitle: "Small-format works built through intuition and layering.", text: "Intimate and tactile pieces close to archive, fragment, recomposition and quiet visual discovery." },
    es: { subtitle: "Obras de pequeño formato construidas desde la intuición y las capas.", text: "Piezas íntimas y táctiles, cercanas al archivo, el fragmento, la recomposición y una mirada más privada." }
  }
};

const formatCopy = {
  "Intimate Work": { en: ["Intimate Works", "Small-scale works and curated sets for personal, layered spaces.", "From $250"], es: ["Obras Intimate", "Piezas pequeñas y sets curados para espacios personales y paredes compuestas.", "Desde $250"] },
  "Signature Work": { en: ["Signature Works", "Medium-format pieces with a distinct visual identity.", "From $2.000"], es: ["Obras Signature", "Piezas medianas con una identidad visual clara.", "Desde $2.000"] },
  "Statement Work": { en: ["Statement Works", "Large-scale works designed to anchor a room.", "From $3.700"], es: ["Obras Statement", "Obras de gran formato pensadas para anclar un espacio.", "Desde $3.700"] },
  "Monumental Work": { en: ["Monumental Works", "Oversized works with architectural presence.", "From $6.000"], es: ["Obras Monumental", "Obras sobredimensionadas con presencia arquitectónica.", "Desde $6.000"] },
  "Painted Object": { en: ["Painted Objects", "Functional pieces transformed through painting.", "Private inquiry"], es: ["Objetos pintados", "Piezas funcionales transformadas por la pintura.", "Consulta privada"] }
};

function translateStatus(status, t) {
  if (!status) return "";
  if (status.toLowerCase().includes("commission")) return t.commission;
  if (status.toLowerCase().includes("available")) return t.available;
  return status;
}

function displayPrice(work, t) {
  if (work.format === "Monumental Work") return t.private;
  if (work.price === "Private inquiry") return t.private;
  return work.price;
}

function collectionWorks(name) {
  return DATA.filter((work) => work.collection === name);
}

export default function Website() {
  const [lang, setLang] = useState("en");
  const [selectedCollection, setSelectedCollection] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [active, setActive] = useState(null);
  const t = copy[lang];

  const works = useMemo(() => DATA.filter((work) => {
    const byCollection = selectedCollection === "All" || work.collection === selectedCollection;
    const byFormat = selectedFormat === "All" || work.format === selectedFormat;
    return byCollection && byFormat;
  }), [selectedCollection, selectedFormat]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const selectCollection = (collection) => {
    setSelectedCollection(collection);
    setSelectedFormat("All");
    setTimeout(() => scrollTo("works"), 50);
  };

  const selectFormat = (format) => {
    setSelectedFormat(format);
    setSelectedCollection("All");
    setTimeout(() => scrollTo("works"), 50);
  };

  return (
    <main>
      <nav className="nav">
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>T. Lemahieu</button>
        <div className="navlinks">
          <button onClick={() => scrollTo("collections")}>{t.navCollections}</button>
          <button onClick={() => scrollTo("formats")}>{t.navFormats}</button>
          <button onClick={() => scrollTo("works")}>{t.navWorks}</button>
          <button onClick={() => scrollTo("objects")}>{t.navObjects}</button>
          <button onClick={() => scrollTo("artist")}>{t.navArtist}</button>
          <button onClick={() => scrollTo("contact")}>{t.navContact}</button>
          <button className="lang" onClick={() => setLang(lang === "en" ? "es" : "en")}>{t.language}</button>
        </div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle1}<em>{t.heroTitle2}</em></h1>
          <p>{t.heroText}</p>
          <div className="heroActions">
            <button className="primary" onClick={() => scrollTo("collections")}>{t.heroButtonWorks}</button>
            <button className="secondary" onClick={() => scrollTo("contact")}>{t.heroButtonContact}</button>
          </div>
        </div>
        <div className="heroImage">
          <img src="/images/available-car-092.jpg" alt="T. Lemahieu artwork" />
        </div>
      </section>

      <section className="creamStatement">
        <p>{t.originalLine}</p>
      </section>

      <section className="section collections" id="collections">
        <div className="sectionHead">
          <p className="kicker">{t.collectionsKicker}</p>
          <h2>{t.collectionsTitle}</h2>
          <p>{t.collectionsText}</p>
        </div>
        <div className="collectionCards">
          {collectionOrder.map((collection) => {
            const firstWorks = collectionWorks(collection).slice(0, 3);
            const cc = collectionCopy[collection][lang];
            return (
              <article className="collectionCard" key={collection}>
                <div className="collectionIntro">
                  <p className="smallCode">{firstWorks.length} works</p>
                  <h3>{collection}</h3>
                  <h4>{cc.subtitle}</h4>
                  <p>{cc.text}</p>
                  <button onClick={() => selectCollection(collection)}>{t.open}</button>
                </div>
                <div className="collectionImages">
                  {firstWorks.map((work) => <img key={work.code} src={work.image} alt={work.title} />)}
                </div>
              </article>
            );
          })}
          <article className="collectionCard coming">
            <div className="collectionIntro">
              <p className="smallCode">{t.inDevelopment}</p>
              <h3>Cacaos</h3>
              <h4>Origin, warmth and Caribbean memory.</h4>
              <p>{t.cacaosText}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section formats" id="formats">
        <div className="sectionHead narrow">
          <p className="kicker">{t.formatsKicker}</p>
          <h2>{t.formatsTitle}</h2>
          <p>{t.formatsText}</p>
        </div>
        <div className="formatGrid">
          {formatOrder.map((format) => {
            const [name, text, price] = formatCopy[format][lang];
            return (
              <button className="formatTile" key={format} onClick={() => selectFormat(format)}>
                <span>{name}</span>
                <p>{text}</p>
                <strong>{price}</strong>
              </button>
            );
          })}
        </div>
      </section>

      <section className="section available" id="works">
        <div className="sectionHead">
          <p className="kicker">{t.availableKicker}</p>
          <h2>{t.availableTitle}</h2>
          <p>{t.availableText}</p>
        </div>

        <div className="filters">
          <div>
            <span>{t.navCollections}</span>
            <button className={selectedCollection === "All" ? "active" : ""} onClick={() => setSelectedCollection("All")}>All</button>
            {collectionOrder.map((c) => <button key={c} className={selectedCollection === c ? "active" : ""} onClick={() => selectCollection(c)}>{c}</button>)}
          </div>
          <div>
            <span>{t.navFormats}</span>
            <button className={selectedFormat === "All" ? "active" : ""} onClick={() => setSelectedFormat("All")}>All</button>
            {formatOrder.map((f) => <button key={f} className={selectedFormat === f ? "active" : ""} onClick={() => selectFormat(f)}>{formatCopy[f][lang][0]}</button>)}
          </div>
        </div>

        <div className="workGrid">
          {works.map((work) => <WorkCard key={work.code} work={work} t={t} lang={lang} onOpen={() => setActive(work)} />)}
        </div>
      </section>

      <section className="section painted" id="objects">
        <div className="sectionHead narrow">
          <p className="kicker">{t.objectsKicker}</p>
          <h2>{t.objectsTitle}</h2>
          <p>{t.objectsText}</p>
        </div>
        <div className="objectGrid">
          {DATA.filter((w) => w.format === "Painted Object").map((work) => <WorkCard key={work.code} work={work} t={t} lang={lang} onOpen={() => setActive(work)} />)}
        </div>
      </section>

      <section className="special">
        <p className="kicker">{t.specialKicker}</p>
        <h2>{t.specialTitle}</h2>
        <p>{t.specialText}</p>
        <button className="secondary dark" onClick={() => scrollTo("contact")}>{t.heroButtonContact}</button>
      </section>

      <section className="artist" id="artist">
        <div className="artistImages">
          <img src="/images/truusje-portrait.jpg" alt="Truusje Lemahieu" />
          <img src="/images/archive-press.jpg" alt="Archive press" />
        </div>
        <div className="artistText">
          <p className="kicker">{t.aboutKicker}</p>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText1}</p>
          <p>{t.aboutText2}</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="kicker">{t.contactKicker}</p>
          <h2>{t.contactTitle}</h2>
          <div className="contactInfo">
            <p><span>{t.contactBelgium}</span><a href="tel:+32498134743">+32 498 13 47 43</a></p>
            <p><span>{t.contactVenezuela}</span><a href="tel:+584122591439">+58 412 259 1439</a></p>
            <p><span>{t.instagram}</span><a href="https://instagram.com/atelier.lemahieu">@atelier.lemahieu</a></p>
          </div>
        </div>
        <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
          <input placeholder={t.name} />
          <input placeholder={t.email} type="email" />
          <input placeholder={t.phone} />
          <input placeholder={t.country} />
          <input placeholder={t.codeOptional} />
          <select defaultValue="">
            <option value="" disabled>{t.interest}</option>
            <option>{lang === "en" ? "Purchasing an available original" : "Comprar una obra disponible"}</option>
            <option>{lang === "en" ? "Commissioning a work" : "Encargar una obra"}</option>
            <option>{lang === "en" ? "Special project" : "Proyecto especial"}</option>
          </select>
          <textarea placeholder={t.message} />
          <button className="primary" type="submit">{t.send}</button>
          <small>{t.confirmation}</small>
        </form>
      </section>

      <footer>
        <span>T. Lemahieu</span>
        <span>Original works · Painted by the artist · International inquiries</span>
      </footer>

      {active && <Lightbox work={active} t={t} lang={lang} onClose={() => setActive(null)} />}
    </main>
  );
}

function WorkCard({ work, t, onOpen }) {
  return (
    <article className="workCard">
      <button className="imageButton" onClick={onOpen} aria-label={`Open ${work.title}`}>
        <img src={work.image} alt={work.title} />
      </button>
      <div className="workInfo">
        <div className="chips"><span>{work.code}</span><span>{work.format}</span></div>
        <h3>{work.title}</h3>
        <p className="collectionName">{work.collection}</p>
        <p>{work.dimensions} · {work.technique}</p>
        <p>{work.units}</p>
        <div className="workBottom">
          <strong>{translateStatus(work.status, t)}</strong>
          <span>{displayPrice(work, t)}</span>
        </div>
        <button onClick={onOpen}>{t.open} →</button>
      </div>
    </article>
  );
}

function Lightbox({ work, t, onClose }) {
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightboxPanel" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>{t.close}</button>
        <img src={work.image} alt={work.title} />
        <div>
          <div className="chips"><span>{work.code}</span><span>{work.format}</span></div>
          <h3>{work.title}</h3>
          <p className="collectionName">{work.collection}</p>
          <p>{work.dimensions}</p>
          <p>{work.technique}</p>
          <p>{work.units}</p>
          <div className="workBottom large">
            <strong>{translateStatus(work.status, t)}</strong>
            <span>{displayPrice(work, t)}</span>
          </div>
          <a className="primary link" href="#contact" onClick={onClose}>{t.request}</a>
        </div>
      </div>
    </div>
  );
}
