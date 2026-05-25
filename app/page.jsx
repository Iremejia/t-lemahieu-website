'use client';

import { useEffect, useMemo, useState } from 'react';

const WORKS = [
  {
    "code": "PA-124",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Statement",
    "dimensions": "86x196",
    "price": "$4.300,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556163/PA-124-main_izuppy.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556678/PA-124-context_fdapwh.png"
  },
  {
    "code": "RIT-056",
    "collection": "Rituals",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Signature",
    "dimensions": "70x80",
    "price": "$2.000,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556153/RIT-056-main_cd54pc.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556658/RIT-056-context_pbgjgh.png"
  },
  {
    "code": "CAR-087",
    "collection": "Cardúmenes",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Statement",
    "dimensions": "80x200",
    "price": "$4.500,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556177/CAR-087-main_vlq6ch.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556637/CAR-087-context_ooy5i3.png"
  },
  {
    "code": "PA-139",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Monumental",
    "dimensions": "100x240",
    "price": "$6.500,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556168/PA-139-main_modmla.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556677/PA-139-context_q0qsap.png"
  },
  {
    "code": "CAR-092",
    "collection": "Cardúmenes",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Monumental",
    "dimensions": "100x240",
    "price": "$7.000,00",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556173/CAR-092-main_u2tg3p.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556635/CAR-092-context_muiyym.png"
  },
  {
    "code": "RIT-061",
    "collection": "Rituals",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Statement",
    "dimensions": "156x136",
    "price": "$5.200,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556168/RIT-061-main_zm2wll.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556657/RIT-061-context_rz9u30.png"
  },
  {
    "code": "PA-147",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Statement",
    "dimensions": "160x80",
    "price": "$3.700,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556171/PA-147-main_gophby.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556667/PA-147-context_gktxhu.png"
  },
  {
    "code": "CAR-104",
    "collection": "Cardúmenes",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Monumental",
    "dimensions": "140x225",
    "price": "$8.500,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556183/CAR-104-main_ymqedf.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556635/CAR-104-context_hc9q4u.png"
  },
  {
    "code": "RIT-073",
    "collection": "Rituals",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Signature",
    "dimensions": "77x100",
    "price": "$2.400,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556154/RIT-073-main_tg3ggw.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556656/RIT-073-context_bv5f4k.png"
  },
  {
    "code": "RIT-079",
    "collection": "Rituals",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Monumental",
    "dimensions": "140x190",
    "price": "$7.000,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556154/RIT-079-main_grufie.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556654/RIT-079-context_puby6q.png"
  },
  {
    "code": "OBJ-060",
    "collection": "Cardúmenes",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Painted Objects",
    "dimensions": "",
    "price": "$3.200,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556133/OBJ-060-main_yr6tp9.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556612/OBJ-060-context_qtgngk.png"
  },
  {
    "code": "RIT-084",
    "collection": "Rituals",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "32x24",
    "price": "$900,00",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556132/RIT-084-main_dln7gl.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556611/RIT-084-context_glxtsw.png"
  },
  {
    "code": "CAR-118",
    "collection": "Cardúmenes",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Monumental",
    "dimensions": "",
    "price": "$7.500,00",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556178/CAR-118-main_rkb90x.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556635/CAR-118-context_yeno2x.png"
  },
  {
    "code": "PA-152",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Monumental",
    "dimensions": "",
    "price": "$7.000,00",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556170/PA-152-main_puoz3j.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556666/PA-152-context_yupir9.png"
  },
  {
    "code": "PA-166",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Acrylic on wood",
    "format": "Intimate",
    "dimensions": "31x21",
    "price": "$3.200,00",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556161/PA-166-main_yswl4r.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556612/PA-166-context_ic571d.png"
  },
  {
    "code": "PA-171",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Intimate",
    "dimensions": "28x28",
    "price": "$600,00",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556157/PA-171-main_kkhyxu.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556613/PA-171-context_puka9b.png"
  },
  {
    "code": "PA-184",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "32x24",
    "price": "$700,00",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556142/PA-184-main_laypej.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779559167/PA-184-context_cxqlgj.png"
  },
  {
    "code": "RIT-091",
    "collection": "Rituals",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "",
    "price": "",
    "status": "Commission reference",
    "main": "",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556626/RIT-091-context_rjcic3.png"
  },
  {
    "code": "CAR-126",
    "collection": "Cardúmenes",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Signature",
    "dimensions": "60x40",
    "price": "$1.400,00",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556182/CAR-126-main_k0ihd6.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556633/CAR-126-context_sfhwim.png"
  },
  {
    "code": "PA-193",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Signature",
    "dimensions": "",
    "price": "$2.200,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556128/PA-193-main_anyjbj.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556662/PA-193-context_uijwfy.png"
  },
  {
    "code": "CAR-132",
    "collection": "Cardúmenes",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Statement",
    "dimensions": "",
    "price": "",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556179/CAR-132-main_nt1rif.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556630/CAR-132-context_gppqda.png"
  },
  {
    "code": "PA-201",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Statement",
    "dimensions": "",
    "price": "$4.200,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556164/PA-201-main_zey16q.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556664/PA-201-context_gtdlzo.png"
  },
  {
    "code": "PA-214",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "Intimate",
    "dimensions": "28x28",
    "price": "$2.200,00",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556157/PA-214-main_r0gnh3.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556664/PA-214-context_fx7upa.png"
  },
  {
    "code": "RIT-103",
    "collection": "Rituals",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "22x22",
    "price": "$600,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556134/RIT-103-main_ub7a6r.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556623/RIT-103-context_asvjrv.png"
  },
  {
    "code": "PA-227",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "32x24",
    "price": "$700,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779559150/PA-227-main_irpvsq.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556663/PA-227-context_oc0jai.png"
  },
  {
    "code": "RIT-118",
    "collection": "Rituals",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "32x24",
    "price": "$350,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556155/RIT-118-main_ijkdz6.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556621/RIT-118-context_trledp.png"
  },
  {
    "code": "RIT-124",
    "collection": "Rituals",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "32x24",
    "price": "$1.200,00",
    "status": "Available",
    "main": "",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556618/RIT-124-context_mepkyo.png"
  },
  {
    "code": "RIT-138",
    "collection": "Rituals",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "32x24",
    "price": "$700,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556137/RIT-138-main_hxkzqe.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556621/RIT-138-context_y03kh9.png"
  },
  {
    "code": "CAR-141",
    "collection": "Cardúmenes",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "32x24",
    "price": "$700,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556484/CAR-141-main_tefob8.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556652/CAR-141-context_arvp3u.png"
  },
  {
    "code": "CAR-154",
    "collection": "Cardúmenes",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "32x24",
    "price": "$700,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556477/CAR-154-main_vm1viu.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556647/CAR-154-context_ywci3x.png"
  },
  {
    "code": "CAR-169",
    "collection": "Cardúmenes",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "32x24",
    "price": "$900,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556476/CAR-169-main_uvlcge.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556646/CAR-169-context_n7emmy.png"
  },
  {
    "code": "RIT-146",
    "collection": "Rituals",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "32x24",
    "price": "$900,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556131/RIT-146-main_vmgllx.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556611/RIT-146-context_tnzmlw.png"
  },
  {
    "code": "CF-041",
    "collection": "Collected Fragments",
    "title": "",
    "medium": "Collage",
    "format": "Intimate",
    "dimensions": "20x20",
    "price": "$450,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556481/CF-041-main_vjxkon.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556645/CF-041-context_lkh0cs.png"
  },
  {
    "code": "CF-COMP2",
    "collection": "Collected Fragments",
    "title": "",
    "medium": "Collage",
    "format": "Intimate",
    "dimensions": "20x20",
    "price": "$650,00",
    "status": "Available",
    "main": "",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779557728/CF-COMP2_ztotz1.png"
  },
  {
    "code": "CF-064",
    "collection": "Collected Fragments",
    "title": "",
    "medium": "Collage",
    "format": "Intimate",
    "dimensions": "20x20",
    "price": "$250,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556148/CF-064-main_fyl7e6.png",
    "context": ""
  },
  {
    "code": "CF-078",
    "collection": "Collected Fragments",
    "title": "",
    "medium": "Collage",
    "format": "Intimate",
    "dimensions": "20x20",
    "price": "$250,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556151/CF-078-main_fj3qjn.png",
    "context": ""
  },
  {
    "code": "CF-083",
    "collection": "Collected Fragments",
    "title": "",
    "medium": "Collage",
    "format": "Intimate",
    "dimensions": "20x20",
    "price": "$250,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556145/CF-083-main_tdoo83.png",
    "context": ""
  },
  {
    "code": "CF-097",
    "collection": "Collected Fragments",
    "title": "",
    "medium": "Collage",
    "format": "Intimate",
    "dimensions": "20x20",
    "price": "$250,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556145/CF-097-main_vtwcux.png",
    "context": ""
  },
  {
    "code": "CF-105",
    "collection": "Collected Fragments",
    "title": "",
    "medium": "Collage",
    "format": "Intimate",
    "dimensions": "20x20",
    "price": "$250,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556143/CF-105-main_nhotaz.png",
    "context": ""
  },
  {
    "code": "CF-116",
    "collection": "Collected Fragments",
    "title": "",
    "medium": "Collage",
    "format": "Intimate",
    "dimensions": "20x20",
    "price": "$250,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556140/CF-116-main_x1wtdo.png",
    "context": ""
  },
  {
    "code": "CF-196",
    "collection": "Collected Fragments",
    "title": "",
    "medium": "Collage",
    "format": "Intimate",
    "dimensions": "22x16",
    "price": "$450,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556139/CF-196-main_lus5am.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556638/CF-196-context_pwtp9g.png"
  },
  {
    "code": "CF-152",
    "collection": "Collected Fragments",
    "title": "",
    "medium": "Collage",
    "format": "Intimate",
    "dimensions": "10x10",
    "price": "$250,00",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556161/CF-152-main_iwmobc.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556648/CF-152-context_ryme3p.png"
  },
  {
    "code": "CF-COMP1",
    "collection": "Collected Fragments",
    "title": "",
    "medium": "Collage",
    "format": "Intimate",
    "dimensions": "20x20",
    "price": "$1.200,00",
    "status": "Available",
    "main": "",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779557730/CF-COMP1_aynl5j.png"
  },
  {
    "code": "OBJ-048",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Acrylic on wood",
    "format": "Painted Objects",
    "dimensions": "",
    "price": "",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556134/OBJ-048-main_xypntw.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556610/OBJ-048-context_vde4dq.png"
  },
  {
    "code": "RIT-117",
    "collection": "Rituals",
    "title": "",
    "medium": "Mixed media on paper",
    "format": "Intimate",
    "dimensions": "32x24",
    "price": "$700,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556132/RIT-117-main_pdt1kd.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556622/RIT-117-context_cmtkm1.png"
  },
  {
    "code": "CF-167",
    "collection": "Collected Fragments",
    "title": "",
    "medium": "Collage",
    "format": "Intimate",
    "dimensions": "20x20",
    "price": "$450,00",
    "status": "Available",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556165/CF-167-main_xl2ktf.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556645/CF-167-context_yu1wwe.png"
  },
  {
    "code": "CAR-134",
    "collection": "Cardúmenes",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "",
    "dimensions": "",
    "price": "",
    "status": "Commission reference",
    "main": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556181/CAR-134-main_rmewsb.png",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556655/CAR-134-context_pfi1uh.png"
  },
  {
    "code": "PA-112",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "",
    "dimensions": "",
    "price": "",
    "status": "Commission reference",
    "main": "",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556678/PA-112-context_uy7xy4.png"
  },
  {
    "code": "PA-113",
    "collection": "Pure Abstraction",
    "title": "",
    "medium": "Acrylic on canvas",
    "format": "",
    "dimensions": "",
    "price": "",
    "status": "Commission reference",
    "main": "",
    "context": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556673/PA-113-context_jmx4se.png"
  }
];

