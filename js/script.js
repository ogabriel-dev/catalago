/**
 * ==========================================================================
 * CONTEM AMOR - CATÁLOGO DIGITAL MOBILE FIRST
 * Configuração, Produtos de Demonstração e Lógica de Navegação
 * ==========================================================================
 */

// ==========================================================================
// 1. ÍCONES MINIMALISTAS (SVG inline, stroke-based)
// ==========================================================================
const ICONS = {
  todos:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/></svg>',
  bebe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.5" r="3.5"/><path d="M8.5 11.5c-1.6.9-2.5 2.2-2.5 3.7a2.8 2.8 0 0 0 5.6.3"/><path d="M12 15v3.3"/><circle cx="12" cy="19.6" r="1"/></svg>',
  menina:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3.5h6l.8 3.5-1.8 1v2.3l3 10.2H7l3-10.2V8L8.2 7 9 3.5z"/></svg>',
  menino:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 4l3.5 2 3.5-2 4 3-3 3-1-1v10h-7V9l-1 1-3-3 4-3z"/></svg>',
  vestidos:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v3M15 3v3M8 6h8l1.5 3L15 11l3 10H6l3-10-2.5-2L8 6z"/></svg>',
  conjuntos:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4.2a1.8 1.8 0 1 1 1.8 1.8c-.5 0-.9.4-.9.9v.8"/><path d="M12 7.7l9 5.8-1.8 1.8H4.8L3 13.5l9-5.8z"/><path d="M4 20h16"/></svg>',
  acessorios:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 8h11l1 12h-13l1-12z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>',
};

// ==========================================================================
// 2. CONFIGURAÇÃO DE CATEGORIAS
// ==========================================================================
const categoriesConfig = [
  { id: "todos", label: "Todos", icon: ICONS.todos },
  { id: "bebe", label: "Bebê", icon: ICONS.bebe },
  { id: "menina", label: "Menina", icon: ICONS.menina },
  { id: "menino", label: "Menino", icon: ICONS.menino },
  { id: "vestidos", label: "Vestidos", icon: ICONS.vestidos },
  { id: "conjuntos", label: "Conjuntos", icon: ICONS.conjuntos },
  { id: "acessorios", label: "Acessórios", icon: ICONS.acessorios },
];

