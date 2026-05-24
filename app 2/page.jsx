"use client";

import React, { useMemo, useState } from "react";

const WORKS = [
  {
    "code": "PA-124",
    "title": "PA-124",
    "collection": "Pure Abstraction",
    "technique": "Acrylic on canvas",
    "format": "Statement Work",
    "dimensions": "86 × 196 cm",
    "price": "$4,300 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556163/PA-124-main_izuppy.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556678/PA-124-context_fdapwh.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556163/PA-124-main_izuppy.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556678/PA-124-context_fdapwh.png"
    ]
  },
  {
    "code": "RIT-056",
    "title": "RIT-056",
    "collection": "Rituals",
    "technique": "Acrylic on canvas",
    "format": "Signature Work",
    "dimensions": "70 × 80 cm",
    "price": "$2,000 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556153/RIT-056-main_cd54pc.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556658/RIT-056-context_pbgjgh.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556153/RIT-056-main_cd54pc.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556658/RIT-056-context_pbgjgh.png"
    ]
  },
  {
    "code": "CAR-087",
    "title": "CAR-087",
    "collection": "Cardúmenes",
    "technique": "Acrylic on canvas",
    "format": "Statement Work",
    "dimensions": "80 × 200 cm",
    "price": "$4,500 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556177/CAR-087-main_vlq6ch.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556637/CAR-087-context_ooy5i3.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556177/CAR-087-main_vlq6ch.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556637/CAR-087-context_ooy5i3.png"
    ]
  },
  {
    "code": "PA-139",
    "title": "PA-139",
    "collection": "Pure Abstraction",
    "technique": "Acrylic on canvas",
    "format": "Monumental Work",
    "dimensions": "100 × 240 cm",
    "price": "$6,500 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556168/PA-139-main_modmla.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556677/PA-139-context_q0qsap.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556168/PA-139-main_modmla.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556677/PA-139-context_q0qsap.png"
    ]
  },
  {
    "code": "CAR-092",
    "title": "CAR-092",
    "collection": "Cardúmenes",
    "technique": "Acrylic on canvas",
    "format": "Monumental Work",
    "dimensions": "100 × 240 cm",
    "price": "$7,000 USD",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556173/CAR-092-main_u2tg3p.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556635/CAR-092-context_muiyym.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556173/CAR-092-main_u2tg3p.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556635/CAR-092-context_muiyym.png"
    ]
  },
  {
    "code": "RIT-061",
    "title": "RIT-061",
    "collection": "Rituals",
    "technique": "Acrylic on canvas",
    "format": "Statement Work",
    "dimensions": "156 × 136 cm",
    "price": "$5,200 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556168/RIT-061-main_zm2wll.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556657/RIT-061-context_rz9u30.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556168/RIT-061-main_zm2wll.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556657/RIT-061-context_rz9u30.png"
    ]
  },
  {
    "code": "PA-147",
    "title": "PA-147",
    "collection": "Pure Abstraction",
    "technique": "Acrylic on canvas",
    "format": "Statement Work",
    "dimensions": "160 × 80 cm",
    "price": "$3,700 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556171/PA-147-main_gophby.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556667/PA-147-context_gktxhu.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556171/PA-147-main_gophby.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556667/PA-147-context_gktxhu.png"
    ]
  },
  {
    "code": "CAR-104",
    "title": "CAR-104",
    "collection": "Cardúmenes",
    "technique": "Acrylic on canvas",
    "format": "Monumental Work",
    "dimensions": "140 × 225 cm",
    "price": "$8,500 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556183/CAR-104-main_ymqedf.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556635/CAR-104-context_hc9q4u.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556183/CAR-104-main_ymqedf.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556635/CAR-104-context_hc9q4u.png"
    ]
  },
  {
    "code": "RIT-073",
    "title": "RIT-073",
    "collection": "Rituals",
    "technique": "Acrylic on canvas",
    "format": "Signature Work",
    "dimensions": "77 × 100 cm",
    "price": "$2,400 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556154/RIT-073-main_tg3ggw.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556656/RIT-073-context_bv5f4k.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556154/RIT-073-main_tg3ggw.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556656/RIT-073-context_bv5f4k.png"
    ]
  },
  {
    "code": "RIT-079",
    "title": "RIT-079",
    "collection": "Rituals",
    "technique": "Acrylic on canvas",
    "format": "Monumental Work",
    "dimensions": "140 × 190 cm",
    "price": "$7,000 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556154/RIT-079-main_grufie.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556654/RIT-079-context_puby6q.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556154/RIT-079-main_grufie.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556654/RIT-079-context_puby6q.png"
    ]
  },
  {
    "code": "OBJ-060",
    "title": "OBJ-060",
    "collection": "Cardúmenes",
    "technique": "Acrylic on canvas",
    "format": "Painted Object",
    "dimensions": "",
    "price": "$3,200 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556133/OBJ-060-main_yr6tp9.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556612/OBJ-060-context_qtgngk.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556133/OBJ-060-main_yr6tp9.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556612/OBJ-060-context_qtgngk.png"
    ]
  },
  {
    "code": "RIT-084",
    "title": "RIT-084",
    "collection": "Rituals",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "32 × 24 cm",
    "price": "$900 USD",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556132/RIT-084-main_dln7gl.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556611/RIT-084-context_glxtsw.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556132/RIT-084-main_dln7gl.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556611/RIT-084-context_glxtsw.png"
    ]
  },
  {
    "code": "CAR-118",
    "title": "CAR-118",
    "collection": "Cardúmenes",
    "technique": "Acrylic on canvas",
    "format": "Monumental Work",
    "dimensions": "",
    "price": "$7,500 USD",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556178/CAR-118-main_rkb90x.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556635/CAR-118-context_yeno2x.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556178/CAR-118-main_rkb90x.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556635/CAR-118-context_yeno2x.png"
    ]
  },
  {
    "code": "PA-152",
    "title": "PA-152",
    "collection": "Pure Abstraction",
    "technique": "Acrylic on canvas",
    "format": "Monumental Work",
    "dimensions": "",
    "price": "$7,000 USD",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556170/PA-152-main_puoz3j.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556666/PA-152-context_yupir9.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556170/PA-152-main_puoz3j.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556666/PA-152-context_yupir9.png"
    ]
  },
  {
    "code": "PA-166",
    "title": "PA-166",
    "collection": "Pure Abstraction",
    "technique": "Acrylic on wood",
    "format": "Intimate Work",
    "dimensions": "31 × 21 cm",
    "price": "$3,200 USD",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556161/PA-166-main_yswl4r.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556612/PA-166-context_ic571d.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556161/PA-166-main_yswl4r.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556612/PA-166-context_ic571d.png"
    ]
  },
  {
    "code": "PA-171",
    "title": "PA-171",
    "collection": "Pure Abstraction",
    "technique": "Acrylic on canvas",
    "format": "Intimate Work",
    "dimensions": "28 × 28 cm",
    "price": "$600 USD",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556157/PA-171-main_kkhyxu.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556613/PA-171-context_puka9b.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556157/PA-171-main_kkhyxu.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556613/PA-171-context_puka9b.png"
    ]
  },
  {
    "code": "PA-184",
    "title": "PA-184",
    "collection": "Pure Abstraction",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "32 × 24 cm",
    "price": "$700 USD",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556142/PA-184-main_laypej.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779559167/PA-184-context_cxqlgj.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556142/PA-184-main_laypej.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779559167/PA-184-context_cxqlgj.png"
    ]
  },
  {
    "code": "RIT-091",
    "title": "RIT-091",
    "collection": "Rituals",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "",
    "price": "$600 USD",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556626/RIT-091-context_rjcic3.png",
    "contextImage": "",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556626/RIT-091-context_rjcic3.png"
    ]
  },
  {
    "code": "CAR-126",
    "title": "CAR-126",
    "collection": "Cardúmenes",
    "technique": "Acrylic on canvas",
    "format": "Signature Work",
    "dimensions": "60 × 40 cm",
    "price": "$1,400 USD",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556182/CAR-126-main_k0ihd6.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556633/CAR-126-context_sfhwim.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556182/CAR-126-main_k0ihd6.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556633/CAR-126-context_sfhwim.png"
    ]
  },
  {
    "code": "PA-193",
    "title": "PA-193",
    "collection": "Pure Abstraction",
    "technique": "Acrylic on canvas",
    "format": "Signature Work",
    "dimensions": "",
    "price": "$2,200 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556128/PA-193-main_anyjbj.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556662/PA-193-context_uijwfy.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556128/PA-193-main_anyjbj.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556662/PA-193-context_uijwfy.png"
    ]
  },
  {
    "code": "CAR-132",
    "title": "CAR-132",
    "collection": "Cardúmenes",
    "technique": "Acrylic on canvas",
    "format": "Statement Work",
    "dimensions": "",
    "price": "$4,800 USD",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556179/CAR-132-main_nt1rif.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556630/CAR-132-context_gppqda.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556179/CAR-132-main_nt1rif.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556630/CAR-132-context_gppqda.png"
    ]
  },
  {
    "code": "PA-201",
    "title": "PA-201",
    "collection": "Pure Abstraction",
    "technique": "Acrylic on canvas",
    "format": "Statement Work",
    "dimensions": "",
    "price": "$4,200 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556164/PA-201-main_zey16q.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556664/PA-201-context_gtdlzo.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556164/PA-201-main_zey16q.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556664/PA-201-context_gtdlzo.png"
    ]
  },
  {
    "code": "PA-214",
    "title": "PA-214",
    "collection": "Pure Abstraction",
    "technique": "Acrylic on canvas",
    "format": "Intimate Work",
    "dimensions": "28 × 28 cm",
    "price": "$2,200 USD",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556157/PA-214-main_r0gnh3.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556664/PA-214-context_fx7upa.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556157/PA-214-main_r0gnh3.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556664/PA-214-context_fx7upa.png"
    ]
  },
  {
    "code": "RIT-103",
    "title": "RIT-103",
    "collection": "Rituals",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "22 × 22 cm",
    "price": "$600 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556134/RIT-103-main_ub7a6r.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556623/RIT-103-context_asvjrv.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556134/RIT-103-main_ub7a6r.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556623/RIT-103-context_asvjrv.png"
    ]
  },
  {
    "code": "PA-227",
    "title": "PA-227",
    "collection": "Pure Abstraction",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "32 × 24 cm",
    "price": "$700 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779559150/PA-227-main_irpvsq.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556663/PA-227-context_oc0jai.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779559150/PA-227-main_irpvsq.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556663/PA-227-context_oc0jai.png"
    ]
  },
  {
    "code": "RIT-118",
    "title": "RIT-118",
    "collection": "Rituals",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "32 × 24 cm",
    "price": "$350 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556155/RIT-118-main_ijkdz6.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556621/RIT-118-context_trledp.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556155/RIT-118-main_ijkdz6.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556621/RIT-118-context_trledp.png"
    ]
  },
  {
    "code": "RIT-124",
    "title": "RIT-124",
    "collection": "Rituals",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "32 × 24 cm",
    "price": "$1,200 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556618/RIT-124-context_mepkyo.png",
    "contextImage": "",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556618/RIT-124-context_mepkyo.png"
    ]
  },
  {
    "code": "RIT-138",
    "title": "RIT-138",
    "collection": "Rituals",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "32 × 24 cm",
    "price": "$700 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556137/RIT-138-main_hxkzqe.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556621/RIT-138-context_y03kh9.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556137/RIT-138-main_hxkzqe.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556621/RIT-138-context_y03kh9.png"
    ]
  },
  {
    "code": "CAR-141",
    "title": "CAR-141",
    "collection": "Cardúmenes",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "32 × 24 cm",
    "price": "$700 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556484/CAR-141-main_tefob8.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556652/CAR-141-context_arvp3u.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556484/CAR-141-main_tefob8.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556652/CAR-141-context_arvp3u.png"
    ]
  },
  {
    "code": "CAR-154",
    "title": "CAR-154",
    "collection": "Cardúmenes",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "32 × 24 cm",
    "price": "$700 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556477/CAR-154-main_vm1viu.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556647/CAR-154-context_ywci3x.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556477/CAR-154-main_vm1viu.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556647/CAR-154-context_ywci3x.png"
    ]
  },
  {
    "code": "CAR-169",
    "title": "CAR-169",
    "collection": "Cardúmenes",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "32 × 24 cm",
    "price": "$900 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556476/CAR-169-main_uvlcge.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556646/CAR-169-context_n7emmy.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556476/CAR-169-main_uvlcge.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556646/CAR-169-context_n7emmy.png"
    ]
  },
  {
    "code": "RIT-146",
    "title": "RIT-146",
    "collection": "Rituals",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "32 × 24 cm",
    "price": "$900 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556131/RIT-146-main_vmgllx.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556611/RIT-146-context_tnzmlw.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556131/RIT-146-main_vmgllx.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556611/RIT-146-context_tnzmlw.png"
    ]
  },
  {
    "code": "CF-041",
    "title": "CF-041",
    "collection": "Collected Fragments",
    "technique": "Collage",
    "format": "Intimate Work",
    "dimensions": "20 × 20 cm",
    "price": "$450 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556481/CF-041-main_vjxkon.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556645/CF-041-context_lkh0cs.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556481/CF-041-main_vjxkon.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556645/CF-041-context_lkh0cs.png"
    ]
  },
  {
    "code": "CF-COMP2",
    "title": "CF-COMP2",
    "collection": "Collected Fragments",
    "technique": "Collage",
    "format": "Intimate Work",
    "dimensions": "20 × 20 cm",
    "price": "$650 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779557728/CF-COMP2_ztotz1.png",
    "contextImage": "",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779557728/CF-COMP2_ztotz1.png"
    ]
  },
  {
    "code": "CF-064",
    "title": "CF-064",
    "collection": "Collected Fragments",
    "technique": "Collage",
    "format": "Intimate Work",
    "dimensions": "20 × 20 cm",
    "price": "$250 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556148/CF-064-main_fyl7e6.png",
    "contextImage": "",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556148/CF-064-main_fyl7e6.png"
    ]
  },
  {
    "code": "CF-078",
    "title": "CF-078",
    "collection": "Collected Fragments",
    "technique": "Collage",
    "format": "Intimate Work",
    "dimensions": "20 × 20 cm",
    "price": "$250 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556151/CF-078-main_fj3qjn.png",
    "contextImage": "",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556151/CF-078-main_fj3qjn.png"
    ]
  },
  {
    "code": "CF-083",
    "title": "CF-083",
    "collection": "Collected Fragments",
    "technique": "Collage",
    "format": "Intimate Work",
    "dimensions": "20 × 20 cm",
    "price": "$250 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556145/CF-083-main_tdoo83.png",
    "contextImage": "",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556145/CF-083-main_tdoo83.png"
    ]
  },
  {
    "code": "CF-097",
    "title": "CF-097",
    "collection": "Collected Fragments",
    "technique": "Collage",
    "format": "Intimate Work",
    "dimensions": "20 × 20 cm",
    "price": "$250 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556145/CF-097-main_vtwcux.png",
    "contextImage": "",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556145/CF-097-main_vtwcux.png"
    ]
  },
  {
    "code": "CF-105",
    "title": "CF-105",
    "collection": "Collected Fragments",
    "technique": "Collage",
    "format": "Intimate Work",
    "dimensions": "20 × 20 cm",
    "price": "$250 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556143/CF-105-main_nhotaz.png",
    "contextImage": "",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556143/CF-105-main_nhotaz.png"
    ]
  },
  {
    "code": "CF-116",
    "title": "CF-116",
    "collection": "Collected Fragments",
    "technique": "Collage",
    "format": "Intimate Work",
    "dimensions": "20 × 20 cm",
    "price": "$250 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556140/CF-116-main_x1wtdo.png",
    "contextImage": "",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556140/CF-116-main_x1wtdo.png"
    ]
  },
  {
    "code": "CF-196",
    "title": "CF-196",
    "collection": "Collected Fragments",
    "technique": "Collage",
    "format": "Intimate Work",
    "dimensions": "22 × 16 cm",
    "price": "$450 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556139/CF-196-main_lus5am.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556638/CF-196-context_pwtp9g.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556139/CF-196-main_lus5am.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556638/CF-196-context_pwtp9g.png"
    ]
  },
  {
    "code": "CF-152",
    "title": "CF-152",
    "collection": "Collected Fragments",
    "technique": "Collage",
    "format": "Intimate Work",
    "dimensions": "10 × 10 cm",
    "price": "$250 USD",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556161/CF-152-main_iwmobc.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556648/CF-152-context_ryme3p.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556161/CF-152-main_iwmobc.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556648/CF-152-context_ryme3p.png"
    ]
  },
  {
    "code": "CF-COMP1",
    "title": "CF-COMP1",
    "collection": "Collected Fragments",
    "technique": "Collage",
    "format": "Intimate Work",
    "dimensions": "20 × 20 cm",
    "price": "$1,200 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779557730/CF-COMP1_aynl5j.png",
    "contextImage": "",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779557730/CF-COMP1_aynl5j.png"
    ]
  },
  {
    "code": "OBJ-048",
    "title": "OBJ-048",
    "collection": "Pure Abstraction",
    "technique": "Acrylic on wood",
    "format": "Painted Object",
    "dimensions": "",
    "price": "",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556134/OBJ-048-main_xypntw.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556610/OBJ-048-context_vde4dq.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556134/OBJ-048-main_xypntw.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556610/OBJ-048-context_vde4dq.png"
    ]
  },
  {
    "code": "RIT-117",
    "title": "RIT-117",
    "collection": "Rituals",
    "technique": "Mixed media on paper",
    "format": "Intimate Work",
    "dimensions": "32 × 24 cm",
    "price": "$700 USD",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556132/RIT-117-main_pdt1kd.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556622/RIT-117-context_cmtkm1.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556132/RIT-117-main_pdt1kd.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556622/RIT-117-context_cmtkm1.png"
    ]
  },
  {
    "code": "CF-167",
    "title": "CF-167",
    "collection": "Collected Fragments",
    "technique": "Collage",
    "format": "Reference",
    "dimensions": "",
    "price": "",
    "status": "Available",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556165/CF-167-main_xl2ktf.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556645/CF-167-context_yu1wwe.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556165/CF-167-main_xl2ktf.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556645/CF-167-context_yu1wwe.png"
    ]
  },
  {
    "code": "CAR-134",
    "title": "CAR-134",
    "collection": "Cardúmenes",
    "technique": "Acrylic on canvas",
    "format": "Reference",
    "dimensions": "",
    "price": "",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556181/CAR-134-main_rmewsb.png",
    "contextImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556655/CAR-134-context_pfi1uh.png",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556181/CAR-134-main_rmewsb.png",
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556655/CAR-134-context_pfi1uh.png"
    ]
  },
  {
    "code": "PA-112",
    "title": "PA-112",
    "collection": "Pure Abstraction",
    "technique": "Acrylic on canvas",
    "format": "Reference",
    "dimensions": "",
    "price": "",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556678/PA-112-context_uy7xy4.png",
    "contextImage": "",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556678/PA-112-context_uy7xy4.png"
    ]
  },
  {
    "code": "PA-113",
    "title": "PA-113",
    "collection": "Pure Abstraction",
    "technique": "Acrylic on canvas",
    "format": "Reference",
    "dimensions": "",
    "price": "",
    "status": "Commission reference",
    "mainImage": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556673/PA-113-context_jmx4se.png",
    "contextImage": "",
    "images": [
      "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556673/PA-113-context_jmx4se.png"
    ]
  }
];
const BIO_IMAGES = [
  {
    "code": "ARCH-EA-006",
    "title": "Artist archive, 1990s",
    "category": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654261/ARCH-EA-006_rgwzrj.png",
    "year": "1990",
    "caption": "Truusje Lemahieu pictured with a monumental work"
  },
  {
    "code": "ARCH-ES-003",
    "title": "Travel composition",
    "category": "Early Studies",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654271/ARCH-ES-003_ffilkm.png",
    "year": "1982",
    "caption": "Early composition referencing travel, personal objects and movement between Europe and Venezuela."
  },
  {
    "code": "ARCH-EA-005",
    "title": "Signing a Large-Scale Work",
    "category": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654261/ARCH-EA-005_hlgjdy.png",
    "year": "",
    "caption": ""
  },
  {
    "code": "ARCH-EA-009",
    "title": "AIAG Catalogue, Germany",
    "category": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654376/ARCH-EA-009_thhxxw.png",
    "year": "",
    "caption": "Catalogue from the Association of International Artists based in Germany, featuring artists from Europe, the Americas and beyond."
  }
];
const ARCHIVE_ITEMS = [
  {
    "code": "ARCH-EA-010",
    "title": "Design Center Catalogue",
    "category": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654377/ARCH-EA-010_u91tzv.png",
    "year": "",
    "caption": "Catalogue page from “El Arte y el Diseño Industrial contemporáneo en el sureste de Caracas: 2ª muestra”, featuring Truusje Lemahieu among participating artists"
  },
  {
    "code": "ARCH-EA-008",
    "title": "Jackson Artworks, Omaha, U.S.A.",
    "category": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654266/ARCH-EA-008_ek9vwc.png",
    "year": "",
    "caption": "International exhibition project connecting artists from the United States, Belgium, Germany and Venezuela."
  },
  {
    "code": "ARCH-EA-007",
    "title": "Archive Page",
    "category": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654267/ARCH-EA-007_kcd6vb.png",
    "year": "",
    "caption": "Archival profile page on Truus Lemahieu, documenting her European formation, move to South America and participation in international artistic organisations."
  },
  {
    "code": "ARCH-EA-003",
    "title": "apanese Restaurant Installation",
    "category": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654260/ARCH-EA-003_ydcpsh.png",
    "year": "1999",
    "caption": "Press clipping from Metro, June 9, 1999, documenting a work installed in a Japanese restaurant setting."
  },
  {
    "code": "ARCH-ES-001",
    "title": "Early fashion study",
    "category": "Early Studies",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654267/ARCH-ES-001_zbt3va.png",
    "year": "1978",
    "caption": "Fashion illustration study from the artist’s early formation in Belgium."
  },
  {
    "code": "ARCH-ES-002",
    "title": "Ski figure study",
    "category": "Early Studies",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654269/ARCH-ES-002_xekfdt.png",
    "year": "1999",
    "caption": "Archival study combining figure, movement and graphic composition."
  },
  {
    "code": "ARCH-ES-004",
    "title": "Paris urban sketch",
    "category": "Early Studies",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654273/ARCH-ES-004_rj1sh6.png",
    "year": "1981",
    "caption": "Drawing study from Paris, reflecting the artist’s early attention to architecture, urban rhythm and observation."
  },
  {
    "code": "ARCH-EA-004",
    "title": "Studio View: Large Blue Work in Progress",
    "category": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654263/ARCH-EA-004_r1qchr.png",
    "year": "",
    "caption": ""
  },
  {
    "code": "ARCH-EA-001",
    "title": "Signature Detail",
    "category": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654258/ARCH-EA-001_nwkzer.png",
    "year": "",
    "caption": ""
  },
  {
    "code": "ARCH-EA-002",
    "title": "Studio & Process / Painted Objects",
    "category": "Exhibition Archive",
    "url": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779654258/ARCH-EA-002_xg0waz.png",
    "year": "",
    "caption": ""
  }
];