const ARCHIVE = [
  {
    "code": "ARCH-ES-001",
    "name": "Early fashion study",
    "group": "Early Studies",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654267/ARCH-ES-001_zbt3va.png",
    "year": "1978",
    "caption": "Fashion illustration study from the artist’s early formation in Belgium."
  },
  {
    "code": "ARCH-ES-002",
    "name": "Ski figure study",
    "group": "Early Studies",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654269/ARCH-ES-002_xekfdt.png",
    "year": "1999",
    "caption": "Archival study combining figure, movement and graphic composition."
  },
  {
    "code": "ARCH-ES-003",
    "name": "Travel composition",
    "group": "Early Studies",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654271/ARCH-ES-003_ffilkm.png",
    "year": "1982",
    "caption": "Early composition referencing travel, personal objects and movement between Europe and Venezuela."
  },
  {
    "code": "ARCH-ES-004",
    "name": "Paris urban sketch",
    "group": "Early Studies",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654273/ARCH-ES-004_rj1sh6.png",
    "year": "1981",
    "caption": "Drawing study from Paris, reflecting the artist’s early attention to architecture, urban rhythm and observation."
  },
  {
    "code": "ARCH-EA-001",
    "name": "Signature Detail",
    "group": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654258/ARCH-EA-001_nwkzer.png",
    "year": "",
    "caption": ""
  },
  {
    "code": "ARCH-EA-002",
    "name": "Studio & Process / Painted Objects",
    "group": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654258/ARCH-EA-002_xg0waz.png",
    "year": "",
    "caption": ""
  },
  {
    "code": "ARCH-EA-003",
    "name": "Japanese Restaurant Installation",
    "group": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654260/ARCH-EA-003_ydcpsh.png",
    "year": "1999",
    "caption": "Press clipping from Metro, June 9, 1999, documenting a work installed in a Japanese restaurant setting."
  },
  {
    "code": "ARCH-EA-004",
    "name": "Studio View: Large Blue Work in Progress",
    "group": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654263/ARCH-EA-004_r1qchr.png",
    "year": "",
    "caption": ""
  },
  {
    "code": "ARCH-EA-005",
    "name": "Signing a Large-Scale Work",
    "group": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654261/ARCH-EA-005_hlgjdy.png",
    "year": "",
    "caption": ""
  },
  {
    "code": "ARCH-EA-006",
    "name": "Artist archive, 1990s",
    "group": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654261/ARCH-EA-006_rgwzrj.png",
    "year": "1990",
    "caption": "Truusje Lemahieu pictured with a monumental work"
  },
  {
    "code": "ARCH-EA-007",
    "name": "Archive Page",
    "group": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654267/ARCH-EA-007_kcd6vb.png",
    "year": "",
    "caption": "Archival profile page on Truus Lemahieu, documenting her European formation, move to South America and participation in international artistic organisations."
  },
  {
    "code": "ARCH-EA-008",
    "name": "Jackson Artworks, Omaha, U.S.A.",
    "group": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654266/ARCH-EA-008_ek9vwc.png",
    "year": "",
    "caption": "International exhibition project connecting artists from the United States, Belgium, Germany and Venezuela."
  },
  {
    "code": "ARCH-EA-009",
    "name": "AIAG Catalogue, Germany",
    "group": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654376/ARCH-EA-009_thhxxw.png",
    "year": "",
    "caption": "Catalogue from the Association of International Artists based in Germany, featuring artists from Europe, the Americas and beyond."
  },
  {
    "code": "ARCH-EA-010",
    "name": "Design Center Catalogue",
    "group": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654377/ARCH-EA-010_u91tzv.png",
    "year": "",
    "caption": "Catalogue page from “El Arte y el Diseño Industrial contemporáneo en el sureste de Caracas: 2ª muestra”, featuring Truusje Lemahieu among participating artists"
  }
];
const ARCHIVE_PRESS = ["ARCH-EA-010", "ARCH-EA-008", "ARCH-EA-007", "ARCH-EA-003"];
const ARCHIVE_STUDIES = ["ARCH-ES-001", "ARCH-ES-002", "ARCH-ES-004"];
const ARCHIVE_STUDIO = ["ARCH-EA-004", "ARCH-EA-001", "ARCH-EA-002"];
const BIOGRAPHY_CODES = ["ARCH-EA-006", "ARCH-ES-003", "ARCH-EA-005", "ARCH-EA-009"];
const COLLECTION_SELECTIONS = {
  "cardumenes": [
    "CAR-092",
    "CAR-118",
    "CAR-126",
    "CAR-169"
  ],
  "rituals": [
    "RIT-056",
    "RIT-061",
    "RIT-073",
    "RIT-117"
  ],
  "pure-abstraction": [
    "PA-124",
    "PA-147",
    "PA-166",
    "PA-201"
  ],
  "collected-fragments": [
    "CF-041",
    "CF-COMP2",
    "CF-167",
    "CF-196"
  ]
};
const FORMAT_SELECTIONS = {
  "Intimate": [
    "CF-167",
    "RIT-103",
    "PA-227",
    "CAR-141"
  ],
  "Signature": [
    "RIT-056",
    "RIT-073",
    "CAR-126",
    "PA-193"
  ],
  "Statement": [
    "PA-124",
    "RIT-061",
    "CAR-087",
    "PA-201"
  ],
  "Monumental": [
    "CAR-092",
    "CAR-104",
    "PA-139",
    "RIT-079"
  ],
  "Painted Objects": [
    "OBJ-060",
    "OBJ-048"
  ]
};

