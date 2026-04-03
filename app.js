const state = {
  language: "en",
  search: "",
  category: "all",
  selectedId: null,
};

const languageToggle = document.querySelector("#languageToggle");
const categoryCount = document.querySelector("#categoryCount");
const promptCount = document.querySelector("#promptCount");
const tipsGrid = document.querySelector("#tipsGrid");
const searchInput = document.querySelector("#searchInput");
const categoryFilters = document.querySelector("#categoryFilters");
const cardsGrid = document.querySelector("#cardsGrid");
const resultsLabel = document.querySelector("#resultsLabel");
const detailDialog = document.querySelector("#detailDialog");
const dialogContent = document.querySelector("#dialogContent");
const tipsHeading = document.querySelector("#tipsHeading");
const libraryHeading = document.querySelector("#libraryHeading");
const searchLabel = document.querySelector("#searchLabel");

const categoryMap = new Map(
  promptAtlasData.categories.map((category) => [category.id, category])
);

function textFor(item, key) {
  return state.language === "zh" && item[`${key}Zh`] ? item[`${key}Zh`] : item[key];
}

function getCardSearchBlob(card) {
  return [
    card.title,
    card.titleZh,
    card.summary,
    card.summaryZh,
    card.prompt,
    card.promptZh,
    card.category,
    ...card.tools,
    ...(card.keywords || []),
  ]
    .join(" ")
    .toLowerCase();
}

function filteredCards() {
  const query = state.search.trim().toLowerCase();

  return promptAtlasData.cards.filter((card) => {
    const matchesCategory =
      state.category === "all" || card.category === state.category;
    const matchesSearch = !query || getCardSearchBlob(card).includes(query);
    return matchesCategory && matchesSearch;
  });
}

function renderStats() {
  categoryCount.textContent = promptAtlasData.categories.length - 1;
  promptCount.textContent = promptAtlasData.cards.length;
}

