// ═══════════════════════════════════════════════
// 1. DATA LAYER — BANCO DE DADOS LOCAL
// ═══════════════════════════════════════════════

const WHATSAPP_NUMBER = "5511999999999";
const SITE_URL = window.location.origin + window.location.pathname;

const products = [
  {
    id: "001", code: "PROD-001",
    name: "Tênis Urban Flow Pro",
    category: "Calçados",
    tags: ["tênis","esporte","novidade","lançamento"],
    price: "R$ 259,90", originalPrice: "R$ 389,90", discount: "33%",
    description: "Design exclusivo com amortecimento superior. Ideal para uso urbano e corridas leves.",
    image: "https://picsum.photos/400/400?random=1",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Tênis Urban Flow Pro (PROD-001)",
    featured: true, isNew: true, hasVideo: false, videoUrl: ""
  },
  {
    id: "002", code: "PROD-002",
    name: "Mochila Executive Dark",
    category: "Acessórios",
    tags: ["mochila","trabalho","executivo","destaque"],
    price: "R$ 189,90", originalPrice: "", discount: "",
    description: "Mochila premium com compartimento para notebook 15\". Material impermeável e antifurto.",
    image: "https://picsum.photos/400/400?random=2",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Mochila Executive Dark (PROD-002)",
    featured: true, isNew: false, hasVideo: false, videoUrl: ""
  },
  {
    id: "003", code: "PROD-003",
    name: "Relógio Luminis S1",
    category: "Relógios",
    tags: ["relógio","luxo","promoção","destaque"],
    price: "R$ 449,90", originalPrice: "R$ 699,90", discount: "36%",
    description: "Smartwatch com tela AMOLED, GPS integrado e autonomia de 7 dias.",
    image: "https://picsum.photos/400/400?random=3",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Relógio Luminis S1 (PROD-003)",
    featured: true, isNew: false, hasVideo: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "004", code: "PROD-004",
    name: "Fones Aura Wireless",
    category: "Eletrônicos",
    tags: ["fone","som","wireless","novidade"],
    price: "R$ 299,90", originalPrice: "R$ 399,90", discount: "25%",
    description: "Cancelamento ativo de ruído, 30h de bateria, conexão multidevice simultânea.",
    image: "https://picsum.photos/400/400?random=4",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Fones Aura Wireless (PROD-004)",
    featured: false, isNew: true, hasVideo: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "005", code: "PROD-005",
    name: "Camiseta Oversize Noir",
    category: "Roupas",
    tags: ["camiseta","streetwear","moda","promoção"],
    price: "R$ 89,90", originalPrice: "R$ 129,90", discount: "31%",
    description: "100% algodão premium. Corte oversized exclusivo. Disponível em P, M, G e GG.",
    image: "https://picsum.photos/400/400?random=5",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Camiseta Oversize Noir (PROD-005)",
    featured: false, isNew: false, hasVideo: false, videoUrl: ""
  },
  {
    id: "006", code: "PROD-006",
    name: "Óculos Solar Chrome",
    category: "Acessórios",
    tags: ["óculos","estilo","verão","novidade"],
    price: "R$ 159,90", originalPrice: "", discount: "",
    description: "Proteção UV400, armação metálica inoxidável. Estilo urbano premium para o dia a dia.",
    image: "https://picsum.photos/400/400?random=6",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Óculos Solar Chrome (PROD-006)",
    featured: false, isNew: true, hasVideo: false, videoUrl: ""
  },
  {
    id: "007", code: "PROD-007",
    name: "Perfume Noir Gold 100ml",
    category: "Beleza",
    tags: ["perfume","fragrância","luxo","promoção","destaque"],
    price: "R$ 199,90", originalPrice: "R$ 279,90", discount: "28%",
    description: "Fragrância amadeirada e almíscar com notas de baunilha e âmbar. Duração 12h.",
    image: "https://picsum.photos/400/400?random=7",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Perfume Noir Gold (PROD-007)",
    featured: true, isNew: false, hasVideo: false, videoUrl: ""
  },
  {
    id: "008", code: "PROD-008",
    name: "Carteira Slim Carbon",
    category: "Acessórios",
    tags: ["carteira","couro","minimalista"],
    price: "R$ 79,90", originalPrice: "", discount: "",
    description: "Couro legítimo com acabamento carbon. Slim com bloqueio RFID. Cabe até 8 cartões.",
    image: "https://picsum.photos/400/400?random=8",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Carteira Slim Carbon (PROD-008)",
    featured: false, isNew: false, hasVideo: false, videoUrl: ""
  },
  {
    id: "009", code: "PROD-009",
    name: "Câmera Instant Vintage",
    category: "Eletrônicos",
    tags: ["câmera","foto","vintage","novidade","destaque"],
    price: "R$ 329,90", originalPrice: "R$ 449,90", discount: "27%",
    description: "Impressão instantânea em 10 segundos. Compatível com filmes Instax Mini. Design retrô.",
    image: "https://picsum.photos/400/400?random=9",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Câmera Instant Vintage (PROD-009)",
    featured: true, isNew: true, hasVideo: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const stories = [
  { id:"s1", label:"🔥 Promoções", thumbnail:"https://picsum.photos/80/80?random=10", type:"image", content:"https://picsum.photos/400/700?random=11", cta:{text:"Ver Promoções", action:"filter", value:"promo"} },
  { id:"s2", label:"🆕 Novidades", thumbnail:"https://picsum.photos/80/80?random=12", type:"image", content:"https://picsum.photos/400/700?random=13", cta:{text:"Ver Novidades", action:"filter", value:"new"} },
  { id:"s3", label:"⭐ Destaques", thumbnail:"https://picsum.photos/80/80?random=14", type:"image", content:"https://picsum.photos/400/700?random=15", cta:{text:"Ver Destaques", action:"filter", value:"featured"} },
  { id:"s4", label:"👟 Calçados", thumbnail:"https://picsum.photos/80/80?random=16", type:"image", content:"https://picsum.photos/400/700?random=17", cta:{text:"Ver Calçados", action:"cat", value:"Calçados"} },
  { id:"s5", label:"💎 Top Vendas", thumbnail:"https://picsum.photos/80/80?random=18", type:"image", content:"https://picsum.photos/400/700?random=19", cta:{text:"Ver Mais", action:"filter", value:"featured"} }
];

const reels = [
  { id:"r1", productId:"003", videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", thumbnail:"https://picsum.photos/220/390?random=20", title:"Relógio Luminis S1 — Veja de perto!", description:"Smartwatch premium com GPS e 7 dias de bateria" },
  { id:"r2", productId:"004", videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", thumbnail:"https://picsum.photos/220/390?random=21", title:"Fones Aura Wireless em ação!", description:"Cancelamento de ruído ativo incrível" },
  { id:"r3", productId:"009", videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", thumbnail:"https://picsum.photos/220/390?random=22", title:"Câmera Instant — Memórias em segundos!", description:"Impressão instantânea com estilo vintage" }
];

// ═══════════════════════════════════════════════
// 2. STATE (ESTADO DA APLICAÇÃO)
// ═══════════════════════════════════════════════
let currentFilter = "all";
let currentCat = "all";
let currentSort = "default";
let currentSearch = "";
let currentReelIdx = 0;
let currentStoryIdx = 0;
let storyTimer = null;
let viewedProducts = JSON.parse(localStorage.getItem('lumina_viewed')||'[]');
let likedProducts = JSON.parse(localStorage.getItem('lumina_likes')||'[]');
let searchHistory = JSON.parse(localStorage.getItem('lumina_search_history')||'[]');
let reelLikes = JSON.parse(localStorage.getItem('lumina_reel_likes')||'{}');

// ═══════════════════════════════════════════════
// 3. INICIALIZAÇÃO
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  buildNavCats();
  renderStories();
  setTimeout(() => {
    renderProducts();
    renderReels();
    checkDeepLink();
  }, 600); // Simula um carregamento de API
  
  updateCartBadge();
  
  // Gatilho do Modal Premium
  setTimeout(() => {
    openWelcomeModal();
  }, 2500); 
});

// ═══════════════════════════════════════════════
// 4. CATEGORIAS E NAVEGAÇÃO
// ═══════════════════════════════════════════════
function buildNavCats() {
  const cats = [...new Set(products.map(p => p.category))];
  const nav = document.getElementById('nav-cats');
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.dataset.cat = cat;
    btn.textContent = cat;
    btn.onclick = function(){ filterCat(this, cat); };
    nav.appendChild(btn);
  });
}

function filterCat(btn, cat) {
  currentCat = cat;
  currentFilter = "all";
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  document.querySelector('[data-filter="all"]').classList.add('active');
  renderProducts();
}

function resetFilters() {
  currentCat = "all";
  currentFilter = "all";
  currentSearch = "";
  currentSort = "default";
  document.getElementById('search-input').value = "";
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-cat="all"]').classList.add('active');
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  document.querySelector('[data-filter="all"]').classList.add('active');
  renderProducts();
}

