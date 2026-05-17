'use strict';

// ============================================================
// ÉTAT
// ============================================================
let discovered  = new Set();
let newElements = new Set();
let activeFilt  = "all";
let fusionCount = 0;
let cards       = [];
let nextCardId  = 0;

function init() {
  discovered.clear();
  newElements.clear();
  fusionCount = 0;
  cards = [];
  nextCardId = 0;
  Object.entries(ELEMENTS).forEach(([n,e]) => { if(e.starter) discovered.add(n); });
  document.getElementById("canvas-area").innerHTML = "";
  updateHint();
  renderSidebar();
  updateStats();
  loadState();
}

function saveState() {
  try {
    localStorage.setItem("qc3_disc", JSON.stringify([...discovered]));
    localStorage.setItem("qc3_fc", fusionCount);
  } catch(e) {}
}

function loadState() {
  try {
    const s = localStorage.getItem("qc3_disc");
    const f = localStorage.getItem("qc3_fc");
    if (s) JSON.parse(s).forEach(n => { if(ELEMENTS[n]) discovered.add(n); });
    if (f) fusionCount = parseInt(f)||0;
    renderSidebar();
    updateStats();
  } catch(e) {}
}

function resetGame() {
  if (!confirm("Réinitialiser toute la progression ?")) return;
  localStorage.removeItem("qc3_disc");
  localStorage.removeItem("qc3_fc");
  init();
}

function clearCanvas() {
  cards.forEach(c => c.el.remove());
  cards = [];
  updateHint();
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
      if(search && !n.toLowerCase().includes(search) && !(e.label||"").toLowerCase().includes(search)) return false;
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
    chip.draggable    = true;
    chip.innerHTML = `
      <span class="chip-emoji">${e.emoji}</span>
      <div class="chip-info"><div class="chip-name">${e.label}</div></div>
      ${newElements.has(name) ? '<span class="chip-new"></span>' : ""}
    `;
    chip.addEventListener("click", () => { newElements.delete(name); renderSidebar(); spawnCard(name); });
    chip.addEventListener("dragstart", ev => { ev.dataTransfer.setData("spawn", name); });
    list.appendChild(chip);
  });

  renderMobile();
}

let activeFiltMobile = "all";

function setFiltMobile(btn) {
  activeFiltMobile = btn.dataset.f;
  document.querySelectorAll("#bottom-panel .filt").forEach(b => b.classList.remove("on"));
  btn.classList.add("on");
  renderMobile();
}

