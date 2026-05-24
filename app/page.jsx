'use client';
import './globals.css';
import { useEffect, useMemo, useState } from 'react';

const T = {
  en: {
    nav: ['Biography','Collections','Formats','Gallery','Archive','Contact'],
    heroEyebrow:'Belgian abstract artist',
    heroTitle:'Color, gesture and memory across continents.',
    heroCopy:'T. Lemahieu builds an abstract language where European formation and tropical experience meet through color, rhythm and scale.',
    viewWorks:'View works', contact:'Contact studio',
    unique:'Each piece is a unique original, painted by the artist as a singular work — created for collectors, interiors and spaces where art is meant to hold presence.',
    bioTitle:'The artist', bioLabel:'Biography',
    bio1:'Born in Veurne, Belgium, Truusje Lemahieu trained in applied arts, painting and drawing across Belgium and France before building a long artistic life between Europe and Venezuela. Her work carries the discipline of European formation and the chromatic intensity of the tropics, where color became not a discovery, but a natural language that finally made sense.',
    bio2:'Across four decades, her practice has moved through abstraction, object, gesture, domestic form and large-scale composition. Bowls, fish, signs, fragments and fields of color appear as recurring territories: never decorative motifs, but vessels for rhythm, memory and movement.',
    bio3:'Her work has been exhibited and connected through projects in Belgium, Venezuela, the United States, Germany, France, the Netherlands, Russia and other international contexts. This archive brings together works, studies, press material and studio images as part of a renewed presentation of her artistic universe.',
    collectionsTitle:'Collections', collectionsCopy:'The collections organize the artist’s universe through movement, gesture, object, color and fragment. Each territory has its own rhythm and visual presence.',
    formatsTitle:'Choose by scale, space and presence.', formatsCopy:'Explore available works by format, from intimate pieces to monumental works for architectural spaces.',
    galleryTitle:'Gallery', galleryCopy:'A curated view of available works. Each artwork is original, unique and hand-painted by the artist.',
    archiveTitle:'Archive', archiveCopy:'Selected documents, studies and studio images tracing the artist’s formation, exhibitions and visual evolution.',
    specialTitle:'Special projects', specialCopy:'Special requests may be considered for collectors, interiors and architectural projects, based on the artist’s existing styles, references and visual language. Each resulting piece remains unique and original; the intention is not to reproduce a previous work, but to create a singular piece in dialogue with the artist’s universe.',
    contactTitle:'Contact', contactCopy:'For availability, acquisitions, commissions or project conversations, contact the studio directly or leave your details below.',
    name:'Name', email:'Email', phone:'WhatsApp / Phone', city:'Country / City', code:'Artwork code of interest (optional)', interest:'Interest', message:'Message', send:'Send inquiry', other:'Other',
    contacts:'Studio contacts', belgium:'Belgium contact', venezuela:'Venezuela contact', instagram:'Instagram',
    available:'Available', request:'Open details', private:'Private inquiry', from:'From', noPrice:'Price upon request'
  },
  es: {
    nav: ['Biografía','Colecciones','Formatos','Galería','Archivo','Contacto'],
    heroEyebrow:'Artista abstracta belga',
    heroTitle:'Color, gesto y memoria entre continentes.',
    heroCopy:'T. Lemahieu construye un lenguaje abstracto donde la formación europea y la experiencia tropical se encuentran a través del color, el ritmo y la escala.',
    viewWorks:'Ver obras', contact:'Contactar estudio',
    unique:'Cada pieza es un original único, pintado por la artista como una obra singular — creada para coleccionistas, interiores y espacios donde el arte está destinado a sostener presencia.',
    bioTitle:'La artista', bioLabel:'Biografía',
    bio1:'Nacida en Veurne, Bélgica, Truusje Lemahieu se formó en artes aplicadas, pintura y dibujo entre Bélgica y Francia antes de construir una vida artística entre Europa y Venezuela. Su obra reúne la disciplina de la formación europea y la intensidad cromática del trópico, donde el color no apareció como descubrimiento, sino como un lenguaje natural que finalmente hizo sentido.',
    bio2:'Durante más de cuatro décadas, su práctica ha transitado la abstracción, el objeto, el gesto, la forma doméstica y la composición de gran escala. Cuencos, peces, signos, fragmentos y campos de color aparecen como territorios recurrentes: no como motivos decorativos, sino como contenedores de ritmo, memoria y movimiento.',
    bio3:'Su trabajo ha sido exhibido y vinculado a proyectos en Bélgica, Venezuela, Estados Unidos, Alemania, Francia, Holanda, Rusia y otros contextos internacionales. Este archivo reúne obras, estudios, prensa e imágenes de estudio como parte de una nueva presentación de su universo artístico.',
    collectionsTitle:'Colecciones', collectionsCopy:'Las colecciones organizan el universo de la artista a través del movimiento, el gesto, el objeto, el color y el fragmento. Cada territorio tiene su propio ritmo y presencia visual.',
    formatsTitle:'Elegir por escala, espacio y presencia.', formatsCopy:'Explora obras disponibles por formato, desde piezas íntimas hasta obras monumentales para espacios arquitectónicos.',
    galleryTitle:'Galería', galleryCopy:'Una selección curada de obras disponibles. Cada obra es original, única y pintada a mano por la artista.',
    archiveTitle:'Archivo', archiveCopy:'Documentos, estudios e imágenes de estudio que trazan la formación, exposiciones y evolución visual de la artista.',
    specialTitle:'Proyectos especiales', specialCopy:'Se pueden considerar solicitudes especiales para coleccionistas, interiores y proyectos arquitectónicos, basadas en estilos, referencias y lenguaje visual de la artista. Cada pieza resultante sigue siendo única y original; la intención no es reproducir una obra anterior, sino crear una pieza singular en diálogo con su universo.',
    contactTitle:'Contacto', contactCopy:'Para disponibilidad, adquisiciones, encargos o conversaciones de proyecto, contacta directamente al estudio o deja tus datos abajo.',
    name:'Nombre', email:'Email', phone:'WhatsApp / Teléfono', city:'País / Ciudad', code:'Código de obra de interés (opcional)', interest:'Interés', message:'Mensaje', send:'Enviar consulta', other:'Otro',
    contacts:'Datos de contacto', belgium:'Contacto en Bélgica', venezuela:'Contacto en Venezuela', instagram:'Instagram',
    available:'Disponible', request:'Ver detalles', private:'Consulta privada', from:'Desde', noPrice:'Precio bajo consulta'
  }
};

