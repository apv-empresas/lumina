// ═══════════════════════════════════════════════
// 1. DATA LAYER — BANCO DE DADOS LOCAL
// ═══════════════════════════════════════════════

const WHATSAPP_NUMBER = "5511916072188";
const SITE_URL = window.location.origin + window.location.pathname;

const products = [
  {
    id: "001",
    code: "PROD-001",
    name: "Carregador Veicular TIPO-C + USB Turbo 45W",
    category: "Eletrônicos",
    tags: ["carregador", "carro", "veicular", "tipo-c", "usb", "turbo", "45w", "novidade", "promoção"],
    price: "R$ 30,90",
    originalPrice: "R$ 45,00",
    discount: "",
    description: "Carregamento rápido para carro com entrada TIPO-C + USB. Compatível com diversos aparelhos.",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lyatue0dlq7926@resize_w900_nl.webp",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent("Oi vim da LUMINA estou interessado no Carregador Veicular TIPO-C + USB Turbo Carregamento rápido/Universal 45W"),
    whatsappMessage: "Oi vim da LUMINA estou interessado no Carregador Veicular TIPO-C + USB Turbo Carregamento rápido/Universal 45W",
    featured: true,
    isNew: true,
    hasVideo: true,
    videoUrl: "https://down-zl-br.vod.susercontent.com/api/v4/11110103/mms/br-11110103-6kfko-m3y30zuz7vmj01.16000051734559266.mp4"
  }

  
  ,
  {
    id: "002",
    code: "PROD-002",
    name: "Jaqueta Puffer Masculina",
    category: "Roupas",
    tags: ["mochila", "trabalho", "executivo", "destaque"],
    price: "R$ 75,90",
    originalPrice: "100,90",
    discount: "",
    description: "Bobojaco Bomber Blusa de Frio Inverno Neve Com Touca Removível\". Material impermeável.",
    image: "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mki8dkgnqepuf3.webp",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Bobojaco Bomber Blusa de Frio Inverno Neve Com Touca Removível (PROD-002)",
    featured: true,
    isNew: true,
    hasVideo: false,
    videoUrl: "https://down-tx-br.vod.susercontent.com/api/v4/11110103/mms/br-11110103-6kfkr-m9ub33becz7d94.16000051747406121.mp4"
  },

  /*
  {
    id: "003",
    code: "PROD-003",
    name: "Relógio Luminis S1",
    category: "Relógios",
    tags: ["relógio", "luxo", "promoção", "destaque"],
    price: "R$ 449,90",
    originalPrice: "R$ 699,90",
    discount: "",
    description: "Smartwatch com tela AMOLED, GPS integrado e autonomia de 7 dias.",
    image: "https://picsum.photos/400/400?random=3",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Relógio Luminis S1 (PROD-003)",
    featured: true,
    isNew: false,
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "004",
    code: "PROD-004",
    name: "Fones Aura Wireless",
    category: "Eletrônicos",
    tags: ["fone", "som", "wireless", "novidade"],
    price: "R$ 299,90",
    originalPrice: "R$ 399,90",
    discount: "",
    description: "Cancelamento ativo de ruído, 30h de bateria, conexão multidevice simultânea.",
    image: "https://picsum.photos/400/400?random=4",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Fones Aura Wireless (PROD-004)",
    featured: false,
    isNew: true,
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "005",
    code: "PROD-005",
    name: "Camiseta Oversize Noir",
    category: "Roupas",
    tags: ["camiseta", "streetwear", "moda", "promoção"],
    price: "R$ 89,90",
    originalPrice: "R$ 129,90",
    discount: "",
    description: "100% algodão premium. Corte oversized exclusivo. Disponível em P, M, G e GG.",
    image: "https://picsum.photos/400/400?random=5",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Camiseta Oversize Noir (PROD-005)",
    featured: false,
    isNew: false,
    hasVideo: false,
    videoUrl: ""
  },
  {
    id: "006",
    code: "PROD-006",
    name: "Óculos Solar Chrome",
    category: "Acessórios",
    tags: ["óculos", "estilo", "verão", "novidade"],
    price: "R$ 159,90",
    originalPrice: "",
    discount: "",
    description: "Proteção UV400, armação metálica inoxidável. Estilo urbano premium para o dia a dia.",
    image: "https://picsum.photos/400/400?random=6",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Óculos Solar Chrome (PROD-006)",
    featured: false,
    isNew: true,
    hasVideo: false,
    videoUrl: ""
  },
  {
    id: "007",
    code: "PROD-007",
    name: "Perfume Noir Gold 100ml",
    category: "Beleza",
    tags: ["perfume", "fragrância", "luxo", "promoção", "destaque"],
    price: "R$ 199,90",
    originalPrice: "R$ 279,90",
    discount: "",
    description: "Fragrância amadeirada e almíscar com notas de baunilha e âmbar. Duração 12h.",
    image: "https://picsum.photos/400/400?random=7",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Perfume Noir Gold (PROD-007)",
    featured: true,
    isNew: false,
    hasVideo: false,
    videoUrl: ""
  },
  {
    id: "008",
    code: "PROD-008",
    name: "Carteira Slim Carbon",
    category: "Acessórios",
    tags: ["carteira", "couro", "minimalista"],
    price: "R$ 79,90",
    originalPrice: "",
    discount: "",
    description: "Couro legítimo com acabamento carbon. Slim com bloqueio RFID. Cabe até 8 cartões.",
    image: "https://picsum.photos/400/400?random=8",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Carteira Slim Carbon (PROD-008)",
    featured: false,
    isNew: false,
    hasVideo: false,
    videoUrl: ""
  },
  {
    id: "009",
    code: "PROD-009",
    name: "Câmera Instant Vintage",
    category: "Eletrônicos",
    tags: ["câmera", "foto", "vintage", "novidade", "destaque"],
    price: "R$ 329,90",
    originalPrice: "R$ 449,90",
    discount: "",
    description: "Impressão instantânea em 10 segundos. Compatível com filmes Instax Mini. Design retrô.",
    image: "https://picsum.photos/400/400?random=9",
    externalLink: "https://wa.me/" + WHATSAPP_NUMBER,
    whatsappMessage: "Olá! Tenho interesse no produto: Câmera Instant Vintage (PROD-009)",
    featured: true,
    isNew: true,
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
  */
];