function renderMobile() {
  const list = document.getElementById("el-list-mobile");
  if (!list) return;
  const search = (document.getElementById("srch-mobile")?.value || "").toLowerCase().trim();
  const items = [...discovered]
    .filter(n => {
      const e = ELEMENTS[n]; if(!e) return false;
      if(activeFiltMobile !== "all" && e.cat !== activeFiltMobile) return false;
      if(search && !n.toLowerCase().includes(search) && !(e.label||"").toLowerCase().includes(search)) return false;
      return true;
    })
    .sort((a,b) => (CAT_ORDER.indexOf(ELEMENTS[a].cat) - CAT_ORDER.indexOf(ELEMENTS[b].cat)) || a.localeCompare(b,"fr"));

  list.innerHTML = "";
  items.forEach(name => {
    const e = ELEMENTS[name];
    const chip = document.createElement("div");
    chip.className = "el-chip";
    chip.dataset.cat = e.cat;
    chip.dataset.name = name;
    chip.innerHTML = `
      <span class="chip-emoji">${e.emoji}</span>
      <div class="chip-info"><div class="chip-name">${e.label}</div></div>
      ${newElements.has(name) ? '<span class="chip-new"></span>' : ""}
    `;

    // Tap = spawn au centre
    chip.addEventListener("click", () => { newElements.delete(name); renderMobile(); spawnCard(name); });

    // Touch drag vers le canvas
    let touchStartX, touchStartY, touchMoved, ghost2;
    
    chip.addEventListener("touchstart", ev => {
      touchStartX = ev.touches[0].clientX;
      touchStartY = ev.touches[0].clientY;
      touchMoved = false;
      ghost2 = null;
    }, { passive: true });
    
    chip.addEventListener("touchmove", ev => {
      const t = ev.touches[0];
      const dx = Math.abs(t.clientX - touchStartX);
      const dy = Math.abs(t.clientY - touchStartY);
      if (!touchMoved && dx > dy && dx > 8) return;
      if (dx > 8 || dy > 8) {
        ev.preventDefault();
        touchMoved = true;
        if (!ghost2) {
          ghost2 = document.createElement("div");
          ghost2.className = "canvas-card dragging";
          ghost2.dataset.cat = e.cat;
          ghost2.innerHTML = `<span class="cc-emoji">${e.emoji}</span><span class="cc-name">${e.label}</span>`;
          ghost2.style.cssText = `position:fixed;z-index:9999;pointer-events:none;opacity:.85;`;
          document.body.appendChild(ghost2);
        }
        ghost2.style.left = (t.clientX - 50) + "px";
        ghost2.style.top  = (t.clientY - 20) + "px";
        const area = canvasArea();
        const rect = area.getBoundingClientRect();
        const mx = t.clientX - rect.left;
        const my = t.clientY - rect.top;
        cards.forEach(c => {
          const d = Math.sqrt((c.x-mx)**2 + (c.y-my)**2);
          c.el.classList.toggle("near", d < FUSE_DIST);
        });
      }
    }, { passive: false });
    
    chip.addEventListener("touchend", ev => {
      if (ghost2) ghost2.remove();
      ghost2 = null;
      cards.forEach(c => c.el.classList.remove("near"));
      if (!touchMoved) return;
      const t = ev.changedTouches[0];
      const bp = document.getElementById("bottom-panel")?.getBoundingClientRect();
      if (bp && t.clientY > bp.top) return;
      const area = canvasArea();
      const rect = area.getBoundingClientRect();
      if (t.clientY < rect.top) return;
      newElements.delete(name);
      renderMobile();
      spawnCard(name, t.clientX - rect.left - 50, t.clientY - rect.top - 20);
    });

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
// CANVAS — SPAWN / REMOVE
// ============================================================
const canvasArea = () => document.getElementById("canvas-area");

function spawnCard(name, x, y) {
  const area = canvasArea();
  const rect = area.getBoundingClientRect();
  if (x === undefined) x = rect.width  / 2 - 55 + (Math.random()-0.5)*120;
  if (y === undefined) y = rect.height / 2 - 20 + (Math.random()-0.5)*80;

  const e   = ELEMENTS[name];
  const id  = nextCardId++;
  const div = document.createElement("div");
  div.className = "canvas-card";
  div.dataset.id   = id;
  div.dataset.name = name;
  div.dataset.cat  = e.cat;
  div.style.left   = x + "px";
  div.style.top    = y + "px";
  div.innerHTML = `
    <span class="cc-emoji">${e.emoji}</span>
    <span class="cc-name">${e.label}</span>
  `;

  // Clic droit = supprimer
  div.addEventListener("contextmenu", ev => {
    ev.preventDefault();
    flashRemove(id);
  });

  // Double-clic = dupliquer
  div.addEventListener("dblclick", ev => {
    ev.stopPropagation();
    const c = cards.find(c => c.id === id);
    if (c) spawnCard(name, c.x + 20, c.y + 20);
  });

  makeDraggable(div, id);
  area.appendChild(div);
  cards.push({ id, name, x, y, el: div });
  updateHint();
}

function removeCard(id) {
  const idx = cards.findIndex(c => c.id === id);
  if (idx === -1) return;
  cards[idx].el.remove();
  cards.splice(idx, 1);
  updateHint();
}

function flashRemove(id) {
  const c = cards.find(c => c.id === id);
  if (!c) return;
  c.el.classList.add("fusing");
  setTimeout(() => removeCard(id), 280);
}

function updateHint() {
  const hint = document.getElementById("canvas-hint");
  if (hint) hint.style.display = cards.length === 0 ? "flex" : "none";
}

// ============================================================
// DRAG SUR LES CARTES
// ============================================================
function makeDraggable(el, cardId) {
  let startX, startY, startLeft, startTop, dragging = false;
  let dragOverSidebar = false;

  const getCard = () => cards.find(c => c.id === cardId);
  const sidebar = document.getElementById("sidebar");

  const onStart = (cx, cy) => {
    dragging = true;
    startX    = cx;
    startY    = cy;
    const c   = getCard();
    startLeft = c ? c.x : parseInt(el.style.left) || 0;
    startTop  = c ? c.y : parseInt(el.style.top)  || 0;
    const maxZ = Math.max(0, ...cards.map(c => parseInt(c.el.style.zIndex) || 0));
    el.style.zIndex = maxZ + 1;
    el.classList.add("dragging");
  };

  const onMove = (cx, cy) => {
    if (!dragging) return;
    const dx = cx - startX;
    const dy = cy - startY;
    const nx = startLeft + dx;
    const ny = startTop  + dy;
    el.style.left = nx + "px";
    el.style.top  = ny + "px";
    const c = getCard();
    if (c) { c.x = nx; c.y = ny; }
    highlightNear(cardId, nx, ny);

    if (window.innerWidth <= 680) {
      const bp = document.getElementById("bottom-panel")?.getBoundingClientRect();
      dragOverSidebar = bp ? cy > bp.top : false;
    } else {
      const sr = sidebar.getBoundingClientRect();
      dragOverSidebar = cx >= sr.left && cx <= sr.right;
    }
    el.classList.toggle("drag-to-delete", dragOverSidebar);
  };

  const onEnd = (cx, cy) => {
    if (!dragging) return;
    dragging = false;
    el.classList.remove("dragging");
    el.classList.remove("drag-to-delete");
    clearHighlights();
  
    const moved = Math.abs(cx - startX) > 5 || Math.abs(cy - startY) > 5; // ← ajouter
  
    if (window.innerWidth <= 680) {
      const bp = document.getElementById("bottom-panel")?.getBoundingClientRect();
      if (bp && cy > bp.top) { flashRemove(cardId); return; }
    } else {
      const sr = sidebar.getBoundingClientRect();
      if (cx >= sr.left && cx <= sr.right) { flashRemove(cardId); return; }
    }
  
    if (moved) tryFuseNear(cardId); // ← seulement si déplacé
  };

  // Mouse
  el.addEventListener("mousedown", ev => {
    if (ev.button !== 0) return;
    ev.preventDefault();
    onStart(ev.clientX, ev.clientY);
    const mm = e => onMove(e.clientX, e.clientY);
    const mu = e => { onEnd(e.clientX, e.clientY); document.removeEventListener("mousemove", mm); document.removeEventListener("mouseup", mu); };
    document.addEventListener("mousemove", mm);
    document.addEventListener("mouseup", mu);
  });

  // Touch
  el.addEventListener("touchstart", ev => {
    ev.preventDefault();
    const t = ev.touches[0];
    onStart(t.clientX, t.clientY);
  }, { passive: false });
  el.addEventListener("touchmove", ev => {
    ev.preventDefault();
    const t = ev.touches[0];
    onMove(t.clientX, t.clientY);
  }, { passive: false });
  el.addEventListener("touchend", ev => {
    const t = ev.changedTouches[0];
    onEnd(t.clientX, t.clientY);
  });
}

function cardDist(a, b) {
  return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2);
}

const FUSE_DIST = 80;

function highlightNear(draggedId, nx, ny) {
  cards.forEach(c => {
    if (c.id === draggedId) return;
    const d = Math.sqrt((c.x - nx)**2 + (c.y - ny)**2);
    c.el.classList.toggle("near", d < FUSE_DIST);
  });
}

function clearHighlights() {
  cards.forEach(c => c.el.classList.remove("near"));
}

function tryFuseNear(draggedId) {
  const dragged = cards.find(c => c.id === draggedId);
  if (!dragged) return;

  const near = cards.filter(c => c.id !== draggedId && cardDist(dragged, c) < FUSE_DIST);
  if (near.length === 0) return;

  // Annihilation antimatière (touche toutes les cartes dans la zone)
  for (const nb of near) {
    if (isAntiPair(dragged.name, nb.name)) {
      doAnnihilation(dragged, nb);
      return;
    }
  }

  // Fusion à 3
  if (near.length >= 2) {
    for (let i = 0; i < near.length; i++) {
      for (let j = i+1; j < near.length; j++) {
        const rec = findRecipe3(dragged.name, near[i].name, near[j].name);
        if (rec) { doFusion([dragged, near[i], near[j]], rec); return; }
      }
    }
  }

  // Fusion à 2
  for (const nb of near) {
    const rec = findRecipe2(dragged.name, nb.name);
    if (rec) { doFusion([dragged, nb], rec); return; }
  }

  // Shake
  dragged.el.classList.add("shake");
  setTimeout(() => dragged.el.classList.remove("shake"), 400);
  showToast("Pas de réaction connue…", "bad");
}

// ============================================================
// ANNIHILATION
// ============================================================
function doAnnihilation(cardA, cardB) {
  const mx = (cardA.x + cardB.x) / 2;
  const my = (cardA.y + cardB.y) / 2;

  // Toutes les cartes dans un rayon de 200px sont détruites
  const BLAST = 200;
  const victims = cards.filter(c =>
    Math.sqrt((c.x - mx)**2 + (c.y - my)**2) < BLAST
  );

  victims.forEach(c => {
    c.el.classList.add("annihilating");
  });

  spawnAnnihilationFX(mx, my);
  showToast("💥 Annihilation ! Tout est détruit dans la zone.", "bad");

  setTimeout(() => {
    victims.forEach(c => removeCard(c.id));
  }, 500);
}

function spawnAnnihilationFX(cx, cy) {
  const area = canvasArea();
  const rect = area.getBoundingClientRect();
  const ax = rect.left + cx;
  const ay = rect.top  + cy;

  // Onde de choc
  const wave = document.createElement("div");
  wave.className = "annihilation-wave";
  wave.style.left = ax + "px";
  wave.style.top  = ay + "px";
  document.body.appendChild(wave);
  setTimeout(() => wave.remove(), 800);

  // Flash blanc
  const flash = document.createElement("div");
  flash.className = "annihilation-flash";
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 300);

  // Particules
  const cols = ["#ffffff","#a78bfa","#f472b6","#60a5fa","#34d399"];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement("div");
    p.className = "part";
    const a = i / 30 * Math.PI * 2;
    const d = 80 + Math.random() * 140;
    const s = 4 + Math.random() * 8;
    p.style.cssText = `left:${ax}px;top:${ay}px;width:${s}px;height:${s}px;background:${cols[i%cols.length]};--tx:${Math.cos(a)*d}px;--ty:${Math.sin(a)*d}px;animation-duration:${.6+Math.random()*.5}s`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1200);
  }
}