const heroCodes = ['PA-124', 'RIT-056', 'CAR-092', 'RIT-061', 'PA-147', 'CAR-118'];

const T = {
  en: {
    nav: [
      ['biography', 'Biography'],
      ['collections', 'Collections'],
      ['formats', 'Formats'],
      ['gallery', 'Gallery'],
      ['archive', 'Archive'],
      ['contact', 'Contact'],
    ],
    heroEyebrow: 'Belgian artist · Venezuelan soul',
    heroTitleLine1: 'Two worlds,',
    heroTitleLine2: 'one brush.',
    heroText:
      'Abstract works built through color, light, depth, and balance — compositions where each brushstroke holds its place within a larger search for equilibrium.',
    viewWorks: 'View collection',
    contactStudio: 'Inquire',
    uniqueStatement:
      'All works are unique and original pieces, painted by the artist.',
    bioEyebrow: 'Biography',
    bioTitle: 'The artist',
    bioLead: 'Belgium · Venezuela · United States · Germany · France · Netherlands · Russia',
    bio1:
      'Born in Veurne, Belgium, Truusje Lemahieu trained in applied arts, painting and drawing across Belgium and France before building a long artistic life between Europe and Venezuela. Her work carries the discipline of European formation and the chromatic intensity of the tropics, where color became not a discovery, but a natural language that finally made sense.',
    bio2:
      'Across four decades, her practice has moved through abstraction, object, gesture, domestic form and large-scale composition. Bowls, fish, signs, fragments and fields of color appear as recurring territories: never decorative motifs, but vessels for rhythm, memory and movement.',
    bio3:
      'Her work has been exhibited and connected through projects in Belgium, Venezuela, the United States, Germany, France, the Netherlands, Russia and other international contexts. This archive brings together works, studies, press material and studio images as part of a renewed presentation of her artistic universe.',
    collectionsEyebrow: 'Browse by collection',
    collectionsTitle: 'Collections',
    collectionsText:
      'The work of T. Lemahieu is born from a deep relationship with color, light, depth, and balance. Her compositions create dimension through the layering of two-dimensional brushstrokes, carefully placed in relation to one another. Nothing is left to chance. Each gesture holds its place within a search for equilibrium, both vertical and horizontal. Color is never static in her work. It shifts, vibrates, and transforms according to the colors around it. Each collection opens a territory of its own, where the eye enters, moves through, and lingers.',
    formatsEyebrow: 'Browse by format',
    formatsTitle: 'Choose by scale, space and presence',
    formatsText:
      'Works may be approached through scale: from intimate pieces for personal, layered spaces to oversized works with architectural presence.',
    galleryEyebrow: 'Available works',
    galleryTitle: 'Gallery',
    galleryText:
      'A curated selection of available works and commission references. Use the filters to explore the collection by family or format.',
    archiveEyebrow: 'Archive',
    archiveTitle: 'Archive',
    archiveText:
      'Press material, early studies and studio records tracing the artist’s formation and exhibition history.',
    specialEyebrow: 'Special projects',
    specialTitle: 'Unique works for particular spaces',
    specialText:
      'Special requests may be considered based on the artist’s existing styles, visual language and reference works. Every resulting piece remains unique and original.',
    contactEyebrow: 'Contact',
    contactTitle: 'Inquire about works or projects',
    contactText:
      'For availability, acquisitions, commissions or project conversations, contact the studio directly or leave your details below.',
    allWorks: 'All works',
    allFormats: 'All formats',
    viewDetails: 'View details',
    nextView: 'Next view',
    artwork: 'Artwork',
    inContext: 'In context',
    medium: 'Technique',
    dimensions: 'Dimensions',
    price: 'Price',
    status: 'Status',
    available: 'Available',
    commissionReference: 'Commission reference',
    priceUponRequest: 'Price upon request',
    inquireWork: 'Inquire about this work',
    archivePress: 'Press & exhibition archive',
    archiveStudies: 'Early works & studies',
    archiveStudio: 'Studio & process',
    filtersCollection: 'Collection',
    filtersFormat: 'Format',
    name: 'Name',
    email: 'Email',
    phone: 'WhatsApp / Phone',
    city: 'Country / City',
    workCode: 'Artwork code of interest (optional)',
    interest: 'Interest',
    purchasing: 'Acquisition',
    commission: 'Commission / special project',
    info: 'More information',
    other: 'Other',
    message: 'Message',
    send: 'Send inquiry',
    belgium: 'Belgium',
    venezuela: 'Venezuela',
    instagram: 'Instagram',
    footer: 'Original works and artist archive.',
  },
  es: {
    nav: [
      ['biography', 'Biografía'],
      ['collections', 'Colecciones'],
      ['formats', 'Formatos'],
      ['gallery', 'Galería'],
      ['archive', 'Archivo'],
      ['contact', 'Contacto'],
    ],
    heroEyebrow: 'Artista belga · alma venezolana',
    heroTitleLine1: 'Dos mundos,',
    heroTitleLine2: 'un pincel.',
    heroText:
      'Obras abstractas construidas a través del color, la luz, la profundidad y el equilibrio: composiciones donde cada pincelada ocupa su lugar dentro de una búsqueda mayor de armonía.',
    viewWorks: 'Ver colección',
    contactStudio: 'Consultar',
    uniqueStatement:
      'Todas las obras son piezas únicas y originales, pintadas por la artista.',
    bioEyebrow: 'Biografía',
    bioTitle: 'La artista',
    bioLead: 'Bélgica · Venezuela · Estados Unidos · Alemania · Francia · Holanda · Rusia',
    bio1:
      'Nacida en Veurne, Bélgica, Truusje Lemahieu se formó en artes aplicadas, pintura y dibujo entre Bélgica y Francia antes de construir una vida artística entre Europa y Venezuela. Su obra reúne la disciplina de la formación europea y la intensidad cromática del trópico, donde el color no apareció como descubrimiento, sino como un lenguaje natural que finalmente hizo sentido.',
    bio2:
      'Durante más de cuatro décadas, su práctica ha transitado la abstracción, el objeto, el gesto, la forma doméstica y la composición de gran escala. Cuencos, peces, signos, fragmentos y campos de color aparecen como territorios recurrentes: no como motivos decorativos, sino como contenedores de ritmo, memoria y movimiento.',
    bio3:
      'Su trabajo ha sido exhibido y vinculado a proyectos en Bélgica, Venezuela, Estados Unidos, Alemania, Francia, Holanda, Rusia y otros contextos internacionales. Este archivo reúne obras, estudios, prensa e imágenes de estudio como parte de una nueva presentación de su universo artístico.',
    collectionsEyebrow: 'Explorar por colección',
    collectionsTitle: 'Colecciones',
    collectionsText:
      'La obra de T. Lemahieu nace de una relación profunda con el color, la luz, la profundidad y el equilibrio. Sus composiciones construyen dimensión a través de capas de pinceladas bidimensionales, cuidadosamente ubicadas en relación unas con otras. Nada queda al azar. Cada gesto ocupa su lugar dentro de una búsqueda de equilibrio, tanto vertical como horizontal. El color nunca es estático en su obra: cambia, vibra y se transforma según los colores que lo rodean. Cada colección abre un territorio propio, donde la mirada entra, recorre y permanece.',
    formatsEyebrow: 'Explorar por formato',
    formatsTitle: 'Elegir por escala, espacio y presencia',
    formatsText:
      'Las obras también pueden abordarse desde la escala: desde piezas íntimas para espacios personales y estratificados hasta obras sobredimensionadas con presencia arquitectónica.',
    galleryEyebrow: 'Obras disponibles',
    galleryTitle: 'Galería',
    galleryText:
      'Una selección curada de obras disponibles y referencias de comisión. Usa los filtros para explorar la colección por familia o formato.',
    archiveEyebrow: 'Archivo',
    archiveTitle: 'Archivo',
    archiveText:
      'Material de prensa, estudios tempranos y registros de estudio que trazan la formación y la historia expositiva de la artista.',
    specialEyebrow: 'Proyectos especiales',
    specialTitle: 'Piezas únicas para espacios particulares',
    specialText:
      'Se pueden considerar solicitudes especiales basadas en los estilos existentes, el lenguaje visual y obras de referencia de la artista. Cada pieza resultante sigue siendo única y original.',
    contactEyebrow: 'Contacto',
    contactTitle: 'Consultar sobre obras o proyectos',
    contactText:
      'Para disponibilidad, adquisiciones, encargos o conversaciones de proyecto, contacta al estudio directamente o deja tus datos abajo.',
    allWorks: 'Todas las obras',
    allFormats: 'Todos los formatos',
    viewDetails: 'Ver detalles',
    nextView: 'Siguiente vista',
    artwork: 'Obra',
    inContext: 'En contexto',
    medium: 'Técnica',
    dimensions: 'Medidas',
    price: 'Precio',
    status: 'Estatus',
    available: 'Disponible',
    commissionReference: 'Referencia de comisión',
    priceUponRequest: 'Precio bajo consulta',
    inquireWork: 'Consultar por esta obra',
    archivePress: 'Archivo de prensa y exposiciones',
    archiveStudies: 'Trabajos tempranos y estudios',
    archiveStudio: 'Estudio y proceso',
    filtersCollection: 'Colección',
    filtersFormat: 'Formato',
    name: 'Nombre',
    email: 'Email',
    phone: 'WhatsApp / Teléfono',
    city: 'País / Ciudad',
    workCode: 'Código de obra de interés (opcional)',
    interest: 'Interés',
    purchasing: 'Adquisición',
    commission: 'Comisión / proyecto especial',
    info: 'Más información',
    other: 'Otro',
    message: 'Mensaje',
    send: 'Enviar consulta',
    belgium: 'Bélgica',
    venezuela: 'Venezuela',
    instagram: 'Instagram',
    footer: 'Obras originales y archivo de la artista.',
  }
};

