/* Genius · Anexo: ecosistema Volvo–Geely
   Fuente: Claude Doc «Ecosistema Volvo–Geely: base de datos para el mapa» (4 nov 2026).
   Para corregir un dato: edita solo este archivo y sube VERSION en sw.js.

   estado: "of" = Oficial (comunicado o sitio Volvo/Geely) · "pr" = Prensa especializada · "pv" = Por verificar
   duda:   la parte puntual que falta confirmar aunque el resto del dato sea oficial o de prensa.
   app:    id del modelo en modelos.js (abre su ficha). Sin app = modelo que no está en la app. */

const ECO_DATA = {
  fecha: "4 nov 2026",

  /* Columnas del mapa, de izquierda a derecha. Una columna puede tener dos grupos:
     plataforma y proveedores van juntos porque ambos llegan directo al modelo. */
  columnas: [
    {grupos:[{titulo:"Desarrollo y diseño", tipos:["id","dis","prop"]}]},
    {grupos:[{titulo:"Plataforma", tipos:["plat"]}, {titulo:"Proveedores", tipos:["prov"]}]},
    {grupos:[{titulo:"Modelo", tipos:["mod"]}]},
    {grupos:[{titulo:"Planta", tipos:["fab"]}]},
    {grupos:[{titulo:"Motores y baterías", tipos:["comp"]}]}
  ],

  tipos: {
    prop:"Empresa o marca", id:"Centro de I+D o tecnología", dis:"Centro de diseño", plat:"Plataforma",
    fab:"Planta de vehículos", comp:"Componentes, baterías o empresa conjunta", prov:"Proveedor tecnológico", mod:"Modelo Volvo"
  },

  nodos: [
    /* ---------- Propiedad ---------- */
    {id:"PROP-01", t:"prop", n:"Zhejiang Geely Holding", c:"Geely Holding", lugar:"Hangzhou, China", que:"Holding privado, cabeza de todo el grupo.", dueno:"Li Shufu", estado:"of"},
    {id:"PROP-02", t:"prop", n:"Volvo Cars (Volvo Car AB)", c:"Volvo Cars", lugar:"Gotemburgo, Suecia", que:"Fabricante sueco que cotiza en la bolsa de Estocolmo. Geely Holding lo controla desde que se lo compró a Ford en 2010.", dueno:"Geely Holding ≈79% + bolsa de Estocolmo", estado:"pr", duda:"Porcentaje exacto de Geely tras el canje de deuda de 2026."},
    {id:"PROP-03", t:"prop", n:"Geely Auto", c:"Geely Auto", lugar:"China (cotiza en Hong Kong)", que:"La automotriz del grupo: marcas Geely, Zeekr y Lynk & Co. «Geely» puede ser el holding de Li Shufu o esta empresa; no son lo mismo. Desarrolló la plataforma SMA.", dueno:"Geely Holding", estado:"of"},
    {id:"PROP-04", t:"prop", n:"Zeekr Group", c:"Zeekr Group", lugar:"China", que:"Marca premium eléctrica y, desde febrero de 2025, holding de Zeekr y Lynk & Co.", dueno:"Geely Auto", estado:"pr"},
    {id:"PROP-05", t:"prop", n:"Lynk & Co", c:"Lynk & Co", lugar:"China / Europa", que:"Marca nacida en 2016 como empresa conjunta Geely–Volvo. Volvo vendió su 30% en 2024, pero desde 2026 Volvo Cars es su importador exclusivo en Europa, a través de sus concesionarios.", dueno:"Zeekr 51%, Geely Auto 49%", estado:"pr"},
    {id:"PROP-06", t:"prop", n:"Polestar", c:"Polestar", lugar:"Gotemburgo, Suecia", que:"Marca eléctrica de alto rendimiento, cofundada por Volvo y Geely. El Polestar 3 se fabrica en Ridgeville junto al EX90.", dueno:"Li Shufu (PSD) ≈44%, Geely ≈22%, Volvo Cars ≈16–20%", estado:"pr", duda:"Los porcentajes cambian con el canje de deuda de 2026."},
    {id:"PROP-07", t:"prop", n:"smart", c:"smart", lugar:"China / Alemania", que:"Marca de autos urbanos eléctricos. Usa la plataforma SEA, la misma del EX30 (smart #1 y #3).", dueno:"Empresa conjunta 50/50 Geely–Mercedes-Benz", estado:"pr"},
    {id:"PROP-08", t:"prop", n:"Lotus", c:"Lotus", lugar:"Reino Unido", que:"Marca deportiva británica.", dueno:"Geely 51%", estado:"pr"},
    {id:"PROP-09", t:"prop", n:"Volvo Group (AB Volvo)", c:"Volvo Group", lugar:"Gotemburgo, Suecia", que:"Camiones, buses y motores marinos. No es Volvo Cars: son empresas separadas desde 1999 y solo comparten la marca VOLVO. En 2025 le compró a Novo Energy su área de I+D.", dueno:"Accionistas propios", estado:"of"},

    /* ---------- Centros de I+D y tecnología ---------- */
    {id:"ID-01", t:"id", n:"Volvo Cars, centro de ingeniería", c:"Ingeniería Volvo", lugar:"Gotemburgo, Suecia", que:"I+D principal: plataformas SPA, SPA2 y SPA3, seguridad y software central.", dueno:"Volvo Cars", estado:"of"},
    {id:"ID-02", t:"id", n:"Zeekr Technology Europe (ex CEVT)", c:"Zeekr Tech Europe", lugar:"Gotemburgo, Suecia", que:"Desarrolló CMA (junto con Volvo) y SEA, la base del EX30. Más de 900 ingenieros; trabaja con la I+D de Ningbo y Shanghái. No depende de Volvo Cars: es filial de Zeekr, dentro de Geely Auto.", dueno:"Zeekr Group", estado:"of"},
    {id:"ID-03", t:"id", n:"Volvo Cars, centro de ingeniería China", c:"Ingeniería Shanghái", lugar:"Shanghái, China", que:"I+D y pruebas de software para China y el mundo.", dueno:"Volvo Cars", estado:"of"},
    {id:"ID-04", t:"id", n:"Centro de pruebas de software", c:"Pruebas de software", lugar:"Gotemburgo, Suecia", que:"22.000 m²; pruebas remotas 24/7 para todos los hubs (2023).", dueno:"Volvo Cars", estado:"pr"},
    {id:"ID-05", t:"id", n:"Tech Hub Lund", c:"Tech Hub Lund", lugar:"Lund, Suecia", que:"Computador central, conectividad, experiencia de usuario y ayudas a la conducción.", dueno:"Volvo Cars", estado:"pr", duda:"Confirmar que sigue abierto tras los recortes de 2025."},
    {id:"ID-06", t:"id", n:"Tech Hub Estocolmo", c:"Tech Hub Estocolmo", lugar:"Estocolmo, Suecia", que:"Relación directa con el cliente y venta online.", dueno:"Volvo Cars", estado:"pr", duda:"Confirmar que sigue abierto tras los recortes de 2025."},
    {id:"ID-07", t:"id", n:"Tech Hubs Bengaluru, Cracovia y Singapur", c:"Hubs Bengaluru · Cracovia · Singapur", lugar:"India, Polonia, Singapur", que:"Desarrollo de software.", dueno:"Volvo Cars", estado:"pr", duda:"Vigencia 2026 de cada hub."},
    {id:"ID-08", t:"id", n:"Zenseact", c:"Zenseact", lugar:"Gotemburgo, Suecia", que:"Software de ayudas a la conducción y conducción autónoma para Volvo y Polestar.", dueno:"Volvo Cars 100%", estado:"pr"},
    {id:"ID-09", t:"id", n:"Volvo Cars Safety Centre", c:"Safety Centre", lugar:"Torslanda, Gotemburgo", que:"Laboratorio de pruebas de choque y seguridad.", dueno:"Volvo Cars", estado:"pv"},

    /* ---------- Centros de diseño ---------- */
    {id:"DIS-01", t:"dis", n:"Volvo Cars Design (sede)", c:"Diseño Volvo", lugar:"Gotemburgo, Suecia", que:"Lenguaje de diseño de la marca: exterior, interior, color y materiales, experiencia de usuario. Firma el diseño de todos los modelos, incluido el EX30 aunque su plataforma venga de Geely.", dueno:"Volvo Cars", estado:"of", duda:"Jefe global de diseño: Jeremy Offer desde mayo de 2023; vigencia 2026 por verificar."},
    {id:"DIS-02", t:"dis", n:"Design Studio Shanghai", c:"Diseño Shanghái", lugar:"Jiading, Shanghái", que:"Puede llevar un auto completo del concepto a la producción. 5.500 m², más de 100 diseñadores; lideró el EX90 Excellence.", dueno:"Volvo Cars", estado:"of"},
    {id:"DIS-03", t:"dis", n:"Volvo Monitoring & Concept Center", c:"Concept Center Camarillo", lugar:"Camarillo, California", que:"Estudio y laboratorio de ideas: conceptos y diseño de autos de producción.", dueno:"Volvo Cars", estado:"of"},
    {id:"DIS-04", t:"dis", n:"Estudios de diseño Geely / Zeekr / Lynk & Co", c:"Diseño marcas hermanas", lugar:"Gotemburgo y China", que:"Diseñan los autos de las marcas hermanas, no los Volvo.", dueno:"Geely Auto / Zeekr", estado:"pv"},

    /* ---------- Plataformas ---------- */
    {id:"PLAT-01", t:"plat", n:"CMA · Compact Modular Architecture", c:"CMA", lugar:"Volvo + CEVT", que:"Base compacta para combustión, híbrido y eléctrico. Hermanos: Polestar 2, Lynk & Co 01 y 03.", dueno:"Desarrollo conjunto Volvo + CEVT", estado:"of"},
    {id:"PLAT-02", t:"plat", n:"SEA · Sustainable Experience Architecture (SEA2 en el EX30)", c:"SEA", lugar:"Zeekr Technology Europe", que:"Plataforma 100% eléctrica del grupo Geely. Hermanos: Zeekr X, smart #1 y #3, Lynk & Co Z20, Polestar 4. El EX30 no usa la base de software Superset de Volvo.", dueno:"CEVT / Zeekr Technology Europe", estado:"pr"},
    {id:"PLAT-03", t:"plat", n:"SPA · Scalable Product Architecture", c:"SPA", lugar:"Volvo", que:"Base grande para combustión, mild hybrid e híbrido enchufable. También S90/V90 y S60/V60, que no están en la gama de Chile.", dueno:"Volvo Cars", estado:"of"},
    {id:"PLAT-04", t:"plat", n:"SPA2", c:"SPA2", lugar:"Volvo", que:"Plataforma 100% eléctrica propia. Comparte con SPA3 la base de electrónica y software Superset. Hermano: Polestar 3.", dueno:"Volvo Cars", estado:"of"},
    {id:"PLAT-05", t:"plat", n:"SPA3", c:"SPA3", lugar:"Volvo", que:"Plataforma 100% eléctrica de nueva generación, «100% Volvo Cars» según Anders Bell. Usa la base Superset.", dueno:"Volvo Cars", estado:"of", duda:"Parte de la prensa alemana dice que se hizo con Geely."},
    {id:"PLAT-06", t:"plat", n:"SMA · Scalable Modular Architecture", c:"SMA", lugar:"Grupo Geely", que:"Plataforma de híbrido enchufable de largo alcance, probablemente una evolución de CMA. Hermano: Lynk & Co 08.", dueno:"Grupo Geely", estado:"pr"},

    /* ---------- Plantas de vehículos ---------- */
    {id:"FAB-01", t:"fab", n:"Torslanda (VCT)", c:"Torslanda", lugar:"Gotemburgo, Suecia", que:"Planta histórica de Volvo: XC90, XC60, V60 y, desde abril de 2026, EX60. Tiene planta de baterías y megacasting.", dueno:"Volvo Cars", estado:"of"},
    {id:"FAB-02", t:"fab", n:"Gante (VCG)", c:"Gante", lugar:"Bélgica", que:"XC40, EX40, EC40 y, desde 2025, EX30 y EX30 Cross Country. Tiene planta de baterías propia desde 2022.", dueno:"Volvo Cars", estado:"of"},
    {id:"FAB-03", t:"fab", n:"Ridgeville", c:"Ridgeville", lugar:"Carolina del Sur, EE. UU.", que:"EX90 y Polestar 3; XC60 desde fines de 2026.", dueno:"Volvo Cars", estado:"of"},
    {id:"FAB-04", t:"fab", n:"Chengdu", c:"Chengdu", lugar:"China", que:"XC60, S60 y ES90 (también para Europa).", dueno:"Volvo Cars", estado:"pr"},
    {id:"FAB-05", t:"fab", n:"Daqing", c:"Daqing", lugar:"China", que:"S90 y S90 largo; ningún modelo de la gama chilena.", dueno:"Volvo Cars", estado:"pr", duda:"Lista de modelos 2026."},
    {id:"FAB-06", t:"fab", n:"Taizhou / Luqiao", c:"Taizhou", lugar:"Zhejiang, China", que:"XC40 para China y el XC70 nuevo. En el mismo polo está la «CMA Super Factory» de Geely, que comparte con Lynk & Co y Polestar 2.", dueno:"Volvo Cars (100% desde 2021)", estado:"pr"},
    {id:"FAB-07", t:"fab", n:"Zhangjiakou", c:"Zhangjiakou", lugar:"Hebei, China", que:"Planta de Geely que fabrica el EX30 para exportación mundial; fue la única fuente hasta 2025.", dueno:"Geely", estado:"of"},
    {id:"FAB-08", t:"fab", n:"Shah Alam (VCMM)", c:"Shah Alam", lugar:"Malasia", que:"Armado local para el sudeste asiático, incluido el EX30.", dueno:"Volvo Cars", estado:"pr"},
    {id:"FAB-09", t:"fab", n:"Hoskote, Bengaluru", c:"Hoskote", lugar:"India", que:"Armado local para India.", dueno:"Volvo Cars", estado:"pr"},
    {id:"FAB-10", t:"fab", n:"Košice", c:"Košice", lugar:"Eslovaquia", que:"Planta para eléctricos de nueva generación, en construcción; inicio previsto en 2026.", dueno:"Volvo Cars", estado:"pv", duda:"Posible atraso."},

    /* ---------- Componentes, motores, baterías ---------- */
    {id:"COMP-01", t:"comp", n:"Aurobay", c:"Aurobay (motores)", lugar:"Skövde, Suecia y Zhangjiakou, China", que:"Motores a combustión, transmisiones e híbridos para los mild hybrid y los híbridos enchufables de Volvo. Volvo ya no fabrica sus motores a combustión: desde 2021 los hace Aurobay.", dueno:"Horse Powertrain", estado:"of"},
    {id:"COMP-02", t:"comp", n:"Horse Powertrain", c:"Horse Powertrain", lugar:"Madrid (sede), plantas en Europa y China", que:"Holding de motores: Aurobay (ex Geely) + Horse (ex Renault); 19.000 empleados.", dueno:"Geely + Renault; Aramco 10%", estado:"pr"},
    {id:"COMP-03", t:"comp", n:"Planta de motores eléctricos Skövde", c:"Motores eléctricos Skövde", lugar:"Skövde, Suecia", que:"Motores eléctricos propios de Volvo (anuncio de 2020).", dueno:"Volvo Cars", estado:"pv"},
    {id:"COMP-04", t:"comp", n:"Volvo Cars Body Components", c:"Carrocerías Olofström", lugar:"Olofström, Suecia", que:"Piezas estampadas de carrocería para Torslanda y Gante.", dueno:"Volvo Cars", estado:"of", duda:"Dato de un comunicado antiguo."},
    {id:"COMP-05", t:"comp", n:"Planta de baterías Gante", c:"Baterías Gante", lugar:"Gante, Bélgica", que:"Armado de paquetes de batería desde 2022.", dueno:"Volvo Cars", estado:"pr"},
    {id:"COMP-06", t:"comp", n:"Planta de baterías Torslanda", c:"Baterías Torslanda", lugar:"Gotemburgo, Suecia", que:"Armado de paquetes de batería; parte de la inversión de SEK 10.000 millones que incluyó el megacasting.", dueno:"Volvo Cars", estado:"of"},
    {id:"COMP-07", t:"comp", n:"Novo Energy", c:"Novo Energy", lugar:"Torslanda, Gotemburgo", que:"Fábrica de celdas de 50 GWh suspendida tras la quiebra de su socio Northvolt: edificio casi terminado y sin máquinas. Por eso las celdas siguen viniendo de proveedores externos. No abastece a ningún modelo.", dueno:"Volvo Cars 100% (ex empresa conjunta con Northvolt)", estado:"pr", duda:"Estado actual del proyecto."},

    /* ---------- Proveedores tecnológicos ---------- */
    {id:"PROV-01", t:"prov", n:"CATL", c:"CATL", lugar:"China", que:"Celdas de batería; uno de los dos proveedores principales de Volvo. El desarme de FEV encontró celdas NMC de CATL en un EX30.", dueno:"Externo", estado:"pr"},
    {id:"PROV-02", t:"prov", n:"LG Energy Solution", c:"LG Energy Solution", lugar:"Corea del Sur", que:"Celdas de alto níquel; el otro proveedor principal.", dueno:"Externo", estado:"pr"},
    {id:"PROV-03", t:"prov", n:"Shandong Geely Sunwoda", c:"Geely Sunwoda", lugar:"China", que:"Celdas NMC. Origen del llamado a revisión de más de 40.000 EX30 en 2026.", dueno:"Empresa conjunta Geely–Sunwoda (Sunwoda 30%)", estado:"pr"},
    {id:"PROV-04", t:"prov", n:"Viridi E-Mobility Technology (VREMT)", c:"Viridi (paquetes)", lugar:"Ningbo, China", que:"Diseña y arma los paquetes de batería del EX30, con gestión térmica y BMS. Las celdas NMC llegan de Geely–Sunwoda; Volvo instala el paquete.", dueno:"Filial de Zeekr", estado:"pr"},
    {id:"PROV-05", t:"prov", n:"Rept Battero", c:"Rept Battero", lugar:"China", que:"Celdas LFP de la versión de entrada del EX30 2026 en China.", dueno:"Externo", estado:"pr", duda:"Sin confirmar para Chile: el Core chileno es LFP, pero no se sabe de qué proveedor."},
    {id:"PROV-06", t:"prov", n:"Nvidia", c:"Nvidia", lugar:"EE. UU.", que:"Computador de conducción DRIVE AGX Orin, más de 250 billones de operaciones por segundo. Parte del sistema HuginCore, que integra Volvo.", dueno:"Externo", estado:"of"},
    {id:"PROV-07", t:"prov", n:"Qualcomm", c:"Qualcomm", lugar:"EE. UU.", que:"Snapdragon Cockpit (infoentretenimiento) y Snapdragon Auto Connectivity. Oficial en el EX60.", dueno:"Externo", estado:"of", duda:"Qué chip usan el EX30 y el EX90."},
    {id:"PROV-08", t:"prov", n:"Google", c:"Google", lugar:"EE. UU.", que:"Sistema Google integrado, mapas HD y asistente Gemini (el EX60 es el primero con Gemini).", dueno:"Externo", estado:"of"},
    {id:"PROV-09", t:"prov", n:"Luminar", c:"Luminar (lidar)", lugar:"EE. UU.", que:"Lidar en el techo del EX90 y el ES90; el EX60 no lo lleva.", dueno:"Externo", estado:"pr", duda:"Situación de la empresa y si el EX90 sigue llevando lidar."},

    /* ---------- Modelos ---------- */
    {id:"MOD-01", t:"mod", n:"EX30 / EX30 Cross Country", c:"EX30", app:"ex30", estado:"of",
      clave:"La base eléctrica (SEA) la desarrolló Zeekr Technology Europe, en Gotemburgo, para el grupo Geely; el diseño exterior, el interior y la experiencia de usuario son de Volvo.",
      chile:"Sí, en dossier Chile."},
    {id:"MOD-02", t:"mod", n:"EX40", c:"EX40", app:"ex40", estado:"of",
      clave:"Plataforma CMA, hecha por Volvo junto con CEVT; la misma familia del Polestar 2.", chile:"Sí, en dossier Chile (con EC40)."},
    {id:"MOD-03", t:"mod", n:"EC40", c:"EC40", app:"ec40", estado:"of",
      clave:"Plataforma CMA, hecha por Volvo junto con CEVT; se fabrica en Gante.", chile:"Sí, en dossier Chile (con EX40)."},
    {id:"MOD-04", t:"mod", n:"XC40 mild hybrid", c:"XC40", app:"xc40", estado:"of",
      clave:"Plataforma CMA y motor Aurobay: la misma base compacta que el EX40, con motor a bencina.", chile:"Sí, en dossier Chile."},
    {id:"MOD-05", t:"mod", n:"XC60 (mild hybrid y PHEV)", c:"XC60", app:"xc60", estado:"of",
      clave:"Plataforma SPA, desarrollada solo por Volvo; motor Aurobay.", chile:"Sí, en dossier Chile."},
    {id:"MOD-06", t:"mod", n:"XC90 (mild hybrid y PHEV)", c:"XC90", app:"xc90", estado:"of",
      clave:"Plataforma SPA, desarrollada solo por Volvo; se fabrica en Torslanda; motor Aurobay.", chile:"Sí, en dossier Chile."},
    {id:"MOD-07", t:"mod", n:"EX90", c:"EX90", app:"ex90", estado:"of",
      clave:"Plataforma eléctrica SPA2, 100% Volvo, con el cerebro Nvidia + Qualcomm + Google integrado por Volvo en HuginCore y software de Zenseact.", chile:"Sí, en dossier Chile."},
    {id:"MOD-08", t:"mod", n:"ES90", c:"ES90", estado:"pv",
      clave:"Sedán eléctrico sobre SPA2, fabricado en Chengdu.", chile:"Por verificar si llega a Chile."},
    {id:"MOD-09", t:"mod", n:"EX60", c:"EX60", estado:"pv",
      clave:"Primer modelo sobre SPA3; se fabrica en Torslanda desde abril de 2026. Primero con Gemini.", chile:"Por verificar si llega a Chile y cuándo."},
    {id:"MOD-10", t:"mod", n:"XC70 nuevo (híbrido enchufable)", c:"XC70 nuevo", estado:"pr",
      clave:"Plataforma SMA del grupo Geely, fabricado en Taizhou. No es el XC70 familiar antiguo.", chile:"Solo China por ahora."}
  ],

  /* Flechas: [origen, destino, estado opcional]. Van en la dirección en que se llega al modelo
     (desarrollo → plataforma → modelo; planta → modelo; pieza → planta o modelo). Sin estado = el del dato. */
  enlaces: [
    /* desarrollo → plataforma */
    ["ID-01","PLAT-01"],["ID-02","PLAT-01"],["ID-02","PLAT-02"],
    ["ID-01","PLAT-03"],["ID-01","PLAT-04"],["ID-01","PLAT-05"],["PROP-03","PLAT-06"],
    /* centros que apoyan a la ingeniería central */
    ["ID-03","ID-01"],["ID-04","ID-01"],["ID-05","ID-01"],["ID-06","ID-01"],["ID-07","ID-01"],["ID-09","ID-01","pv"],
    /* software de conducción */
    ["ID-08","MOD-07"],["ID-08","MOD-08"],["ID-08","MOD-09"],
    /* diseño */
    ["DIS-02","DIS-01"],["DIS-03","DIS-01"],["DIS-02","MOD-07"],
    ["DIS-01","MOD-01"],["DIS-01","MOD-02"],["DIS-01","MOD-03"],["DIS-01","MOD-04"],["DIS-01","MOD-05"],
    ["DIS-01","MOD-06"],["DIS-01","MOD-07"],["DIS-01","MOD-08"],["DIS-01","MOD-09"],["DIS-01","MOD-10","pv"],
    /* plataforma → modelo */
    ["PLAT-01","MOD-02"],["PLAT-01","MOD-03"],["PLAT-01","MOD-04"],["PLAT-02","MOD-01"],
    ["PLAT-03","MOD-05"],["PLAT-03","MOD-06"],["PLAT-04","MOD-07"],["PLAT-04","MOD-08"],
    ["PLAT-05","MOD-09"],["PLAT-06","MOD-10"],
    /* planta → modelo (la planta exacta de lo que llega a Chile sale de la ficha Inchcape o del VIN) */
    ["FAB-07","MOD-01"],["FAB-02","MOD-01"],["FAB-08","MOD-01"],
    ["FAB-02","MOD-02"],["FAB-06","MOD-02"],["FAB-02","MOD-03"],["FAB-02","MOD-04"],["FAB-06","MOD-04"],
    ["FAB-01","MOD-05"],["FAB-04","MOD-05"],["FAB-03","MOD-05"],["FAB-01","MOD-06"],
    ["FAB-03","MOD-07"],["FAB-04","MOD-08"],["FAB-01","MOD-09"],["FAB-06","MOD-10"],
    /* componentes */
    ["COMP-02","COMP-01"],["COMP-01","MOD-04"],["COMP-01","MOD-05"],["COMP-01","MOD-06"],["COMP-01","MOD-10","pv"],
    ["COMP-03","PLAT-04","pv"],["COMP-03","PLAT-05","pv"],
    ["COMP-04","FAB-01"],["COMP-04","FAB-02"],["COMP-05","FAB-02"],["COMP-06","FAB-01"],
    /* proveedores */
    ["PROV-01","MOD-01"],["PROV-01","MOD-02"],["PROV-01","MOD-03"],["PROV-02","MOD-02"],["PROV-02","MOD-03"],
    ["PROV-03","PROV-04"],["PROV-04","MOD-01"],["PROV-05","MOD-01","pv"],
    ["PROV-06","MOD-07"],["PROV-06","MOD-08"],["PROV-06","MOD-09"],
    ["PROV-07","MOD-09"],["PROV-07","MOD-07","pv"],["PROV-07","MOD-01","pv"],
    ["PROV-08","MOD-01"],["PROV-08","MOD-02"],["PROV-08","MOD-03"],["PROV-08","MOD-04"],["PROV-08","MOD-05"],
    ["PROV-08","MOD-06"],["PROV-08","MOD-07"],["PROV-08","MOD-08"],["PROV-08","MOD-09"],
    ["PROV-09","MOD-07"],["PROV-09","MOD-08"]
  ],

  /* Árbol de propiedad: quién es dueño de quién. ref:true = aparece de nuevo como participación; duda:true = % por confirmar. */
  propiedad: [
    {id:"PROP-01", pct:"Li Shufu", hijos:[
      {id:"PROP-02", pct:"≈79%", duda:true, hijos:[
        {id:"ID-08", pct:"100%"},
        {id:"COMP-07", pct:"100%"},
        {id:"PROP-06", pct:"≈16–20%", ref:true, duda:true}
      ]},
      {id:"PROP-03", pct:"Controla", hijos:[
        {id:"PROP-04", pct:"Filial", hijos:[
          {id:"ID-02", pct:"Filial"},
          {id:"PROV-04", pct:"Filial"},
          {id:"PROP-05", pct:"51% (Geely Auto tiene el 49%)"}
        ]}
      ]},
      {id:"PROP-06", pct:"Li Shufu ≈44% + Geely ≈22%", duda:true},
      {id:"PROP-07", pct:"50% con Mercedes-Benz"},
      {id:"PROP-08", pct:"51%"},
      {id:"PROV-03", pct:"Empresa conjunta (Sunwoda 30%)"},
      {id:"COMP-02", pct:"Socio con Renault (Aramco 10%)", hijos:[
        {id:"COMP-01", pct:"Parte de Horse"}
      ]},
      {id:"FAB-07", pct:"Planta de Geely"}
    ]}
  ],
  aparte: ["PROP-09"],

  /* Pendientes del Doc; los cuatro primeros afectan lo que se le dice al cliente. */
  pendientes: [
    "Planta de origen de cada modelo vendido en Chile (ficha Inchcape o VIN: YV1 = Suecia/Bélgica, LYV/LVY = China).",
    "Química y proveedor de batería del EX30 vendido en Chile (LFP o NMC) y si está afectado por el llamado a revisión de 2026.",
    "SPA3: Volvo dice «100% Volvo»; parte de la prensa alemana dice que se hizo con Geely.",
    "¿Llegan el EX60 y el ES90 a Chile? ¿Cuándo?",
    "Porcentaje exacto de Geely en Volvo Cars y de Volvo en Polestar tras el canje de deuda de 2026.",
    "Qué tech hubs siguen abiertos después de los recortes de 2025.",
    "Jefe global de diseño vigente en 2026.",
    "Estado de la planta de Košice y del proyecto de baterías de Novo Energy.",
    "Qué chip de infoentretenimiento usan el EX30 y el EX90.",
    "Situación de Luminar y si el EX90 sigue llevando lidar."
  ]
};