const collectionOrder = ["Cardúmenes", "Rituals", "Pure Abstraction", "Collected Fragments"];
const formatOrder = ["Intimate Work", "Signature Work", "Statement Work", "Monumental Work", "Painted Object"];

const formatSamples = {
  "Intimate Work": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556611/RIT-084-context_glxtsw.png",
  "Signature Work": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556658/RIT-056-context_pbgjgh.png",
  "Statement Work": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556678/PA-124-context_fdapwh.png",
  "Monumental Work": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556677/PA-139-context_q0qsap.png",
  "Painted Object": "https://res.cloudinary.com/djwaxgpxj/image/upload/v1779556612/OBJ-060-context_qtgngk.png"
};

const copy = {
  en: {
    langButton: "ES",
    navBio: "Biography",
    navCollections: "Collections",
    navFormats: "Formats",
    navGallery: "Gallery",
    navArchive: "Archive",
    navContact: "Contact",
    heroEyebrow: "Belgian artist · Venezuelan soul",
    heroTitle: "Two worlds, one brush.",
    heroText: "Original abstract works shaped by color, light, depth and balance — created for collectors, interiors and architectural spaces.",
    contactStudio: "Contact the studio",
    exploreWorks: "Explore works",
    bioKicker: "Biography",
    bioTitle: "A European eye, transformed by tropical light.",
    bioP1: "Truusje Lemahieu studied Fine Arts in Bruges, Paris and Brussels before leaving for Venezuela at 22, where she would spend four decades developing a visual language rooted in gesture, rhythm and color.",
    bioP2: "Color was always central to her sensibility. In the tropics, that instinct found its natural territory: light, vegetation, warmth and daily life brought her relationship with color into full resonance.",
    uniqueLine: "Each piece is a unique original, painted by the artist as a singular work — created for collectors, interiors and spaces where art is meant to hold presence.",
    collectionsKicker: "Collections",
    collectionsTitle: "The work unfolds through distinct visual territories.",
    collectionsText: "Explore the work by collection: movement, ritual, pure abstraction and intimate fragments.",
    formatsKicker: "Browse by Format",
    formatsTitle: "Choose by scale, space and presence.",
    formatsText: "From intimate collectible pieces to large-scale works for interiors, private collections and architectural spaces.",
    galleryKicker: "Gallery",
    galleryTitle: "Available works and selected references.",
    galleryText: "Use the filters to explore by collection or format. Each work can be opened in a larger view with its complete details.",
    archiveKicker: "Archive",
    archiveTitle: "Archive and trajectory.",
    archiveText: "A curated archive of press, catalogues, early studies, studio process and exhibition records.",
    contactKicker: "Contact",
    contactTitle: "Begin with a work, a space or a project.",
    specialTitle: "Special projects",
    specialText: "The studio is open to selected special projects: painted objects, site-specific commissions, large-format series and tailored proposals for interiors, hospitality or private collections.",
    all: "All",
    selectedWorks: "selected works",
    viewCollection: "View collection",
    viewFormat: "View works",
    open: "Open details",
    close: "Close",
    request: "Request pricing & availability",
    code: "Artwork code",
    collection: "Collection",
    format: "Format",
    dimensions: "Dimensions",
    technique: "Technique",
    status: "Availability",
    price: "Price",
    contactBelgium: "Belgium contact",
    contactVenezuela: "Venezuela contact",
    instagram: "Instagram",
    name: "Name",
    email: "Email",
    phone: "WhatsApp / Phone",
    country: "Country / City",
    codeOptional: "Artwork code of interest (optional)",
    interest: "Interest",
    purchase: "Purchasing an available original",
    commission: "Commissioning a work",
    project: "Special project",
    other: "Other",
    message: "Message",
    send: "Send inquiry",
    confirmation: "Thank you for your inquiry. The studio will contact you shortly with pricing, availability and placement details.",
    available: "Available",
    commissionRef: "Commission reference",
    priceOnRequest: "Price on request"
  },
  es: {
    langButton: "EN",
    navBio: "Biografía",
    navCollections: "Colecciones",
    navFormats: "Formatos",
    navGallery: "Galería",
    navArchive: "Archivo",
    navContact: "Contacto",
    heroEyebrow: "Artista belga · alma venezolana",
    heroTitle: "Dos mundos, un pincel.",
    heroText: "Obras abstractas originales construidas desde el color, la luz, la profundidad y el equilibrio — creadas para coleccionistas, interiores y espacios arquitectónicos.",
    contactStudio: "Contactar atelier",
    exploreWorks: "Explorar obras",
    bioKicker: "Biografía",
    bioTitle: "Una mirada europea, transformada por la luz tropical.",
    bioP1: "Truusje Lemahieu estudió Bellas Artes en Brujas, París y Bruselas antes de irse a Venezuela a los 22 años, donde pasaría cuatro décadas desarrollando un lenguaje visual basado en gesto, ritmo y color.",
    bioP2: "El color siempre fue parte central de su sensibilidad. En el trópico, esa intuición encontró su territorio natural: la luz, la vegetación, la calidez y la vida cotidiana llevaron su relación con el color a una resonancia plena.",
    uniqueLine: "Cada pieza es una obra única y original, pintada por la artista como una creación singular — pensada para coleccionistas, interiores y espacios donde el arte tiene presencia.",
    collectionsKicker: "Colecciones",
    collectionsTitle: "La obra se despliega en territorios visuales distintos.",
    collectionsText: "Explora la obra por colección: movimiento, ritual, abstracción pura y fragmentos íntimos.",
    formatsKicker: "Explorar por formato",
    formatsTitle: "Elegir por escala, espacio y presencia.",
    formatsText: "Desde piezas íntimas de colección hasta obras de gran formato para interiores, colecciones privadas y espacios arquitectónicos.",
    galleryKicker: "Galería",
    galleryTitle: "Obras disponibles y referencias seleccionadas.",
    galleryText: "Usa los filtros para explorar por colección o formato. Cada obra puede abrirse en una vista ampliada con sus detalles completos.",
    archiveKicker: "Archivo",
    archiveTitle: "Archivo y trayectoria.",
    archiveText: "Un archivo curado de prensa, catálogos, estudios tempranos, proceso de estudio y registros de exposición.",
    contactKicker: "Contacto",
    contactTitle: "Comenzar con una obra, un espacio o un proyecto.",
    specialTitle: "Proyectos especiales",
    specialText: "El atelier está abierto a proyectos especiales seleccionados: objetos pintados, encargos site-specific, series de gran formato y propuestas a medida para interiores, hospitalidad o colecciones privadas.",
    all: "Todas",
    selectedWorks: "obras seleccionadas",
    viewCollection: "Ver colección",
    viewFormat: "Ver obras",
    open: "Ver detalles",
    close: "Cerrar",
    request: "Consultar precio y disponibilidad",
    code: "Código",
    collection: "Colección",
    format: "Formato",
    dimensions: "Medidas",
    technique: "Técnica",
    status: "Disponibilidad",
    price: "Precio",
    contactBelgium: "Contacto en Bélgica",
    contactVenezuela: "Contacto en Venezuela",
    instagram: "Instagram",
    name: "Nombre",
    email: "Email",
    phone: "WhatsApp / Teléfono",
    country: "País / Ciudad",
    codeOptional: "Código de la obra de interés (opcional)",
    interest: "Interés",
    purchase: "Comprar una obra disponible",
    commission: "Encargar una obra",
    project: "Proyecto especial",
    other: "Otro",
    message: "Mensaje",
    send: "Enviar consulta",
    confirmation: "Gracias por tu consulta. El atelier se pondrá en contacto pronto con información sobre precio, disponibilidad y opciones de ubicación.",
    available: "Disponible",
    commissionRef: "Referencia de encargo",
    priceOnRequest: "Precio bajo consulta"
  }
};