const collectionDefs = [
  {
    id: 'cardumenes',
    keys: ['Cardúmenes'],
    name: { en: 'Cardúmenes', es: 'Cardúmenes' },
    subtitle: { en: 'Shoals, currents and collective movement', es: 'Cardúmenes, corrientes y movimiento colectivo' },
    description: {
      en: 'More than a representation of the sea, Cardúmenes explores movement as a collective force. Direction, synchronicity, abundance, and rhythm move through the composition, creating a sense of life in motion. Brushstrokes gather like living particles, shaping surfaces that seem to open inward. The eye moves through layers of color and light, as if entering a current. Each work offers an immersion, a space in flow where new planes, new depths, and a constant vibration of life begin to appear.',
      es: 'Más que una representación del mar, Cardúmenes explora el movimiento como una fuerza colectiva. Dirección, sincronía, abundancia y ritmo atraviesan la composición, creando una sensación de vida en movimiento. Las pinceladas se reúnen como partículas vivas y construyen superficies que parecen abrirse hacia adentro. La mirada recorre capas de color y luz, como si entrara en una corriente. Cada obra ofrece una inmersión, un espacio en flujo donde empiezan a aparecer nuevos planos, nuevas profundidades y una vibración constante de vida.',
    },
  },
  {
    id: 'rituals',
    keys: ['Rituals'],
    name: { en: 'Rituals', es: 'Rituales' },
    subtitle: { en: 'Object, pause and ceremony', es: 'Objeto, pausa y ceremonia' },
    description: {
      en: 'In Rituals, objects detach from their everyday function and take on a ceremonial presence. The artist shifts perspective, crosses planes, and brings different points of view into a single composition. Forms flatten, expand, overlap, and become sculptural. Between the recognizable and the abstract, color intensifies the emotion of each element, light builds atmosphere, and depth emerges from the tension between surface and space. The everyday ceases to be ordinary and becomes pause, gathering, presence, and ceremony.',
      es: 'En Rituals, los objetos se desprenden de su función cotidiana y adquieren una presencia ceremonial. La artista desplaza la perspectiva, cruza planos y reúne distintos puntos de vista en una misma composición. Las formas se aplanan, se expanden, se superponen y se vuelven escultóricas. Entre lo reconocible y lo abstracto, el color intensifica la emoción de cada elemento, la luz construye atmósfera y la profundidad emerge de la tensión entre superficie y espacio. Lo cotidiano deja de ser ordinario y se convierte en pausa, encuentro, presencia y ceremonia.',
    },
  },
  {
    id: 'pure-abstraction',
    keys: ['Pure Abstraction'],
    name: { en: 'Pure Abstraction', es: 'Abstracción Pura' },
    subtitle: { en: 'Gesture, color and visual force', es: 'Gesto, color y fuerza visual' },
    description: {
      en: 'In Pure Abstraction, abstraction becomes a language of its own. Free, recurring, and unmistakably personal forms emerge through color, light, and depth, creating compositions that do not need to represent in order to hold presence. Each work exists through its own visual force. The eye enters a territory of gestures, planes, and forms that belong to the most essential universe of T. Lemahieu. Beneath the apparent freedom of the composition lies a precise balance, where every brushstroke is placed with intention.',
      es: 'En Pure Abstraction, la abstracción se convierte en un lenguaje propio. Formas libres, recurrentes e inconfundiblemente personales emergen a través del color, la luz y la profundidad, creando composiciones que no necesitan representar para sostener presencia. Cada obra existe por su propia fuerza visual. La mirada entra en un territorio de gestos, planos y formas que pertenecen al universo más esencial de T. Lemahieu. Bajo la aparente libertad de la composición existe un equilibrio preciso, donde cada pincelada está colocada con intención.',
    },
  },
  {
    id: 'collected-fragments',
    keys: ['Collected Fragments'],
    name: { en: 'Collected Fragments', es: 'Fragmentos Reunidos' },
    subtitle: { en: 'Archive, fragment and recomposition', es: 'Archivo, fragmento y recomposición' },
    description: {
      en: 'Collected Fragments brings together small-format works built through intuition, cutting, and layering. They are intimate and tactile pieces, close to the gesture of archive, fragment, and recomposition. Depth appears through the relationship between layers of paper, color, texture, cuts, encounters, accidents, and intuitive decisions. Through their scale, each piece invites a closer, more private gaze, a quieter and more detailed entrance into the artist’s universe.',
      es: 'Collected Fragments reúne obras de pequeño formato construidas desde la intuición, el corte y la superposición. Son piezas íntimas y táctiles, cercanas al gesto de archivo, fragmento y recomposición. La profundidad aparece a través de la relación entre capas de papel, color, textura, cortes, encuentros, accidentes y decisiones intuitivas. Por su escala, cada pieza invita a una mirada más cercana y privada, una entrada más silenciosa y detallada al universo de la artista.',
    },
  },
];