// ==========================================================================
// 3. DADOS DOS PRODUTOS (PRODUTOS DE DEMONSTRAÇÃO)
// ==========================================================================
// NOTA: Edite este array para adicionar, remover ou modificar os produtos.
const products = [
  {
    id: 1,
    title: "Body Bebê Manga Curta Suedine",
    category: "bebe",
    price: 49.9,
    sizes: ["RN", "P", "M", "G"],
    description:
      "Body confeccionado em algodão suedine macio e respirável. Possui gola americana para facilitar a troca e fecho por botões de pressão na parte inferior.",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Vestido Infantil Floral Delicado",
    category: "vestidos",
    price: 98.9,
    sizes: ["1", "2", "3", "4"],
    description:
      "Vestido leve e fluido com estampa floral suave. Confeccionado em tecido 100% algodão, ideal para passeios e momentos especiais com extremo conforto.",
    image:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Conjunto Menino Camisa Linho e Bermuda",
    category: "menino",
    price: 119.9,
    sizes: ["1", "2", "3", "6", "8"],
    description:
      "Conjunto sofisticado composto por camisa social em mista de linho com algodão e bermuda com ajuste elástico interno na cintura.",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Macacão Bebê Tricô Aconchego",
    category: "bebe",
    price: 129.9,
    sizes: ["P", "M", "G"],
    description:
      "Macacão em tricô hipoalergênico com toque ultra macio. Modelagem perfeita para manter o bebê aquecido e confortável durante todo o dia.",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Conjunto Menina Blusa Ribana e Short Veludo",
    category: "menina",
    price: 89.9,
    sizes: ["2", "4", "6", "8"],
    description:
      "Conjunto moderno e delicado. Blusa em malha ribana com babados sutis nos ombros e short em veludo cotelê com bolsos laterais.",
    image:
      "https://images.unsplash.com/photo-1617331140180-e8262094733a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Conjunto Moletom Infantil Algodão Doce",
    category: "conjuntos",
    price: 109.9,
    sizes: ["1", "2", "3", "4"],
    description:
      "Conjunto em moletom flanelado super quentinho. Blusão com gola redonda e calça jogger com punho e elástico macio na cintura.",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Manta Bebê Algodão Pima",
    category: "acessorios",
    price: 79.9,
    sizes: ["Único"],
    description:
      "Manta dupla face em algodão de altíssima qualidade. Toque suave e aveludado, perfeita para envolver o bebê com carinho e proteção.",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Vestido Infantil Linho Soft",
    category: "vestidos",
    price: 114.9,
    sizes: ["2", "4", "6"],
    description:
      "Vestido minimalista e elegante em tom terroso suave. Possui fechamento por botões de amadeirados nas costas e acabamento impecável.",
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 9,
    title: "Conjunto Bebê Body e Calça Algodão",
    category: "bebe",
    price: 94.9,
    sizes: ["P", "M", "G"],
    description:
      "Conjunto delicado em algodão macio, composto por body de manga longa e calça confortável com cintura elástica. Ideal para os primeiros meses.",
    image:
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Vestido Infantil Festa Laço",
    category: "vestidos",
    price: 139.9,
    sizes: ["2", "4", "6", "8"],
    description:
      "Vestido infantil elegante com modelagem rodada e detalhe de laço. Uma opção charmosa para aniversários, festas e ocasiões especiais.",
    image:
      "https://images.unsplash.com/photo-1623085094152-489328c6e9ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "Camiseta Infantil Básica Algodão",
    category: "menino",
    price: 59.9,
    sizes: ["2", "4", "6", "8", "10"],
    description:
      "Camiseta infantil confeccionada em algodão confortável e respirável. Modelagem básica e versátil para combinar com diferentes looks.",
    image:
      "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    title: "Macacão Bebê Conforto Natural",
    category: "bebe",
    price: 109.9,
    sizes: ["RN", "P", "M", "G"],
    description:
      "Macacão confortável para bebês, com tecido macio e modelagem que facilita os movimentos. Perfeito para o dia a dia e momentos de descanso.",
    image:
      "https://images.unsplash.com/photo-1500471929063-235c721eedf6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    title: "Conjunto Infantil Tricô Casual",
    category: "conjuntos",
    price: 124.9,
    sizes: ["2", "4", "6", "8"],
    description:
      "Conjunto infantil aconchegante inspirado no estilo casual. Peças versáteis e confortáveis para os dias mais frescos.",
    image:
      "https://images.unsplash.com/photo-1488331531757-77fd056ebe43?auto=format&fit=crop&w=800&q=80",
  },
];

// Placeholder SVG caso a imagem falhe ao carregar
const PLACEHOLDER_IMAGE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='360' viewBox='0 0 300 360' fill='%23FBEEF3'><rect width='300' height='360'/><text x='50%' y='50%' font-family='sans-serif' font-size='14' fill='%237C8C9A' text-anchor='middle'>Contem Amor</text></svg>";

// ==========================================================================
// 4. ESTADO DA APLICAÇÃO
// ==========================================================================
let activeCategory = "todos";
let searchQuery = "";

// ==========================================================================
// 5. ELEMENTOS DO DOM
// ==========================================================================
const categoriesContainer = document.getElementById("categories-container");
const productsGrid = document.getElementById("products-grid");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const resultsCountEl = document.getElementById("results-count");
const emptyStateEl = document.getElementById("empty-state");
const resetFiltersBtn = document.getElementById("reset-filters-btn");

// Modal Elements
const modalBackdrop = document.getElementById("product-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalDismissBtn = document.getElementById("modal-dismiss-btn");
const modalImg = document.getElementById("modal-img");
const modalCategoryBadge = document.getElementById("modal-category-badge");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalSizes = document.getElementById("modal-sizes");
const modalDescription = document.getElementById("modal-description");

// ==========================================================================
// 6. INICIALIZAÇÃO
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderProducts();
  setupEventListeners();
});

// ==========================================================================
// 7. FUNÇÕES DE RENDERIZAÇÃO
// ==========================================================================

// Renderiza os filtros de categorias
function renderCategories() {
  categoriesContainer.innerHTML = categoriesConfig
    .map(
      (cat) => `
        <button 
            class="category-chip ${cat.id === activeCategory ? "active" : ""}" 
            data-category="${cat.id}">
            <span class="category-icon">${cat.icon}</span>
            <span>${cat.label}</span>
        </button>
    `,
    )
    .join("");
}