// ═══════════════════════════════════════════════
// 5. FILTRO INTELIGENTE E ORDENAÇÃO
// ═══════════════════════════════════════════════
function applyFilter(btn, filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  renderProducts();
}

function applySort(val) {
  currentSort = val;
  renderProducts();
}

function getFilteredProducts() {
  let list = [...products];
  // Categoria
  if (currentCat !== "all") list = list.filter(p => p.category === currentCat);
  // Filtro Rápido
  if (currentFilter === "new") list = list.filter(p => p.isNew);
  else if (currentFilter === "promo") list = list.filter(p => !!p.discount);
  else if (currentFilter === "featured") list = list.filter(p => p.featured);
  else if (currentFilter === "liked") list = list.filter(p => likedProducts.includes(p.id));
  // Busca por Texto
  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q)
    );
  }
  // Ordenação
  if (currentSort === "price-asc") list.sort((a,b) => parseFloat(a.price.replace(/[^\d,]/g,'').replace(',','.')) - parseFloat(b.price.replace(/[^\d,]/g,'').replace(',','.')));
  else if (currentSort === "price-desc") list.sort((a,b) => parseFloat(b.price.replace(/[^\d,]/g,'').replace(',','.')) - parseFloat(a.price.replace(/[^\d,]/g,'').replace(',','.')));
  else if (currentSort === "newest") list.sort((a,b) => (b.isNew?1:0) - (a.isNew?1:0));
  
  return list;
}

