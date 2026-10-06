const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 0,
});

const logoPath = "./dd logo.png";
const DATA_VERSION = "dropdeal-web-mockup-2026-05-30-b";

const categoryProfiles = [
  { name: "Elektronik", accent: "#3b7be9", icon: "PHONE", base: 9200 },
  { name: "Ev & Yaşam", accent: "#28ad68", icon: "HOME", base: 1550 },
  { name: "Moda", accent: "#f25555", icon: "WEAR", base: 1190 },
  { name: "Spor", accent: "#13a7b5", icon: "MOVE", base: 1850 },
  { name: "Kozmetik", accent: "#d05ce3", icon: "CARE", base: 740 },
  { name: "Market", accent: "#f3b51b", icon: "FOOD", base: 290 },
  { name: "Anne & Bebek", accent: "#ff8f4c", icon: "BABY", base: 980 },
  { name: "Oyun & Hobi", accent: "#5f6ee8", icon: "PLAY", base: 2250 },
];

const productNames = {
  "Elektronik": [
    "Nova X1 Akıllı Telefon",
    "Pulse Pro Kulaklık",
    "ViewTab 11 Tablet",
    "HomeCam Mini Kamera",
    "SwiftCharge Powerbank",
    "UltraSound Bluetooth Hoparlör",
    "DeskMate Mekanik Klavye",
    "ZenWatch Active Saat",
    "AirClean Akıllı Sensör",
  ],
  "Ev & Yaşam": [
    "Breeze Airfryer",
    "Luma Masa Lambası",
    "PureSleep Yastık",
    "AquaSteel Termos",
    "Nordic Kahve Makinesi",
    "CleanPro Dikey Süpürge",
    "SoftTouch Nevresim Seti",
    "Mira Organizer Raf",
    "Flow Seramik Tava",
  ],
  Moda: [
    "UrbanFlex Sneaker",
    "RainGuard Ceket",
    "DailyFit Jean",
    "SoftLine Tişört",
    "Mono Sırt Çantası",
    "AeroRun Eşofman",
    "Classic Deri Kemer",
    "CloudStep Sandalet",
    "Vista Güneş Gözlüğü",
  ],
  Spor: [
    "CoreGrip Dambıl Seti",
    "SprintPro Koşu Bandı",
    "HydroFit Matara",
    "Flex Yoga Matı",
    "TrailMax Bisiklet Kaskı",
    "PowerBand Direnç Seti",
    "MatchPlus Futbol Topu",
    "AquaWave Yüzücü Gözlüğü",
    "GripX Eldiven",
  ],
  Kozmetik: [
    "Glow Serum",
    "Daily SPF Krem",
    "Silk Touch Şampuan",
    "FreshMist Parfüm",
    "Natura Nem Maskesi",
    "ColorPop Ruj",
    "DeepCare Saç Yağı",
    "PureFace Temizleyici",
    "Calm Balm",
  ],
  Market: [
    "Barista Çekirdek Kahve",
    "Organik Zeytinyağı",
    "Fit Granola Paketi",
    "Protein Bar Kutu",
    "Soğuk Demleme Seti",
    "Glutensiz Makarna",
    "Premium Çikolata",
    "Kuru Meyve Karışımı",
    "Gourmet Baharat Seti",
  ],
  "Anne & Bebek": [
    "MiniCare Bebek Bezi",
    "SleepyNest Uyku Tulumu",
    "SafeRide Oto Koltuğu",
    "TinyCup Alıştırma Bardağı",
    "SoftBear Oyuncak",
    "BabyPure Islak Mendil",
    "GrowStep Mama Sandalyesi",
    "Warmy Battaniye",
    "Nappy Sırt Çantası",
  ],
  "Oyun & Hobi": [
    "GamePad Neo",
    "Builder Blok Seti",
    "SketchPro Çizim Tableti",
    "Puzzle 2000 Parça",
    "Studio Mikrofon",
    "Drone Mini V2",
    "Retro Arcade Konsol",
    "CraftBox Hobi Kiti",
    "Vinyl Başlangıç Seti",
  ],
};

const dropId = {
  id: "DD-8K4F-27Q9",
  device: "iPhone 15 - Drop App",
  linkedEmail: "m***@dropid.app",
  tier: "Gold",
  score: 742,
  kept: 31,
  broken: 2,
  promiseRate: 94,
  cancelRisk: 8,
};

