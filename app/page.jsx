"use client";

import React, { useEffect, useState } from "react";

const availableWorks = [
  {
    title: "Available Work 01",
    format: "Statement",
    collection: "Rituals",
    dimensions: "86 × 196 cm",
    status: "Available",
    price: "Price upon request",
    image: "/images/available-01.jpg",
  },
  {
    title: "Available Work 02",
    format: "Signature",
    collection: "Rituals",
    dimensions: "70 × 80 cm",
    status: "Available",
    price: "Price upon request",
    image: "/images/available-02.jpg",
  },
  {
    title: "Available Work 03",
    format: "Statement",
    collection: "Cardúmenes",
    dimensions: "80 × 200 cm",
    status: "Available",
    price: "Price upon request",
    image: "/images/available-03.jpg",
  },
  {
    title: "Available Work 04",
    format: "Monumental",
    collection: "Pure Abstraction",
    dimensions: "100 × 240 cm",
    status: "Available",
    price: "Price upon request",
    image: "/images/available-04.jpg",
  },
  {
    title: "Available Work 05",
    format: "Monumental",
    collection: "Cardúmenes",
    dimensions: "100 × 240 cm",
    status: "Available",
    price: "Price upon request",
    image: "/images/available-05.jpg",
  },
  {
    title: "Available Work 06",
    format: "Statement",
    collection: "Rituals",
    dimensions: "156 × 136 cm",
    status: "Available",
    price: "Price upon request",
    image: "/images/available-06.jpg",
  },
  {
    title: "Available Work 07",
    format: "Statement",
    collection: "Rituals",
    dimensions: "160 × 80 cm",
    status: "Available",
    price: "Price upon request",
    image: "/images/available-07.jpg",
  },
  {
    title: "Available Work 08",
    format: "Monumental",
    collection: "Cardúmenes",
    dimensions: "140 × 225 cm",
    status: "Available",
    price: "Price upon request",
    image: "/images/available-08.jpg",
  },
  {
    title: "Available Work 09",
    format: "Signature",
    collection: "Rituals",
    dimensions: "77 × 100 cm",
    status: "Available",
    price: "Price upon request",
    image: "/images/available-09.jpg",
  },
  {
    title: "Available Work 10",
    format: "Statement",
    collection: "Cacao",
    dimensions: "140 × 190 cm",
    status: "Available",
    price: "Price upon request",
    image: "/images/available-10.jpg",
  }
];

const featuredWorks = [
  {
    title: "Blue Current",
    format: "Monumental",
    collection: "Cardúmenes",
    dimensions: "Grand format",
    status: "Commission reference",
    price: "Price upon request",
    image: "/images/work-xl.jpg",
  },
  {
    title: "Chromatic Living Room",
    format: "Statement",
    collection: "Pure Abstraction",
    dimensions: "Large format",
    status: "Commission reference",
    price: "Price upon request",
    image: "/images/large-premium-living.jpg",
  },
  {
    title: "Caribbean Pulse",
    format: "Statement",
    collection: "Cardúmenes",
    dimensions: "Large format",
    status: "Commission reference",
    price: "Price upon request",
    image: "/images/work-large-blue.jpg",
  },
  {
    title: "Green Rhythm",
    format: "Signature",
    collection: "Pure Abstraction",
    dimensions: "Medium format",
    status: "Commission reference",
    price: "Price upon request",
    image: "/images/medium-bench.jpg",
  },
  {
    title: "Black & White Set",
    format: "Intimate",
    collection: "Collected Fragments",
    dimensions: "Curated set",
    status: "Commission reference",
    price: "Price upon request",
    image: "/images/set-composition-10.jpg",
  },
];

const allWorks = [...availableWorks, ...featuredWorks];