// ═══════════════════════════════════════════════
// 6. RENDERIZAÇÃO E CARTÕES DE PRODUTO
// ═══════════════════════════════════════════════
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const list = getFilteredProducts();
  document.getElementById('product-count').textContent = list.length + ' produto' + (list.length !== 1 ? 's' : '');

  if (list.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="no-results-icon">🔍</div><h3>Nenhum produto encontrado</h3><p>Tente outros termos ou limpe os filtros.</p></div>`;
    return;
  }

  grid.innerHTML = list.map(p => buildCard(p)).join('');

  // Lazy load images (Observer)
  grid.querySelectorAll('img[data-src]').forEach(img => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.src = e.target.dataset.src; obs.disconnect(); }});
    });
    obs.observe(img);
  });
}

function highlight(text) {
  if (!currentSearch.trim()) return text;
  const q = currentSearch.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  return text.replace(new RegExp(q,'gi'), m => `<span class="hl">${m}</span>`);
}

function buildCard(p) {
  const liked = likedProducts.includes(p.id);
  const badgeLeft = p.discount ? `<span class="card-badge badge-discount">-${p.discount}</span>` : '';
  let badgeRight = '';
  if (p.isNew) badgeRight = `<span class="card-badge badge-new">NOVO</span>`;
  else if (p.featured) badgeRight = `<span class="card-badge badge-featured">⭐</span>`;

  const originalPrice = p.originalPrice ? `<span class="card-original">${p.originalPrice}</span>` : '';

  return `
    <div class="product-card" data-id="${p.id}">
      <div class="card-img-wrap">
        <img data-src="${p.image}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" alt="${p.name}" loading="lazy">
        ${badgeLeft}
        ${badgeRight}
        <button class="card-like ${liked?'liked':''}" onclick="toggleLike(event,'${p.id}',this)" title="Curtir">
          ${liked ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="card-body">
        <div class="card-code">${p.code}</div>
        <div class="card-name">${highlight(p.name)}</div>
        <div class="card-desc">${highlight(p.description)}</div>
        <div class="card-pricing">
          <span class="card-price">${p.price}</span>
          ${originalPrice}
        </div>
        <div class="card-actions" style="position:relative">
          <button class="btn-buy" onclick="buyProduct('${p.id}')">🛒 Comprar</button>
          <button class="btn-wa-sm" onclick="waProduct('${p.id}')" title="WhatsApp">💬</button>
          <div style="position:relative">
            <button class="btn-share-sm" onclick="toggleShare(event,'share-${p.id}')" title="Compartilhar">📤</button>
            <div class="share-panel" id="share-${p.id}">
              <button class="share-opt" onclick="shareProduct('${p.id}','copy')"><span class="share-icon">🔗</span>Copiar link</button>
              <button class="share-opt" onclick="shareProduct('${p.id}','whatsapp')"><span class="share-icon">💬</span>WhatsApp</button>
              <button class="share-opt" onclick="shareProduct('${p.id}','facebook')"><span class="share-icon">📘</span>Facebook</button>
              <button class="share-opt" onclick="shareProduct('${p.id}','twitter')"><span class="share-icon">🐦</span>Twitter / X</button>
              <button class="share-opt" onclick="shareProduct('${p.id}','email')"><span class="share-icon">📧</span>E-mail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════
// 7. COMPRA E CURTIDAS (AÇÕES)
// ═══════════════════════════════════════════════
function buyProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  trackView(id);
  window.open(p.externalLink, '_blank');
}

function waProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(p.whatsappMessage)}`;
  window.open(url, '_blank');
}

function trackView(id) {
  if (!viewedProducts.includes(id)) {
    viewedProducts.push(id);
    localStorage.setItem('lumina_viewed', JSON.stringify(viewedProducts));
  }
}

function toggleLike(e, id, btn) {
  e.stopPropagation();
  const idx = likedProducts.indexOf(id);
  if (idx === -1) {
    likedProducts.push(id);
    btn.classList.add('liked');
    btn.innerHTML = '❤️';
    btn.classList.add('heart-pop');
    toast('❤️ Adicionado aos curtidos!','success');
  } else {
    likedProducts.splice(idx,1);
    btn.classList.remove('liked');
    btn.innerHTML = '🤍';
  }
  btn.classList.remove('heart-pop');
  void btn.offsetWidth; // force reflow
  btn.classList.add('heart-pop');
  localStorage.setItem('lumina_likes', JSON.stringify(likedProducts));
  updateCartBadge();
}

function updateCartBadge() {
  document.getElementById('cart-badge').textContent = likedProducts.length;
}

// ═══════════════════════════════════════════════
// 8. BUSCA E DEEP LINK
// ═══════════════════════════════════════════════
function onSearchInput(val) {
  currentSearch = val;
  renderProducts();
  showSuggestions();
}

function onSearchKey(e) {
  if (e.key === 'Enter') {
    const val = e.target.value.trim();
    if (val && !searchHistory.includes(val)) {
      searchHistory.unshift(val);
      if (searchHistory.length > 8) searchHistory.pop();
      localStorage.setItem('lumina_search_history', JSON.stringify(searchHistory));
    }
    hideSuggestions();
  }
  if (e.key === 'Escape') { hideSuggestions(); e.target.blur(); }
}

function showSuggestions() {
  const val = document.getElementById('search-input').value.toLowerCase();
  const box = document.getElementById('suggestions-box');
  let items = [];
  if (!val) {
    items = searchHistory.slice(0,5).map(h => `<div class="suggestion-item" onmousedown="selectSuggestion('${h}')"><span>🕐</span>${h}</div>`);
  } else {
    const matches = new Set();
    products.forEach(p => {
      if (p.name.toLowerCase().includes(val)) matches.add(p.name);
      p.tags.forEach(t => { if(t.toLowerCase().includes(val)) matches.add(t); });
    });
    items = [...matches].slice(0,6).map(m => `<div class="suggestion-item" onmousedown="selectSuggestion('${m}')"><span>🔍</span>${m}</div>`);
  }
  if (items.length) {
    box.innerHTML = items.join('');
    box.classList.add('open');
  } else {
    box.classList.remove('open');
  }
}

function hideSuggestions() {
  setTimeout(() => document.getElementById('suggestions-box').classList.remove('open'), 150);
}

function selectSuggestion(val) {
  document.getElementById('search-input').value = val;
  currentSearch = val;
  renderProducts();
  hideSuggestions();
}

function checkDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('produto');
  if (code) {
    const p = products.find(x => x.code === code);
    if (p) {
      setTimeout(() => {
        toast(`🔍 Mostrando: ${p.name}`,'info');
        currentSearch = p.name;
        document.getElementById('search-input').value = p.name;
        renderProducts();
        document.getElementById('products-grid').scrollIntoView({behavior:'smooth'});
      }, 800);
    }
  }
}

// ═══════════════════════════════════════════════
// 9. COMPARTILHAMENTO E TOAST
// ═══════════════════════════════════════════════
function toggleShare(e, panelId) {
  e.stopPropagation();
  const panel = document.getElementById(panelId);
  const isOpen = panel.classList.contains('open');
  document.querySelectorAll('.share-panel.open').forEach(p => p.classList.remove('open'));
  if (!isOpen) panel.classList.add('open');
}

document.addEventListener('click', () => {
  document.querySelectorAll('.share-panel.open').forEach(p => p.classList.remove('open'));
});

function shareProduct(id, platform) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const url = `${SITE_URL}?produto=${p.code}`;
  const text = `Veja este produto: ${p.name} — ${p.price}`;
  const urls = {
    copy: null,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(p.name)}&body=${encodeURIComponent(text + '\n\n' + url)}`
  };
  
  if (platform === 'copy') {
    navigator.clipboard.writeText(url).then(() => toast('🔗 Link copiado!','success'));
  } else if (urls[platform]) {
    window.open(urls[platform],'_blank');
    toast('📤 Compartilhado!','info');
  }
  document.querySelectorAll('.share-panel.open').forEach(p => p.classList.remove('open'));
}

