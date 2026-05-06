// ============================================================
// CRAFT GAME — DATA + LOGIQUE
// ============================================================

const ELEMENTS = {
  "Quark Up":        { emoji:"🔴", cat:"quark",    label:"Quark ↑",      desc:"Charge +2/3. Fondamental.", starter:true },
  "Quark Down":      { emoji:"🔵", cat:"quark",    label:"Quark ↓",      desc:"Charge −1/3. Fondamental.", starter:true },
  "Quark Strange":   { emoji:"🟣", cat:"quark",    label:"Quark s",      desc:"Saveur étrangeté. 2ème génération.", starter:true },
  "Quark Charm":     { emoji:"💜", cat:"quark",    label:"Quark c",      desc:"Saveur charme. Découvert 1974.", starter:true },
  "Quark Bottom":    { emoji:"⚫", cat:"quark",    label:"Quark b",      desc:"Saveur beauté. Charge −1/3.", starter:true },
  "Quark Top":       { emoji:"🟠", cat:"quark",    label:"Quark t",      desc:"Le plus lourd. 173 GeV/c².", starter:true },
  "Électron":        { emoji:"⚡", cat:"lepton",   label:"Électron",     desc:"Charge −1. 0.511 MeV.", starter:true },
  "Neutrino e":      { emoji:"〰️", cat:"lepton",   label:"Neutrino ν",   desc:"Presque sans masse. Traverse tout.", starter:true },
  "Photon":          { emoji:"💡", cat:"boson",    label:"Photon",       desc:"Quantum de lumière. Masse nulle.", starter:true },
  "Gluon":           { emoji:"🌀", cat:"boson",    label:"Gluon",        desc:"Force forte. 8 couleurs.", starter:true },
  "Roche":           { emoji:"🪨", cat:"cosmic",   label:"Roche",        desc:"Silicates primaires.", starter:true },
  "Proton":          { emoji:"🔵", cat:"hadron",   label:"Proton",       desc:"uud. Charge +1. Stable indéfiniment." },
  "Neutron":         { emoji:"⚪", cat:"hadron",   label:"Neutron",      desc:"udd. Neutre. Libre = instable (10 min)." },
  "Antiproton":      { emoji:"🔴", cat:"hadron",   label:"Antiproton",   desc:"ūūd̄. Antimatière du proton." },
  "Pion+":           { emoji:"🔷", cat:"hadron",   label:"Pion π+",      desc:"ud̄. Médiateur force forte résiduelle." },
  "Pion0":           { emoji:"🔹", cat:"hadron",   label:"Pion π0",      desc:"uū/dd̄. Décroît en 2 photons." },
  "Kaon":            { emoji:"🟡", cat:"hadron",   label:"Kaon K+",      desc:"us̄. Méson étrange. Violation CP." },
  "Oméga":           { emoji:"Ω",  cat:"hadron",   label:"Oméga Ω−",     desc:"sss. Prédit par Gell-Mann avant découverte!" },
  "Méson B":         { emoji:"🟤", cat:"hadron",   label:"Méson B",      desc:"Contient quark b. Violation CP." },
  "Glueball":        { emoji:"🔮", cat:"hadron",   label:"Glueball",     desc:"Boule de gluons purs. Jamais observé clairement." },
  "Noyau He-4":      { emoji:"α",  cat:"nucleus",  label:"Noyau α",      desc:"2p + 2n. Particule alpha. Très stable." },
  "Noyau He-3":      { emoji:"³He",cat:"nucleus",  label:"He-3",         desc:"2p + 1n. Isotope rare de l'hélium." },
  "Deutéron":        { emoji:"²H", cat:"nucleus",  label:"Deutéron",     desc:"1p + 1n. Noyau d'hydrogène lourd." },
  "Triton":          { emoji:"³H", cat:"nucleus",  label:"Triton",       desc:"1p + 2n. Noyau de tritium. β−." },
  "Noyau Be-8":      { emoji:"⁸Be",cat:"nucleus",  label:"Be-8",         desc:"Instable (10⁻¹⁶s). Pivot du triple-alpha." },
  "Noyau C-12":      { emoji:"¹²C",cat:"nucleus",  label:"C-12",         desc:"Triple-alpha complet. Base du vivant." },
  "Noyau O-16":      { emoji:"¹⁶O",cat:"nucleus",  label:"O-16",         desc:"C-12 + alpha. Abondant dans l'Univers." },
  "Noyau Fe-56":     { emoji:"Fe", cat:"nucleus",  label:"Fe-56",        desc:"Énergie de liaison max. Fin de la fusion." },
  "Hydrogène":       { emoji:"H",  cat:"atom",     label:"Hydrogène",    desc:"Z=1. 1p + 1e⁻. 75% de la matière." },
  "Hélium":          { emoji:"He", cat:"atom",     label:"Hélium",       desc:"Z=2. Gaz noble. Produit des étoiles." },
  "Lithium":         { emoji:"Li", cat:"atom",     label:"Lithium",      desc:"Z=3. Né lors du Big Bang." },
  "Carbone":         { emoji:"C",  cat:"atom",     label:"Carbone",      desc:"Z=6. Base de toute chimie du vivant." },
  "Azote":           { emoji:"N",  cat:"atom",     label:"Azote",        desc:"Z=7. 78% de l'atmosphère." },
  "Oxygène":         { emoji:"O",  cat:"atom",     label:"Oxygène",      desc:"Z=8. Troisième élément de l'Univers." },
  "Fer":             { emoji:"Fe", cat:"atom",     label:"Fer",          desc:"Z=26. Fin de la fusion stellaire." },
  "Or":              { emoji:"Au", cat:"atom",     label:"Or",           desc:"Z=79. Forgé dans les kilonovae." },
  "Uranium":         { emoji:"U",  cat:"atom",     label:"Uranium",      desc:"Z=92. R-process. Fission nucléaire." },
  "H₂":              { emoji:"💨", cat:"molecule", label:"H₂",           desc:"Dihydrogène. Carburant des étoiles." },
  "O₂":              { emoji:"🌬️", cat:"molecule", label:"O₂",           desc:"Dioxygène. Respiration." },
  "N₂":              { emoji:"🫧", cat:"molecule", label:"N₂",           desc:"Diazote. 78% de l'atmosphère." },
  "Eau":             { emoji:"💧", cat:"molecule", label:"H₂O",          desc:"Solvant universel. Molécule de la vie." },
  "CO₂":             { emoji:"🌫️", cat:"molecule", label:"CO₂",          desc:"Photosynthèse & effet de serre." },
  "Méthane":         { emoji:"🔥", cat:"molecule", label:"CH₄",          desc:"Premier alcane. Mars & Titan." },
  "Ammoniac":        { emoji:"💭", cat:"molecule", label:"NH₃",          desc:"Haber-Bosch. Révolution agricole." },
  "Graphène":        { emoji:"🕸️", cat:"molecule", label:"Graphène",     desc:"Feuille 2D de C. Nobel 2010." },
  "Diamant":         { emoji:"💎", cat:"molecule", label:"Diamant",      desc:"C cristallin sous pression. Dureté 10." },
  "Eau Lourde":      { emoji:"💧", cat:"molecule", label:"D₂O",          desc:"Eau avec deutérium. Ralentit les neutrons." },
  "Glucose":         { emoji:"🍬", cat:"molecule", label:"C₆H₁₂O₆",     desc:"Photosynthèse. Carburant cellulaire." },
  "Acide Aminé":     { emoji:"🧩", cat:"molecule", label:"Acide aminé",  desc:"20 essentiels. Brique des protéines." },
  "Protéine":        { emoji:"🦠", cat:"molecule", label:"Protéine",     desc:"Polymère d'aa. Enzymes & structure." },
  "Lipide":          { emoji:"🫙", cat:"molecule", label:"Lipide",       desc:"Membranes cellulaires. Stockage." },
  "ADN":             { emoji:"🧬", cat:"molecule", label:"ADN",          desc:"Double hélice. 3 Gpb de bases." },
  "Plasma":          { emoji:"☀️", cat:"phase",    label:"Plasma",       desc:"Matière ionisée. 4ème état." },
  "Gaz":             { emoji:"💨", cat:"phase",    label:"Gaz",          desc:"Atomes libres. Nébuleuses." },
  "Glace":           { emoji:"🧊", cat:"phase",    label:"Glace",        desc:"Eau solide. Cristaux hexagonaux." },
  "Glace Spatiale":  { emoji:"❄️", cat:"phase",    label:"Glace cosm.",  desc:"Eau + CO₂ + CH₄ gelés. Comètes." },
  "Nébuleuse":       { emoji:"🌌", cat:"stellar",  label:"Nébuleuse",    desc:"Nuage de gaz. Nurserie stellaire." },
  "Proto-étoile":    { emoji:"🌟", cat:"stellar",  label:"Proto-étoile", desc:"Contraction gravitationnelle. Avant la fusion." },
  "Étoile":          { emoji:"⭐", cat:"stellar",  label:"Étoile",       desc:"Fusion thermonucléaire. H→He." },
  "Naine Jaune":     { emoji:"🌞", cat:"stellar",  label:"Naine Jaune",  desc:"Notre Soleil. 10 Ga de vie. G2V." },
  "Géante Rouge":    { emoji:"🔴", cat:"stellar",  label:"Géante Rouge", desc:"H épuisé. L'étoile gonfle ×100." },
  "Naine Blanche":   { emoji:"⚪", cat:"stellar",  label:"Naine Blanche",desc:"Résidu. Taille Terre, masse Soleil." },
  "Naine Noire":     { emoji:"⬛", cat:"stellar",  label:"Naine Noire",  desc:"Naine blanche refroidie. Aucune observée." },
  "Supergéante":     { emoji:"🔶", cat:"stellar",  label:"Supergéante",  desc:">8 masses solaires. Destine à exploser." },
  "Supernova":       { emoji:"💥", cat:"stellar",  label:"Supernova",    desc:"Explosion cataclysmique. Forge Fe→U." },
  "Rémanent SN":     { emoji:"🌀", cat:"stellar",  label:"Rémanent SN",  desc:"Nébuleuse du Crabe. Onde de choc." },
  "Étoile à Neutrons":{ emoji:"🎯",cat:"stellar",  label:"Étoile à n.",  desc:"10km. Densité nucléaire. 1 cuill = 10⁹t." },
  "Pulsar":          { emoji:"📡", cat:"stellar",  label:"Pulsar",       desc:"Étoile à n. en rotation. Phare cosmique." },
  "Magnétar":        { emoji:"🧲", cat:"stellar",  label:"Magnétar",     desc:"Champ 10¹⁵ gauss. Plus fort du cosmos." },
  "Kilonova":        { emoji:"💫", cat:"stellar",  label:"Kilonova",     desc:"Fusion de 2 étoiles à n. → or, platine!" },
  "Trou Noir":       { emoji:"🌑", cat:"stellar",  label:"Trou Noir",    desc:"Singularité. Horizon des événements." },
  "Trou Noir Sup.":  { emoji:"🌑", cat:"stellar",  label:"TN Supermassif",desc:"10⁶-10⁹ M☉. Cœur de chaque galaxie." },
  "Quasar":          { emoji:"✨", cat:"stellar",  label:"Quasar",       desc:"TN supermassif actif. + lumineux qu'une galaxie." },
  "Sursaut Gamma":   { emoji:"⚡", cat:"stellar",  label:"Sursaut γ",    desc:"GRB. L'explosion la + puissante." },
  "Onde Gravit.":    { emoji:"〰️", cat:"stellar",  label:"Onde Grav.",   desc:"Ripples de l'espace-temps. LIGO 2015." },
  "Poussière":       { emoji:"🌫️", cat:"cosmic",   label:"Poussière",    desc:"Grains sub-microniques. Disques." },
  "Astéroïde":       { emoji:"☄️", cat:"cosmic",   label:"Astéroïde",    desc:"Corps rocheux. Ceinture principale." },
  "Comète":          { emoji:"🌠", cat:"cosmic",   label:"Comète",       desc:"Boule de glace. Queue lumineuse." },
  "Planète Rocheuse":{ emoji:"🟤", cat:"cosmic",   label:"P. Rocheuse",  desc:"Silicatée. Mercure, Vénus, Terre, Mars." },
  "Planète Gazeuse": { emoji:"🪐", cat:"cosmic",   label:"P. Gazeuse",   desc:"Géante H/He. Jupiter, Saturne." },
  "Planète Glacée":  { emoji:"🔵", cat:"cosmic",   label:"P. Glacée",    desc:"Uranus, Neptune. Glace d'eau sup." },
  "Océan":           { emoji:"🌊", cat:"cosmic",   label:"Océan",        desc:"Eau liquide. Condition d'habitabilité." },
  "Lune":            { emoji:"🌙", cat:"cosmic",   label:"Lune",         desc:"Giant Impact. Théia + proto-Terre." },
  "Anneau":          { emoji:"💍", cat:"cosmic",   label:"Anneau",       desc:"Particules en orbite. Saturne." },
  "Système Sol.":    { emoji:"🌞", cat:"cosmic",   label:"Syst. Sol.",   desc:"Notre Soleil + 8 planètes + ..." },
  "Galaxie":         { emoji:"🌌", cat:"cosmic",   label:"Galaxie",      desc:"200-400 Gd d'étoiles. VL." },
  "Galaxie Naine":   { emoji:"✨", cat:"cosmic",   label:"Galaxie Naine",desc:"Satellite des grandes. Ex: Nuage Magellan." },
  "Amas Galact.":    { emoji:"🌠", cat:"cosmic",   label:"Amas Galact.", desc:"Milliers de galaxies. Mat. noire." },
  "Toile Cosmique":  { emoji:"🕸️", cat:"cosmic",   label:"Toile Cosm.",  desc:"Filaments & vides. Grande structure." },
  "Univers":         { emoji:"🌌", cat:"cosmic",   label:"Univers",      desc:"TOUT. 13.8 Ga. 93 Gal.al. de Ø." },
  "Matière Noire":   { emoji:"👁️", cat:"cosmic",   label:"Mat. Noire",   desc:"27% de l'Univers. Invisible." },
  "Énergie Sombre":  { emoji:"🌀", cat:"cosmic",   label:"Én. Sombre",   desc:"68% de l'Univers. Expansion accélérée." },
  "Vie":             { emoji:"🌱", cat:"cosmic",   label:"Vie",          desc:"LUCA il y a 3.8 Ga. Hydrothermal?" },
  "Intelligence":    { emoji:"🧠", cat:"cosmic",   label:"Intelligence", desc:"L'Univers s'observe lui-même." },
};