const oldMap = {
  'CAR-087':'available-car-087.jpg','CAR-092':'available-car-092.jpg','CAR-104':'available-car-104.jpg','PA-124':'available-pa-124.jpg','PA-139':'available-pa-139.jpg','PA-147':'available-pa-147.jpg','RIT-056':'available-rit-056.jpg','RIT-061':'available-rit-061.jpg','RIT-073':'available-rit-073.jpg','RIT-079':'available-rit-079.jpg','CAR-126':'car-126.jpg',
  'ARCH-EA-003':'archive-press.jpg','ARCH-EA-004':'archive-studio.jpg'
};
function candidates(code, type='main'){
  const lower = code.toLowerCase();
  const list = [
    `/images/${code}-${type}.jpg`, `/images/${code}_${type}.jpg`, `/images/${code} ${type}.jpg`,
    `/images/${code}.jpg`, `/images/${lower}-${type}.jpg`, `/images/${lower}.jpg`,
  ];
  if(oldMap[code]) list.push(`/${oldMap[code]}`, `/images/${oldMap[code]}`);
  return list;
}
function SmartImage({code, type='main', alt='', className=''}){
  const srcs = useMemo(()=>candidates(code,type),[code,type]);
  const [i,setI]=useState(0);
  return <img className={className} src={srcs[i]} alt={alt||code} onError={()=>setI(v=>Math.min(v+1,srcs.length-1))}/>;
}
function Rotator({items, alt}){
  const [idx,setIdx]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setIdx(i=>(i+1)%items.length),3600);return()=>clearInterval(t)},[items.length]);
  const it=items[idx];
  return <SmartImage code={it.code} type={it.type||'main'} alt={alt||it.code}/>;
}