// ============================================================
// FUSION
// ============================================================
function doFusion(involved, rec) {
  const mx = involved.reduce((s,c) => s + c.x, 0) / involved.length;
  const my = involved.reduce((s,c) => s + c.y, 0) / involved.length;

  involved.forEach(c => {
    c.el.classList.add("fusing");
    setTimeout(() => removeCard(c.id), 300);
  });

  const isNew = !discovered.has(rec.r);
  discovered.add(rec.r);
  fusionCount++;

  if (isNew) {
    newElements.add(rec.r);
    setTimeout(() => {
      showModal(rec.r, rec);
      spawnCard(rec.r, mx, my);
      spawnParticles(mx, my);
    }, 320);
  } else {
    setTimeout(() => {
      spawnCard(rec.r, mx, my);
      spawnParticles(mx, my);
      showToast("Déjà découvert : " + ELEMENTS[rec.r].label, "good");
    }, 320);
  }

  renderSidebar();
  updateStats();
  saveState();
}

// ============================================================
// DROP depuis sidebar vers canvas
// ============================================================
function initCanvasDrop() {
  const area = canvasArea();
  area.addEventListener("dragover", ev => {
    ev.preventDefault();
    const rect = area.getBoundingClientRect();
    const x = ev.clientX - rect.left - 55;
    const y = ev.clientY - rect.top - 18;
    cards.forEach(c => {
      const d = Math.sqrt((c.x - x)**2 + (c.y - y)**2);
      c.el.classList.toggle("near", d < FUSE_DIST);
    });
  });
  area.addEventListener("dragleave", () => clearHighlights());
  area.addEventListener("drop", ev => {
    ev.preventDefault();
    clearHighlights();
    const name = ev.dataTransfer.getData("spawn");
    if (!name || !ELEMENTS[name]) return;
    const rect = area.getBoundingClientRect();
    const x = ev.clientX - rect.left - 55;
    const y = ev.clientY - rect.top - 18;
    spawnCard(name, x, y);
    tryFuseNear(cards[cards.length - 1].id);
  });
}