const RECIPES = [
  { a:"Quark Up",    b:"Quark Up",      r:"Pion+",             eq:"u + u → π⁺",                        info:"Méson ud̄. Médiateur force forte." },
  { a:"Quark Up",    b:"Quark Down",    r:"Pion0",             eq:"u + d → π⁰",                        info:"Se désintègre en 2 photons. τ = 8.4×10⁻¹⁷ s." },
  { a:"Quark Up",    b:"Quark Strange", r:"Kaon",              eq:"u + s̄ → K+",                        info:"Méson étrange. Découvert 1947." },
  { a:"Quark Strange",b:"Quark Strange",r:"Oméga",             eq:"sss → Ω−",                          info:"Baryon sss. Prédit avant découverte!" },
  { a:"Quark Charm", b:"Quark Strange", r:"Méson B",           eq:"cb̄ → B",                            info:"Contient quark b. Violation CP." },
  { a:"Quark Bottom",b:"Quark Charm",   r:"Méson B",           eq:"bc̄ → B",                            info:"Méson B lourd." },
  { a:"Pion+",       b:"Pion0",         r:"Proton",            eq:"π⁺ + π⁰ → p (uud)",                 info:"Proton = 2 quarks Up + 1 quark Down." },
  { a:"Pion0",       b:"Pion0",         r:"Neutron",           eq:"π⁰ + π⁰ → n (udd)",                 info:"Neutron = 1 quark Up + 2 quarks Down." },
  { a:"Quark Up",    b:"Quark Bottom",  r:"Antiproton",        eq:"ūb → ūūd̄",                         info:"Antimatière. Annihilation avec proton." },
  { a:"Gluon",       b:"Gluon",         r:"Glueball",          eq:"g + g → glueball",                  info:"État lié de gluons purs. Hypothétique." },
  { a:"Photon",      b:"Photon",        r:"Pion0",             eq:"γ + γ → π⁰",                        info:"Création de pions à haute énergie." },
  { a:"Proton",      b:"Neutron",       r:"Deutéron",          eq:"p + n → ²H + γ",                    info:"Noyau d'hydrogène lourd. Base de la fusion." },
  { a:"Proton",      b:"Proton",        r:"Deutéron",          eq:"p + p → ²H + e⁺ + ν",              info:"Chaîne pp. Cœur du Soleil." },
  { a:"Deutéron",    b:"Proton",        r:"Noyau He-3",        eq:"²H + p → ³He + γ",                  info:"Fusion D-p. Étape 2 chaîne pp." },
  { a:"Deutéron",    b:"Neutron",       r:"Triton",            eq:"²H + n → ³H + γ",                   info:"Tritium. Radioactif β⁻." },
  { a:"Deutéron",    b:"Deutéron",      r:"Noyau He-4",        eq:"²H + ²H → ⁴He + γ",                info:"Fusion D-D. Réacteurs de fusion." },
  { a:"Noyau He-3",  b:"Noyau He-3",   r:"Noyau He-4",        eq:"³He + ³He → ⁴He + 2p",             info:"Étape finale chaîne pp. Notre Soleil." },
  { a:"Noyau He-4",  b:"Noyau He-4",   r:"Noyau Be-8",        eq:"⁴He + ⁴He → ⁸Be",                  info:"Instable. 10⁻¹⁶ s. Pont triple-alpha." },
  { a:"Noyau Be-8",  b:"Noyau He-4",   r:"Noyau C-12",        eq:"⁸Be + ⁴He → ¹²C + 2γ",            info:"Triple-alpha! Réaction de Salpeter." },
  { a:"Noyau C-12",  b:"Noyau He-4",   r:"Noyau O-16",        eq:"¹²C + ⁴He → ¹⁶O + γ",             info:"Réaction ¹²C(α,γ)¹⁶O. Dans les géantes." },
  { a:"Noyau O-16",  b:"Noyau O-16",   r:"Noyau Fe-56",       eq:"O+O → ... → ⁵⁶Fe",                 info:"Combustion Si → ⁵⁶Fe. Fin de la fusion." },
  { a:"Noyau He-4",  b:"Électron",     r:"Hélium",            eq:"⁴He²⁺ + 2e⁻ → He",                 info:"Noyau + électrons = atome." },
  { a:"Proton",      b:"Électron",     r:"Hydrogène",         eq:"p + e⁻ → H",                        info:"L'atome le plus simple." },
  { a:"Noyau C-12",  b:"Électron",     r:"Carbone",           eq:"¹²C + 6e⁻ → C",                    info:"Atome de carbone. Base du vivant." },
  { a:"Noyau O-16",  b:"Électron",     r:"Oxygène",           eq:"¹⁶O + 8e⁻ → O",                    info:"Atome d'oxygène. Z=8." },
  { a:"Noyau Fe-56", b:"Électron",     r:"Fer",               eq:"⁵⁶Fe + 26e⁻ → Fe",                 info:"Fer. Énergie de liaison maximale." },
  { a:"Kilonova",    b:"Neutron",      r:"Or",                eq:"r-process → ¹⁹⁷Au",                 info:"Processus r rapide. 100s de neutrons." },
  { a:"Kilonova",    b:"Électron",     r:"Uranium",           eq:"r-process → ²³⁸U",                  info:"Éléments lourds forgés en kilonova." },
  { a:"Hydrogène",   b:"Neutron",      r:"Lithium",           eq:"nucléosynth. primordiale",           info:"3 min après le Big Bang." },
  { a:"Hydrogène",   b:"Hydrogène",    r:"H₂",               eq:"H + H → H₂",                         info:"Liaison covalente. Molécule la + abondante." },
  { a:"Oxygène",     b:"Oxygène",      r:"O₂",               eq:"O + O → O₂",                         info:"Dioxygène. Respiration aérobie." },
  { a:"Azote",       b:"Azote",        r:"N₂",               eq:"N + N → N₂",                         info:"Triple liaison. Très stable. 78% atm." },
  { a:"H₂",          b:"Oxygène",      r:"Eau",              eq:"2H₂ + O₂ → 2H₂O",                   info:"Combustion. Solvant universel." },
  { a:"Hydrogène",   b:"Oxygène",      r:"Eau",              eq:"H₂ + ½O₂ → H₂O",                    info:"H₂O. La molécule de la vie." },
  { a:"Carbone",     b:"O₂",           r:"CO₂",              eq:"C + O₂ → CO₂",                       info:"Combustion. Photosynthèse." },
  { a:"Carbone",     b:"H₂",           r:"Méthane",          eq:"C + 2H₂ → CH₄",                     info:"Méthanisation. Gaz naturel." },
  { a:"Azote",       b:"H₂",           r:"Ammoniac",         eq:"N₂ + 3H₂ → 2NH₃",                   info:"Haber-Bosch (1909). Révolution agricole." },
  { a:"Carbone",     b:"Carbone",      r:"Graphène",         eq:"C → graphène 2D",                    info:"Feuille 2D. Prix Nobel 2010." },
  { a:"Graphène",    b:"Graphène",     r:"Diamant",          eq:"Cg (P,T) → Cdiam",                   info:"Haute pression. Dureté maximale." },
  { a:"Eau",         b:"Glace",        r:"Glace",            eq:"H₂O → H₂O (s)",                     info:"Cristaux hexagonaux." },
  { a:"Deutéron",    b:"Oxygène",      r:"Eau Lourde",       eq:"2²H + O → D₂O",                     info:"Ralentisseur de neutrons. CANDU." },
  { a:"H₂",          b:"H₂",           r:"Plasma",           eq:"H₂ → plasma (T>10⁴K)",              info:"Ionisation. Intérieur des étoiles." },
  { a:"CO₂",         b:"Eau",          r:"Glucose",          eq:"6CO₂+6H₂O+hν → C₆H₁₂O₆",           info:"Photosynthèse! La réaction de la vie." },
  { a:"Azote",       b:"Glucose",      r:"Acide Aminé",      eq:"Métabolisme N → aa",                 info:"20 acides aminés. Code du vivant." },
  { a:"Acide Aminé", b:"Acide Aminé",  r:"Protéine",         eq:"aa + aa → peptide",                  info:"Liaison peptidique. Enzymes & muscles." },
  { a:"Carbone",     b:"Hydrogène",    r:"Lipide",           eq:"Chaînes CₙHₘ",                       info:"Acides gras. Membranes cellulaires." },
  { a:"Méthane",     b:"Azote",        r:"Lipide",           eq:"CH₄ + N → lipide",                   info:"Synthèse prébiotique." },
  { a:"Glucose",     b:"Protéine",     r:"ADN",              eq:"sucres + bases → ADN",               info:"Double hélice. Watson & Crick 1953." },
  { a:"Lipide",      b:"Eau",          r:"Vie",              eq:"membrane + eau → LUCA",              info:"Vésicule + ADN = LUCA. 3.8 Ga." },
  { a:"ADN",         b:"Protéine",     r:"Vie",              eq:"ADN + enzymes → vie",                info:"Information + catalyse = vie." },
  { a:"Gaz",         b:"Gaz",          r:"Nébuleuse",        eq:"gaz + poussière → nuage",            info:"Nuage interstellaire. Nurserie stellaire." },
  { a:"Hélium",      b:"H₂",           r:"Gaz",             eq:"He + H₂ → nuage",                    info:"Gaz interstellaire. 99% H & He." },
  { a:"Nébuleuse",   b:"Plasma",       r:"Proto-étoile",     eq:"contraction Jeans",                  info:"Effondrement gravitationnel. ~10⁵ ans." },
  { a:"Proto-étoile",b:"Plasma",       r:"Étoile",           eq:"T>10⁷K → fusion H",                 info:"La fusion démarre! Séquence principale." },
  { a:"Étoile",      b:"Étoile",       r:"Naine Jaune",      eq:"étoile G2 → Soleil",                 info:"Notre Soleil. 4.6 Ga, encore 5 Ga." },
  { a:"Étoile",      b:"Noyau He-4",   r:"Géante Rouge",     eq:"H épuisé → gonflement",             info:"L'étoile gonfle quand He domine." },
  { a:"Géante Rouge",b:"Nébuleuse",    r:"Naine Blanche",    eq:"→ nébuleuse planét. + NB",           info:"Résidu de carbone stellaire." },
  { a:"Naine Blanche",b:"Naine Blanche",r:"Naine Noire",     eq:"NB → refroidissement 10¹⁴a",        info:"Aucune naine noire n'existe encore." },
  { a:"Géante Rouge",b:"Géante Rouge", r:"Supergéante",      eq:"> 8M☉ → supergéante",               info:"Destin : supernova de type II." },
  { a:"Supergéante", b:"Noyau Fe-56",  r:"Supernova",        eq:"cœur Fe → effondrement",            info:"Effondrement en <1s. Choc de rebond." },
  { a:"Supernova",   b:"Nébuleuse",    r:"Rémanent SN",      eq:"éjecta → nébuleuse",                 info:"Nébuleuse du Crabe. Onde de choc." },
  { a:"Supernova",   b:"Neutron",      r:"Étoile à Neutrons",eq:"cœur → étoile à n.",                info:"10km de diamètre. Densité nucléaire." },
  { a:"Étoile à Neutrons",b:"Étoile à Neutrons",r:"Kilonova",eq:"BNS merger → GW170817",            info:"LIGO+Virgo 2017. Or & platine!" },
  { a:"Kilonova",    b:"Onde Gravit.", r:"Sursaut Gamma",    eq:"BNS → GRB court",                   info:"GRB. 2s = énergie Soleil en 10 Ga." },
  { a:"Supernova",   b:"Supernova",    r:"Trou Noir",        eq:"M > 25M☉ → TN stellaire",           info:"Effondrement direct. Singularité." },
  { a:"Trou Noir",   b:"Étoile à Neutrons",r:"Trou Noir Sup.",eq:"fusions → SMBH",                 info:"Croissance par accrétion et fusions." },
  { a:"Trou Noir Sup.",b:"Plasma",     r:"Quasar",           eq:"SMBH actif → quasar",               info:"Disque d'accrétion brillant. z>6." },
  { a:"Étoile à Neutrons",b:"Plasma",  r:"Pulsar",           eq:"rotation → émission radio",         info:"Phare cosmique. Horloge précise." },
  { a:"Pulsar",      b:"Magnétar",     r:"Magnétar",         eq:"B > 10¹⁵ G",                        info:"Champ magnétique extrême. Starquakes." },
  { a:"Trou Noir",   b:"Trou Noir",    r:"Onde Gravit.",     eq:"BH+BH → GW",                        info:"GW150914. Premier signal LIGO 2015." },
  { a:"Étoile à Neutrons",b:"Étoile à Neutrons",r:"Onde Gravit.",eq:"BNS → GW",                    info:"GW170817. Multi-messager." },
  { a:"Roche",       b:"Roche",        r:"Astéroïde",        eq:"accrétion",                         info:"Ceinture principale. Mars–Jupiter." },
  { a:"Glace Spatiale",b:"Roche",      r:"Comète",           eq:"glace + poussière",                 info:"Noyau ~10km. Queue = vent solaire." },
  { a:"Astéroïde",   b:"Astéroïde",   r:"Planète Rocheuse", eq:"accrétion 10⁸ ans",                 info:"Impacts. Terre: 4.5 Ga d'accrétion." },
  { a:"Planète Rocheuse",b:"Eau",      r:"Océan",            eq:"eau liquide en surface",            info:"Condition d'habitabilité." },
  { a:"Planète Rocheuse",b:"H₂",       r:"Planète Gazeuse",  eq:"masse critique → capture H",        info:"Jupiter: 318 M⊕." },
  { a:"Planète Gazeuse",b:"Glace",    r:"Planète Glacée",   eq:"glace d'eau supercritique",          info:"Uranus & Neptune." },
  { a:"Planète Rocheuse",b:"Planète Rocheuse",r:"Lune",     eq:"Giant Impact Hypothesis",           info:"Théia (0.1 M⊕) percute proto-Terre." },
  { a:"Planète Gazeuse",b:"Roche",    r:"Anneau",            eq:"limite de Roche",                   info:"Satellite déchiré par marées." },
  { a:"Comète",      b:"Planète Rocheuse",r:"Océan",         eq:"livraison eau + organiques",        info:"Hypothèse comètes. Eau terrestre." },
  { a:"Étoile",      b:"Planète Rocheuse",r:"Système Sol.",  eq:"étoile + disque planét.",           info:"100 Ma d'accrétion." },
  { a:"Roche",       b:"Oxygène",      r:"Poussière",        eq:"Fe + O → Fe₂O₃",                   info:"Hématite. Couleur rouge de Mars." },
  { a:"Poussière",   b:"H₂",           r:"Glace Spatiale",  eq:"grain + glace",                     info:"Manteaux de glace interstellaire." },
  { a:"Fer",         b:"Oxygène",      r:"Roche",            eq:"Fe + O → Fe₂O₃",                   info:"Rouille cosmique. Grande Oxydation 2.4 Ga." },
  { a:"Hélium",      b:"Hélium",       r:"Noyau He-4",       eq:"2He → ⁴He",                        info:"Hélium-4. Noyau alpha." },
  { a:"Océan",       b:"ADN",          r:"Vie",              eq:"sources hydrothermales",            info:"Cheminées alcalines. 3.8 Ga." },
  { a:"Vie",         b:"Vie",          r:"Intelligence",     eq:"évolution → cerveau",               info:"Sélection naturelle. Darwin 1859." },
  { a:"Système Sol.",b:"Système Sol.", r:"Galaxie",          eq:"200-400 Gd étoiles",                info:"Voie Lactée. Disque 100 000 al." },
  { a:"Galaxie",     b:"Galaxie Naine",r:"Galaxie",          eq:"fusion cannibale",                  info:"La VL mange le Sagittaire Nain." },
  { a:"Galaxie",     b:"Galaxie",      r:"Amas Galact.",     eq:"amas lié par gravité",              info:"Amas de la Vierge: 1300 galaxies." },
  { a:"Amas Galact.",b:"Amas Galact.", r:"Toile Cosmique",   eq:"filaments + vides",                 info:"Grande structure. Vides de 100 Mal." },
  { a:"Matière Noire",b:"Galaxie",    r:"Amas Galact.",      eq:"halo + galaxies",                   info:"La mat. noire colle les galaxies." },
  { a:"Toile Cosmique",b:"Énergie Sombre",r:"Univers",       eq:"macro + accélération",             info:"TOUT. 13.8 Ga. Expansion accélère." },
  { a:"Trou Noir",   b:"Matière Noire",r:"Énergie Sombre",   eq:"vide quantique & Λ",               info:"Lien mystérieux vide quantique et Λ." },
];

