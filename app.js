const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 0,
});

const logoPath = "./dd logo.png";
const DATA_VERSION = "dropdeal-web-mockup-2026-10-09-local-effects";
const DEMO_START_SCORE = 952;

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
  score: DEMO_START_SCORE,
  kept: 31,
  broken: 2,
  promiseRate: 94,
  cancelRisk: 8,
  discountAdjustment: 0,
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
  appTab: "active",
  focusedDealId: null,
  activity: [],
  highlightedActionId: null,
  earlyStep: 1,
  earlyPlaying: false,
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
  return [30, 60, 90].map((days) => offerForDays(product, qty, days));
}

function offerForDays(product, qty, days, identity = dropId) {
  const engine = xEngine(product);
  const baseRate = days <= 30 ? 1.2 * days / 30 : days <= 60 ? 1.2 + (days - 30) / 30 : 2.2 + (days - 60) * 0.06;
  const loyaltyBonus = clamp((identity.score - 620) / 1300, 0, 0.45) + identity.discountAdjustment;
  const promisePenalty = identity.broken * 0.14;
  const stockBonus = engine.stockOpportunity * 0.72;
  const demandPenalty = product.demand > 80 ? 0.36 : 0;
  const marginGuard = clamp((engine.margin - 0.14) * 13, 0.25, 2.7);

    const aiBoost = loyaltyBonus + stockBonus - promisePenalty - demandPenalty + Math.max(0, days / 30 - 1) * 0.14;
    const discountPercent = Number(clamp(baseRate + aiBoost, 0.4, Math.min(8, baseRate + marginGuard)).toFixed(1));
    const discount = Math.round(engine.xPrice * qty * (discountPercent / 100));
    const finalPrice = Math.max(product.cost * qty, engine.xPrice * qty - discount);

    return {
      months: Number((days / 30).toFixed(1)),
      days,
      discountPercent: Number(discountPercent.toFixed(1)),
      discount,
      finalPrice: Math.round(finalPrice),
      reason: `${identity.tier} ${copy("sadakat", "loyalty")}, ${stockMood(product.stock)}, ${demandMood(product.demand)}`,
      deliveryDate: dateForDays(days),
      custom: ![30, 60, 90].includes(days),
    };
}

function dateForDays(days, from = new Date()) {
  const date = new Date(from);
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function daysUntil(value) {
  const parts = value.split("-").map(Number);
  if (parts.length !== 3 || parts.some((part) => !Number.isFinite(part))) return NaN;
  const today = new Date();
  return Math.round((Date.UTC(parts[0], parts[1] - 1, parts[2]) - Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())) / 86400000);
}