const stories = [
  {
    id: "s1",
    label: "🔥 Promoções",
    thumbnail: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lyatue0dlq7926@resize_w900_nl.webp",
    type: "video",
    content: "https://down-zl-br.vod.susercontent.com/api/v4/11110103/mms/br-11110103-6kfko-m3y30zuz7vmj01.16000051734559266.mp4",
    cta: { text: "Ver Promoções", action: "filter", value: "promo" }
  }

  /*
  ,
  {
    id: "s2",
    label: "🆕 Novidades",
    thumbnail: "https://picsum.photos/80/80?random=12",
    type: "image",
    content: "https://picsum.photos/400/700?random=13",
    cta: { text: "Ver Novidades", action: "filter", value: "new" }
  },
  {
    id: "s3",
    label: "⭐ Destaques",
    thumbnail: "https://picsum.photos/80/80?random=14",
    type: "video",
    content: "COLE_AQUI_O_LINK_DO_VIDEO.mp4",
    cta: { text: "Ver Destaques", action: "filter", value: "featured" }
  }
  */
];

const reels = [
  {
    id: "r1",
    productId: "001",
    videoUrl: "https://down-zl-br.vod.susercontent.com/api/v4/11110103/mms/br-11110103-6kfko-m3y30zuz7vmj01.16000051734559266.mp4",
    thumbnail: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lyatue0dlq7926@resize_w900_nl.webp",
    title: "Carregador Veicular Turbo 45W",
    description: "Carregamento rápido TIPO-C + USB para usar direto no carro."
  }

  
  ,
  {
    id: "r2",
    productId: "002",
    videoUrl: "https://down-tx-br.vod.susercontent.com/api/v4/11110103/mms/br-11110103-6kfkr-m9ub33becz7d94.16000051747406121.mp4",
    thumbnail: "https://down-br.img.susercontent.com/file/sg-11134201-820mg-mnbxgjonuwp2df.webp",
    title: "Fones Aura Wireless em ação!",
    description: "Cancelamento de ruído ativo incrível"
  },
  /*
  {
    id: "r2",
    productId: "003",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    thumbnail: "https://picsum.photos/220/390?random=21",
    title: "Fones Aura Wireless em ação!",
    description: "Cancelamento de ruído ativo incrível"
  }

  */
];

// ═══════════════════════════════════════════════
// 2. STATE — ESTADO DA APLICAÇÃO
// ═══════════════════════════════════════════════

let currentFilter = "all";
let currentCat = "all";
let currentSort = "default";
let currentSearch = "";
let currentReelIdx = 0;
let currentStoryIdx = 0;
let storyTimer = null;
let profileStoryTimer = null;
let currentProfileIdx = 0;

let viewedProducts = JSON.parse(localStorage.getItem("lumina_viewed") || "[]");
let likedProducts = JSON.parse(localStorage.getItem("lumina_likes") || "[]");
let searchHistory = JSON.parse(localStorage.getItem("lumina_search_history") || "[]");
let reelLikes = JSON.parse(localStorage.getItem("lumina_reel_likes") || "{}");
let followersCount = Number(localStorage.getItem("lumina_followers_count") || "21");
let isFollowingStore = localStorage.getItem("lumina_is_following") === "true";

// ═══════════════════════════════════════════════
// 3. INICIALIZAÇÃO
// ═══════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  buildNavCats();
  renderStories();

  updateProfileStats();

  setTimeout(() => {
    renderProducts();
    renderReels();
    checkDeepLink();
  }, 600);

  updateCartBadge();

  setTimeout(() => {
    openWelcomeModal();
  }, 2500);

  lockHorizontalPageScroll();
});

window.addEventListener("load", () => {
  lockHorizontalPageScroll();
  startSocialProof();
});

window.addEventListener("resize", lockHorizontalPageScroll);

// ═══════════════════════════════════════════════
// 4. HELPERS GERAIS
// ═══════════════════════════════════════════════

function getProductById(id) {
  const product = products.find(p => p.id === id);
  return product || products[0] || null;
}

function isYouTubeUrl(url) {
  return String(url || "").includes("youtube.com") || String(url || "").includes("youtu.be");
}

function isMp4Url(url) {
  return String(url || "").toLowerCase().includes(".mp4");
}

function safeText(value) {
  return String(value || "");
}

