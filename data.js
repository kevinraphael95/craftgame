// ============================================================
// DATA — REFAIT DE ZÉRO
// Progression : particules → hadrons → noyaux → atomes (tableau périodique) → molécules → phases → stellaire → cosmique
// ============================================================

const ELEMENTS = {

  // ── QUARKS (starters) ─────────────────────────────────────
  "Quark Up":       { emoji:"🔴", cat:"quark",   label:"Quark u",       desc:"Charge +2/3. Fondamental du proton.", starter:true },
  "Quark Down":     { emoji:"🔵", cat:"quark",   label:"Quark d",       desc:"Charge −1/3. Fondamental du neutron.", starter:true },
  "Quark Strange":  { emoji:"🟣", cat:"quark",   label:"Quark s",       desc:"Saveur étrangeté. Plus lourd que u/d.", starter:true },
  "Quark Charm":    { emoji:"💜", cat:"quark",   label:"Quark c",       desc:"Découvert en 1974. Révolution de novembre.", starter:true },
  "Quark Bottom":   { emoji:"⚫", cat:"quark",   label:"Quark b",       desc:"Saveur beauté. Charge −1/3.", starter:true },
  "Quark Top":      { emoji:"🟠", cat:"quark",   label:"Quark t",       desc:"Le plus lourd. 173 GeV/c².", starter:true },

  // ── LEPTONS (starters) ────────────────────────────────────
  "Électron":       { emoji:"⚡", cat:"lepton",  label:"Électron",      desc:"Charge −1. 0.511 MeV. Stable.", starter:true },
  "Neutrino":       { emoji:"〰️", cat:"lepton",  label:"Neutrino ν",    desc:"Presque sans masse. Traverse tout.", starter:true },
  "Muon":           { emoji:"μ",  cat:"lepton",  label:"Muon μ",        desc:"Électron lourd. τ = 2.2 μs. Rayons cosmiques." },

  // ── BOSONS (starters) ─────────────────────────────────────
  "Photon":         { emoji:"💡", cat:"boson",   label:"Photon γ",      desc:"Quantum de lumière. Masse nulle.", starter:true },
  "Gluon":          { emoji:"🌀", cat:"boson",   label:"Gluon g",       desc:"Médiateur force forte. 8 types.", starter:true },
  "Boson W":        { emoji:"W",  cat:"boson",   label:"Boson W±",      desc:"Force faible. Désintégration β." },
  "Boson Z":        { emoji:"Z",  cat:"boson",   label:"Boson Z⁰",      desc:"Force faible neutre. Découvert 1983." },
  "Boson Higgs":    { emoji:"H",  cat:"boson",   label:"Boson de Higgs",desc:"Masse des particules. LHC 2012." },

  // ── HADRONS ───────────────────────────────────────────────
  "Proton":         { emoji:"🔵", cat:"hadron",  label:"Proton",        desc:"uud. Charge +1. Stable indéfiniment." },
  "Neutron":        { emoji:"⚪", cat:"hadron",  label:"Neutron",       desc:"udd. Neutre. Libre instable (τ≈880s)." },
  "Pion+":          { emoji:"🔷", cat:"hadron",  label:"Pion π+",       desc:"ud̄. Médiateur force forte résiduelle." },
  "Pion0":          { emoji:"🔹", cat:"hadron",  label:"Pion π0",       desc:"uū/dd̄. Décroît en 2γ en 10⁻¹⁷s." },
  "Kaon":           { emoji:"🟡", cat:"hadron",  label:"Kaon K+",       desc:"us̄. Violation CP découverte 1964." },
  "Eta":            { emoji:"η",  cat:"hadron",  label:"Méson η",       desc:"uū+dd̄+ss̄. Symétrie SU(3)." },
  "Oméga":          { emoji:"Ω",  cat:"hadron",  label:"Oméga Ω−",      desc:"sss. Prédit avant découverte! Nobel." },
  "Lambda":         { emoji:"Λ",  cat:"hadron",  label:"Lambda Λ",      desc:"uds. Le plus léger des baryons étranges." },
  "Sigma":          { emoji:"Σ",  cat:"hadron",  label:"Sigma Σ",       desc:"Baryon étrange. Triplet d'isospin." },
  "Delta":          { emoji:"Δ",  cat:"hadron",  label:"Delta Δ++",     desc:"uuu. Résonance. Découvert 1952." },
  "Méson D":        { emoji:"D",  cat:"hadron",  label:"Méson D",       desc:"Contient quark charme. Décroît vite." },
  "Méson B":        { emoji:"🟤", cat:"hadron",  label:"Méson B",       desc:"Contient quark b. Violation CP majeure." },
  "Charmonium":     { emoji:"ψ",  cat:"hadron",  label:"J/ψ",           desc:"cc̄. Novembre 1974. Révolution en physique." },
  "Upsilon":        { emoji:"Υ",  cat:"hadron",  label:"Upsilon Υ",     desc:"bb̄. Découvert 1977. Quark b confirmé." },
  "Glueball":       { emoji:"🔮", cat:"hadron",  label:"Glueball",      desc:"État lié de gluons purs. Hypothétique." },

  // ── NOYAUX ────────────────────────────────────────────────
  "Deutéron":       { emoji:"²H", cat:"nucleus", label:"Deutéron",      desc:"1p+1n. Noyau d'hydrogène lourd." },
  "Triton":         { emoji:"³H", cat:"nucleus", label:"Triton ³H",     desc:"1p+2n. Radioactif β⁻. τ½=12.3 ans." },
  "Noyau He-3":     { emoji:"³He",cat:"nucleus", label:"He-3",          desc:"2p+1n. Isotope rare de l'hélium." },
  "Noyau He-4":     { emoji:"α",  cat:"nucleus", label:"Particule α",   desc:"2p+2n. Très stable. Émise en radioactivité α." },
  "Noyau Li-6":     { emoji:"⁶Li",cat:"nucleus", label:"Li-6",          desc:"3p+3n. 7.5% du lithium naturel." },
  "Noyau Li-7":     { emoji:"⁷Li",cat:"nucleus", label:"Li-7",          desc:"3p+4n. 92.5% du lithium naturel." },
  "Noyau Be-9":     { emoji:"⁹Be",cat:"nucleus", label:"Be-9",          desc:"4p+5n. Seul béryllium stable." },
  "Noyau Be-8":     { emoji:"⁸Be",cat:"nucleus", label:"Be-8",          desc:"Instable. Pont du triple-alpha." },
  "Noyau B-10":     { emoji:"¹⁰B",cat:"nucleus", label:"B-10",          desc:"5p+5n. Absorbe neutrons lents." },
  "Noyau B-11":     { emoji:"¹¹B",cat:"nucleus", label:"B-11",          desc:"5p+6n. 80% du bore naturel." },
  "Noyau C-12":     { emoji:"¹²C",cat:"nucleus", label:"C-12",          desc:"6p+6n. Triple-alpha. Référence masse atomique." },
  "Noyau C-14":     { emoji:"¹⁴C",cat:"nucleus", label:"C-14",          desc:"6p+8n. Radioactif. Datation carbone." },
  "Noyau N-14":     { emoji:"¹⁴N",cat:"nucleus", label:"N-14",          desc:"7p+7n. Principal isotope de l'azote." },
  "Noyau O-16":     { emoji:"¹⁶O",cat:"nucleus", label:"O-16",          desc:"8p+8n. 99.76% de l'oxygène naturel." },
  "Noyau Ne-20":    { emoji:"²⁰Ne",cat:"nucleus",label:"Ne-20",         desc:"10p+10n. Produit par fusion O+O." },
  "Noyau Na-23":    { emoji:"²³Na",cat:"nucleus",label:"Na-23",         desc:"11p+12n. Seul sodium stable." },
  "Noyau Mg-24":    { emoji:"²⁴Mg",cat:"nucleus",label:"Mg-24",         desc:"12p+12n. Abondant dans les étoiles." },
  "Noyau Al-27":    { emoji:"²⁷Al",cat:"nucleus",label:"Al-27",         desc:"13p+14n. Seul aluminium stable." },
  "Noyau Si-28":    { emoji:"²⁸Si",cat:"nucleus",label:"Si-28",         desc:"14p+14n. Combustion Si stellaire." },
  "Noyau P-31":     { emoji:"³¹P", cat:"nucleus",label:"P-31",          desc:"15p+16n. Seul phosphore stable." },
  "Noyau S-32":     { emoji:"³²S", cat:"nucleus",label:"S-32",          desc:"16p+16n. Principal isotope du soufre." },
  "Noyau Cl-35":    { emoji:"³⁵Cl",cat:"nucleus",label:"Cl-35",         desc:"17p+18n. 75.8% du chlore naturel." },
  "Noyau Ar-40":    { emoji:"⁴⁰Ar",cat:"nucleus",label:"Ar-40",         desc:"18p+22n. 99.6% de l'argon atmosphérique." },
  "Noyau K-39":     { emoji:"³⁹K", cat:"nucleus",label:"K-39",          desc:"19p+20n. 93.3% du potassium naturel." },
  "Noyau Ca-40":    { emoji:"⁴⁰Ca",cat:"nucleus",label:"Ca-40",         desc:"20p+20n. Isotope le plus abondant du calcium." },
  "Noyau Fe-56":    { emoji:"⁵⁶Fe",cat:"nucleus",label:"Fe-56",         desc:"26p+30n. Énergie de liaison max. Fin fusion." },
  "Noyau Ni-62":    { emoji:"⁶²Ni",cat:"nucleus",label:"Ni-62",         desc:"28p+34n. Énergie de liaison/nucléon maximale." },
  "Noyau Cu-63":    { emoji:"⁶³Cu",cat:"nucleus",label:"Cu-63",         desc:"29p+34n. 69% du cuivre naturel." },
  "Noyau Zn-64":    { emoji:"⁶⁴Zn",cat:"nucleus",label:"Zn-64",         desc:"30p+34n. Isotope principal du zinc." },
  "Noyau Ag-107":   { emoji:"¹⁰⁷Ag",cat:"nucleus",label:"Ag-107",      desc:"47p+60n. 51.8% de l'argent naturel." },
  "Noyau Au-197":   { emoji:"¹⁹⁷Au",cat:"nucleus",label:"Au-197",       desc:"79p+118n. Seul or stable. r-process." },
  "Noyau Pb-208":   { emoji:"²⁰⁸Pb",cat:"nucleus",label:"Pb-208",       desc:"82p+126n. Noyau doublement magique." },
  "Noyau U-238":    { emoji:"²³⁸U", cat:"nucleus",label:"U-238",         desc:"92p+146n. τ½=4.47 Ga. Fission." },

  // ── ATOMES — Tableau périodique complet (éléments majeurs) ──
  "Hydrogène":      { emoji:"H",  cat:"atom",    label:"H — Hydrogène",  desc:"Z=1. 75% de la matière baryonique de l'univers." },
  "Hélium":         { emoji:"He", cat:"atom",    label:"He — Hélium",    desc:"Z=2. Gaz noble. Produit des étoiles." },
  "Lithium":        { emoji:"Li", cat:"atom",    label:"Li — Lithium",   desc:"Z=3. Né lors du Big Bang. Batteries." },
  "Béryllium":      { emoji:"Be", cat:"atom",    label:"Be — Béryllium", desc:"Z=4. Métal léger. Rare dans l'univers." },
  "Bore":           { emoji:"B",  cat:"atom",    label:"B — Bore",       desc:"Z=5. Métalloïde. Spallation cosmique." },
  "Carbone":        { emoji:"C",  cat:"atom",    label:"C — Carbone",    desc:"Z=6. Base du vivant. Triple-alpha stellaire." },
  "Azote":          { emoji:"N",  cat:"atom",    label:"N — Azote",      desc:"Z=7. 78% de l'atmosphère terrestre." },
  "Oxygène":        { emoji:"O",  cat:"atom",    label:"O — Oxygène",    desc:"Z=8. Troisième élément de l'univers." },
  "Fluor":          { emoji:"F",  cat:"atom",    label:"F — Fluor",      desc:"Z=9. Le plus électronégatif. Étoiles AGB." },
  "Néon":           { emoji:"Ne", cat:"atom",    label:"Ne — Néon",      desc:"Z=10. Gaz noble. Lumières colorées." },
  "Sodium":         { emoji:"Na", cat:"atom",    label:"Na — Sodium",    desc:"Z=11. Métal alcalin. Na+ vital aux neurones." },
  "Magnésium":      { emoji:"Mg", cat:"atom",    label:"Mg — Magnésium", desc:"Z=12. Abondant dans les étoiles et météorites." },
  "Aluminium":      { emoji:"Al", cat:"atom",    label:"Al — Aluminium", desc:"Z=13. Métal le plus abondant de la croûte." },
  "Silicium":       { emoji:"Si", cat:"atom",    label:"Si — Silicium",  desc:"Z=14. Deuxième plus abondant. Semiconducteur." },
  "Phosphore":      { emoji:"P",  cat:"atom",    label:"P — Phosphore",  desc:"Z=15. ADN et ATP. Vital à la vie." },
  "Soufre":         { emoji:"S",  cat:"atom",    label:"S — Soufre",     desc:"Z=16. Volcans. Acides aminés soufrés." },
  "Chlore":         { emoji:"Cl", cat:"atom",    label:"Cl — Chlore",    desc:"Z=17. Halogène. Sel de cuisine NaCl." },
  "Argon":          { emoji:"Ar", cat:"atom",    label:"Ar — Argon",     desc:"Z=18. 1% de l'atmosphère. Gaz noble." },
  "Potassium":      { emoji:"K",  cat:"atom",    label:"K — Potassium",  desc:"Z=19. Métal alcalin. K+ vital aux neurones." },
  "Calcium":        { emoji:"Ca", cat:"atom",    label:"Ca — Calcium",   desc:"Z=20. Os, dents. Quatrième élément du corps." },
  "Titane":         { emoji:"Ti", cat:"atom",    label:"Ti — Titane",    desc:"Z=22. Métal résistant. Aérospatiale." },
  "Chrome":         { emoji:"Cr", cat:"atom",    label:"Cr — Chrome",    desc:"Z=24. Acier inoxydable. Anti-corrosion." },
  "Manganèse":      { emoji:"Mn", cat:"atom",    label:"Mn — Manganèse", desc:"Z=25. Alliage d'acier. Enzymes." },
  "Fer":            { emoji:"Fe", cat:"atom",    label:"Fe — Fer",       desc:"Z=26. Fin de la fusion stellaire. Hémoglobine." },
  "Cobalt":         { emoji:"Co", cat:"atom",    label:"Co — Cobalt",    desc:"Z=27. Vitamine B12. Aimants puissants." },
  "Nickel":         { emoji:"Ni", cat:"atom",    label:"Ni — Nickel",    desc:"Z=28. Noyau terrestre. Monnaie." },
  "Cuivre":         { emoji:"Cu", cat:"atom",    label:"Cu — Cuivre",    desc:"Z=29. Conducteur électrique. Âge du bronze." },
  "Zinc":           { emoji:"Zn", cat:"atom",    label:"Zn — Zinc",      desc:"Z=30. Enzymatique. Galvanisation." },
  "Germanium":      { emoji:"Ge", cat:"atom",    label:"Ge — Germanium", desc:"Z=32. Prédit par Mendeleïev avant découverte!" },
  "Sélénium":       { emoji:"Se", cat:"atom",    label:"Se — Sélénium",  desc:"Z=34. Antioxydant. Semi-conducteur." },
  "Brome":          { emoji:"Br", cat:"atom",    label:"Br — Brome",     desc:"Z=35. Seul métalloïde liquide ambiant." },
  "Krypton":        { emoji:"Kr", cat:"atom",    label:"Kr — Krypton",   desc:"Z=36. Gaz noble. Lasers. Étalon mètre (1960)." },
  "Argent":         { emoji:"Ag", cat:"atom",    label:"Ag — Argent",    desc:"Z=47. Meilleur conducteur. Forgé en kilonovae." },
  "Étain":          { emoji:"Sn", cat:"atom",    label:"Sn — Étain",     desc:"Z=50. Bronze, soudure. 10 isotopes stables." },
  "Iode":           { emoji:"I",  cat:"atom",    label:"I — Iode",       desc:"Z=53. Thyroïde. Antiseptique." },
  "Xénon":          { emoji:"Xe", cat:"atom",    label:"Xe — Xénon",     desc:"Z=54. Gaz noble. Propulsion ionique." },
  "Baryum":         { emoji:"Ba", cat:"atom",    label:"Ba — Baryum",    desc:"Z=56. Feux d'artifice verts." },
  "Tungstène":      { emoji:"W",  cat:"atom",    label:"W — Tungstène",  desc:"Z=74. Fusion la plus haute : 3422°C." },
  "Platine":        { emoji:"Pt", cat:"atom",    label:"Pt — Platine",   desc:"Z=78. Catalyseur. Forgé en kilonovae." },
  "Or":             { emoji:"Au", cat:"atom",    label:"Au — Or",        desc:"Z=79. r-process. Forgé dans les kilonovae." },
  "Mercure":        { emoji:"Hg", cat:"atom",    label:"Hg — Mercure",   desc:"Z=80. Seul métal liquide à T ambiante." },
  "Plomb":          { emoji:"Pb", cat:"atom",    label:"Pb — Plomb",     desc:"Z=82. Dernier élément stable. Noyau magique." },
  "Bismuth":        { emoji:"Bi", cat:"atom",    label:"Bi — Bismuth",   desc:"Z=83. Quasi-stable. τ½=2×10¹⁹ ans." },
  "Uranium":        { emoji:"U",  cat:"atom",    label:"U — Uranium",    desc:"Z=92. Fission nucléaire. r-process." },
  "Plutonium":      { emoji:"Pu", cat:"atom",    label:"Pu — Plutonium", desc:"Z=94. Synthétique. Réacteur et bombe." },

  // ── MOLÉCULES ─────────────────────────────────────────────
  "H₂":             { emoji:"💨", cat:"molecule",label:"H₂",             desc:"Dihydrogène. La molécule la plus abondante." },
  "O₂":             { emoji:"🌬️", cat:"molecule",label:"O₂",             desc:"Dioxygène. Produit par la photosynthèse." },
  "N₂":             { emoji:"🫧", cat:"molecule",label:"N₂",             desc:"Diazote. Triple liaison. 78% de l'atmosphère." },
  "Cl₂":            { emoji:"🟢", cat:"molecule",label:"Cl₂",            desc:"Dichlore. Gaz toxique. Désinfection." },
  "Eau":            { emoji:"💧", cat:"molecule",label:"H₂O",            desc:"Solvant universel. Anomalie densité à 4°C." },
  "H₂S":            { emoji:"🦨", cat:"molecule",label:"H₂S",            desc:"Sulfure d'hydrogène. Odeur d'œuf pourri." },
  "CO₂":            { emoji:"🌫️", cat:"molecule",label:"CO₂",            desc:"Gaz carbonique. Photosynthèse et effet de serre." },
  "CO":             { emoji:"☁️", cat:"molecule",label:"CO",             desc:"Monoxyde de carbone. Toxique. Combustion incomplète." },
  "Méthane":        { emoji:"🔥", cat:"molecule",label:"CH₄",            desc:"Gaz naturel. Atmosphère de Titan." },
  "Éthane":         { emoji:"⛽", cat:"molecule",label:"C₂H₆",           desc:"Deuxième alcane. Gaz naturel." },
  "Ammoniac":       { emoji:"💭", cat:"molecule",label:"NH₃",            desc:"Haber-Bosch 1909. Révolution agricole." },
  "Acide Chlorhydrique":{ emoji:"🧪",cat:"molecule",label:"HCl",         desc:"Acide fort. Estomac humain pH~1.5." },
  "Acide Sulfurique":{ emoji:"⚗️",cat:"molecule",label:"H₂SO₄",         desc:"L'acide industriel le plus produit." },
  "NaCl":           { emoji:"🧂", cat:"molecule",label:"NaCl",           desc:"Sel de cuisine. Halocristaux cubiques." },
  "SiO₂":           { emoji:"🪨", cat:"molecule",label:"SiO₂",           desc:"Quartz. Sable. 60% de la croûte terrestre." },
  "Graphène":       { emoji:"🕸️", cat:"molecule",label:"Graphène",       desc:"Feuille 2D de carbone. Nobel 2010." },
  "Graphite":       { emoji:"✏️", cat:"molecule",label:"Graphite",       desc:"Couches de graphène. Crayon. Lubrifiant." },
  "Diamant":        { emoji:"💎", cat:"molecule",label:"Diamant",        desc:"C tétraédrique. Dureté Mohs 10." },
  "Fullerène":      { emoji:"⚽", cat:"molecule",label:"C₆₀",            desc:"Buckminsterfullerène. 60 atomes de C. Nobel 1996." },
  "Eau Lourde":     { emoji:"🫙", cat:"molecule",label:"D₂O",            desc:"Modérateur de neutrons. Réacteurs CANDU." },
  "Ozone":          { emoji:"🛡️", cat:"molecule",label:"O₃",             desc:"Couche d'ozone. Absorbe UV-C. Stratosphère." },
  "Peroxyde H":     { emoji:"🫧", cat:"molecule",label:"H₂O₂",           desc:"Eau oxygénée. Oxydant. Propulseur spatial." },
  "Glucose":        { emoji:"🍬", cat:"molecule",label:"C₆H₁₂O₆",       desc:"Photosynthèse. Carburant de toute vie cellulaire." },
  "Éthanol":        { emoji:"🍶", cat:"molecule",label:"C₂H₅OH",         desc:"Alcool. Fermentation. Biocarburant." },
  "Acide Aminé":    { emoji:"🧩", cat:"molecule",label:"Acide Aminé",    desc:"20 essentiels. Brique des protéines." },
  "Protéine":       { emoji:"🦠", cat:"molecule",label:"Protéine",       desc:"Polymère d'acides aminés. Enzymes et structure." },
  "Lipide":         { emoji:"💛", cat:"molecule",label:"Lipide",         desc:"Chaînes grasses. Membranes cellulaires." },
  "ARN":            { emoji:"🔗", cat:"molecule",label:"ARN",            desc:"Intermédiaire ADN→protéine. Monde ARN." },
  "ADN":            { emoji:"🧬", cat:"molecule",label:"ADN",            desc:"Double hélice. Watson & Crick 1953." },

  // ── PHASES ────────────────────────────────────────────────
  "Plasma":         { emoji:"☀️", cat:"phase",   label:"Plasma",         desc:"Matière ionisée. 4ème état. 99% de la matière visible." },
  "Gaz":            { emoji:"💨", cat:"phase",   label:"Gaz",            desc:"Atomes libres. Nébuleuses interstellaires." },
  "Liquide":        { emoji:"🌊", cat:"phase",   label:"Liquide",        desc:"État intermédiaire. Eau liquide = vie possible." },
  "Solide":         { emoji:"🧱", cat:"phase",   label:"Solide",         desc:"Cristaux ou amorphes. Structure ordonnée." },
  "Glace":          { emoji:"🧊", cat:"phase",   label:"Glace",          desc:"Eau solide. Cristaux hexagonaux. Moins dense que l'eau." },
  "Glace Spatiale": { emoji:"❄️", cat:"phase",   label:"Glace Cosm.",    desc:"H₂O+CO₂+CH₄ gelés. Grains interstellaires." },
  "Condensat BEC":  { emoji:"🌡️", cat:"phase",   label:"Condensat BEC",  desc:"Bose-Einstein. Cinquième état. T≈0K. Nobel 2001." },
  "Matière Dégénérée":{ emoji:"💀",cat:"phase",  label:"Mat. Dégénérée", desc:"Pression de Fermi. Naines blanches et étoiles à neutrons." },
  "Plasma QGP":     { emoji:"🌋", cat:"phase",   label:"Plasma QGP",     desc:"Quark-gluon plasma. Soupe primordiale. T>2×10¹²K." },

  // ── STELLAIRE ─────────────────────────────────────────────
  "Nébuleuse":      { emoji:"🌌", cat:"stellar", label:"Nébuleuse",      desc:"Nuage de gaz et poussière. Nurserie stellaire." },
  "Proto-étoile":   { emoji:"🌟", cat:"stellar", label:"Proto-étoile",   desc:"Contraction gravitationnelle. Critère de Jeans." },
  "Étoile T Tauri": { emoji:"⭐", cat:"stellar", label:"T Tauri",        desc:"Jeune étoile pré-séquence principale. Vents puissants." },
  "Étoile":         { emoji:"⭐", cat:"stellar", label:"Étoile",         desc:"Fusion H→He sur la séquence principale." },
  "Naine Rouge":    { emoji:"🔴", cat:"stellar", label:"Naine Rouge",    desc:"M. La plus commune. Brûle très lentement. τ > 10¹² ans." },
  "Naine Jaune":    { emoji:"🌞", cat:"stellar", label:"Naine Jaune",    desc:"G2V. Notre Soleil. 4.6 Ga. Vie totale ~10 Ga." },
  "Géante Rouge":   { emoji:"🔶", cat:"stellar", label:"Géante Rouge",   desc:"H épuisé. Enveloppe gonflée ×100." },
  "Géante Bleue":   { emoji:"🔵", cat:"stellar", label:"Géante Bleue",   desc:"Étoile massive O/B. T>20 000 K." },
  "Supergéante":    { emoji:"🔆", cat:"stellar", label:"Supergéante",    desc:">8 M☉. Courte vie. Destin : SN II." },
  "Naine Blanche":  { emoji:"⚪", cat:"stellar", label:"Naine Blanche",  desc:"Résidu C/O. Taille Terre. Matière dégénérée." },
  "Naine Noire":    { emoji:"⬛", cat:"stellar", label:"Naine Noire",    desc:"Naine blanche refroidie. Aucune n'existe encore." },
  "Supernova Ia":   { emoji:"💥", cat:"stellar", label:"SN Type Ia",     desc:"Naine blanche + compagnon. Chandelle cosmique." },
  "Supernova II":   { emoji:"💥", cat:"stellar", label:"SN Type II",     desc:"Effondrement cœur de Fer. Forge éléments lourds." },
  "Rémanent SN":    { emoji:"🌀", cat:"stellar", label:"Rémanent SN",    desc:"Coquille d'éjecta en expansion. Nébuleuse du Crabe." },
  "Étoile à Neutrons":{ emoji:"🎯",cat:"stellar",label:"Étoile à n.",    desc:"R~10km. Densité nucléaire. 2M☉ compressées." },
  "Pulsar":         { emoji:"📡", cat:"stellar", label:"Pulsar",         desc:"Étoile à neutrons en rotation. Phare cosmique." },
  "Magnétar":       { emoji:"🧲", cat:"stellar", label:"Magnétar",       desc:"Champ B=10¹⁵ gauss. Sursauts X et gamma." },
  "Kilonova":       { emoji:"💫", cat:"stellar", label:"Kilonova",       desc:"Fusion de 2 étoiles à neutrons. GW170817. Forge or!" },
  "Trou Noir Stellaire":{ emoji:"🌑",cat:"stellar",label:"TN Stellaire", desc:"M<100M☉. Effondrement gravitationnel final." },
  "Trou Noir Sup.": { emoji:"🌑", cat:"stellar", label:"TN Supermassif", desc:"10⁶–10¹⁰ M☉. Au cœur de chaque grande galaxie." },
  "Quasar":         { emoji:"✨", cat:"stellar", label:"Quasar",         desc:"Noyau galactique actif. SMBH + disque d'accrétion." },
  "Sursaut Gamma":  { emoji:"⚡", cat:"stellar", label:"Sursaut γ",      desc:"GRB. L'événement le plus énergétique de l'univers." },
  "Onde Gravit.":   { emoji:"〰️", cat:"stellar", label:"Onde Grav.",     desc:"Ondulations de l'espace-temps. LIGO 2015." },

  // ── COSMIQUE ──────────────────────────────────────────────
  "Poussière":      { emoji:"🌫️", cat:"cosmic",  label:"Poussière",      desc:"Grains sub-microniques. Silicates et carbone." },
  "Astéroïde":      { emoji:"☄️", cat:"cosmic",  label:"Astéroïde",      desc:"Corps rocheux. Ceinture principale Mars-Jupiter." },
  "Comète":         { emoji:"🌠", cat:"cosmic",  label:"Comète",         desc:"Boule de glace sale. Queue de plasma." },
  "Météorite":      { emoji:"🪨", cat:"cosmic",  label:"Météorite",      desc:"Fragment extraterrestre atteignant le sol." },
  "Disque Proto.":  { emoji:"💿", cat:"cosmic",  label:"Disque Proto.",  desc:"Nébuleuse aplatie. Berceau des planètes." },
  "Planète Rocheuse":{ emoji:"🟤",cat:"cosmic",  label:"P. Rocheuse",    desc:"Silicatée. Mercure, Vénus, Terre, Mars." },
  "Planète Gazeuse":{ emoji:"🪐", cat:"cosmic",  label:"P. Gazeuse",     desc:"Géante H/He. Jupiter (318 M⊕), Saturne." },
  "Planète Glacée": { emoji:"🔵", cat:"cosmic",  label:"P. Glacée",      desc:"Géante de glace. Uranus, Neptune." },
  "Planète Tellurique":{ emoji:"🌍",cat:"cosmic",label:"P. Tellurique",  desc:"Rocheuse avec atmosphère. Zone habitable." },
  "Planète Océan":  { emoji:"🌊", cat:"cosmic",  label:"P. Océan",       desc:"Couverte d'eau liquide. Exoplanètes détectées." },
  "Lune":           { emoji:"🌙", cat:"cosmic",  label:"Lune",           desc:"Giant Impact. Théia + proto-Terre. 4.5 Ga." },
  "Anneau":         { emoji:"💍", cat:"cosmic",  label:"Anneau",         desc:"Débris en orbite. Saturne. Limite de Roche." },
  "Océan":          { emoji:"🌊", cat:"cosmic",  label:"Océan",          desc:"Eau liquide en surface. Condition d'habitabilité." },
  "Atmosphère":     { emoji:"🌬️", cat:"cosmic",  label:"Atmosphère",     desc:"Enveloppe gazeuse retenue par la gravité." },
  "Système Sol.":   { emoji:"☀️", cat:"cosmic",  label:"Syst. Sol.",     desc:"Soleil + 8 planètes + ceintures. 4.6 Ga." },
  "Galaxie Naine":  { emoji:"✨", cat:"cosmic",  label:"Galaxie Naine",  desc:"10⁷–10⁹ étoiles. Satellite des grandes galaxies." },
  "Galaxie":        { emoji:"🌌", cat:"cosmic",  label:"Galaxie",        desc:"200-400 milliards d'étoiles. Voie Lactée." },
  "Amas Galact.":   { emoji:"🌠", cat:"cosmic",  label:"Amas Galact.",   desc:"Milliers de galaxies liées par gravité." },
  "Toile Cosmique": { emoji:"🕸️", cat:"cosmic",  label:"Toile Cosm.",    desc:"Filaments, murs et vides. Grande structure." },
  "Fond Diffus":    { emoji:"🌡️", cat:"cosmic",  label:"CMB",            desc:"Fond diffus cosmologique. Écho du Big Bang. 380 000 ans." },
  "Matière Noire":  { emoji:"👁️", cat:"cosmic",  label:"Mat. Noire",     desc:"27% de l'univers. Invisible. Colle les galaxies." },
  "Énergie Sombre": { emoji:"🌀", cat:"cosmic",  label:"Én. Sombre",     desc:"68% de l'univers. Accélère l'expansion. Λ." },
  "Univers":        { emoji:"🌌", cat:"cosmic",  label:"Univers",        desc:"TOUT. 13.8 Ga. 2 trillions de galaxies." },
  "Vie":            { emoji:"🌱", cat:"cosmic",  label:"Vie",            desc:"LUCA il y a 3.8 Ga. Chimie du carbone + eau." },
  "Intelligence":   { emoji:"🧠", cat:"cosmic",  label:"Intelligence",   desc:"L'univers qui s'observe lui-même. Homo sapiens." },
};

