/* Genius · datos de modelos
   Para cambiar precios, fichas o textos: edita solo este archivo y sube VERSION en sw.js.
   Sitio público: aquí van solo datos ya publicados (nada de listas internas ni bonos). */

const GENIUS_DATA = {
  fecha: "9 nov 2026",

  /* Tarjetas de la pantalla Gama. "modelo" indica qué ficha abre (si ya existe). */
  gama: [
    {nombre:"EX30", tipo:"SUV compacto 100% eléctrico", modelo:"ex30"},
    {nombre:"EX40", tipo:"SUV 100% eléctrico", modelo:"ex40"},
    {nombre:"EC40", tipo:"SUV coupé 100% eléctrico", modelo:"ec40"},
    {nombre:"EX90", tipo:"SUV de 7 plazas 100% eléctrico"},
    {nombre:"XC40", tipo:"Mild hybrid"},
    {nombre:"XC60", tipo:"Híbrido enchufable T8 AWD"},
    {nombre:"XC90", tipo:"Híbrido enchufable de 7 plazas"}
  ],

  modelos: {
    ex30: {
      nombre: "EX30",
      compararLede: "Las filas marcadas son las que cambian entre versiones. Core, Plus y Ultra tienen el mismo motor: se sube de versión por batería y equipamiento, nunca por potencia.",
      campana70: true,
      fuente: "Ficha Inchcape MY27 y ficha chilena Cross Country MY26",
      orden: ["core","plus","ultra","cc"],

      /* dc: carga DC máxima en kW (null = no informada). dc1080: minutos 10–80% en carga rápida.
         dc50: minutos 10–80% con cargador de 50 kW (solo si está informado). cons: kWh/100 km mixto. */
      versiones: {
        core:{id:"core",name:"Core",code:"E40",drive:"Single Motor",price:29900000,gross:51,net:49,chem:"LFP",motors:"1 (trasero)",kw:200,hp:272,nm:343,traction:"Trasera",acc:5.7,vmax:180,wltp:344,real:"250–290",dc:130,dc1080:26,dc50:null,ac:11,wheels:'18"',cons:17.0,mass:1850,daily:"Hasta 100%",recall:false,
          fit:"Uso urbano, menos de 50 km diarios, carga en casa y presupuesto ajustado. Le sobra autonomía para la semana.",
          notes:["Fuera de la campaña de seguridad: sus celdas LFP son de otro proveedor.","Admite carga diaria al 100% sin castigar la batería.","Carga 10–80% en ~26 min: más rápido que Plus y Ultra, porque tiene menos kWh que llenar.","No trae Pilot Assist: es la diferencia funcional más importante frente al Plus."]},

        plus:{id:"plus",name:"Plus",code:"E60",drive:"Single Motor Extended Range",price:36900000,gross:69,net:64,chem:"NMC",motors:"1 (trasero)",kw:200,hp:272,nm:343,traction:"Trasera",acc:5.3,vmax:180,wltp:480,real:"350–400",dc:153,dc1080:27,dc50:null,ac:11,wheels:'19"',cons:17.5,mass:1900,daily:"20% a 90%",recall:true,
          fit:"Sale a regiones de vez en cuando y quiere Pilot Assist y buen confort. Con llantas 19\" es la marcha más cómoda de la gama.",
          notes:["Unidades 2024–2025 (E60) alcanzadas por la campaña 26129V01: verificar VIN.","Carga diaria recomendada hasta 90%.","La ficha Inchcape lista sus llantas como 10\": es una errata, son 19\"."]},

        ultra:{id:"ultra",name:"Ultra",code:"E60",drive:"Single Motor Extended Range",price:39900000,gross:69,net:64,chem:"NMC",motors:"1 (trasero)",kw:200,hp:272,nm:343,traction:"Trasera",acc:5.3,vmax:180,wltp:480,real:"350–400",dc:153,dc1080:27,dc50:null,ac:11,wheels:'20"',cons:17.5,mass:1920,daily:"20% a 90%",recall:true,
          fit:"Quiere el equipamiento completo, estaciona a diario en ciudad (cámara 360°) y valora la calefacción en invierno.",
          notes:["Precio publicado en volvocars.com/cl. Confirmar disponibilidad y precio del mes antes de cotizar.","El sunroof es fijo, no se abre: decirlo antes de la entrega.","Llantas 20\": marcha más firme y neumáticos más caros de renovar.","Unidades 2024–2025 (E60) en campaña 26129V01: verificar VIN."]},

        cc:{id:"cc",name:"Cross Country",code:"Twin Motor",drive:"Twin Motor Performance",price:49900000,gross:69,net:64,chem:"NMC",motors:"2 (115 kW delantero + 200 kW trasero)",kw:315,hp:428,nm:543,traction:"Integral",acc:3.7,vmax:180,wltp:436,real:"310–360",dc:null,dc1080:30,dc50:56,ac:11,wheels:'19" Matte Graphite / Matte Black',cons:18.5,mass:1960,daily:"20% a 90%",recall:true,
          fit:"Busca imagen aventurera, tracción integral y desempeño. 190 mm de altura libre y el equipamiento completo del Ultra. Paga $10 millones sobre el Ultra y cede algo de autonomía.",
          notes:["Ficha chilena MY26: equipamiento del Ultra E60 completo, con techo Onyx Black y llantas 19\".","Carga DC máxima en kW: la ficha chilena no la informa. Tiempos del manual: 10–80% en ~30 min con 175 kW y ~56 min con 50 kW, batería a 25–30 °C.","Autonomía de la ficha chilena: 436 km (el dossier decía 427).","Twin Motor: verificar VIN contra la campaña de batería."]}
      },

      /* Equipamiento por versión. "—" = no lo trae. */
      equipamiento: [
        {item:"Pilot Assist (hasta 130 km/h)",       core:"—",               plus:"Sí",            ultra:"Sí",                cc:"Sí"},
        {item:"Clean Zone (filtrado de aire)",       core:"—",               plus:"Sí",            ultra:"Sí",                cc:"Sí"},
        {item:"Climatizador",                        core:"1 zona",          plus:"2 zonas",       ultra:"2 zonas",           cc:"2 zonas"},
        {item:"Audio",                               core:"High Performance",plus:"Harman Kardon", ultra:"Harman Kardon",     cc:"Harman Kardon"},
        {item:"Keyless entry",                       core:"—",               plus:"Sí",            ultra:"Sí",                cc:"Sí"},
        {item:"Carga inalámbrica de celular",        core:"—",               plus:"Sí",            ultra:"Sí",                cc:"Sí"},
        {item:"Asientos delanteros eléctricos",      core:"—",               plus:"Sí",            ultra:"Sí",                cc:"Sí"},
        {item:"Portalón eléctrico",                  core:"—",               plus:"Sí",            ultra:"Sí",                cc:"Sí"},
        {item:"Cámara de estacionamiento",           core:"Trasera",         plus:"Trasera",       ultra:"360° con vista 3D", cc:"360° con vista 3D"},
        {item:"Park Pilot Assist",                   core:"—",               plus:"—",             ultra:"Sí",                cc:"Sí"},
        {item:"Sunroof panorámico (fijo)",           core:"—",               plus:"—",             ultra:"Sí",                cc:"Sí"},
        {item:"Asientos y volante calefaccionados",  core:"—",               plus:"—",             ultra:"Sí",                cc:"Sí"},
        {item:"Lumbar eléctrico",                    core:"—",               plus:"—",             ultra:"Sí",                cc:"Sí"},
        {item:"Techo Onyx Black",                    core:"—",               plus:"—",             ultra:"—",                 cc:"Sí"}
      ],

      /* Qué se gana al subir de versión (los precios se calculan solos). */
      pasos: [
        {de:"core", a:"plus",  texto:"18 kWh más de batería y 136 km más de autonomía, más Pilot Assist, Clean Zone, Harman Kardon, climatizador bizona, keyless, carga inalámbrica, asientos y portalón eléctricos."},
        {de:"plus", a:"ultra", texto:"Confort y asistencia: sunroof, cámara 360°, estacionamiento asistido, calefacción de asientos y volante, lumbar eléctrico y llantas 20\"."},
        {de:"ultra",a:"cc",    texto:"Tracción integral, 428 hp y 0–100 en 3,7 s, 190 mm de altura libre y estética Cross Country con techo Onyx Black. Mismo equipamiento que el Ultra, con llantas 19\" y 44 km menos de autonomía WLTP."}
      ],

      comunes: "4.233 mm de largo, radio de giro ~10 m, maletero 318 l (hasta 1.000 l), cinco estrellas Euro NCAP, bomba de calor, conectores Tipo 2 y CCS2.",
      garantia: "Batería: 8 años o 160.000 km; cubre si la capacidad baja de 75%, con las mantenciones hechas en la red Volvo.",
      mantencion: "Cada 30.000 km o 3 años, lo que ocurra primero.",
      bombaCalor: "De serie",

      notasInternas: [
        "Los precios publicados son con financiamiento Amicar y bonos, en unidades limitadas. Manejar siempre las dos cifras.",
        "Usa las autonomías de las fichas Inchcape (344, 480 y 436 km), no las de volvocars.com.",
        "Garantía al 75%: confirmada por Volvo Chile. Respaldarla con el libro de garantía chileno.",
        "Mantención: falta confirmar qué incluye, su costo y si hay mantenciones incluidas.",
        "Bomba de calor: el manual 2027 la describe como parte del auto; la ficha chilena no la menciona."
      ]
    },

    /* ---------- EX40 y EC40 ----------
       Fuente: Dossier EX40 & EC40 (fichas MY27 Inchcape, volvohomestore.cl, volvocars.com/cl, manuales 2025–2026).
       Precio: el publicado en la web con bonos, IVA incluido. La versión Plus no tiene precio ni stock en Chile: no se incluye.
       cons: kWh/100 km de uso mixto realista, sacado del punto medio de la autonomía realista del dossier
       (batería útil ÷ km). No es el rendimiento MTT (13–15 kWh/100 km, de laboratorio).
       dc null = carga DC máxima en kW por confirmar. dc50: "cerca de 1 h" con 50 kW. */
    ex40: {
      nombre: "EX40",
      fuente: "Ficha Inchcape EX40 MY27 y precios de volvohomestore.cl",
      compararLede: "Las filas marcadas son las que cambian. La P6 y la P8 son dos autos distintos en tren motriz: la P8 suma un motor delantero, tracción integral y el equipamiento Ultra completo.",
      orden: ["p6","p8"],
      versiones: {
        p6:{id:"p6",name:"P6 Core",code:"P6",drive:"Single Motor",price:43900000,gross:69,net:69,chem:"Por confirmar (NMC o LFP)",motors:"1 (trasero, diseño Volvo)",kw:175,hp:238,nm:420,traction:"Trasera",acc:7.4,vmax:180,wltp:490,real:"340–415",dc:null,dc1080:27,dc50:60,ac:11,wheels:'19" 5 radios dobles negro diamante',cons:18.3,mass:2040,daily:"Hasta 90% (por confirmar si es LFP)",recall:false,
          fit:"Familia que necesita un SUV compacto con espacio real atrás, prioriza seguridad y confort de marcha. Con llantas 19\" es la mejor compra para quien busca comodidad.",
          notes:["Precio publicado con bono de marca y de financiamiento. En Portillo Sur la lista publicada es $58.900.000.","Batería: Inchcape informa 69 kWh; falta confirmar si es bruta o útil, y si la química es NMC o LFP.","Bomba de calor: confirmar con Inchcape si viene de serie en la P6.","Portalón eléctrico: la ficha dice que no lo trae, aunque la web lo lista. Verificar en la unidad.","EX40 2024–2025: verificar VIN contra la campaña R10329 (software de frenos, corregida por OTA)."]},
        p8:{id:"p8",name:"P8 Ultra",code:"P8",drive:"Twin Motor",price:56900000,gross:82,net:78,chem:"NMC",motors:"2 (190 kW trasero + 110 kW delantero)",kw:300,hp:408,nm:670,traction:"Integral",acc:4.8,vmax:180,wltp:520,real:"365–440",dc:null,dc1080:27,dc50:60,ac:11,wheels:'20" 5 radios negro corte diamante',cons:19.4,mass:2170,daily:"Hasta 90%",recall:false,
          fit:"Quiere desempeño, tracción integral y el equipamiento completo: 360°, Harman Kardon, faros Pixel y sunroof eléctrico. Remolca hasta 1.800 kg.",
          notes:["Precio publicado con bonos. Lista publicada en Portillo Sur: $65.900.000.","Consume más que la P6: tiene casi 10 kWh más y solo 30 km más de WLTP.","La web de Inchcape muestra 490 km y 40 min de carga: son erratas. Usar la ficha MY27 (520 km, 26–27 min).","Llantas 20\": marcha más firme y neumáticos más caros; no se rotan en cruz.","EX40 2024–2025: verificar VIN contra la campaña R10329."]}
      },
      equipamiento: [
        {item:"Pilot Assist (hasta 130 km/h)",          p6:"Sí",                        p8:"Sí"},
        {item:"Asiento del conductor eléctrico con memoria", p6:"Sí",                   p8:"Sí"},
        {item:"Asiento del acompañante eléctrico",      p6:"—",                         p8:"Sí"},
        {item:"Techo de vidrio",                        p6:"—",                         p8:"Sunroof eléctrico"},
        {item:"Cámara de estacionamiento",              p6:"Trasera",                   p8:"360°"},
        {item:"Audio",                                  p6:"High Performance",          p8:"Harman Kardon"},
        {item:"Purificador de aire y prelimpieza remota", p6:"— (trae CleanZone)",      p8:"Sí"},
        {item:"Faros",                                  p6:"LED activos",               p8:"LED Pixel"},
        {item:"Neblineros con luz de curva",            p6:"—",                         p8:"Sí"},
        {item:"Techo color negro",                      p6:"—",                         p8:"Sí"},
        {item:"Portalón eléctrico",                     p6:"— (verificar en la unidad)",p8:"Sí"},
        {item:"Asientos delanteros y traseros calefaccionados", p6:"—",                 p8:"Sí"},
        {item:"Volante calefaccionado",                 p6:"—",                         p8:"Sí"},
        {item:"Decoración interior",                    p6:"Aluminio",                  p8:"Topography retroiluminada"}
      ],
      pasos: [
        {de:"p6", a:"p8", texto:"Tracción integral, 408 hp y 0–100 en 4,8 s, más todo el equipamiento Ultra: cámara 360°, Harman Kardon, faros Pixel, sunroof eléctrico, calefacción de asientos y volante, portalón eléctrico, llantas 20\" y decoración Topography."}
      ],
      comunes: "Diseñado en Suecia y fabricado en Gante, Bélgica. Pantalla central de 9\" con Google, panel de 12,3\", Apple CarPlay, cargador inalámbrico, keyless, climatizador bizona, CleanZone y toda la seguridad de serie (Pilot Assist, BLIS, frenado autónomo, siete airbags). Maletero 410 l más frunk de 31 l. Conectores Tipo 2 y CCS2.",
      garantia: "Batería: 8 años o 160.000 km, igual que toda la gama eléctrica. Umbral de capacidad: Por confirmar.",
      mantencion: "Cada 30.000 km o 3 años, lo que ocurra primero.",
      bombaCalor: "Por confirmar",
      notasInternas: [
        "Modelo en fin de ciclo: Volvo anunció un facelift global en septiembre de 2026, sin fecha para Chile. No negarlo ni inventar fechas.",
        "Versión Plus: aparece en volvocars.com/cl sin precio ni stock en Chile. Por confirmar antes de ofrecerla.",
        "Carga DC máxima en kW: Por confirmar. Qué decir: entre 27 y 40 min de 10 a 80%, según cargador y temperatura de la batería.",
        "Los precios publicados incluyen bono de marca y de financiamiento, sin impuesto verde; cada concesionario los fija. Manejar siempre las dos cifras.",
        "Autonomía realista: estimación del dossier (15% a 30% bajo WLTP), no dato oficial. Darla por escrito antes de cerrar."
      ]
    },

    ec40: {
      nombre: "EC40",
      fuente: "Ficha Inchcape EC40 MY27 (P6) y volvohomestore.cl (P8)",
      compararLede: "Las filas marcadas son las que cambian. La P6 y la P8 son dos autos distintos en tren motriz: la P8 suma un motor delantero, tracción integral y el equipamiento Ultra completo.",
      orden: ["p6","p8"],
      versiones: {
        p6:{id:"p6",name:"P6 Core",code:"P6",drive:"Single Motor",price:46900000,gross:69,net:69,chem:"Por confirmar (NMC o LFP)",motors:"1 (trasero, diseño Volvo)",kw:175,hp:238,nm:420,traction:"Trasera",acc:7.4,vmax:180,wltp:500,real:"350–425",dc:null,dc1080:27,dc50:60,ac:11,wheels:'19" 5 radios dobles negro diamante',cons:17.8,mass:2065,daily:"Hasta 90% (por confirmar si es LFP)",recall:false,
          fit:"Quiere diseño con identidad y techo de vidrio de serie, sobre la misma base del EX40. Rinde 10 km más que el EX40 P6 por su techo más aerodinámico.",
          notes:["Precio publicado con bonos. Precio lista: sin publicar.","Techo de vidrio fijo de serie, también en la Core (el EX40 Core no lo trae).","Batería: Inchcape informa 69 kWh; falta confirmar si es bruta o útil, y la química.","Cede maletero (404 l) y visibilidad trasera: probar el retrovisor con el cliente.","EC40 2024–2025: verificar VIN contra la campaña R10329."]},
        p8:{id:"p8",name:"P8 Ultra",code:"P8",drive:"Twin Motor",price:61900000,gross:82,net:78,chem:"NMC",motors:"2 (190 kW trasero + 110 kW delantero)",kw:300,hp:408,nm:"660–670",traction:"Integral",acc:4.7,vmax:180,wltp:540,real:"380–460",dc:null,dc1080:27,dc50:60,ac:11,wheels:'20" 5 radios negro corte diamante',cons:18.6,mass:2185,daily:"Hasta 90%",recall:false,
          fit:"Busca el EC40 más rápido y completo: tracción integral, 0–100 en 4,7 s y equipamiento Ultra. Es el de mayor autonomía WLTP de los dos modelos.",
          notes:["La ficha MY27 del EC40 solo trae la P6: confirmar si la P8 sigue en producción para Chile o es stock.","Datos de la P8 desde volvohomestore.cl. volvocars.com/cl publica 442 hp: no calza con Inchcape, tratarlo como error.","Torque informado como 660–670 Nm según la fuente.","Llantas 20\": marcha más firme y neumáticos más caros.","EC40 2024–2025: verificar VIN contra la campaña R10329."]}
      },
      equipamiento: [
        {item:"Pilot Assist (hasta 130 km/h)",          p6:"Sí",                        p8:"Sí"},
        {item:"Asiento del conductor eléctrico con memoria", p6:"Sí",                   p8:"Sí"},
        {item:"Asiento del acompañante eléctrico",      p6:"—",                         p8:"Sí"},
        {item:"Techo de vidrio",                        p6:"Fijo, de serie",            p8:"Fijo, de serie"},
        {item:"Cámara de estacionamiento",              p6:"Trasera",                   p8:"360°"},
        {item:"Audio",                                  p6:"High Performance",          p8:"Harman Kardon"},
        {item:"Purificador de aire y prelimpieza remota", p6:"— (trae CleanZone)",      p8:"Sí"},
        {item:"Faros",                                  p6:"LED activos",               p8:"LED Pixel"},
        {item:"Neblineros con luz de curva",            p6:"—",                         p8:"Sí"},
        {item:"Techo color negro",                      p6:"—",                         p8:"Sí"},
        {item:"Portalón eléctrico",                     p6:"— (verificar en la unidad)",p8:"Sí"},
        {item:"Asientos delanteros y traseros calefaccionados", p6:"—",                 p8:"Sí"},
        {item:"Volante calefaccionado",                 p6:"—",                         p8:"Sí"},
        {item:"Decoración interior",                    p6:"Aluminio",                  p8:"Topography retroiluminada"}
      ],
      pasos: [
        {de:"p6", a:"p8", texto:"Tracción integral, 408 hp y 0–100 en 4,7 s, más el equipamiento Ultra: cámara 360°, Harman Kardon, faros Pixel, calefacción de asientos y volante, portalón eléctrico, llantas 20\" y decoración Topography."}
      ],
      comunes: "Misma base del EX40 con carrocería coupé: diseñado en Suecia y fabricado en Gante, Bélgica. Techo de vidrio fijo de serie, toda la seguridad de serie y el mismo equipamiento base. Maletero 404 l más frunk de 31 l. Conectores Tipo 2 y CCS2. Frente al EX40 cuesta $3 a $5 millones más.",
      garantia: "Batería: 8 años o 160.000 km, igual que toda la gama eléctrica. Umbral de capacidad: Por confirmar.",
      mantencion: "Cada 30.000 km o 3 años, lo que ocurra primero.",
      bombaCalor: "Por confirmar",
      notasInternas: [
        "Modelo en fin de ciclo: facelift global anunciado en septiembre de 2026, sin fecha para Chile.",
        "Versión Plus: sin precio ni stock en Chile. Por confirmar.",
        "EC40 P8: confirmar con Inchcape si sigue en producción o es stock.",
        "Carga DC máxima en kW: Por confirmar. Qué decir: entre 27 y 40 min de 10 a 80%, según cargador y temperatura.",
        "Autonomía realista: estimación del dossier (15% a 30% bajo WLTP), no dato oficial."
      ]
    }
  },

  campana: {
    titulo: "Campaña de seguridad de batería",
    alcance: "EX30 E60 (batería 69 kWh) comercializados en 2024 y 2025. El Core E40 queda fuera.",
    datos: [
      ["Código SERNAC","26129V01"],
      ["Informante","Ditec Automóviles S.A."],
      ["Unidades en Chile","472"],
      ["Accidentes en Chile","Ninguno registrado"],
      ["Reparación","Desde octubre 2026"],
      ["Qué se hace","Reemplazo de módulos, ~2 días, sin costo"],
      ["Mientras tanto","Limitar carga al 70%"],
      ["Contacto","contactovolvo@volvocarschile.cl"]
    ],
    enlace: "https://www.sernac.cl/portal/619/w3-article-89013.html",
    quePaso: "Algunas celdas de un proveedor específico podrían sobrecalentarse con carga alta. Volvo lo detectó, lo informó al regulador y repara a su costo. El límite al 70% se configura en Configuración → Carga → Nivel objetivo, o desde la app Volvo Cars.",
    manejo: [
      "No minimizar. Verificar el VIN en el momento, no después.",
      "Dar plazos concretos; si no se saben, comprometer una fecha de respuesta.",
      "Hacerse cargo del seguimiento. Seguros y compensaciones: escalar a postventa o al gerente.",
      "No usar la exclusión del Core como argumento de venta oportunista."
    ]
  }
};