function lockHorizontalPageScroll() {
  document.documentElement.style.overflowX = "hidden";
  document.body.style.overflowX = "hidden";

  const reelsSection = document.querySelector(".reels-section");
  const reelsContainer = document.querySelector(".reels-container");

  if (reelsSection) {
    reelsSection.style.overflowX = "hidden";
    reelsSection.style.maxWidth = "100%";
  }

  if (reelsContainer) {
    reelsContainer.style.maxWidth = "100%";
    reelsContainer.style.overscrollBehaviorX = "contain";
  }
}

function parsePrice(price) {
  return parseFloat(
    String(price)
      .replace(/[^\d,]/g, "")
      .replace(",", ".")
  ) || 0;
}

function calculateDiscount(price, originalPrice) {
  const current = parsePrice(price);
  const original = parsePrice(originalPrice);

  if (!current || !original || original <= current) {
    return "";
  }

  const discountPercent = Math.round(((original - current) / original) * 100);

  return discountPercent + "%";
}

function isPromoProduct(product) {
  return !!calculateDiscount(product.price, product.originalPrice);
}

function getProductBadges(product) {
  return {
    discount: calculateDiscount(product.price, product.originalPrice),
    isNew: product.isNew === true,
    featured: product.featured === true,
    promo: isPromoProduct(product)
  };
}

// ═══════════════════════════════════════════════
// 5. CATEGORIAS E NAVEGAÇÃO
// ═══════════════════════════════════════════════

function buildNavCats() {
  const cats = [...new Set(products.map(p => p.category))];
  const nav = document.getElementById("nav-cats");

  if (!nav) return;

  const existingCats = [...nav.querySelectorAll(".cat-btn")].map(btn => btn.dataset.cat);

  cats.forEach(cat => {
    if (existingCats.includes(cat)) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cat-btn";
    btn.dataset.cat = cat;
    btn.textContent = cat;
    btn.onclick = function () {
      filterCat(this, cat);
    };

    nav.appendChild(btn);
  });
}

function filterCat(btn, cat) {
  currentCat = cat;
  currentFilter = "all";

  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
  const allFilter = document.querySelector('[data-filter="all"]');
  if (allFilter) allFilter.classList.add("active");

  renderProducts();
}

function resetFilters() {
  currentCat = "all";
  currentFilter = "all";
  currentSearch = "";
  currentSort = "default";

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) sortSelect.value = "default";

  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  const allCat = document.querySelector('[data-cat="all"]');
  if (allCat) allCat.classList.add("active");

  document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
  const allFilter = document.querySelector('[data-filter="all"]');
  if (allFilter) allFilter.classList.add("active");

  renderProducts();
}

// ═══════════════════════════════════════════════
// 6. FILTRO INTELIGENTE E ORDENAÇÃO
// ═══════════════════════════════════════════════

function applyFilter(btn, filter) {
  currentFilter = filter;

  document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
  if (btn) btn.classList.add("active");

  renderProducts();
}

function applySort(val) {
  currentSort = val;
  renderProducts();
}

function getFilteredProducts() {
  let list = [...products];

  if (currentCat !== "all") {
    list = list.filter(p => p.category === currentCat);
  }

  if (currentFilter === "new") {
    list = list.filter(p => p.isNew);
  } else if (currentFilter === "promo") {
    list = list.filter(p => isPromoProduct(p));
  } else if (currentFilter === "featured") {
    list = list.filter(p => p.featured);
  } else if (currentFilter === "liked") {
    list = list.filter(p => likedProducts.includes(p.id));
  }

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

  if (currentSort === "price-asc") {
    list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (currentSort === "price-desc") {
    list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  } else if (currentSort === "newest") {
    list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  return list;
}

// ═══════════════════════════════════════════════
// 7. RENDERIZAÇÃO E CARDS DE PRODUTO
// ═══════════════════════════════════════════════

function renderProducts() {
  const grid = document.getElementById("products-grid");
  const count = document.getElementById("product-count");

  if (!grid) return;

  const list = getFilteredProducts();

  if (count) {
    count.textContent = list.length + " produto" + (list.length !== 1 ? "s" : "");
  }

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente outros termos ou limpe os filtros.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(p => buildCard(p)).join("");

  grid.querySelectorAll("img[data-src]").forEach(img => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.src = e.target.dataset.src;
          obs.disconnect();
        }
      });
    });

    obs.observe(img);
  });
}

function highlight(text) {
  if (!currentSearch.trim()) return safeText(text);

  const q = currentSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  return safeText(text).replace(new RegExp(q, "gi"), m => `<span class="hl">${m}</span>`);
}