const state = {
  route: "shop",
  language: "tr",
  products: [],
  cart: [],
  deals: [],
  openedDealItemId: null,
  selectedSellerProductId: null,
  sellerTab: "flow",
  filters: {
    search: "",
    category: "Tümü",
    sort: "recommended",
  },
};

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function productImage(profile, index) {
  const bg = profile.accent;
  const label = profile.icon;
  const shade = "#ffffff";
  const light = "#f8fafc";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="${light}" offset="0"/>
          <stop stop-color="${bg}" offset="1"/>
        </linearGradient>
      </defs>
      <rect width="640" height="420" fill="url(#g)"/>
      <circle cx="520" cy="60" r="132" fill="${shade}" opacity=".26"/>
      <circle cx="110" cy="360" r="170" fill="${shade}" opacity=".2"/>
      <rect x="190" y="98" width="260" height="210" rx="34" fill="${shade}" opacity=".78"/>
      <rect x="228" y="138" width="184" height="18" rx="9" fill="${bg}" opacity=".35"/>
      <rect x="228" y="180" width="184" height="88" rx="18" fill="${bg}" opacity=".22"/>
      <text x="320" y="246" text-anchor="middle" font-family="Arial, sans-serif" font-size="46" font-weight="800" fill="${bg}">${label}</text>
      <text x="34" y="382" font-family="Arial, sans-serif" font-size="30" font-weight="800" fill="${shade}" opacity=".88">DROP READY ${index}</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function buildProducts() {
  const products = [];
  let id = 1;

  categoryProfiles.forEach((profile, categoryIndex) => {
    productNames[profile.name].forEach((name, nameIndex) => {
      const seasonal = 0.88 + ((nameIndex + categoryIndex) % 8) * 0.045;
      const stock = 18 + ((id * 13) % 91);
      const demand = 42 + ((id * 17) % 58);
      const cost = Math.round(profile.base * (0.48 + (nameIndex % 4) * 0.05));
      const listPrice = Math.round(profile.base * (0.92 + (nameIndex % 5) * 0.13 + categoryIndex * 0.018));
      const competitorPrices = [0.94, 1.02, 1.08].map((factor, competitorIndex) => ({
        url: `https://rakip-${competitorIndex + 1}.example/${slugify(name)}`,
        price: Math.round(listPrice * factor + ((id + competitorIndex) % 7) * 17),
        updated: `${8 + competitorIndex} dk önce`,
      }));

      products.push({
        id: `P${String(id).padStart(3, "0")}`,
        name,
        brand: ["DropMall", "North", "Vega", "Miso", "Aster"][id % 5],
        category: profile.name,
        accent: profile.accent,
        image: productImage(profile, id),
        listPrice,
        cost,
        stock,
        demand,
        seasonal,
        competitorPrices,
      });
      id += 1;
    });
  });

  return products;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getProduct(id) {
  return state.products.find((product) => product.id === id);
}

function xEngine(product) {
  const competitorAverage = average(product.competitorPrices.map((item) => item.price));
  const stockPressure = product.stock > 78 ? -0.055 : product.stock < 28 ? 0.045 : 0;
  const demandPressure = product.demand > 74 ? 0.055 : product.demand < 48 ? -0.025 : 0.012;
  const seasonPressure = (product.seasonal - 1) * 0.08;
  const targetMargin = product.category === "Market" ? 0.16 : product.category === "Elektronik" ? 0.21 : 0.28;
  const floor = product.cost / (1 - targetMargin);
  const competitorAnchor = competitorAverage * 0.985;
  const raw = product.listPrice * (1 + stockPressure + demandPressure + seasonPressure);
  const xPrice = Math.max(floor, raw * 0.45 + competitorAnchor * 0.55);
  const margin = (xPrice - product.cost) / xPrice;
  const stockOpportunity = clamp((product.stock - 40) / 80, 0, 1);

  return {
    competitorAverage,
    stockPressure,
    demandPressure,
    seasonPressure,
    floor,
    xPrice: Math.round(xPrice),
    margin,
    stockOpportunity,
  };
}

function dropAiOffers(product, qty = 1) {
  const engine = xEngine(product);
  const baseByMonths = [1.2, 2.2, 4.0];
  const loyaltyBonus = clamp((dropId.score - 620) / 1300, 0, 0.45);
  const promisePenalty = dropId.broken * 0.14;
  const stockBonus = engine.stockOpportunity * 0.72;
  const demandPenalty = product.demand > 80 ? 0.36 : 0;
  const marginGuard = clamp((engine.margin - 0.14) * 13, 0.25, 2.7);

  return [30, 60, 90].map((days, index) => {
    const aiBoost = loyaltyBonus + stockBonus - promisePenalty - demandPenalty + index * 0.14;
    const discountPercent = clamp(baseByMonths[index] + aiBoost, 0.7, baseByMonths[index] + marginGuard);
    const discount = Math.round(engine.xPrice * qty * (discountPercent / 100));
    const finalPrice = Math.max(product.cost * qty, engine.xPrice * qty - discount);

    return {
      months: index + 1,
      days,
      discountPercent: Number(discountPercent.toFixed(1)),
      discount,
      finalPrice: Math.round(finalPrice),
      reason: `${dropId.tier} ${copy("sadakat", "loyalty")}, ${stockMood(product.stock)}, ${demandMood(product.demand)}`,
    };
  });
}

function earlyOrderQuote(deal) {
  const product = getProduct(deal.productId);
  if (!product) return null;

  const engine = xEngine(product);
  const currentMarketPrice = engine.xPrice * deal.qty;
  const progress = clamp(deal.elapsedDays / deal.termDays, 0, 1);
  const originalDiscount = deal.discountPercent;
  const earnedDiscount = originalDiscount * progress;
  const extraDiscountPercent = deal.extraDiscountPercent ?? (dropId.score >= 720 ? 0.5 : 0.25);
  const behaviorPenalty = deal.canceledBefore ? 0.5 : Math.min(dropId.broken * 0.04, 0.2);
  const finalDiscount = Math.max(0.3, earnedDiscount + extraDiscountPercent - behaviorPenalty);
  const currentPrice = Math.round(engine.xPrice * deal.qty * (1 - finalDiscount / 100));
  const startPrice = deal.startPrice ?? Math.round(currentMarketPrice * 0.82);

  return {
    progress,
    originalDiscount,
    earnedDiscount: Number(earnedDiscount.toFixed(1)),
    extraDiscountPercent,
    behaviorPenalty,
    discountPercent: Number(finalDiscount.toFixed(1)),
    currentMarketPrice,
    startPrice,
    currentPrice,
    daysLeft: Math.max(0, deal.termDays - deal.elapsedDays),
  };
}

function average(numbers) {
  return numbers.reduce((sum, value) => sum + value, 0) / Math.max(numbers.length, 1);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function copy(tr, en) {
  return state.language === "en" ? en : tr;
}

function setText(selector, tr, en) {
  const element = document.querySelector(selector);
  if (element) element.textContent = copy(tr, en);
}

function stockMood(stock) {
  if (stock <= 24) return copy("çok az stok", "very low stock");
  if (stock <= 48) return copy("az stok", "low stock");
  if (stock <= 76) return copy("orta stok", "balanced stock");
  return copy("çok stok", "high stock");
}

function demandMood(demand) {
  if (demand >= 82) return copy("talep çok yüksek", "very high demand");
  if (demand >= 64) return copy("talep güçlü", "strong demand");
  if (demand >= 48) return copy("talep dengeli", "balanced demand");
  return copy("talep sakin", "soft demand");
}

function categoryLabel(category) {
  const labels = {
    Tümü: "All",
    Elektronik: "Electronics",
    "Ev & Yaşam": "Home & Living",
    Moda: "Fashion",
    Spor: "Sports",
    Kozmetik: "Beauty",
    Market: "Grocery",
    "Anne & Bebek": "Baby",
    "Oyun & Hobi": "Gaming & Hobby",
  };
  return state.language === "en" ? labels[category] || category : category;
}

function renderCategoryOptions() {
  const categoryFilter = document.getElementById("categoryFilter");
  if (!categoryFilter) return;
  const categories = ["Tümü", ...categoryProfiles.map((item) => item.name)];
  categoryFilter.innerHTML = categories
    .map((category) => `<option value="${category}" ${state.filters.category === category ? "selected" : ""}>${categoryLabel(category)}</option>`)
    .join("");
}

function cancelRightText(deal) {
  const remaining = Math.max(0, 7 - deal.elapsedDays);
  if (remaining > 0) return copy(`İlk hafta iptal hakkı: ${remaining} gün kaldı`, `First-week cancel right: ${remaining} days left`);
  return copy("İlk hafta iptal hakkı kapandı", "First-week cancel right closed");
}

function init() {
  ensureDemoVersion();
  state.products = readStorage("dropdeal.products", null) || buildProducts();
  refreshProductImages();
  state.cart = readStorage("dropdeal.cart", [
    { productId: "P001", qty: 1, selectedOffer: null },
    { productId: "P014", qty: 2, selectedOffer: null },
  ]);
  state.deals = readStorage("dropdeal.deals", seededDeals());

  bindNavigation();
  bindFilters();
  bindLinkForm();
  bindVerification();
  bindLanguage();
  bindSellerInteractions();
  renderStaticIdentity();
  renderAll();
}

function ensureDemoVersion() {
  const current = localStorage.getItem("dropdeal.version");
  if (current === DATA_VERSION) return;
  localStorage.removeItem("dropdeal.products");
  localStorage.removeItem("dropdeal.cart");
  localStorage.removeItem("dropdeal.deals");
  localStorage.setItem("dropdeal.version", DATA_VERSION);
}

function refreshProductImages() {
  state.products.forEach((product, index) => {
    const profile = categoryProfiles.find((item) => item.name === product.category);
    if (!profile) return;
    product.accent = profile.accent;
    product.image = productImage(profile, index + 1);
  });
  writeStorage("dropdeal.products", state.products);
}

function seededDeals() {
  return [
    {
      id: "D-2401",
      productId: "P006",
      qty: 1,
      months: 3,
      termDays: 90,
      elapsedDays: 41,
      discountPercent: 4,
      extraDiscountPercent: 0.5,
      startPrice: 500,
      createdAt: Date.now() - 41 * 86400000,
      status: "active",
    },
    {
      id: "D-2402",
      productId: "P038",
      qty: 3,
      months: 2,
      termDays: 60,
      elapsedDays: 12,
      discountPercent: 2.4,
      extraDiscountPercent: 0.4,
      startPrice: 1280,
      createdAt: Date.now() - 12 * 86400000,
      status: "active",
    },
  ];
}

function bindNavigation() {
  document.querySelectorAll("[data-route]").forEach((element) => {
    element.addEventListener("click", () => setRoute(element.dataset.route));
  });
}

function setRoute(route) {
  state.route = route;
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.dataset.view === route);
  });
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.route === route);
  });
  window.location.hash = route;
  renderAll();
}