// ============================================================
// PAIRES ANTIMATIÈRE
// ============================================================
const ANTIMATTER_PAIRS = {
  "Positron":    "Électron",
  "Antiproton":  "Proton",
};

// ============================================================
// RECETTES 2 INGRÉDIENTS
// ============================================================
const RECIPES_2 = [

  // Quarks → mésons
  { a:"Quark Up",    b:"Quark Down",    r:"Pion0",       eq:"u + d̄ → π⁰",             info:"Méson léger. Se désintègre en 2 photons en 10⁻¹⁷s." },
  { a:"Quark Up",    b:"Quark Up",      r:"Pion+",       eq:"u + ū → π⁺",             info:"Méson chargé. Médiateur force forte résiduelle." },
  { a:"Quark Up",    b:"Quark Strange", r:"Kaon",        eq:"u + s̄ → K+",             info:"Méson étrange. Violation CP découverte 1964." },
  { a:"Quark Down",  b:"Quark Strange", r:"Eta",         eq:"d + s̄ → η",              info:"Méson pseudoscalaire. Symétrie SU(3)." },
  { a:"Quark Charm", b:"Quark Charm",   r:"Charmonium",  eq:"c + c̄ → J/ψ",            info:"Révolution de novembre 1974. Prix Nobel 1976." },
  { a:"Quark Bottom",b:"Quark Bottom",  r:"Upsilon",     eq:"b + b̄ → Υ",              info:"Découvert 1977. Confirmation quark b." },
  { a:"Quark Charm", b:"Quark Down",    r:"Méson D",     eq:"c + d̄ → D+",             info:"Contient quark charme." },
  { a:"Quark Bottom",b:"Quark Up",      r:"Méson B",     eq:"b + ū → B−",             info:"Violation CP majeure. Usines à B." },
  { a:"Gluon",       b:"Gluon",         r:"Glueball",    eq:"g + g → glueball",       info:"État lié de gluons purs. Hypothétique." },

  // Mésons → baryons
  { a:"Pion+",       b:"Pion0",         r:"Delta",       eq:"π⁺ + π⁰ → Δ++",          info:"Résonance baryonique. τ ≈ 5×10⁻²⁴s." },
  { a:"Kaon",        b:"Pion0",         r:"Lambda",      eq:"K + π → Λ",              info:"Baryon étrange le plus léger." },
  { a:"Kaon",        b:"Pion+",         r:"Sigma",       eq:"K + π+ → Σ",             info:"Baryon étrange. Triplet d'isospin." },
  { a:"Kaon",        b:"Kaon",          r:"Oméga",       eq:"K + K → Ω−",             info:"Baryon sss. Prédit par Gell-Mann 1961!" },

  // Bosons faibles
  { a:"Photon",      b:"Électron",      r:"Muon",        eq:"γ + e⁻ → μ",             info:"Le muon est un électron lourd. Rayons cosmiques." },
  { a:"Boson W",     b:"Neutrino",      r:"Électron",    eq:"W⁻ → e⁻ + ν̄",           info:"Désintégration W. Force faible." },
  { a:"Quark Up",    b:"Boson Z",       r:"Boson Higgs", eq:"gg → ZH",               info:"Production de Higgs associée. LHC 2012." },

  // Nucléosynthèse primordiale
  { a:"Proton",      b:"Électron",      r:"Hydrogène",   eq:"p + e⁻ → H",            info:"Recombinaison. 380 000 ans post-Big Bang." },
  { a:"Proton",      b:"Proton",        r:"Deutéron",    eq:"p + p → ²H + e⁺ + ν",   info:"Chaîne pp. Cœur du Soleil. τ = 10⁹ ans." },
  { a:"Proton",      b:"Neutron",       r:"Deutéron",    eq:"p + n → ²H + γ",         info:"3 premières minutes du Big Bang." },
  { a:"Deutéron",    b:"Proton",        r:"Noyau He-3",  eq:"²H + p → ³He + γ",       info:"Chaîne pp étape 2." },
  { a:"Deutéron",    b:"Neutron",       r:"Triton",      eq:"²H + n → ³H + γ",        info:"Tritium. Radioactif. Bombe H." },
  { a:"Deutéron",    b:"Deutéron",      r:"Noyau He-4",  eq:"²H + ²H → ⁴He + γ",     info:"Fusion D-D. Recherche ITER." },
  { a:"Noyau He-3",  b:"Noyau He-3",   r:"Noyau He-4",  eq:"³He+³He → ⁴He + 2p",    info:"Étape finale chaîne pp." },
  { a:"Noyau He-4",  b:"Noyau He-4",   r:"Noyau Be-8",  eq:"α + α → ⁸Be",            info:"Instable. Pont vers C-12." },
  { a:"Noyau Be-8",  b:"Noyau He-4",   r:"Noyau C-12",  eq:"⁸Be + α → ¹²C + γ",     info:"Triple-alpha de Salpeter. Étoiles géantes!" },
  { a:"Noyau C-12",  b:"Noyau He-4",   r:"Noyau O-16",  eq:"¹²C + α → ¹⁶O + γ",     info:"Réaction fondatrice de l'abondance d'oxygène." },
  { a:"Noyau O-16",  b:"Noyau He-4",   r:"Noyau Ne-20", eq:"¹⁶O + α → ²⁰Ne + γ",    info:"Fusion alpha stellaire." },
  { a:"Noyau Ne-20", b:"Noyau He-4",   r:"Noyau Mg-24", eq:"²⁰Ne + α → ²⁴Mg + γ",   info:"Combustion néon stellaire." },
  { a:"Noyau Mg-24", b:"Noyau He-4",   r:"Noyau Si-28", eq:"²⁴Mg + α → ²⁸Si + γ",   info:"Combustion magnésium." },
  { a:"Noyau Si-28", b:"Noyau He-4",   r:"Noyau S-32",  eq:"²⁸Si + α → ³²S + γ",    info:"Fusion silicium avancée." },
  { a:"Noyau S-32",  b:"Noyau He-4",   r:"Noyau Ar-40", eq:"³²S + α → ³⁶Ar... ⁴⁰Ar",info:"Processus alpha vers argon." },
  { a:"Noyau Ar-40", b:"Noyau He-4",   r:"Noyau Ca-40", eq:"⁴⁰Ar + α → ⁴⁰Ca",       info:"Calcium par capture alpha." },
  { a:"Noyau Ca-40", b:"Noyau He-4",   r:"Noyau Fe-56", eq:"Ca → ... → ⁵⁶Fe",        info:"Dernières captures alpha. Fin de la fusion." },
  { a:"Noyau C-12",  b:"Noyau C-12",   r:"Noyau Mg-24", eq:"¹²C + ¹²C → ²⁴Mg + γ",  info:"Combustion carbone. Étoiles >8M☉." },
  { a:"Noyau O-16",  b:"Noyau O-16",   r:"Noyau Si-28", eq:"¹⁶O + ¹⁶O → ²⁸Si + ⁴He",info:"Combustion oxygène. T>10⁹K." },

  // Noyaux → atomes (recombinaison)
  { a:"Noyau He-4",  b:"Électron",      r:"Hélium",      eq:"⁴He²⁺ + 2e⁻ → He",      info:"Recombinaison 380 000 ans post-Big Bang." },
  { a:"Noyau Li-7",  b:"Électron",      r:"Lithium",     eq:"⁷Li + 3e⁻ → Li",        info:"Nucléosynthèse primordiale." },
  { a:"Noyau Be-9",  b:"Électron",      r:"Béryllium",   eq:"⁹Be + 4e⁻ → Be",        info:"Formé par spallation des rayons cosmiques." },
  { a:"Noyau B-11",  b:"Électron",      r:"Bore",        eq:"¹¹B + 5e⁻ → B",         info:"Bore par spallation. Pas produit en étoiles." },
  { a:"Noyau C-12",  b:"Électron",      r:"Carbone",     eq:"¹²C + 6e⁻ → C",         info:"Carbone. Base de la chimie du vivant." },
  { a:"Noyau N-14",  b:"Électron",      r:"Azote",       eq:"¹⁴N + 7e⁻ → N",         info:"Cycle CNO stellaire." },
  { a:"Noyau O-16",  b:"Électron",      r:"Oxygène",     eq:"¹⁶O + 8e⁻ → O",         info:"Troisième plus abondant dans l'univers." },
  { a:"Noyau Ne-20", b:"Électron",      r:"Néon",        eq:"²⁰Ne + 10e⁻ → Ne",      info:"Gaz noble. Produit stellaire." },
  { a:"Noyau Na-23", b:"Électron",      r:"Sodium",      eq:"²³Na + 11e⁻ → Na",      info:"Forgé dans les étoiles massives." },
  { a:"Noyau Mg-24", b:"Électron",      r:"Magnésium",   eq:"²⁴Mg + 12e⁻ → Mg",     info:"Abondant dans les météorites." },
  { a:"Noyau Al-27", b:"Électron",      r:"Aluminium",   eq:"²⁷Al + 13e⁻ → Al",     info:"Le plus abondant de la croûte terrestre." },
  { a:"Noyau Si-28", b:"Électron",      r:"Silicium",    eq:"²⁸Si + 14e⁻ → Si",     info:"Sable et semi-conducteurs." },
  { a:"Noyau P-31",  b:"Électron",      r:"Phosphore",   eq:"³¹P + 15e⁻ → P",       info:"ADN et ATP. Vital à la vie." },
  { a:"Noyau S-32",  b:"Électron",      r:"Soufre",      eq:"³²S + 16e⁻ → S",       info:"Volcans. Acides aminés soufrés." },
  { a:"Noyau Cl-35", b:"Électron",      r:"Chlore",      eq:"³⁵Cl + 17e⁻ → Cl",     info:"Halogène. Sel et désinfection." },
  { a:"Noyau Ar-40", b:"Électron",      r:"Argon",       eq:"⁴⁰Ar + 18e⁻ → Ar",     info:"1% de l'atmosphère." },
  { a:"Noyau K-39",  b:"Électron",      r:"Potassium",   eq:"³⁹K + 19e⁻ → K",       info:"Essentiel aux nerfs et muscles." },
  { a:"Noyau Ca-40", b:"Électron",      r:"Calcium",     eq:"⁴⁰Ca + 20e⁻ → Ca",     info:"Os, dents, contractions musculaires." },

  // Processus s et r → éléments lourds
  { a:"Noyau Fe-56", b:"Neutron",       r:"Noyau Cu-63", eq:"⁵⁶Fe +7n → ⁶³Cu",      info:"Processus s dans les étoiles AGB." },
  { a:"Noyau Cu-63", b:"Neutron",       r:"Noyau Zn-64", eq:"⁶³Cu + n → ⁶⁴Zn",      info:"Zinc stellaire. Processus s." },
  { a:"Noyau Zn-64", b:"Neutron",       r:"Noyau Ag-107",eq:"Zn + ns → ¹⁰⁷Ag",      info:"Captures multiples. Argent." },
  { a:"Noyau Ag-107",b:"Neutron",       r:"Noyau Au-197",eq:"Ag + ns → ¹⁹⁷Au",      info:"r-process / s-process vers l'or." },
  { a:"Noyau Au-197",b:"Neutron",       r:"Noyau Pb-208",eq:"Au + ns → ²⁰⁸Pb",      info:"Plomb-208. Noyau doublement magique." },
  { a:"Noyau Pb-208",b:"Neutron",       r:"Noyau U-238", eq:"Pb + ns → ²³⁸U",       info:"r-process. Uranium forgé en kilonova." },
  { a:"Noyau Ni-62", b:"Neutron",       r:"Noyau Fe-56", eq:"⁶²Ni → ⁵⁶Fe énergie",  info:"Pic de stabilité. Maximum énergie de liaison." },

  // Noyaux lourds → atomes lourds
  { a:"Noyau Fe-56", b:"Électron",      r:"Fer",         eq:"⁵⁶Fe + 26e⁻ → Fe",     info:"Fin de la fusion stellaire. Hémoglobine." },
  { a:"Noyau Cu-63", b:"Électron",      r:"Cuivre",      eq:"⁶³Cu + 29e⁻ → Cu",     info:"Premier métal utilisé par l'Homme." },
  { a:"Noyau Zn-64", b:"Électron",      r:"Zinc",        eq:"⁶⁴Zn + 30e⁻ → Zn",     info:"Enzymatique. Galvanisation." },
  { a:"Noyau Ag-107",b:"Électron",      r:"Argent",      eq:"¹⁰⁷Ag + 47e⁻ → Ag",    info:"Meilleur conducteur électrique." },
  { a:"Noyau Au-197",b:"Électron",      r:"Or",          eq:"¹⁹⁷Au + 79e⁻ → Au",    info:"Forgé dans les kilonovae. GW170817!" },
  { a:"Noyau Pb-208",b:"Électron",      r:"Plomb",       eq:"²⁰⁸Pb + 82e⁻ → Pb",    info:"Dernier élément stable." },
  { a:"Noyau U-238", b:"Électron",      r:"Uranium",     eq:"²³⁸U + 92e⁻ → U",      info:"Fission nucléaire. Énergie atomique." },

  // Atomes manquants via voies spéciales
  { a:"Néon",        b:"Proton",        r:"Fluor",       eq:"²⁰Ne + p → ¹⁹F + 2p",   info:"Fluor. Le plus rare des éléments légers. AGB stars." },
  { a:"Silicium",    b:"Neutron",       r:"Titane",      eq:"Si + ns → Ti",           info:"Titane via fusion Si avancée." },
  { a:"Titane",      b:"Neutron",       r:"Chrome",      eq:"Ti + ns → Cr",           info:"Chrome. Acier inoxydable." },
  { a:"Chrome",      b:"Neutron",       r:"Manganèse",   eq:"Cr + n → Mn",            info:"Manganèse. Processus s." },
  { a:"Manganèse",   b:"Neutron",       r:"Cobalt",      eq:"Mn + ns → Co",           info:"Cobalt. Vitamine B12." },
  { a:"Cobalt",      b:"Électron",      r:"Nickel",      eq:"⁵⁸Co → ⁵⁸Ni + e⁺",      info:"Désintégration β+. Nickel produit en SN." },
  { a:"Or",          b:"Proton",        r:"Mercure",     eq:"¹⁹⁷Au + p → ¹⁹⁸Hg",     info:"Transmutation. L'alchimie réalisée!" },
  { a:"Or",          b:"Neutron",       r:"Platine",     eq:"r-process → Pt",         info:"Platine. Kilonova GW170817." },
  { a:"Plomb",       b:"Électron",      r:"Bismuth",     eq:"²⁰⁹Bi + 83e⁻ → Bi",     info:"Quasi-stable. τ½=2×10¹⁹ ans." },
  { a:"Uranium",     b:"Neutron",       r:"Plutonium",   eq:"²³⁸U + n → ²³⁹Pu",      info:"Réacteur nucléaire. Transmutation." },
  { a:"Silicium",    b:"Argon",         r:"Krypton",     eq:"process s → Kr",         info:"Krypton. Étalon du mètre (1960)." },
  { a:"Soufre",      b:"Chlore",        r:"Brome",       eq:"process s → Br",         info:"Seul métalloïde liquide ambiant." },
  { a:"Silicium",    b:"Phosphore",     r:"Sélénium",    eq:"process s → Se",         info:"Antioxydant. Semi-conducteur." },
  { a:"Carbone",     b:"Azote",         r:"Germanium",   eq:"voie CNO → Ge",          info:"Prédit par Mendeleïev avant découverte!" },
  { a:"Argent",      b:"Neutron",       r:"Étain",       eq:"Ag + ns → Sn",           info:"Étain. 10 isotopes stables." },
  { a:"Oxygène",     b:"Chlore",        r:"Iode",        eq:"process s → I",          info:"Iode. Thyroïde. Étoiles AGB." },
  { a:"Iode",        b:"Neutron",       r:"Xénon",       eq:"I + β⁻ → Xe",            info:"Xénon. Propulsion ionique." },
  { a:"Xénon",       b:"Neutron",       r:"Baryum",      eq:"Xe + n → Ba",            info:"Baryum. Feux d'artifice verts." },
  { a:"Baryum",      b:"Neutron",       r:"Tungstène",   eq:"Ba + ns → W",            info:"Tungstène. Fusion la plus haute : 3422°C." },

  // Molécules simples
  { a:"Hydrogène",   b:"Hydrogène",     r:"H₂",          eq:"H + H → H₂",            info:"La molécule la plus abondante de l'univers." },
  { a:"Oxygène",     b:"Oxygène",       r:"O₂",          eq:"O + O → O₂",            info:"Produit par la photosynthèse." },
  { a:"Azote",       b:"Azote",         r:"N₂",          eq:"N + N → N₂",            info:"Triple liaison N≡N très stable." },
  { a:"Chlore",      b:"Chlore",        r:"Cl₂",         eq:"Cl + Cl → Cl₂",         info:"Dichlore. Gaz toxique." },
  { a:"Oxygène",     b:"Oxygène",       r:"Ozone",       eq:"O₂ + O → O₃",          info:"UV solaire crée l'ozone stratosphérique." },
  { a:"Hydrogène",   b:"Oxygène",       r:"Eau",         eq:"2H₂ + O₂ → 2H₂O",      info:"Solvant universel. Anomalie densité à 4°C." },
  { a:"Hydrogène",   b:"Soufre",        r:"H₂S",         eq:"H₂ + S → H₂S",         info:"Sources hydrothermales. Origine de la vie?" },
  { a:"Carbone",     b:"Oxygène",       r:"CO₂",         eq:"C + O₂ → CO₂",          info:"Photosynthèse et effet de serre." },
  { a:"Carbone",     b:"Oxygène",       r:"CO",          eq:"2C + O₂ → 2CO",         info:"Monoxyde. Combustion incomplète. Toxique." },
  { a:"Carbone",     b:"Hydrogène",     r:"Méthane",     eq:"C + 2H₂ → CH₄",        info:"Gaz naturel. Atmosphère de Titan." },
  { a:"Méthane",     b:"Hydrogène",     r:"Éthane",      eq:"CH₄ → C₂H₆",           info:"Deuxième alcane." },
  { a:"Azote",       b:"Hydrogène",     r:"Ammoniac",    eq:"N₂ + 3H₂ → 2NH₃",      info:"Haber-Bosch 1909. Révolution agricole." },
  { a:"Hydrogène",   b:"Chlore",        r:"Acide Chlorhydrique",eq:"H₂ + Cl₂ → 2HCl",info:"Acide fort. pH gastrique ~1.5." },
  { a:"Soufre",      b:"Oxygène",       r:"Acide Sulfurique",eq:"S + H₂O → H₂SO₄",  info:"Acide industriel le plus produit (200 Mt/an)." },
  { a:"Sodium",      b:"Chlore",        r:"NaCl",        eq:"2Na + Cl₂ → 2NaCl",     info:"Sel de table. Premier antibactérien." },
  { a:"Silicium",    b:"Oxygène",       r:"SiO₂",        eq:"Si + O₂ → SiO₂",        info:"Quartz. Sable. 60% de la croûte." },
  { a:"Carbone",     b:"Carbone",       r:"Graphène",    eq:"C → graphène 2D",       info:"Nobel 2010. Plus résistant que l'acier." },
  { a:"Graphène",    b:"Carbone",       r:"Graphite",    eq:"graphène × n → graphite",info:"Empilement de couches. Crayon." },
  { a:"Graphène",    b:"Graphène",      r:"Diamant",     eq:"C (haute P,T) → diamant",info:"Tétraédrique. Dureté Mohs 10." },
  { a:"Carbone",     b:"Carbone",       r:"Fullerène",   eq:"C → C₆₀",               info:"Buckminsterfullerène. Nobel 1996." },
  { a:"Eau",         b:"Glace",         r:"Glace",       eq:"H₂O → H₂O (s)",        info:"Cristaux hexagonaux. Moins dense que l'eau." },
  { a:"Hydrogène",   b:"Hydrogène",     r:"Eau Lourde",  eq:"²H₂ + O → D₂O",        info:"Modérateur de neutrons. Réacteurs CANDU." },
  { a:"Eau",         b:"Oxygène",       r:"Peroxyde H",  eq:"H₂O + ½O₂ → H₂O₂",    info:"Eau oxygénée. Propulseur spatial." },

  // Molécules du vivant
  { a:"CO₂",         b:"Eau",           r:"Glucose",     eq:"6CO₂+6H₂O+hν→C₆H₁₂O₆",info:"Photosynthèse. La réaction fondatrice du vivant!" },
  { a:"Méthane",     b:"Oxygène",       r:"Éthanol",     eq:"fermentation → C₂H₅OH", info:"Fermentation alcoolique. Levures. 10 000 ans." },
  { a:"Azote",       b:"Glucose",       r:"Acide Aminé", eq:"N + C₆ → aa",           info:"20 acides aminés. Code universel de la vie." },
  { a:"Acide Aminé", b:"Acide Aminé",   r:"Protéine",    eq:"aa + aa → peptide",     info:"Liaison peptidique. Enzymes, collagène, kératine." },
  { a:"Carbone",     b:"Hydrogène",     r:"Lipide",      eq:"CₙH₂ₙ → lipide",        info:"Acides gras. Membranes cellulaires." },
  { a:"Glucose",     b:"Phosphore",     r:"ARN",         eq:"sucre + P + bases → ARN",info:"ARN messager. Du gène à la protéine." },
  { a:"ARN",         b:"Protéine",      r:"ADN",         eq:"ARN → ADN",             info:"Double hélice. Watson & Crick 1953." },

  // Phases
  { a:"H₂",          b:"H₂",            r:"Plasma",      eq:"H₂ → H⁺ + e⁻ (T>10⁴K)",info:"Ionisation. Intérieur des étoiles." },
  { a:"Hélium",      b:"Hélium",         r:"Condensat BEC",eq:"He → BEC (T<2.17K)",  info:"Superfluide. Bose-Einstein. Nobel 2001." },
  { a:"Eau",         b:"Glace",          r:"Liquide",     eq:"H₂O phases → liquide", info:"État liquide. Condition de vie." },
  { a:"Gaz",         b:"Plasma",         r:"Plasma QGP",  eq:"E extrême → QGP",      info:"Soupe primordiale 10⁻⁶s post-Big Bang." },
  { a:"Matière Dégénérée",b:"Neutron",  r:"Étoile à Neutrons",eq:"dégéner. → n star",info:"Densité nucléaire. Masse Soleil. Rayon = ville." },

  // Stellaire
  { a:"Gaz",         b:"Poussière",      r:"Nébuleuse",   eq:"gaz + poussière → nuage",info:"Nuage interstellaire. Nurserie d'étoiles." },
  { a:"Nébuleuse",   b:"Plasma",         r:"Proto-étoile",eq:"contraction Jeans",     info:"Effondrement gravitationnel." },
  { a:"Proto-étoile",b:"Plasma",         r:"Étoile T Tauri",eq:"proto-étoile → T Tauri",info:"Jeune étoile variable." },
  { a:"Étoile T Tauri",b:"H₂",           r:"Étoile",      eq:"T Tauri → séquence principale",info:"Fusion H déclenchée!" },
  { a:"Étoile",      b:"Étoile",         r:"Naine Rouge", eq:"M < 0.4M☉ → naine rouge",info:"80% des étoiles. Vie > 10¹² ans." },
  { a:"Étoile",      b:"Naine Rouge",    r:"Naine Jaune", eq:"0.8-1.2M☉ → G star",   info:"Notre Soleil. G2V. 10 Ga de vie." },
  { a:"Naine Jaune", b:"Noyau He-4",     r:"Géante Rouge",eq:"H épuisé → gonflement", info:"Dans ~5 Ga. Le Soleil englobera Vénus." },
  { a:"Géante Rouge",b:"Nébuleuse",      r:"Naine Blanche",eq:"→ nébuleuse planétaire + NB",info:"Résidu C/O. Matière dégénérée d'électrons." },
  { a:"Naine Blanche",b:"Naine Blanche", r:"Naine Noire",  eq:"NB refroidissement → NN",info:"Aucune n'existe. Univers trop jeune." },
  { a:"Naine Blanche",b:"Étoile",        r:"Supernova Ia", eq:"NB + compagnon → SN Ia",info:"Limite de Chandrasekhar 1.44M☉." },
  { a:"Étoile",      b:"Géante Rouge",   r:"Géante Bleue", eq:"B star massive",       info:"Étoile O/B. T>20 000K." },
  { a:"Géante Bleue",b:"Géante Rouge",   r:"Supergéante",  eq:">8M☉ → supergéante",  info:"Bételgeuse, Rigel. Vie < 10 Ma." },
  { a:"Supergéante", b:"Noyau Fe-56",    r:"Supernova II", eq:"cœur Fe → effondrement",info:"Effondrement en <1s. Forge éléments lourds." },
  { a:"Supernova II",b:"Nébuleuse",      r:"Rémanent SN",  eq:"éjecta → nébuleuse",   info:"Nébuleuse du Crabe. Pulsar au centre." },
  { a:"Supernova II",b:"Neutron",        r:"Étoile à Neutrons",eq:"cœur → étoile à n.",info:"10km. Densité nucléaire." },
  { a:"Étoile à Neutrons",b:"Plasma",    r:"Pulsar",       eq:"rotation → faisceau radio",info:"Phare cosmique. Horloge atomique." },
  { a:"Pulsar",      b:"Magnétar",       r:"Magnétar",     eq:"B > 10¹⁵ G",           info:"Champ le plus fort de l'univers connu." },
  { a:"Étoile à Neutrons",b:"Étoile à Neutrons",r:"Kilonova",eq:"BNS merger → kilonova",info:"GW170817 (2017). Or, platine, uranium!" },
  { a:"Kilonova",    b:"Onde Gravit.",   r:"Sursaut Gamma",eq:"BNS → GRB court",      info:"2s = énergie du Soleil en 10 milliards d'années." },
  { a:"Supernova II",b:"Supernova II",   r:"Trou Noir Stellaire",eq:"M>25M☉ → TN",   info:"Effondrement direct. Singularité." },
  { a:"Trou Noir Stellaire",b:"Étoile à Neutrons",r:"Trou Noir Sup.",eq:"fusions → SMBH",info:"Croissance hiérarchique." },
  { a:"Trou Noir Sup.",b:"Plasma",       r:"Quasar",       eq:"SMBH actif → quasar",  info:"Disque d'accrétion. Lumineux dans l'univers jeune." },
  { a:"Trou Noir Stellaire",b:"Trou Noir Stellaire",r:"Onde Gravit.",eq:"BH+BH → GW",info:"GW150914. Premier signal LIGO, 14 sept. 2015." },
  { a:"Étoile à Neutrons",b:"Étoile à Neutrons",r:"Onde Gravit.",eq:"BNS → GW+EM",   info:"GW170817. Premier multi-messager." },

  // Cosmique
  { a:"Poussière",   b:"Glace",          r:"Glace Spatiale",eq:"grain + glace → manteau",info:"Manteaux de glace interstellaire." },
  { a:"Poussière",   b:"Poussière",      r:"Astéroïde",   eq:"accrétion → planétésimal",info:"Premiers corps solides du système solaire." },
  { a:"Glace Spatiale",b:"Poussière",    r:"Comète",      eq:"glace + roche → noyau",  info:"Noyau ~10km. Queue sur des millions de km." },
  { a:"Astéroïde",   b:"Comète",         r:"Météorite",   eq:"impact → météorite",     info:"Fragment extraterrestre. Rosetta, Philae." },
  { a:"Étoile",      b:"Poussière",      r:"Disque Proto.",eq:"étoile + nébuleuse → disque",info:"ALMA révèle ces disques en détail." },
  { a:"Disque Proto.",b:"Astéroïde",     r:"Planète Rocheuse",eq:"accrétion 10⁸ ans", info:"Mercure, Vénus, Terre, Mars." },
  { a:"Planète Rocheuse",b:"H₂",         r:"Planète Gazeuse",eq:"accrétion gaz → géante",info:"Jupiter, Saturne. 318 M⊕." },
  { a:"Planète Gazeuse",b:"Glace Spatiale",r:"Planète Glacée",eq:"glace supercritique",info:"Uranus, Neptune. Manteau de glace ionique." },
  { a:"Planète Rocheuse",b:"Eau",         r:"Planète Tellurique",eq:"eau + atmosphère",info:"Zone habitable. Conditions terrestres." },
  { a:"Planète Tellurique",b:"Océan",     r:"Planète Océan",eq:"eau recouvre tout",   info:"Exoplanètes comme GJ 1214b." },
  { a:"Planète Rocheuse",b:"Planète Rocheuse",r:"Lune",   eq:"Giant Impact 4.5 Ga",  info:"Théia percute la proto-Terre." },
  { a:"Planète Gazeuse",b:"Poussière",    r:"Anneau",     eq:"limite de Roche",       info:"Satellite déchiré par marées de Roche." },
  { a:"Comète",      b:"Planète Rocheuse",r:"Océan",      eq:"livraison eau comètes",  info:"Eau terrestre? Analysée par Rosetta." },
  { a:"Planète Rocheuse",b:"Azote",       r:"Atmosphère", eq:"dégazage volcanique",   info:"N₂+CO₂+H₂O. Atmosphère primitive." },
  { a:"Atmosphère",  b:"O₂",             r:"Ozone",       eq:"atm + UV → O₃",         info:"Bouclier UV. Permis la vie terrestre." },
  { a:"Étoile",      b:"Planète Rocheuse",r:"Système Sol.",eq:"étoile + disque planét.",info:"100 Ma d'accrétion. 4.6 Ga." },
  { a:"Système Sol.",b:"Système Sol.",    r:"Galaxie",    eq:"milliards d'étoiles",    info:"Voie Lactée. 200 Gd étoiles. 100 000 al." },
  { a:"Galaxie",     b:"Galaxie Naine",  r:"Galaxie",    eq:"fusion cannibale",       info:"La VL dévore le Nain du Sagittaire." },
  { a:"Galaxie",     b:"Matière Noire",  r:"Amas Galact.",eq:"halo + galaxies",        info:"La matière noire lie les galaxies en amas." },
  { a:"Amas Galact.",b:"Amas Galact.",   r:"Toile Cosmique",eq:"filaments + superamas",info:"Grande structure de l'univers." },
  { a:"Plasma",      b:"Photon",          r:"Fond Diffus", eq:"recombinaison → CMB",  info:"380 000 ans. T=3000K → 2.7K aujourd'hui." },
  { a:"Toile Cosmique",b:"Énergie Sombre",r:"Univers",   eq:"tout + Λ → expansion",  info:"13.8 Ga. 2 trillions de galaxies. En expansion." },
  { a:"Trou Noir Sup.",b:"Matière Noire",r:"Énergie Sombre",eq:"vide quantique et Λ", info:"Lien mystérieux entre vide quantique et constante Λ." },

  // Vie
  { a:"Océan",       b:"ARN",            r:"Vie",         eq:"sources hydrothermales → LUCA",info:"Monde ARN. Vésicule protocellulaire. 3.8 Ga." },
  { a:"ADN",         b:"Protéine",       r:"Vie",         eq:"ADN + enzymes → cellule",info:"Information + catalyse = vie." },
  { a:"Vie",         b:"CO₂",            r:"O₂",          eq:"photosynthèse → O₂",    info:"Cyanobactéries. Grande Oxydation 2.4 Ga." },
  { a:"Vie",         b:"Vie",            r:"Intelligence",eq:"évolution → cerveau",   info:"Sélection naturelle. Darwin 1859." },
  { a:"Intelligence",b:"Univers",        r:"Univers",     eq:"conscience cosmique",   info:"L'univers se comprend lui-même." },
];