function buildCard(p) {
  const liked = likedProducts.includes(p.id);
  const badges = getProductBadges(p);

  const badgeLeft = badges.discount
    ? `<span class="card-badge badge-discount">-${badges.discount}</span>`
    : "";

  let badgeRight = "";

  if (badges.isNew) {
    badgeRight = `<span class="card-badge badge-new">NOVO</span>`;
  } else if (badges.featured) {
    badgeRight = `<span class="card-badge badge-featured">⭐</span>`;
  }

  const originalPrice = p.originalPrice ? `<span class="card-original">${p.originalPrice}</span>` : "";

  return `
    <div class="product-card" data-id="${p.id}">
      <div class="card-img-wrap">
        <img
          data-src="${p.image}"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
          alt="${p.name}"
          loading="lazy"
        >
        ${badgeLeft}
        ${badgeRight}

        <button type="button" class="card-like ${liked ? "liked" : ""}" onclick="toggleLike(event,'${p.id}',this)" title="Curtir">
          ${liked ? "❤️" : "🤍"}
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
          <button type="button" class="btn-buy" onclick="waProduct('${p.id}')">🛒 Comprar</button>
          <button type="button" class="btn-wa-sm" onclick="waProduct('${p.id}')" title="WhatsApp">💬</button>

          <div style="position:relative">
            <button type="button" class="btn-share-sm" onclick="toggleShare(event,'share-${p.id}')" title="Compartilhar">📤</button>

            <div class="share-panel" id="share-${p.id}">
              <button type="button" class="share-opt" onclick="shareProduct('${p.id}','copy')">
                <span class="share-icon">🔗</span>Copiar link
              </button>

              <button type="button" class="share-opt" onclick="shareProduct('${p.id}','whatsapp')">
                <span class="share-icon">💬</span>WhatsApp
              </button>

              <button type="button" class="share-opt" onclick="shareProduct('${p.id}','facebook')">
                <span class="share-icon">📘</span>Facebook
              </button>

              <button type="button" class="share-opt" onclick="shareProduct('${p.id}','twitter')">
                <span class="share-icon">🐦</span>Twitter / X
              </button>

              <button type="button" class="share-opt" onclick="shareProduct('${p.id}','email')">
                <span class="share-icon">📧</span>E-mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════
// 8. COMPRA, WHATSAPP E CURTIDAS
// ═══════════════════════════════════════════════

function buyProduct(id) {
  waProduct(id);
}

function waProduct(id) {
  const p = getProductById(id);
  if (!p) return;

  trackView(p.id);

  const message = p.whatsappMessage || `Oi vim da LUMINA estou interessado no produto ${p.name}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

function trackView(id) {
  if (!viewedProducts.includes(id)) {
    viewedProducts.push(id);
    localStorage.setItem("lumina_viewed", JSON.stringify(viewedProducts));
  }
}

function toggleLike(e, id, btn) {
  e.stopPropagation();

  const idx = likedProducts.indexOf(id);

  if (idx === -1) {
    likedProducts.push(id);
    btn.classList.add("liked");
    btn.innerHTML = "❤️";
    toast("❤️ Adicionado aos curtidos!", "success");
  } else {
    likedProducts.splice(idx, 1);
    btn.classList.remove("liked");
    btn.innerHTML = "🤍";
  }

  btn.classList.remove("heart-pop");
  void btn.offsetWidth;
  btn.classList.add("heart-pop");

  localStorage.setItem("lumina_likes", JSON.stringify(likedProducts));
  updateCartBadge();
  updateProfileStats();
}

function updateCartBadge() {
  
  const badge = document.getElementById("cart-badge");
  if (badge) badge.textContent = likedProducts.length;
}

// ═══════════════════════════════════════════════
// 9. BUSCA E DEEP LINK
// ═══════════════════════════════════════════════

function onSearchInput(val) {
  currentSearch = val;
  renderProducts();
  showSuggestions();
}

function onSearchKey(e) {
  if (e.key === "Enter") {
    const val = e.target.value.trim();

    if (val && !searchHistory.includes(val)) {
      searchHistory.unshift(val);
      if (searchHistory.length > 8) searchHistory.pop();
      localStorage.setItem("lumina_search_history", JSON.stringify(searchHistory));
    }

    hideSuggestions();
  }

  if (e.key === "Escape") {
    hideSuggestions();
    e.target.blur();
  }
}

function showSuggestions() {
  const input = document.getElementById("search-input");
  const box = document.getElementById("suggestions-box");

  if (!input || !box) return;

  const val = input.value.toLowerCase();
  let items = [];

  if (!val) {
    items = searchHistory.slice(0, 5).map(h => `
      <div class="suggestion-item" onmousedown="selectSuggestion('${h}')">
        <span>🕐</span>${h}
      </div>
    `);
  } else {
    const matches = new Set();

    products.forEach(p => {
      if (p.name.toLowerCase().includes(val)) matches.add(p.name);

      p.tags.forEach(t => {
        if (t.toLowerCase().includes(val)) matches.add(t);
      });
    });

    items = [...matches].slice(0, 6).map(m => `
      <div class="suggestion-item" onmousedown="selectSuggestion('${m}')">
        <span>🔍</span>${m}
      </div>
    `);
  }

  if (items.length) {
    box.innerHTML = items.join("");
    box.classList.add("open");
  } else {
    box.classList.remove("open");
  }
}

function hideSuggestions() {
  setTimeout(() => {
    const box = document.getElementById("suggestions-box");
    if (box) box.classList.remove("open");
  }, 150);
}

function selectSuggestion(val) {
  const input = document.getElementById("search-input");

  if (input) input.value = val;

  currentSearch = val;
  renderProducts();
  hideSuggestions();
}

function checkDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("produto");

  if (!code) return;

  const p = products.find(x => x.code === code);

  if (p) {
    setTimeout(() => {
      toast(`🔍 Mostrando: ${p.name}`, "info");
      currentSearch = p.name;

      const input = document.getElementById("search-input");
      if (input) input.value = p.name;

      renderProducts();

      const grid = document.getElementById("products-grid");
      if (grid) grid.scrollIntoView({ behavior: "smooth" });
    }, 800);
  }
}

// ═══════════════════════════════════════════════
// 10. COMPARTILHAMENTO E TOAST
// ═══════════════════════════════════════════════

