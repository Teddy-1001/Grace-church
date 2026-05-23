const UZIMA_STORE = "https://ackuzimapublishinghouse.or.ke/";
const UZIMA_HOME = "https://ackuzima.or.ke/";

const categories = [
  { id: "all", label: "All Books" },
  { id: "liturgy", label: "Liturgy & Worship" },
  { id: "language", label: "Local Language" },
  { id: "training", label: "Training & Discipleship" },
  { id: "registers", label: "Registers & Diary" },
  { id: "life", label: "Books for Life" },
];

const books = [
  {
    id: "modern-services",
    title: "Our Modern Services",
    subtitle: "Standard Cover — ACK liturgy",
    category: "liturgy",
    price: 850,
    image: "/src/assets/images/sermon.webp",
    buyUrl: `${UZIMA_STORE}product-category/liturgy/`,
    featured: true,
  },
  {
    id: "kitabu-ibada",
    title: "Kitabu Kipya Cha Ibada",
    subtitle: "Kiswahili prayer book (SC)",
    category: "liturgy",
    price: 790,
    image: "/src/assets/images/sermon.webp",
    buyUrl: `${UZIMA_STORE}product-category/liturgy/`,
    featured: true,
  },
  {
    id: "kikuyu-prayer",
    title: "Kikuyu Prayer Book",
    subtitle: "Ibuku ria mahoya",
    category: "language",
    price: 790,
    image: "/src/assets/images/sermon.webp",
    buyUrl: `${UZIMA_STORE}product-category/liturgy/`,
  },
  {
    id: "luo-prayer",
    title: "Luo Prayer Book",
    subtitle: "Kitap Lamo Mayien",
    category: "language",
    price: 790,
    image: "/src/assets/images/sermon.webp",
    buyUrl: `${UZIMA_STORE}product-category/liturgy/`,
  },
  {
    id: "luhya-prayer",
    title: "Luhya Prayer Book",
    subtitle: "Eshitabo eshiyiakha",
    category: "language",
    price: 790,
    image: "/src/assets/images/sermon.webp",
    buyUrl: `${UZIMA_STORE}product-category/liturgy/`,
  },
  {
    id: "kikuyu-hymn",
    title: "Kikuyu Hymn Book",
    subtitle: "Congregational hymns",
    category: "language",
    price: 600,
    image: "/src/assets/images/sermon.webp",
    buyUrl: `${UZIMA_STORE}product-category/liturgy/`,
  },
  {
    id: "luo-hymn",
    title: "Luo Hymn Book",
    subtitle: "Congregational hymns",
    category: "language",
    price: 465,
    image: "/src/assets/images/sermon.webp",
    buyUrl: `${UZIMA_STORE}product-category/liturgy/`,
  },
  {
    id: "church-diary",
    title: "Church Desk Diary & Lectionary",
    subtitle: "Annual — Churchman's diary",
    category: "registers",
    price: 504,
    image: "/src/assets/images/sermon.webp",
    buyUrl: `${UZIMA_STORE}product-category/liturgy/`,
    featured: true,
  },
  {
    id: "baptism-lessons",
    title: "Baptism Lessons Book",
    subtitle: "Preparation for holy baptism",
    category: "training",
    price: 425,
    image: "/src/assets/images/sermon.webp",
    buyUrl: `${UZIMA_STORE}product-category/liturgy/`,
  },
  {
    id: "confirmation-lessons",
    title: "Confirmation Lessons Book",
    subtitle: "Preparation for confirmation",
    category: "training",
    price: 400,
    image: "/src/assets/images/bible-image.jpg",
    buyUrl: `${UZIMA_STORE}product-category/liturgy/`,
  },
  {
    id: "equip-serve",
    title: "Equip Yourself to Serve",
    subtitle: "Training course in lay ministry",
    category: "training",
    price: 650,
    image: "/src/assets/images/41654.jpg",
    buyUrl: UZIMA_HOME,
  },
  {
    id: "baptism-register",
    title: "Register of Baptisms",
    subtitle: "Parish record book",
    category: "registers",
    price: 350,
    image: "/src/assets/images/sermon.webp",
    buyUrl: `${UZIMA_STORE}product-category/liturgy/`,
  },
  {
    id: "leadership-pillars",
    title: "10 Pillars of Christian Leadership",
    subtitle: "Discipleship & leadership",
    category: "training",
    price: 500,
    image: "/src/assets/images/sermon.webp",
    buyUrl: UZIMA_HOME,
  },
  {
    id: "walking-faith",
    title: "Walking By Faith",
    subtitle: "Christian living",
    category: "life",
    price: 450,
    image: "/src/assets/images/sermon.webp",
    buyUrl: UZIMA_HOME,
  },
  {
    id: "counselling-handbook",
    title: "A Handbook for Christian Counselling",
    subtitle: "Pastoral care resource",
    category: "training",
    price: 550,
    image: "/src/assets/images/sermon.webp",
    buyUrl: UZIMA_HOME,
  },
  {
    id: "discipline-fasting",
    title: "Discipline of Fasting",
    subtitle: "Books for Life series",
    category: "life",
    price: 100,
    image: "/src/assets/images/sermon.webp",
    buyUrl: `${UZIMA_STORE}product-category/books-for-life/`,
  },
  {
    id: "healing-depression",
    title: "Healing from Depression",
    subtitle: "Books for Life series",
    category: "life",
    price: 100,
    image: "/src/assets/images/sermon.webp",
    buyUrl: `${UZIMA_STORE}product-category/books-for-life/`,
  },
];

