"use client";

import React, { useEffect, useMemo, useState } from "react";

const works = [{"code": "PA-124", "title": "Chromatic Balance", "collection": "Pure Abstraction", "dimensions": "86 x 196 cm", "units": "1 pieza", "price": "$4.300", "technique": "Acrylic on canvas", "format": "Statement Work", "status": "Disponible", "image": "/images/available-pa-124.jpg"}, {"code": "RIT-056", "title": "Object of Pause", "collection": "Rituals", "dimensions": "70 x 80 cm", "units": "1 pieza", "price": "$2.000", "technique": "Acrylic on canvas", "format": "Signature Work", "status": "Disponible", "image": "/images/available-rit-056.jpg"}, {"code": "CAR-087", "title": "Blue Current", "collection": "Cardúmenes", "dimensions": "80 x 200 cm", "units": "1 pieza", "price": "$4.500", "technique": "Acrylic on canvas", "format": "Statement Work", "status": "Disponible", "image": "/images/available-car-087.jpg"}, {"code": "PA-139", "title": "Color Architecture", "collection": "Pure Abstraction", "dimensions": "100 x 240 cm", "units": "1 pieza", "price": "Private inquiry", "technique": "Acrylic on canvas", "format": "Monumental Work", "status": "Disponible", "image": "/images/available-pa-139.jpg"}, {"code": "CAR-092", "title": "Living Tide", "collection": "Cardúmenes", "dimensions": "100 x 240 cm", "units": "1 pieza", "price": "Private inquiry", "technique": "Acrylic on canvas", "format": "Monumental Work", "status": "Disponible", "image": "/images/available-car-092.jpg"}, {"code": "RIT-061", "title": "Ceremonial Table", "collection": "Rituals", "dimensions": "156 x 136 cm", "units": "1 pieza", "price": "$5.200", "technique": "Acrylic on canvas", "format": "Statement Work", "status": "Disponible", "image": "/images/available-rit-061.jpg"}, {"code": "PA-147", "title": "Vertical Balance", "collection": "Pure Abstraction", "dimensions": "160 x 80 cm", "units": "1 pieza", "price": "$3.700", "technique": "Acrylic on canvas", "format": "Statement Work", "status": "Disponible", "image": "/images/available-pa-147.jpg"}, {"code": "CAR-104", "title": "Collective Motion", "collection": "Cardúmenes", "dimensions": "140 x 225 cm", "units": "1 pieza", "price": "Private inquiry", "technique": "Acrylic on canvas", "format": "Monumental Work", "status": "Disponible", "image": "/images/available-car-104.jpg"}, {"code": "RIT-073", "title": "The Gathering", "collection": "Rituals", "dimensions": "77 x 100 cm", "units": "1 pieza", "price": "$2.400", "technique": "Acrylic on canvas", "format": "Signature Work", "status": "Disponible", "image": "/images/available-rit-073.jpg"}, {"code": "RIT-079", "title": "The Red Vessel", "collection": "Rituals", "dimensions": "140 x 190 cm", "units": "1 pieza", "price": "Private inquiry", "technique": "Acrylic on canvas", "format": "Monumental Work", "status": "Disponible", "image": "/images/available-rit-079.jpg"}, {"code": "RIT-084", "title": "Small Rituals", "collection": "Rituals", "dimensions": "32 x 24 cm", "units": "Set 3 piezas", "price": "$900", "technique": "Técnicas mixtas sobre papel", "format": "Intimate Work", "status": "Commission reference", "image": "/images/intimate-rit-146.jpg"}, {"code": "CAR-118", "title": "Architectural Current", "collection": "Cardúmenes", "dimensions": "—", "units": "1 pieza", "price": "Private inquiry", "technique": "Acrylic on canvas", "format": "Monumental Work", "status": "Commission reference", "image": "/images/work-large-blue.jpg"}, {"code": "PA-152", "title": "Open Rhythm", "collection": "Pure Abstraction", "dimensions": "—", "units": "1 pieza", "price": "Private inquiry", "technique": "Acrylic on canvas", "format": "Monumental Work", "status": "Commission reference", "image": "/images/work-xl.jpg"}, {"code": "PA-166", "title": "Collected Balance", "collection": "Pure Abstraction", "dimensions": "31 x 21 cm", "units": "Set 10 piezas", "price": "$3.200", "technique": "Acrílico sobre madera", "format": "Intimate Work", "status": "Commission reference", "image": "/images/set-composition-10.jpg"}, {"code": "PA-171", "title": "Three Forms", "collection": "Pure Abstraction", "dimensions": "28 x 28 cm", "units": "Set 3 piezas", "price": "$600", "technique": "Acrylic on canvas", "format": "Intimate Work", "status": "Commission reference", "image": "/images/set-3.jpg"}, {"code": "PA-184", "title": "Two Gestures", "collection": "Pure Abstraction", "dimensions": "32 x 24 cm", "units": "Set 2 piezas", "price": "$700", "technique": "Técnicas mixtas sobre papel", "format": "Intimate Work", "status": "Commission reference", "image": "/images/set-2-pieces.jpg"}, {"code": "RIT-091", "title": "Domestic Pair", "collection": "Rituals", "dimensions": "—", "units": "Set 2 piezas", "price": "$600", "technique": "Técnicas mixtas sobre papel", "format": "Intimate Work", "status": "Commission reference", "image": "/images/intimate-rit-103.jpg"}, {"code": "CAR-126", "title": "Blue Gathering", "collection": "Cardúmenes", "dimensions": "60 x 40 cm", "units": "1 pieza", "price": "$1.400", "technique": "Acrylic on canvas", "format": "Signature Work", "status": "Commission reference", "image": "/images/car-126.jpg"}, {"code": "PA-193", "title": "Green Threshold", "collection": "Pure Abstraction", "dimensions": "—", "units": "1 pieza", "price": "$2.200", "technique": "Acrylic on canvas", "format": "Signature Work", "status": "Disponible", "image": "/images/medium-bench.jpg"}, {"code": "CAR-132", "title": "A Field in Motion", "collection": "Cardúmenes", "dimensions": "—", "units": "1 pieza", "price": "$4.800", "technique": "Acrylic on canvas", "format": "Statement Work", "status": "Commission reference", "image": "/images/large-corner.jpg"}, {"code": "PA-201", "title": "Tropical Structure", "collection": "Pure Abstraction", "dimensions": "—", "units": "1 pieza", "price": "$4.200", "technique": "Acrylic on canvas", "format": "Statement Work", "status": "Commission reference", "image": "/images/large-premium-living.jpg"}, {"code": "PA-214", "title": "Small Color Wall", "collection": "Pure Abstraction", "dimensions": "28 x 28 cm", "units": "Set 5 piezas", "price": "$2.200", "technique": "Acrylic on canvas", "format": "Intimate Work", "status": "Commission reference", "image": "/images/set-5.jpg"}, {"code": "RIT-103", "title": "Cup, Bowl, Gesture", "collection": "Rituals", "dimensions": "22 x 22 cm", "units": "Set 2 piezas", "price": "$600", "technique": "Técnicas mixtas sobre papel", "format": "Intimate Work", "status": "Disponible", "image": "/images/intimate-rit-103.jpg"}, {"code": "PA-227", "title": "Paper Gesture", "collection": "Pure Abstraction", "dimensions": "32 x 24 cm", "units": "Set 2 piezas", "price": "$700", "technique": "Técnicas mixtas sobre papel", "format": "Intimate Work", "status": "Disponible", "image": "/images/cf-128.jpg"}, {"code": "RIT-117", "title": "Quiet Object", "collection": "Rituals", "dimensions": "32 x 24 cm", "units": "1 pieza", "price": "$350", "technique": "Técnicas mixtas sobre papel", "format": "Intimate Work", "status": "Disponible", "image": "/images/intimate-rit-117.jpg"}, {"code": "RIT-124", "title": "Ritual Sequence", "collection": "Rituals", "dimensions": "32 x 24 cm", "units": "Set 4 piezas", "price": "$1.200", "technique": "Técnicas mixtas sobre papel", "format": "Intimate Work", "status": "Disponible", "image": "/images/intimate-rit-124.jpg"}, {"code": "RIT-138", "title": "Ritual Pair", "collection": "Rituals", "dimensions": "32 x 24 cm", "units": "Set 2 piezas", "price": "$700", "technique": "Técnicas mixtas sobre papel", "format": "Intimate Work", "status": "Disponible", "image": "/images/intimate-rit-138.jpg"}, {"code": "CAR-141", "title": "Current Pair I", "collection": "Cardúmenes", "dimensions": "32 x 24 cm", "units": "Set 2 piezas", "price": "$700", "technique": "Técnicas mixtas sobre papel", "format": "Intimate Work", "status": "Disponible", "image": "/images/intimate-car-141.jpg"}, {"code": "CAR-154", "title": "Current Pair II", "collection": "Cardúmenes", "dimensions": "32 x 24 cm", "units": "Set 2 piezas", "price": "$700", "technique": "Técnicas mixtas sobre papel", "format": "Intimate Work", "status": "Disponible", "image": "/images/intimate-car-154.jpg"}, {"code": "CAR-169", "title": "Three Currents", "collection": "Cardúmenes", "dimensions": "32 x 24 cm", "units": "Set 3 piezas", "price": "$900", "technique": "Técnicas mixtas sobre papel", "format": "Intimate Work", "status": "Disponible", "image": "/images/intimate-car-169.jpg"}, {"code": "RIT-146", "title": "Ritual Trio", "collection": "Rituals", "dimensions": "32 x 24 cm", "units": "Set 3 piezas", "price": "$900", "technique": "Técnicas mixtas sobre papel", "format": "Intimate Work", "status": "Disponible", "image": "/images/intimate-rit-146.jpg"}, {"code": "CF-041", "title": "Fragments in Dialogue", "collection": "Collected Fragments", "dimensions": "20 x 20 cm", "units": "Set 2 piezas", "price": "$450", "technique": "Collage", "format": "Intimate Work", "status": "Disponible", "image": "/images/cf-041.jpg"}, {"code": "CF-064", "title": "Layered Fragment I", "collection": "Collected Fragments", "dimensions": "20 x 20 cm", "units": "1 pieza", "price": "$250", "technique": "Collage", "format": "Intimate Work", "status": "Disponible", "image": "/images/cf-064.jpg"}, {"code": "CF-078", "title": "Layered Fragment II", "collection": "Collected Fragments", "dimensions": "20 x 20 cm", "units": "1 pieza", "price": "$250", "technique": "Collage", "format": "Intimate Work", "status": "Disponible", "image": "/images/cf-078.jpg"}, {"code": "CF-083", "title": "Layered Fragment III", "collection": "Collected Fragments", "dimensions": "20 x 20 cm", "units": "1 pieza", "price": "$250", "technique": "Collage", "format": "Intimate Work", "status": "Disponible", "image": "/images/cf-083.jpg"}, {"code": "CF-097", "title": "Layered Fragment IV", "collection": "Collected Fragments", "dimensions": "20 x 20 cm", "units": "1 pieza", "price": "$250", "technique": "Collage", "format": "Intimate Work", "status": "Disponible", "image": "/images/cf-097.jpg"}, {"code": "CF-105", "title": "Layered Fragment V", "collection": "Collected Fragments", "dimensions": "20 x 20 cm", "units": "1 pieza", "price": "$250", "technique": "Collage", "format": "Intimate Work", "status": "Disponible", "image": "/images/cf-105.jpg"}, {"code": "CF-116", "title": "Layered Fragment VI", "collection": "Collected Fragments", "dimensions": "20 x 20 cm", "units": "1 pieza", "price": "$250", "technique": "Collage", "format": "Intimate Work", "status": "Disponible", "image": "/images/cf-116.jpg"}, {"code": "CF-128", "title": "Cut Surface Pair", "collection": "Collected Fragments", "dimensions": "22 x 16 cm", "units": "Set 2 piezas", "price": "$450", "technique": "Collage", "format": "Intimate Work", "status": "Disponible", "image": "/images/cf-128.jpg"}, {"code": "CF-196", "title": "Grey Shoals", "collection": "Collected Fragments", "dimensions": "22 x 16 cm", "units": "Set 2 piezas", "price": "$450", "technique": "Collage sobre lienzo", "format": "Intimate Work", "status": "Disponible", "image": "/images/cf-196.jpg"}, {"code": "CF-152", "title": "Tiny Fragments", "collection": "Collected Fragments", "dimensions": "10 x 10 cm", "units": "Set 2 piezas", "price": "$250", "technique": "Collage", "format": "Intimate Work", "status": "Commission reference", "image": "/images/cf-152.jpg"}];
const setIntro = {"code": "SET-CF", "title": "Collected Fragments as Sets", "collection": "Collected Fragments", "dimensions": "20 x 20 cm pieces", "units": "Sets available", "price": "From $450", "technique": "Collage", "format": "Intimate Work", "status": "Composition reference", "image": "/images/cf-170.jpg", "description": "A reference view showing how individual Collected Fragments can be composed as a wall grouping. Individual works and sets are offered according to availability."};
const paintedObjects = [{"code": "OBJ-060", "title": "The Rewritten Chair", "collection": "Cardúmenes", "dimensions": "—", "units": "1 pieza", "price": "$3.200", "technique": "Acrílico sobre tela", "format": "Painted Object", "status": "Disponible", "image": "/images/object-chair-pending.jpg", "description": "Unique hand-painted chair transformed into a collectible painted object. Photo pending in this website package."}, {"code": "OBJ-048", "title": "The Indoor Mountain", "collection": "Pure Abstraction", "dimensions": "—", "units": "1 pieza", "price": "Private inquiry", "technique": "Acrílico sobre madera", "format": "Painted Object", "status": "Commission reference", "image": "/images/object-indoor-mountain.jpg", "description": "Hand-painted folding screen in acrylic, inspired by El Ávila, Caracas."}];
const collections = [{"name": "Cardúmenes", "tagline": "Shoals, currents and collective movement.", "desc": "More than a representation of the sea, Cardúmenes explores movement as a collective force. Direction, synchronicity, abundance and rhythm move through the composition, creating a sense of life in motion.", "image": "/images/available-car-104.jpg"}, {"name": "Rituals", "tagline": "Objects, pause and ceremony.", "desc": "In Rituals, objects detach from their everyday function and take on a ceremonial presence. Forms flatten, expand and overlap between the recognizable and the abstract.", "image": "/images/available-rit-061.jpg"}, {"name": "Pure Abstraction", "tagline": "Color, light, depth and balance.", "desc": "Abstraction becomes a language of its own. Free, recurring and unmistakably personal forms emerge through color, light and depth, while each gesture holds its place within a search for equilibrium.", "image": "/images/available-pa-139.jpg"}, {"name": "Collected Fragments", "tagline": "Small works, cut surfaces and layered memory.", "desc": "Collected Fragments brings together small-format works built through intuition, cutting and layering. They invite a closer, quieter and more detailed entrance into the artist’s universe.", "image": "/images/cf-041.jpg"}];
const formats = [{"name": "Intimate Works", "short": "Small-scale works and curated sets for personal, layered spaces.", "fromp": "From $250", "key": "Intimate Work"}, {"name": "Signature Works", "short": "Medium-format pieces with a distinct visual identity.", "fromp": "From $2.000", "key": "Signature Work"}, {"name": "Statement Works", "short": "Large-scale works designed to anchor a room.", "fromp": "From $3.700", "key": "Statement Work"}, {"name": "Monumental Works", "short": "Oversized works with architectural presence.", "fromp": "From $6.000", "key": "Monumental Work"}, {"name": "Painted Objects", "short": "Functional pieces transformed through painting.", "fromp": "Private inquiry", "key": "Painted Object"}];
const catalogueItems = [...works, setIntro];
const allItems = [...catalogueItems, ...paintedObjects];