// ============================================================
// STATS / MODAL / TOAST / PARTICLES
// ============================================================
function updateStats() {
  const total = Object.keys(ELEMENTS).length;
  document.getElementById("nd").textContent = discovered.size;
  document.getElementById("nt").textContent = total;
  document.getElementById("fc").textContent = fusionCount;
  document.getElementById("prog-bar").style.width = (discovered.size / total * 100) + "%";
}

function showModal(name, rec) {
  const e = ELEMENTS[name];
  document.getElementById("m-emoji").textContent = e.emoji;
  document.getElementById("m-name").textContent  = e.label;
  document.getElementById("m-cat").textContent   = name + " · " + e.cat;
  document.getElementById("m-eq").textContent    = rec.eq;
  document.getElementById("m-desc").textContent  = rec.info;
  const m = document.getElementById("modal");
  m.style.display = "flex";
  requestAnimationFrame(() => m.classList.add("show"));
}

function closeModal() {
  const m = document.getElementById("modal");
  m.classList.remove("show");
  setTimeout(() => { m.style.display = "none"; }, 250);
}

let _tt;
function showToast(msg, type) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className   = "show" + (type === "good" ? " good" : "");
  clearTimeout(_tt);
  _tt = setTimeout(() => { t.className = ""; }, 2600);
}