const formats = [
  {
    name: "Intimate",
    subtitle: "Collected small-scale works for personal, layered spaces.",
    desc: "Small-scale works and curated sets, designed for personal spaces, layered walls, and collectors beginning or expanding a collection.",
    img: "/images/mini-bedroom.jpg",
    meta: "Small works · curated sets · close-view pieces",
    best: "Bedrooms, corridors, intimate walls, gifts, first acquisitions."
  },
  {
    name: "Signature",
    subtitle: "Medium-format pieces with a distinct visual identity.",
    desc: "Medium-format pieces with strong visual identity, offering presence and balance within refined interiors.",
    img: "/images/available-02.jpg",
    meta: "Medium originals · balanced focal points",
    best: "Reading corners, entrances, offices, bedrooms, refined interiors."
  },
  {
    name: "Statement",
    subtitle: "Large-scale works designed to anchor a room.",
    desc: "Large-scale works designed to anchor a room, create focus, and bring expressive energy into a space.",
    img: "/images/available-01.jpg",
    meta: "Large originals · available or commissioned",
    best: "Living rooms, dining rooms, hospitality spaces, collector walls."
  },
  {
    name: "Monumental",
    subtitle: "Oversized works with architectural presence.",
    desc: "Oversized works with architectural presence, conceived as commanding focal points for expansive interiors.",
    img: "/images/available-05.jpg",
    meta: "Oversized works · made by commission",
    best: "Lobbies, hotels, expansive homes, architectural walls."
  }
];

const collections = [
  {
    name: "Pure Abstraction",
    short: "Abstraction becomes a language of its own: free, recurring, and unmistakably personal forms emerge through color, light, and depth.",
    desc: "In Pure Abstraction, abstraction becomes a language of its own. Free, recurring, and unmistakably personal forms emerge through color, light, and depth, creating compositions that do not need to represent in order to hold presence. Each work exists through its own visual force. The eye enters a territory of gestures, planes, and forms that belong to the most essential universe of T. Lemahieu. Beneath the apparent freedom of the composition lies a precise balance, where every brushstroke is placed with intention.",
    colors: ["#1A2B4A","#1D8C75","#E8553A","#C8922A"],
    imgs: ["/images/available-04.jpg","/images/large-premium-living.jpg"],
    cta: "Ask about Pure Abstraction"
  },
  {
    name: "Cardúmenes",
    short: "A study of movement as collective force: direction, synchronicity, abundance, and rhythm moving through the composition.",
    desc: "More than a representation of the sea, Cardúmenes explores movement as a collective force. Direction, synchronicity, abundance, and rhythm move through the composition, creating a sense of life in motion. Brushstrokes gather like living particles, shaping surfaces that seem to open inward. The eye moves through layers of color and light, as if entering a current. Each work offers an immersion, a space in flow where new planes, new depths, and a constant vibration of life begin to appear.",
    colors: ["#0D1B2E","#1A3461","#1D8C75","#2BA88A"],
    imgs: ["/images/available-05.jpg","/images/available-08.jpg"],
    cta: "Ask about Cardúmenes"
  },
  {
    name: "Rituals",
    short: "Objects detach from everyday function and take on a ceremonial presence between the recognizable and the abstract.",
    desc: "In Rituals, objects detach from their everyday function and take on a ceremonial presence. The artist shifts perspective, crosses planes, and brings different points of view into a single composition. Forms flatten, expand, overlap, and become sculptural. Between the recognizable and the abstract, color intensifies the emotion of each element, light builds atmosphere, and depth emerges from the tension between surface and space. The everyday ceases to be ordinary and becomes pause, gathering, presence, and ceremony.",
    colors: ["#C2185B","#E8553A","#C8922A","#5C3A1E"],
    imgs: ["/images/available-06.jpg","/images/available-09.jpg"],
    cta: "Ask about Rituals"
  },
  {
    name: "Cacao",
    short: "An exploration of origin, connection, and the sensitive memory of the Caribbean.",
    desc: "Cacao begins as an exploration of origin, connection, and the sensitive memory of the Caribbean. It is a collection shaped by warmth, familiarity, and the emotional force of the tropical. It does not approach the Caribbean as a literal image, but as an intimate presence: an atmosphere of color, light, closeness, and belonging. In these works, cacao becomes a meeting point between memory, affection, and territory.",
    colors: ["#5C3A1E","#8B5A2B","#C8922A","#E8553A"],
    imgs: ["/images/available-10.jpg","/images/set-3.jpg"],
    cta: "Request a Cacao commission"
  },
  {
    name: "Collected Fragments",
    short: "Small-format works built through intuition, cutting, layering, archive, fragment, and recomposition.",
    desc: "Collected Fragments brings together small-format works built through intuition, cutting, and layering. They are intimate and tactile pieces, close to the gesture of archive, fragment, and recomposition. Depth appears through the relationship between layers of paper, color, texture, cuts, encounters, accidents, and intuitive decisions. Through their scale, each piece invites a closer, more private gaze, a quieter and more detailed entrance into the artist’s universe.",
    colors: ["#1C1C1C","#FAF7F2","#C2185B","#C8922A"],
    imgs: ["/images/set-composition-10.jpg","/images/mini-bedroom.jpg"],
    cta: "Ask about Collected Fragments"
  }
];