const RECIPE_MAP = {};
RECIPES.forEach(rec => {
  const key = [rec.a, rec.b].sort().join("|||");
  if (!RECIPE_MAP[key]) RECIPE_MAP[key] = rec;
});

function findRecipe(a, b) {
  return RECIPE_MAP[[a, b].sort().join("|||")] || null;
}

// ============================================================
// ÉTAT
// ============================================================
let discovered  = new Set();
let newElements = new Set();
let slotA = null, slotB = null;
let activeFilt  = "all";
let fusionCount = 0;

function init() {
  discovered.clear();
  newElements.clear();
  slotA = slotB = null;
  fusionCount = 0;
  Object.entries(ELEMENTS).forEach(([n,e]) => { if(e.starter) discovered.add(n); });
  document.querySelectorAll(".canvas-result").forEach(el => el.remove());
  document.getElementById("canvas-hint").classList.remove("hidden");
  updateSlots();
  renderSidebar();
  updateStats();
  loadState();
}

function saveState() {
  try {
    localStorage.setItem("qc2_disc", JSON.stringify([...discovered]));
    localStorage.setItem("qc2_fc",   fusionCount);
  } catch(e) {}
}

function loadState() {
  try {
    const s = localStorage.getItem("qc2_disc");
    const f = localStorage.getItem("qc2_fc");
    if (s) JSON.parse(s).forEach(n => { if(ELEMENTS[n]) discovered.add(n); });
    if (f) fusionCount = parseInt(f)||0;
    renderSidebar();
    updateStats();
  } catch(e) {}
}