function spawnParticles(cx, cy) {
  const area = canvasArea();
  const rect = area.getBoundingClientRect();
  const ax = rect.left + cx;
  const ay = rect.top  + cy;
  const cols = ["#818cf8","#a78bfa","#38bdf8","#34d399","#fb923c","#f472b6"];
  for (let i = 0; i < 16; i++) {
    const p = document.createElement("div");
    p.className = "part";
    const a = i / 16 * Math.PI * 2;
    const d = 40 + Math.random() * 70;
    const s = 4 + Math.random() * 5;
    p.style.cssText = `left:${ax}px;top:${ay}px;width:${s}px;height:${s}px;background:${cols[i%cols.length]};--tx:${Math.cos(a)*d}px;--ty:${Math.sin(a)*d}px;animation-duration:${.4+Math.random()*.4}s`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 900);
  }
}

// ============================================================
// QUANTUM BACKGROUND — fluctuations de vide
// ============================================================
const QP_SYMBOLS = ["ψ","φ","Ω","∇","∂","ħ","∞","⊗","⊕","Λ","γ","β","α","π","ν","μ","τ","σ","ρ","δ","ε","ζ","η","θ","κ","λ","ξ","χ"];

function initQuantumBg() {
  const bg = document.getElementById("quantum-bg");
  if (!bg) return;

  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;";
  bg.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  let W, H, t = 0;
  const COLS = 16, ROWS = 13, AMP = 9, FREQ = 0.14, SPEED = 0.012;

  function resize() {
    W = canvas.width  = bg.offsetWidth;
    H = canvas.height = bg.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const isDark = () => document.body.classList.contains("dark");

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const cw = W / COLS, ch = H / ROWS;

    // Grille ondulée irrégulière
    for (let r = 0; r <= ROWS; r++) {
      for (let c = 0; c <= COLS; c++) {
        // Ondulation principale
        const wave = Math.sin(c * FREQ + r * FREQ * 0.7 + t) * AMP
                   + Math.sin(c * FREQ * 0.4 - r * FREQ * 1.3 + t * 0.7) * AMP * 0.6
                   + Math.sin(c * FREQ * 1.1 + r * FREQ * 0.3 - t * 1.2) * AMP * 0.3;

        let px = c * cw + wave;
        let py = r * ch + wave * 0.55;



        const alpha = isDark() ? 0.55 : 0.35;
        ctx.fillStyle = isDark()
          ? `rgba(99,120,248,${alpha})`
          : `rgba(80,60,200,${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, isDark() ? 1.4 : 1.1, 0, Math.PI * 2);
        ctx.fill();
      }
    }


    t += SPEED;
    requestAnimationFrame(draw);
  }
  draw();

  setInterval(() => {
    if (document.hidden) return;
    const sym = document.createElement("span");
    sym.className = "qfluc";
    sym.textContent = QP_SYMBOLS[Math.floor(Math.random() * QP_SYMBOLS.length)];
    sym.style.left = (Math.random() * bg.offsetWidth) + "px";
    sym.style.top  = (Math.random() * bg.offsetHeight) + "px";
    sym.style.fontSize = (10 + Math.random() * 18) + "px";
    sym.style.animationDuration = (.8 + Math.random() * 1.4) + "s";
    bg.appendChild(sym);
    setTimeout(() => sym.remove(), 2500);
  }, 120);
}

// ============================================================
// BOOT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  init();
  initCanvasDrop();
  initQuantumBg();

  // Search mobile
  document.getElementById("srch-mobile")?.addEventListener("input", renderMobile);

  // Ajuster canvas entre topbar et bottombar
  function adjustBars() {
    if (window.innerWidth <= 680) {
      const top = document.getElementById("sidebar").offsetHeight;
      const bot = document.getElementById("bottom-panel")?.offsetHeight || 0;
      document.getElementById("canvas").style.paddingTop    = top + "px";
      document.getElementById("canvas").style.paddingBottom = bot + "px";
    } else {
      document.getElementById("canvas").style.paddingTop    = "";
      document.getElementById("canvas").style.paddingBottom = "";
    }
  }
  adjustBars();
  window.addEventListener("resize", adjustBars);
  new ResizeObserver(adjustBars).observe(document.getElementById("sidebar"));
  const bp = document.getElementById("bottom-panel");
  if (bp) new ResizeObserver(adjustBars).observe(bp);

  document.getElementById("theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    document.getElementById("theme-btn").textContent = dark ? "☀️" : "🌙";
    try { localStorage.setItem("qc3_theme", dark ? "dark" : "light"); } catch(e){}
  });
  try {
    if (localStorage.getItem("qc3_theme") === "dark") {
      document.body.classList.add("dark");
      document.getElementById("theme-btn").textContent = "☀️";
    }
  } catch(e) {}
  document.addEventListener("contextmenu", ev => ev.preventDefault());
});


// Resize sidebar
const resizer = document.getElementById("sidebar-resizer");
let resizerDragging = false;
resizer.addEventListener("mousedown", ev => {
  resizerDragging = true;
  resizer.classList.add("dragging");
  ev.preventDefault();
});
document.addEventListener("mousemove", ev => {
  if (!resizerDragging) return;
  const maxW = window.innerWidth * 0.38;
  const newW = Math.min(Math.max(180, ev.clientX), maxW);
  document.documentElement.style.setProperty("--sidebar-w", newW + "px");
  resizer.style.left = newW + "px";
});
document.addEventListener("mouseup", () => {
  resizerDragging = false;
  resizer.classList.remove("dragging");
});

// ============================================================
// RECTETTES
// ============================================================


function openRecipes() {
  renderRecipes();
  const m = document.getElementById("modal-recipes");
  m.style.display = "flex";
  requestAnimationFrame(() => m.classList.add("show"));
}

function closeRecipes() {
  const m = document.getElementById("modal-recipes");
  m.classList.remove("show");
  setTimeout(() => { m.style.display = "none"; }, 220);
}

function renderRecipes() {
  const search = (document.getElementById("recipe-search")?.value || "").toLowerCase().trim();
  const list = document.getElementById("recipe-list");
  if (!list) return;

  // Toutes les recettes dont le résultat est découvert
  const found = RECIPES_2.filter(rec => {
    if (!discovered.has(rec.r)) return false;
    if (!discovered.has(rec.a) && !discovered.has(rec.b)) return false;
    if (search) {
      const ra = (ELEMENTS[rec.a]?.label || rec.a).toLowerCase();
      const rb = (ELEMENTS[rec.b]?.label || rec.b).toLowerCase();
      const rr = (ELEMENTS[rec.r]?.label || rec.r).toLowerCase();
      return ra.includes(search) || rb.includes(search) || rr.includes(search);
    }
    return true;
  });

  list.innerHTML = "";
  if (found.length === 0) {
    list.innerHTML = `<div style="text-align:center;color:var(--muted);padding:20px;font-size:.8rem;">Aucune recette trouvée</div>`;
    return;
  }

  found.forEach(rec => {
    const ea = ELEMENTS[rec.a];
    const eb = ELEMENTS[rec.b];
    const er = ELEMENTS[rec.r];
    const div = document.createElement("div");
    div.className = "recipe-item";
    div.innerHTML = `
      <span>${ea?.emoji || ""}</span>
      <span>${ea?.label || rec.a}</span>
      <span style="color:var(--muted)">+</span>
      <span>${eb?.emoji || ""}</span>
      <span>${eb?.label || rec.b}</span>
      <span style="color:var(--muted)">→</span>
      <span class="ri-result">${er?.emoji || ""} ${er?.label || rec.r}</span>
    `;
    list.appendChild(div);
  });
}


let sideRight = false;
function toggleSide() {
  clearCanvas();
  sideRight = !sideRight;
  const sidebar = document.getElementById("sidebar");
  const canvas = document.getElementById("canvas");
  const resizer = document.getElementById("sidebar-resizer");
  if (sideRight) {
    sidebar.style.left = "auto";
    sidebar.style.right = "0";
    sidebar.style.borderRight = "none";
    sidebar.style.borderLeft = "1px solid var(--border)";
    canvas.style.left = "0";
    canvas.style.right = "var(--sidebar-w)";
    resizer.style.left = "auto";
    resizer.style.right = "var(--sidebar-w)";
  } else {
    sidebar.style.left = "0";
    sidebar.style.right = "auto";
    sidebar.style.borderLeft = "none";
    sidebar.style.borderRight = "1px solid var(--border)";
    canvas.style.left = "var(--sidebar-w)";
    canvas.style.right = "0";
    resizer.style.left = "var(--sidebar-w)";
    resizer.style.right = "auto";
  }
}