function bindFilters() {
  const categoryFilter = document.getElementById("categoryFilter");
  const linkProduct = document.getElementById("linkProduct");

  renderCategoryOptions();
  if (linkProduct) {
    linkProduct.innerHTML = state.products
      .slice(0, 28)
      .map((product) => `<option value="${product.id}">${product.name}</option>`)
      .join("");
  }

  document.getElementById("searchInput").addEventListener("input", (event) => {
    state.filters.search = event.target.value.trim().toLowerCase();
    renderProducts();
  });

  categoryFilter.addEventListener("change", (event) => {
    state.filters.category = event.target.value;
    renderProducts();
  });

  document.getElementById("sortFilter").addEventListener("change", (event) => {
    state.filters.sort = event.target.value;
    renderProducts();
  });
}

function bindLinkForm() {
  document.addEventListener("submit", (event) => {
    if (event.target.id !== "linkForm") return;
    event.preventDefault();
    const productId = document.getElementById("linkProduct").value;
    const urlInput = document.getElementById("competitorUrl");
    const priceInput = document.getElementById("competitorPrice");
    const product = getProduct(productId);
    const price = Number(priceInput.value);

    if (!product || !urlInput.value || !price) return;

    product.competitorPrices.unshift({
      url: urlInput.value,
      price,
      updated: "az önce",
    });
    product.competitorPrices = product.competitorPrices.slice(0, 6);
    writeStorage("dropdeal.products", state.products);
    urlInput.value = "";
    priceInput.value = "";
    renderSeller();
    renderProducts();
    renderCart();
  });
}

function bindLanguage() {
  document.getElementById("languageToggle").addEventListener("click", () => {
    state.language = state.language === "tr" ? "en" : "tr";
    document.documentElement.lang = state.language;
    renderAll();
  });
}

function bindSellerInteractions() {
  document.addEventListener("click", (event) => {
    const productButton = event.target.closest("[data-seller-product]");
    if (productButton) {
      state.selectedSellerProductId = productButton.dataset.sellerProduct;
      state.sellerTab = "flow";
      renderSeller();
      return;
    }

    const tabButton = event.target.closest("[data-seller-tab]");
    if (tabButton) {
      state.sellerTab = tabButton.dataset.sellerTab;
      renderSeller();
      return;
    }

    if (event.target.closest("[data-crm-connect]")) {
      showToast(copy("CRM sipariş hattı, ERP stok kartları ve Drop raporları bağlandı.", "CRM orders, ERP inventory cards and Drop reports are connected."));
    }

    const earlyButton = event.target.closest("[data-early]");
    if (earlyButton) {
      openEarlyOrderModal(earlyButton.dataset.early);
    }

    if (event.target.closest("[data-confirm-early]")) {
      confirmEarlyOrder(event.target.closest("[data-confirm-early]").dataset.confirmEarly);
    }
  });
}

function bindVerification() {
  document.getElementById("completeDropOrder").addEventListener("click", openVerification);
  document.getElementById("closeVerify").addEventListener("click", closeVerification);
  document.getElementById("closeEarlyOrder").addEventListener("click", closeEarlyOrderModal);
}