const formatDefs = [
  { id: 'Intimate', label: { en: 'Intimate', es: 'Íntimo' }, note: { en: 'Collected small-scale works for personal, layered spaces.', es: 'Obras de pequeña escala para espacios personales y estratificados.' } },
  { id: 'Signature', label: { en: 'Signature', es: 'Signature' }, note: { en: 'Medium-format pieces with a distinct visual identity.', es: 'Piezas de formato medio con una identidad visual marcada.' } },
  { id: 'Statement', label: { en: 'Statement', es: 'Statement' }, note: { en: 'Large-scale works designed to anchor a room.', es: 'Obras de gran escala diseñadas para anclar un espacio.' } },
  { id: 'Monumental', label: { en: 'Monumental', es: 'Monumental' }, note: { en: 'Oversized works with architectural presence.', es: 'Obras sobredimensionadas con presencia arquitectónica.' } },
  { id: 'Painted Objects', label: { en: 'Painted Objects', es: 'Objetos Pintados' }, note: { en: 'Functional pieces transformed through painting.', es: 'Piezas funcionales transformadas a través de la pintura.' } },
];

function translateStatus(status, t) {
  if (!status) return '';
  if (status.toLowerCase().includes('commission')) return t.commissionReference;
  if (status.toLowerCase().includes('available')) return t.available;
  return status;
}
function workByCode(code) {
  return WORKS.find((item) => item.code === code);
}