function renderTips() {
  tipsHeading.textContent =
    state.language === "zh" ? "先寫出更強的提示詞" : "Start with a stronger brief";

  tipsGrid.innerHTML = promptAtlasData.tips
    .map(
      (tip) => `
        <article class="tip-card">
          <p class="mini-label">${tip.tools.join(" · ")}</p>
          <h3>${textFor(tip, "title")}</h3>
          <p>${textFor(tip, "summary")}</p>
          <div class="prompt-block">
            <span>${state.language === "zh" ? "示例寫法" : "Prompt shape"}</span>
            <p>${textFor(tip, "prompt")}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFilters() {
  const allLabel = state.language === "zh" ? "全部分類" : "All categories";
  const allCount = promptAtlasData.cards.length;

  const filterItems = [
    `
      <button
        class="chip ${state.category === "all" ? "is-active" : ""}"
        type="button"
        data-category="all"
      >
        <span>${allLabel}</span>
        <strong>${allCount}</strong>
      </button>
    `,
    ...promptAtlasData.categories
      .filter((category) => category.id !== "fundamentals")
      .map((category) => {
        const count = promptAtlasData.cards.filter(
          (card) => card.category === category.id
        ).length;
        return `
          <button
            class="chip ${state.category === category.id ? "is-active" : ""}"
            type="button"
            data-category="${category.id}"
          >
            <span>${textFor(category, "name")}</span>
            <strong>${count}</strong>
          </button>
        `;
      }),
  ];

  categoryFilters.innerHTML = filterItems.join("");

  categoryFilters.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      render();
    });
  });
}

function renderCards() {
  libraryHeading.textContent =
    state.language === "zh"
      ? "按角色或工作情境瀏覽"
      : "Browse by role or workstream";

  searchLabel.textContent =
    state.language === "zh"
      ? "搜尋提示詞、分類、工具或中文關鍵字"
      : "Search prompts, categories, apps, or Chinese text";

  searchInput.placeholder =
    state.language === "zh" ? "搜尋提示詞靈感..." : "Search prompt ideas...";

  const cards = filteredCards();
  const selectedCategory =
    state.category === "all" ? null : categoryMap.get(state.category);

  if (cards.length === 0) {
    resultsLabel.textContent =
      state.language === "zh"
        ? "找不到符合條件的內容，試試較短的關鍵字。"
        : "No matching results yet. Try a shorter or broader search.";
    cardsGrid.innerHTML = `
      <div class="empty-state">
        <h3>${state.language === "zh" ? "未找到結果" : "No results found"}</h3>
        <p>
          ${
            state.language === "zh"
              ? "你可以切換分類、清除搜尋，或者用英文與中文詞語再試一次。"
              : "Try switching categories, clearing the search box, or searching in English or Chinese."
          }
        </p>
      </div>
    `;
    return;
  }

  const resultPrefix =
    state.language === "zh" ? "目前顯示" : "Showing";
  const resultSuffix =
    state.language === "zh" ? "張提示卡" : "prompt cards";
  const categoryLabel = selectedCategory ? textFor(selectedCategory, "name") : "";
  resultsLabel.textContent = selectedCategory
    ? `${resultPrefix} ${cards.length} ${resultSuffix} · ${categoryLabel}`
    : `${resultPrefix} ${cards.length} ${resultSuffix}`;

  cardsGrid.innerHTML = cards
    .map((card) => {
      const category = categoryMap.get(card.category);
      return `
        <article class="prompt-card" data-card-id="${card.id}" tabindex="0">
          <div class="card-topline">
            <span class="category-tag">${textFor(category, "name")}</span>
            <span class="page-tag">p.${card.page}</span>
          </div>
          <h3>${textFor(card, "title")}</h3>
          <p>${textFor(card, "summary")}</p>
          <div class="tool-row">
            ${card.tools
              .map((tool) => `<span class="tool-pill">${tool}</span>`)
              .join("")}
          </div>
          <button class="ghost-button" type="button">
            ${state.language === "zh" ? "查看詳情" : "Open details"}
          </button>
        </article>
      `;
    })
    .join("");

  cardsGrid.querySelectorAll("[data-card-id]").forEach((cardNode) => {
    const openCard = () => {
      state.selectedId = cardNode.dataset.cardId;
      renderDialog();
      detailDialog.showModal();
    };

    cardNode.addEventListener("click", openCard);
    cardNode.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCard();
      }
    });
  });
}

function renderDialog() {
  const card = promptAtlasData.cards.find((item) => item.id === state.selectedId);
  if (!card) {
    return;
  }

  const category = categoryMap.get(card.category);

  dialogContent.innerHTML = `
    <div class="dialog-meta">
      <span class="category-tag">${textFor(category, "name")}</span>
      <span class="page-tag">p.${card.page}</span>
    </div>
    <h2>${textFor(card, "title")}</h2>
    <p class="dialog-summary">${textFor(card, "summary")}</p>
    <div class="dialog-grid">
      <section>
        <h3>${state.language === "zh" ? "示例提示詞" : "Prompt template"}</h3>
        <p class="dialog-prompt">${textFor(card, "prompt")}</p>
      </section>
      <section>
        <h3>${state.language === "zh" ? "建議工具" : "Suggested tools"}</h3>
        <div class="tool-row">
          ${card.tools.map((tool) => `<span class="tool-pill">${tool}</span>`).join("")}
        </div>
      </section>
      <section>
        <h3>${state.language === "zh" ? "搜尋關鍵字" : "Helpful keywords"}</h3>
        <div class="tool-row">
          ${card.keywords
            .map((keyword) => `<span class="tool-pill">${keyword}</span>`)
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderLanguage() {
  document.documentElement.lang = state.language === "zh" ? "zh-Hant" : "en";
  languageToggle.textContent =
    state.language === "zh" ? "Switch to English" : "切換中文";
}

function render() {
  renderLanguage();
  renderStats();
  renderTips();
  renderFilters();
  renderCards();
}

languageToggle.addEventListener("click", () => {
  state.language = state.language === "en" ? "zh" : "en";
  render();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCards();
});

detailDialog.addEventListener("click", (event) => {
  const rect = detailDialog.getBoundingClientRect();
  const inDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;

  if (!inDialog) {
    detailDialog.close();
  }
});

render();
