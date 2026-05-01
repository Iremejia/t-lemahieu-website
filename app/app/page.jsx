"use client";

import { useEffect, useState } from "react";

const works = [
  { titleEn: "Deep Current", titleEs: "Corriente Profunda", meta: "Acrylic · 200 × 150 cm · XL", cat: "xl", span: "wide", art: "art1", priceEn: "From €4,500", priceEs: "Desde €4,500" },
  { titleEn: "Tropical Spiral", titleEs: "Espiral Tropical", meta: "Acrylic · 100 × 80 cm · Large", cat: "large", span: "tall", art: "art2", priceEn: "From €1,800", priceEs: "Desde €1,800" },
  { titleEn: "Origin I", titleEs: "Origen I", meta: "30 × 30 cm · Mini", cat: "mini", span: "square", art: "art3", priceEn: "Set of 5 from €1,200", priceEs: "Set de 5 desde €1,200" },
  { titleEn: "Origin II", titleEs: "Origen II", meta: "30 × 30 cm · Mini", cat: "mini", span: "square", art: "art4", priceEn: "Available as set", priceEs: "Disponible en set" },
  { titleEn: "Forest Rhythm", titleEs: "Ritmo de Selva", meta: "60 × 60 cm · Medium", cat: "medium", span: "square", art: "art5", priceEn: "From €900", priceEs: "Desde €900" },
  { titleEn: "Caribbean Light", titleEs: "Luz Caribe", meta: "Acrylic · 180 × 80 cm · Large", cat: "large", span: "long", art: "art6", priceEn: "From €3,200", priceEs: "Desde €3,200" },
  { titleEn: "Cacao I", titleEs: "Cacao I", meta: "80 × 100 cm · Cacao Series", cat: "cacao", span: "square", art: "art7", priceEn: "From €1,600", priceEs: "Desde €1,600" },
];

const archives = [
  ["93", "La Irreverencia del Color", "Galería Hollywood, Caracas", "Solo exhibition", "Exposición individual"],
  ["92", "Karl Ernst Osthaus Museum", "Hagen, Germany", "Group exhibition", "Exposición colectiva"],
  ["94", "Art Fair Miami", "Miami, USA", "International fair", "Feria internacional"],
  ["94", "International Exhibition", "Moscow, Russia", "International", "Internacional"],
  ["95", "Design Center Torre Humbolt", "Caracas, Venezuela", "Design & Art", "Diseño y Arte"],
  ["97", "Hilton Caracas", "Caracas, Venezuela", "Hospitality exhibition", "Exposición hotelera"],
];

function Copy({ lang, en, es }) { return <>{lang === "en" ? en : es}</>; }