const heroItems=[{code:'PA-124',type:'context'},{code:'RIT-056',type:'main'},{code:'CAR-092',type:'context'},{code:'RIT-061',type:'context'},{code:'PA-147',type:'main'},{code:'CAR-118',type:'context'}];
const biography=[
  ['ARCH-EA-006','Artist with Monumental Work'],['ARCH-ES-003','Travel Composition'],['ARCH-EA-005','Signing a Large-Scale Work'],['ARCH-EA-009','AIAG Catalogue, Germany']
];
const collections=[
 {id:'cardumenes',name:'Cardúmenes',subtitle:'Shoals, currents and collective movement.',count:'Selected works',codes:['CAR-092','CAR-118','CAR-126','OBJ-060'],text:'Movement becomes collective force: direction, synchronicity, abundance and rhythm move through the composition.'},
 {id:'rituals',name:'Rituals',subtitle:'Objects, tables and repeated gestures.',count:'Selected works',codes:['RIT-056','RIT-061','RIT-073','RIT-091'],text:'Cups, bowls and domestic signs appear as ritual forms — intimate objects transformed into fields of color and memory.'},
 {id:'pure-abstraction',name:'Pure Abstraction',subtitle:'Gesture, color and scale.',count:'Selected works',codes:['PA-124','PA-147','PA-166','OBJ-117'],text:'Large chromatic fields, marks and recurring signs create a visual language built through gesture and architectural presence.'},
 {id:'collected-fragments',name:'Collected Fragments',subtitle:'Small works, sets and visual fragments.',count:'Selected works',codes:['CF-152','CF-167','CF-196','CF-201'],text:'Fragments gather into intimate constellations: small-format works that carry the density of a larger visual world.'},
 {id:'cacaos',name:'Cacaos',subtitle:'Upcoming collection.',count:'In development',codes:['CAC-020','CAC-021'],text:'A forthcoming body of work. This space remains open for the next collection.'}
];
const formats=[
 {id:'intimate',name:'Intimate Works',img:'CF-196',price:'$250 USD',text:'Small-scale works and curated sets for personal, layered spaces.'},
 {id:'signature',name:'Signature Works',img:'RIT-061',price:'$2,000 USD',text:'Medium-format pieces with a distinct visual identity.'},
 {id:'statement',name:'Statement Works',img:'PA-147',price:'$3,700 USD',text:'Large-scale works designed to anchor a room.'},
 {id:'monumental',name:'Monumental Works',img:'PA-124',price:'$6,000 USD',text:'Oversized works with architectural presence.'},
 {id:'objects',name:'Painted Objects',img:'OBJ-060',price:'Private inquiry',text:'Functional pieces transformed through painting.'}
];
const works=[
 ['CAR-087','Untitled','Cardúmenes','Acrylic on canvas','Intimate Work','$250 USD'],
 ['CAR-092','Untitled','Cardúmenes','Acrylic on canvas','Intimate Work','$250 USD'],
 ['CAR-104','Untitled','Cardúmenes','Acrylic on canvas','Intimate Work','$250 USD'],
 ['CAR-118','Untitled','Cardúmenes','Acrylic on canvas','Statement Work','$3,700 USD'],
 ['CAR-126','Untitled','Cardúmenes','Acrylic on canvas','Signature Work','$2,000 USD'],
 ['CAR-132','Untitled','Cardúmenes','Acrylic on canvas','Statement Work',''],
 ['RIT-056','Untitled','Rituals','Acrylic on canvas','Intimate Work','$250 USD'],
 ['RIT-061','Untitled','Rituals','Acrylic on canvas','Intimate Work','$250 USD'],
 ['RIT-073','Untitled','Rituals','Acrylic on canvas','Signature Work','$2,000 USD'],
 ['RIT-079','Untitled','Rituals','Acrylic on canvas','Signature Work','$2,000 USD'],
 ['RIT-091','Untitled','Rituals','Acrylic on canvas','Statement Work',''],
 ['RIT-103','Untitled','Rituals','Acrylic on canvas','Intimate Work','$250 USD'],
 ['RIT-138','Untitled','Rituals','Acrylic on canvas','Intimate Work','$250 USD'],
 ['PA-124','Untitled','Pure Abstraction','Acrylic on canvas','Monumental Work','$6,000 USD'],
 ['PA-139','Untitled','Pure Abstraction','Acrylic on canvas','Statement Work','$3,700 USD'],
 ['PA-147','Untitled','Pure Abstraction','Acrylic on canvas','Statement Work','$3,700 USD'],
 ['PA-152','Untitled','Pure Abstraction','Acrylic on canvas','Statement Work','$3,700 USD'],
 ['PA-166','Untitled','Pure Abstraction','Acrylic on canvas','Statement Work','$3,700 USD'],
 ['PA-171','Untitled','Pure Abstraction','Acrylic on canvas','Statement Work','$3,700 USD'],
 ['PA-184','Untitled','Pure Abstraction','Acrylic on canvas','Monumental Work','$6,000 USD'],
 ['PA-193','Untitled','Pure Abstraction','Acrylic on canvas','Monumental Work','$6,000 USD'],
 ['PA-201','Untitled','Pure Abstraction','Acrylic on canvas','Monumental Work','$6,000 USD'],
 ['PA-214','Untitled','Pure Abstraction','Acrylic on canvas','Monumental Work','$6,000 USD'],
 ['CF-152','Untitled','Collected Fragments','Acrylic on canvas','Intimate Work','$250 USD'],
 ['CF-167','Untitled','Collected Fragments','Acrylic on canvas','Intimate Work','$250 USD'],
 ['CF-196','Untitled','Collected Fragments','Acrylic on canvas','Intimate Work','$250 USD'],
 ['OBJ-060','The Rewritten Chair','Cardúmenes','Acrylic on fabric / painted object','Painted Object','$3,200 USD'],
 ['OBJ-117','Painted Screen / Paravent','Pure Abstraction','Acrylic on wood / painted object','Painted Object','$6,000 USD']
].map(([code,title,collection,medium,format,price])=>({code,title,collection,medium,format,price}));
const archivePress=[['ARCH-EA-010','Design Center Catalogue, Caracas'],['ARCH-EA-008','Jackson Artworks, Omaha, U.S.A.'],['ARCH-EA-007','Truus Lemahieu Archive Page'],['ARCH-EA-003','Metro / Japanese Restaurant Installation']];
const archiveStudies=[['ARCH-ES-001','Early Fashion Study'],['ARCH-ES-002','Ski Figure Study'],['ARCH-ES-004','Paris Urban Sketch']];
const archiveStudio=[['ARCH-EA-004','Studio View: Large Blue Work in Progress'],['ARCH-EA-001','Signature Detail'],['ARCH-EA-002','Painted Screen / Paravent in Process']];