function toast(msg, type='info') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 2900);
}

// ═══════════════════════════════════════════════
// 10. SISTEMA DE STORIES (LOJA E PERFIL)
// ═══════════════════════════════════════════════
function renderStories() {
  const bar = document.getElementById('stories-bar');
  const viewedStories = JSON.parse(localStorage.getItem('lumina_viewed_stories')||'[]');
  bar.innerHTML = stories.map((s,i) => `
    <div class="story-item" onclick="openStory(${i})">
      <div class="story-ring ${viewedStories.includes(s.id)?'viewed':''}">
        <img class="story-img" src="${s.thumbnail}" alt="${s.label}" loading="lazy">
      </div>
      <span class="story-label">${s.label}</span>
    </div>
  `).join('');
}

function buildProgressBar(activeIdx, arrReference) {
  const bar = document.getElementById('story-progress-bar');
  bar.innerHTML = arrReference.map((s,i) => `
    <div class="story-prog-seg">
      <div class="story-prog-fill ${i < activeIdx ? 'done' : i === activeIdx ? 'active' : ''}"></div>
    </div>
  `).join('');
}

function openStory(idx) {
  currentStoryIdx = idx;
  document.getElementById('story-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  loadStory(idx);
}

function loadStory(idx) {
  const s = stories[idx];
  if (!s) { closeStory(); return; }

  // Marca como visto
  let vs = JSON.parse(localStorage.getItem('lumina_viewed_stories')||'[]');
  if (!vs.includes(s.id)) { vs.push(s.id); localStorage.setItem('lumina_viewed_stories', JSON.stringify(vs)); }
  renderStories();

  document.getElementById('story-author-name').textContent = 'LUMINA';

  const content = document.getElementById('story-content');
  const tpl = `<div class="story-tap-prev" onclick="prevStory()"></div><div class="story-tap-next" onclick="nextStory()"></div>`;
  
  if (s.type === 'video') {
    content.innerHTML = `<iframe src="${s.content}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:20px;z-index:1;" allowfullscreen></iframe>` + tpl;
  } else {
    content.innerHTML = `<img src="${s.content}" alt="${s.label}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:20px;z-index:1;">` + tpl;
  }

  const ctaBtn = document.getElementById('story-cta-btn');
  ctaBtn.textContent = s.cta.text + ' ✨';
  ctaBtn.onclick = () => {
    closeStory();
    if (s.cta.action === 'filter') {
      const chips = document.querySelectorAll('.filter-chip');
      chips.forEach(c => c.classList.remove('active'));
      if (s.cta.value === 'promo') document.querySelector('[data-filter="promo"]').classList.add('active');
      else if (s.cta.value === 'new') document.querySelector('[data-filter="new"]').classList.add('active');
      else if (s.cta.value === 'featured') document.querySelector('[data-filter="featured"]').classList.add('active');
      currentFilter = s.cta.value;
    } else if (s.cta.action === 'cat') {
      currentCat = s.cta.value;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      const cb = document.querySelector(`[data-cat="${s.cta.value}"]`);
      if (cb) cb.classList.add('active');
    }
    renderProducts();
    document.getElementById('products-grid').scrollIntoView({behavior:'smooth'});
  };

  buildProgressBar(idx, stories);

  clearTimeout(storyTimer);
  if (typeof profileStoryTimer !== 'undefined') clearTimeout(profileStoryTimer);
  storyTimer = setTimeout(() => nextStory(), 5000);
}

function nextStory() {
  clearTimeout(storyTimer);
  if (currentStoryIdx < stories.length - 1) {
    currentStoryIdx++;
    loadStory(currentStoryIdx);
  } else { closeStory(); }
}

function prevStory() {
  clearTimeout(storyTimer);
  if (currentStoryIdx > 0) {
    currentStoryIdx--;
    loadStory(currentStoryIdx);
  }
}

function closeStory() {
  clearTimeout(storyTimer);
  if (typeof profileStoryTimer !== 'undefined') { clearTimeout(profileStoryTimer); }
  
  document.getElementById('story-modal').classList.remove('open');
  document.body.style.overflow = '';
  
  // Destruição do vídeo fantasma
  const content = document.getElementById('story-content');
  if (content) {
    const video = content.querySelector('video');
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.load(); 
    }
  }
}