function dateLabel(value) {
  const date = typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T12:00:00`) : new Date(value);
  return new Intl.DateTimeFormat(state.language === "en" ? "en-GB" : "tr-TR", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

function termLabel(deal) {
  return [30, 60, 90].includes(deal.termDays) ? `${deal.months} ${copy("ay", "months")}` : `${deal.termDays} ${copy("gün", "days")}`;
}

function earlyOrderQuote(deal) {
  const product = getProduct(deal.productId);
  if (!product) return null;

  const engine = xEngine(product);
  const currentMarketPrice = engine.xPrice * deal.qty;
  const progress = clamp(deal.elapsedDays / deal.termDays, 0, 1);
  const originalDiscount = deal.discountPercent;
  const earnedDiscount = originalDiscount * progress;
  const extraDiscountPercent = Number(Math.max(0, (deal.extraDiscountPercent ?? (dropId.score >= 720 ? 0.5 : 0.25)) + dropId.discountAdjustment).toFixed(2));
  const behaviorPenalty = progress === 1 ? 0 : deal.canceledBefore ? 0.5 : Math.min(dropId.broken * 0.04, 0.2);
  const finalDiscount = Math.round((Math.max(0, earnedDiscount + extraDiscountPercent - behaviorPenalty) + Number.EPSILON) * 10) / 10;
  const currentPrice = Math.round(engine.xPrice * deal.qty * (1 - finalDiscount / 100));
  const startPrice = deal.startPrice ?? currentMarketPrice;

  return {
    progress,
    originalDiscount,
    earnedDiscount: Number(earnedDiscount.toFixed(2)),
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
  state.products = readStorage("dropdeal.products", null) || buildProducts();
  refreshProductImages();
  ensureDemoVersion();
  state.cart = readStorage("dropdeal.cart", [
    { productId: "P001", qty: 1, selectedOffer: null },
    { productId: "P014", qty: 2, selectedOffer: null },
  ]);
  state.deals = readStorage("dropdeal.deals", seededDeals());
  if (localStorage.getItem("dropdeal.price-demo-version") !== "modest-v1") {
    const examples = new Map(seededDeals().map((deal) => [deal.id, deal]));
    state.deals.forEach((deal) => {
      const example = deal.demo && examples.get(deal.id);
      if (example) { deal.startPrice = example.startPrice; deal.priceFactor = example.priceFactor; }
    });
    persistDeals();
    localStorage.setItem("dropdeal.price-demo-version", "modest-v1");
  }
  state.activity = readStorage("dropdeal.activity", []);
  const savedIdentity = readStorage("dropdeal.identity", {});
  ["kept", "broken", "promiseRate", "discountAdjustment"].forEach((key) => {
    if (Number.isFinite(savedIdentity[key])) dropId[key] = savedIdentity[key];
  });
  // Each page load starts a new score demo without clearing order history.
  dropId.score = DEMO_START_SCORE;
  dropId.tier = dropId.score >= 700 ? "Gold" : dropId.score >= 500 ? "Silver" : "Bronze";
  state.cart.forEach((item) => {
    if (item.selectedOffer) item.selectedOffer = { ...offerForDays(getProduct(item.productId), item.qty, item.selectedOffer.days), custom: item.selectedOffer.custom };
  });
  persistCart();

  bindNavigation();
  bindFilters();
  bindLinkForm();
  bindVerification();
  bindLanguage();
  bindSellerInteractions();
  document.getElementById("closeTutorial").addEventListener("click", closeTutorial);
  document.querySelector("[data-close-tutorial]").addEventListener("click", closeTutorial);
  document.getElementById("showTutorial").addEventListener("click", openTutorial);
  document.addEventListener("keydown", handleDialogKeyboard);
  renderStaticIdentity();
  renderAll();
  setRoute(["shop", "cart", "app", "seller"].includes(location.hash.slice(1)) ? location.hash.slice(1) : "shop");
  openTutorial();
}

function openTutorial() {
  const banner = document.getElementById("tutorialBanner");
  banner.hidden = false;
  banner.setAttribute("aria-hidden", "false");
  document.querySelector("main").inert = true;
  document.querySelector("header").inert = true;
  document.body.classList.add("dialog-open");
  document.getElementById("closeTutorial").focus();
}

function closeTutorial() {
  const banner = document.getElementById("tutorialBanner");
  banner.hidden = true;
  banner.setAttribute("aria-hidden", "true");
  document.querySelector("main").inert = false;
  document.querySelector("header").inert = false;
  document.body.classList.remove("dialog-open");
  document.getElementById("showTutorial").focus();
}

function handleDialogKeyboard(event) {
  const intro = document.getElementById("tutorialBanner");
  const early = document.getElementById("earlyOrderModal");
  const cancel = document.getElementById("cancelOrderModal");
  const dialog = !intro.hidden ? intro : cancel.classList.contains("show") ? cancel : early.classList.contains("show") ? early : null;
  if (!dialog) return;
  if (event.key === "Escape") { event.preventDefault(); dialog === intro ? closeTutorial() : dialog === cancel ? closeCancelDialog() : closeEarlyOrderModal(); return; }
  if (event.key !== "Tab") return;
  const focusable = [...dialog.querySelectorAll("button:not(:disabled), [href], input, select")].filter((element) => element.getClientRects().length && !element.closest("[inert]"));
  const first = focusable[0];
  const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
}

function ensureDemoVersion() {
  const current = localStorage.getItem("dropdeal.version");
  if (current === DATA_VERSION) return;
  const existing = readStorage("dropdeal.deals", []).filter((deal) => !deal.demo && !["D-2401", "D-2402"].includes(deal.id));
  writeStorage("dropdeal.deals", [...existing, ...seededDeals()]);
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
  const scenarios = [
    { productId: "P014", elapsedDays: 3, termDays: 30, discountPercent: 1.3, priceFactor: 0.97 },
    { productId: "P014", elapsedDays: 27, termDays: 60, discountPercent: 2.6, priceFactor: 0.91 },
    { productId: "P014", elapsedDays: 61, termDays: 90, discountPercent: 4.1, priceFactor: 0.84 },
    { productId: "P038", elapsedDays: 41, termDays: 90, discountPercent: 4.0, priceFactor: 0.96 },
    { productId: "P006", elapsedDays: 87, termDays: 90, discountPercent: 4.2, priceFactor: 1.06 },
    { productId: "P001", qty: 2, elapsedDays: 11, termDays: 30, discountPercent: 1.5, priceFactor: 0.94 },
    { productId: "P010", qty: 3, elapsedDays: 54, termDays: 60, discountPercent: 2.5, priceFactor: 0.89 },
    { productId: "P019", qty: 4, elapsedDays: 59, termDays: 60, discountPercent: 2.3, priceFactor: 0.95 },
    { productId: "P028", qty: 2, elapsedDays: 25, termDays: 30, discountPercent: 1.6, priceFactor: 1.04 },
    { productId: "P046", qty: 5, elapsedDays: 26, termDays: 30, discountPercent: 1.4, priceFactor: 0.92 },
    { productId: "P055", qty: 2, elapsedDays: 30, termDays: 30, discountPercent: 1.6, priceFactor: 0.98 },
    { productId: "P064", qty: 3, elapsedDays: 60, termDays: 60, discountPercent: 2.6, priceFactor: 0.93, status: "completed" },
    { productId: "P014", elapsedDays: 90, termDays: 90, discountPercent: 4.1, priceFactor: 0.88, status: "completed" },
    { productId: "P038", qty: 2, elapsedDays: 4, termDays: 30, discountPercent: 1.2, priceFactor: 0.97, status: "canceled" },
    { productId: "P019", elapsedDays: 18, termDays: 60, discountPercent: 2.4, priceFactor: 0.96, status: "canceled", lateCanceled: true },
    { productId: "P006", qty: 2, elapsedDays: 37, termDays: 90, discountPercent: 4.2, priceFactor: 0.95, earlyRequested: true },
  ];
  return scenarios.map((scenario, index) => {
    const qty = scenario.qty || 1;
    const deal = {
    ...scenario,
    id: `DEMO-${index + 1}`,
    qty,
    months: scenario.termDays / 30,
    extraDiscountPercent: 0.5,
    priceFactor: 1 + (scenario.priceFactor - 1) * 0.05,
    startPrice: Math.round(xEngine(getProduct(scenario.productId)).xPrice * (1 + (scenario.priceFactor - 1) * 0.05)) * qty,
    createdAt: Date.now() - scenario.elapsedDays * 86400000,
    deliveryDate: dateForDays(scenario.termDays - scenario.elapsedDays),
    status: scenario.status || "active",
    demo: true,
    };
    if (deal.status === "completed" || deal.earlyRequested) {
      deal.fulfilledDiscount = deal.earlyRequested ? earlyOrderQuote(deal).discountPercent : deal.discountPercent;
      deal.fulfilledPrice = Math.round(xEngine(getProduct(deal.productId)).xPrice * qty * (1 - deal.fulfilledDiscount / 100));
      deal.fulfilledAt = Date.now() - (index % 4) * 86400000;
    }
    return deal;
  });
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
  window.scrollTo({ top: 0, behavior: "instant" });
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
    const appTab = event.target.closest("[data-app-tab]");
    if (appTab) { state.appTab = appTab.dataset.appTab; renderApp(); return; }
    const focus = event.target.closest("[data-focus-deal]");
    if (focus) {
      state.focusedDealId = focus.dataset.focusDeal;
      const deal = state.deals.find((item) => item.id === state.focusedDealId);
      state.appTab = deal?.status === "canceled" ? "history" : deal?.status === "completed" ? "completed" : deal?.earlyRequested ? "early" : "active";
      setRoute("app");
      document.getElementById(`deal-${state.focusedDealId}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (event.target.closest("[data-reset-demo]")) {
      state.deals = [...state.deals.filter((deal) => !deal.demo), ...seededDeals()];
      state.appTab = "active";
      persistDeals(); renderAll();
      showToast(copy("Örnek siparişler yenilendi.", "Sample orders restored.")); return;
    }
    const cancel = event.target.closest("[data-cancel-deal]");
    if (cancel) {
      const deal = state.deals.find((item) => item.id === cancel.dataset.cancelDeal);
      cancelDeal(deal); return;
    }
    if (event.target.closest("[data-close-cancel]")) { closeCancelDialog(); return; }
    if (event.target.closest("[data-confirm-cancel]")) { confirmCancellation(); return; }
    const complete = event.target.closest("[data-complete-deal]");
    if (complete) { completeDeal(complete.dataset.completeDeal); return; }
    const advance = event.target.closest("[data-advance-deal]");
    if (advance) {
      const deal = state.deals.find((item) => item.id === advance.dataset.advanceDeal);
      if (!deal || deal.status !== "active" || deal.earlyRequested) return;
      deal.elapsedDays = advance.dataset.days ? Math.min(deal.termDays, deal.elapsedDays + Number(advance.dataset.days)) : deal.termDays;
      deal.createdAt = Date.now() - deal.elapsedDays * 86400000;
      deal.deliveryDate = dateForDays(deal.termDays - deal.elapsedDays);
      state.focusedDealId = deal.id;
      persistDeals(); renderAll(); showToast(copy(`Demo zamanı: ${deal.elapsedDays}. gün.`, `Demo time: day ${deal.elapsedDays}.`)); return;
    }
    const sellerAction = event.target.closest("[data-view-action]");
    if (sellerAction) {
      const action = state.activity.find((item) => item.id === sellerAction.dataset.viewAction);
      if (!action) return;
      state.highlightedActionId = action.id;
      state.selectedSellerProductId = action.productId;
      state.sellerTab = "flow";
      closeVerification();
      setRoute("seller"); return;
    }
    const buyAgain = event.target.closest("[data-readd-product]");
    if (buyAgain) { addToCart(buyAgain.dataset.readdProduct); setRoute("cart"); state.openedDealItemId = buyAgain.dataset.readdProduct; renderCart(); return; }
    if (event.target.closest("[data-open-app]")) { closeVerification(); setRoute("app"); return; }
    const step = event.target.closest("[data-early-step]");
    if (step) { state.earlyPlaying = false; setEarlyStage(Number(step.dataset.earlyStep)); return; }
    if (event.target.closest("[data-early-prev]")) { state.earlyPlaying = false; setEarlyStage(state.earlyStep - 1); return; }
    if (event.target.closest("[data-early-next]")) { state.earlyPlaying = false; setEarlyStage(state.earlyStep + 1); return; }
    if (event.target.closest("[data-early-play]")) { state.earlyPlaying = !state.earlyPlaying; setEarlyStage(state.earlyStep === 3 ? 1 : state.earlyStep); return; }
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
  document.getElementById("tutorialText").textContent = copy(
    "Drop Deal ile ürünü bugün seçip daha sonra satın alma sözü vererek indirim kazanırsın. Alışveriş'ten ürün ekle, Sepet'teki Drop Deal logosuna bas ve satın almak istediğin tarihi seç. Siparişin Drop ID kimliğinle Drop App'e eklenir. Burada bekleyebilir, güncel fiyat üzerinden erken satın alabilir veya ilk 7 gün puan kaybetmeden iptal edebilirsin. Daha sonraki iptaller puanını ve yeni indirimlerini azaltır. Satıcı Paneli'nde her işlemin satışa ve stoka etkisini görürsün. Hazır siparişler ve fiyatlar örnektir.",
    "With Drop Deal, choose a product today and earn a discount by committing to buy it later. Add an item in Shop, press the Drop Deal logo in Cart and choose your purchase date. Your order is linked to your Drop ID in Drop App. Wait, buy early at the current price, or cancel within the first 7 days without losing points. Later cancellations reduce your score and future discounts. Seller Panel shows each action's effect on sales and stock. Existing orders and prices are examples."
  );
  document.getElementById("showTutorial").title = copy("Drop Deal rehberi", "Drop Deal guide");
  setText("#tutorialEyebrow", "Çalışan sistem demosu", "Interactive system demo");
  setText("#tutorialTitle", "Drop Deal'ı keşfet", "Explore Drop Deal");
  setText("#closeTutorial", "Demoya başla", "Start the demo");
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
  setText("#sideScoreLabel", "puan", "points");
  setText(".phone-profile .eyebrow", "Bağlı Drop ID", "Linked Drop ID");
  setText(".app-metrics div:nth-child(1) span", "Seviye", "Tier");
  setText(".app-metrics div:nth-child(2) span", "Sadakat", "Loyalty");
  setText(".app-metrics div:nth-child(3) span", "Söz", "Kept promises");
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
  setText("#verificationModal .eyebrow", "Drop ID doğrulaması", "Drop ID verification");
  setText("#verifyTitle", "Telefondaki Drop App işlemi onaylıyor", "Drop App on your phone is verifying the order");
  setText(".checkout-panel .fine-print", "Bu prototipte doğrulama telefon uygulaması animasyonu ile simüle edilir.", "In this prototype, verification is simulated with a phone-app animation.");
  setText("#appView .section-heading .eyebrow", "Müşteri tarafı", "Customer side");
  setText("#appView .section-heading h1", "Sipariş karşılaştırması", "Order comparison");
  setText("#appView .section-heading p", "Aynı ürün, farklı tarihler: başlangıç fiyatını, indirim sözünü ve bugünkü erken alım fiyatını karşılaştır.", "Same product, different dates: compare initial prices, promised discounts and today's early purchase prices.");
  setText(".mobile-section-title", "Siparişlerim", "My orders");
  document.getElementById("headerDropId").textContent = dropId.id;
  document.getElementById("sideDropId").textContent = dropId.id;
  document.getElementById("sideScore").textContent = dropId.score;
  document.getElementById("sideTier").textContent = dropId.tier;
  document.getElementById("sideTier").dataset.tier = dropId.tier.toLowerCase();
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

function productStats(productId) {
  const deals = state.deals.filter((deal) => deal.productId === productId);
  const quantity = (predicate) => deals.filter(predicate).reduce((sum, deal) => sum + deal.qty, 0);
  return {
    pending: quantity((deal) => deal.status === "active" && !deal.earlyRequested),
    completed: quantity((deal) => deal.status === "completed" || deal.earlyRequested),
    canceled: quantity((deal) => deal.status === "canceled"),
    early: quantity((deal) => deal.earlyRequested),
    revenue: deals.filter((deal) => deal.status === "completed" || deal.earlyRequested).reduce((sum, deal) => sum + (deal.fulfilledPrice || 0), 0),
    score: dropId.score,
    offerRate: offerForDays(getProduct(productId), 1, 30).discountPercent,
    stock: getProduct(productId).stock,
  };
}

function loyaltyAfter(type, identity = dropId) {
  const next = { ...identity };
  if (type === "late-cancel") {
    next.score = Math.max(0, next.score - (18 + next.broken * 6));
    next.broken += 1;
    next.discountAdjustment = Number(Math.max(-1, next.discountAdjustment - 0.35).toFixed(2));
  } else if (type === "early" || type === "completed") {
    next.kept += 1;
    next.score = Math.min(1000, next.score + (type === "completed" ? 10 : 5));
    next.discountAdjustment = Number(Math.min(0.8, next.discountAdjustment + (type === "completed" ? 0.2 : 0.1)).toFixed(2));
  }
  next.promiseRate = Math.round(next.kept / Math.max(1, next.kept + next.broken) * 100);
  next.tier = next.score >= 700 ? "Gold" : next.score >= 500 ? "Silver" : "Bronze";
  return next;
}

function updateLoyalty(type) {
  Object.assign(dropId, loyaltyAfter(type));
}

function recordOrderAction(type, deal, before) {
  const action = { id: `A-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, type, dealId: deal.id, productId: deal.productId, qty: deal.qty, when: Date.now(), before, after: productStats(deal.productId) };
  state.activity.unshift(action);
  state.activity = state.activity.slice(0, 30);
  state.highlightedActionId = action.id;
  state.selectedSellerProductId = deal.productId;
  state.focusedDealId = deal.id;
  state.cart.forEach((item) => {
    if (item.selectedOffer) item.selectedOffer = { ...offerForDays(getProduct(item.productId), item.qty, item.selectedOffer.days), custom: item.selectedOffer.custom };
  });
  persistDeals(); persistCart();
  writeStorage("dropdeal.products", state.products);
  writeStorage("dropdeal.activity", state.activity);
  writeStorage("dropdeal.identity", { score: dropId.score, kept: dropId.kept, broken: dropId.broken, promiseRate: dropId.promiseRate, discountAdjustment: dropId.discountAdjustment });
  return action;
}

function actionLabel(type) {
  const labels = {
    reserved: ["Drop siparişi oluşturuldu", "Drop order created"],
    early: ["Erken sipariş tamamlandı", "Early purchase completed"],
    completed: ["Süre sonunda sipariş tamamlandı", "Full-term purchase completed"],
    "free-cancel": ["Cezasız iptal edildi", "Canceled without penalty"],
    "late-cancel": ["İlk haftadan sonra iptal edildi", "Canceled after the first week"],
  };
  return copy(...(labels[type] || labels.reserved));
}

function renderActionFeedback(context) {
  const action = state.activity.find((item) => item.id === state.highlightedActionId) || state.activity[0];
  if (!action) return "";
  const product = getProduct(action.productId);
  if (!product) return "";
  const metric = (label, before, after, suffix = "") => `<div class="${before !== after ? "changed" : ""}"><span>${label}</span><strong>${before}${suffix} <i>→</i> ${after}${suffix}</strong></div>`;
  return `<section class="action-feedback ${state.highlightedActionId === action.id ? "effect-glow" : ""}" data-effect-id="${action.id}" data-action-type="${action.type}">
    <div class="feedback-heading"><img src="${product.image}" alt="" /><div><span class="eyebrow">${copy("İşlemin sisteme yansıması", "Your action across the system")}</span><h3>${actionLabel(action.type)}</h3><p>${product.name} · ${action.qty} ${copy("adet", "qty")} · ${action.dealId}</p></div></div>
    <div class="effect-metrics">${metric(copy("Bekleyen adet", "Pending quantity"), action.before.pending, action.after.pending)}${metric(copy(action.type.includes("cancel") ? "İptal edilen adet" : "Tamamlanan adet", action.type.includes("cancel") ? "Canceled quantity" : "Completed quantity"), action.type.includes("cancel") ? action.before.canceled : action.before.completed, action.type.includes("cancel") ? action.after.canceled : action.after.completed)}${metric(copy("Drop ID puanı", "Drop ID score"), action.before.score, action.after.score)}${metric(copy("Yeni 1 aylık teklif", "New 1-month offer"), action.before.offerRate, action.after.offerRate, "%")}</div>
    <p class="feedback-explanation">${action.type === "free-cancel" ? copy("İlk 7 gün içinde iptal: bekleyen sipariş azaldı, puan ve teklif oranı korundu.", "Cancellation within 7 days: fewer pending orders, unchanged score and offer rate.") : action.type === "late-cancel" ? copy("Geç iptal: bekleyen sipariş azaldı; sadakat puanı ve sepetteki yeni teklif oranı düştü.", "Late cancellation: pending orders, loyalty score and new cart offer rate decreased.") : action.type === "reserved" ? copy("Sepette doğrulanan sipariş Drop App'e ve satıcının bekleyen sipariş planına eklendi.", "The verified cart order was added to Drop App and the seller's pending order plan.") : copy("Sipariş tamamlandı: satış kaydedildi, stok azaldı ve sadakat avantajı yeni sepet tekliflerine uygulandı.", "Purchase completed: sale recorded, inventory reduced and loyalty benefit applied to new cart offers.")}</p>
    <div class="feedback-actions">${context === "seller" ? `<button type="button" data-readd-product="${product.id}">${copy("Yeni teklif ile sepete ekle", "Add to cart with new offer")}</button>` : `<button type="button" data-view-action="${action.id}">${copy("Satıcı panelinde sonucu gör", "See the result in Seller Panel")} →</button>`}${context === "verification" ? `<button type="button" data-open-app>${copy("Drop App'te gör", "View in Drop App")}</button>` : ""}</div>
  </section>`;
}

function cancelDeal(deal) {
  if (!deal || deal.status !== "active" || deal.earlyRequested) return;
  const late = deal.elapsedDays >= 7;
  const next = late ? loyaltyAfter("late-cancel") : { ...dropId };
  const product = getProduct(deal.productId);
  const currentOffer = offerForDays(product, 1, 30);
  const nextOffer = offerForDays(product, 1, 30, next);
  state.cancelDealId = deal.id;
  state.cancelReturnFocus = document.activeElement;
  document.getElementById("cancelOrderContent").innerHTML = `
    <div class="notification-brand"><img src="${logoPath}" alt="" /><span>Drop App</span></div>
    <span class="notification-status ${late ? "warning" : "safe"}">${late ? copy("İlk 7 gün geçti", "The first 7 days have passed") : copy("Cezasız iptal hakkın var", "You can cancel without penalty")}</span>
    <h2 id="cancelTitle">${copy("Siparişi iptal etmek istiyor musun?", "Would you like to cancel this order?")}</h2>
    <p class="cancel-product">${product.name} · ${deal.qty} ${copy("adet", "qty")} · ${deal.id}</p>
    <p id="cancelDescription">${late ? copy(`Onaylarsan puanın ${dropId.score - next.score} azalır. Sonraki siparişlerin için indirim avantajın da azalır.`, `Confirming reduces your score by ${dropId.score - next.score} and lowers discounts on future orders.`) : copy("Bu sipariş ilk 7 gün içinde. İptal edersen puanın ve sonraki tekliflerin değişmez.", "This order is within the first 7 days. Canceling won't change your score or future offers.")}</p>
    <div class="cancel-preview"><div><span>${copy("Sadakat puanı", "Loyalty score")}</span><strong>${dropId.score} <i>→</i> ${next.score}</strong></div><div><span>${copy("Yeni 1 aylık indirim", "New 1-month discount")}</span><strong>%${currentOffer.discountPercent} <i>→</i> %${nextOffer.discountPercent}</strong></div></div>
    <div class="notification-actions"><button type="button" data-close-cancel>${copy("Siparişimi koru", "Keep my order")}</button><button class="cancel-confirm" type="button" data-confirm-cancel>${copy("İptali onayla", "Confirm cancellation")}</button></div>`;
  const modal = document.getElementById("cancelOrderModal");
  modal.classList.add("show"); modal.setAttribute("aria-hidden", "false");
  document.querySelector("main").inert = true;
  document.querySelector("header").inert = true;
  document.body.classList.add("dialog-open");
  modal.querySelector(".notification-actions [data-close-cancel]").focus();
}

function closeCancelDialog() {
  const modal = document.getElementById("cancelOrderModal");
  modal.classList.remove("show"); modal.setAttribute("aria-hidden", "true");
  document.querySelector("main").inert = false;
  document.querySelector("header").inert = false;
  document.body.classList.remove("dialog-open");
  state.cancelDealId = null;
  if (state.cancelReturnFocus?.isConnected) state.cancelReturnFocus.focus();
}

function confirmCancellation() {
  const deal = state.deals.find((item) => item.id === state.cancelDealId);
  if (!document.getElementById("cancelOrderModal").classList.contains("show") || !deal || deal.status !== "active" || deal.earlyRequested) return;
  const late = deal.elapsedDays >= 7;
  const before = productStats(deal.productId);
  closeCancelDialog();
  deal.status = "canceled";
  deal.lateCanceled = late;
  deal.canceledAt = Date.now();
  if (late) updateLoyalty("late-cancel");
  state.appTab = "history";
  recordOrderAction(late ? "late-cancel" : "free-cancel", deal, before);
  renderAll(); revealActionFeedback(); showToast(copy("İptal sonucu satıcı paneline ve sepet tekliflerine yansıdı.", "Cancellation updated the seller panel and cart offers."));
}

function completeDeal(dealId) {
  const deal = state.deals.find((item) => item.id === dealId);
  if (!deal || deal.status !== "active" || deal.earlyRequested || deal.elapsedDays < deal.termDays) return;
  const before = productStats(deal.productId);
  const product = getProduct(deal.productId);
  const quote = earlyOrderQuote(deal);
  deal.fulfilledDiscount = quote.discountPercent;
  deal.fulfilledPrice = quote.currentPrice;
  deal.fulfilledAt = Date.now();
  deal.status = "completed";
  product.stock = Math.max(0, product.stock - deal.qty);
  updateLoyalty("completed");
  state.appTab = "completed";
  recordOrderAction("completed", deal, before);
  renderAll(); revealActionFeedback(); showToast(copy("Tamamlanan sipariş, stok ve sadakat etkisi kaydedildi.", "Completed purchase, inventory and loyalty effects recorded."));
}

function revealActionFeedback() {
  requestAnimationFrame(() => document.querySelector(".view.active .action-feedback")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }));
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
        const selectedKey = item.selectedOffer?.days;
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
                  const selected = selectedKey === offer.days;
                  return `
                    <button class="deal-option ${selected ? "selected" : ""}" type="button" data-select-deal="${product.id}" data-months="${offer.months}">
                      <span>${offer.months} ${copy("ay sonra al", "month promise")}</span>
                      <strong>${offer.discountPercent}% ${copy("indirim", "discount")}</strong>
                      <small>${currency.format(offer.finalPrice)}</small>
                    </button>
                  `;
                })
                .join("")}
              ${renderCustomDate(item, product)}
            </div>
          </article>
        `;
      })
      .join("");
  }

  bindCartButtons();
  renderSummary();
  document.getElementById("cartHistory").innerHTML = `
    ${renderActionFeedback("cart")}
    <h2>${copy("Drop App sipariş geçmişi", "Drop App order history")}</h2>
    <div class="history-list">${[...state.deals].sort((a, b) => b.createdAt - a.createdAt).slice(0, 6).map((deal) => {
      const product = getProduct(deal.productId);
      return `<button type="button" class="history-row ${state.focusedDealId === deal.id ? "effect-glow" : ""}" data-focus-deal="${deal.id}"><img src="${product.image}" alt="" /><span><strong>${product.name}</strong><small>${dateLabel(deal.createdAt)} · ${termLabel(deal)} · ${orderStatusLabel(deal)}</small></span><strong>%${deal.fulfilledDiscount ?? deal.discountPercent}<small>${deal.fulfilledPrice ? currency.format(deal.fulfilledPrice) : copy("indirim sözü", "promised discount")}</small></strong></button>`;
    }).join("")}</div>`;
}