const archive = [
  ["99","Metro feature","Belgium · Press archive","Press","/images/archive-press.jpg"],
  ["Studio","Large-scale work in progress","Artist studio","Process","/images/archive-studio.jpg"],
  ["Now","Artist at work","Detail and signature","Studio","/images/truusje-portrait.jpg"]
];

export default function TruusjeWebsite() {
  const [format, setFormat] = useState("All");
  const [collection, setCollection] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("on");
    }), { threshold: 0.08 });
    document.querySelectorAll(".fu").forEach((el) => observer.observe(el));

    const cursor = document.getElementById("cursor-dot");
    const moveCursor = (e) => { if (cursor) { cursor.style.left = `${e.clientX}px`; cursor.style.top = `${e.clientY}px`; } };
    const hoverables = document.querySelectorAll("a,button,.work-card,.format-card,.collection-panel,.arch-card,.hero-art-card");
    const grow = () => cursor?.classList.add("big");
    const shrink = () => cursor?.classList.remove("big");
    document.addEventListener("mousemove", moveCursor);
    hoverables.forEach((el) => { el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", shrink); });
    return () => {
      observer.disconnect();
      document.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((el) => { el.removeEventListener("mouseenter", grow); el.removeEventListener("mouseleave", shrink); });
    };
  }, []);

  const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const goFormat = (name) => { setFormat(name); setCollection("All"); setTimeout(() => scrollToId("works"), 50); };
  const goCollection = (name) => { setCollection(name); setFormat("All"); setTimeout(() => scrollToId("works"), 50); };

  const visibleWorks = allWorks.filter((w) => {
    const formatMatch = format === "All" || w.format === format;
    const collectionMatch = collection === "All" || w.collection === collection;
    return formatMatch && collectionMatch;
  });

  return (
    <main className="site">
      <div className="cursor-dot" id="cursor-dot" />

      <nav className="nav">
        <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Truusje Lemahieu</button>
        <div className="nav-links">
          <button onClick={() => scrollToId("works")}>Works</button>
          <button onClick={() => scrollToId("formats")}>Formats</button>
          <button onClick={() => scrollToId("collections")}>Collections</button>
          <button onClick={() => scrollToId("about")}>Artist</button>
          <button onClick={() => scrollToId("contact")}>Contact</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="orbs"><div className="orb o1" /><div className="orb o2" /><div className="orb o3" /><div className="orb o4" /></div>
        <div className="hero-content">
          <p className="eyebrow">Belgian artist · Venezuelan soul</p>
          <h1 className="hero-title">Two worlds,<br /><em>one brush.</em></h1>
          <p className="hero-sub">Abstract works built through color, light, depth, and balance — compositions where each brushstroke holds its place within a larger search for equilibrium.</p>
          <div className="cta-row">
            <button className="btn-primary" onClick={() => scrollToId("works")}>View available works →</button>
            <button className="btn-outline" onClick={() => scrollToId("formats")}>Find the right format</button>
          </div>
        </div>
        <div className="hero-art-card"><img src="/images/available-05.jpg" alt="Available monumental artwork by Truusje Lemahieu" /></div>
        <div className="scroll-hint"><div className="scroll-line" /><span>Scroll</span></div>
      </section>

      <section className="intro-strip"><p>Original works and commissions for private collectors, layered homes, refined interiors, hospitality spaces, and architectural walls.</p></section>

      <section className="sec works-section" id="works">
        <div className="fu">
          <div className="section-head">
            <div><div className="sec-label">Available & Featured Works</div><h2 className="sec-title">A first entrance into the artist’s universe.</h2></div>
            <p>Browse available pieces and selected commission references by format or collection. Each work can lead to availability details, pricing, or a tailored recommendation for a specific wall or space.</p>
          </div>
          <div className="filter-block">
            <div>
              <span>Format</span>
              <div className="work-filters">{["All","Intimate","Signature","Statement","Monumental"].map((item) => <button key={item} className={format === item ? "active" : ""} onClick={() => { setFormat(item); setCollection("All"); }}>{item}</button>)}</div>
            </div>
            <div>
              <span>Collection</span>
              <div className="work-filters">{["All","Pure Abstraction","Cardúmenes","Rituals","Cacao","Collected Fragments"].map((item) => <button key={item} className={collection === item ? "active" : ""} onClick={() => { setCollection(item); setFormat("All"); }}>{item}</button>)}</div>
            </div>
          </div>
          <div className="works-grid">{visibleWorks.map((work) => <WorkCard key={work.title} work={work} onContact={() => scrollToId("contact")} />)}</div>
        </div>
      </section>

      <section className="formats-section" id="formats">
        <div className="fu">
          <div className="sec-label">Works by Format</div>
          <h2 className="sec-title">Choose by scale, space, and presence.</h2>
          <p className="format-intro">Format is not only a matter of size. It defines how the work enters a room: quietly, rhythmically, decisively, or architecturally.</p>
          <div className="format-grid">{formats.map((f) => <FormatCard key={f.name} f={f} onClick={() => goFormat(f.name)} />)}</div>
        </div>
      </section>

      <section className="collections-section" id="collections">
        <div className="fu">
          <div className="sec-label">Collections</div>
          <h2 className="sec-title">Territories of color, light, depth, and balance.</h2>
          <p className="collections-intro">The work of T. Lemahieu is born from a deep relationship with color, light, depth, and balance. Her compositions create dimension through the layering of two-dimensional brushstrokes, carefully placed in relation to one another. Nothing is left to chance. Each gesture holds its place within a search for equilibrium, both vertical and horizontal.<br /><br />Color is never static in her work. It shifts, vibrates, and transforms according to the colors around it. Each collection opens a territory of its own, where the eye enters, moves through, and lingers.</p>
          <div className="collection-stack">{collections.map((c, i) => <CollectionPanel key={c.name} c={c} index={i} onExplore={() => goCollection(c.name)} onContact={() => scrollToId("contact")} />)}</div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-vis"><div className="about-photo-area real"><div className="photo-main"><img src="/images/truusje-portrait.jpg" alt="Truusje Lemahieu painting a large artwork" /></div><div className="photo-strip"><div className="photo-slot"><img src="/images/archive-press.jpg" alt="Press archive" /></div><div className="photo-slot"><img src="/images/archive-studio.jpg" alt="Studio archive" /></div><div className="photo-slot"><img src="/images/large-corner.jpg" alt="Artwork in interior" /></div></div></div></div>
        <div className="about-content fu">
          <div className="sec-label">The artist</div>
          <h2 className="sec-title">Born in Belgium.<br />Shaped by <em>Venezuela.</em></h2>
          <p className="about-bio">Truusje Lemahieu studied Fine Arts in Bruges, Paris and Brussels before leaving for Venezuela at 22 — where she would spend the next four decades. That choice defined her work entirely.</p>
          <blockquote className="about-quote">“I left Belgium with a European eye. Venezuela gave me colour I didn’t know existed.”</blockquote>
          <p className="about-bio">Her work carries a dialogue between European structure and tropical intensity: gesture, rhythm, color and instinct. Today, based again in Belgium, she paints daily — carrying both worlds in every brushstroke.</p>
          <div className="about-stats"><Stat n="40+" label="Years creating" /><Stat n="6" label="Countries exhibited" /><Stat n="50+" label="Exhibitions & shows" /><Stat n="Int’l" label="Shipping worldwide" /></div>
        </div>
      </section>

      <section id="archive" className="archive fu">
        <div className="sec-label">Selected history</div>
        <h2 className="sec-title">Archive</h2>
        <div className="archive-grid with-images">{archive.map(([year, venue, loc, type, image]) => <article className="arch-card image-card" key={venue}><img src={image} alt={venue} /><div className="arch-card-body"><div className="arch-year">{year}</div><h3>{venue}</h3><p>{loc}</p><span>{type}</span></div></article>)}</div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-l">
          <h2>Begin<br />with <em>a work.</em></h2>
          <div className="contact-detail"><ContactDetail label="Original works" value="Ask about availability, dimensions and pricing." /><ContactDetail label="Commissions" value="Create a work inspired by an existing piece, format or collection." /><ContactDetail label="Interior projects" value="Guidance for private homes, hospitality and architectural spaces." /><ContactDetail label="Instagram" value="@truusje.art" gold /></div>
        </div>
        <form className="contact-r fu">
          <Field label="Your name" type="text" /><Field label="Email" type="email" />
          <div className="fg"><label>I’m interested in</label><select defaultValue=""><option value="" disabled>—</option><option>Purchasing an available original</option><option>Commissioning a work inspired by an existing piece</option><option>Choosing the right format for my wall</option><option>Interior design / hospitality project</option><option>Requesting the catalogue</option></select></div>
          <div className="fg"><label>Message</label><textarea placeholder="Tell us about the work, wall, collection or format you are interested in." /></div>
          <button type="button" className="btn-send">Send inquiry →</button>
        </form>
      </section>

      <footer><div className="f-logo">T. Lemahieu</div><div>© 2026 Truusje Lemahieu</div><div className="f-links"><button>Instagram</button><button>Saatchi Art</button></div></footer>
    </main>
  );
}