function toggleShare(e, panelId) {
  e.stopPropagation();

  const panel = document.getElementById(panelId);
  if (!panel) return;

  const isOpen = panel.classList.contains("open");

  document.querySelectorAll(".share-panel.open").forEach(p => p.classList.remove("open"));

  if (!isOpen) panel.classList.add("open");
}

document.addEventListener("click", () => {
  document.querySelectorAll(".share-panel.open").forEach(p => p.classList.remove("open"));
});

function shareProduct(id, platform) {
  const p = getProductById(id);
  if (!p) return;

  const url = `${SITE_URL}?produto=${p.code}`;
  const text = `Veja este produto: ${p.name} — ${p.price}`;

  const urls = {
    copy: null,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(text + "\n" + url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(p.name)}&body=${encodeURIComponent(text + "\n\n" + url)}`
  };

  if (platform === "copy") {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => toast("🔗 Link copiado!", "success"));
    } else {
      toast("Copie o link pela barra do navegador.", "info");
    }
  } else if (urls[platform]) {
    window.open(urls[platform], "_blank");
    toast("📤 Compartilhado!", "info");
  }

  document.querySelectorAll(".share-panel.open").forEach(p => p.classList.remove("open"));
}

function toast(msg, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.textContent = msg;

  container.appendChild(el);

  setTimeout(() => el.remove(), 2900);
}

// ═══════════════════════════════════════════════
// 11. SISTEMA DE STORIES
// ═══════════════════════════════════════════════

function renderStories() {
  const bar = document.getElementById("stories-bar");
  if (!bar) return;

  const viewedStories = JSON.parse(localStorage.getItem("lumina_viewed_stories") || "[]");

  bar.innerHTML = stories.map((s, i) => `
    <div class="story-item" onclick="openStory(${i})">
      <div class="story-ring ${viewedStories.includes(s.id) ? "viewed" : ""}">
        <img class="story-img" src="${s.thumbnail}" alt="${s.label}" loading="lazy">
      </div>
      <span class="story-label">${s.label}</span>
    </div>
  `).join("");
}

function buildProgressBar(activeIdx, arrReference) {
  const bar = document.getElementById("story-progress-bar");
  if (!bar) return;

  bar.innerHTML = arrReference.map((s, i) => `
    <div class="story-prog-seg">
      <div class="story-prog-fill ${i < activeIdx ? "done" : i === activeIdx ? "active" : ""}"></div>
    </div>
  `).join("");
}

function openStory(idx) {
  currentStoryIdx = idx;

  const modal = document.getElementById("story-modal");
  if (!modal) return;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  loadStory(idx);
}

function loadStory(idx) {
  const s = stories[idx];

  if (!s) {
    closeStory();
    return;
  }

  let viewedStories = JSON.parse(localStorage.getItem("lumina_viewed_stories") || "[]");

  if (!viewedStories.includes(s.id)) {
    viewedStories.push(s.id);
    localStorage.setItem("lumina_viewed_stories", JSON.stringify(viewedStories));
  }

  renderStories();

  const authorName = document.getElementById("story-author-name");
  if (authorName) authorName.textContent = "LUMINA";

  const content = document.getElementById("story-content");
  if (!content) return;

  const taps = `
    <div class="story-tap-prev" onclick="prevStory()"></div>
    <div class="story-tap-next" onclick="nextStory()"></div>
  `;

  if (s.type === "video") {
    content.innerHTML = `
      <video src="${s.content}" autoplay muted playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:20px;z-index:1;"></video>
      ${taps}
    `;
  } else {
    content.innerHTML = `
      <img src="${s.content}" alt="${s.label}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:20px;z-index:1;">
      ${taps}
    `;
  }

  const ctaBtn = document.getElementById("story-cta-btn");

  if (ctaBtn) {
    ctaBtn.textContent = s.cta.text + " ✨";

    ctaBtn.onclick = () => {
      closeStory();

      if (s.cta.action === "filter") {
        currentFilter = s.cta.value;

        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));

        const chip = document.querySelector(`[data-filter="${s.cta.value}"]`);
        if (chip) chip.classList.add("active");
      }

      if (s.cta.action === "cat") {
        currentCat = s.cta.value;

        document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));

        const cb = document.querySelector(`[data-cat="${s.cta.value}"]`);
        if (cb) cb.classList.add("active");
      }

      renderProducts();

      const grid = document.getElementById("products-grid");
      if (grid) grid.scrollIntoView({ behavior: "smooth" });
    };
  }

  buildProgressBar(idx, stories);

  clearTimeout(storyTimer);
  clearTimeout(profileStoryTimer);

  storyTimer = setTimeout(() => nextStory(), 5000);
}

function nextStory() {
  clearTimeout(storyTimer);

  if (currentStoryIdx < stories.length - 1) {
    currentStoryIdx++;
    loadStory(currentStoryIdx);
  } else {
    closeStory();
  }
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
  clearTimeout(profileStoryTimer);

  const modal = document.getElementById("story-modal");
  if (modal) modal.classList.remove("open");

  document.body.style.overflow = "";

  const content = document.getElementById("story-content");

  if (content) {
    const video = content.querySelector("video");

    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
  }
}

// ═══════════════════════════════════════════════
// 12. STORIES DO PERFIL
// ═══════════════════════════════════════════════

const profileVideos = [
  "https://down-bs-br.vod.susercontent.com/api/v4/11110103/mms/br-11110103-6kfkr-lz8eb4dexketa0.16000051724287380.mp4",
  "https://down-bs-br.vod.susercontent.com/api/v4/11110103/mms/br-11110103-6kfkq-m1k1gt801iiwdb.16000051729350680.mp4"
];

function openProfileStories() {
  if (profileVideos.length === 0) return;

  currentProfileIdx = 0;

  const modal = document.getElementById("story-modal");
  if (!modal) return;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  loadProfileStory(currentProfileIdx);
}

function loadProfileStory(idx) {
  const content = document.getElementById("story-content");
  if (!content) return;

  const taps = `
    <div class="story-tap-prev" onclick="prevProfileStory()"></div>
    <div class="story-tap-next" onclick="nextProfileStory()"></div>
  `;

  content.innerHTML = `
    <video src="${profileVideos[idx]}" autoplay muted playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:20px;z-index:1;"></video>
    ${taps}
  `;

  const authorName = document.getElementById("story-author-name");
  if (authorName) authorName.textContent = "lumina.store";

  const ctaBtn = document.getElementById("story-cta-btn");

  if (ctaBtn) {
    ctaBtn.textContent = "Ver Loja ✨";
    ctaBtn.onclick = () => closeStory();
  }

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
  } else {
    closeStory();
  }
}

function prevProfileStory() {
  clearTimeout(profileStoryTimer);

  if (currentProfileIdx > 0) {
    currentProfileIdx--;
    loadProfileStory(currentProfileIdx);
  }
}

// ═══════════════════════════════════════════════
// 13. SISTEMA DE REELS
// ═══════════════════════════════════════════════

function renderReels() {
  const container = document.getElementById("reels-container");
  if (!container) return;

  container.innerHTML = reels.map((r, i) => {
    const p = getProductById(r.productId);

    return `
      <div class="reel-card" onclick="openReel(${i})">
        <img class="reel-thumb" src="${r.thumbnail}" alt="${r.title}" loading="lazy">

        <div class="reel-overlay">
          <div class="reel-play">▶</div>

          <div class="reel-actions-side">
            <button type="button" class="reel-btn" onclick="event.stopPropagation(); toggleReelLike('${r.id}', this)">
              ❤️
              <span class="reel-btn-count">${reelLikes[r.id] ? 1 : 0}</span>
            </button>

            <button type="button" class="reel-btn" onclick="event.stopPropagation(); shareProduct('${p ? p.id : r.productId}', 'whatsapp')">
              📤
            </button>
          </div>

          <div class="reel-info">
            <div class="reel-name">${r.title}</div>
            <div class="reel-price">${p ? p.price : ""}</div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function toggleReelLike(id, btn) {
  if (reelLikes[id]) {
    delete reelLikes[id];
    btn.innerHTML = `❤️<span class="reel-btn-count">0</span>`;
  } else {
    reelLikes[id] = 1;
    btn.innerHTML = `❤️<span class="reel-btn-count">1</span>`;
    toast("❤️ Curtido!", "success");
  }

  localStorage.setItem("lumina_reel_likes", JSON.stringify(reelLikes));
  updateProfileStats();
}

function openReel(idx) {
  currentReelIdx = idx;

  const modal = document.getElementById("reel-modal");
  if (!modal) return;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  loadReel(idx);
}

function clearReelMedia() {
  const mediaLayer = document.getElementById("reel-media-layer");
  const wrap = document.getElementById("reel-video-wrap");

  const target = mediaLayer || wrap;
  if (!target) return;

  target.innerHTML = "";
}

function loadReel(idx) {
  const r = reels[idx];
  if (!r) return;

  const p = getProductById(r.productId);
  const mediaLayer = document.getElementById("reel-media-layer");
  const wrap = document.getElementById("reel-video-wrap");
  const target = mediaLayer || wrap;

  if (!target) return;

  clearReelMedia();

  if (isMp4Url(r.videoUrl)) {
    const video = document.createElement("video");
    video.src = r.videoUrl;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;
    video.className = "reel-media-video";

    target.appendChild(video);

    video.play().catch(() => {
      video.controls = true;
    });
  } else {
    const iframe = document.createElement("iframe");
    iframe.src = r.videoUrl;
    iframe.allow = "autoplay; encrypted-media; fullscreen";
    iframe.setAttribute("allowfullscreen", "");
    iframe.className = "reel-media-iframe";

    target.appendChild(iframe);
  }

  const actions = document.getElementById("reel-modal-actions");

  if (actions) {
    actions.innerHTML = `
      <button type="button" class="reel-action" onclick="event.stopPropagation(); toggleReelLikeModal('${r.id}', this)">
        <span style="${reelLikes[r.id] ? "filter:drop-shadow(0 0 6px red)" : ""}">❤️</span>
        <span class="count">${reelLikes[r.id] ? "1" : "Curtir"}</span>
      </button>

      <button type="button" class="reel-action" onclick="event.stopPropagation(); shareProduct('${p ? p.id : r.productId}', 'whatsapp')">
        <span>📤</span>
        <span class="count">Comp.</span>
      </button>

      <button type="button" class="reel-action" onclick="event.stopPropagation(); waProduct('${p ? p.id : r.productId}')">
        <span>🛒</span>
        <span class="count">Comprar</span>
      </button>
    `;
  }

  const info = document.getElementById("reel-modal-info");

  if (info) {
    info.innerHTML = `
      <div class="reel-modal-name">${p ? p.name : r.title}</div>
      <div class="reel-modal-price">${p ? p.price : ""}</div>

      <div class="reel-modal-cta">
        <button type="button" class="btn-reel-buy" onclick="event.stopPropagation(); waProduct('${p ? p.id : r.productId}')">
          🛒 Comprar Agora
        </button>

        <button type="button" class="btn-reel-wa" onclick="event.stopPropagation(); waProduct('${p ? p.id : r.productId}')">
          💬
        </button>
      </div>
    `;
  }

  if (wrap) {
    wrap.setAttribute("data-current-reel", r.id);
  }
}

function toggleReelLikeModal(id, el) {
  const icon = el.querySelector("span:first-child");
  const count = el.querySelector(".count");

  if (reelLikes[id]) {
    delete reelLikes[id];

    if (icon) icon.style.filter = "";
    if (count) count.textContent = "Curtir";
  } else {
    reelLikes[id] = 1;

    if (icon) icon.style.filter = "drop-shadow(0 0 6px red)";
    if (count) count.textContent = "1";

    toast("❤️ Curtido!", "success");
  }

  localStorage.setItem("lumina_reel_likes", JSON.stringify(reelLikes));
  renderReels();
  updateProfileStats();
}

function changeReel(dir) {
  const newIdx = currentReelIdx + dir;

  if (newIdx >= 0 && newIdx < reels.length) {
    currentReelIdx = newIdx;
    loadReel(currentReelIdx);
  }
}

function closeReel() {
  clearReelMedia();

  const modal = document.getElementById("reel-modal");
  if (modal) modal.classList.remove("open");

  document.body.style.overflow = "";
}

// ═══════════════════════════════════════════════
// 14. EVENTOS DE MODAL E TECLADO
// ═══════════════════════════════════════════════

document.addEventListener("click", event => {
  const reelModal = document.getElementById("reel-modal");
  const storyModal = document.getElementById("story-modal");

  if (reelModal && event.target === reelModal) {
    closeReel();
  }

  if (storyModal && event.target === storyModal) {
    closeStory();
  }
});

document.addEventListener("keydown", e => {
  const storyModal = document.getElementById("story-modal");
  const reelModal = document.getElementById("reel-modal");

  if (storyModal && storyModal.classList.contains("open")) {
    const author = document.getElementById("story-author-name");
    const isProfileStory = author && author.textContent === "lumina.store";

    if (e.key === "ArrowRight") {
      isProfileStory ? nextProfileStory() : nextStory();
    }

    if (e.key === "ArrowLeft") {
      isProfileStory ? prevProfileStory() : prevStory();
    }

    if (e.key === "Escape") {
      closeStory();
    }
  }

  if (reelModal && reelModal.classList.contains("open")) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      changeReel(1);
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      changeReel(-1);
    }

    if (e.key === "Escape") {
      closeReel();
    }
  }
});