function renderCustomDate(item, product) {
  const date = item.customDate || dateForDays(45);
  const days = daysUntil(date);
  const valid = Number.isFinite(days) && days >= 1 && days <= 180;
  const offer = valid ? offerForDays(product, item.qty, days) : null;
  return `<div class="custom-date-bar ${item.selectedOffer?.custom ? "selected" : ""}">
    <label><span>${copy("Özel teslim tarihi", "Custom delivery date")}</span><input type="date" data-custom-date="${item.productId}" value="${date}" min="${dateForDays(1)}" max="${dateForDays(180)}" /></label>
    <div class="custom-quote" aria-live="polite"><strong>${offer ? `%${offer.discountPercent} · ${currency.format(offer.finalPrice)}` : copy("Geçerli bir tarih seç", "Choose a valid date")}</strong><small>${offer ? `${days} ${copy("gün sonra", "days from today")}` : copy("1–180 gün arası", "Between 1 and 180 days")}</small></div>
    <button class="primary-action" type="button" data-select-custom="${item.productId}" ${valid ? "" : "disabled"}>${item.selectedOffer?.custom && item.selectedOffer.days === days ? copy("Seçildi", "Selected") : copy("Tarihi seç", "Select date")}</button>
  </div>`;
}

function bindCartButtons() {
  document.querySelectorAll("[data-custom-date]").forEach((input) => {
    input.addEventListener("change", () => {
      const item = state.cart.find((cartItem) => cartItem.productId === input.dataset.customDate);
      if (!item) return;
      item.customDate = input.value;
      if (item.selectedOffer?.custom) item.selectedOffer = null;
      persistCart(); renderCart();
    });
  });
  document.querySelectorAll("[data-select-custom]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.cart.find((cartItem) => cartItem.productId === button.dataset.selectCustom);
      if (!item) return;
      const days = daysUntil(item.customDate || dateForDays(45));
      if (!Number.isFinite(days) || days < 1 || days > 180) return;
      item.selectedOffer = { ...offerForDays(getProduct(item.productId), item.qty, days), custom: true };
      persistCart(); renderCart();
    });
  });
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
  if (openVerification.busy) return;
  const selected = state.cart.filter((item) => item.selectedOffer);
  if (!selected.length) {
    state.openedDealItemId = state.cart[0]?.productId || null;
    renderCart();
    return;
  }

  const modal = document.getElementById("verificationModal");
  const bar = document.getElementById("verifyBar");
  const text = document.getElementById("verifyText");
  openVerification.busy = true;
  document.getElementById("verifyResult").hidden = true;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  bar.style.width = "8%";
  text.textContent = copy(`${dropId.device} ile token eşleştiriliyor...`, `Matching token with ${dropId.device}...`);

  setTimeout(() => {
    bar.style.width = "52%";
    text.textContent = copy("Drop ID sadakat ve söz geçmişi doğrulandı.", "Drop ID loyalty and promise history verified.");
  }, 700);

  setTimeout(() => {
    bar.style.width = "100%";
    text.textContent = copy("İşlem tamamlandı. Drop App içinde takip edebilirsin.", "Verified. Track your order in Drop App.");
    selected.forEach((item) => {
      const product = getProduct(item.productId);
      const before = productStats(item.productId);
      const deal = {
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
        deliveryDate: item.selectedOffer.deliveryDate,
        status: "active",
      };
      state.deals.unshift(deal);
      recordOrderAction("reserved", deal, before);
    });
    state.cart = state.cart.filter((item) => !selected.includes(item));
    persistDeals();
    persistCart();
    renderAll();
    openVerification.busy = false;
    document.getElementById("verifyResult").innerHTML = renderActionFeedback("verification");
    document.getElementById("verifyResult").hidden = false;
  }, 1500);
}