function WorkCard({ work, onContact }) {
  return <article className="work-card"><div className="work-img"><img src={work.image} alt={work.title} /></div><div className="work-body"><div className="work-kicker">{work.format} · {work.collection}</div><h3>{work.title}</h3><p>{work.dimensions}</p><p>{work.status}</p><span>{work.price}</span><button onClick={onContact}>Inquire about this work →</button></div></article>;
}

function FormatCard({ f, onClick }) {
  return <article className="format-card"><div className="format-image"><img src={f.img} alt={`${f.name} format`} /></div><div className="format-copy"><p className="format-label">{f.subtitle}</p><h3>{f.name}</h3><p>{f.desc}</p><div className="format-meta"><span>{f.meta}</span><span>{f.best}</span></div><button onClick={onClick}>View {f.name} works →</button></div></article>;
}

function CollectionPanel({ c, index, onExplore, onContact }) {
  return <article className="collection-panel"><div className="collection-copy"><div className="collection-number">{String(index + 1).padStart(2, "0")}</div><h3>{c.name}</h3><p className="collection-short">{c.short}</p><p className="collection-long">{c.desc}</p><div className="palette">{c.colors.map((color) => <span key={color} style={{ background: color }} />)}</div><div className="collection-actions"><button onClick={onExplore}>View works in this collection →</button><button onClick={onContact}>Inquire →</button></div></div><div className="collection-works">{c.imgs.map((image) => <img key={image} src={image} alt={`${c.name} related work`} />)}</div></article>;
}

function Stat({ n, label }) { return <div><div className="stat-n">{n}</div><div className="stat-l">{label}</div></div>; }

function ContactDetail({ label, value, gold }) { return <><div className="c-label">{label}</div><div className={`c-val ${gold ? "gold" : ""}`}>{value}</div></>; }

function Field({ label, type }) { return <div className="fg"><label>{label}</label><input type={type} placeholder="—" /></div>; }
