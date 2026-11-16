/* Genius · datos de modelos
   Para cambiar precios, fichas o textos: edita solo este archivo y sube VERSION en sw.js.
   Sitio público: aquí van solo datos ya publicados (nada de listas internas ni bonos). */

const GENIUS_DATA = {
  fecha: "15 nov 2026",

  /* Tarjetas de la pantalla Gama. "modelo" indica qué ficha abre (si ya existe). */
  gama: [
    {nombre:"EX30", tipo:"SUV compacto 100% eléctrico", modelo:"ex30"},
    {nombre:"EX40", tipo:"SUV 100% eléctrico", modelo:"ex40"},
    {nombre:"EC40", tipo:"SUV coupé 100% eléctrico", modelo:"ec40"},
    {nombre:"EX90", tipo:"SUV de 7 plazas 100% eléctrico", modelo:"ex90"},
    {nombre:"XC40", tipo:"SUV compacto mild hybrid, a bencina", modelo:"xc40"},
    {nombre:"XC60", tipo:"SUV mediano híbrido enchufable T8 AWD", modelo:"xc60"},
    {nombre:"XC90", tipo:"SUV de 7 plazas híbrido enchufable T8 AWD", modelo:"xc90"}
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
      mantKm: 30000,
      mantMeses: 36,
      bombaCalor: "De serie (según manual 2027; la ficha chilena no la informa)",

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
      garantia: "Batería: 8 años o 160.000 km, igual que toda la gama eléctrica.",
      mantencion: "Cada 30.000 km o 3 años, lo que ocurra primero.",
      mantKm: 30000,
      mantMeses: 36,
      bombaCalor: "Por confirmar",
      notasInternas: [
        "Modelo en fin de ciclo: Volvo anunció un facelift global en septiembre de 2026, sin fecha para Chile. No negarlo ni inventar fechas.",
        "Garantía de batería: umbral de capacidad por confirmar (en el EX30 Volvo Chile confirmó 75%). No prometer el 75% en este modelo hasta confirmarlo.",
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
      garantia: "Batería: 8 años o 160.000 km, igual que toda la gama eléctrica.",
      mantencion: "Cada 30.000 km o 3 años, lo que ocurra primero.",
      mantKm: 30000,
      mantMeses: 36,
      bombaCalor: "Por confirmar",
      notasInternas: [
        "Modelo en fin de ciclo: facelift global anunciado en septiembre de 2026, sin fecha para Chile.",
        "Versión Plus: sin precio ni stock en Chile. Por confirmar.",
        "EC40 P8: confirmar con Inchcape si sigue en producción o es stock.",
        "Garantía de batería: umbral de capacidad por confirmar (en el EX30 Volvo Chile confirmó 75%).",
        "Carga DC máxima en kW: Por confirmar. Qué decir: entre 27 y 40 min de 10 a 80%, según cargador y temperatura.",
        "Autonomía realista: estimación del dossier (15% a 30% bajo WLTP), no dato oficial."
      ]
    },

    /* ---------- EX90 ----------
       Fuente: Dossier EX90 (ficha técnica Inchcape oct 2026, volvocars.com/cl, volvohomestore.cl, homologación MTT).
       Stock chileno: año modelo 2025, 400 V, confirmado por Volvo Chile. Las cifras de 800 V (año modelo 2026–2027) no aplican.
       Precio: el publicado en volvohomestore.cl con bono de marca y de financiamiento, IVA incluido. Precio lista: Por confirmar.
       net: 107 kWh útiles informados por la prensa (SAE Mobility Engineering); Volvo publica 111 kWh nominales.
       cons: kWh/100 km de uso mixto realista = batería útil ÷ punto medio de la autonomía realista (107 ÷ 465 km).
       No es el rendimiento MTT (16,1 y 16,9 kWh/100 km, de laboratorio). Calza con km77 (~24 kWh/100 km en ciudad y autovía).
       dc: 250 kW, la potencia con que volvocars.com/cl publica los 30 min de 10–80%. dc50 null = Por confirmar. */
    ex90: {
      nombre: "EX90",
      fuente: "Ficha técnica Inchcape (oct 2026), volvocars.com/cl y precios de volvohomestore.cl",
      compararLede: "Las filas marcadas son las que cambian. Las dos versiones comparten batería, carga, carrocería, siete plazas y toda la seguridad: la Ultra Performance suma 109 hp y confort de marcha.",
      orden: ["plus","ultra"],
      versiones: {
        plus:{id:"plus",name:"Plus",code:"Por confirmar",drive:"Twin Motor",price:99900000,gross:111,net:107,chem:"NMC",motors:"2 (delantero + trasero; potencia por eje por confirmar)",kw:300,hp:408,nm:770,traction:"Integral",acc:5.9,vmax:180,wltp:600,real:"420–510",dc:250,dc1080:30,dc50:null,ac:11,wheels:'21" 8 radios',cons:23.0,mass:2780,daily:"Hasta 90%",recall:false,
          fit:"Familia de cinco a siete personas que quiere dejar la combustión, o dueño de XC90 que valora la seguridad por sobre todo. Ya trae head-up display, cámara 360°, Pilot Assist y las siete plazas.",
          notes:["Precio publicado con bono de marca y de financiamiento, stock limitado. Precio lista: por confirmar.","El precio publicado bajó $14 millones desde el lanzamiento (abr 2025): es stock año modelo 2025 que se está rotando.","Faros y vidrios: la ficha Inchcape dice HD Pixel y laminados; volvocars.com/cl dice LED y templados. Manda la ficha, pero verificar en la unidad.","Volante calefaccionado y calefacción trasera: de serie según la ficha Inchcape, opcionales según la web. Verificar antes de prometerlos.","No trae rueda de repuesto: kit con compresor y sellante, máximo 80 km/h y 200 km. Decirlo a quien viaja al sur o por ripio."]},
        ultra:{id:"ultra",name:"Ultra Performance",code:"Por confirmar",drive:"Twin Motor Performance",price:109900000,gross:111,net:107,chem:"NMC",motors:"2 (delantero + trasero; potencia por eje por confirmar)",kw:380,hp:517,nm:910,traction:"Integral",acc:4.9,vmax:180,wltp:600,real:"420–510",dc:250,dc1080:30,dc50:null,ac:11,wheels:'22" 5 radios',cons:23.0,mass:2787,daily:"Hasta 90%",recall:false,
          fit:"Prioriza el confort de marcha y el lujo: suspensión neumática con chasis activo, masaje, cierre suave de puertas y Bowers & Wilkins de 25 parlantes. Los 109 hp extra se notan al adelantar, no en velocidad máxima.",
          notes:["Precio publicado con bonos, stock limitado. Bajó $19 millones desde el lanzamiento (abr 2025). Precio lista: por confirmar.","En la prueba, cambiar los ajustes de suspensión en un tramo irregular para que el cliente note la neumática.","Llantas 22\": restan algo de autonomía y los neumáticos son más caros. Delanteras y traseras no se intercambian.","No trae rueda de repuesto: kit con compresor y sellante, máximo 80 km/h y 200 km."]}
      },
      equipamiento: [
        {item:"Suspensión",                           plus:"Amortiguadores convencionales",            ultra:"Neumática activa de doble cámara, con chasis activo"},
        {item:"Faros",                                plus:"HD Pixel (ficha Inchcape; la web dice LED)", ultra:"HD Pixel, 1,3 millones de píxeles"},
        {item:"Lavafaros",                            plus:"Opcional",                                 ultra:"Sí"},
        {item:"Audio",                                plus:"Bose, 14 parlantes",                       ultra:"Bowers & Wilkins, 25 parlantes, Dolby Atmos, 1.610 W"},
        {item:"Masaje en asientos delanteros",        plus:"—",                                        ultra:"Sí, 10 puntos y 5 programas"},
        {item:"Soporte lateral eléctrico",            plus:"—",                                        ultra:"Sí"},
        {item:"Cierre suave de puertas",              plus:"—",                                        ultra:"Sí"},
        {item:"Vidrios laterales y trasero",          plus:"Laminados (ficha Inchcape; la web dice templados)", ultra:"Laminados"},
        {item:"Manillas",                             plus:"Color carrocería",                         ultra:"Integradas, desplegables, con luz al piso"},
        {item:"Head-up display",                      plus:"Sí",                                       ultra:"Sí"},
        {item:"Cámara 360° con vista 3D y Park Pilot Assist", plus:"Sí",                              ultra:"Sí"},
        {item:"Pilot Assist (hasta 150 km/h)",        plus:"Sí",                                       ultra:"Sí"},
        {item:"Climatizador",                         plus:"4 zonas, más aire propio en 3.ª fila",     ultra:"4 zonas, más aire propio en 3.ª fila"},
        {item:"Asientos delanteros y de 2.ª fila calefaccionados", plus:"Sí (ficha Inchcape; la web dice opcional atrás)", ultra:"Sí (ficha Inchcape; la web dice opcional atrás)"},
        {item:"Volante calefaccionado",               plus:"Sí (ficha Inchcape; la web dice opcional)", ultra:"Sí (ficha Inchcape; la web dice opcional)"},
        {item:"Techo panorámico (fijo)",              plus:"Sí",                                       ultra:"Sí"},
        {item:"Portón eléctrico con apertura por pie",plus:"Sí",                                       ultra:"Sí"}
      ],
      pasos: [
        {de:"plus", a:"ultra", texto:"109 hp más y 0–100 en 4,9 s, suspensión neumática con chasis activo, llantas 22\", masaje y soporte lateral eléctrico, cierre suave de puertas, lavafaros y Bowers & Wilkins en vez de Bose. Si su prioridad es el confort de marcha, se nota; si no, la Plus ya trae toda la seguridad."}
      ],
      comunes: "SUV de siete plazas reales: la tercera fila acepta dos personas de hasta 1,70 m, con aire propio. Cinco estrellas Euro NCAP 2025, comprensión del conductor y detección de ocupantes. Pantalla central de 14,5\" y del conductor de 9\", Google integrado y Apple CarPlay inalámbrico, llave digital y tarjeta NFC. Maletero 324 l con siete plazas, 697 l con cinco y frunk de 46 l. Remolque con freno 2.200 kg. Mide 5,04 m de largo y 2,11 m de ancho con espejos. Bomba de calor de serie. Sin rueda de repuesto: kit de reparación.",
      garantia: "Batería: 8 años o 160.000 km, igual que toda la gama eléctrica.",
      mantencion: "Cada 30.000 km o 3 años, lo que ocurra primero.",
      mantKm: 30000,
      mantMeses: 36,
      bombaCalor: "De serie",
      notasInternas: [
        "Año modelo: el stock chileno es 2025, de 400 V y 111 kWh (confirmado por Volvo Chile). El 2026 de 800 V, sin LiDAR, no llegará a Chile. Decirlo de frente.",
        "Si el cliente trae 680 hp o carga en 22 min: es la versión de 800 V de otros mercados, no aplica.",
        "LiDAR: la web chilena lo marca de serie, pero puede no corresponder al auto en stock. Mirar sobre el parabrisas antes de nombrarlo.",
        "Software: no negar los problemas del lanzamiento; explicar que se corrigen por actualizaciones remotas. No prometer el cambio gratuito de computador central hasta que Volvo Chile lo confirme.",
        "Autonomía: decir \"hasta 600 km WLTP\" (ficha Inchcape); volvocars.com/cl publica 570 km. Realista 420–510 km, menos en frío: darla por escrito antes de cerrar.",
        "Carga: unos 30 min de 10 a 80% en cargador de alta potencia, con la batería preacondicionada. Con 50 kW: Por confirmar.",
        "Carga en casa: la web publica 15 h de 0 a 100% con wallbox de 7,2 kW. La calculadora de la app descuenta pérdidas y da más: usar la cifra de la web como dato oficial.",
        "Garantía de batería: umbral de capacidad por confirmar (en el EX30 Volvo Chile confirmó 75%).",
        "Precio lista y códigos de versión: Por confirmar con Inchcape. No hay alertas del EX90 en SERNAC en lo revisado; verificar el VIN igual."
      ]
    },

    /* ---------- XC40 Mild Hybrid ----------
       Fuente: Dossier XC40 Mild Hybrid (ficha técnica MY27 Inchcape, volvohomestore.cl, consumovehicular.cl, volvocars.com Reino Unido).
       propulsion "bencina": no se enchufa. La app lo muestra en ficha, comparador y costo total,
       y lo saca de las calculadoras de energía, carga y autonomía eléctrica.
       Precio: el publicado en volvohomestore.cl el 14-10-2026, con bono de marca y de financiamiento, IVA incluido, sin impuesto verde.
       kmL / kmLCity / kmLHwy: rendimiento MTT (consumovehicular.cl), homologado para B4 Plus y B4 Ultimate anteriores.
       kmLWltp: WLTP mixto publicado en volvohomestore.cl. kw: 145 kW según volvocars.com Reino Unido (la ficha chilena solo da hp).
       tankL: 54 l según volvocars.com Reino Unido, por confirmar para Chile.
       mantKm / mantMeses: pauta de mantención de los híbridos confirmada en la sucursal; costo total la usa por servicio. */
    xc40: {
      nombre: "XC40",
      propulsion: "bencina",
      fuente: "Ficha Inchcape XC40 MY27, precios de volvohomestore.cl (14-10-2026) y rendimiento MTT de consumovehicular.cl",
      compararLede: "Core y Plus son mecánicamente idénticas: mismo motor, caja, consumo y seguridad, Pilot Assist incluido. Las filas marcadas son las que cambian: la Plus compra luz, comodidad e imagen.",
      orden: ["core","plus"],
      versiones: {
        core:{id:"core",name:"Core",code:"B4",drive:"B4 Mild Hybrid",price:38900000,motor:"2.0 turbo, 4 cilindros, mild hybrid 48 V",hybrid:"Mild hybrid 48 V: no se enchufa ni anda solo en eléctrico",gearbox:"Automática de doble embrague, 7 velocidades",traction:"Delantera",kw:145,hp:197,nm:300,acc:7.6,vmax:180,kmL:13.7,kmLCity:10.6,kmLHwy:16.4,kmLWltp:14.6,tankL:54,wheels:'18" aleación 5 radios plata',spare:"Sí",mass:"1.688 kg (dato de otro mercado)",
          fit:"Primer Volvo o primer SUV premium para quien no tiene dónde cargar en casa. Trae Pilot Assist y toda la seguridad de serie: la Plus no suma seguridad.",
          notes:["Precio publicado con bonos (volvohomestore.cl, 14-10-2026). Precio lista: por confirmar.","La pre-reserva a $37.900.000 de la nota legal ya venció: no ofrecerla.","Trae Clean Zone (filtro), no purificador: el purificador PM2.5 de la portada web es solo de la Plus.","No hay cámara 360° en ninguna versión: ojo con material de otros mercados."]},
        plus:{id:"plus",name:"Plus",code:"B4",drive:"B4 Mild Hybrid",price:42900000,motor:"2.0 turbo, 4 cilindros, mild hybrid 48 V",hybrid:"Mild hybrid 48 V: no se enchufa ni anda solo en eléctrico",gearbox:"Automática de doble embrague, 7 velocidades",traction:"Delantera",kw:145,hp:197,nm:300,acc:7.6,vmax:180,kmL:13.7,kmLCity:10.6,kmLHwy:16.4,kmLWltp:14.6,tankL:54,wheels:'19" 5 radios en Y, diamond cut grafito mate',spare:"Sí",mass:"Por confirmar",
          fit:"Quiere más luz, comodidad e imagen: techo panorámico, portalón manos libres, purificador PM2.5, asiento del copiloto eléctrico y estética R-Design.",
          notes:["Precio publicado con bonos (volvohomestore.cl, 14-10-2026). Precio lista: por confirmar.","El techo panorámico resta algo de altura interior: si el cliente es muy alto, que se siente en ambas.","Llantas 19\": marcha algo más firme y neumáticos más caros.","Peso de la Plus: por confirmar con el manual MY27."]}
      },
      /* Equipamiento por versión. "—" = no lo trae. */
      equipamiento: [
        {item:"Pilot Assist (hasta 130 km/h)",              core:"Sí",                    plus:"Sí"},
        {item:"Cámara de estacionamiento",                  core:"Trasera, con sensores", plus:"Trasera, con sensores"},
        {item:"Sunroof panorámico eléctrico",               core:"—",                     plus:"Sí"},
        {item:"Portalón eléctrico con apertura manos libres",core:"—",                    plus:"Sí"},
        {item:"Calidad del aire",                           core:"Clean Zone (filtro)",   plus:"Purificador PM2.5"},
        {item:"Asiento del pasajero eléctrico",             core:"—",                     plus:"Sí"},
        {item:"Pomo de cambios Crystal",                    core:"—",                     plus:"Sí"},
        {item:"Iluminación interior",                       core:"Mid Level",             plus:"High Level"},
        {item:"Parrilla",                                   core:"Cromada",               plus:"R-Design"},
        {item:"Rieles de techo",                            core:"Cromados",              plus:"Negro mate"}
      ],
      pasos: [
        {de:"core", a:"plus", texto:"Techo panorámico eléctrico, portalón manos libres, purificador PM2.5, asiento del copiloto eléctrico, llantas 19\" diamond cut, pomo Crystal, iluminación High Level y estética R-Design con rieles negro mate. Mismo motor, consumo y seguridad."}
      ],
      comunes: "SUV compacto a bencina con sistema mild hybrid de 48 V: recupera energía al frenar y ayuda al motor al arrancar; no se enchufa. Diseñado en Suecia y fabricado en Gante, Bélgica (confirmar con el VIN). Plataforma CMA, la misma del EX40. Toda la seguridad de serie desde la Core: Pilot Assist, City Safety, BLIS y 6 airbags. Tapiz Nordico sin cuero animal, pantalla de 9\" con Google, panel de 12,3\", Apple CarPlay, cargador inalámbrico, climatizador bizona y keyless. Maletero 436 l. Rueda de repuesto.",
      garantia: "Garantía de fábrica Volvo Chile.",
      mantencion: "Cada 10.000 km o 1 año, lo que ocurra primero.",
      mantKm: 10000,
      mantMeses: 12,
      notasInternas: [
        "Es mild hybrid, no enchufable ni híbrido completo: no anda en modo eléctrico. Decirlo antes de cerrar.",
        "Garantía: plazo en el dossier general; confirmar con Inchcape desde cuándo corre en estas unidades.",
        "Volvo presentó en septiembre de 2026 un XC40 renovado que se fabrica en Gante desde fines de 2026, sin fecha para Chile. No negarlo ni inventar fechas.",
        "Especificación europea: caja de doble embrague de 7 y 0–100 en 7,6 s (los XC40 2023–2024 tenían automática de 8). Mercado de origen y año de fabricación: por confirmar con Inchcape.",
        "Erratas de la ficha MY27: dice \"2.0 Twin Engine\" (es 2.0 turbo mild hybrid) y \"Cuero Nórdico\" (es tapiz Nordico, sin cuero). No repetirlas.",
        "Rendimiento: la homologación MTT visible es de B4 Plus y Ultimate anteriores. Confirmar si hay una nueva del MY27. Gasto anual MTT: $1.167.883.",
        "La campaña 26112V01 (junio 2026) es del XC40 T5 enchufable 2021, no del mild hybrid. Verificar el VIN igual.",
        "Euro NCAP: decir \"5 estrellas en su prueba de 2018\", no \"5 estrellas vigentes\"."
      ]
    },

    /* ---------- Híbridos enchufables T8 (XC60 y XC90) ----------
       propulsion "phev": ficha, comparador, costo total y calculadora "Híbrido enchufable";
       fuera de las calculadoras de energía, carga y autonomía de los eléctricos.
       Precios: solo los publicados en volvohomestore.cl (14-10-2026), con bonos, IVA incluido, sin impuesto verde.
       Versiones sin precio publicado (XC60 Plus y Polestar Engineered, XC90 Ultra Dark) no se muestran: van en notas internas.
       hp/kW/Nm: 455 hp (335 kW) y 709 Nm de volvocars.com/cl y del manual (228 + 107 kW); la ficha MY27 dice 406 hp y 669 Nm.
       gross / net: batería total y utilizable en kWh. evWltp: autonomía eléctrica oficial. evReal: rango real estimado del dossier.
       evRealDef: valor inicial del control de autonomía en la calculadora. kmLHyb: rendimiento con batería descargada, valor inicial.
       mttKmL / mttKmKwh: rendimiento homologado MTT (ponderado, supone cargar a diario).
       acKw: potencia de carga AC que usa Volvo Chile (por confirmar). equivEv: eléctrico con el que se compara. */
    xc60: {
      nombre: "XC60",
      propulsion: "phev",
      fuente: "Dossier XC60 T8: volvocars.com/cl, volvohomestore.cl (14-10-2026), ficha Inchcape MY27 y manual",
      compararLede: "Core y Ultra tienen el mismo tren motriz: mismo motor, batería, autonomía y seguridad, Pilot Assist incluido. Las filas marcadas son las que cambian: la Ultra compra confort, imagen y sonido.",
      orden: ["core","ultra"],
      evRealDef: 62,
      kmLHyb: 12.5,
      kmLHybNota: "Sin medición propia del XC60. Valor inicial: 12,5 km/l, medido por Motor1 en el XC90 T8 (mismo tren motriz, 215 kg más). El dossier usa 9 km/l como supuesto conservador.",
      acKw: 3.7,
      equivEv: {modelo:"ex40", version:"p8", nota:"EX40 P8 Ultra Twin Motor: el eléctrico AWD más cercano en tamaño. El EX60 aún no llega a Chile."},
      versiones: {
        core:{id:"core",name:"Core",code:"T8 AWD",drive:"T8 AWD Plug-in Hybrid",price:54900000,motor:"2.0 turbo, 4 cilindros, + motor eléctrico trasero",hybrid:"Híbrido enchufable: anda en eléctrico con batería cargada",gearbox:"Automática Geartronic de 8 velocidades",traction:"Integral (eje trasero eléctrico)",kw:335,hp:455,nm:709,acc:4.9,vmax:180,gross:18.8,net:14.9,evWltp:81,evReal:"55–70",mttKmL:72.6,mttKmKwh:4.8,tankL:71,towKg:2250,wheels:'19" o 20"',spare:"No, kit de reparación",mass:"2.150 kg",
          fit:"Recorre menos de 60 km al día, puede cargar en casa o en el trabajo y viaja a regiones sin querer planificar cargas. Trae toda la seguridad, Pilot Assist y techo panorámico de serie.",
          notes:["Precio publicado con bonos (volvohomestore.cl, 14-10-2026). Confirmar el precio del mes antes de cotizar.","Llantas 19\": la marcha más cómoda de la gama XC60.","No trae purificador de aire: lo suma desde la Plus (sin precio publicado).","Ninguna versión trae rueda de repuesto: decirlo en la entrega."]},
        ultra:{id:"ultra",name:"Ultra",code:"T8 AWD",drive:"T8 AWD Plug-in Hybrid",price:71900000,motor:"2.0 turbo, 4 cilindros, + motor eléctrico trasero",hybrid:"Híbrido enchufable: anda en eléctrico con batería cargada",gearbox:"Automática Geartronic de 8 velocidades",traction:"Integral (eje trasero eléctrico)",kw:335,hp:455,nm:709,acc:4.9,vmax:180,gross:18.8,net:14.9,evWltp:81,evReal:"55–70",mttKmL:72.6,mttKmKwh:4.8,tankL:71,towKg:2250,wheels:'21"',spare:"No, kit de reparación",mass:"2.150 kg (dato Core)",
          fit:"Quiere el XC60 completo: napa ventilada, Harman Kardon, cámara 360°, head-up display y calefacción de asientos y volante. Paga $17 millones por confort e imagen, no por potencia.",
          notes:["Precio publicado con bonos (volvohomestore.cl, 14-10-2026). Un concesionario publicó la Ultra 2026 en $65.900.000: chequear la lista del mes.","Llantas 21\": marcha más firme y neumáticos más caros. Que el cliente sienta los baches en la prueba.","Es el salto de equipamiento más caro de la gama Volvo en Chile."]}
      },
      /* Equipamiento por versión. "—" = no lo trae. */
      equipamiento: [
        {item:"Pilot Assist (hasta 130 km/h)",              core:"Sí",                 ultra:"Sí"},
        {item:"Techo panorámico eléctrico",                 core:"Sí",                 ultra:"Sí"},
        {item:"Tapiz",                                      core:"Nordico",            ultra:"Cuero napa ventilado"},
        {item:"Asientos delanteros y volante calefaccionados",core:"—",                ultra:"Sí"},
        {item:"Cámaras de estacionamiento",                 core:"Trasera",            ultra:"360°"},
        {item:"Audio",                                      core:"High Performance",   ultra:"Harman Kardon"},
        {item:"Head-up display",                            core:"—",                  ultra:"Sí"},
        {item:"Vidrios laminados",                          core:"—",                  ultra:"Sí"},
        {item:"Purificador de aire",                        core:"—",                  ultra:"Sí"},
        {item:"Decoración interior",                        core:"Metal Mesh",         ultra:"Madera natural"},
        {item:"Iluminación interior",                       core:"Nivel medio",        ultra:"Nivel alto"},
        {item:"Pomo de cambios Orrefors de cristal",        core:"—",                  ultra:"Sí"},
        {item:"Look exterior",                              core:"Cromo",              ultra:"Cromo o Dark"}
      ],
      pasos: [
        {de:"core", a:"ultra", texto:"Cuero napa ventilado, asientos y volante calefaccionados, cámara 360°, Harman Kardon, head-up display, vidrios laminados, purificador, madera natural, iluminación nivel alto, pomo Orrefors y llantas 21\". Mismo motor, batería y seguridad."}
      ],
      comunes: "SUV mediano híbrido enchufable sobre plataforma SPA, el Volvo más vendido de la historia. 2.0 turbo adelante y motor eléctrico atrás: la tracción integral es eléctrica, sin eje cardán. Batería de 18,8 kWh (14,9 utilizables) en el túnel central: el maletero de 468 l es el mismo de un XC60 a combustión. Carga solo en corriente alterna, conector tipo 2: 3 a 4 h en casa. Estanque de 71 l. Toda la seguridad de serie desde la Core, con alzadores integrados para niños en la segunda fila. Pantalla de 11,2\" con Google y panel de 12,3\". Remolque 2.250 kg con freno.",
      garantia: "Batería: 5 años o 100.000 km según el libro de servicio y garantía (los 8 años o 160.000 km son de los 100% eléctricos).",
      mantencion: "Cada 10.000 km o 1 año, lo que ocurra primero.",
      mantKm: 10000,
      mantMeses: 12,
      notasInternas: [
        "La primera pregunta: ¿tiene dónde enchufar en casa o en el trabajo? Si no, no es su auto: derivar al XC40 Mild Hybrid.",
        "Potencia: la ficha MY27 dice 406 hp y 669 Nm; volvohomestore.cl, 462 hp. Usar 455 hp (335 kW) y ofrecer confirmarlo por escrito con Inchcape.",
        "No carga en corriente continua: los cargadores rápidos no le sirven. Cargador a bordo: 3,7 kW según Volvo Chile (por confirmar si acepta 7,4).",
        "Septiembre 2026: Volvo presentó el XC60 PHEV de largo alcance (41,2 kWh, 189–200 km eléctricos), sin fecha para Chile. No negarlo: vender este por probado y con descuento.",
        "Versiones sin precio publicado: Plus y Polestar Engineered (Öhlins, 22\"). Confirmar con Inchcape si se venden hoy.",
        "Campañas: 25088V01 (frenos BCM2, 2024–2025, OTA), 25051V01 (módulos de batería, 2020–2022) y 25022V01 (pedal de freno, 2020–2021). Verificar VIN en recallsvolvocars.cl.",
        "Origen: por confirmar con el VIN. Decir \"diseñado y desarrollado en Suecia; te confirmo la planta de esta unidad\".",
        "Euro NCAP: 5 estrellas en 2017 (98% adultos), referencia histórica del protocolo anterior.",
        "Dejar por escrito la autonomía eléctrica real: 55 a 70 km, no 81."
      ]
    },

    xc90: {
      nombre: "XC90",
      propulsion: "phev",
      fuente: "Dossier XC90 T8: ficha Inchcape MY27, volvocars.com/cl y volvohomestore.cl (14-10-2026), consumovehicular.cl y manual MY26",
      compararLede: "Core, Plus y Ultra tienen el mismo T8 AWD, batería, homologación y seguridad. Las filas marcadas son las que cambian: la Plus compra tecnología y sonido; la Ultra, suspensión neumática y lujo.",
      orden: ["core","plus","ultra"],
      evRealDef: 55,
      kmLHyb: 12.5,
      kmLHybNota: "Motor1 (Europa) midió con batería descargada ~12,5 km/l en uso mixto (8 l/100 km) y ~10 km/l en autopista (10 l/100 km).",
      acKw: 3.7,
      equivEv: {modelo:"ex90", version:"plus", nota:"EX90 Plus: el SUV eléctrico de 7 plazas de Volvo."},
      versiones: {
        core:{id:"core",name:"Core",code:"T8 AWD",drive:"T8 AWD Plug-in Hybrid",price:84900000,motor:"2.0 turbo, 4 cilindros (228 kW) + eléctrico trasero (107 kW)",hybrid:"Híbrido enchufable: anda en eléctrico con batería cargada",gearbox:"Automática Geartronic de 8 velocidades",traction:"Integral (eje trasero eléctrico)",kw:335,hp:455,nm:709,acc:5.4,vmax:180,gross:18.8,net:14.9,evWltp:73,evReal:"50–60",mttKmL:55.6,mttKmKwh:5.0,tankL:71,towKg:2400,wheels:'20" negro brillante corte diamante',spare:"Por confirmar",mass:"2.365 kg",
          fit:"Familia de 5 a 7 que viaja a regiones y carga en casa: de lunes a viernes en eléctrico, el fin de semana sin pensar en cargadores. Seguridad completa y Pilot Assist de serie.",
          notes:["Precio publicado con bonos (volvohomestore.cl, 14-10-2026). Confirmar el precio del mes antes de cotizar.","Cámara solo trasera con sensores: si estaciona en espacios justos, mostrar la 360° de la Plus.","El modo Off-road necesita suspensión neumática: en la Core, por confirmar."]},
        plus:{id:"plus",name:"Plus",code:"T8 AWD",drive:"T8 AWD Plug-in Hybrid",price:91900000,motor:"2.0 turbo, 4 cilindros (228 kW) + eléctrico trasero (107 kW)",hybrid:"Híbrido enchufable: anda en eléctrico con batería cargada",gearbox:"Automática Geartronic de 8 velocidades",traction:"Integral (eje trasero eléctrico)",kw:335,hp:455,nm:709,acc:5.4,vmax:180,gross:18.8,net:14.9,evWltp:73,evReal:"50–60",mttKmL:55.6,mttKmKwh:5.0,tankL:71,towKg:2400,wheels:'21" negro corte diamante',spare:"Por confirmar",mass:"Por confirmar",
          fit:"Quiere la tecnología completa sin el precio de la Ultra: cámara 360° con estacionamiento asistido, Harman Kardon, head-up display y purificador PM2.5.",
          notes:["Precio publicado con bonos (volvohomestore.cl, 14-10-2026).","Head-up display: la web lo da de serie y la ficha MY27 se contradice. Verificarlo en la unidad antes de prometerlo.","Napa ventilada y almohadillas laterales eléctricas: opcionales en la Plus."]},
        ultra:{id:"ultra",name:"Ultra",code:"T8 AWD",drive:"T8 AWD Plug-in Hybrid",price:96900000,motor:"2.0 turbo, 4 cilindros (228 kW) + eléctrico trasero (107 kW)",hybrid:"Híbrido enchufable: anda en eléctrico con batería cargada",gearbox:"Automática Geartronic de 8 velocidades",traction:"Integral (eje trasero eléctrico)",kw:335,hp:455,nm:709,acc:5.4,vmax:180,gross:18.8,net:14.9,evWltp:73,evReal:"50–60",mttKmL:55.6,mttKmKwh:5.0,tankL:71,towKg:2400,wheels:'21" negro corte diamante',spare:"Por confirmar",mass:"Por confirmar",
          fit:"Busca el Volvo más lujoso con motor a combustión: suspensión neumática, Bowers & Wilkins de 1.460 W, napa ventilada, cortinillas y vidrios laminados.",
          notes:["Precio publicado con bonos (volvohomestore.cl, 14-10-2026).","Con suspensión neumática: baja la parte trasera para cargar y habilita el modo Off-road. Mostrarlo con una maleta.","La Ultra también puede ser Bright (cromo). La Ultra Dark no tiene precio publicado."]}
      },
      /* Equipamiento por versión. "—" = no lo trae. */
      equipamiento: [
        {item:"7 asientos",                                  core:"Sí",                         plus:"Sí",                           ultra:"Sí"},
        {item:"Pilot Assist (hasta 130 km/h)",               core:"Sí",                         plus:"Sí",                           ultra:"Sí"},
        {item:"Techo panorámico eléctrico",                  core:"Sí",                         plus:"Sí",                           ultra:"Sí"},
        {item:"Cámara",                                      core:"Trasera + sensores",         plus:"360°",                         ultra:"360°"},
        {item:"Estacionamiento asistido trasero y lateral",  core:"—",                          plus:"Sí",                           ultra:"Sí"},
        {item:"Head-up display",                             core:"—",                          plus:"Sí (verificar en la unidad)",  ultra:"Sí"},
        {item:"Suspensión",                                  core:"Chasis Comfort FSD",         plus:"Chasis Comfort FSD",           ultra:"Neumática activa"},
        {item:"Audio",                                       core:"High Performance 220 W",     plus:"Harman Kardon 600 W",          ultra:"Bowers & Wilkins 1.460 W"},
        {item:"Aire del habitáculo",                         core:"Clean Zone",                 plus:"Purificador PM2.5",            ultra:"Purificador PM2.5"},
        {item:"Tapiz",                                       core:"Nordico (vinilo)",           plus:"Nordico; napa ventilada opcional",ultra:"Napa ventilada"},
        {item:"Soporte lumbar",                              core:"Eléctrico 2 vías",           plus:"Eléctrico 4 vías",             ultra:"Eléctrico 4 vías"},
        {item:"Memoria de asientos",                         core:"Solo conductor",             plus:"Conductor y copiloto",         ultra:"Conductor y copiloto"},
        {item:"Asientos traseros y volante calefaccionados", core:"—",                          plus:"Sí",                           ultra:"Sí"},
        {item:"Cortinillas en puertas traseras",             core:"—",                          plus:"—",                            ultra:"Sí"},
        {item:"Vidrios laminados",                           core:"—",                          plus:"—",                            ultra:"Sí"},
        {item:"Palanca de cambios",                          core:"Personalizada",              plus:"Cristal Orrefors",             ultra:"Cristal Orrefors"},
        {item:"Decoración interior",                         core:"Aluminio a cuadros",         plus:"Brown Ash (madera)",           ultra:"Grey Ash (madera)"}
      ],
      pasos: [
        {de:"core", a:"plus", texto:"Cámara 360° y estacionamiento asistido, head-up display, Harman Kardon con subwoofer, purificador PM2.5, copiloto eléctrico con memoria, llantas 21\", madera y palanca Orrefors."},
        {de:"plus", a:"ultra", texto:"Suspensión neumática con modo Off-road, Bowers & Wilkins, napa ventilada, almohadillas laterales eléctricas, cortinillas traseras y vidrios laminados."}
      ],
      comunes: "SUV grande de 7 asientos, híbrido enchufable, diseñado y fabricado en Torslanda, Suecia, sobre plataforma SPA (facelift de septiembre 2024). 2.0 turbo adelante y motor eléctrico de 107 kW atrás: tracción integral eléctrica. Batería de 18,8 kWh (14,9 utilizables). Carga solo en corriente alterna, conector tipo 2: unas 3 a 4 h en casa. Estanque de 71 l. Seguridad completa de serie, climatizador de 4 zonas con salidas para la 3ª fila, pantalla de 11,2\" con Google. Maletero 244 / 650 / 1.941 l. Remolque 2.400 kg con freno. IIHS Top Safety Pick+ 2025 (unidades desde enero 2025).",
      garantia: "Batería: 5 años o 100.000 km según el libro de servicio y garantía de Volvo Chile.",
      mantencion: "Cada 10.000 km o 1 año, lo que ocurra primero.",
      mantKm: 10000,
      mantMeses: 12,
      notasInternas: [
        "Es enchufable para quien carga: el 55,6 km/l del MTT supone cargar a diario. Con batería vacía gasta 8 a 10 l/100 km. Decirlo antes de cerrar y dejarlo por escrito.",
        "Potencia: la ficha MY27 dice 406 hp y 669 Nm; volvohomestore.cl, 462 hp. Usar 455 hp (335 kW = 228 + 107 kW del manual) y ofrecer confirmarlo con Inchcape.",
        "Ultra Dark: la Ultra con parrilla, espejos, molduras y barras de techo en negro. Sin precio publicado (en el lanzamiento costaba $4 millones más que la Ultra).",
        "No carga en corriente continua. Cargador a bordo: 3,7 kW según Volvo Chile; la prensa europea informa 6,4 kW. Decir \"3 a 4 horas en un cargador de muro\".",
        "Campaña 25088V01: XC90 T8 vendidos entre agosto 2024 y diciembre 2025, software de frenos en modo B, corregida por OTA. Verificar el VIN.",
        "La 3ª fila es para niños y trayectos cortos: que el cliente se siente atrás antes de comprar.",
        "Euro NCAP 2015 es referencia histórica; la certificación vigente es IIHS Top Safety Pick+ 2025, con \"aceptable\" en peatones y anclajes infantiles.",
        "El EX90 no lo reemplaza: Volvo anunció que conviven."
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