// ═══════════════════════════════════════════════
// 15. INTEGRAÇÃO BACKEND — N8N & GOOGLE SHEETS
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

  if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.includes("http")) {
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: payload
    }).catch(err => console.error("Erro Google:", err));
  }

  if (N8N_WEBHOOK_URL && N8N_WEBHOOK_URL.includes("http")) {
    fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload
    }).catch(err => console.error("Erro n8n:", err));
  }
}

// ═══════════════════════════════════════════════
// 16. MODAL DE SORTEIO — BEM-VINDO
// ═══════════════════════════════════════════════

function openWelcomeModal() {
  const hasSeenModal = sessionStorage.getItem("lumina_welcome_seen");
  const modal = document.getElementById("welcome-modal");

  if (!hasSeenModal && modal) {
    modal.classList.add("open");
  }
}

function closeWelcomeModal() {
  const modal = document.getElementById("welcome-modal");

  if (modal) {
    modal.classList.remove("open");
  }

  sessionStorage.setItem("lumina_welcome_seen", "true");
}

function submitWelcomeLead() {
  const phoneInput = document.getElementById("welcome-phone");
  const phone = phoneInput ? phoneInput.value.trim() : "";

  if (!phone) {
    toast("⚠️ Por favor, insira seu telefone!", "info");
    return;
  }

  sendToBackend("CADASTRO_SORTEIO", "GERAL", "Acesso à Loja (Sorteio)", phone);

  toast("🎉 Cadastro realizado! Boa sorte!", "success");
  closeWelcomeModal();
}

