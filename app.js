const { categories, tips, cards } = window.promptAtlasData;

const state = {
  language: "en",
  query: "",
  activeCategory: "all",
  selectedCardId: null,
};

const ui = {
  heroEyebrow: document.querySelector("#heroEyebrow"),
  heroTitle: document.querySelector("#heroTitle"),
  heroText: document.querySelector("#heroText"),
  searchLabel: document.querySelector("#searchLabel"),
  searchInput: document.querySelector("#searchInput"),
  languageToggle: document.querySelector("#languageToggle"),
  statCategories: document.querySelector("#statCategories"),
  statCategoriesLabel: document.querySelector("#statCategoriesLabel"),
  statPrompts: document.querySelector("#statPrompts"),
  statPromptsLabel: document.querySelector("#statPromptsLabel"),
  statLanguageLabel: document.querySelector("#statLanguageLabel"),
  tipsKicker: document.querySelector("#tipsKicker"),
  tipsTitle: document.querySelector("#tipsTitle"),
  tipsGrid: document.querySelector("#tipsGrid"),
  libraryKicker: document.querySelector("#libraryKicker"),
  libraryTitle: document.querySelector("#libraryTitle"),
  resultsCount: document.querySelector("#resultsCount"),
  clearFilters: document.querySelector("#clearFilters"),
  categoryRow: document.querySelector("#categoryRow"),
  cardGrid: document.querySelector("#cardGrid"),
  emptyState: document.querySelector("#emptyState"),
  emptyTitle: document.querySelector("#emptyTitle"),
  emptyText: document.querySelector("#emptyText"),
  detailModal: document.querySelector("#detailModal"),
  detailMeta: document.querySelector("#detailMeta"),
  detailTitle: document.querySelector("#detailTitle"),
  detailSummary: document.querySelector("#detailSummary"),
  detailPromptLabel: document.querySelector("#detailPromptLabel"),
  detailPrompt: document.querySelector("#detailPrompt"),
  detailUseLabel: document.querySelector("#detailUseLabel"),
  detailTags: document.querySelector("#detailTags"),
  modalClose: document.querySelector("#modalClose"),
};

const copy = {
  en: {
    heroEyebrow: "Inspired by the October 2024 Gemini for Workspace prompt guide",
    heroTitle: "Prompt Atlas for Workspace",
    heroText:
      "A bilingual prompt library that reorganizes the guide into searchable categories, practical prompt patterns, and Chinese translations for fast adaptation.",
    searchLabel: "Search prompts, use cases, tools, or keywords",
    searchPlaceholder: "Try: onboarding, campaign, pricing, roadmap...",
    toggle: "切換中文",
    statCategoriesLabel: "categories",
    statPromptsLabel: "prompt patterns",
    statLanguageLabel: "bilingual prompt view",
    tipsKicker: "Prompt habits",
    tipsTitle: "Four guide principles worth keeping on your desk",
    libraryKicker: "Prompt library",
    libraryTitle: "Browse by persona, then adapt the prompt to your workflow",
    results: (count) => `${count} matching prompt pattern${count === 1 ? "" : "s"}`,
    clear: "Clear filters",
    emptyTitle: "No prompts matched this search",
    emptyText: "Try a broader keyword, or reset the category and language filters.",
    categoryAll: "Everything",
    promptLabel: "Prompt template",
    useLabel: "Apps, tags, and source context",
    sourceLabel: "Inspired by guide pages",
  },
  zh: {
    heroEyebrow: "根據 2024 年 10 月版 Gemini for Workspace Prompt Guide 重組",
    heroTitle: "Prompt Atlas 提示詞地圖",
    heroText:
      "這是一個雙語提示詞知識庫，把原指南重整成可搜尋分類、實用 prompt 範式，以及可直接查看的中文翻譯。",
    searchLabel: "搜尋提示詞、場景、工具或關鍵字",
    searchPlaceholder: "例如：onboarding、campaign、pricing、roadmap",
    toggle: "Show English",
    statCategoriesLabel: "分類",
    statPromptsLabel: "提示詞範式",
    statLanguageLabel: "中英雙語顯示",
    tipsKicker: "寫 prompt 習慣",
    tipsTitle: "值得長期保留的四個原則",
    libraryKicker: "提示詞資料庫",
    libraryTitle: "先按角色分類，再改成你自己的工作語境",
    results: (count) => `共 ${count} 個符合的提示詞範例`,
    clear: "清除篩選",
    emptyTitle: "找不到符合內容",
    emptyText: "可以試下更廣泛的關鍵字，或者清除分類與搜尋條件。",
    categoryAll: "全部內容",
    promptLabel: "提示詞模板",
    useLabel: "可用工具、標籤與來源線索",
    sourceLabel: "靈感整理自頁數",
  },
};