function resetGame() {
  if (!confirm("Réinitialiser toute la progression ?")) return;
  localStorage.removeItem("qc2_disc");
  localStorage.removeItem("qc2_fc");
  init();
}

// ============================================================
// SIDEBAR
// ============================================================
const CAT_ORDER = ["quark","lepton","boson","hadron","nucleus","atom","molecule","phase","stellar","cosmic"];

function renderSidebar() {
  const search = document.getElementById("srch").value.toLowerCase().trim();
  const list   = document.getElementById("el-list");
  const items  = [...discovered]
    .filter(n => {
      const e = ELEMENTS[n]; if(!e) return false;
      if(activeFilt !== "all" && e.cat !== activeFilt) return false;
      if(search && !n.toLowerCase().includes(search) && !e.label.toLowerCase().includes(search)) return false;
      return true;
    })
    .sort((a,b) => (CAT_ORDER.indexOf(ELEMENTS[a].cat) - CAT_ORDER.indexOf(ELEMENTS[b].cat)) || a.localeCompare(b,"fr"));

  list.innerHTML = "";
  items.forEach(name => {
    const e    = ELEMENTS[name];
    const chip = document.createElement("div");
    chip.className    = "el-chip";
    chip.dataset.cat  = e.cat;
    chip.dataset.name = name;
    if (name===slotA || name===slotB) chip.classList.add("selected");
    chip.innerHTML = `
      <span class="chip-emoji">${e.emoji}</span>
      <div class="chip-info">
        <div class="chip-name">${name}</div>
        <div class="chip-label">${e.label}</div>
      </div>
      ${newElements.has(name) ? '<span class="chip-new"></span>' : ""}
    `;
    chip.addEventListener("click", () => { newElements.delete(name); selectElement(name); });
    list.appendChild(chip);
  });
}

