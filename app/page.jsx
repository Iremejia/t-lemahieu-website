"use client";

import React, { useEffect, useState } from "react";

const works = [
  {
    cat: "xl",
    span: "span7",
    nameEn: "Blue Current",
    nameEs: "Corriente Azul",
    meta: "Grand format · XL",
    priceEn: "Available upon inquiry",
    priceEs: "Disponible bajo consulta",
    image: "/images/work-xl.jpg",
  },
  {
    cat: "large",
    span: "span5",
    nameEn: "Chromatic Living Room",
    nameEs: "Salón Cromático",
    meta: "Large format · Interior placement",
    priceEn: "Commission or original",
    priceEs: "Original o por encargo",
    image: "/images/large-premium-living.jpg",
  },
  {
    cat: "mini",
    span: "span4",
    nameEn: "Mini Set",
    nameEs: "Set Mini",
    meta: "Mini · Set composition",
    priceEn: "Sets available",
    priceEs: "Sets disponibles",
    image: "/images/mini-bedroom.jpg",
  },
  {
    cat: "mini",
    span: "span4",
    nameEn: "Black & White Set",
    nameEs: "Set Blanco y Negro",
    meta: "Mini · 10-piece composition",
    priceEn: "By set",
    priceEs: "Por set",
    image: "/images/set-composition-10.jpg",
  },
  {
    cat: "medium",
    span: "span4",
    nameEn: "Green Rhythm",
    nameEs: "Ritmo Verde",
    meta: "Medium format",
    priceEn: "Available upon inquiry",
    priceEs: "Disponible bajo consulta",
    image: "/images/medium-bench.jpg",
  },
  {
    cat: "large",
    span: "span8",
    nameEn: "Caribbean Pulse",
    nameEs: "Pulso Caribe",
    meta: "Large format · Interior placement",
    priceEn: "Commission or original",
    priceEs: "Original o por encargo",
    image: "/images/work-large-blue.jpg",
  },
  {
    cat: "medium",
    span: "span4",
    nameEn: "Corner Composition",
    nameEs: "Composición de Esquina",
    meta: "Medium format",
    priceEn: "Available upon inquiry",
    priceEs: "Disponible bajo consulta",
    image: "/images/medium-corner.jpg",
  },
];

const archiveItems = [
  {
    year: "99",
    venue: "Metro feature",
    loc: "Belgium · Press archive",
    typeEn: "Press",
    typeEs: "Prensa",
    image: "/images/archive-press.jpg",
  },
  {
    year: "Studio",
    venue: "Large-scale work in progress",
    loc: "Artist studio",
    typeEn: "Process",
    typeEs: "Proceso",
    image: "/images/archive-studio.jpg",
  },
  {
    year: "Now",
    venue: "Artist at work",
    loc: "Detail and signature",
    typeEn: "Studio",
    typeEs: "Estudio",
    image: "/images/truusje-portrait.jpg",
  },
];

function T({ lang, en, es }) {
  return <>{lang === "en" ? en : es}</>;
}