const collectionCopy = {
  "Cardúmenes": {
    en: ["Shoals, currents and collective movement.", "More than a representation of the sea, Cardúmenes explores movement as a collective force: direction, synchronicity, abundance and rhythm."],
    es: ["Cardúmenes, corrientes y movimiento colectivo.", "Más que una representación del mar, Cardúmenes explora el movimiento como fuerza colectiva: dirección, sincronía, abundancia y ritmo."]
  },
  "Rituals": {
    en: ["Objects, pause and ceremonial presence.", "Objects detach from everyday function and take on a ceremonial presence. The everyday becomes pause, gathering and ceremony."],
    es: ["Objetos, pausa y presencia ceremonial.", "Los objetos se desprenden de su función cotidiana y adquieren una presencia ceremonial. Lo cotidiano se vuelve pausa, reunión y ceremonia."]
  },
  "Pure Abstraction": {
    en: ["Color, form and intentional balance.", "Abstraction becomes a language of its own: free, recurring forms held by a precise sense of balance."],
    es: ["Color, forma y equilibrio intencional.", "La abstracción se convierte en un lenguaje propio: formas libres y recurrentes sostenidas por un equilibrio preciso."]
  },
  "Collected Fragments": {
    en: ["Intuition, cutting, layering and recomposition.", "Small-format works built through intuition, cuts, encounters and layered surfaces."],
    es: ["Intuición, corte, capas y recomposición.", "Obras de pequeño formato construidas desde la intuición, cortes, encuentros y superficies superpuestas."]
  }
};