function t(enValue, zhValue) {
  return state.language === "zh" ? zhValue : enValue;
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function getVisibleCards() {
  const query = normalize(state.query);
  return cards.filter((card) => {
    const matchesCategory =
      state.activeCategory === "all" || card.category === state.activeCategory;

    const searchable = [
      card.title,
      card.titleZh,
      card.summary,
      card.summaryZh,
      card.prompt,
      card.promptZh,
      ...(card.tools || []),
      ...(card.keywords || []),
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = !query || searchable.includes(query);
    return matchesCategory && matchesQuery;
  });
}

function renderHero() {
  const lang = copy[state.language];
  ui.heroEyebrow.textContent = lang.heroEyebrow;
  ui.heroTitle.textContent = lang.heroTitle;
  ui.heroText.textContent = lang.heroText;
  ui.searchLabel.textContent = lang.searchLabel;
  ui.searchInput.placeholder = lang.searchPlaceholder;
  ui.languageToggle.textContent = lang.toggle;
  ui.statCategories.textContent = categories.length - 1;
  ui.statCategoriesLabel.textContent = lang.statCategoriesLabel;
  ui.statPrompts.textContent = cards.length;
  ui.statPromptsLabel.textContent = lang.statPromptsLabel;
  ui.statLanguageLabel.textContent = lang.statLanguageLabel;
  ui.tipsKicker.textContent = lang.tipsKicker;
  ui.tipsTitle.textContent = lang.tipsTitle;
  ui.libraryKicker.textContent = lang.libraryKicker;
  ui.libraryTitle.textContent = lang.libraryTitle;
  ui.clearFilters.textContent = lang.clear;
}

function renderTips() {
  ui.tipsGrid.innerHTML = "";
  tips.forEach((tip) => {
    const article = document.createElement("article");
    article.className = "tip-card";
    article.innerHTML = `
      <h3>${t(tip.title, tip.titleZh)}</h3>
      <p>${t(tip.text, tip.textZh)}</p>
    `;
    ui.tipsGrid.appendChild(article);
  });
}

function renderCategories() {
  ui.categoryRow.innerHTML = "";

  categories.forEach((category) => {
    const count =
      category.id === "all"
        ? cards.length
        : cards.filter((card) => card.category === category.id).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `category-pill ${
      state.activeCategory === category.id ? "active" : ""
    }`;
    button.innerHTML = `
      <span>${t(category.name, category.nameZh)}</span>
      <strong>${count}</strong>
    `;
    button.addEventListener("click", () => {
      state.activeCategory = category.id;
      render();
    });
    ui.categoryRow.appendChild(button);
  });
}

function createCard(card) {
  const article = document.createElement("article");
  article.className = "prompt-card";
  article.tabIndex = 0;
  article.setAttribute("role", "button");

  const category = categories.find((item) => item.id === card.category);

  article.innerHTML = `
    <div class="card-top">
      <p class="card-category">${t(category.name, category.nameZh)}</p>
      <span class="card-page">${copy[state.language].sourceLabel} ${card.page}</span>
    </div>
    <h3>${t(card.title, card.titleZh)}</h3>
    <p class="card-summary">${t(card.summary, card.summaryZh)}</p>
    <div class="tag-row">
      ${(card.tools || [])
        .slice(0, 3)
        .map((tool) => `<span>${tool}</span>`)
        .join("")}
    </div>
  `;

  const open = () => openModal(card.id);
  article.addEventListener("click", open);
  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });

  return article;
}

function renderCards() {
  const visibleCards = getVisibleCards();
  ui.resultsCount.textContent = copy[state.language].results(visibleCards.length);
  ui.cardGrid.innerHTML = "";
  ui.emptyState.classList.toggle("hidden", visibleCards.length > 0);

  if (!visibleCards.length) {
    ui.emptyTitle.textContent = copy[state.language].emptyTitle;
    ui.emptyText.textContent = copy[state.language].emptyText;
    return;
  }

  visibleCards.forEach((card) => {
    ui.cardGrid.appendChild(createCard(card));
  });
}

function openModal(cardId) {
  state.selectedCardId = cardId;
  const card = cards.find((item) => item.id === cardId);
  const category = categories.find((item) => item.id === card.category);
  const lang = copy[state.language];

  ui.detailMeta.textContent = `${t(category.name, category.nameZh)} · ${lang.sourceLabel} ${card.page}`;
  ui.detailTitle.textContent = t(card.title, card.titleZh);
  ui.detailSummary.textContent = t(card.summary, card.summaryZh);
  ui.detailPromptLabel.textContent = lang.promptLabel;
  ui.detailPrompt.textContent = t(card.prompt, card.promptZh);
  ui.detailUseLabel.textContent = lang.useLabel;
  ui.detailTags.innerHTML = "";

  [...(card.tools || []), ...(card.keywords || [])].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ui.detailTags.appendChild(li);
  });

  if (!ui.detailModal.open) {
    ui.detailModal.showModal();
  }
}

function closeModal() {
  if (ui.detailModal.open) {
    ui.detailModal.close();
  }
}

function render() {
  renderHero();
  renderTips();
  renderCategories();
  renderCards();
  if (state.selectedCardId && ui.detailModal.open) {
    openModal(state.selectedCardId);
  }
}

ui.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCards();
});

ui.languageToggle.addEventListener("click", () => {
  state.language = state.language === "en" ? "zh" : "en";
  render();
});

ui.clearFilters.addEventListener("click", () => {
  state.query = "";
  state.activeCategory = "all";
  ui.searchInput.value = "";
  render();
});

ui.detailModal.addEventListener("click", (event) => {
  if (event.target === ui.detailModal) {
    closeModal();
  }
});

ui.detailModal.addEventListener("close", () => {
  state.selectedCardId = null;
});

render();