function setFilt(btn) {
  activeFilt = btn.dataset.f;
  document.querySelectorAll(".filt").forEach(b => b.classList.remove("on"));
  btn.classList.add("on");
  renderSidebar();
}

// ============================================================
// SLOTS
// ============================================================
function selectElement(name) {
  if      (!slotA)         slotA = name;
  else if (!slotB)         slotB = name;
  else { slotA = slotB; slotB = name; }
  updateSlots();
  renderSidebar();
}

function clearSlot(which) {
  if (which==="a") slotA=null; else slotB=null;
  updateSlots();
  renderSidebar();
}

function updateSlots() {
  setSlotUI("a", slotA);
  setSlotUI("b", slotB);
  document.getElementById("btn-fuse").disabled = !(slotA && slotB);
}

function setSlotUI(w, name) {
  const empty   = document.getElementById(`s${w}-empty`);
  const content = document.getElementById(`s${w}-content`);
  const slot    = document.getElementById(`slot-${w}`);
  if (name) {
    const e = ELEMENTS[name];
    document.getElementById(`s${w}-emoji`).textContent = e.emoji;
    document.getElementById(`s${w}-name`).textContent  = name;
    empty.style.display   = "none";
    content.style.display = "flex";
    slot.classList.add("has-item");
  } else {
    empty.style.display   = "";
    content.style.display = "none";
    slot.classList.remove("has-item");
  }
}