const formatCopy = {
  "Intimate Work": {
    en: ["Intimate Works", "Collected small-scale works for personal, layered spaces."],
    es: ["Obras Intimate", "Piezas pequeñas de colección para espacios personales y paredes compuestas."]
  },
  "Signature Work": {
    en: ["Signature Works", "Medium-format pieces with a distinct visual identity."],
    es: ["Obras Signature", "Piezas medianas con una identidad visual clara."]
  },
  "Statement Work": {
    en: ["Statement Works", "Large-scale works designed to anchor a room."],
    es: ["Obras Statement", "Obras de gran formato pensadas para anclar un espacio."]
  },
  "Monumental Work": {
    en: ["Monumental Works", "Oversized works with architectural presence."],
    es: ["Obras Monumental", "Obras sobredimensionadas con presencia arquitectónica."]
  },
  "Painted Object": {
    en: ["Painted Objects", "Functional pieces transformed through painting."],
    es: ["Objetos pintados", "Piezas funcionales transformadas por la pintura."]
  }
};

function translatedStatus(status, t) {
  if (!status) return "";
  const s = status.toLowerCase();
  if (s.includes("commission")) return t.commissionRef;
  if (s.includes("available")) return t.available;
  return status;
}

function priceLabel(work, t) {
  return work.price || t.priceOnRequest;
}

