/* Genius · datos de modelos
   Para cambiar precios, fichas o textos: edita solo este archivo y sube VERSION en sw.js.
   Sitio público: aquí van solo datos ya publicados (nada de listas internas ni bonos). */

const GENIUS_DATA = {
  fecha: "9 nov 2026",

  /* Tarjetas de la pantalla Gama. "modelo" indica qué ficha abre (si ya existe). */
  gama: [
    {nombre:"EX30", tipo:"SUV compacto 100% eléctrico", modelo:"ex30"},
    {nombre:"EX40", tipo:"SUV 100% eléctrico"},
    {nombre:"EC40", tipo:"SUV coupé 100% eléctrico"},
    {nombre:"EX90", tipo:"SUV de 7 plazas 100% eléctrico"},
    {nombre:"XC40", tipo:"Mild hybrid"},
    {nombre:"XC60", tipo:"Híbrido enchufable T8 AWD"},
    {nombre:"XC90", tipo:"Híbrido enchufable de 7 plazas"}
  ],

  modelos: {
    ex30: {
      nombre: "EX30",
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
