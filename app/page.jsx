"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Mail, MapPin } from "lucide-react";

const artworks = [
  {
    title: "Large Abstract Composition",
    category: "Grand Format",
    size: "Approx. 200 × 100 cm",
    status: "Available upon inquiry",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Chromatic Study Set",
    category: "Small Works / Sets",
    size: "Approx. 30 × 30 cm each",
    status: "Curated sets available",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Interior Color Field",
    category: "Medium Format",
    size: "Approx. 80 × 100 cm",
    status: "Private viewing available",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=80",
  },
];

const collections = [
  "Large-scale abstract works",
  "Small-format collectible sets",
  "Color studies",
  "Interior-focused compositions",
];

function Nav({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["home", "Home"],
    ["works", "Works & Collections"],
    ["artist", "About the Artist"],
    ["contact", "Contact"],
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-stone-200/60 bg-[#f7f2ea]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <button onClick={() => setCurrentPage("home")} className="group text-left">
          <div className="font-serif text-xl tracking-[0.22em] text-stone-900">T. LEMAHIEU</div>
          <div className="text-[10px] uppercase tracking-[0.35em] text-stone-500">Abstract Fine Art</div>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`text-xs uppercase tracking-[0.24em] transition ${
                currentPage === id ? "text-stone-950" : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-200 bg-[#f7f2ea] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([id, label]) => (
              <button
                key={id}
                onClick={() => {
                  setCurrentPage(id);
                  setOpen(false);
                }}
                className="text-left text-xs uppercase tracking-[0.24em] text-stone-700"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#9c6946]">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight text-stone-950 md:text-6xl">{title}</h2>
      {text && <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600">{text}</p>}
    </div>
  );
}

function ArtworkGrid() {
  return (
    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
      {artworks.map((art, index) => (
        <motion.article
          key={art.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="group overflow-hidden rounded-[1.7rem] bg-white shadow-sm"
        >
          <div className="h-80 overflow-hidden">
            <img
              src={art.image}
              alt={art.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[#9c6946]">{art.category}</p>
            <h3 className="font-serif text-2xl text-stone-950">{art.title}</h3>
            <p className="mt-3 text-sm text-stone-500">{art.size}</p>
            <p className="mt-1 text-sm text-stone-500">{art.status}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function Home({ setCurrentPage }) {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-[#f7f2ea] pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#9c6946]">Belgian-born abstract artist</p>
            <h1 className="font-serif text-5xl leading-[0.98] text-stone-950 md:text-7xl lg:text-8xl">
              Abstract works for considered interiors.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
              T. Lemahieu creates expressive, color-rich compositions shaped by a European eye and decades of life in Venezuela — works that bring warmth, scale and emotion into contemporary spaces.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setCurrentPage("works")}
                className="rounded-full bg-stone-950 px-7 py-4 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-stone-800"
              >
                View Works
              </button>
              <button
                onClick={() => setCurrentPage("contact")}
                className="rounded-full border border-stone-400 px-7 py-4 text-xs uppercase tracking-[0.22em] text-stone-900 transition hover:border-stone-950"
              >
                Request Catalogue
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -left-8 -top-8 h-64 w-64 rounded-full bg-[#d2a15f]/20 blur-3xl" />
            <div className="absolute -bottom-8 right-8 h-72 w-72 rounded-full bg-[#35554a]/15 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1400&q=90"
              alt="Abstract artwork in refined interior"
              className="relative h-[520px] w-full rounded-[2rem] object-cover shadow-2xl md:h-[680px]"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-20 text-[#f7f2ea] md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.3fr]">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d2a15f]">Positioning</p>
          <blockquote className="font-serif text-3xl leading-snug md:text-5xl">
            “Art that does not simply decorate a room — it gives the space a voice.”
          </blockquote>
        </div>
      </section>

      <section className="bg-[#f7f2ea] px-5 py-24 md:px-10">
        <SectionTitle
          eyebrow="Selected Works"
          title="Pieces with presence, scale and emotional color."
          text="The current selection introduces the artist’s visual universe while the full catalogue is being curated. Each work can later be expanded into its own detailed artwork page."
        />
        <ArtworkGrid />
      </section>
    </main>
  );
}

function Works() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] px-5 pb-24 pt-36 md:px-10">
      <SectionTitle
        eyebrow="Works & Collections"
        title="A living catalogue, designed to grow."
        text="This section begins as a curated portfolio and can later become a full searchable catalogue or e-commerce experience, with individual pages for each work, pricing, availability and checkout."
      />

      <div className="mx-auto mb-14 grid max-w-7xl gap-4 md:grid-cols-4">
        {collections.map((item) => (
          <div key={item} className="rounded-[1.5rem] border border-stone-200 bg-white/60 p-6">
            <p className="font-serif text-2xl text-stone-950">{item}</p>
          </div>
        ))}
      </div>

      <ArtworkGrid />

      <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] bg-stone-950 p-8 text-[#f7f2ea] md:p-12">
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#d2a15f]">Future evolution</p>
        <h3 className="font-serif text-3xl md:text-4xl">Ready for catalogue expansion</h3>
        <p className="mt-5 leading-8 text-stone-300">
          As new works are photographed and measured, they can be added with title, dimensions, medium, year, availability, price range and interior placement notes. Later, this structure can connect to a CMS, Shopify, Stripe or a private collector inquiry flow.
        </p>
      </div>
    </main>
  );
}

function Artist() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] px-5 pb-24 pt-36 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#9c6946]">About the Artist</p>
          <h1 className="font-serif text-5xl leading-tight text-stone-950 md:text-7xl">T. Lemahieu</h1>
          <p className="mt-8 text-lg leading-9 text-stone-600">
            Belgian-born and shaped by more than three decades in Venezuela, T. Lemahieu’s work carries a distinctive dialogue between European sensibility and tropical intensity. Her abstract compositions explore color, rhythm, memory and emotional atmosphere.
          </p>
          <p className="mt-6 text-lg leading-9 text-stone-600">
            Her pieces range from intimate small-format sets to large-scale works conceived for interiors that need presence, warmth and a strong visual anchor.
          </p>
        </div>

        <div className="grid gap-5">
          <img
            src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=1200&q=90"
            alt="Artist studio detail"
            className="h-[520px] w-full rounded-[2rem] object-cover shadow-xl"
          />
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#9c6946]">Origin</p>
              <p className="mt-3 font-serif text-2xl">Belgium / Venezuela</p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#9c6946]">Focus</p>
              <p className="mt-3 font-serif text-2xl">Abstract color & interiors</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="min-h-screen bg-stone-950 px-5 pb-24 pt-36 text-[#f7f2ea] md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d2a15f]">Contact</p>
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">Inquiries, commissions and private viewings.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-stone-300">
            For availability, catalogue requests, interior projects or commissioned pieces, please get in touch. The studio can guide collectors, decorators and homeowners toward the right format, palette and scale.
          </p>

          <div className="mt-10 grid gap-5">
            <div className="flex items-center gap-4 text-stone-300"><Mail size={18} /> studio@tlemahieu.com</div>
            <div className="flex items-center gap-4 text-stone-300"><span className="text-lg">@</span> @truusjelemahieu</div>
            <div className="flex items-center gap-4 text-stone-300"><MapPin size={18} /> Available for international inquiries</div>
          </div>
        </div>

        <form className="rounded-[2rem] bg-[#f7f2ea] p-7 text-stone-950 shadow-2xl md:p-10">
          <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-stone-500">Name</label>
          <input className="mb-5 w-full rounded-full border border-stone-300 bg-transparent px-5 py-4 outline-none focus:border-stone-950" placeholder="Your name" />

          <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-stone-500">Email</label>
          <input className="mb-5 w-full rounded-full border border-stone-300 bg-transparent px-5 py-4 outline-none focus:border-stone-950" placeholder="your@email.com" />

          <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-stone-500">Interest</label>
          <select className="mb-5 w-full rounded-full border border-stone-300 bg-transparent px-5 py-4 outline-none focus:border-stone-950">
            <option>Request catalogue</option>
            <option>Ask about a specific work</option>
            <option>Commission a piece</option>
            <option>Interior design / decorator inquiry</option>
          </select>

          <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-stone-500">Message</label>
          <textarea className="mb-6 min-h-36 w-full rounded-[1.5rem] border border-stone-300 bg-transparent px-5 py-4 outline-none focus:border-stone-950" placeholder="Tell us what you are looking for..." />

          <button type="button" className="group flex w-full items-center justify-center gap-3 rounded-full bg-stone-950 px-7 py-4 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-stone-800">
            Send inquiry <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </main>
  );
}

export default function TLemahieuWebsite() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-[#f7f2ea] text-stone-950">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "works" && <Works />}
      {currentPage === "artist" && <Artist />}
      {currentPage === "contact" && <Contact />}
    </div>
  );
}