// ============================================================
// FUSION
// ============================================================
function doFuse() {
  if (!slotA || !slotB) return;
  const rec = findRecipe(slotA, slotB);
  if (rec) {
    const isNew = !discovered.has(rec.r);
    discovered.add(rec.r);
    fusionCount++;
    if (isNew) { newElements.add(rec.r); showModal(rec.r, rec); }
    else          showToast("Déjà découvert : " + rec.r, "good");
    spawnCanvasResult(rec.r, isNew);
    spawnParticles();
  } else {
    showToast("Pas de réaction connue…", "bad");
  }
  slotA = slotB = null;
  updateSlots();
  renderSidebar();
  updateStats();
  saveState();
}

// ============================================================
// CANVAS RÉSULTAT
// ============================================================
function spawnCanvasResult(name, isNew) {
  const canvas = document.getElementById("canvas");
  document.getElementById("canvas-hint").classList.add("hidden");
  const e   = ELEMENTS[name];
  const div = document.createElement("div");
  div.className = "canvas-result" + (isNew ? " is-new" : "");
  div.innerHTML = `
    ${isNew ? '<div class="cr-new-badge">✨ Nouveau</div>' : ""}
    <span class="cr-emoji">${e.emoji}</span>
    <div class="cr-info">
      <div class="cr-name">${name}</div>
      <div class="cr-cat">${e.label}</div>
    </div>
    <button class="cr-close" onclick="this.closest('.canvas-result').remove();checkHint()">✕</button>
  `;
  const cw = canvas.clientWidth, ch = canvas.clientHeight - 84;
  div.style.left = (16 + Math.random() * Math.max(0, cw - 200)) + "px";
  div.style.top  = (16 + Math.random() * Math.max(0, ch - 80))  + "px";
  makeDraggable(div);
  canvas.appendChild(div);
}