export default function TruusjeWebsite() {
  const [lang, setLang] = useState("en");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("on"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fu").forEach((el) => observer.observe(el));

    const cursor = document.getElementById("cursor-dot");
    const moveCursor = (e) => {
      if (!cursor) return;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    const hoverables = document.querySelectorAll("a,button,.gi,.col-card,.arch-card,.fsize,.hero-art-card");
    const grow = () => cursor?.classList.add("big");
    const shrink = () => cursor?.classList.remove("big");
    document.addEventListener("mousemove", moveCursor);
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      observer.disconnect();
      document.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const visibleWorks = works.filter((work) => filter === "all" || work.cat === filter);

  return (
    <main className="site">
      <div className="cursor-dot" id="cursor-dot" />

      <nav className="nav">
        <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Truusje Lemahieu</button>
        <div className="nav-links">
          <button onClick={() => scrollToId("gallery")}><T lang={lang} en="Gallery" es="Galería" /></button>
          <button onClick={() => scrollToId("about")}><T lang={lang} en="About" es="Sobre ella" /></button>
          <button onClick={() => scrollToId("collections")}><T lang={lang} en="Collections" es="Colecciones" /></button>
          <button onClick={() => scrollToId("contact")}><T lang={lang} en="Contact" es="Contacto" /></button>
          <button className="lang-btn" onClick={() => setLang(lang === "en" ? "es" : "en")}>{lang === "en" ? "ES" : "EN"}</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="orbs">
          <div className="orb o1" /><div className="orb o2" /><div className="orb o3" /><div className="orb o4" />
        </div>

        <div className="hero-content">
          <p className="eyebrow"><T lang={lang} en="Belgian artist · Venezuelan soul" es="Artista belga · Alma venezolana" /></p>
          <h1 className="hero-title">
            <T lang={lang} en={<>Two worlds,<br /><em>one brush.</em></>} es={<>Dos mundos,<br /><em>un pincel.</em></>} />
          </h1>
          <p className="hero-sub">
            <T
              lang={lang}
              en="Abstract art born from four decades in Venezuela — colour, energy and tropical light, shaped by a European eye."
              es="Arte abstracto nacido de cuatro décadas en Venezuela — color, energía y luz tropical, moldeados por un ojo europeo."
            />
          </p>
          <div className="cta-row">
            <button className="btn-primary" onClick={() => scrollToId("gallery")}><T lang={lang} en="Explore the work →" es="Explorar la obra →" /></button>
            <button className="btn-outline" onClick={() => scrollToId("contact")}><T lang={lang} en="Acquire a piece" es="Adquirir una obra" /></button>
          </div>
        </div>

        <div className="hero-art-card">
          <img src="/images/work-xl.jpg" alt="Large blue abstract artwork by Truusje Lemahieu" />
        </div>

        <div className="scroll-hint"><div className="scroll-line" /><span>Scroll</span></div>
      </section>

      <section className="sec gallery-section" id="gallery">
        <div className="fu">
          <div className="sec-label"><T lang={lang} en="Original works" es="Obras originales" /></div>
          <h2 className="sec-title"><T lang={lang} en="Gallery" es="Galería" /></h2>
          <div className="format-tabs">
            {[
              ["all", lang === "en" ? "All" : "Todas"],
              ["xl", "XL"],
              ["large", lang === "en" ? "Large" : "Grande"],
              ["medium", lang === "en" ? "Medium" : "Mediano"],
              ["mini", "Mini"],
            ].map(([value, label]) => (
              <button key={value} className={`ftab ${filter === value ? "active" : ""}`} onClick={() => setFilter(value)}>{label}</button>
            ))}
          </div>

          <div className="gallery-grid">
            {visibleWorks.map((work) => (
              <article key={work.image} className={`gi ${work.span}`} data-cat={work.cat}>
                <img src={work.image} alt={lang === "en" ? work.nameEn : work.nameEs} />
                <div className="gi-info">
                  <div className="gi-name">{lang === "en" ? work.nameEn : work.nameEs}</div>
                  <div className="gi-meta">{work.meta}</div>
                  <div className="gi-price">{lang === "en" ? work.priceEn : work.priceEs}</div>
                </div>
              </article>
            ))}
          </div>

          <p className="gallery-note">
            <T
              lang={lang}
              en={<>All works available as originals or commission inspired by an existing piece. <button onClick={() => scrollToId("contact")}>Enquire →</button></>}
              es={<>Todas las obras disponibles como originales o por encargo inspirado en una pieza existente. <button onClick={() => scrollToId("contact")}>Consultar →</button></>}
            />
          </p>
        </div>
      </section>

      <section className="formats-bar fu">
        <div className="fsize">
          <h3>Mini</h3>
          <div className="fsize-dim">30 × 30 cm</div>
          <p><T lang={lang} en="Small-format originals, often sold as sets and designed to work as a composition." es="Originales de pequeño formato, usualmente vendidos como sets y pensados como composición." /></p>
          <div className="fsize-price"><T lang={lang} en="Sets and individual pieces" es="Sets y piezas individuales" /></div>
        </div>
        <div className="fsize">
          <h3><T lang={lang} en="Medium" es="Mediano" /></h3>
          <div className="fsize-dim">50–80 cm</div>
          <p><T lang={lang} en="Versatile originals for residential, boutique and intimate spaces." es="Originales versátiles para espacios residenciales, boutique e íntimos." /></p>
          <div className="fsize-price"><T lang={lang} en="Ready or commissioned" es="Listos o por encargo" /></div>
        </div>
        <div className="fsize">
          <h3><T lang={lang} en="Large" es="Grande" /></h3>
          <div className="fsize-dim">90–140 cm</div>
          <p><T lang={lang} en="Statement pieces for collectors, living spaces and hospitality projects." es="Piezas de impacto para coleccionistas, salas y proyectos de hospitalidad." /></p>
          <div className="fsize-price"><T lang={lang} en="Original or bespoke" es="Original o a medida" /></div>
        </div>
        <div className="fsize">
          <h3>XL</h3>
          <div className="fsize-dim">150 cm+</div>
          <p><T lang={lang} en="Grand-format works for hotels, lobbies, corporate spaces and dramatic interiors." es="Obras de gran formato para hoteles, lobbies, espacios corporativos e interiores protagónicos." /></p>
          <div className="fsize-price"><T lang={lang} en="By commission" es="Por encargo" /></div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-vis">
          <div className="about-photo-area real">
            <div className="photo-main">
              <img src="/images/truusje-portrait.jpg" alt="Truusje Lemahieu painting a large artwork" />
            </div>
            <div className="photo-strip">
              <div className="photo-slot"><img src="/images/archive-press.jpg" alt="Press archive" /></div>
              <div className="photo-slot"><img src="/images/archive-studio.jpg" alt="Studio archive" /></div>
              <div className="photo-slot"><img src="/images/large-corner.jpg" alt="Artwork in interior" /></div>
            </div>
          </div>
        </div>

        <div className="about-content fu">
          <div className="sec-label"><T lang={lang} en="The artist" es="La artista" /></div>
          <h2 className="sec-title">
            <T lang={lang} en={<>Born in Belgium.<br />Shaped by <em>Venezuela.</em></>} es={<>Nacida en Bélgica.<br />Formada por <em>Venezuela.</em></>} />
          </h2>
          <p className="about-bio">
            <T lang={lang} en="Truusje Lemahieu studied Fine Arts in Bruges, Paris and Brussels before leaving for Venezuela at 22 — where she would spend the next four decades. That choice defined her work entirely." es="Truusje Lemahieu estudió Bellas Artes en Brujas, París y Bruselas antes de partir hacia Venezuela a los 22 años — donde pasaría las cuatro décadas siguientes. Esa decisión definió su obra por completo." />
          </p>
          <blockquote className="about-quote">
            <T lang={lang} en="I left Belgium with a European eye. Venezuela gave me colour I didn’t know existed." es="Salí de Bélgica con un ojo europeo. Venezuela me dio colores que no sabía que existían." />
          </blockquote>
          <p className="about-bio">
            <T lang={lang} en="Her work carries a dialogue between European structure and tropical intensity: gesture, rhythm, colour and instinct. Today, based again in Belgium, she paints daily — carrying both worlds in every brushstroke." es="Su obra sostiene un diálogo entre estructura europea e intensidad tropical: gesto, ritmo, color e instinto. Hoy, de nuevo en Bélgica, pinta a diario — llevando ambos mundos en cada pincelada." />
          </p>
          <div className="about-stats">
            <Stat n="40+" en="Years creating" es="Años creando" lang={lang} />
            <Stat n="6" en="Countries exhibited" es="Países con exposiciones" lang={lang} />
            <Stat n="50+" en="Exhibitions & shows" es="Exposiciones" lang={lang} />
            <Stat n="Int’l" en="Shipping worldwide" es="Envíos internacionales" lang={lang} />
          </div>
        </div>
      </section>

      <section id="archive" className="archive fu">
        <div className="sec-label"><T lang={lang} en="Selected history" es="Historia seleccionada" /></div>
        <h2 className="sec-title"><T lang={lang} en="Archive" es="Archivo" /></h2>
        <div className="archive-grid with-images">
          {archiveItems.map((item) => (
            <article className="arch-card image-card" key={`${item.year}-${item.venue}`}>
              <img src={item.image} alt={item.venue} />
              <div className="arch-card-body">
                <div className="arch-year">{item.year}</div>
                <h3>{item.venue}</h3>
                <p>{item.loc}</p>
                <span>{lang === "en" ? item.typeEn : item.typeEs}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="collections" className="collections">
        <div className="fu">
          <div className="sec-label"><T lang={lang} en="By series" es="Por series" /></div>
          <h2 className="sec-title"><T lang={lang} en="Collections" es="Colecciones" /></h2>
          <div className="col-grid">
            <CollectionCard name="Cacao" swatch="linear-gradient(90deg,#5C3A1E,#C8922A)" lang={lang}
              en="A future collection inspired by Venezuelan cacao — its deep browns, warm golds, and the land that grows it."
              es="Una futura colección inspirada en el cacao venezolano — sus marrones profundos, dorados cálidos y la tierra que lo cultiva."
              piecesEn="Coming collection · Commission interest open" piecesEs="Próxima colección · Interés por encargo abierto" />
            <CollectionCard name={lang === "en" ? "Currents" : "Corrientes"} swatch="linear-gradient(90deg,#1A2B4A,#1D8C75)" lang={lang}
              en="Large-format compositions of swirling movement — the rhythm of Caribbean waters, heat, and light translated into abstraction."
              es="Composiciones de gran formato con movimiento envolvente — el ritmo de las aguas caribeñas traducido en abstracción."
              piecesEn="Large & XL formats" piecesEs="Formatos Grande y XL" />
            <CollectionCard name={lang === "en" ? "Origin" : "Origen"} swatch="linear-gradient(90deg,#C2185B,#E8553A,#F4A200)" lang={lang}
              en="Mini originals and set compositions — bold colour, pure energy, designed for intimate interiors."
              es="Originales mini y composiciones en set — color puro, energía pura, pensadas para interiores íntimos."
              piecesEn="Mini and medium formats" piecesEs="Formatos mini y medianos" />
          </div>
          <p className="collection-note">
            <T lang={lang} en={<>All collections can evolve into ready-made originals or bespoke commissions inspired by existing works. <span>Shop coming soon</span></>} es={<>Todas las colecciones pueden evolucionar en originales disponibles o encargos inspirados en obras existentes. <span>Tienda próximamente</span></>} />
          </p>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-l">
          <h2><T lang={lang} en={<>Acquire<br />a <em>work.</em></>} es={<>Adquirir<br />una <em>obra.</em></>} /></h2>
          <div className="contact-detail">
            <ContactDetail label={lang === "en" ? "Studio" : "Estudio"} value={lang === "en" ? "Belgium — worldwide shipping" : "Bélgica — envíos a todo el mundo"} />
            <ContactDetail label={lang === "en" ? "Commissions" : "Encargos"} value={lang === "en" ? "Original works, custom sizes, interior projects" : "Obras originales, tamaños a medida, proyectos de interiorismo"} />
            <ContactDetail label="Instagram" value="@truusje.art" gold />
            <ContactDetail label={lang === "en" ? "Also available on" : "También disponible en"} value="Saatchi Art" gold />
          </div>
        </div>

        <form className="contact-r fu">
          <Field label={lang === "en" ? "Your name" : "Tu nombre"} type="text" />
          <Field label="Email" type="email" />
          <div className="fg">
            <label>{lang === "en" ? "I’m interested in" : "Me interesa"}</label>
            <select defaultValue="">
              <option value="" disabled>—</option>
              <option>{lang === "en" ? "Purchasing an original" : "Adquirir un original"}</option>
              <option>{lang === "en" ? "Commissioning a work inspired by an existing piece" : "Encargar una obra inspirada en una pieza existente"}</option>
              <option>{lang === "en" ? "Interior design / hospitality project" : "Proyecto de interiorismo u hotelería"}</option>
              <option>{lang === "en" ? "Press or collaboration" : "Prensa o colaboración"}</option>
            </select>
          </div>
          <div className="fg">
            <label>{lang === "en" ? "Message" : "Mensaje"}</label>
            <textarea placeholder="—" />
          </div>
          <button type="button" className="btn-send">{lang === "en" ? "Send →" : "Enviar →"}</button>
        </form>
      </section>

      <footer>
        <div className="f-logo">T. Lemahieu</div>
        <div>© 2026 Truusje Lemahieu</div>
        <div className="f-links"><button>Instagram</button><button>Saatchi Art</button></div>
      </footer>
    </main>
  );
}

function Stat({ n, en, es, lang }) {
  return <div><div className="stat-n">{n}</div><div className="stat-l">{lang === "en" ? en : es}</div></div>;
}

function CollectionCard({ name, swatch, en, es, piecesEn, piecesEs, lang }) {
  return (
    <article className="col-card">
      <div className="col-swatch" style={{ background: swatch }} />
      <h3>{name}</h3>
      <p>{lang === "en" ? en : es}</p>
      <div>{lang === "en" ? piecesEn : piecesEs}</div>
    </article>
  );
}

function ContactDetail({ label, value, gold }) {
  return (
    <>
      <div className="c-label">{label}</div>
      <div className={`c-val ${gold ? "gold" : ""}`}>{value}</div>
    </>
  );
}

function Field({ label, type }) {
  return (
    <div className="fg">
      <label>{label}</label>
      <input type={type} placeholder="—" />
    </div>
  );
}