let activeCategory = "all";

const filtersEl = document.getElementById("shop-filters");
const gridEl = document.getElementById("shop-grid");
const emptyEl = document.getElementById("shop-empty");

function formatPrice(kes) {
  return `KSh ${kes.toLocaleString("en-KE")}`;
}

function categoryLabel(id) {
  return categories.find((c) => c.id === id)?.label || id;
}

function renderFilters() {
  if (!filtersEl) return;
  filtersEl.innerHTML = categories
    .map(
      (cat) => `
    <button type="button" data-category="${cat.id}" role="tab" aria-selected="${cat.id === activeCategory}"
      class="shop-filter px-4 py-2 rounded-full text-sm font-medium transition ${
        cat.id === activeCategory
          ? "bg-ack-purple text-white shadow-md"
          : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
      }">
      ${cat.label}
    </button>
  `
    )
    .join("");

  filtersEl.querySelectorAll(".shop-filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderFilters();
      renderGrid();
    });
  });
}

function renderBookCard(book) {
  return `
    <article class="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition duration-300 flex flex-col">
      <div class="relative h-44 overflow-hidden bg-ack-purple/5">
        <img src="${book.image}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy">
        ${book.featured ? `<span class="absolute top-3 left-3 bg-ack-gold text-ack-purple-dark text-xs font-bold px-2 py-1 rounded">Popular</span>` : ""}
        <span class="absolute top-3 right-3 bg-white/95 text-ack-purple text-xs font-semibold px-2 py-1 rounded shadow-sm">
          ${categoryLabel(book.category)}
        </span>
      </div>
      <div class="p-5 flex flex-col flex-1">
        <h3 class="font-bold text-ack-purple-dark leading-snug">${book.title}</h3>
        <p class="text-gray-500 text-xs mt-1">${book.subtitle}</p>
        <p class="text-lg font-bold text-ack-purple mt-3">${formatPrice(book.price)}</p>
        <p class="text-xs text-gray-400 mt-1">Approx. price · confirm at Uzima</p>
        <div class="mt-auto pt-4 px-3 flex flex-col gap-2">
          <a href="${book.buyUrl}" target="_blank" rel="noopener noreferrer"
             class="flex items-center justify-center gap-2 w-full bg-ack-purple text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-ack-purple-dark transition">
            <i class="fa-solid fa-external-link text-xs" aria-hidden="true"></i>
            Buy at Uzima
          </a>
          <button type="button" disabled
             class="w-full border border-dashed border-gray-300 text-gray-400 text-sm py-2 rounded-lg cursor-not-allowed"
             title="Parish cart coming soon">
            <i class="fa-solid fa-cart-plus mr-1" aria-hidden="true"></i>Add to cart (soon)
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderGrid() {
  if (!gridEl) return;

  const filtered =
    activeCategory === "all" ? books : books.filter((b) => b.category === activeCategory);

  if (emptyEl) {
    emptyEl.classList.toggle("hidden", filtered.length > 0);
  }

  gridEl.innerHTML = filtered.map(renderBookCard).join("");
}

renderFilters();
renderGrid();