// ============================================================
// RECETTES 3 INGRÉDIENTS
// ============================================================
const RECIPES_3 = [
  // Quarks → baryons
  { a:"Quark Up",  b:"Quark Up",  c:"Quark Down",       r:"Proton",    eq:"uud → proton",      info:"2 Up + 1 Down. Charge +1. Stable indéfiniment." },
  { a:"Quark Up",  b:"Quark Down",c:"Quark Down",       r:"Neutron",   eq:"udd → neutron",     info:"1 Up + 2 Down. Neutre. τ libre ≈ 880s." },
  { a:"Quark Strange",b:"Quark Strange",c:"Quark Strange",r:"Oméga",   eq:"sss → Ω−",          info:"Prédit par Gell-Mann 1961. Découvert 1964. Nobel!" },
  { a:"Quark Up",  b:"Quark Down",c:"Quark Strange",    r:"Lambda",    eq:"uds → Λ",            info:"Baryon étrange. Découvert 1947." },
  { a:"Quark Up",  b:"Quark Up",  c:"Quark Strange",    r:"Sigma",     eq:"uus → Σ+",           info:"Baryon étrange. SU(3)." },
  { a:"Quark Up",  b:"Quark Up",  c:"Quark Up",         r:"Delta",     eq:"uuu → Δ++",          info:"Résonance baryonique. τ = 5×10⁻²⁴s." },
  // Fusion nucléaire
  { a:"Noyau He-4",b:"Noyau He-4",c:"Noyau He-4",      r:"Noyau C-12",eq:"3α → ¹²C",          info:"Réaction triple-alpha de Salpeter. Forgé dans les géantes!" },
  { a:"Proton",    b:"Proton",    c:"Neutron",          r:"Noyau He-3",eq:"2p+n → ³He",         info:"He-3. Isotope rare. Fusion thermonucléaire." },
  { a:"Proton",    b:"Neutron",   c:"Neutron",          r:"Triton",    eq:"p+2n → ³H",          info:"Tritium. Radioactif β⁻." },
  { a:"Noyau Li-6",b:"Deutéron", c:"Neutron",          r:"Noyau Li-7",eq:"⁶Li+n → ⁷Li",        info:"Li-7 dominant. Nucléosynthèse primordiale." },
  // Molécules
  { a:"Hydrogène", b:"Hydrogène", c:"Oxygène",          r:"Eau",       eq:"2H + O → H₂O",      info:"Eau. La molécule de la vie." },
  { a:"Carbone",   b:"Hydrogène", c:"Hydrogène",        r:"Méthane",   eq:"C + 2H₂ → CH₄",     info:"Méthane. Atmosphère primitive et Titan." },
  { a:"CO₂",       b:"Eau",       c:"Photon",           r:"Glucose",   eq:"CO₂+H₂O+hν → C₆",  info:"Photosynthèse. Équation de la vie." },
  { a:"Acide Aminé",b:"Acide Aminé",c:"Acide Aminé",   r:"Protéine",  eq:"3aa → protéine",     info:"Chaîne peptidique minimale." },
  { a:"ARN",       b:"Lipide",    c:"Eau",              r:"Vie",       eq:"ARN+membrane+eau → LUCA",info:"Monde ARN. Vésicule protocellulaire." },
  // Stellaire
  { a:"Étoile à Neutrons",b:"Étoile à Neutrons",c:"Trou Noir Stellaire",r:"Kilonova",eq:"BNS+BH → kilonova",info:"Fusion extrême. GRB court + kilonova." },
  { a:"Gaz",       b:"Gaz",       c:"Poussière",        r:"Nébuleuse", eq:"2gaz + poussière",   info:"Nuage moléculaire géant. Masse > 10⁵M☉." },
  // Cosmique
  { a:"Astéroïde", b:"Astéroïde", c:"Astéroïde",        r:"Planète Rocheuse",eq:"3 planétésimaux", info:"Accrétion runaway. 100 Ma." },
  { a:"Planète Rocheuse",b:"Océan",c:"Atmosphère",      r:"Planète Tellurique",eq:"roche+eau+atm",info:"Zone habitable. Conditions terrestres." },
];

// ============================================================
// BUILD LOOKUP MAPS
// ============================================================
const MAP_2 = {};
RECIPES_2.forEach(rec => {
  const key = [rec.a, rec.b].sort().join("|||");
  if (!MAP_2[key]) MAP_2[key] = rec;
});

const MAP_3 = {};
RECIPES_3.forEach(rec => {
  const key = [rec.a, rec.b, rec.c].sort().join("|||");
  if (!MAP_3[key]) MAP_3[key] = rec;
});

function findRecipe2(a, b) {
  return MAP_2[[a, b].sort().join("|||")] || null;
}

function findRecipe3(a, b, c) {
  return MAP_3[[a, b, c].sort().join("|||")] || null;
}

function isAntiPair(a, b) {
  return (ANTIMATTER_PAIRS[a] === b) || (ANTIMATTER_PAIRS[b] === a);
}