// ═══════════════════════════════════════════════
// 17. MODAL DE PROVA SOCIAL DINÂMICO
// ═══════════════════════════════════════════════

const SOCIAL_PROOF_INTERVAL = 40000;
const SOCIAL_PROOF_VISIBLE_TIME = 5500;
const SOCIAL_PROOF_MIN_PEOPLE = 1;
const SOCIAL_PROOF_MAX_PEOPLE = 21;

const socialProofNames = [
  "Thiago",
  "Mariana",
  "Lucas",
  "Camila",
  "Rafael",
  "Amanda",
  "Bruno",
  "Juliana",
  "Felipe",
  "Bianca",
  "Gustavo",
  "Larissa",
  "Eduardo",
  "Patrícia",
  "Renan",
  "Isabela",
  "Marcelo",
  "Fernanda",
  "Diego",
  "Vanessa",
  "Rodrigo",
  "Aline",
  "Caio",
  "Natália",
  "André",
  "Priscila",
  "Leandro",
  "Carolina",
  "Vitor",
  "Beatriz"
];

const socialProofTemplates = [
  { icon: "👀", title: "LUMINA agora", type: "people" },
  { icon: "🛒", title: "Compra recente", type: "purchase" },
  { icon: "🔥", title: "Produto em alta", type: "hot" },
  { icon: "✨", title: "Movimento na loja", type: "movement" },
  { icon: "💎", title: "Interesse recente", type: "interest" }
];