export default function Page() {
  const [lang, setLang] = useState("en");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const move = (e) => { if (cursor) { cursor.style.left = e.clientX + "px"; cursor.style.top = e.clientY + "px"; } };
    const grow = () => cursor?.classList.add("big");
    const shrink = () => cursor?.classList.remove("big");
    document.addEventListener("mousemove", move);
    document.querySelectorAll("button,a,.work,.collection,.archive-card,.format").forEach(el => {
      el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", shrink);
    });
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); }), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => document.removeEventListener("mousemove", move);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const shown = works.filter(w => filter === "all" || w.cat === filter);

  return <main>
    <div className="cursor" />
    <nav className="nav">
      <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Truusje Lemahieu</button>
      <div className="navlinks">
        <button onClick={() => go("gallery")}><Copy lang={lang} en="Gallery" es="Galería" /></button>
        <button onClick={() => go("about")}><Copy lang={lang} en="About" es="Sobre ella" /></button>
        <button onClick={() => go("collections")}><Copy lang={lang} en="Collections" es="Colecciones" /></button>
        <button onClick={() => go("contact")}><Copy lang={lang} en="Contact" es="Contacto" /></button>
        <button className="lang" onClick={() => setLang(lang === "en" ? "es" : "en")}>{lang === "en" ? "ES" : "EN"}</button>
      </div>
    </nav>

    <section className="hero">
      <div className="orbs"><i/><i/><i/><i/></div>
      <div className="heroText reveal show">
        <p className="eyebrow"><Copy lang={lang} en="Belgian artist · Venezuelan soul" es="Artista belga · Alma venezolana" /></p>
        <h1><Copy lang={lang} en={<><span>Two worlds,</span><em>one brush.</em></>} es={<><span>Dos mundos,</span><em>un pincel.</em></>} /></h1>
        <p className="intro"><Copy lang={lang} en="Abstract art born from four decades in Venezuela — colour, energy and tropical light, shaped by a European eye." es="Arte abstracto nacido de cuatro décadas en Venezuela — color, energía y luz tropical, moldeados por un ojo europeo." /></p>
        <div className="actions"><button className="primary" onClick={() => go("gallery")}><Copy lang={lang} en="Explore the work →" es="Explorar la obra →" /></button><button className="outline" onClick={() => go("contact")}><Copy lang={lang} en="Acquire a piece" es="Adquirir una obra" /></button></div>
      </div>
      <div className="scroll">Scroll</div>
    </section>

    <section id="gallery" className="section gallery reveal">
      <p className="label"><Copy lang={lang} en="Original works" es="Obras originales" /></p>
      <h2><Copy lang={lang} en="Gallery" es="Galería" /></h2>
      <div className="tabs">{[["all", lang === "en" ? "All" : "Todas"],["xl","XL"],["large", lang === "en" ? "Large" : "Grande"],["medium", lang === "en" ? "Medium" : "Mediano"],["mini","Mini"],["cacao","Cacao"]].map(([v,l]) => <button key={v} className={filter === v ? "active" : ""} onClick={() => setFilter(v)}>{l}</button>)}</div>
      <div className="grid">{shown.map(w => <article className={`work ${w.span}`} key={w.titleEn}><div className={`painting ${w.art}`} /><div className="workInfo"><h3>{lang === "en" ? w.titleEn : w.titleEs}</h3><p>{w.meta}</p><strong>{lang === "en" ? w.priceEn : w.priceEs}</strong></div></article>)}</div>
      <p className="note"><Copy lang={lang} en="All works available as originals or commissioned pieces inspired by existing works." es="Todas las obras disponibles como originales o encargos inspirados en obras existentes." /></p>
    </section>

    <section className="formats reveal">
      <Format name="Mini" dim="30 × 30 cm" en="Sets of 5 conceived as one composition." es="Sets de 5 concebidos como una composición." lang={lang} />
      <Format name={lang === "en" ? "Medium" : "Mediano"} dim="50–70 cm" en="Versatile originals for residential spaces." es="Originales versátiles para espacios residenciales." lang={lang} />
      <Format name={lang === "en" ? "Large" : "Grande"} dim="80–130 cm" en="Statement pieces for collectors and hospitality." es="Piezas de impacto para coleccionistas y hospitalidad." lang={lang} />
      <Format name="XL" dim="150 cm+" en="Grand-format commissions for lobbies and corporate spaces." es="Encargos de gran formato para lobbies y espacios corporativos." lang={lang} />
    </section>

    <section id="about" className="about">
      <div className="aboutVisual"><div className="abstractBg"/><div className="photo main"><span><Copy lang={lang} en="Portrait of Truusje" es="Retrato de Truusje" /></span></div><div className="strip"><div className="photo"><span><Copy lang={lang} en="Exhibition" es="Exposición" /></span></div><div className="photo"><span><Copy lang={lang} en="Press" es="Prensa" /></span></div><div className="photo"><span><Copy lang={lang} en="Studio" es="Estudio" /></span></div></div></div>
      <div className="aboutText reveal"><p className="label"><Copy lang={lang} en="The artist" es="La artista" /></p><h2><Copy lang={lang} en={<>Born in Belgium.<br/>Shaped by <em>Venezuela.</em></>} es={<>Nacida en Bélgica.<br/>Formada por <em>Venezuela.</em></>} /></h2><p><Copy lang={lang} en="Truusje Lemahieu studied Fine Arts in Bruges, Paris and Brussels before leaving for Venezuela at 22 — where she would spend the next four decades. That choice defined her work entirely." es="Truusje Lemahieu estudió Bellas Artes en Brujas, París y Bruselas antes de partir hacia Venezuela a los 22 años — donde pasaría las cuatro décadas siguientes. Esa decisión definió su obra por completo." /></p><blockquote><Copy lang={lang} en="I left Belgium with a European eye. Venezuela gave me colour I didn’t know existed." es="Salí de Bélgica con un ojo europeo. Venezuela me dio colores que no sabía que existían." /></blockquote><p><Copy lang={lang} en="Her work has been shown across Belgium, Venezuela, Germany, the Netherlands, Russia and the USA. Today, based again in Belgium, she paints daily — carrying both worlds in every brushstroke." es="Su obra ha sido expuesta en Bélgica, Venezuela, Alemania, Países Bajos, Rusia y Estados Unidos. Hoy, de nuevo en Bélgica, pinta a diario — llevando ambos mundos en cada pincelada." /></p><div className="stats"><Stat n="40+" en="Years creating" es="Años creando" lang={lang}/><Stat n="6" en="Countries exhibited" es="Países" lang={lang}/><Stat n="50+" en="Exhibitions" es="Exposiciones" lang={lang}/><Stat n="Int’l" en="Worldwide shipping" es="Envíos internacionales" lang={lang}/></div></div>
    </section>

    <section className="archive reveal"><p className="label"><Copy lang={lang} en="Selected history" es="Historia seleccionada" /></p><h2><Copy lang={lang} en="Archive" es="Archivo" /></h2><div className="archiveGrid">{archives.map(a => <article className="archive-card" key={a.join()}><div>{a[0]}</div><h3>{a[1]}</h3><p>{a[2]}</p><span>{lang === "en" ? a[3] : a[4]}</span></article>)}</div></section>

    <section id="collections" className="collections reveal"><p className="label"><Copy lang={lang} en="By series" es="Por series" /></p><h2><Copy lang={lang} en="Collections" es="Colecciones" /></h2><div className="collectionGrid"><Collection name="Cacao" swatch="cacao" lang={lang} en="Abstract paintings inspired by Venezuelan cacao — deep browns, warm golds and fertile land." es="Pinturas abstractas inspiradas en el cacao venezolano — marrones profundos, dorados cálidos y tierra fértil."/><Collection name={lang === "en" ? "Deep Currents" : "Corrientes"} swatch="current" lang={lang} en="Large-format compositions of swirling movement, Caribbean waters and tropical light." es="Composiciones de gran formato con movimiento envolvente, aguas caribeñas y luz tropical."/><Collection name={lang === "en" ? "Origin" : "Origen"} swatch="origin" lang={lang} en="Sets of 5 mini originals conceived as one composition — bold colour, pure energy." es="Sets de 5 originales mini concebidos como una composición — color puro, energía pura."/></div><p className="coming"><Copy lang={lang} en="Shop coming soon. Future stage: e-commerce and AI wall preview." es="Tienda próximamente. Próxima etapa: e-commerce y preview de obras en pared con AI." /></p></section>

    <section id="contact" className="contact"><div><h2><Copy lang={lang} en={<>Acquire<br/><em>a work.</em></>} es={<>Adquirir<br/><em>una obra.</em></>} /></h2><p className="contactMeta"><Copy lang={lang} en="Belgium — worldwide shipping" es="Bélgica — envíos internacionales" /></p><p className="contactMeta gold">@truusje.art · Saatchi Art</p></div><form><Input label={lang === "en" ? "Your name" : "Tu nombre"}/><Input label="Email"/><label>{lang === "en" ? "I’m interested in" : "Me interesa"}<select><option>—</option><option>{lang === "en" ? "Purchasing an original" : "Adquirir un original"}</option><option>{lang === "en" ? "Commissioning a series" : "Encargar una serie"}</option></select></label><label>{lang === "en" ? "Message" : "Mensaje"}<textarea placeholder="—"/></label><button type="button" className="send"><Copy lang={lang} en="Send →" es="Enviar →" /></button></form></section>

    <footer><strong>T. Lemahieu</strong><span>© 2026 Truusje Lemahieu</span><span>Instagram · Saatchi Art</span></footer>
  </main>;
}

function Format({ name, dim, en, es, lang }) { return <article className="format"><h3>{name}</h3><small>{dim}</small><p>{lang === "en" ? en : es}</p></article>; }
function Stat({ n, en, es, lang }) { return <article><strong>{n}</strong><span>{lang === "en" ? en : es}</span></article>; }
function Collection({ name, swatch, en, es, lang }) { return <article className="collection"><i className={swatch}/><h3>{name}</h3><p>{lang === "en" ? en : es}</p><span>{lang === "en" ? "Available & commission" : "Disponible y por encargo"}</span></article>; }
function Input({ label }) { return <label>{label}<input placeholder="—" /></label>; }