function renderStaticIdentity() {
  document.querySelector('.nav-button[data-route="shop"]').textContent = copy("Alışveriş", "Shop");
  document.querySelector('.nav-button[data-route="cart"]').textContent = copy("Sepet", "Cart");
  document.querySelector('.nav-button[data-route="app"]').textContent = "Drop App";
  document.querySelector('.nav-button[data-route="seller"]').textContent = copy("Satıcı Paneli", "Seller Panel");
  document.getElementById("languageToggle").innerHTML =
    state.language === "tr" ? "<span>TR</span><strong>EN</strong>" : "<span>EN</span><strong>TR</strong>";
  setText(".filters .panel-title span", "Market", "Market");
  setText(".filters label:nth-of-type(1) span", "Ürün ara", "Search product");
  setText(".filters label:nth-of-type(2) span", "Kategori", "Category");
  setText(".filters label:nth-of-type(3) span", "Sıralama", "Sort");
  setText(".drop-id-card .eyebrow", "Bağlı kimlik", "Linked identity");
  setText(".drop-id-card p", "Sadakat ve bozulan söz verisi Drop AI indirimlerini anlık etkiler.", "Loyalty and broken-promise data affect Drop AI discounts live.");
  renderCategoryOptions();
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.placeholder = copy("telefon, kahve, ayakkabı...", "phone, coffee, shoes...");
  const sortFilter = document.getElementById("sortFilter");
  if (sortFilter) {
    sortFilter.options[0].textContent = copy("Drop AI önceliği", "Drop AI priority");
    sortFilter.options[1].textContent = copy("Fiyat artan", "Price ascending");
    sortFilter.options[2].textContent = copy("Fiyat azalan", "Price descending");
  }
  setText("#shopView .section-heading .eyebrow", "Canlı mağaza mockup", "Live shop mockup");
  setText("#shopView .section-heading h1", "Drop Deal uyumlu alışveriş sitesi", "Drop Deal compatible shop");
  setText("#shopView .section-heading p", "Sepette ürün adedinin ve iptal aksiyonunun yanına Drop Deal butonu gelir; teklif, Drop ID ile doğrulanır.", "The Drop Deal button sits next to quantity and cancel actions in the cart; the offer is verified with Drop ID.");
  setText("#cartView .section-heading .eyebrow", "Sepet deneyimi", "Cart experience");
  setText("#cartView .section-heading h1", "Drop Deal teklifli sepet", "Cart with Drop Deal offers");
  setText("#cartView .section-heading p", "Logo butonuna basıldığında Drop AI ürün, X Engine ve Drop ID verilerini eşleştirir.", "When the logo button is pressed, Drop AI matches product, X Engine and Drop ID data.");
  setText(".checkout-panel .panel-title span", "Özet", "Summary");
  setText(".summary-list div:nth-child(1) span", "Ürün toplamı", "Product total");
  setText(".summary-list div:nth-child(2) span", "Drop indirim sözü", "Drop discount promise");
  setText(".summary-list div:nth-child(3) span", "Bugün ödenecek", "Due today");
  setText("#completeDropOrder", "Drop ID ile doğrula", "Verify with Drop ID");
  setText(".checkout-panel .fine-print", "Bu prototipte doğrulama telefon uygulaması animasyonu ile simüle edilir.", "In this prototype, verification is simulated with a phone-app animation.");
  setText("#appView .section-heading .eyebrow", "Müşteri tarafı", "Customer side");
  setText("#appView .section-heading h1", "Drop App durumu ve erken sipariş", "Drop App status and early order");
  setText("#appView .section-heading p", "Drop App, seçilen indirim sözünü, kalan süreyi, erken sipariş fiyatını ve Drop ID puan etkisini gösterir.", "Drop App shows the selected promise, remaining time, early order price and Drop ID score effect.");
  setText(".mobile-section-title", "Aktif Drop Deal işlemleri", "Active Drop Deal orders");
  document.getElementById("headerDropId").textContent = dropId.id;
  document.getElementById("sideDropId").textContent = dropId.id;
  document.getElementById("sideScore").textContent = dropId.score;
  document.getElementById("appDropId").textContent = dropId.id;
  document.getElementById("appTier").textContent = dropId.tier;
  document.getElementById("appScore").textContent = dropId.score;
  document.getElementById("appPromiseRate").textContent = `%${dropId.promiseRate}`;
}

function renderAll() {
  renderStaticIdentity();
  renderProducts();
  renderCart();
  renderApp();
  renderSeller();
  renderHeader();
}

function filteredProducts() {
  let products = [...state.products];
  const search = state.filters.search;

  if (search) {
    products = products.filter((product) => {
      return `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(search);
    });
  }

  if (state.filters.category !== "Tümü") {
    products = products.filter((product) => product.category === state.filters.category);
  }

  products.sort((a, b) => {
    const aEngine = xEngine(a);
    const bEngine = xEngine(b);

    if (state.filters.sort === "priceAsc") return aEngine.xPrice - bEngine.xPrice;
    if (state.filters.sort === "priceDesc") return bEngine.xPrice - aEngine.xPrice;
    return bEngine.stockOpportunity + b.demand / 100 - (aEngine.stockOpportunity + a.demand / 100);
  });

  return products;
}

function renderProducts() {
  const products = filteredProducts();
  document.getElementById("visibleCount").textContent = `${products.length} ${copy("ürün", "items")}`;
  document.getElementById("productGrid").innerHTML = products
    .map((product) => {
      const engine = xEngine(product);
      const maxOffer = dropAiOffers(product)[2];

      return `
        <article class="product-card">
          <div class="product-visual">
            <img src="${product.image}" alt="${product.name}" />
            <span class="product-badge">${product.category}</span>
          </div>
          <div class="product-body">
            <div>
              <h3>${product.name}</h3>
              <div class="product-meta">
                <span>${product.brand}</span>
                <span>${stockMood(product.stock)}</span>
              </div>
            </div>
            <div class="price-row">
              <strong>${currency.format(engine.xPrice)}</strong>
              <span>Drop ${maxOffer.discountPercent}%</span>
            </div>
            <button class="card-action" type="button" data-add="${product.id}">${copy("Sepete ekle", "Add to cart")}</button>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.add));
  });
}