// Formata o preço no padrão BRL (R$)
function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Filtra produtos de acordo com a categoria e termo de busca
function getFilteredProducts() {
  return products.filter((product) => {
    // Filtro por Categoria
    const matchesCategory =
      activeCategory === "todos" ||
      product.category === activeCategory ||
      (activeCategory === "menina" && product.category === "vestidos") || // Exemplo de agrupamento amigável
      (activeCategory === "bebe" &&
        product.sizes.some((s) => ["RN", "P", "M", "G"].includes(s)));

    // Filtro por Busca
    const term = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !term ||
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.sizes.some((s) => s.toLowerCase().includes(term));

    return matchesCategory && matchesSearch;
  });
}

// Renderiza a lista/grid de produtos
function renderProducts() {
  const filteredProducts = getFilteredProducts();

  // Atualiza o contador
  resultsCountEl.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? "peça encontrada" : "peças encontradas"}`;

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = "";
    emptyStateEl.classList.remove("hidden");
    return;
  }

  emptyStateEl.classList.add("hidden");

  productsGrid.innerHTML = filteredProducts
    .map((product) => {
      const categoryLabel = getCategoryLabel(product.category);
      const sizesPreview = product.sizes ? product.sizes.join(" • ") : "";

      return `
            <article class="product-card" data-id="${product.id}">
                <div class="product-image-container">
                    <img 
                        src="${product.image}" 
                        alt="${product.title}" 
                        class="product-image"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='${PLACEHOLDER_IMAGE}';"
                    />
                </div>
                <div class="product-info">
                    <span class="product-category">${categoryLabel}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    ${sizesPreview ? `<div class="product-sizes-preview">Tam: ${sizesPreview}</div>` : ""}
                </div>
            </article>
        `;
    })
    .join("");
}

// Retorna o rótulo amigável da categoria
function getCategoryLabel(catId) {
  const found = categoriesConfig.find((c) => c.id === catId);
  return found ? found.label : "Moda Infantil";
}

// ==========================================================================
// 8. MODAL DE DETALHES
// ==========================================================================
function openModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  modalImg.src = product.image;
  modalImg.alt = product.title;
  modalImg.onerror = () => {
    modalImg.src = PLACEHOLDER_IMAGE;
  };

  modalCategoryBadge.textContent = getCategoryLabel(product.category);
  modalTitle.textContent = product.title;
  modalPrice.textContent = formatPrice(product.price);
  modalDescription.textContent = product.description;

  // Tamanhos
  if (product.sizes && product.sizes.length > 0) {
    modalSizes.innerHTML = product.sizes
      .map(
        (size) => `
            <span class="size-tag">${size}</span>
        `,
      )
      .join("");
  } else {
    modalSizes.innerHTML = '<span class="size-tag">Tamanho Único</span>';
  }

  modalBackdrop.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Impede o scroll no fundo
}

function closeModal() {
  modalBackdrop.classList.add("hidden");
  document.body.style.overflow = "";
}

// ==========================================================================
// 9. EVENT LISTENERS
// ==========================================================================
function setupEventListeners() {
  // Clique em Categorias
  categoriesContainer.addEventListener("click", (e) => {
    const chip = e.target.closest(".category-chip");
    if (!chip) return;

    activeCategory = chip.dataset.category;
    renderCategories();
    renderProducts();
  });

  // Eventos da Busca
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchQuery.trim().length > 0) {
      clearSearchBtn.classList.remove("hidden");
    } else {
      clearSearchBtn.classList.add("hidden");
    }
    renderProducts();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.classList.add("hidden");
    renderProducts();
    searchInput.focus();
  });

  resetFiltersBtn.addEventListener("click", () => {
    activeCategory = "todos";
    searchQuery = "";
    searchInput.value = "";
    clearSearchBtn.classList.add("hidden");
    renderCategories();
    renderProducts();
  });

  // Clique em um Card de Produto (Abre o Modal)
  productsGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const productId = parseInt(card.dataset.id, 10);
    openModal(productId);
  });

  // Fechar Modal
  modalCloseBtn.addEventListener("click", closeModal);
  modalDismissBtn.addEventListener("click", closeModal);

  // Fechar Modal ao Clicar no Backdrop
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Fechar Modal com a Tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalBackdrop.classList.contains("hidden")) {
      closeModal();
    }
  });
}
