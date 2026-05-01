"use client";

import React, { useEffect, useState } from "react";

const works = [
  { id: "c1", cat: "xl", span: "span7", nameEn: "Deep Current", nameEs: "Corriente Profunda", meta: "Acrylic · 200 × 150 cm · XL", priceEn: "From €4,500", priceEs: "Desde €4,500", palette: ["#1A3461","#1D8C75","#0D5C8C","#2BA88A","#E8553A","#1D5C8C"], type: "swirl" },
  { id: "c2", cat: "large", span: "span5", nameEn: "Tropical Spiral", nameEs: "Espiral Tropical", meta: "Acrylic · 100 × 80 cm · Large", priceEn: "From €1,800", priceEs: "Desde €1,800", palette: ["#1D3461","#E8553A","#C2185B","#1D8C75","#ffffff"], type: "swirl" },
  { id: "c3", cat: "mini", span: "span4", nameEn: "Origin I", nameEs: "Origen I", meta: "30 × 30 cm · Mini", priceEn: "Set of 5 from €1,200", priceEs: "Set de 5 desde €1,200", palette: ["#E85530","#C2185B","#F4A200"], type: "mini" },
  { id: "c4", cat: "mini", span: "span4", nameEn: "Origin II", nameEs: "Origen II", meta: "30 × 30 cm · Mini", priceEn: "Available as set", priceEs: "Disponible en set", palette: ["#1D8C75","#1A2B4A","#2BA88A"], type: "mini" },
  { id: "c5", cat: "medium", span: "span4", nameEn: "Forest Rhythm", nameEs: "Ritmo de Selva", meta: "60 × 60 cm · Medium", priceEn: "From €900", priceEs: "Desde €900", palette: ["#1D8C75","#2E7D32","#C2185B","#E8553A","#F4A200"], type: "dots" },
  { id: "c6", cat: "large", span: "span8", nameEn: "Caribbean Light", nameEs: "Luz Caribe", meta: "Acrylic · 180 × 80 cm · Large", priceEn: "From €3,200", priceEs: "Desde €3,200", palette: ["#C2185B","#E8553A","#F4A200","#1D8C75","#1A3461","#ffffff"], type: "bold" },
  { id: "c7", cat: "cacao", span: "span4", nameEn: "Cacao I", nameEs: "Cacao I", meta: "80 × 100 cm · Cacao Series", priceEn: "From €1,600", priceEs: "Desde €1,600", palette: ["#5C3A1E","#8B5A2B","#C8922A","#E8553A","#3D1F0A","#A0522D"], type: "cacao" },
];

const archiveItems = [
  { year: "93", venue: "La Irreverencia del Color", loc: "Galería Hollywood, Caracas", typeEn: "Solo exhibition", typeEs: "Exposición individual" },
  { year: "92", venue: "Karl Ernst Osthaus Museum", loc: "Hagen, Germany", typeEn: "Group exhibition", typeEs: "Exposición colectiva" },
  { year: "94", venue: "Art Fair Miami", loc: "Miami, USA", typeEn: "International fair", typeEs: "Feria internacional" },
  { year: "94", venue: "International Exhibition", loc: "Moscow, Russia", typeEn: "International", typeEs: "Internacional" },
  { year: "95", venue: "Design Center Torre Humbolt", loc: "Caracas, Venezuela", typeEn: "Design & Art", typeEs: "Diseño y Arte" },
  { year: "97", venue: "Hilton Caracas", loc: "Caracas, Venezuela", typeEn: "Hospitality exhibition", typeEs: "Exposición hotelera" },
];