function Header({lang,setLang,t}){return <header className="site-header"><a href="#top" className="logo">T. LEMAHIEU</a><nav className="nav">{['biography','collections','formats','gallery','archive','contact'].map((id,i)=><a key={id} href={`#${id}`}>{t.nav[i]}</a>)}<button className="lang" onClick={()=>setLang(lang==='en'?'es':'en')}>{lang==='en'?'ES':'EN'}</button></nav></header>}
function WorkCard({w,t,onOpen}){return <article className="work-card"><div className="work-media"><Rotator items={[{code:w.code,type:'main'},{code:w.code,type:'context'}]} alt={w.code}/></div><div className="work-body"><span className="tag">{w.code}</span><span className="tag">{w.format}</span><h3 className="work-title">{w.title}</h3><div className="meta">{w.collection}<br/>{w.medium}</div><div className="availability"><span>{t.available}</span><span>{w.price||t.noPrice}</span></div><button className="details" onClick={()=>onOpen(w)}>{t.request} →</button></div></article>}
function ArchiveGroup({title,items,three=false}){return <div className="archive-group"><h3>{title}</h3><div className={three?'archive-grid three':'archive-grid press'}>{items.map(([code,title])=><article className="archive-card" key={code}><SmartImage code={code} alt={title}/><h4>{title}</h4></article>)}</div></div>}
export default function Page(){
 const [lang,setLang]=useState('en'); const [open,setOpen]=useState(null); const t=T[lang];
 return <main id="top"><Header lang={lang} setLang={setLang} t={t}/>
  <section className="hero"><div className="hero-copy"><div className="eyebrow">{t.heroEyebrow}</div><h1>{t.heroTitle}</h1><p>{t.heroCopy}</p><div className="cta-row"><a className="btn" href="#gallery">{t.viewWorks}</a><a className="btn secondary" href="#contact">{t.contact}</a></div></div><div className="hero-frame"><Rotator items={heroItems}/></div></section>
  <div className="quiet-statement">{t.unique}</div>
  <section id="biography"><div className="section-head"><div className="eyebrow">{t.bioLabel}</div><h2 className="section-title">{t.bioTitle}</h2><p className="section-copy">Belgium · Venezuela · U.S.A. · Germany · France · Netherlands · Russia</p></div><div className="bio-grid"><div className="bio-text"><p>{t.bio1}</p><p>{t.bio2}</p><p>{t.bio3}</p></div><div className="bio-images">{biography.map(([code,cap])=><figure key={code}><SmartImage code={code} alt={cap}/><figcaption>{cap}</figcaption></figure>)}</div></div></section>
  <section id="collections"><div className="section-head"><div className="eyebrow">Browse by collection</div><h2 className="section-title">{t.collectionsTitle}</h2><p className="section-copy">{t.collectionsCopy}</p></div>{collections.map(c=><article className="collection-card" key={c.id}><div className="collection-info"><div className="eyebrow">{c.count}</div><h3>{c.name}</h3><div className="subtitle">{c.subtitle}</div><p>{c.text}</p><a className="details" href={`#gallery`}>View works →</a></div><div className="collection-images">{c.codes.slice(0,4).map(code=><SmartImage key={code} code={code} type="context" alt={code}/>)}</div></article>)}</section>
  <section id="formats"><div className="section-head"><div className="eyebrow">Browse by format</div><h2 className="section-title">{t.formatsTitle}</h2><p className="section-copy">{t.formatsCopy}</p></div><div className="format-grid">{formats.map(f=><a href="#gallery" className="format-card" key={f.id}><SmartImage code={f.img} type="context" alt={f.name}/><div><h3>{f.name}</h3><p>{f.text}</p><span className="price">{f.price==='Private inquiry'?t.private:`${t.from} ${f.price}`}</span></div></a>)}</div></section>
  <section id="gallery"><div className="section-head"><div className="eyebrow">Available works</div><h2 className="section-title">{t.galleryTitle}</h2><p className="section-copy">{t.galleryCopy}</p></div><div className="gallery-grid">{works.map(w=><WorkCard key={w.code} w={w} t={t} onOpen={setOpen}/>)}</div></section>
  <section className="special"><div><div className="eyebrow">Studio commissions</div><h2 className="section-title">{t.specialTitle}</h2></div><p>{t.specialCopy}</p></section>
  <section id="archive"><div className="section-head"><div className="eyebrow">Archive</div><h2 className="section-title">{t.archiveTitle}</h2><p className="section-copy">{t.archiveCopy}</p></div><ArchiveGroup title="Press & exhibition archive" items={archivePress}/><ArchiveGroup title="Early works & studies" items={archiveStudies} three/><ArchiveGroup title="Studio & process" items={archiveStudio} three/></section>
  <section id="contact"><div className="section-head"><div className="eyebrow">Contact</div><h2 className="section-title">{t.contactTitle}</h2><p className="section-copy">{t.contactCopy}</p></div><div className="contact-grid"><div className="contact-card"><h3>{t.contacts}</h3><p><strong>{t.belgium}</strong><br/>+32 498 13 47 43</p><p><strong>{t.venezuela}</strong><br/>+58 412 259 1439</p><p><strong>{t.instagram}</strong><br/>@atelier.lemahieu</p></div><form className="contact-form" onSubmit={(e)=>e.preventDefault()}><input placeholder={t.name}/><input placeholder={t.email}/><input placeholder={t.phone}/><input placeholder={t.city}/><input placeholder={t.code}/><select defaultValue=""><option value="" disabled>{t.interest}</option><option>Purchasing</option><option>Commission / special project</option><option>More information</option><option>{t.other}</option></select><textarea placeholder={t.message}/><button className="btn" type="submit">{t.send}</button></form></div></section>
  <footer className="footer"><span>© T. Lemahieu</span><span>Original works and archive of the artist.</span></footer>
  {open&&<div className="modal-backdrop" onClick={()=>setOpen(null)}><div className="modal" onClick={e=>e.stopPropagation()}><SmartImage code={open.code} type="main" alt={open.code}/><div className="modal-content"><button className="close" onClick={()=>setOpen(null)}>×</button><span className="tag">{open.code}</span><span className="tag">{open.format}</span><h2 className="section-title">{open.title}</h2><p className="meta">{open.collection}<br/>{open.medium}</p><p className="availability"><span>{t.available}</span><span>{open.price||t.noPrice}</span></p><a className="btn" href="#contact" onClick={()=>setOpen(null)}>{t.contact}</a></div></div></div>}
 </main>
}