function checkHint() {
  if (!document.querySelector(".canvas-result"))
    document.getElementById("canvas-hint").classList.remove("hidden");
}

function makeDraggable(el) {
  let ox,oy,ol,ot,drag=false;
  const start = (cx,cy) => { drag=true; ox=cx; oy=cy; ol=parseInt(el.style.left)||0; ot=parseInt(el.style.top)||0; el.style.zIndex=99; };
  const move  = (cx,cy) => { if(!drag)return; el.style.left=(ol+cx-ox)+"px"; el.style.top=(ot+cy-oy)+"px"; };
  const end   = ()      => { drag=false; el.style.zIndex=""; };
  el.addEventListener("mousedown",  e => { if(!e.target.classList.contains("cr-close")){start(e.clientX,e.clientY);e.preventDefault();} });
  document.addEventListener("mousemove", e => move(e.clientX,e.clientY));
  document.addEventListener("mouseup",   end);
  el.addEventListener("touchstart", e => { if(!e.target.classList.contains("cr-close")){const t=e.touches[0];start(t.clientX,t.clientY);e.preventDefault();} },{passive:false});
  document.addEventListener("touchmove", e => { const t=e.touches[0];move(t.clientX,t.clientY); });
  document.addEventListener("touchend",  end);
}

// ============================================================
// STATS / MODAL / TOAST / PARTICLES
// ============================================================
function updateStats() {
  const total = Object.keys(ELEMENTS).length;
  document.getElementById("nd").textContent = discovered.size;
  document.getElementById("nt").textContent = total;
  document.getElementById("fc").textContent = fusionCount;
  document.getElementById("prog-bar").style.width = (discovered.size/total*100)+"%";
}