function addToCart(productId) {
  const existing = state.cart.find((item) => item.productId === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ productId, qty: 1, selectedOffer: null });
  }
  persistCart();
  renderCart();
  renderHeader();
}

function persistCart() {
  writeStorage("dropdeal.cart", state.cart);
}

function persistDeals() {
  writeStorage("dropdeal.deals", state.deals);
}

function renderHeader() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelector(".cart-chip").innerHTML = `${copy("Sepet", "Cart")} <strong id="cartCount">${count}</strong>`;
}

function renderCart() {
  const container = document.getElementById("cartItems");

  if (!state.cart.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div>
          <h2>${copy("Sepet boş", "Cart is empty")}</h2>
          <p>${copy("Alışveriş ekranından birkaç ürün ekleyip Drop Deal tekliflerini deneyebilirsin.", "Add a few products from the shop and try Drop Deal offers.")}</p>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = state.cart
      .map((item) => {
        const product = getProduct(item.productId);
        if (!product) return "";
        const engine = xEngine(product);
        const offers = dropAiOffers(product, item.qty);
        const lineTotal = engine.xPrice * item.qty;
        const selectedKey = item.selectedOffer ? `${item.selectedOffer.months}` : "";
        const open = state.openedDealItemId === item.productId || item.selectedOffer;

        return `
          <article class="cart-item ${open ? "open" : ""}">
            <div class="cart-row">
              <div class="cart-thumb"><img src="${product.image}" alt="${product.name}" /></div>
              <div class="cart-copy">
                <h3>${product.name}</h3>
                <p>X Engine ${copy("fiyatı", "price")}: ${currency.format(engine.xPrice)} · ${copy("Rakip ortalaması", "Competitor average")}: ${currency.format(engine.competitorAverage)} · ${stockMood(product.stock)}</p>
              </div>
              <div class="cart-controls">
                <strong class="line-total">${currency.format(lineTotal)}</strong>
                <div class="control-row">
                  <div class="qty-control" aria-label="Adet">
                    <button type="button" data-qty="${product.id}" data-delta="-1">−</button>
                    <span>${item.qty}</span>
                    <button type="button" data-qty="${product.id}" data-delta="1">+</button>
                  </div>
                    <button class="remove-btn" type="button" data-remove="${product.id}" aria-label="${copy("Ürünü kaldır", "Remove product")}">×</button>
                  <button class="drop-logo-btn" type="button" data-toggle-deal="${product.id}" aria-label="${copy("Drop Deal teklifleri", "Drop Deal offers")}">
                    <img src="${logoPath}" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="deal-options">
              ${offers
                .map((offer) => {
                  const selected = selectedKey === `${offer.months}`;
                  return `
                    <button class="deal-option ${selected ? "selected" : ""}" type="button" data-select-deal="${product.id}" data-months="${offer.months}">
                      <span>${offer.months} ${copy("ay sonra al", "month promise")}</span>
                      <strong>${offer.discountPercent}% ${copy("indirim", "discount")}</strong>
                      <small>${currency.format(offer.finalPrice)} ${copy("final ücret", "final price")} · ${offer.reason}</small>
                    </button>
                  `;
                })
                .join("")}
            </div>
          </article>
        `;
      })
      .join("");
  }

  bindCartButtons();
  renderSummary();
}

function bindCartButtons() {
  document.querySelectorAll("[data-qty]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.cart.find((cartItem) => cartItem.productId === button.dataset.qty);
      if (!item) return;
      item.qty += Number(button.dataset.delta);
      if (item.qty <= 0) {
        state.cart = state.cart.filter((cartItem) => cartItem.productId !== item.productId);
      } else {
        item.selectedOffer = null;
      }
      persistCart();
      renderCart();
      renderHeader();
    });
  });

  document.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      state.cart = state.cart.filter((item) => item.productId !== button.dataset.remove);
      persistCart();
      renderCart();
      renderHeader();
    });
  });

  document.querySelectorAll("[data-toggle-deal]").forEach((button) => {
    button.addEventListener("click", () => {
      state.openedDealItemId = state.openedDealItemId === button.dataset.toggleDeal ? null : button.dataset.toggleDeal;
      renderCart();
    });
  });

  document.querySelectorAll("[data-select-deal]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.cart.find((cartItem) => cartItem.productId === button.dataset.selectDeal);
      const product = getProduct(button.dataset.selectDeal);
      if (!item || !product) return;
      const offer = dropAiOffers(product, item.qty).find((option) => option.months === Number(button.dataset.months));
      item.selectedOffer = offer;
      state.openedDealItemId = item.productId;
      persistCart();
      renderCart();
    });
  });
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const product = getProduct(item.productId);
    return product ? sum + xEngine(product).xPrice * item.qty : sum;
  }, 0);
}

function selectedDiscount() {
  return state.cart.reduce((sum, item) => {
    return sum + (item.selectedOffer ? item.selectedOffer.discount : 0);
  }, 0);
}

function renderSummary() {
  const subtotal = cartSubtotal();
  const discount = selectedDiscount();
  document.getElementById("cartTotal").textContent = currency.format(Math.max(0, subtotal - discount));
  document.getElementById("summarySubtotal").textContent = currency.format(subtotal);
  document.getElementById("summaryDrop").textContent = `-${currency.format(discount)}`;
  document.getElementById("summaryDue").textContent = currency.format(Math.max(0, subtotal - discount));
}