const statusLabel = (status) => status === "Disponible" ? "Available" : status;

export default function TruusjeWebsite() {
  const [active, setActive] = useState(null);
  const [collectionFilter, setCollectionFilter] = useState("All");
  const [formatFilter, setFormatFilter] = useState("All");

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("on")), { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setActive(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const groupedWorks = useMemo(() => collections.map((c) => ({
    ...c,
    items: catalogueItems.filter((w) => w.collection === c.name)
  })), []);

  const filteredWorks = useMemo(() => allItems.filter((w) => 
    (collectionFilter === "All" || w.collection === collectionFilter) && 
    (formatFilter === "All" || w.format === formatFilter)
  ), [collectionFilter, formatFilter]);

  const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const setCollection = (name) => { setCollectionFilter(name); setFormatFilter("All"); setTimeout(() => scrollToId("catalogue"), 80); };
  const setFormat = (key) => { setFormatFilter(key); setCollectionFilter("All"); setTimeout(() => scrollToId("catalogue"), 80); };

  return (
    <main className="site">
      <nav className="nav">
        <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>T. Lemahieu</button>
        <div className="nav-links">
          <button onClick={() => scrollToId("collections")}>Collections</button>
          <button onClick={() => scrollToId("formats")}>Formats</button>
          <button onClick={() => scrollToId("catalogue")}>Works</button>
          <button onClick={() => scrollToId("objects")}>Objects</button>
          <button onClick={() => scrollToId("about")}>Artist</button>
          <button onClick={() => scrollToId("contact")}>Contact</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content reveal on">
          <p className="eyebrow">Belgian artist · Venezuelan soul</p>
          <h1>Two worlds,<br /><em>one brush.</em></h1>
          <p>Original abstract works shaped through color, light, depth and balance — from intimate collectible pieces to monumental works with architectural presence.</p>
          <div className="cta-row">
            <button className="btn-primary" onClick={() => scrollToId("collections")}>Browse by collection</button>
            <button className="btn-outline" onClick={() => scrollToId("formats")}>Browse by format</button>
          </div>
        </div>
        <button className="hero-card" onClick={() => setActive(works.find(w => w.code === "CAR-104"))}><img src="/images/available-car-104.jpg" alt="Cardúmenes artwork" /></button>
      </section>

      <section className="intro-strip premium-note">
        <p>Each piece is a unique original, painted by the artist as a singular work — created for collectors, interiors and spaces where art is meant to hold presence.</p>
      </section>

      <section id="collections" className="section collections-intro reveal">
        <div className="section-head">
          <div><p className="label">Browse by Collection</p><h2>Enter through the artist’s visual territories.</h2></div>
          <p>The work of T. Lemahieu is born from a deep relationship with color, light, depth and balance. Each collection opens a territory of its own, where the eye enters, moves through and lingers.</p>
        </div>
        <div className="collection-cards">
          {collections.map((c) => <button key={c.name} className="collection-card" onClick={() => setCollection(c.name)}>
            <img src={c.image} alt={c.name} />
            <div><span>{c.name}</span><h3>{c.tagline}</h3><p>{c.desc}</p><small>View works →</small></div>
          </button>)}
        </div>
      </section>

      <section className="section collection-groups reveal">
        <p className="label">Works by Collection</p>
        <h2>A curated view of the current universe.</h2>
        <div className="group-stack">
          {groupedWorks.map((group) => <div className="collection-group" key={group.name}>
            <div className="group-head">
              <div><h3>{group.name}</h3><p>{group.tagline}</p></div>
              <button onClick={() => setCollection(group.name)}>Open collection →</button>
            </div>
            <div className="mini-grid">
              {group.items.slice(0, 6).map((work) => <WorkCard key={work.code + work.title} work={work} onOpen={() => setActive(work)} compact />)}
            </div>
          </div>)}
        </div>
      </section>

      <section id="formats" className="section formats reveal">
        <p className="label">Browse by Format</p>
        <h2>Discover available works by scale.</h2>
        <p className="lead">From intimate collectible pieces to large-scale statement works for interiors, private collections and architectural spaces.</p>
        <div className="format-grid">
          {formats.map((f) => <button key={f.name} className="format-tile" onClick={() => setFormat(f.key)}>
            <span>{f.name}</span><p>{f.short}</p><strong>{f.fromp}</strong><small>View this format →</small>
          </button>)}
        </div>
      </section>

      <section id="catalogue" className="section catalogue reveal">
        <div className="section-head">
          <div><p className="label">Available Works</p><h2>{collectionFilter === "All" && formatFilter === "All" ? "Current selection" : collectionFilter !== "All" ? collectionFilter : formatFilter}</h2></div>
          <p>Click any image to open it in large view with code, collection, dimensions, technique, format, availability and inquiry details.</p>
        </div>
        <div className="filters">
          <div><span>Collection</span>{["All", ...collections.map(c => c.name)].map((c) => <button key={c} className={collectionFilter === c ? "active" : ""} onClick={() => { setCollectionFilter(c); setFormatFilter("All"); }}>{c}</button>)}</div>
          <div><span>Format</span>{["All", ...formats.map(f => f.key)].map((f) => <button key={f} className={formatFilter === f ? "active" : ""} onClick={() => { setFormatFilter(f); setCollectionFilter("All"); }}>{f === "All" ? "All" : f.replace(" Work", "")}</button>)}</div>
        </div>
        <div className="work-grid">
          {filteredWorks.map((work) => <WorkCard key={work.code + work.title} work={work} onOpen={() => setActive(work)} />)}
        </div>
      </section>

      <section id="objects" className="section objects reveal">
        <div className="section-head"><div><p className="label">Painted Objects</p><h2>Functional pieces transformed through painting.</h2></div><p>Each object is conceived as a unique painted surface: chairs, screens and domestic forms transformed into collectible works.</p></div>
        <div className="object-grid">{paintedObjects.map((obj) => <WorkCard key={obj.code} work={obj} onOpen={() => setActive(obj)} />)}</div>
      </section>

      <section className="section special-projects reveal">
        <p className="label">Special Projects</p>
        <h2>For private interiors, architectural spaces and bespoke commissions.</h2>
        <p>Beyond available works, the studio may develop selected special projects: a painted object, a large-scale commission, a site-specific series, or a composition designed in dialogue with a particular interior. Each proposal is approached as a singular artistic project, with attention to scale, atmosphere, placement and the collector’s vision.</p>
        <button className="btn-dark" onClick={() => scrollToId("contact")}>Discuss a special project →</button>
      </section>

      <section id="about" className="about">
        <div className="about-img"><img src="/images/truusje-portrait.jpg" alt="Truusje Lemahieu" /></div>
        <div className="about-copy reveal"><p className="label">The Artist</p><h2>Born in Belgium. Shaped by Venezuela.</h2><p>Truusje Lemahieu studied Fine Arts in Bruges, Paris and Brussels before leaving for Venezuela at 22, where she would spend the next four decades. Color was always central to her language; in the tropics, that instinct found its natural scale, light and intensity.</p><blockquote>“Her work carries a dialogue between European structure and tropical presence: gesture, rhythm, balance and instinct.”</blockquote><p>Today, based again in Belgium, she continues to create unique original works that carry both worlds in every brushstroke.</p></div>
      </section>

      <section id="contact" className="contact">
        <div><p className="label">Inquiries</p><h2>Request pricing & availability.</h2><p>For large and special works, pricing is handled by private inquiry so the studio can share availability, placement details and commission options.</p></div>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="WhatsApp / Phone" />
          <input placeholder="Country / City" />
          <input placeholder="Artwork code of interest (optional)" />
          <select defaultValue=""><option value="" disabled>Purchasing, commissioning or more information?</option><option>Purchasing</option><option>Commissioning</option><option>Special project</option><option>More information</option></select>
          <textarea placeholder="Message" />
          <button type="button" className="btn-primary">Send inquiry →</button>
          <p className="thanks">Thank you for your inquiry. The studio will contact you shortly with pricing, availability and placement details.</p>
        </form>
      </section>

      <footer><div>T. Lemahieu</div><span>Abstract Fine Art</span></footer>

      {active && <Lightbox work={active} onClose={() => setActive(null)} />}
    </main>
  );
}

function WorkCard({ work, onOpen, compact }) {
  const isMonumental = work.format === "Monumental Work";
  return <article className={compact ? "work-card compact" : "work-card"}>
    <button className="work-img" onClick={onOpen}><img src={work.image} alt={work.title} /></button>
    <div className="work-meta">
      <div className="tag-row"><span>{work.code}</span><span>{work.format}</span></div>
      <h3>{work.title}</h3>
      <p>{work.collection}</p>
      <p>{work.dimensions} · {work.technique}</p>
      <p>{work.units}</p>
      <div className="status"><strong>{statusLabel(work.status)}</strong><em>{isMonumental ? "Private inquiry" : work.price}</em></div>
      <button onClick={onOpen}>Open details →</button>
    </div>
  </article>;
}

function Lightbox({ work, onClose }) {
  const isMonumental = work.format === "Monumental Work";
  return <div className="lightbox" role="dialog" aria-modal="true">
    <button className="shade" onClick={onClose} aria-label="Close" />
    <div className="lightbox-card">
      <button className="close" onClick={onClose}>×</button>
      <div className="lightbox-img"><img src={work.image} alt={work.title} /></div>
      <div className="lightbox-info"><p className="label">{work.collection}</p><h2>{work.title}</h2><dl><dt>Code</dt><dd>{work.code}</dd><dt>Dimensions</dt><dd>{work.dimensions}</dd><dt>Units</dt><dd>{work.units}</dd><dt>Technique</dt><dd>{work.technique}</dd><dt>Format</dt><dd>{work.format}</dd><dt>Availability</dt><dd>{statusLabel(work.status)}</dd><dt>Price</dt><dd>{isMonumental ? "Private inquiry" : work.price}</dd></dl>{work.description && <p>{work.description}</p>}<a href="#contact" onClick={onClose}>Request pricing & availability →</a></div>
    </div>
  </div>;
}