function archiveByCode(code) {
  return ARCHIVE.find((item) => item.code === code);
}

function useRotator(length, delay = 4200) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!length || length < 2) return undefined;
    const timer = setInterval(() => setIndex((current) => (current + 1) % length), delay);
    return () => clearInterval(timer);
  }, [length, delay]);
  return [index, setIndex];
}

function Header({ lang, setLang, t }) {
  return (
    <header className="site-header">
      <a href="#top" className="site-logo">T. LEMAHIEU</a>
      <nav className="site-nav">
        {t.nav.map(([id, label]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
        <button className="lang-switch" onClick={() => setLang(lang === 'en' ? 'es' : 'en')}>
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
      </nav>
    </header>
  );
}

function HeroRotator() {
  const views = useMemo(() => heroCodes.flatMap((code) => {
    const work = workByCode(code);
    if (!work) return [];
    const list = [];
    if (work.main) list.push({ src: work.main, alt: code });
    if (work.context) list.push({ src: work.context, alt: `${code} context` });
    return list;
  }), []);
  const [index] = useRotator(views.length, 3800);
  const current = views[index] || views[0];
  if (!current) return null;
  return (
    <div className="hero-media">
      <img src={current.src} alt={current.alt} />
    </div>
  );
}

function EditorialImageSet({ codes }) {
  const items = codes.map(workByCode).filter(Boolean);
  if (!items.length) return null;
  return (
    <div className="editorial-image-set">
      <figure className="primary">
        <img src={items[0].context || items[0].main} alt={items[0].code} />
      </figure>
      <div className="secondary-stack">
        {items.slice(1, 3).map((item) => (
          <figure key={item.code}>
            <img src={item.context || item.main} alt={item.code} />
          </figure>
        ))}
      </div>
      {items[3] ? (
        <figure className="wide">
          <img src={items[3].context || items[3].main} alt={items[3].code} />
        </figure>
      ) : null}
    </div>
  );
}

function CollectionSection({ def, lang, setCollection, scrollToGallery }) {
  return (
    <article className="collection-row" id={def.id} onClick={() => { setCollection(def.id); scrollToGallery(); }}>
      <div className="collection-copy">
        <div className="mini-kicker">{lang === 'en' ? 'Collection' : 'Colección'}</div>
        <h3>{def.name[lang]}</h3>
        <p className="collection-subtitle">{def.subtitle[lang]}</p>
        <p className="body-copy">{def.description[lang]}</p>
        <button
          className="text-link"
          onClick={() => { setCollection(def.id); scrollToGallery(); }}
        >
          {lang === 'en' ? 'View selection' : 'Ver selección'}
        </button>
      </div>
      <EditorialImageSet codes={COLLECTION_SELECTIONS[def.id]} />
    </article>
  );
}

function FormatCard({ def, lang, setFormat, scrollToGallery }) {
  const sampleCode = (FORMAT_SELECTIONS[def.id] || [])[0];
  const sampleWork = sampleCode ? workByCode(sampleCode) : null;
  return (
    <article className="format-card" onClick={() => { setFormat(def.id); scrollToGallery(); }}>
      {sampleWork ? (
        <figure>
          <img src={sampleWork.context || sampleWork.main} alt={sampleWork.code} />
        </figure>
      ) : null}
      <div>
        <div className="mini-kicker">{lang === 'en' ? 'Format' : 'Formato'}</div>
        <h3>{def.label[lang]}</h3>
        <p>{def.note[lang]}</p>
        <button
          className="text-link"
          onClick={() => { setFormat(def.id); scrollToGallery(); }}
        >
          {lang === 'en' ? 'Browse works' : 'Explorar obras'}
        </button>
      </div>
    </article>
  );
}

function ArtworkFigure({ work, t, onOpen }) {
  const views = [work.main, work.context].filter(Boolean);
  const [index, setIndex] = useRotator(views.length, 4500);
  const current = views[index] || work.main;
  return (
    <article className="artwork-figure">
      <button className="artwork-image-wrap clickable-artwork" type="button" onClick={() => onOpen(work)}>
        <img src={current} alt={work.code} />
      </button>
      {views.length > 1 ? (
        <button className="image-toggle" onClick={() => setIndex((index + 1) % views.length)}>
          {t.nextView}
        </button>
      ) : null}
      <button className="artwork-caption clickable-caption" type="button" onClick={() => onOpen(work)}>
        <div className="tag-row">
          <span className="tag">{work.code}</span>
          {work.format ? <span className="tag">{work.format}</span> : null}
        </div>
        {work.title ? <h3>{work.title}</h3> : null}
        <p>{work.medium}</p>
        <p>{work.dimensions}</p>
        <div className="availability-row">
          <span>{translateStatus(work.status, t) || t.available}</span>
          <span>{work.price || t.priceUponRequest}</span>
        </div>
        <span className="caption-link">{t.viewDetails}</span>
      </button>
    </article>
  );
}

function ArchiveRow({ title, codes }) {
  return (
    <div className="archive-row-block">
      <h3 className="archive-row-title">{title}</h3>
      <div className={`archive-grid ${codes.length === 4 ? 'four' : 'three'}`}>
        {codes.map((code) => {
          const item = archiveByCode(code);
          if (!item) return null;
          return (
            <article key={code} className="archive-item">
              <figure>
                <img src={item.url} alt={item.name} />
              </figure>
              <div className="archive-caption">
                {item.year ? <span className="archive-year">{item.year}</span> : null}
                <h4>{item.name}</h4>
                {item.caption ? <p>{item.caption}</p> : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function ContactSection({ t }) {
  return (
    <div className="contact-layout">
      <div className="contact-details">
        <div className="contact-block">
          <span className="mini-kicker">{t.belgium}</span>
          <p>+32 498 13 47 43</p>
        </div>
        <div className="contact-block">
          <span className="mini-kicker">{t.venezuela}</span>
          <p>+58 412 259 1439</p>
        </div>
        <div className="contact-block">
          <span className="mini-kicker">{t.instagram}</span>
          <p>@atelier.lemahieu</p>
        </div>
      </div>
      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <div className="form-grid">
          <input placeholder={t.name} />
          <input placeholder={t.email} />
          <input placeholder={t.phone} />
          <input placeholder={t.city} />
          <input className="span-2" placeholder={t.workCode} />
          <select className="span-2" defaultValue="">
            <option value="" disabled>{t.interest}</option>
            <option>{t.purchasing}</option>
            <option>{t.commission}</option>
            <option>{t.info}</option>
            <option>{t.other}</option>
          </select>
          <textarea className="span-2" placeholder={t.message} />
        </div>
        <button className="primary-button" type="submit">{t.send}</button>
      </form>
    </div>
  );
}

function DetailModal({ work, onClose, t }) {
  const [view, setView] = useState('main');
  const src = view === 'context' && work.context ? work.context : work.main;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-media">
          <img src={src} alt={work.code} />
        </div>
        <div className="modal-copy">
          <div className="tag-row">
            <span className="tag">{work.code}</span>
            {work.format ? <span className="tag">{work.format}</span> : null}
          </div>
          {work.title ? <h2>{work.title}</h2> : null}
          <dl>
            <div><dt>{t.medium}</dt><dd>{work.medium || '—'}</dd></div>
            <div><dt>{t.dimensions}</dt><dd>{work.dimensions || '—'}</dd></div>
            <div><dt>{t.status}</dt><dd>{translateStatus(work.status, t) || '—'}</dd></div>
            <div><dt>{t.price}</dt><dd>{work.price || t.priceUponRequest}</dd></div>
          </dl>
          {work.context ? (
            <div className="view-switcher">
              <button className={view === 'main' ? 'is-active' : ''} onClick={() => setView('main')}>{t.artwork}</button>
              <button className={view === 'context' ? 'is-active' : ''} onClick={() => setView('context')}>{t.inContext}</button>
            </div>
          ) : null}
          <a className="primary-button" href="#contact" onClick={onClose}>{t.inquireWork}</a>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [lang, setLang] = useState('en');
  const [activeCollection, setActiveCollection] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');
  const [selectedWork, setSelectedWork] = useState(null);
  const t = T[lang];

  const filteredWorks = useMemo(() => {
    return WORKS.filter((work) => {
      const collectionOk = activeCollection === 'all'
        ? true
        : collectionDefs.find((item) => item.id === activeCollection)?.keys.includes(work.collection);
      const formatOk = activeFormat === 'all' ? true : work.format === activeFormat;
      return collectionOk && formatOk;
    });
  }, [activeCollection, activeFormat]);

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const biographyImages = BIOGRAPHY_CODES.map(archiveByCode).filter(Boolean);

  return (
    <main id="top">
      <Header lang={lang} setLang={setLang} t={t} />

      <section className="hero section-frame">
        <div className="hero-copy">
          <span className="section-kicker">{t.heroEyebrow}</span>
          <h1><span>{t.heroTitleLine1}</span><br /><em>{t.heroTitleLine2}</em></h1>
          <p>{t.heroText}</p>
          <div className="hero-actions">
            <a href="#gallery" className="primary-button">{t.viewWorks}</a>
            <a href="#contact" className="secondary-button">{t.contactStudio}</a>
          </div>
        </div>
        <HeroRotator />
      </section>

      <section className="statement-bar section-frame slim">
        <p>{t.uniqueStatement}</p>
      </section>

      <section id="biography" className="section-frame">
        <div className="section-head">
          <span className="section-kicker">{t.bioEyebrow}</span>
          <h2>{t.bioTitle}</h2>
          <p className="lead-line">{t.bioLead}</p>
        </div>
        <div className="biography-layout">
          <div className="biography-copy">
            <p>{t.bio1}</p>
            <p>{t.bio2}</p>
            <p>{t.bio3}</p>
          </div>
          <div className="biography-images">
            {biographyImages.map((item) => (
              <figure key={item.code}>
                <img src={item.url} alt={item.name} />
                <figcaption>{item.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="section-frame">
        <div className="section-head narrow">
          <span className="section-kicker">{t.collectionsEyebrow}</span>
          <h2>{t.collectionsTitle}</h2>
          <p>{t.collectionsText}</p>
        </div>
        <div className="collections-list">
          {collectionDefs.map((def) => (
            <CollectionSection
              key={def.id}
              def={def}
              lang={lang}
              setCollection={setActiveCollection}
              scrollToGallery={scrollToGallery}
            />
          ))}
        </div>
      </section>

      <section id="formats" className="section-frame">
        <div className="section-head narrow">
          <span className="section-kicker">{t.formatsEyebrow}</span>
          <h2>{t.formatsTitle}</h2>
          <p>{t.formatsText}</p>
        </div>
        <div className="formats-grid">
          {formatDefs.map((def) => (
            <FormatCard
              key={def.id}
              def={def}
              lang={lang}
              setFormat={setActiveFormat}
              scrollToGallery={scrollToGallery}
            />
          ))}
        </div>
      </section>

      <section id="gallery" className="section-frame">
        <div className="section-head narrow">
          <span className="section-kicker">{t.galleryEyebrow}</span>
          <h2>{t.galleryTitle}</h2>
          <p>{t.galleryText}</p>
        </div>
        <div className="filters-wrap">
          <div className="filter-group">
            <span>{t.filtersCollection}</span>
            <button className={activeCollection === 'all' ? 'chip active' : 'chip'} onClick={() => setActiveCollection('all')}>{t.allWorks}</button>
            {collectionDefs.map((def) => (
              <button
                key={def.id}
                className={activeCollection === def.id ? 'chip active' : 'chip'}
                onClick={() => setActiveCollection(def.id)}
              >
                {def.name[lang]}
              </button>
            ))}
          </div>
          <div className="filter-group">
            <span>{t.filtersFormat}</span>
            <button className={activeFormat === 'all' ? 'chip active' : 'chip'} onClick={() => setActiveFormat('all')}>{t.allFormats}</button>
            {formatDefs.map((def) => (
              <button
                key={def.id}
                className={activeFormat === def.id ? 'chip active' : 'chip'}
                onClick={() => setActiveFormat(def.id)}
              >
                {def.label[lang]}
              </button>
            ))}
          </div>
        </div>
        <div className="gallery-grid">
          {filteredWorks.map((work) => (
            <ArtworkFigure key={work.code} work={work} t={t} onOpen={setSelectedWork} />
          ))}
        </div>
      </section>


      <section id="archive" className="section-frame">
        <div className="section-head narrow">
          <span className="section-kicker">{t.archiveEyebrow}</span>
          <h2>{t.archiveTitle}</h2>
          <p>{t.archiveText}</p>
        </div>
        <ArchiveRow title={t.archivePress} codes={ARCHIVE_PRESS} />
        <ArchiveRow title={t.archiveStudies} codes={ARCHIVE_STUDIES} />
        <ArchiveRow title={t.archiveStudio} codes={ARCHIVE_STUDIO} />
      </section>

      <section id="contact" className="section-frame">
        <div className="section-head narrow">
          <span className="section-kicker">{t.contactEyebrow}</span>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
        </div>
        <div className="contact-special-note">
          <span className="mini-kicker">{t.specialEyebrow}</span>
          <p>{t.specialText}</p>
        </div>
        <ContactSection t={t} />
      </section>

      <footer className="site-footer">
        <span>© T. Lemahieu</span>
        <span>{t.footer}</span>
      </footer>

      {selectedWork ? <DetailModal work={selectedWork} onClose={() => setSelectedWork(null)} t={t} /> : null}
    </main>
  );
}