// ─── STORIES DO PERFIL (AVATAR) ───
const profileVideos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4" 
];

let profileStoryTimer = null;
let currentProfileIdx = 0;

function openProfileStories() {
  if (profileVideos.length === 0) return;
  currentProfileIdx = 0;
  document.getElementById('story-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  loadProfileStory(currentProfileIdx);
}

function loadProfileStory(idx) {
  const content = document.getElementById('story-content');
  const tpl = `<div class="story-tap-prev" onclick="prevProfileStory()"></div><div class="story-tap-next" onclick="nextProfileStory()"></div>`;
  
  content.innerHTML = `<video src="${profileVideos[idx]}" autoplay playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:20px;z-index:1;"></video>` + tpl;
  
  document.getElementById('story-author-name').textContent = 'lumina.store';
  
  const ctaBtn = document.getElementById('story-cta-btn');
  ctaBtn.textContent = 'Ver Loja ✨';
  ctaBtn.onclick = () => { closeStory(); };

  buildProgressBar(idx, profileVideos);

  clearTimeout(storyTimer); 
  clearTimeout(profileStoryTimer);
  profileStoryTimer = setTimeout(() => nextProfileStory(), 5000);
}

function nextProfileStory() {
  clearTimeout(profileStoryTimer);
  if (currentProfileIdx < profileVideos.length - 1) {
    currentProfileIdx++;
    loadProfileStory(currentProfileIdx);
  } else { closeStory(); }
}

function prevProfileStory() {
  clearTimeout(profileStoryTimer);
  if (currentProfileIdx > 0) {
    currentProfileIdx--;
    loadProfileStory(currentProfileIdx);
  }
}

// ═══════════════════════════════════════════════
// 11. SISTEMA DE REELS
// ═══════════════════════════════════════════════
function renderReels() {
  const container = document.getElementById('reels-container');
  container.innerHTML = reels.map((r,i) => {
    const p = products.find(x => x.id === r.productId);
    return `
      <div class="reel-card" onclick="openReel(${i})">
        <img class="reel-thumb" src="${r.thumbnail}" alt="${r.title}" loading="lazy">
        <div class="reel-overlay">
          <div class="reel-play">▶</div>
          <div class="reel-actions-side">
            <button class="reel-btn" onclick="event.stopPropagation();toggleReelLike('${r.id}',this)">❤️<span class="reel-btn-count">${reelLikes[r.id]?1:0}</span></button>
            <button class="reel-btn" onclick="event.stopPropagation();shareProduct('${r.productId}','whatsapp')">📤</button>
          </div>
          <div class="reel-info">
            <div class="reel-name">${r.title}</div>
            <div class="reel-price">${p ? p.price : ''}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleReelLike(id, btn) {
  if (reelLikes[id]) {
    delete reelLikes[id];
    btn.innerHTML = '❤️<span class="reel-btn-count">0</span>';
  } else {
    reelLikes[id] = 1;
    btn.innerHTML = '❤️<span class="reel-btn-count">1</span>';
    toast('❤️ Curtido!','success');
  }
  localStorage.setItem('lumina_reel_likes', JSON.stringify(reelLikes));
}

function openReel(idx) {
  currentReelIdx = idx;
  document.getElementById('reel-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  loadReel(idx);
}

function loadReel(idx) {
  const r = reels[idx];
  if (!r) return;
  const p = products.find(x => x.id === r.productId);
  const wrap = document.getElementById('reel-video-wrap');

  const oldIframe = wrap.querySelector('iframe');
  if (oldIframe) oldIframe.remove();

  const iframe = document.createElement('iframe');
  iframe.src = r.videoUrl;
  iframe.allow = "autoplay; encrypted-media; fullscreen";
  iframe.setAttribute('allowfullscreen','');
  wrap.insertBefore(iframe, wrap.firstChild);

  document.getElementById('reel-modal-actions').innerHTML = `
    <div class="reel-action" onclick="toggleReelLikeModal('${r.id}',this)">
      <span style="${reelLikes[r.id] ? 'filter:drop-shadow(0 0 6px red)' : ''}">❤️</span>
      <span class="count">${reelLikes[r.id] ? '1' : 'Curtir'}</span>
    </div>
    <div class="reel-action" onclick="shareProduct('${r.productId}','whatsapp')">
      <span>📤</span><span class="count">Comp.</span>
    </div>
    <div class="reel-action" onclick="waProduct('${r.productId}')">
      <span>🛒</span><span class="count">Comprar</span>
    </div>
  `;

  document.getElementById('reel-modal-info').innerHTML = `
    <div class="reel-modal-name">${p ? p.name : r.title}</div>
    <div class="reel-modal-price">${p ? p.price : ''}</div>
    <div class="reel-modal-cta">
      <button class="btn-reel-buy" onclick="buyProduct('${r.productId}')">🛒 Comprar Agora</button>
      <button class="btn-reel-wa" onclick="waProduct('${r.productId}')">💬</button>
    </div>
  `;
}

function toggleReelLikeModal(id, el) {
  const span = el.querySelector('span:first-child');
  if (reelLikes[id]) { 
    delete reelLikes[id]; span.style.filter=''; el.querySelector('.count').textContent='Curtir'; 
  } else { 
    reelLikes[id]=1; span.style.filter='drop-shadow(0 0 6px red)'; el.querySelector('.count').textContent='1'; toast('❤️ Curtido!','success'); 
  }
  localStorage.setItem('lumina_reel_likes', JSON.stringify(reelLikes));
  renderReels(); // Atualiza contador na vitrine de trás
}

function changeReel(dir) {
  const newIdx = currentReelIdx + dir;
  if (newIdx >= 0 && newIdx < reels.length) {
    currentReelIdx = newIdx;
    loadReel(currentReelIdx);
  }
}

function closeReel() {
  const wrap = document.getElementById('reel-video-wrap');
  const iframe = wrap.querySelector('iframe');
  if (iframe) { iframe.src = ''; }
  document.getElementById('reel-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// Fechar modais ao clicar no fundo
document.getElementById('reel-modal').addEventListener('click', function(e) { if (e.target === this) closeReel(); });
document.getElementById('story-modal').addEventListener('click', function(e) { if (e.target === this) closeStory(); });

// Controle pelo teclado
document.addEventListener('keydown', e => {
  if (document.getElementById('story-modal').classList.contains('open')) {
    if (e.key === 'ArrowRight') { document.getElementById('story-author-name').textContent === 'lumina.store' ? nextProfileStory() : nextStory(); }
    if (e.key === 'ArrowLeft') { document.getElementById('story-author-name').textContent === 'lumina.store' ? prevProfileStory() : prevStory(); }
    if (e.key === 'Escape') closeStory();
  }
  if (document.getElementById('reel-modal').classList.contains('open')) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') changeReel(1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') changeReel(-1);
    if (e.key === 'Escape') closeReel();
  }
});

// ═══════════════════════════════════════════════
// 12. INTEGRAÇÃO BACKEND (N8N & GOOGLE SHEETS)
// ═══════════════════════════════════════════════
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzVa41AHgCbavLYi7nfJ0fYh_rDy_kANh_4lp0lajmYq-FChNwYJAWMxBezx0yUkrLLRw/exec";
const N8N_WEBHOOK_URL = "https://projeto-automacoes-n8n.yek85i.easypanel.host/webhook/loja-eventos";

function sendToBackend(acao, idProduto, nomeProduto, telefone = "") {
  const payload = JSON.stringify({
    acao: acao,
    id_produto: idProduto,
    nome_produto: nomeProduto,
    telefone: telefone
  });

  // Planilha Google (via Apps Script - usa no-cors para não bloquear no navegador)
  if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.includes("http")) {
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", 
      headers: { "Content-Type": "application/json" },
      body: payload
    }).catch(err => console.error("Erro Google:", err));
  }

  // Webhook n8n (Ativar Respond to OPTIONS lá no nó)
  if (N8N_WEBHOOK_URL && N8N_WEBHOOK_URL.includes("http")) {
    fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload
    }).catch(err => console.error("Erro n8n:", err));
  }
}

// ═══════════════════════════════════════════════
// 13. MODAL DE SORTEIO (BEM-VINDO)
// ═══════════════════════════════════════════════
function openWelcomeModal() {
  const hasSeenModal = sessionStorage.getItem('lumina_welcome_seen');
  if (!hasSeenModal) {
    document.getElementById('welcome-modal').classList.add('open');
  }
}

function closeWelcomeModal() {
  document.getElementById('welcome-modal').classList.remove('open');
  sessionStorage.setItem('lumina_welcome_seen', 'true');
}

function submitWelcomeLead() {
  const phone = document.getElementById('welcome-phone').value.trim();
  
  if(!phone) {
    toast('⚠️ Por favor, insira seu telefone!', 'info');
    return;
  }

  // Gatilho mágico que salva a pessoa e o telefone na planilha e no n8n!
  sendToBackend("CADASTRO_SORTEIO", "GERAL", "Acesso à Loja (Sorteio)", phone);
  
  toast('🎉 Cadastro realizado! Boa sorte!', 'success');
  closeWelcomeModal();
}