function openVerification() {
  const selected = state.cart.filter((item) => item.selectedOffer);
  if (!selected.length) {
    state.openedDealItemId = state.cart[0]?.productId || null;
    renderCart();
    return;
  }

  const modal = document.getElementById("verificationModal");
  const bar = document.getElementById("verifyBar");
  const text = document.getElementById("verifyText");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  bar.style.width = "8%";
  text.textContent = `${dropId.device} ile token eşleştiriliyor...`;

  setTimeout(() => {
    bar.style.width = "52%";
    text.textContent = "Drop ID sadakat ve söz geçmişi doğrulandı.";
  }, 700);

  setTimeout(() => {
    bar.style.width = "100%";
    text.textContent = "İşlem tamamlandı. Drop App içinde takip edebilirsin.";
    selected.forEach((item) => {
      const product = getProduct(item.productId);
      const existing = state.deals.find((deal) => deal.productId === item.productId && deal.status === "active");
      if (existing) return;
      state.deals.unshift({
        id: `D-${Math.floor(3000 + Math.random() * 6000)}`,
        productId: item.productId,
        qty: item.qty,
        months: item.selectedOffer.months,
        termDays: item.selectedOffer.days,
        elapsedDays: 0,
        discountPercent: item.selectedOffer.discountPercent,
        extraDiscountPercent: dropId.score >= 720 ? 0.5 : 0.25,
        startPrice: product ? xEngine(product).xPrice * item.qty : item.selectedOffer.finalPrice,
        createdAt: Date.now(),
        status: "active",
      });
    });
    state.cart = [];
    persistDeals();
    persistCart();
    renderAll();
  }, 1500);
}