function showModal(name, rec) {
  const e = ELEMENTS[name];
  document.getElementById("m-emoji").textContent = e.emoji;
  document.getElementById("m-name").textContent  = name;
  document.getElementById("m-cat").textContent   = e.label + " · " + e.cat;
  document.getElementById("m-eq").textContent    = rec.eq;
  document.getElementById("m-desc").textContent  = rec.info;
  const m = document.getElementById("modal");
  m.style.display = "flex";
  m.classList.add("show");
}

function closeModal() {
  const m = document.getElementById("modal");
  m.classList.remove("show");
  m.style.display = "none";
}

let _tt;
function showToast(msg, type) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className   = "show" + (type==="good" ? " good" : "");
  clearTimeout(_tt);
  _tt = setTimeout(() => { t.className=""; }, 2200);
}

function spawnParticles() {
  const btn = document.getElementById("btn-fuse");
  const r   = btn.getBoundingClientRect();
  const cx  = r.left + r.width/2, cy = r.top + r.height/2;
  const cols = ["#5b45d6","#a855f7","#10b981","#f59e0b","#ef4444","#0ea5e9"];
  for (let i=0;i<16;i++) {
    const p = document.createElement("div");
    p.className = "part";
    const a=i/16*Math.PI*2, d=40+Math.random()*70, s=5+Math.random()*6;
    p.style.cssText=`left:${cx}px;top:${cy}px;width:${s}px;height:${s}px;background:${cols[i%cols.length]};--tx:${Math.cos(a)*d}px;--ty:${Math.sin(a)*d}px;animation-duration:${.5+Math.random()*.3}s`;
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),900);
  }
}

init();