function closeVerification() {
  const modal = document.getElementById("verificationModal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function renderApp() {
  const active = state.deals.filter((deal) => deal.status === "active" && !deal.earlyRequested);
  const early = state.deals.filter((deal) => deal.earlyRequested);
  const history = state.deals.filter((deal) => deal.status === "canceled");
  const completed = state.deals.filter((deal) => deal.status === "completed");
  const deals = state.appTab === "completed" ? completed : state.appTab === "early" ? early : state.appTab === "history" ? history : active;
  const appDeals = document.getElementById("appDeals");
  appDeals.innerHTML = `<div class="app-order-toolbar"><div class="app-tabs" role="group" aria-label="${copy("Sipariş durumu", "Order status")}">
    ${[["active", copy("Bekleyen", "Pending"), active.length], ["early", copy("Erken alım", "Early orders"), early.length], ["completed", copy("Tamamlanan", "Completed"), completed.length], ["history", copy("İptaller", "Canceled"), history.length]].map(([tab, label, count]) => `<button type="button" data-app-tab="${tab}" aria-pressed="${state.appTab === tab}" class="${state.appTab === tab ? "active" : ""}">${label} <span>${count}</span></button>`).join("")}
    </div><button type="button" class="reset-demo" data-reset-demo title="${copy("Örnek siparişleri yenile", "Restore sample orders")}" aria-label="${copy("Örnek siparişleri yenile", "Restore sample orders")}">↻</button></div>` + (deals.length
    ? deals
        .map((deal) => {
          const product = getProduct(deal.productId);
          const quote = earlyOrderQuote(deal);
          if (!product || !quote) return "";

          return `
            <article class="app-deal-card ${state.focusedDealId === deal.id ? "focused" : ""}" id="deal-${deal.id}">
              <div class="app-order-heading"><img src="${product.image}" alt="" /><div><h3>${product.name}</h3><small>${dateLabel(deal.createdAt)} · ${deal.id}</small></div><span class="order-status ${deal.status === "canceled" ? "canceled" : deal.earlyRequested || deal.status === "completed" ? "ordered" : ""}">${orderStatusLabel(deal)}</span></div>
              <div class="deal-meta">
                <span>${termLabel(deal)} · ${deal.qty} ${copy("adet", "qty")}</span>
                <strong>${quote.daysLeft} ${copy("gün kaldı", "days left")}</strong>
              </div>
              <div class="progress-track"><span style="width:${Math.round(quote.progress * 100)}%"></span></div>
              <div class="order-price-grid"><div><span>${copy("Başlangıç X", "Initial X")}</span><strong>${currency.format(quote.startPrice)}</strong></div><div><span>${copy("İndirim sözü", "Promised rate")}</span><strong>%${deal.discountPercent}</strong></div><div><span>${copy("Güncel X", "Current X")}</span><strong>${currency.format(quote.currentMarketPrice)}</strong></div></div>
              <div class="order-discount-line"><span>${deal.elapsedDays} ${copy("günde kazanılan", "days earned")} %${quote.earnedDiscount} + %${quote.extraDiscountPercent} ${copy("sadakat", "loyalty")} − %${quote.behaviorPenalty} ${copy("geçmiş etkisi", "history adjustment")}</span><strong>%${quote.discountPercent}</strong></div>
              ${deal.status === "active" && !deal.earlyRequested ? renderCancelTimeline(deal) : ""}
              ${renderOrderActions(deal, quote)}
            </article>
          `;
        })
        .join("")
    : `<div class="empty-state"><p>${copy("Bu durumda sipariş yok.", "No orders in this status.")}</p></div>`);

  const totalSaved = active.reduce((sum, deal) => {
    const product = getProduct(deal.productId);
    if (!product) return sum;
    return sum + Math.round(xEngine(product).xPrice * deal.qty * (deal.discountPercent / 100));
  }, 0);

  document.getElementById("customerInsights").innerHTML = `
    ${renderActionFeedback("app")}
    <div class="comparison-summary"><div><span>${copy("Bekleyen sipariş", "Pending orders")}</span><strong>${active.length}</strong></div><div><span>${copy("İndirim avantajı · güncel X", "Discount benefit · current X")}</span><strong>${currency.format(totalSaved)}</strong></div><div><span>${copy("Ceza olmadan iptal", "Penalty-free cancellation")}</span><strong>${active.filter((deal) => deal.elapsedDays < 7).length}</strong></div></div>
    <div class="comparison-table-wrap"><table class="comparison-table"><thead><tr><th>${copy("Sipariş / tarih", "Order / date")}</th><th>${copy("Başlangıç X", "Initial X")}</th><th>${copy("Söz", "Promise")}</th><th>${copy("Bugün indirim", "Discount today")}</th><th>${copy("Erken alım", "Early price")}</th></tr></thead><tbody>${state.deals.map((deal) => {
      const product = getProduct(deal.productId);
      const quote = earlyOrderQuote(deal);
      if (!product || !quote) return "";
      return `<tr class="${state.focusedDealId === deal.id ? "selected" : ""}"><td><button type="button" data-focus-deal="${deal.id}"><strong>${product.name}</strong><small>${dateLabel(deal.createdAt)} · ${deal.elapsedDays} ${copy("gün önce", "days ago")}</small></button></td><td>${currency.format(quote.startPrice)}</td><td><strong>%${deal.discountPercent}</strong><small>${termLabel(deal)}</small></td><td>${deal.status === "canceled" ? "—" : `%${deal.fulfilledDiscount ?? quote.discountPercent}`}</td><td><strong>${deal.status === "canceled" ? "—" : currency.format(deal.fulfilledPrice ?? quote.currentPrice)}</strong><small>${orderStatusLabel(deal)}</small></td></tr>`;
    }).join("")}</tbody></table></div>
    <p class="comparison-note">${copy("İndirim oranı söz verildiği anda kaydedilir. Erken alımda geçen süre ve sadakat etkisi, bugünkü X fiyatına uygulanır; başlangıç fiyatı garanti değildir.", "The promised rate is saved when the order is placed. Early purchase applies elapsed time and loyalty to today's X price; the initial price is not guaranteed.")}</p>`;
}

function orderStatusLabel(deal) {
  if (deal.status === "canceled") return copy("İptal edildi", "Canceled");
  if (deal.status === "completed") return copy("Tamamlandı", "Completed");
  if (deal.earlyRequested) return copy("Erken alım tamamlandı", "Early purchase completed");
  return deal.elapsedDays >= deal.termDays ? copy("Alıma hazır", "Ready to purchase") : copy("Bekliyor", "Pending");
}

function renderOrderActions(deal, quote) {
  if (deal.status === "canceled") return `<p class="order-outcome">${deal.lateCanceled ? copy("İlk haftadan sonra iptal edildi. Yeni tekliflerde sadakat etkisi uygulanır.", "Canceled after the first week. Loyalty adjustment applies to new offers.") : copy("İlk 7 gün içinde cezasız iptal edildi.", "Canceled within 7 days without penalty.")}</p>`;
  if (deal.status === "completed" || deal.earlyRequested) return `<p class="order-outcome">${orderStatusLabel(deal)}: <strong>${currency.format(deal.fulfilledPrice ?? quote.currentPrice)}</strong> · %${deal.fulfilledDiscount ?? quote.discountPercent}</p>`;
  const ready = deal.elapsedDays >= deal.termDays;
  return `<div class="app-order-actions"><button class="early-btn" type="button" ${ready ? `data-complete-deal="${deal.id}"` : `data-early="${deal.id}"`}><span>${ready ? copy("Siparişi tamamla", "Complete purchase") : copy("Erken sipariş ver", "Order early")}</span><strong>${currency.format(quote.currentPrice)}</strong></button><button class="cancel-order-btn" type="button" data-cancel-deal="${deal.id}">${deal.elapsedDays < 7 ? copy("Cezasız iptal", "Cancel free") : copy("Sözü iptal et", "Cancel promise")}</button></div>${!ready ? `<details class="demo-time"><summary>${copy("Demo zamanı", "Demo time")}</summary><div><button type="button" data-advance-deal="${deal.id}" data-days="8">${copy("8 gün ilerlet", "Advance 8 days")}</button><button type="button" data-advance-deal="${deal.id}">${copy("Teslim gününe geç", "Go to delivery day")}</button></div></details>` : ""}`;
}

function renderCancelTimeline(deal) {
  const lockPoint = 18;
  const progress = deal.elapsedDays <= 7 ? clamp(deal.elapsedDays / 7, 0, 1) * lockPoint : lockPoint + clamp((deal.elapsedDays - 7) / Math.max(1, deal.termDays - 7), 0, 1) * (100 - lockPoint);
  const freeActive = deal.elapsedDays < 7;

  return `
    <div class="cancel-timeline ${freeActive ? "free-active" : "locked"}">
      <div class="timeline-copy">
        <strong>${cancelRightText(deal)}</strong>
        <span>${copy("İlk 7 gün: puan kaybı olmadan iptal", "First 7 days: cancel without losing points")}</span>
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
  if (!deal || !product || !quote || deal.status !== "active" || deal.earlyRequested) return;

  const modal = document.getElementById("earlyOrderModal");
  const content = document.getElementById("earlyOrderContent");
  content.innerHTML = `
    <h2 id="earlyTitle">${copy("Erken sipariş hesabın", "Your early purchase calculation")}</h2>
    <p class="early-product">${product.name} · ${deal.qty} ${copy("adet", "qty")} · ${dateLabel(deal.createdAt)}</p>
    <div class="early-stepper" role="tablist" aria-label="${copy("Hesaplama adımları", "Calculation steps")}">${[[1, copy("Süre", "Time")], [2, copy("İndirim", "Discount")], [3, copy("Son fiyat", "Final price")]].map(([step, label]) => `<button id="early-tab-${step}" type="button" role="tab" aria-controls="early-panel-${step}" data-early-step="${step}"><b>${step}</b><span>${label}</span></button>`).join("")}</div>
    <div class="early-flow" data-stage="1">
      <section class="early-stage stage-1" id="early-panel-1" role="tabpanel" aria-labelledby="early-tab-1">
        <h3>${copy("Bekleme sürenin ne kadarı doldu?", "How much of your waiting period has passed?")}</h3>
        <div class="elapsed-ring">
          <svg viewBox="0 0 160 160" aria-hidden="true">
            <circle class="ring-base" cx="80" cy="80" r="58"></circle>
            <circle class="ring-earned" cx="80" cy="80" r="58" style="--ring-offset:${364.425 * (1 - quote.progress)}"></circle>
          </svg>
          <div class="ring-value"><strong>${deal.elapsedDays}</strong><span>/ ${deal.termDays} ${copy("gün", "days")}</span><small>%${Number((quote.progress * 100).toFixed(1))} ${copy("tamamlandı", "complete")}</small></div>
        </div>
        <div class="elapsed-dates"><span>${copy("Söz başlangıcı", "Promise started")}<strong>${dateLabel(deal.createdAt)}</strong></span><span>${copy("Bugün", "Today")}<strong>${dateLabel(Date.now())}</strong></span><span>${copy("Kalan süre", "Time left")}<strong>${quote.daysLeft} ${copy("gün", "days")}</strong></span></div>
        <p class="stage-explanation">${copy(`${deal.termDays} günlük bekleme için %${deal.discountPercent} indirim sözü aldın. Erken alımda bu indirimin geçen süreye karşılık gelen kısmı hesaplanır.`, `Your ${deal.termDays}-day promise carries a ${deal.discountPercent}% discount. Early purchase earns the portion corresponding to the time elapsed.`)}</p>
      </section>

      <section class="early-stage stage-2" id="early-panel-2" role="tabpanel" aria-labelledby="early-tab-2">
        <h3>${copy("Bugünkü indirimin nasıl oluşuyor?", "How is your discount calculated today?")}</h3>
        <div class="discount-formula"><span>${deal.elapsedDays} / ${deal.termDays} ${copy("gün", "days")}</span><i>×</i><span>%${deal.discountPercent}</span><i>=</i><strong>%${quote.earnedDiscount}</strong></div>
        <dl class="discount-calculation"><div><dt>${copy("Süreyle kazanılan indirim", "Discount earned over time")}</dt><dd>%${quote.earnedDiscount}</dd></div><div class="bonus"><dt>${copy("Drop ID sadakat avantajı", "Drop ID loyalty benefit")}</dt><dd>+ %${quote.extraDiscountPercent}</dd></div><div><dt>${copy("Geçmiş söz bozma etkisi", "Previous broken-promise adjustment")}</dt><dd>− %${quote.behaviorPenalty}</dd></div><div class="calculation-total"><dt>${copy("Bugünkü toplam indirim", "Total discount today")}</dt><dd>%${quote.discountPercent}</dd></div></dl>
        <p class="stage-explanation">${copy("Toplam oran bir ondalık basamağa yuvarlanır. Bu oran, siparişin başlangıç fiyatına değil bugünkü X fiyatına uygulanır.", "The total rate is rounded to one decimal place and applied to today's X price, not the initial price.")}</p>
      </section>

      <section class="early-stage stage-3" id="early-panel-3" role="tabpanel" aria-labelledby="early-tab-3">
        <h3>${copy("Bu fiyatla sipariş vermek istiyor musun?", "Would you like to purchase at this price?")}</h3>
        <div class="purchase-reference"><div><span>${copy("Başlangıç X fiyatı", "Initial X price")}</span><strong>${currency.format(quote.startPrice)}</strong></div><div><span>${copy("Bugünkü X fiyatı", "Today's X price")}</span><strong>${currency.format(quote.currentMarketPrice)}</strong></div></div>
        <div class="purchase-final"><span>${copy("Bugünkü toplam indirim", "Total discount today")} <b>%${quote.discountPercent}</b></span><strong>${currency.format(quote.currentPrice)}</strong><small>${currency.format(quote.currentMarketPrice - quote.currentPrice)} ${copy("avantaj", "saved")}</small></div>
        <p class="price-equation">${currency.format(quote.currentMarketPrice)} × (1 − ${quote.discountPercent} / 100) = <b>${currency.format(quote.currentPrice)}</b></p>
        <p class="stage-explanation">${copy("Onayladığında sipariş tamamlanır; stok, sadakat ve satış bilgileri satıcı panelinde güncellenir.", "Confirmation completes the purchase and updates inventory, loyalty and sales in the seller panel.")}</p>
      </section>
    </div>
    <div class="early-navigation"><button class="early-play" type="button" data-early-play title="${copy("Otomatik anlatım: adım başına 6 saniye", "Autoplay: 6 seconds per step")}" aria-pressed="false"><span class="play-symbol">▶</span><span>${copy("Otomatik anlatım", "Autoplay")}</span></button><div><button class="early-back" type="button" data-early-prev title="${copy("Önceki adım", "Previous step")}" aria-label="${copy("Önceki adım", "Previous step")}">←</button><button class="primary-action" id="earlyNext" type="button" data-early-next>${copy("İndirim hesabına geç", "See the discount")}</button><button class="primary-action" id="earlyConfirm" type="button" data-confirm-early="${deal.id}" hidden>${copy("Siparişi onayla", "Confirm purchase")}</button></div></div>
  `;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.querySelector("main").inert = true;
  document.querySelector("header").inert = true;
  document.body.classList.add("dialog-open");
  state.earlyPlaying = false;
  setEarlyStage(1);
  document.getElementById("closeEarlyOrder").focus();
}

function setEarlyStage(step) {
  clearTimeout(openEarlyOrderModal.stageTimer);
  state.earlyStep = clamp(step, 1, 3);
  const flow = document.querySelector("#earlyOrderContent .early-flow");
  if (!flow) return;
  flow.dataset.stage = state.earlyStep;
  document.querySelectorAll("[data-early-step]").forEach((button) => button.setAttribute("aria-selected", String(Number(button.dataset.earlyStep) === state.earlyStep)));
  flow.querySelectorAll(".early-stage").forEach((panel, index) => {
    panel.inert = index + 1 !== state.earlyStep;
    panel.setAttribute("aria-hidden", String(panel.inert));
  });
  document.querySelector("[data-early-prev]").disabled = state.earlyStep === 1;
  document.getElementById("earlyNext").hidden = state.earlyStep === 3;
  document.getElementById("earlyNext").textContent = state.earlyStep === 1 ? copy("İndirim hesabına geç", "See the discount") : copy("Son fiyatı gör", "See the final price");
  document.getElementById("earlyConfirm").hidden = state.earlyStep !== 3;
  if (state.earlyStep === 3) state.earlyPlaying = false;
  const play = document.querySelector("[data-early-play]");
  play.setAttribute("aria-pressed", String(state.earlyPlaying));
  play.querySelector(".play-symbol").textContent = state.earlyPlaying ? "Ⅱ" : "▶";
  if (state.earlyPlaying) openEarlyOrderModal.stageTimer = setTimeout(() => setEarlyStage(state.earlyStep + 1), 6000);
}

function closeEarlyOrderModal() {
  const modal = document.getElementById("earlyOrderModal");
  clearTimeout(openEarlyOrderModal.stageTimer);
  state.earlyPlaying = false;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.querySelector("main").inert = false;
  document.querySelector("header").inert = false;
  document.body.classList.remove("dialog-open");
}

function confirmEarlyOrder(dealId) {
  const deal = state.deals.find((item) => item.id === dealId);
  if (!deal || deal.status !== "active" || deal.earlyRequested || state.earlyStep !== 3) return;
  const before = productStats(deal.productId);
  const quote = earlyOrderQuote(deal);
  deal.fulfilledPrice = quote.currentPrice;
  deal.fulfilledDiscount = quote.discountPercent;
  deal.earlyRequested = true;
  deal.fulfilledAt = Date.now();
  const product = getProduct(deal.productId);
  product.stock = Math.max(0, product.stock - deal.qty);
  updateLoyalty("early");
  state.appTab = "early";
  recordOrderAction("early", deal, before);
  closeEarlyOrderModal();
  renderAll();
  revealActionFeedback();
  showToast(copy("Erken sipariş tamamlandı; etkisi satıcı paneline yansıdı.", "Early purchase completed and reflected in Seller Panel."));
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

  const recentProductId = state.activity.find((action) => action.id === state.highlightedActionId)?.productId || state.activity[0]?.productId;
  const rows = [...new Set([recentProductId, "P014", "P038", "P006", "P001", "P010", "P019", "P028", "P046", "P055", "P064"].filter(Boolean))].map(getProduct).filter(Boolean);
  if (!state.selectedSellerProductId || !getProduct(state.selectedSellerProductId)) {
    state.selectedSellerProductId = rows[0]?.id;
  }

  const selected = getProduct(state.selectedSellerProductId) || rows[0];
  const engine = xEngine(selected);
  const offers = dropAiOffers(selected);
  const trackedLinks = state.products.reduce((sum, product) => sum + product.competitorPrices.length, 0);
  const weeklyReport = reportRows("weekly");
  const monthlyReport = reportRows("monthly");
  const selectedDeals = state.deals.filter((deal) => deal.productId === selected.id).sort((a, b) => Math.max(b.createdAt, b.fulfilledAt || 0, b.canceledAt || 0) - Math.max(a.createdAt, a.fulfilledAt || 0, a.canceledAt || 0));
  const stats = productStats(selected.id);
  const completedQty = state.deals.filter((deal) => deal.status === "completed" || deal.earlyRequested).reduce((sum, deal) => sum + deal.qty, 0);
  const canceledQty = state.deals.filter((deal) => deal.status === "canceled").reduce((sum, deal) => sum + deal.qty, 0);
  const revenue = state.deals.filter((deal) => deal.status === "completed" || deal.earlyRequested).reduce((sum, deal) => sum + (deal.fulfilledPrice || 0), 0);
  const highlight = recentProductId === selected.id && state.highlightedActionId ? "effect-glow" : "";

  workspace.innerHTML = `
    <div class="seller-hero">
      <div>
        <span class="eyebrow">${copy("Satıcı operasyonu", "Seller operations")}</span>
        <h1>${copy("Fiyat ve sipariş yönetimi", "Pricing and orders")}</h1>
        <p>${copy("Solda piyasa fiyatı, sağda müşteriye sunulan indirim ve bekleyen siparişler. Tüm rakamlar demo verisidir.", "Market pricing on the left; customer discounts and pending orders on the right. All figures are demo data.")}</p>
      </div>
      <div class="seller-tabs">
        <button class="${state.sellerTab === "flow" ? "active" : ""}" type="button" data-seller-tab="flow">${copy("Ürünler ve teklifler", "Products and offers")}</button>
        <button class="${state.sellerTab === "reports" ? "active" : ""}" type="button" data-seller-tab="reports">${copy("Raporlar", "Reports")}</button>
        <button class="crm-btn" type="button" data-crm-connect>${copy("CRM / ERP ile bağla", "Connect CRM / ERP")}</button>
      </div>
    </div>
    <div class="seller-overview ${highlight}"><div><span>${copy("Bekleyen adet", "Pending quantity")}</span><strong>${state.deals.filter((deal) => deal.status === "active" && !deal.earlyRequested).reduce((sum, deal) => sum + deal.qty, 0)}</strong></div><div><span>${copy("Tamamlanan adet", "Completed quantity")}</span><strong>${completedQty}</strong></div><div><span>${copy("İptal edilen adet", "Canceled quantity")}</span><strong>${canceledQty}</strong></div><div><span>${copy("Gerçekleşen satış · demo", "Realized sales · demo")}</span><strong>${currency.format(revenue)}</strong></div></div>
    ${renderActionFeedback("seller")}

    ${
      state.sellerTab === "reports"
        ? renderSellerReports(weeklyReport, monthlyReport)
        : `
          <div class="seller-split">
            <section class="x-engine-column">
              <div class="panel-title">
                <span><b class="step-number">1</b> ${copy("Piyasa fiyatı", "Market price")} <small>X Engine</small></span>
                <strong>${trackedLinks} ${copy("rakip fiyatı", "competitor prices")}</strong>
              </div>
              <p class="column-caption">${copy("Rakip fiyatı + stok + maliyet → güncel X fiyatı", "Competitor prices + inventory + cost → current X price")}</p>
              <div class="seller-product-list">
                ${rows.map((product) => renderSellerProduct(product, selected.id)).join("")}
              </div>
              <div class="engine-breakdown"><h3>${copy("Seçili ürünün fiyat hesabı", "Selected product pricing")}</h3><dl><div><dt>${copy("Liste fiyatı", "List price")}</dt><dd>${currency.format(selected.listPrice)}</dd></div><div><dt>${copy("Rakip ortalaması", "Competitor average")}</dt><dd>${currency.format(engine.competitorAverage)}</dd></div><div><dt>${copy("Maliyet", "Cost")}</dt><dd>${currency.format(selected.cost)}</dd></div><div class="total"><dt>${copy("Güncel X fiyatı", "Current X price")}</dt><dd>${currency.format(engine.xPrice)}</dd></div></dl></div>
              <details class="competitor-editor"><summary>${copy("Seçili ürüne rakip fiyatı ekle", "Add competitor price to selected product")}</summary>
              <form id="linkForm" class="link-form seller-link-form">
                <input id="linkProduct" type="hidden" value="${selected.id}" />
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
              </details>
            </section>

            <section class="drop-column ${highlight}">
              <div class="panel-title"><span><b class="step-number drop">2</b> ${copy("Teklif ve sipariş", "Offers and orders")} <small>Drop AI</small></span></div>
              <p class="column-caption">${copy("X fiyatı + anonim sadakat + bekleme süresi → indirim teklifi", "X price + anonymous loyalty + waiting period → discount offer")}</p>
              <div class="selected-path">
                <span>${selected.id}</span>
                <i></i>
                <strong>${selected.name}</strong>
                <i></i>
                <span>Drop AI</span>
              </div>
              <div class="drop-focus-card">
                <span class="eyebrow">${categoryLabel(selected.category)}</span>
                <h2>${selected.name}</h2>
                <div class="drop-focus-metrics">
                  <div><span>${copy("Güncel X fiyatı", "Current X price")}</span><strong>${currency.format(engine.xPrice)}</strong></div>
                  <div><span>${copy("Bekleyen adet", "Pending quantity")}</span><strong>${stats.pending}</strong></div>
                  <div><span>${copy("Kâr marjı", "Profit margin")}</span><strong>%${Math.round(engine.margin * 100)}</strong></div>
                </div>
              </div>
              <div class="drop-offer-grid">
                ${offers
                  .map(
                    (offer) => `
                      <article class="drop-offer-card">
                        <span>${offer.months} ${copy("ay", "months")}</span>
                        <strong>%${offer.discountPercent}</strong>
                        <p>${currency.format(offer.finalPrice)}</p>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
              <section class="seller-order-plan"><h3>${copy("Seçili ürünün siparişleri", "Selected product orders")}</h3><div class="selected-order-totals"><span>${stats.completed} ${copy("adet tamamlandı", "units completed")}</span><span>${stats.canceled} ${copy("adet iptal edildi", "units canceled")}</span></div>${selectedDeals.length ? selectedDeals.slice(0, 8).map((deal) => `<div class="${state.focusedDealId === deal.id ? "effect-glow" : ""}" data-seller-deal="${deal.id}"><span>${deal.id} · ${deal.qty} ${copy("adet", "qty")}<small>${dateLabel(deal.createdAt)}${deal.fulfilledPrice ? ` · ${currency.format(deal.fulfilledPrice)}` : ""}</small></span><strong class="${deal.status === "canceled" ? "text-canceled" : deal.status === "completed" || deal.earlyRequested ? "text-completed" : ""}">${orderStatusLabel(deal)}</strong></div>`).join("") : `<p>${copy("Bu üründe henüz Drop siparişi yok.", "No Drop order for this product yet.")}</p>`}</section>
              <div class="drop-signal-log">
                <article><strong>Drop ID</strong><span>${dropId.id.slice(0, 5)}****${dropId.id.slice(-2)} · ${copy("sadakat puanı", "loyalty score")} ${dropId.score}</span></article>
                <article><strong>Drop App</strong><span>${copy("Bu ürün için erken sipariş olasılığı", "Early order likelihood for this product")} %${earlyChance(selected)}</span></article>
                <article><strong>${copy("Stok", "Inventory")}</strong><span>${stockMood(selected.stock)} · ${demandMood(selected.demand)}</span></article>
              </div>
            </section>
          </div>
        `
    }
    ${renderSellerActivity()}
  `;
}

function renderSellerActivity() {
  return `<section class="seller-activity"><div class="panel-title"><span>${copy("Son işlem akışı", "Recent activity")}</span><strong>${copy("Anonim sipariş verisi", "Anonymous order data")}</strong></div>${state.activity.length ? state.activity.slice(0, 6).map((action) => `<button type="button" class="activity-row ${state.highlightedActionId === action.id ? "effect-glow" : ""}" data-view-action="${action.id}"><span><strong>${actionLabel(action.type)}</strong><small>${getProduct(action.productId).name} · ${action.dealId} · ${action.qty} ${copy("adet", "qty")}</small></span><span>${copy("Bekleyen", "Pending")}: ${action.before.pending} → ${action.after.pending}<small>Drop ID: ${action.before.score} → ${action.after.score}</small></span></button>`).join("") : state.deals.filter((deal) => deal.status !== "active" || deal.earlyRequested).slice(0, 5).map((deal) => `<div class="activity-row"><span><strong>${orderStatusLabel(deal)}</strong><small>${getProduct(deal.productId).name} · ${deal.qty} ${copy("adet", "qty")}</small></span><span class="eyebrow">${copy("Örnek geçmiş", "Sample history")}</span></div>`).join("")}</section>`;
}

function renderSellerProduct(product, selectedId) {
  const engine = xEngine(product);
  const selected = product.id === selectedId;
  const dim = selectedId && !selected ? "is-dim" : "";

  return `
    <button class="seller-product ${selected ? "selected" : ""} ${dim} ${selected && state.highlightedActionId ? "effect-glow" : ""}" type="button" data-seller-product="${product.id}">
      <img src="${product.image}" alt="" /><span class="seller-product-name"><small>${categoryLabel(product.category)}</small><strong>${product.name}</strong><small>${stockMood(product.stock)}</small></span><span class="seller-product-price"><strong>${currency.format(engine.xPrice)}</strong><small>X ${copy("fiyatı", "price")}</small></span>
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
          <strong>${copy("7 günlük plan", "7-day plan")}</strong>
        </div>
        ${weeklyRows.map(renderLiveReportRow).join("")}
      </section>
      <section class="report-section">
        <div class="panel-title">
          <span>${copy("Aylık rapor", "Monthly report")}</span>
          <strong>${copy("30 günlük plan", "30-day plan")}</strong>
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
    <article class="live-report-row ${state.highlightedActionId && row.product.id === state.selectedSellerProductId ? "effect-glow" : ""}" data-report-product="${row.product.id}">
      <div>
        <strong>${row.product.name}</strong>
        <span>${categoryLabel(row.product.category)} · ${stockMood(row.product.stock)}</span>
      </div>
      <div><span>${copy("Kesin sipariş:", "Confirmed:")}</span><strong>${row.confirmed}</strong></div>
      <div><span>${copy("Erkene gelebilir:", "Potential early orders:")}</span><strong>${row.potential} ${copy("adet", "qty")} <small>%${row.early}</small></strong></div>
      <p>${copy("Tamamlanan", "Completed")}: ${row.completed} · ${copy("İptal edilen", "Canceled")}: ${row.canceled} · ${copy("Bekleyen toplam", "Total pending")}: ${row.pending}</p>
    </article>
  `;
}

function reportRows(period) {
  const horizon = period === "monthly" ? 30 : 7;
  return [...new Set([state.selectedSellerProductId, ...state.deals.map((deal) => deal.productId), "P014", "P006", "P038", "P001", "P010", "P019"].filter(Boolean))].map(getProduct).filter(Boolean).map((product) => {
    const deals = state.deals.filter((deal) => deal.productId === product.id);
    const pending = deals.filter((deal) => deal.status === "active" && !deal.earlyRequested);
    const completed = deals.filter((deal) => (deal.status === "completed" || deal.earlyRequested) && Date.now() - (deal.fulfilledAt || deal.createdAt) <= horizon * 86400000).reduce((sum, deal) => sum + deal.qty, 0);
    const confirmed = completed + pending.filter((deal) => deal.termDays - deal.elapsedDays <= horizon).reduce((sum, deal) => sum + deal.qty, 0);
    const laterQty = pending.filter((deal) => deal.termDays - deal.elapsedDays > horizon).reduce((sum, deal) => sum + deal.qty, 0);
    const early = earlyChance(product);
    return {
      product,
      confirmed,
      early,
      potential: Math.round(laterQty * early / 100),
      completed,
      pending: pending.reduce((sum, deal) => sum + deal.qty, 0),
      canceled: deals.filter((deal) => deal.status === "canceled" && Date.now() - (deal.canceledAt || deal.createdAt) <= horizon * 86400000).reduce((sum, deal) => sum + deal.qty, 0),
    };
  });
}

function monthlyDemandRows() {
  const today = new Date();
  const monthNames = Array.from({ length: 4 }, (_, index) => new Intl.DateTimeFormat(state.language === "en" ? "en-GB" : "tr-TR", { month: "long" }).format(new Date(today.getFullYear(), today.getMonth() + index, 1)));
  return ["P014", "P006", "P038", "P028"].map(getProduct).map((product, productIndex) => {
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