let socialProofTimer = null;
let socialProofHideTimer = null;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomProduct() {
  if (products.length > 0) {
    return getRandomItem(products);
  }

  return {
    code: "PROD-001",
    name: "Produto especial"
  };
}

function buildSocialProofMessage() {
  const template = getRandomItem(socialProofTemplates);
  const name = getRandomItem(socialProofNames);
  const people = getRandomNumber(SOCIAL_PROOF_MIN_PEOPLE, SOCIAL_PROOF_MAX_PEOPLE);
  const product = getRandomProduct();

  let text = "";

  if (template.type === "people") {
    text = `${people} pessoa${people > 1 ? "s" : ""} estão vendo a LUMINA neste momento.`;
  }

  if (template.type === "purchase") {
    text = `${name} acabou de levar ${product.name}.`;
  }

  if (template.type === "hot") {
    text = `${people} pessoa${people > 1 ? "s" : ""} visualizaram ${product.name} recentemente.`;
  }

  if (template.type === "movement") {
    text = `${people} visitante${people > 1 ? "s" : ""} estão explorando os produtos da LUMINA agora.`;
  }

  if (template.type === "interest") {
    text = `${name} acabou de se interessar pelo ${product.code}.`;
  }

  return {
    icon: template.icon,
    title: template.title,
    text: text
  };
}

function showSocialProof() {
  const modal = document.getElementById("social-proof-modal");
  const icon = document.getElementById("social-proof-icon");
  const title = document.getElementById("social-proof-title");
  const text = document.getElementById("social-proof-text");

  if (!modal || !icon || !title || !text) return;

  const message = buildSocialProofMessage();

  icon.textContent = message.icon;
  title.textContent = message.title;
  text.textContent = message.text;

  modal.classList.add("show");

  clearTimeout(socialProofHideTimer);

  socialProofHideTimer = setTimeout(() => {
    modal.classList.remove("show");
  }, SOCIAL_PROOF_VISIBLE_TIME);
}

function closeSocialProof() {
  const modal = document.getElementById("social-proof-modal");

  if (modal) {
    modal.classList.remove("show");
  }

  clearTimeout(socialProofHideTimer);
}

function startSocialProof() {
  clearInterval(socialProofTimer);

  socialProofTimer = setInterval(() => {
    showSocialProof();
  }, SOCIAL_PROOF_INTERVAL);
}

// ═══════════════════════════════════════════════
// ESTATÍSTICAS DO PERFIL — SEGUIDORES, PRODUTOS E CURTIDAS
// ═══════════════════════════════════════════════

function formatProfileNumber(num) {
  const value = Number(num) || 0;

  if (value >= 1000000) {
    return (value / 1000000).toFixed(1).replace(".", ",") + " mi";
  }

  if (value >= 1000) {
    return (value / 1000).toFixed(1).replace(".", ",") + " mil";
  }

  return String(value);
}

function getTotalReelLikes() {
  return Object.values(reelLikes || {}).reduce((total, value) => {
    return total + Number(value || 0);
  }, 0);
}

function getTotalLikes() {
  return likedProducts.length + getTotalReelLikes();
}

function updateProfileStats() {
  const followersEl = document.getElementById("followers-count");
  const productsEl = document.getElementById("products-count-profile");
  const likesEl = document.getElementById("likes-count-profile");
  const followBtn = document.getElementById("follow-btn");

  if (followersEl) {
    followersEl.textContent = formatProfileNumber(followersCount);
  }

  if (productsEl) {
    productsEl.textContent = formatProfileNumber(products.length);
  }

  if (likesEl) {
    likesEl.textContent = formatProfileNumber(getTotalLikes());
  }

  if (followBtn) {
    if (isFollowingStore) {
      followBtn.textContent = "Seguindo";
      followBtn.classList.add("following");
    } else {
      followBtn.textContent = "Seguir";
      followBtn.classList.remove("following");
    }
  }
}

function toggleFollowStore() {
  if (isFollowingStore) {
    isFollowingStore = false;
    followersCount = Math.max(0, followersCount - 1);

    localStorage.setItem("lumina_is_following", "false");
    localStorage.setItem("lumina_followers_count", String(followersCount));

    toast("Você deixou de seguir a LUMINA.", "info");

    if (typeof sendToBackend === "function") {
      sendToBackend("DEIXOU_DE_SEGUIR", "PERFIL", "LUMINA", "");
    }
  } else {
    isFollowingStore = true;
    followersCount = followersCount + 1;

    localStorage.setItem("lumina_is_following", "true");
    localStorage.setItem("lumina_followers_count", String(followersCount));

    toast("✨ Agora você está seguindo a LUMINA!", "success");

    if (typeof sendToBackend === "function") {
      sendToBackend("NOVO_SEGUIDOR", "PERFIL", "LUMINA", "");
    }
  }

  updateProfileStats();
}