function worksByCollection(name) {
  return WORKS.filter((work) => work.collection === name);
}

function worksByFormat(name) {
  return WORKS.filter((work) => work.format === name);
}

function formatPrice(format, t) {
  const prices = worksByFormat(format).map((w) => w.price).filter(Boolean);
  if (!prices.length) return t.priceOnRequest;
  const values = prices.map((p) => {
    const n = parseInt(String(p).replace(/[^\d]/g, ""), 10);
    return Number.isFinite(n) ? n : null;
  }).filter(Boolean);
  if (!values.length) return t.priceOnRequest;
  return `${t.from || "From"} $${Math.min(...values).toLocaleString("en-US")} USD`;
}

export default function Website() {
  const [lang, setLang] = useState("en");
  const [collection, setCollection] = useState("All");
  const [format, setFormat] = useState("All");
  const [active, setActive] = useState(null);
  const t = copy[lang];

  const filteredWorks = useMemo(() => WORKS.filter((work) => {
    const collectionMatch = collection === "All" || work.collection === collection;
    const formatMatch = format === "All" || work.format === format;
    return collectionMatch && formatMatch;
  }), [collection, format]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const chooseCollection = (value) => {
    setCollection(value);
    setFormat("All");
    setTimeout(() => scrollTo("gallery"), 60);
  };

  const chooseFormat = (value) => {
    setFormat(value);
    setCollection("All");
    setTimeout(() => scrollTo("gallery"), 60);
  };

  return (
    <main>
      <nav className="nav">
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>T. Lemahieu</button>
        <div className="navlinks">
          <button onClick={() => scrollTo("biography")}>{t.navBio}</button>
          <button onClick={() => scrollTo("collections")}>{t.navCollections}</button>
          <button onClick={() => scrollTo("formats")}>{t.navFormats}</button>
          <button onClick={() => scrollTo("gallery")}>{t.navGallery}</button>
          <button onClick={() => scrollTo("archive")}>{t.navArchive}</button>
          <button onClick={() => scrollTo("contact")}>{t.navContact}</button>
          <button className="lang" onClick={() => setLang(lang === "en" ? "es" : "en")}>{t.langButton}</button>
        </div>
      </nav>

      <header className="hero">
        <div className="heroMedia">
          {WORKS.slice(0, 4).map((work, index) => (
            <img key={work.code} src={work.contextImage || work.mainImage} className={`heroSlide slide${index + 1}`} alt={work.code} />
          ))}
        </div>
        <div className="heroOverlay" />
        <div className="heroText">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <div className="actions">
            <button className="primary" onClick={() => scrollTo("collections")}>{t.exploreWorks}</button>
            <button className="secondary light" onClick={() => scrollTo("contact")}>{t.contactStudio}</button>
          </div>
        </div>
      </header>

      <section className="bio section" id="biography">
        <div className="bioText">
          <p className="kicker">{t.bioKicker}</p>
          <h2>{t.bioTitle}</h2>
          <p>{t.bioP1}</p>
          <p>{t.bioP2}</p>
          <p className="uniqueNote">{t.uniqueLine}</p>
        </div>
        <div className="bioImages">
          {BIO_IMAGES.map((item) => <img key={item.code} src={item.url} alt={item.title} />)}
        </div>
      </section>

      <section className="section collections" id="collections">
        <SectionHead kicker={t.collectionsKicker} title={t.collectionsTitle} text={t.collectionsText} />
        <div className="collectionStack">
          {collectionOrder.map((name) => {
            const selected = worksByCollection(name);
            const samples = selected.slice(0, 4);
            const [subtitle, text] = collectionCopy[name][lang];
            return (
              <article className="collectionCard" key={name}>
                <div className="collectionCopy">
                  <p className="small">{selected.length} {t.selectedWorks}</p>
                  <h3>{name}</h3>
                  <h4>{subtitle}</h4>
                  <p>{text}</p>
                  <button onClick={() => chooseCollection(name)}>{t.viewCollection}</button>
                </div>
                <div className="collectionGallery">
                  {samples.map((work, i) => <img key={work.code} src={(i % 2 === 0 && work.contextImage) ? work.contextImage : work.mainImage} alt={work.code} />)}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section formats" id="formats">
        <SectionHead kicker={t.formatsKicker} title={t.formatsTitle} text={t.formatsText} compact />
        <div className="formatCards">
          {formatOrder.map((name) => {
            const [title, text] = formatCopy[name][lang];
            return (
              <article className="formatCard" key={name}>
                <img src={formatSamples[name]} alt={title} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <strong>{formatPrice(name, t)}</strong>
                  <button onClick={() => chooseFormat(name)}>{t.viewFormat}</button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section gallery" id="gallery">
        <SectionHead kicker={t.galleryKicker} title={t.galleryTitle} text={t.galleryText} />
        <div className="filters">
          <div>
            <span>{t.navCollections}</span>
            <button className={collection === "All" ? "active" : ""} onClick={() => setCollection("All")}>{t.all}</button>
            {collectionOrder.map((name) => <button key={name} className={collection === name ? "active" : ""} onClick={() => chooseCollection(name)}>{name}</button>)}
          </div>
          <div>
            <span>{t.navFormats}</span>
            <button className={format === "All" ? "active" : ""} onClick={() => setFormat("All")}>{t.all}</button>
            {formatOrder.map((name) => <button key={name} className={format === name ? "active" : ""} onClick={() => chooseFormat(name)}>{formatCopy[name][lang][0]}</button>)}
          </div>
        </div>
        <div className="workGrid">
          {filteredWorks.map((work) => <WorkCard key={work.code} work={work} t={t} onOpen={() => setActive(work)} />)}
        </div>
      </section>

      <section className="section archive" id="archive">
        <SectionHead kicker={t.archiveKicker} title={t.archiveTitle} text={t.archiveText} />
        <div className="archiveGrid">
          {ARCHIVE_ITEMS.map((item) => (
            <article key={item.code}>
              <img src={item.url} alt={item.title} />
              <div>
                <p className="small">{item.code}{item.year ? ` · ${item.year}` : ""}</p>
                <h3>{item.title}</h3>
                <p>{item.caption || item.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="special">
        <p className="kicker">{t.specialTitle}</p>
        <h2>{t.specialTitle}</h2>
        <p>{t.specialText}</p>
        <button className="secondary dark" onClick={() => scrollTo("contact")}>{t.contactStudio}</button>
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
            <option>{t.purchase}</option>
            <option>{t.commission}</option>
            <option>{t.project}</option>
            <option>{t.other}</option>
          </select>
          <textarea placeholder={t.message} />
          <button className="primary" type="submit">{t.send}</button>
          <small>{t.confirmation}</small>
        </form>
      </section>

      <footer>
        <span>T. Lemahieu</span>
        <span>Belgian abstract artist · Original works & commissions</span>
      </footer>

      {active && <Lightbox work={active} t={t} onClose={() => setActive(null)} />}
    </main>
  );
}

function SectionHead({ kicker, title, text, compact }) {
  return (
    <div className={`sectionHead ${compact ? "compact" : ""}`}>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function WorkCard({ work, t, onOpen }) {
  const img2 = work.contextImage || work.mainImage;
  return (
    <article className={`workCard ${work.format.replaceAll(" ", "-").toLowerCase()}`}>
      <button className="workImage" onClick={onOpen}>
        <img src={work.mainImage} alt={work.code} />
        {img2 && img2 !== work.mainImage && <img src={img2} alt={`${work.code} context`} />}
      </button>
      <div className="workInfo">
        <div className="chips"><span>{work.code}</span><span>{work.format}</span></div>
        <h3>{work.title}</h3>
        <p className="collectionName">{work.collection}</p>
        {work.dimensions && <p>{work.dimensions}</p>}
        {work.technique && <p>{work.technique}</p>}
        <div className="workBottom">
          <strong>{translatedStatus(work.status, t)}</strong>
          <span>{priceLabel(work, t)}</span>
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
        <div className="lightboxImages">
          {work.images.map((src) => <img key={src} src={src} alt={work.code} />)}
        </div>
        <div className="detailPanel">
          <div className="chips"><span>{work.code}</span><span>{work.format}</span></div>
          <h3>{work.title}</h3>
          <Info label={t.collection} value={work.collection} />
          <Info label={t.dimensions} value={work.dimensions} />
          <Info label={t.technique} value={work.technique} />
          <Info label={t.status} value={translatedStatus(work.status, t)} />
          <Info label={t.price} value={priceLabel(work, t)} />
          <a className="primary link" href="#contact" onClick={onClose}>{t.request}</a>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  if (!value) return null;
  return <p className="infoLine"><span>{label}</span>{value}</p>;
}