function closeVerification() {
  const modal = document.getElementById("verificationModal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function renderApp() {
  const deals = state.deals.filter((deal) => deal.status === "active");
  const appDeals = document.getElementById("appDeals");
  appDeals.innerHTML = deals.length
    ? deals
        .map((deal) => {
          const product = getProduct(deal.productId);
          const quote = earlyOrderQuote(deal);
          if (!product || !quote) return "";

          return `
            <article class="app-deal-card">
              <h3>${product.name}</h3>
              <div class="deal-meta">
                <span>${deal.months} ${copy("ay sözü", "month promise")} · ${deal.qty} ${copy("adet", "qty")}</span>
                <strong>${quote.daysLeft} ${copy("gün kaldı", "days left")}</strong>
              </div>
              <div class="progress-track"><span style="width:${Math.round(quote.progress * 100)}%"></span></div>
              <div class="deal-meta">
                <span>${copy("Kazanılan indirim", "Earned discount")}: ${quote.discountPercent}%</span>
                <strong>${currency.format(quote.currentPrice)}</strong>
              </div>
              ${renderCancelTimeline(deal)}
              <button class="early-btn" type="button" data-early="${deal.id}">${deal.earlyRequested ? copy("Erken sipariş talebi alındı", "Early order requested") : copy("Erken sipariş ver", "Order early")}</button>
            </article>
          `;
        })
        .join("")
    : `<div class="empty-state"><p>${copy("Henüz aktif Drop Deal işlemi yok.", "No active Drop Deal order yet.")}</p></div>`;

  const totalSaved = deals.reduce((sum, deal) => {
    const product = getProduct(deal.productId);
    if (!product) return sum;
    return sum + Math.round(xEngine(product).xPrice * deal.qty * (deal.discountPercent / 100));
  }, 0);

  document.getElementById("customerInsights").innerHTML = [
    {
      label: copy("Toplam bekleyen avantaj", "Total pending advantage"),
      value: currency.format(totalSaved),
      text: copy("Aktif sözlerde kilitlenen indirim değeri.", "Discount value locked in active promises."),
    },
    {
      label: copy("Erken sipariş mantığı", "Early order logic"),
      value: copy("gün bazlı", "day based"),
      text: copy("Drop AI geçen gün, söz oranı, güncel X fiyatı ve ek sadakati birlikte hesaplar.", "Drop AI combines elapsed days, promised rate, current X price and extra loyalty."),
    },
    {
      label: copy("Ceza etkisi", "Penalty effect"),
      value: `-${dropId.broken * 0.18}%`,
      text: copy("Söz bozma tekrarlandıkça Drop ID puanı ve gelecek indirim tavanı düşer.", "Repeated broken promises reduce Drop ID score and future discount ceiling."),
    },
  ]
    .map(
      (card) => `
        <article class="insight-card">
          <span>${card.label}</span>
          <strong>${card.value}</strong>
          <p>${card.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderCancelTimeline(deal) {
  const lockPoint = 18;
  const progress = clamp(deal.elapsedDays / deal.termDays, 0, 1) * 100;
  const freeActive = deal.elapsedDays < 7;

  return `
    <div class="cancel-timeline ${freeActive ? "free-active" : "locked"}">
      <div class="timeline-copy">
        <strong>${cancelRightText(deal)}</strong>
        <span>${copy("İlk 7 gün indirimsiz erken iptal hakkı", "First 7 days: free cancel without penalty")}</span>
      </div>
      <div class="timeline-track">
        <span class="timeline-free" style="width:${lockPoint}%"></span>
        <span class="timeline-progress" style="width:${progress}%"></span>
        <i class="timeline-dot start"></i>
        <i class="timeline-dot lock" style="left:${lockPoint}%"></i>
        <i class="timeline-dot end"></i>
        <i class="timeline-runner" style="left:${progress}%"></i>
      </div>
      <div class="timeline-labels">
        <span class="label-start">0</span>
        <span class="label-lock" style="left:${lockPoint}%">${copy("7. gün", "day 7")}</span>
        <span class="label-end">${deal.termDays}. ${copy("gün", "day")}</span>
      </div>
    </div>
  `;
}

function openEarlyOrderModal(dealId) {
  const deal = state.deals.find((item) => item.id === dealId);
  const product = deal ? getProduct(deal.productId) : null;
  const quote = deal ? earlyOrderQuote(deal) : null;
  if (!deal || !product || !quote) return;

  const modal = document.getElementById("earlyOrderModal");
  const content = document.getElementById("earlyOrderContent");
  content.innerHTML = `
    <div class="early-flow" data-stage="1">
      <section class="early-stage stage-1">
        <h2 id="earlyTitle">${copy("Emin misin?", "Are you sure?")}</h2>
        <div class="early-clock">
          <svg viewBox="0 0 160 160" aria-hidden="true">
            <circle cx="80" cy="80" r="58"></circle>
            <path d="M80 112 L80 54 M80 54 L54 82 M80 54 L106 82"></path>
            <path class="stage-arc" d="M48 116 Q70 134 100 120"></path>
          </svg>
          <span class="clock-zero">0</span>
          <span class="clock-end">${deal.termDays}</span>
        </div>
        <strong>${deal.elapsedDays} ${copy("gün oldu", "days passed")}</strong>
      </section>

      <section class="early-stage stage-2">
        <h2>${copy("Emin misin?", "Are you sure?")}</h2>
        <strong class="days-eq">${deal.elapsedDays} ${copy("gün", "days")} =</strong>
        <strong class="discount-big">%${quote.discountPercent}</strong>
        <p>${copy("Hak edilen indirim", "Earned discount")}: %${quote.earnedDiscount} + ${copy("ek sadakat", "extra loyalty")} %${quote.extraDiscountPercent}</p>
      </section>

      <section class="early-stage stage-3">
        <h2>${copy("Emin misin?", "Are you sure?")}</h2>
        <div class="price-drop">
          <span>${currency.format(quote.currentMarketPrice)}</span>
          <i></i>
          <strong>${currency.format(quote.currentPrice)}</strong>
        </div>
        <div class="early-final-copy">
          <p>${copy("Alışveriş başında X", "Initial X")} ${currency.format(quote.startPrice)} · ${copy("bugünkü toplam indirim", "today total discount")} %${quote.discountPercent}</p>
        </div>
        <div class="sketch-actions">
          <button class="secondary-action" type="button" id="cancelEarlyOrder">${copy("no", "no")}</button>
          <button class="primary-action" type="button" data-confirm-early="${deal.id}">${copy("yes", "yes")}</button>
        </div>
      </section>
    </div>
    <div class="early-detail-strip">
      <div><span>${copy("Geçen süre", "Elapsed")}</span><strong>${deal.elapsedDays} ${copy("gün", "days")}</strong></div>
      <div><span>${copy("Güncel X", "Current X")}</span><strong>${currency.format(quote.currentMarketPrice)}</strong></div>
      <div><span>${copy("Bugünkü fiyat", "Today price")}</span><strong>${currency.format(quote.currentPrice)}</strong></div>
    </div>
    ${renderCancelTimeline(deal)}
  `;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("cancelEarlyOrder").addEventListener("click", closeEarlyOrderModal);

  const flow = content.querySelector(".early-flow");
  clearTimeout(openEarlyOrderModal.stageTimerA);
  clearTimeout(openEarlyOrderModal.stageTimerB);
  openEarlyOrderModal.stageTimerA = setTimeout(() => {
    if (flow) flow.dataset.stage = "2";
  }, 650);
  openEarlyOrderModal.stageTimerB = setTimeout(() => {
    if (flow) flow.dataset.stage = "3";
  }, 1320);
}

function closeEarlyOrderModal() {
  const modal = document.getElementById("earlyOrderModal");
  clearTimeout(openEarlyOrderModal.stageTimerA);
  clearTimeout(openEarlyOrderModal.stageTimerB);
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function confirmEarlyOrder(dealId) {
  const deal = state.deals.find((item) => item.id === dealId);
  if (!deal) return;
  deal.earlyRequested = true;
  persistDeals();
  closeEarlyOrderModal();
  renderApp();
  showToast(copy("Erken sipariş talebi Drop App içinde oluşturuldu.", "Early order request was created in Drop App."));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function renderSeller() {
  const workspace = document.getElementById("sellerWorkspace");
  if (!workspace) return;

  const rows = state.products.slice(0, 14);
  if (!state.selectedSellerProductId || !getProduct(state.selectedSellerProductId)) {
    state.selectedSellerProductId = rows[0]?.id;
  }

  const selected = getProduct(state.selectedSellerProductId) || rows[0];
  const engine = xEngine(selected);
  const offers = dropAiOffers(selected);
  const trackedLinks = state.products.reduce((sum, product) => sum + product.competitorPrices.length, 0);
  const weeklyReport = reportRows("weekly");
  const monthlyReport = reportRows("monthly");

  workspace.innerHTML = `
    <div class="seller-hero">
      <div>
        <span class="eyebrow">${copy("Satıcı operasyonu", "Seller operations")}</span>
        <h1>${copy("X Engine solda, Drop kararları sağda", "X Engine left, Drop decisions right")}</h1>
        <p>${copy("Bir ürüne tıklayınca X Engine yolu belirginleşir; sağ tarafta aynı ürünün Drop AI, Drop ID ve rezervasyon etkisi parlar.", "Clicking a product highlights its X Engine path; the Drop AI, Drop ID and reservation effects glow on the right.")}</p>
      </div>
      <div class="seller-tabs">
        <button class="${state.sellerTab === "flow" ? "active" : ""}" type="button" data-seller-tab="flow">${copy("Ürün yolu", "Product path")}</button>
        <button class="${state.sellerTab === "reports" ? "active" : ""}" type="button" data-seller-tab="reports">${copy("Raporlar", "Reports")}</button>
        <button class="crm-btn" type="button" data-crm-connect>${copy("CRM / ERP ile bağla", "Connect CRM / ERP")}</button>
      </div>
    </div>

    ${
      state.sellerTab === "reports"
        ? renderSellerReports(weeklyReport, monthlyReport)
        : `
          <div class="seller-split">
            <section class="x-engine-column">
              <div class="panel-title">
                <span>X Engine</span>
                <strong>${trackedLinks} ${copy("rakip linki", "competitor links")}</strong>
              </div>
              <form id="linkForm" class="link-form seller-link-form">
                <label>
                  <span>${copy("Ürün", "Product")}</span>
                  <select id="linkProduct">
                    ${state.products
                      .slice(0, 28)
                      .map((product) => `<option value="${product.id}" ${product.id === selected.id ? "selected" : ""}>${product.name}</option>`)
                      .join("")}
                  </select>
                </label>
                <label>
                  <span>${copy("Rakip linki", "Competitor link")}</span>
                  <input id="competitorUrl" type="url" placeholder="https://rakip.com/urun" />
                </label>
                <label>
                  <span>${copy("Rakip fiyatı", "Competitor price")}</span>
                  <input id="competitorPrice" type="number" min="1" step="1" placeholder="1299" />
                </label>
                <button type="submit">${copy("İzlemeye al", "Track")}</button>
              </form>
              <div class="seller-product-list">
                ${rows.map((product) => renderSellerProduct(product, selected.id)).join("")}
              </div>
            </section>

            <section class="drop-column">
              <div class="selected-path">
                <span>X Engine</span>
                <i></i>
                <strong>${selected.name}</strong>
                <i></i>
                <span>Drop AI</span>
              </div>
              <div class="drop-focus-card">
                <span class="eyebrow">${copy("Seçili ürün", "Selected product")}</span>
                <h2>${selected.name}</h2>
                <div class="drop-focus-metrics">
                  <div><span>X fiyat</span><strong>${currency.format(engine.xPrice)}</strong></div>
                  <div><span>${copy("Stok dili", "Stock signal")}</span><strong>${stockMood(selected.stock)}</strong></div>
                  <div><span>${copy("Rakip ort.", "Competitor avg.")}</span><strong>${currency.format(engine.competitorAverage)}</strong></div>
                </div>
              </div>
              <div class="drop-offer-grid">
                ${offers
                  .map(
                    (offer) => `
                      <article class="drop-offer-card">
                        <span>${offer.months} ${copy("ay", "months")}</span>
                        <strong>%${offer.discountPercent}</strong>
                        <p>${offer.reason}</p>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
              <div class="drop-signal-log">
                <article><strong>Drop ID</strong><span>${dropId.id.slice(0, 5)}****${dropId.id.slice(-2)} · ${copy("sadakat puanı", "loyalty score")} ${dropId.score}</span></article>
                <article><strong>Drop App</strong><span>${copy("Bu ürün için erken sipariş olasılığı", "Early order likelihood for this product")} %${earlyChance(selected)}</span></article>
                <article><strong>Drop AI</strong><span>${copy("Kar, sadakat ve stok dili birlikte hesaplandı.", "Profit, loyalty and stock signal were calculated together.")}</span></article>
              </div>
            </section>
          </div>
        `
    }
  `;
}

function renderSellerProduct(product, selectedId) {
  const engine = xEngine(product);
  const selected = product.id === selectedId;
  const dim = selectedId && !selected ? "is-dim" : "";

  return `
    <button class="seller-product ${selected ? "selected" : ""} ${dim}" type="button" data-seller-product="${product.id}">
      <span>${product.category}</span>
      <strong>${product.name}</strong>
      <small>${currency.format(engine.xPrice)} · ${stockMood(product.stock)} · ${currency.format(engine.competitorAverage)}</small>
    </button>
  `;
}

function renderSellerReports(weeklyRows, monthlyRows) {
  const monthlyDemand = monthlyDemandRows();
  return `
    <div class="reports-board">
      <section class="report-section">
        <div class="panel-title">
          <span>${copy("Haftalık rapor", "Weekly report")}</span>
          <strong>${copy("anlık görünüm", "live view")}</strong>
        </div>
        ${weeklyRows.map(renderLiveReportRow).join("")}
      </section>
      <section class="report-section">
        <div class="panel-title">
          <span>${copy("Aylık rapor", "Monthly report")}</span>
          <strong>${copy("tahminli", "forecast")}</strong>
        </div>
        ${monthlyRows.map(renderLiveReportRow).join("")}
      </section>
    </div>
    <section class="report-section monthly-demand-section">
      <div class="panel-title">
        <span>${copy("Aylara göre talep", "Demand by month")}</span>
        <strong>${copy("değişken tahmin", "variable forecast")}</strong>
      </div>
      <div class="month-demand-grid">
        ${monthlyDemand.map(renderMonthDemandCard).join("")}
      </div>
    </section>
  `;
}

function renderLiveReportRow(row) {
  return `
    <article class="live-report-row">
      <div>
        <strong>${row.product.name}</strong>
        <span>${row.product.category} · ${stockMood(row.product.stock)}</span>
      </div>
      <div><span>${copy("Kesin sipariş:", "Confirmed:")}</span><strong>${row.confirmed}</strong></div>
      <div><span>${copy("Erkene çekme ihtimali:", "Early pull chance:")}</span><strong>%${row.early}</strong></div>
      <p>${copy("Bu rapor kişisel veriyi maskeleyerek Drop ID davranışını toplu okur.", "This report masks personal data and reads Drop ID behavior in aggregate.")}</p>
    </article>
  `;
}

function reportRows(period) {
  const multiplier = period === "monthly" ? 4 : 1;
  return state.products.slice(0, 6).map((product, index) => {
    const activeDealQty = state.deals
      .filter((deal) => deal.productId === product.id || index < 2)
      .reduce((sum, deal) => sum + deal.qty, 0);
    return {
      product,
      confirmed: Math.max(1, activeDealQty * multiplier + ((index + 1) % 3)),
      early: Math.min(82, earlyChance(product) + (period === "monthly" ? 8 : 0)),
    };
  });
}

function monthlyDemandRows() {
  const monthNames =
    state.language === "en" ? ["June", "July", "August", "September"] : ["Haziran", "Temmuz", "Ağustos", "Eylül"];
  return state.products.slice(0, 4).map((product, productIndex) => {
    const base = Math.round(product.demand / 5) + productIndex * 2;
    const values = monthNames.map((month, monthIndex) => {
      const wave = ((product.id.charCodeAt(1) + productIndex * 7 + monthIndex * 11) % 17) - 5;
      const seasonalKick = monthIndex === 1 && product.category === "Spor" ? 8 : monthIndex === 2 && product.category === "Elektronik" ? 6 : 0;
      return {
        month,
        demand: Math.max(4, base + wave + seasonalKick + monthIndex * (productIndex % 2 === 0 ? 2 : -1)),
      };
    });
    return { product, values };
  });
}

function renderMonthDemandCard(row) {
  const max = Math.max(...row.values.map((item) => item.demand), 1);
  return `
    <article class="month-demand-card">
      <h3>${row.product.name}</h3>
      ${row.values
        .map(
          (item) => `
            <div class="month-demand-row">
              <span>${item.month}</span>
              <div class="bar"><span style="width:${Math.round((item.demand / max) * 100)}%"></span></div>
              <strong>${item.demand}</strong>
            </div>
          `,
        )
        .join("")}
    </article>
  `;
}

function earlyChance(product) {
  const engine = xEngine(product);
  return Math.round(clamp(engine.stockOpportunity * 46 + dropId.promiseRate * 0.32 + product.demand * 0.18, 18, 88));
}

init();