function drawArtwork(canvas, colors, type) {
  if (!canvas) return;
  const parent = canvas.parentElement;
  const rect = parent.getBoundingClientRect();
  canvas.width = Math.max(rect.width, 320);
  canvas.height = Math.max(rect.height, 240);
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = colors[0];
  ctx.fillRect(0, 0, w, h);

  if (type === "swirl") {
    for (let i = 0; i < 140; i++) {
      const a = i * 0.28;
      const r = i * 3.8;
      const x = w / 2 + Math.cos(a) * r;
      const y = h / 2 + Math.sin(a) * r;
      ctx.beginPath();
      ctx.ellipse(x, y, 16, 9, a, 0, Math.PI * 2);
      ctx.fillStyle = colors[i % colors.length];
      ctx.globalAlpha = 0.88;
      ctx.fill();
    }
  }

  if (type === "bold") {
    for (let i = 0; i < 18; i++) {
      ctx.beginPath();
      ctx.ellipse(Math.random() * w, Math.random() * h, 55 + Math.random() * 90, 45 + Math.random() * 70, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fillStyle = colors[i % colors.length];
      ctx.globalAlpha = 0.9;
      ctx.fill();
    }
    ctx.strokeStyle = "#1C1C1C";
    ctx.lineWidth = 3.5;
    ctx.globalAlpha = 0.5;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, 18 + Math.random() * 38, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  if (type === "mini") {
    ctx.fillStyle = colors[1];
    ctx.fillRect(0, 0, w, h);
    ctx.beginPath();
    ctx.ellipse(w / 2, h / 2, w * 0.38, h * 0.38, 0, 0, Math.PI * 2);
    ctx.fillStyle = colors[2];
    ctx.globalAlpha = 1;
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w / 2, h / 2, w * 0.22, h * 0.22, 0, 0, Math.PI * 2);
    ctx.fillStyle = colors[0];
    ctx.fill();
  }

  if (type === "dots") {
    for (let row = 0; row < 22; row++) {
      for (let col = 0; col < 45; col++) {
        ctx.beginPath();
        ctx.ellipse((col * w) / 42 + Math.random() * 6, (row * h) / 20 + Math.random() * 6, 9, 5, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fillStyle = colors[(row + col) % colors.length];
        ctx.globalAlpha = 0.9;
        ctx.fill();
      }
    }
  }

  if (type === "cacao") {
    ctx.fillStyle = "#2E1208";
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 90; i++) {
      ctx.beginPath();
      ctx.ellipse(Math.random() * w, Math.random() * h, 14 + Math.random() * 22, 7 + Math.random() * 14, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fillStyle = colors[i % colors.length];
      ctx.globalAlpha = 0.85;
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}

function T({ lang, en, es }) {
  return <>{lang === "en" ? en : es}</>;
}

export default function TruusjeWebsite() {
  const [lang, setLang] = useState("en");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const drawAll = () => works.forEach((work) => drawArtwork(document.getElementById(work.id), work.palette, work.type));
    const timer = setTimeout(drawAll, 150);
    window.addEventListener("resize", drawAll);

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
    const hoverables = document.querySelectorAll("a,button,.gi,.col-card,.arch-card,.fsize");
    const grow = () => cursor?.classList.add("big");
    const shrink = () => cursor?.classList.remove("big");
    document.addEventListener("mousemove", moveCursor);
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", drawAll);
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
              ["cacao", "Cacao"],
            ].map(([value, label]) => (
              <button key={value} className={`ftab ${filter === value ? "active" : ""}`} onClick={() => setFilter(value)}>{label}</button>
            ))}
          </div>

          <div className="gallery-grid">
            {visibleWorks.map((work) => (
              <article key={work.id} className={`gi ${work.span}`} data-cat={work.cat}>
                <canvas id={work.id} />
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
              en={<>All works available as originals or commission. <button onClick={() => scrollToId("contact")}>Enquire →</button></>}
              es={<>Todas las obras disponibles como originales o por encargo. <button onClick={() => scrollToId("contact")}>Consultar →</button></>}
            />
          </p>
        </div>
      </section>

      <section className="formats-bar fu">
        <div className="fsize">
          <h3>Mini</h3>
          <div className="fsize-dim">30 × 30 cm</div>
          <p><T lang={lang} en="Sold as sets of 5 — conceived as a single composition to hang together." es="Se venden en sets de 5 — concebidas como una sola composición para colgar juntas." /></p>
          <div className="fsize-price"><T lang={lang} en="Sets from €1,200" es="Sets desde €1,200" /></div>
        </div>
        <div className="fsize">
          <h3><T lang={lang} en="Medium" es="Mediano" /></h3>
          <div className="fsize-dim">50–70 cm</div>
          <p><T lang={lang} en="Versatile originals for residential and boutique spaces." es="Originales versátiles para espacios residenciales y boutique." /></p>
          <div className="fsize-price"><T lang={lang} en="From €800" es="Desde €800" /></div>
        </div>
        <div className="fsize">
          <h3><T lang={lang} en="Large" es="Grande" /></h3>
          <div className="fsize-dim">80–130 cm</div>
          <p><T lang={lang} en="Statement pieces for collectors and hospitality projects." es="Piezas de impacto para coleccionistas y proyectos de hospitalidad." /></p>
          <div className="fsize-price"><T lang={lang} en="From €1,600" es="Desde €1,600" /></div>
        </div>
        <div className="fsize">
          <h3>XL</h3>
          <div className="fsize-dim">150 cm+</div>
          <p><T lang={lang} en="Grand-format commissions for hotels, lobbies and corporate spaces. Custom sizing." es="Encargos de gran formato para hoteles, lobbies y espacios corporativos. Tamaño a medida." /></p>
          <div className="fsize-price"><T lang={lang} en="From €4,000 — by commission" es="Desde €4,000 — por encargo" /></div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-vis">
          <div className="about-vis-art">
            <svg viewBox="0 0 600 800" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
              <ellipse cx="150" cy="200" rx="280" ry="200" fill="#E8553A" opacity=".5" />
              <ellipse cx="420" cy="520" rx="220" ry="250" fill="#1D8C75" opacity=".5" />
              <path d="M0,600 Q200,300 500,450" stroke="#C8922A" strokeWidth="80" fill="none" strokeLinecap="round" opacity=".3" />
              <ellipse cx="300" cy="380" rx="130" ry="130" fill="#C2185B" opacity=".25" />
            </svg>
          </div>
          <div className="about-accent-bar" />
          <div className="about-photo-area">
            <div className="photo-main"><PhotoPlaceholder label={lang === "en" ? "Portrait of Truusje" : "Retrato de Truusje"} /></div>
            <div className="photo-strip">
              <div className="photo-slot"><PhotoPlaceholder label={lang === "en" ? "Exhibition" : "Exposición"} small /></div>
              <div className="photo-slot"><PhotoPlaceholder label={lang === "en" ? "Press" : "Prensa"} small /></div>
              <div className="photo-slot"><PhotoPlaceholder label={lang === "en" ? "Studio" : "Estudio"} small /></div>
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
            <T lang={lang} en="Her work has been shown across Belgium, Venezuela, Germany, the Netherlands, Russia and the USA — from Galería Hollywood in Caracas to the Karl Ernst Osthaus Museum in Hagen and the International Art Fair in Miami. Today, based again in Belgium, she paints daily — carrying both worlds in every brushstroke." es="Su obra ha sido expuesta en Bélgica, Venezuela, Alemania, Países Bajos, Rusia y Estados Unidos — desde la Galería Hollywood en Caracas hasta el Museo Karl Ernst Osthaus en Hagen y la Feria de Arte de Miami. Hoy, de nuevo en Bélgica, pinta a diario — llevando ambos mundos en cada pincelada." />
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
        <div className="archive-grid">
          {archiveItems.map((item) => (
            <article className="arch-card" key={`${item.year}-${item.venue}`}>
              <div className="arch-year">{item.year}</div>
              <h3>{item.venue}</h3>
              <p>{item.loc}</p>
              <span>{lang === "en" ? item.typeEn : item.typeEs}</span>
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
              en="Abstract paintings inspired by Venezuela’s world-renowned cacao — its deep browns, warm golds, and the land that grows it."
              es="Pinturas abstractas inspiradas en el cacao venezolano — sus marrones profundos, dorados cálidos y la tierra que lo cultiva."
              piecesEn="9–12 pieces · Available & commission" piecesEs="9–12 piezas · Disponibles y por encargo" />
            <CollectionCard name={lang === "en" ? "Deep Currents" : "Corrientes"} swatch="linear-gradient(90deg,#1A2B4A,#1D8C75)" lang={lang}
              en="Large-format compositions of swirling movement — the rhythm of Caribbean waters, heat, and light translated into abstraction."
              es="Composiciones de gran formato con movimiento envolvente — el ritmo de las aguas caribeñas traducido en abstracción."
              piecesEn="Large & XL formats · Available" piecesEs="Formatos Grande y XL · Disponibles" />
            <CollectionCard name={lang === "en" ? "Origin" : "Origen"} swatch="linear-gradient(90deg,#C2185B,#E8553A,#F4A200)" lang={lang}
              en="Sets of 5 mini originals conceived as a single composition — bold colour, pure energy. Ideal for gifting and residential spaces."
              es="Sets de 5 originales mini concebidos como una sola composición — color puro, energía pura. Ideal para regalo y espacios residenciales."
              piecesEn="Sets of 5 · 30 × 30 cm each" piecesEs="Sets de 5 · 30 × 30 cm cada una" />
          </div>
          <p className="collection-note">
            <T lang={lang} en={<>All collections available as ready-made originals or bespoke commissions inspired by existing works. <span>Shop coming soon</span></>} es={<>Todas las colecciones disponibles como originales o encargos inspirados en obras existentes. <span>Tienda próximamente</span></>} />
          </p>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-l">
          <h2><T lang={lang} en={<>Acquire<br />a <em>work.</em></>} es={<>Adquirir<br />una <em>obra.</em></>} /></h2>
          <div className="contact-detail">
            <ContactDetail label={lang === "en" ? "Studio" : "Estudio"} value={lang === "en" ? "Belgium — worldwide shipping" : "Bélgica — envíos a todo el mundo"} />
            <ContactDetail label={lang === "en" ? "Commissions" : "Encargos"} value={lang === "en" ? "Custom series, hotels, corporate spaces" : "Series personalizadas, hoteles, espacios corporativos"} />
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
              <option>{lang === "en" ? "Commissioning a series" : "Encargar una serie"}</option>
              <option>{lang === "en" ? "Hotel / hospitality project" : "Proyecto hotelero"}</option>
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

function PhotoPlaceholder({ label, small }) {
  return (
    <div className="photo-placeholder">
      <svg width={small ? 24 : 48} height={small ? 24 : 48} fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span>{label}</span>
    </div>
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
