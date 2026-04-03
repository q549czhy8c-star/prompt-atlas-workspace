const promptAtlasData = {
  "categories": [
    {
      "id": "fundamentals",
      "name": "Prompt Foundations",
      "nameZh": "提示詞基礎",
      "summary": "Core prompt-writing ideas from the guide.",
      "summaryZh": "來自指南的提示詞核心概念。"
    },
    {
      "id": "admin",
      "name": "Administrative support",
      "nameZh": "行政支援",
      "summary": "Administrative support use cases from the table of contents.",
      "summaryZh": "來自目錄的行政支援 use case。"
    },
    {
      "id": "communications",
      "name": "Communications",
      "nameZh": "企業傳訊",
      "summary": "Communications use cases from the table of contents.",
      "summaryZh": "來自目錄的企業傳訊 use case。"
    },
    {
      "id": "customer-service",
      "name": "Customer service",
      "nameZh": "客戶服務",
      "summary": "Customer service use cases from the table of contents.",
      "summaryZh": "來自目錄的客戶服務 use case。"
    },
    {
      "id": "executives",
      "name": "Executives",
      "nameZh": "管理層",
      "summary": "Executive use cases from the table of contents.",
      "summaryZh": "來自目錄的管理層 use case。"
    },
    {
      "id": "frontline",
      "name": "Frontline management",
      "nameZh": "前線管理",
      "summary": "Frontline management use cases from the table of contents.",
      "summaryZh": "來自目錄的前線管理 use case。"
    },
    {
      "id": "hr",
      "name": "Human resources",
      "nameZh": "人力資源",
      "summary": "Human resources use cases from the table of contents.",
      "summaryZh": "來自目錄的人力資源 use case。"
    },
    {
      "id": "marketing",
      "name": "Marketing",
      "nameZh": "市場營銷",
      "summary": "Marketing use cases from the table of contents.",
      "summaryZh": "來自目錄的市場營銷 use case。"
    },
    {
      "id": "pm",
      "name": "Project management",
      "nameZh": "項目管理",
      "summary": "Project management use cases from the table of contents.",
      "summaryZh": "來自目錄的項目管理 use case。"
    },
    {
      "id": "sales",
      "name": "Sales",
      "nameZh": "銷售",
      "summary": "Sales use cases from the table of contents.",
      "summaryZh": "來自目錄的銷售 use case。"
    },
    {
      "id": "small-business",
      "name": "Small business owners and entrepreneurs",
      "nameZh": "小型企業與創業者",
      "summary": "Small business use cases from the table of contents.",
      "summaryZh": "來自目錄的小型企業與創業者 use case。"
    },
    {
      "id": "startup",
      "name": "Startup leaders",
      "nameZh": "創業領導者",
      "summary": "Startup leader use cases from the table of contents.",
      "summaryZh": "來自目錄的創業領導者 use case。"
    }
  ],
  "tips": [
    {
      "id": "tip-1",
      "category": "fundamentals",
      "title": "Category = Table Of Contents section",
      "titleZh": "類別 = 目錄部分",
      "summary": "Cards are grouped by the guide's main table-of-contents sections.",
      "summaryZh": "卡片按指南的主要目錄部分分組。",
      "prompt": "Administrative support, Communications, Customer service, Executives, Frontline management, Human resources, Marketing, Project management, Sales, Small business owners and entrepreneurs, Startup leaders",
      "promptZh": "行政支援、溝通、客戶服務、高階主管、第一線管理、人力資源、行銷、專案管理、銷售、小型企業主和企業家、新創企業領導者",
      "tools": [
        "PDF"
      ],
      "page": 4,
      "keywords": [
        "table of contents",
        "category"
      ]
    },
    {
      "id": "tip-2",
      "category": "fundamentals",
      "title": "Subject = Use case",
      "titleZh": "主題=用例",
      "summary": "Each card title follows the use-case subject from the PDF.",
      "summaryZh": "每個卡片標題均遵循 PDF 中的用例主題。",
      "prompt": "Examples: Plan business travel, Project management, Develop a product launch plan",
      "promptZh": "例如：規劃商務旅行、專案管理、制定產品發布計劃",
      "tools": [
        "PDF"
      ],
      "page": 4,
      "keywords": [
        "use case",
        "subject"
      ]
    }
  ],
  "cards": [
    {
      "id": "card-1",
      "category": "admin",
      "title": "Plan agendas (offsite, meetings, and more)",
      "titleZh": "規劃議程(異地、會議等)",
      "summary": "Page 7",
      "summaryZh": "第 7 頁",
      "prompt": "I am an executive administrator to a team director. Our newly formed team now consists of content marketers, digital marketers, and product marketers. We are gathering for the first time at a three-day offsite in Washington, DC. Plan activities for each day that include team bonding activities and time for deeper strategic work. Create a sample agenda for me. (Gemini Advanced)",
      "promptZh": "我是團隊總監的執行長。我們新組建的團隊現在由內容行銷人員、數位行銷人員和產品行銷人員組成。我們第一次在華盛頓特區舉行為期三天的異地聚會。 規劃每天的活動，包括團隊聯繫活動和進行更深入的策略工作的時間。為我創建一個範例議程 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 7,
      "keywords": [
        "Plan agendas (offsite, meetings, and more)",
        "page 7"
      ]
    },
    {
      "id": "card-2",
      "category": "admin",
      "title": "Plan agendas (offsite, meetings, and more)",
      "titleZh": "規劃議程(異地、會議等)",
      "summary": "Page 8",
      "summaryZh": "第 8 頁",
      "prompt": "Suggest three different icebreaker activities that encourage people to learn about their teammates’ preferred working styles, strengths, and goals. Make sure the icebreaker ideas are engaging and can be completed by a group of 25 people in 30 minutes or less. (Gemini Advanced)",
      "promptZh": "建議三種不同的破冰活動，鼓勵人們了解隊友喜歡的工作方式、優勢和目標。確保破冰想法具有吸引力，並且可以由 25 人在 30 分鐘或更短的時間內完成 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 8,
      "keywords": [
        "Plan agendas (offsite, meetings, and more)",
        "page 8"
      ]
    },
    {
      "id": "card-3",
      "category": "admin",
      "title": "Plan agendas (offsite, meetings, and more)",
      "titleZh": "規劃議程(異地、會議等)",
      "summary": "Page 8",
      "summaryZh": "第 8 頁",
      "prompt": "Organize this agenda in a table format. Include one of your suggested icebreakers for each day. (Gemini Advanced)",
      "promptZh": "以表格形式組織此議程。包括您每天建議的破冰活動之一 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 8,
      "keywords": [
        "Plan agendas (offsite, meetings, and more)",
        "page 8"
      ]
    },
    {
      "id": "card-4",
      "category": "admin",
      "title": "Plan agendas (offsite, meetings, and more)",
      "titleZh": "規劃議程(異地、會議等)",
      "summary": "Page 8",
      "summaryZh": "第 8 頁",
      "prompt": "Use @[2024 H2 Team Vision] to generate a summary for the opening remarks on Day 1 of this agenda. (Gemini in Docs)",
      "promptZh": "使用 @[2024 H2 Team Vision] 生成本議程第一天開場白的摘要 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 8,
      "keywords": [
        "Plan agendas (offsite, meetings, and more)",
        "page 8"
      ]
    },
    {
      "id": "card-5",
      "category": "admin",
      "title": "Manage multiple email inboxes",
      "titleZh": "管理多個電子郵件收件匣",
      "summary": "Page 8",
      "summaryZh": "第 8 頁",
      "prompt": "Summarize emails from [manager] from the last week. (Gemini in Gmail)",
      "promptZh": "總結上週來自 [manager] 的電子郵件 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 8,
      "keywords": [
        "Manage multiple email inboxes",
        "page 8"
      ]
    },
    {
      "id": "card-6",
      "category": "admin",
      "title": "Manage multiple email inboxes",
      "titleZh": "管理多個電子郵件收件匣",
      "summary": "Page 8",
      "summaryZh": "第 8 頁",
      "prompt": "Summarize this email thread and list all action items and deadlines. (Gemini in Gmail)",
      "promptZh": "總結此電子郵件主題並列出所有行動項目和截止日期 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 8,
      "keywords": [
        "Manage multiple email inboxes",
        "page 8"
      ]
    },
    {
      "id": "card-7",
      "category": "admin",
      "title": "Manage multiple email inboxes",
      "titleZh": "管理多個電子郵件收件匣",
      "summary": "Page 9",
      "summaryZh": "第 9 頁",
      "prompt": "Generate a response to this email and use @[file name] to describe how the [initiative] can complement the workstream outlined in [colleague’s name]’s message. (Gemini in Gmail)",
      "promptZh": "產生對此電子郵件的回复，並使用 @[file name] 來描述 [initiative] 如何補充 [colleague’s name] 訊息中概述的工作流程 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 9,
      "keywords": [
        "Manage multiple email inboxes",
        "page 9"
      ]
    },
    {
      "id": "card-8",
      "category": "admin",
      "title": "Plan business travel",
      "titleZh": "計劃商務旅行",
      "summary": "Page 9",
      "summaryZh": "第 9 頁",
      "prompt": "I am an executive assistant. I need to create an itinerary for a two-day business trip in [location] during [dates]. My manager is staying at [hotel]. Suggest different options for breakfast and dinner within a 10-minute walk of the hotel, and find one entertainment option such as a movie theater, a local art show, or a popular tourist attraction. Put it in a table for me. (Gemini Advanced)",
      "promptZh": "我是一名行政助理。我需要建立一個 [dates] 期間在 [location] 進行兩天商務旅行的行程。我的經理住​​在 [hotel]。 建議距離酒店 10 分鐘步行範圍內有多種早餐和晚餐選擇，並找到一種娛樂選擇，例如電影院、當地藝術表演或熱門旅遊景點。把它放在桌子上給我 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 9,
      "keywords": [
        "Plan business travel",
        "page 9"
      ]
    },
    {
      "id": "card-9",
      "category": "admin",
      "title": "Track travel and entertainment budget",
      "titleZh": "追蹤旅行和娛樂預算",
      "summary": "Page 9",
      "summaryZh": "第 9 頁",
      "prompt": "Create a budget tracker for business travel. It should include columns for: date, expense type (meal, entertainment, transportation), vendor name, and a description. (Gemini in Sheets)",
      "promptZh": "建立商務旅行預算追蹤器。它應包括以下列：日期、費用類型(餐飲、娛樂、交通)、供應商名稱和說明 (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 9,
      "keywords": [
        "Track travel and entertainment budget",
        "page 9"
      ]
    },
    {
      "id": "card-10",
      "category": "communications",
      "title": "Create a press release",
      "titleZh": "建立新聞稿",
      "summary": "Page 10",
      "summaryZh": "第 10 頁",
      "prompt": "I’m a PR manager. I need to create a press release with a catchy title. Include quotes from @[VIP Quotes Acquisition]. (Gemini in Docs)",
      "promptZh": "我是公關經理。我需要創建一個具有吸引人的標題的新聞稿。包括 @[VIP Quotes Acquisition] 的引用 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 10,
      "keywords": [
        "Create a press release",
        "page 10"
      ]
    },
    {
      "id": "card-11",
      "category": "communications",
      "title": "Create a press release",
      "titleZh": "建立新聞稿",
      "summary": "Page 11",
      "summaryZh": "第 11 頁",
      "prompt": "Use @[Biography and Mission Statement] to add more information about the company that is being acquired, its mission, and how it got started. (Gemini in Docs)",
      "promptZh": "使用 @[Biography and Mission Statement] 添加更多有關被收購公司、其使命以及如何開始的資訊 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 11,
      "keywords": [
        "Create a press release",
        "page 11"
      ]
    },
    {
      "id": "card-12",
      "category": "communications",
      "title": "Prepare for analyst or press briefings",
      "titleZh": "準備分析師或新聞發布會",
      "summary": "Page 11",
      "summaryZh": "第 11 頁",
      "prompt": "Generate a brief template to prepare [spokesperson] for an upcoming media and analyst briefing for @[Product Launch]. Include space for a synopsis, key messages, and supporting data. (Gemini in Docs)",
      "promptZh": "產生一個簡短模板，為 [spokesperson] 即將舉行的 @[Product Launch] 媒體和分析師簡報做準備。包括概要、關鍵資訊和支援數據的空間 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 11,
      "keywords": [
        "Prepare for analyst or press briefings",
        "page 11"
      ]
    },
    {
      "id": "card-13",
      "category": "communications",
      "title": "Prepare for analyst or press briefings",
      "titleZh": "準備分析師或新聞發布會",
      "summary": "Page 11",
      "summaryZh": "第 11 頁",
      "prompt": "Craft a synopsis of the product launch in three main points using @[Product Launch - Notes]. (Gemini in Docs)",
      "promptZh": "使用 @[Product Launch - Notes] 製作產品發布的三個要點摘要 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 11,
      "keywords": [
        "Prepare for analyst or press briefings",
        "page 11"
      ]
    },
    {
      "id": "card-14",
      "category": "communications",
      "title": "Prepare for analyst or press briefings",
      "titleZh": "準備分析師或新聞發布會",
      "summary": "Page 11",
      "summaryZh": "第 11 頁",
      "prompt": "Organize my media and analyst contacts from @[Analyst and Journalist Contact Notes] for a new product briefing. I need to keep track of their names, type of contact (analyst or journalist), focus area, the name of the outlet, agency or firm that they work for, and a place where I can indicate the priority level of their attendance at this briefing (low, medium, high). (Gemini in Sheets)",
      "promptZh": "組織我在 @[Analyst and Journalist Contact Notes] 的媒體和分析師聯絡人，以進行新產品簡報。 我需要追蹤他們的姓名、聯絡人類型(分析師或記者)、關注領域、他們工作的媒體、機構或公司的名稱，以及我可以在其中表明他們出席本次簡報會的優先順序的位置(低、中、高) (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 11,
      "keywords": [
        "Prepare for analyst or press briefings",
        "page 11"
      ]
    },
    {
      "id": "card-15",
      "category": "communications",
      "title": "Prepare for analyst or press briefings",
      "titleZh": "準備分析師或新聞發布會",
      "summary": "Page 11",
      "summaryZh": "第 11 頁",
      "prompt": "Create a slide describing what [product] is from @[Product Launch - Notes]. Make sure it is short and easily understood by a broad audience. (Gemini in Slides)",
      "promptZh": "建立一張投影片，描述 [product] 是來自 @[Product Launch - Notes] 的內容。確保它簡短且易於廣大受眾理解 (Gemini in Slides)",
      "tools": [
        "PDF Source"
      ],
      "page": 11,
      "keywords": [
        "Prepare for analyst or press briefings",
        "page 11"
      ]
    },
    {
      "id": "card-16",
      "category": "communications",
      "title": "Create mock interview questions to prepare spokespeople",
      "titleZh": "建立模擬面試問題以幫助發言人做好準備",
      "summary": "Page 12",
      "summaryZh": "第 12 頁",
      "prompt": "I am a [PR/AR] manager at [company name]. We just launched [product] and had a briefing where we discussed [key messages]. I am preparing [spokesperson and role/title] for interviews. Generate a list of mock interview questions to help [spokesperson] prepare. Include a mixture of easy and hard questions, with some asking about the basics of [product] and some asking about the long-term vision of [product]. (Gemini Advanced)",
      "promptZh": "我是 [company name] 的 [PR/AR] 經理。我們剛剛推出了 [product] 並舉行了一次簡報，其中我們討論了 [key messages]。我正在準備[spokesperson and role/title]面試。產生模擬面試問題清單以幫助 [spokesperson] 做好準備。 包括簡單和困難的問題，有些詢問 [product] 的基礎知識，有些詢問 [product] 的長期願景 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 12,
      "keywords": [
        "Create mock interview questions to prepare spokespeople",
        "page 12"
      ]
    },
    {
      "id": "card-17",
      "category": "communications",
      "title": "Create mock interview questions to prepare spokespeople",
      "titleZh": "建立模擬面試問題以幫助發言人做好準備",
      "summary": "Page 12",
      "summaryZh": "第 12 頁",
      "prompt": "Use @[Product Launch Notes] to write suggested answers for these questions. Write the talking points as if you are [title of spokesperson] at [company]. (Gemini in Docs)",
      "promptZh": "使用 @[Product Launch Notes] 编写这些问题的建议答案。就好像您是 [company] 的 [title of spokesperson] 一样写下谈话要点 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 12,
      "keywords": [
        "Create mock interview questions to prepare spokespeople",
        "page 12"
      ]
    },
    {
      "id": "card-18",
      "category": "communications",
      "title": "Craft internal communications",
      "titleZh": "精心設計內部溝通",
      "summary": "Page 12",
      "summaryZh": "第 12 頁",
      "prompt": "I need to draft a company-wide memo unveiling our relaunched intranet. The [new page] addresses [common feedback we heard from employees] and aims to create a more user friendly experience. Draft an upbeat memo announcing [the new site] using @[Intranet Launch Plan Notes]. (Gemini in Docs)",
      "promptZh": "我需要起草一份全公司範圍的備忘錄，公佈我們重新啟動的內部網路。 [new page] 解決了 [common feedback we heard from employees] 的問題，旨在創造更用戶友好的體驗。使用 @[Intranet Launch Plan Notes] 起草一份樂觀的備忘錄，宣布 [the new site] (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 12,
      "keywords": [
        "Craft internal communications",
        "page 12"
      ]
    },
    {
      "id": "card-19",
      "category": "customer-service",
      "title": "Draft customer communications",
      "titleZh": "草擬客戶通訊",
      "summary": "Page 13",
      "summaryZh": "第 13 頁",
      "prompt": "Help me craft an empathetic email response. I am a customer service representative, and I need to create a response to a customer complaint. The customer ordered a pair of headphones that arrived damaged. They’ve already contacted us via email and provided pictures of the damage. I’ve offered a replacement, but they’re requesting an expedited shipping option that isn’t typically included with their order. Include a paragraph that acknowledges their frustration and three bullet points with potential resolutions. (Gemini in Docs)",
      "promptZh": "幫助我製作一封富有同理心的電子郵件回覆。我是客戶服務代表，我需要對客戶投訴做出回應。顧客訂購了一副耳機，但送達時已損壞。他們已經透過電子郵件聯繫我們並提供了損壞的照片。 我已經提供了替換品，但他們要求加急運送選項，而該選項通常不包含在他們的訂單中。包括一段承認他們的挫折感的段落和三個可能解決方案的要點 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 13,
      "keywords": [
        "Draft customer communications",
        "page 13"
      ]
    },
    {
      "id": "card-20",
      "category": "customer-service",
      "title": "Draft customer communications",
      "titleZh": "草擬客戶通訊",
      "summary": "Page 13",
      "summaryZh": "第 13 頁",
      "prompt": "Suggest 10 alternative options in place of expedited shipping to resolve the customer’s frustration about receiving the damaged package. (Gemini in Docs)",
      "promptZh": "建議 10 種替代方案來代替加急運送，以解決客戶因收到損壞包裹而產生的挫折感 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 13,
      "keywords": [
        "Draft customer communications",
        "page 13"
      ]
    },
    {
      "id": "card-21",
      "category": "customer-service",
      "title": "Respond to complex customer issues using FAQ documents",
      "titleZh": "使用常見問題解答文件回應複雜的客戶問題",
      "summary": "Page 14",
      "summaryZh": "第 14 頁",
      "prompt": "Summarize information about [product name] including the product’s specific [return policy], [ingredients], and [certifications]. (Gemini in Drive)",
      "promptZh": "總結有關 [product name] 的信息，包括產品特定的 [return policy]、[ingredients] 和 [certifications] (Gemini in Drive)",
      "tools": [
        "PDF Source"
      ],
      "page": 14,
      "keywords": [
        "Respond to complex customer issues using FAQ documents",
        "page 14"
      ]
    },
    {
      "id": "card-22",
      "category": "customer-service",
      "title": "Respond to complex customer issues using FAQ documents",
      "titleZh": "使用常見問題解答文件回應複雜的客戶問題",
      "summary": "Page 14",
      "summaryZh": "第 14 頁",
      "prompt": "Generate a response to the customer question about our [return policy] and [product certifications] based on @[Customer FAQ Document]. Use a helpful and professional tone. (Gemini in Gmail)",
      "promptZh": "根據 @[Customer FAQ Document] 產生對有關我們的 [return policy] 和 [product certifications] 的客戶問題的回應。使用樂於助人且專業的語調 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 14,
      "keywords": [
        "Respond to complex customer issues using FAQ documents",
        "page 14"
      ]
    },
    {
      "id": "card-23",
      "category": "customer-service",
      "title": "Standardize communication frameworks",
      "titleZh": "標準化溝通框架",
      "summary": "Page 14",
      "summaryZh": "第 14 頁",
      "prompt": "Draft templates for three different types of customer communication. Create templates for apology emails, order confirmation messages, and thank you notes for loyal customers. Keep each template to one paragraph and use a friendly tone. (Gemini in Docs)",
      "promptZh": "三種不同類型的客戶溝通的草稿範本。為忠誠客戶建立道歉電子郵件、訂單確認訊息和感謝信範本。將每個範本保留為一個段落並使用友善的語氣 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 14,
      "keywords": [
        "Standardize communication frameworks",
        "page 14"
      ]
    },
    {
      "id": "card-24",
      "category": "customer-service",
      "title": "Standardize communication frameworks",
      "titleZh": "標準化溝通框架",
      "summary": "Page 14",
      "summaryZh": "第 14 頁",
      "prompt": "Craft a list of customer communication best practices that can be used to train new team members. Outline three sections, including how to handle happy customer inquiries, neutral customer inquiries, and dissatisfied customer inquiries. (Gemini in Docs)",
      "promptZh": "制定可用於培訓新團隊成員的客戶溝通最佳實踐清單。概述三個部分，包括如何處理滿意的客戶詢問、中立的客戶詢問和不滿意的客戶詢問 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 14,
      "keywords": [
        "Standardize communication frameworks",
        "page 14"
      ]
    },
    {
      "id": "card-25",
      "category": "customer-service",
      "title": "Standardize communication frameworks",
      "titleZh": "標準化溝通框架",
      "summary": "Page 15",
      "summaryZh": "第 15 頁",
      "prompt": "I am a [customer service manager]. I am trying to create standardized language that the team can use when interacting with customers on phone calls. Generate templates for common call openings, greetings, and closures for a customer service representative at a retail store. These templates should allow for personalization with customer details. The goal is to ensure consistency and professionalism while allowing for differentiation with specific customer information. (Gemini Advanced)",
      "promptZh": "我是[customer service manager]。我正在嘗試創建團隊在透過電話與客戶互動時可以使用的標準化語言。為零售店的客戶服務代表產生常見通話開始、問候語和結束通話的範本。 這些模板應允許根據客戶詳細資訊進行個人化。目標是確保一致性和專業性，同時允許根據特定客戶資訊進行區分 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 15,
      "keywords": [
        "Standardize communication frameworks",
        "page 15"
      ]
    },
    {
      "id": "card-26",
      "category": "customer-service",
      "title": "Improve customer service",
      "titleZh": "改善客戶服務",
      "summary": "Page 15",
      "summaryZh": "第 15 頁",
      "prompt": "Draft an email to my colleagues proposing a meeting to discuss customer experience improvement initiatives. Request that marketing, sales, and product stakeholders meet in the next week to get a clear sense of roles and responsibilities. (Gemini in Gmail)",
      "promptZh": "起草一封電子郵件給我的同事，提議召開一次會議來討論客戶體驗改善措施。要求行銷、銷售和產品利益相關者在下週舉行會議，以明確角色和責任 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 15,
      "keywords": [
        "Improve customer service",
        "page 15"
      ]
    },
    {
      "id": "card-27",
      "category": "customer-service",
      "title": "Improve customer service",
      "titleZh": "改善客戶服務",
      "summary": "Page 15",
      "summaryZh": "第 15 頁",
      "prompt": "Create a table to track the progress and impact of different customer experience improvement tactics using relevant metrics, including support ticket volume and priority level (high, medium, low). (Gemini in Sheets)",
      "promptZh": "建立一個表格，使用相關指標追蹤不同客戶體驗改善策略的進度和影響，包括支援請求數量和優先順序(高、中、低) (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 15,
      "keywords": [
        "Improve customer service",
        "page 15"
      ]
    },
    {
      "id": "card-28",
      "category": "customer-service",
      "title": "Analyze customer feedback",
      "titleZh": "分析客戶回饋",
      "summary": "Page 15",
      "summaryZh": "第 15 頁",
      "prompt": "I am a customer support specialist. Using the attached spreadsheet, identify trends and patterns in our [customer feedback] by [category] over [time period]. Identify areas where [customer outreach] has increased significantly and investigate potential reasons. (Gemini Advanced)",
      "promptZh": "我是一名客戶支援專家。使用隨附的電子表格，透過 [category] 和 [time period] 確定 [customer feedback] 中的趨勢和模式。確定 [customer outreach] 顯著增加的區域並調查潛在原因 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 15,
      "keywords": [
        "Analyze customer feedback",
        "page 15"
      ]
    },
    {
      "id": "card-29",
      "category": "customer-service",
      "title": "Enable customer self-service",
      "titleZh": "啟用客戶自助服務",
      "summary": "Page 16",
      "summaryZh": "第 16 頁",
      "prompt": "Summarize this content to write a clear and concise product return policy and outline 5 steps for customers to take in sequential order. (Gemini Docs)",
      "promptZh": "總結此內容，撰寫清晰簡潔的產品退貨政策，並概述客戶按順序執行的 5 個步驟 (Gemini Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 16,
      "keywords": [
        "Enable customer self-service",
        "page 16"
      ]
    },
    {
      "id": "card-30",
      "category": "customer-service",
      "title": "Enable customer self-service",
      "titleZh": "啟用客戶自助服務",
      "summary": "Page 16",
      "summaryZh": "第 16 頁",
      "prompt": "Take this content and turn it into a short blog with the title “Resolve Common Issues Without Agent Assistance.” Have separate sections for our return policy, our refund policy, and our store credit policy. (Gemini in Docs)",
      "promptZh": "將此內容變成一個簡短的博客，標題為「在沒有代理協助的情況下解決常見問題」。我們的退貨政策、退款政策和商店信用政策有單獨的部分 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 16,
      "keywords": [
        "Enable customer self-service",
        "page 16"
      ]
    },
    {
      "id": "card-31",
      "category": "customer-service",
      "title": "Enable customer self-service",
      "titleZh": "啟用客戶自助服務",
      "summary": "Page 16",
      "summaryZh": "第 16 頁",
      "prompt": "Draft an email template to a customer that highlights self-service resources referencing [blog link] for [support issues]. Thank the customer for their business and assure them of our commitment to meeting their needs. (Gemini in Docs)",
      "promptZh": "起草發送給客戶的電子郵件模板，突出顯示引用 [support issues] 的自助服務資源。感謝客戶的業務並向他們保證我們致力於滿足他們的需求 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 16,
      "keywords": [
        "Enable customer self-service",
        "page 16"
      ]
    },
    {
      "id": "card-32",
      "category": "customer-service",
      "title": "Conduct voice of the customer research",
      "titleZh": "進行客戶之聲研究",
      "summary": "Page 16",
      "summaryZh": "第 16 頁",
      "prompt": "Request a follow-up conversation on [date] at [time] with this customer who provided negative feedback to understand their concern and offer resolutions. Include example solutions. (Gemini in Gmail)",
      "promptZh": "請求在 [time] 上與提供負面回饋的客戶進行後續對話，以了解他們的擔憂並提供解決方案。包括範例解決方案 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 16,
      "keywords": [
        "Conduct voice of the customer research",
        "page 16"
      ]
    },
    {
      "id": "card-33",
      "category": "customer-service",
      "title": "Conduct voice of the customer research",
      "titleZh": "進行客戶之聲研究",
      "summary": "Page 16",
      "summaryZh": "第 16 頁",
      "prompt": "Create five different questions to customers who have just spoken to an agent on the phone. Questions should gauge how effective the call was, if the customer’s concern was addressed, and if they would recommend our business to others. (Gemini in Docs)",
      "promptZh": "向剛剛透過電話與客服人員交談的客戶提出五個不同的問題。問題應該衡量電話的有效性、客戶的疑慮是否得到解決以及他們是否會向其他人推薦我們的業務 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 16,
      "keywords": [
        "Conduct voice of the customer research",
        "page 16"
      ]
    },
    {
      "id": "card-34",
      "category": "executives",
      "title": "Communicate on the go",
      "titleZh": "隨時隨地溝通",
      "summary": "Page 17",
      "summaryZh": "第 17 頁",
      "prompt": "Draft an email confirming that I will be at the board meeting. Ask if we can adjust the agenda to give 15 minutes to [urgent topics]. (Gemini in Gmail)",
      "promptZh": "起草一封電子郵件，確認我將出席董事會會議。詢問我們是否可以調整議程，給 [urgent topics] 15 分鐘 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 17,
      "keywords": [
        "Communicate on the go",
        "page 17"
      ]
    },
    {
      "id": "card-35",
      "category": "executives",
      "title": "Enhance personal productivity and time management",
      "titleZh": "提高個人生產力與時間管理",
      "summary": "Page 18",
      "summaryZh": "第 18 頁",
      "prompt": "Generate a response to [person] about [topic]. Include details on [deliverable] and [timeline] using @[Project A Status Report]. (Gemini in Gmail)",
      "promptZh": "產生有關 [topic] 的對 [person] 的回應。包括使用 @[Project A Status Report] 的 [deliverable] 和 [timeline] 的詳細資訊 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 18,
      "keywords": [
        "Enhance personal productivity and time management",
        "page 18"
      ]
    },
    {
      "id": "card-36",
      "category": "executives",
      "title": "Create outlines of presentations in seconds",
      "titleZh": "在幾秒鐘內建立簡報大綱",
      "summary": "Page 18",
      "summaryZh": "第 18 頁",
      "prompt": "I’m the CEO giving a presentation to [audience] at [event], and I want to create a detailed outline for my team to get started. I want to include a few important topics, including [areas of focus] and how our company is innovating with [company initiatives]. I’m envisioning time for a customer Q&A to end the presentation. Include suggested questions we could ask of a customer from the [industry] industry about how they are using our [product] to achieve [business outcome]. (Gemini Advanced)",
      "promptZh": "我是首席執行官，正在 [event] 上向 ZX​​QPH0QXZ 進行演示，我想為我的團隊創建一個詳細的入門大綱。我想介紹一些重要的主題，包括 [areas of focus] 以及我們公司如何利用 [company initiatives] 進行創新。 我正在設想用客戶問答來結束演示的時間。包括我們可以向 [industry] 行業客戶詢問的建議問題，了解他們如何使用我們的 [product] 來實現 [business outcome] (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 18,
      "keywords": [
        "Create outlines of presentations in seconds",
        "page 18"
      ]
    },
    {
      "id": "card-37",
      "category": "executives",
      "title": "Prepare challenging employee communications",
      "titleZh": "準備具有挑戰性的員工溝通",
      "summary": "Page 18",
      "summaryZh": "第 18 頁",
      "prompt": "Write two uplifting paragraphs for employees who have just finished a challenging quarter. Acknowledge [difficulties] and emphasize [positives] for the upcoming quarter. Use a tone that is motivating, optimistic, and fosters a sense of unity and collaboration. (Gemini in Docs)",
      "promptZh": "為剛結束充滿挑戰的季度的員工寫兩段令人振奮的段落。確認 [difficulties] 並強調下一季的 [positives]。使用激勵、樂觀並培養團結和協作意識的語氣 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 18,
      "keywords": [
        "Prepare challenging employee communications",
        "page 18"
      ]
    },
    {
      "id": "card-38",
      "category": "executives",
      "title": "Streamline responses on the go",
      "titleZh": "隨時隨地簡化回應",
      "summary": "Page 19",
      "summaryZh": "第 19 頁",
      "prompt": "Draft an email to [project lead] letting them know I will not be in the meeting due to an urgent matter. Ask them to take detailed notes and to ensure the team arrives at a decision on [key topic] in addition to assigning ownership of the postmortem report to [colleague]. (Gemini in Gmail)",
      "promptZh": "起草一封電子郵件給 [project lead]，讓他們知道我因緊急事務而不會參加會議。要求他們做詳細記錄，並確保團隊除了將事後報告的所有權分配給 [colleague] 之外，還可以就 [key topic] 做出決定 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 19,
      "keywords": [
        "Streamline responses on the go",
        "page 19"
      ]
    },
    {
      "id": "card-39",
      "category": "executives",
      "title": "Perform market research and campaign planning",
      "titleZh": "進行市場研究和活動規劃",
      "summary": "Page 19",
      "summaryZh": "第 19 頁",
      "prompt": "I’m a marketing leader conducting analysis in preparation for next year’s [launch]. Define my target audiences [audiences], for my new line of [product]. Include interests, relevant marketing channels, and top trends that drive their consideration and purchase behavior. (Gemini Advanced)",
      "promptZh": "我是一名行銷主管，正在為明年的 [launch] 進行分析。為我的新系列 [product] 定義我的目標受眾 [audiences]。包括興趣、相關行銷管道以及推動他們考慮和購買行為的熱門趨勢 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 19,
      "keywords": [
        "Perform market research and campaign planning",
        "page 19"
      ]
    },
    {
      "id": "card-40",
      "category": "executives",
      "title": "Perform market research and campaign planning",
      "titleZh": "進行市場研究和活動規劃",
      "summary": "Page 19",
      "summaryZh": "第 19 頁",
      "prompt": "Brainstorm value props for my [target audiences] based on features from @[Product Requirements Document]. Include a section on campaign learnings from @[Campaign Performance]. (Gemini in Docs)",
      "promptZh": "根據 @[Product Requirements Document] 的功能集思廣益，為我的 [target audiences] 提供價值道具。包括有關 @[Campaign Performance] 活動經驗的部分 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 19,
      "keywords": [
        "Perform market research and campaign planning",
        "page 19"
      ]
    },
    {
      "id": "card-41",
      "category": "executives",
      "title": "Brainstorm content and thought leadership",
      "titleZh": "集思廣益內容與思想領導力",
      "summary": "Page 20",
      "summaryZh": "第 20 頁",
      "prompt": "Generate a list of four relevant and engaging thought leadership blog post ideas for [company] based on trending topics, target audience analysis, and brand keywords. (Gemini in Docs)",
      "promptZh": "根據趨勢主題、目標受眾分析和品牌關鍵字，為 [company] 產生四個相關且引人入勝的思想領導部落格文章創意清單 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 20,
      "keywords": [
        "Brainstorm content and thought leadership",
        "page 20"
      ]
    },
    {
      "id": "card-42",
      "category": "executives",
      "title": "Brainstorm content and thought leadership",
      "titleZh": "集思廣益內容與思想領導力",
      "summary": "Page 20",
      "summaryZh": "第 20 頁",
      "prompt": "Generate three options for a new slogan emphasizing reliability, innovation, and a long history of popularity for [company]. (Gemini in Docs)",
      "promptZh": "為新口號產生三個選項，強調 [company] 的可靠性、創新和悠久的流行歷史 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 20,
      "keywords": [
        "Brainstorm content and thought leadership",
        "page 20"
      ]
    },
    {
      "id": "card-43",
      "category": "executives",
      "title": "Brainstorm content and thought leadership",
      "titleZh": "集思廣益內容與思想領導力",
      "summary": "Page 20",
      "summaryZh": "第 20 頁",
      "prompt": "Create an image of a trade show booth using orange and blue colors. The booth should be modern and showcase interactive computer stations. (Gemini in Slides)",
      "promptZh": "使用橙色和藍色創建貿易展覽攤位的圖像。展位應該是現代的，並展示互動式計算機站 (Gemini in Slides)",
      "tools": [
        "PDF Source"
      ],
      "page": 20,
      "keywords": [
        "Brainstorm content and thought leadership",
        "page 20"
      ]
    },
    {
      "id": "card-44",
      "category": "executives",
      "title": "Conduct competitive analysis",
      "titleZh": "進行競爭分析",
      "summary": "Page 20",
      "summaryZh": "第 20 頁",
      "prompt": "I am a CMO conducting a competitive analysis. My company is considering expanding into [a new line of business]. Generate a list of the top five competitors in the [industry] industry and include their pricing, strengths, weaknesses, and target audience. (Gemini Advanced)",
      "promptZh": "我是一名首席行銷官，正在進行競爭分析。我的公司正在考慮擴展到[a new line of business]。產生 [industry] 行業前五名競爭對手的列表，包括其定價、優勢、劣勢和目標受眾 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 20,
      "keywords": [
        "Conduct competitive analysis",
        "page 20"
      ]
    },
    {
      "id": "card-45",
      "category": "executives",
      "title": "Conduct competitive analysis",
      "titleZh": "進行競爭分析",
      "summary": "Page 20",
      "summaryZh": "第 20 頁",
      "prompt": "Okay, I am going to try to convince my CEO that we should expand into [line of business]. Draft a concise, competitive strategy outline for the next five years for the [industry] industry across North America markets with potential goals, strategies, and tactics. (Gemini Advanced)",
      "promptZh": "好的，我將嘗試說服我的執行長我們應該擴展到 [line of business]。為北美市場的 [industry] 產業起草一份簡潔、有競爭力的策略大綱，其中包括潛在的目標、策略和戰術 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 20,
      "keywords": [
        "Conduct competitive analysis",
        "page 20"
      ]
    },
    {
      "id": "card-46",
      "category": "executives",
      "title": "Communicate technical topics to non-technical audiences",
      "titleZh": "向非技術受眾傳達技術主題",
      "summary": "Page 21",
      "summaryZh": "第 21 頁",
      "prompt": "I am the CIO at [company], and I am trying to build the case to [adopt generative AI solutions]. I need to explain the technical concept of generative AI to a non-technical audience (the CEO and board). Help me write talking points that will help me convey what generative AI is, ways it could help us digitally transform, and why it’s important to our growth as a company. Include details about how it could potentially refocus our technical talent on more strategic work, help enhance our workforce’s productivity, and help us better serve our global workforce and customers. (Gemini Advanced)",
      "promptZh": "我是 [company] 的 CIO，我正在嘗試建立 [adopt generative AI solutions] 的案例。我需要向非技術受眾(執行長和董事會)解釋生成式人工智慧的技術概念。 幫助我寫一些談話要點，幫助我傳達生成式人工智慧是什麼、它如何幫助我們進行數位轉型，以及為什麼它對我們作為一家公司的成長很重要。 詳細說明它如何可能使我們的技術人才重新集中在更具策略性的工作上，幫助提高我們員工的生產力，並幫助我們更好地為全球員工和客戶服務 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 21,
      "keywords": [
        "Communicate technical topics to non-technical audiences",
        "page 21"
      ]
    },
    {
      "id": "card-47",
      "category": "executives",
      "title": "Communicate technical topics to non-technical audiences",
      "titleZh": "向非技術受眾傳達技術主題",
      "summary": "Page 21",
      "summaryZh": "第 21 頁",
      "prompt": "I need to build a presentation to explain a technical topic to a non-technical audience. Generate an [introduction slide] that [describes what generative AI is] using @[Gen AI Explanation Notes]. (Gemini in Slides)",
      "promptZh": "我需要製作一個簡報來向非技術受眾解釋技術主題。使用 @[Gen AI Explanation Notes] 產生 [introduction slide] [describes what generative AI is] (Gemini in Slides)",
      "tools": [
        "PDF Source"
      ],
      "page": 21,
      "keywords": [
        "Communicate technical topics to non-technical audiences",
        "page 21"
      ]
    },
    {
      "id": "card-48",
      "category": "executives",
      "title": "Develop technical summaries",
      "titleZh": "制定技術摘要",
      "summary": "Page 22",
      "summaryZh": "第 22 頁",
      "prompt": "Summarize the key findings and implications of this report for [audience]. Focus on the main [vulnerabilities] identified and the recommended actions to address them. Use a formal tone. (Gemini in Docs)",
      "promptZh": "總結本報告對 [audience] 的主要發現和影響。重點關注已確定的主要 [vulnerabilities] 以及解決這些問題的建議行動。使用正式的語氣 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 22,
      "keywords": [
        "Develop technical summaries",
        "page 22"
      ]
    },
    {
      "id": "card-49",
      "category": "executives",
      "title": "Track IT assets",
      "titleZh": "追蹤 IT 資產",
      "summary": "Page 22",
      "summaryZh": "第 22 頁",
      "prompt": "Create a tracker of software licenses for employees and include columns for license types, usage rights, and renewal dates. (Gemini in Sheets)",
      "promptZh": "為員工建立軟體許可證追蹤器，並包含許可證類型、使用權限和續約日期列 (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 22,
      "keywords": [
        "Track IT assets",
        "page 22"
      ]
    },
    {
      "id": "card-50",
      "category": "executives",
      "title": "Demonstrate employee appreciation",
      "titleZh": "表現出對員工的讚賞",
      "summary": "Page 22",
      "summaryZh": "第 22 頁",
      "prompt": "Brainstorm 10 employee appreciation ideas based on diverse employee interests such as cooking, gardening, sports, reading, and traveling. (Gemini in Docs)",
      "promptZh": "根據不同的員工興趣(例如烹飪、園藝、運動、閱讀和旅行)，集思廣益，提出 10 條員工欣賞想法 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 22,
      "keywords": [
        "Demonstrate employee appreciation",
        "page 22"
      ]
    },
    {
      "id": "card-51",
      "category": "executives",
      "title": "Assess employee satisfaction",
      "titleZh": "評估員工滿意度",
      "summary": "Page 23",
      "summaryZh": "第 23 頁",
      "prompt": "Draft an anonymous employee satisfaction survey with questions and answer options that touch upon key areas like workload, work-life balance, compensation, and career growth opportunities. Ensure the questions are clear, concise, and avoid leading answers. (Gemini in Docs)",
      "promptZh": "起草一份匿名員工滿意度調查，其中包含涉及工作量、工作與生活平衡、薪酬和職業發展機會等關鍵領域的問題和答案選項。確保問題清晰、簡潔，避免引導性答案 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 23,
      "keywords": [
        "Assess employee satisfaction",
        "page 23"
      ]
    },
    {
      "id": "card-52",
      "category": "executives",
      "title": "Assess employee satisfaction",
      "titleZh": "評估員工滿意度",
      "summary": "Page 23",
      "summaryZh": "第 23 頁",
      "prompt": "Summarize the results of the employee feedback to identify key themes. (Gemini in Docs)",
      "promptZh": "總結員工回饋的結果以確定關鍵主題 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 23,
      "keywords": [
        "Assess employee satisfaction",
        "page 23"
      ]
    },
    {
      "id": "card-53",
      "category": "frontline",
      "title": "Find accurate information quickly",
      "titleZh": "快速找到準確資訊",
      "summary": "Page 24",
      "summaryZh": "第 24 頁",
      "prompt": "Find the document that details the [company name]’s [holiday] sale details. (Gemini in Drive)",
      "promptZh": "尋找詳細說明 [company name] 的 [holiday] 銷售詳細資訊的文件 (Gemini in Drive)",
      "tools": [
        "PDF Source"
      ],
      "page": 24,
      "keywords": [
        "Find accurate information quickly",
        "page 24"
      ]
    },
    {
      "id": "card-54",
      "category": "frontline",
      "title": "Find accurate information quickly",
      "titleZh": "快速找到準確資訊",
      "summary": "Page 24",
      "summaryZh": "第 24 頁",
      "prompt": "How much can customers save on [product type] during this sale? (Gemini in Docs)",
      "promptZh": "在此促銷期間，顧客購買 [product type] 可以節省多少？ (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 24,
      "keywords": [
        "Find accurate information quickly",
        "page 24"
      ]
    },
    {
      "id": "card-55",
      "category": "frontline",
      "title": "Improve team collaboration by finding",
      "titleZh": "透過尋找改善團隊協作",
      "summary": "Page 25",
      "summaryZh": "第 25 頁",
      "prompt": "Find the document that discusses our new return and exchange policies. (Gemini in Drive)",
      "promptZh": "尋找討論我們新的退貨和換貨政策的文件 (Gemini in Drive)",
      "tools": [
        "PDF Source"
      ],
      "page": 25,
      "keywords": [
        "Improve team collaboration by finding",
        "page 25"
      ]
    },
    {
      "id": "card-56",
      "category": "frontline",
      "title": "Improve team collaboration by finding",
      "titleZh": "透過尋找改善團隊協作",
      "summary": "Page 25",
      "summaryZh": "第 25 頁",
      "prompt": "Write an email to my new colleagues summarizing @[Updated Return and Exchange Policy H2 2024]. (Gemini in Gmail)",
      "promptZh": "給我的新同事寫一封電子郵件，總結 @[Updated Return and Exchange Policy H2 2024] (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 25,
      "keywords": [
        "Improve team collaboration by finding",
        "page 25"
      ]
    },
    {
      "id": "card-57",
      "category": "frontline",
      "title": "Streamline task management",
      "titleZh": "簡化任務管理",
      "summary": "Page 25",
      "summaryZh": "第 25 頁",
      "prompt": "I am a retail manager and I need to create a checklist for my opening and closing duties. Create a template with columns for [opening and closing duties] from @[Onboarding New Hire Information]. (Gemini in Sheets)",
      "promptZh": "我是一名零售經理，我需要為我的開門和關門職責建立一份清單。建立一個模板，其中包含 @[Onboarding New Hire Information] 中的 [opening and closing duties] 的欄位 (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 25,
      "keywords": [
        "Streamline task management",
        "page 25"
      ]
    },
    {
      "id": "card-58",
      "category": "frontline",
      "title": "Streamline task management",
      "titleZh": "簡化任務管理",
      "summary": "Page 25",
      "summaryZh": "第 25 頁",
      "prompt": "Write an email to the team telling them what still needs to be done from the AM shift from @[Opening and Closing Duties Tracker]. (Gemini in Gmail)",
      "promptZh": "給團隊寫一封電子郵件，告訴他們 @[Opening and Closing Duties Tracker] 的上午班還需要做什麼 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 25,
      "keywords": [
        "Streamline task management",
        "page 25"
      ]
    },
    {
      "id": "card-59",
      "category": "frontline",
      "title": "Manage inventory",
      "titleZh": "管理庫存",
      "summary": "Page 26",
      "summaryZh": "第 26 頁",
      "prompt": "How many [units] of [product] do we have left in our inventory? (Gemini in Sheets)",
      "promptZh": "我們的庫存還剩下多少 [units] 或 [product]？ (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 26,
      "keywords": [
        "Manage inventory",
        "page 26"
      ]
    },
    {
      "id": "card-60",
      "category": "frontline",
      "title": "Manage audits",
      "titleZh": "管理審核",
      "summary": "Page 26",
      "summaryZh": "第 26 頁",
      "prompt": "Create a formula that helps me calculate the difference between two columns. Which items have a discrepancy in [the total number counted] versus [the quantity on hand]? (Gemini in Sheets)",
      "promptZh": "建立一個公式來幫助我計算兩列之間的差異。 [the total number counted] 與 [the quantity on hand] 中哪些項目有差異？ (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 26,
      "keywords": [
        "Manage audits",
        "page 26"
      ]
    },
    {
      "id": "card-61",
      "category": "frontline",
      "title": "Manage audits",
      "titleZh": "管理審核",
      "summary": "Page 26",
      "summaryZh": "第 26 頁",
      "prompt": "I’m a warehouse worker managing an audit. Write a message to my supervisor to let them know that I am looking into the products whose counts are incorrect. (Gemini in Gmail)",
      "promptZh": "我是一名負責審計的倉庫工作人員。給我的主管寫一條訊息，讓他們知道我正在調查計數不正確的產品 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 26,
      "keywords": [
        "Manage audits",
        "page 26"
      ]
    },
    {
      "id": "card-62",
      "category": "hr",
      "title": "Welcome new employees",
      "titleZh": "歡迎新進員工",
      "summary": "Page 27",
      "summaryZh": "第 27 頁",
      "prompt": "I am an HR manager, and I am developing a script for my presentation for new hires. I need to create the script for an onboarding presentation about our company’s commitment to employee development and well-being. Help me draft talking points that showcase why employee mentorship and development are core values for our company using @[Mission Statement and Core Values]. (Gemini in Docs)",
      "promptZh": "我是人力資源經理，我正在為新員工的簡報編寫腳本。我需要為入職簡報建立腳本，介紹我們公司對員工發展和福祉的承諾。 使用 @[Mission Statement and Core Values] 幫助我起草談話要點，展示為什麼員工指導和發展是我們公司的核心價值 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 27,
      "keywords": [
        "Welcome new employees",
        "page 27"
      ]
    },
    {
      "id": "card-63",
      "category": "hr",
      "title": "Welcome new employees",
      "titleZh": "歡迎新進員工",
      "summary": "Page 28",
      "summaryZh": "第 28 頁",
      "prompt": "Add four talking points for a new section of the presentation script that explains how we support our employees’ development. Mention our training and certification programs and mentorship opportunities using @[Learning and Development Paths], and write a strong closing statement about our expectation that everyone contributes to a respectful and welcoming workplace. Use a professional tone. (Gemini in Docs)",
      "promptZh": "為簡報腳本的新部分添加四個談話要點，解釋我們如何支持員工的發展。 使用 @[Learning and Development Paths] 提及我們的培訓和認證計劃以及指導機會，並撰寫一份強有力的結束語，表達我們希望每個人都為建立一個相互尊重和熱情的工作場所做出貢獻的期望。使用專業的語氣 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 28,
      "keywords": [
        "Welcome new employees",
        "page 28"
      ]
    },
    {
      "id": "card-64",
      "category": "hr",
      "title": "Report on recruitment metrics",
      "titleZh": "招募指標報告",
      "summary": "Page 28",
      "summaryZh": "第 28 頁",
      "prompt": "Help me create a formula to calculate the total total number of [hires] by [department]. (Gemini in Sheets)",
      "promptZh": "幫我建立一個公式，透過[department]計算[hires]的總數 (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 28,
      "keywords": [
        "Report on recruitment metrics",
        "page 28"
      ]
    },
    {
      "id": "card-65",
      "category": "hr",
      "title": "Report on recruitment metrics",
      "titleZh": "招募指標報告",
      "summary": "Page 28",
      "summaryZh": "第 28 頁",
      "prompt": "In what month did we hire the most people? (Gemini in Sheets)",
      "promptZh": "我們在哪一個月僱用了最多的人？ (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 28,
      "keywords": [
        "Report on recruitment metrics",
        "page 28"
      ]
    },
    {
      "id": "card-66",
      "category": "hr",
      "title": "Manage the recruiting process",
      "titleZh": "管理招募流程",
      "summary": "Page 28",
      "summaryZh": "第 28 頁",
      "prompt": "Create a list of strategies our recruiters can use to improve our existing recruiting process and identify potential job candidates. (Gemini in Docs)",
      "promptZh": "建立一個策略列表，我們的招募人員可以使用這些策略來改善我們現有的招募流程並識別潛在的求職者 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 28,
      "keywords": [
        "Manage the recruiting process",
        "page 28"
      ]
    },
    {
      "id": "card-67",
      "category": "hr",
      "title": "Manage the interview process",
      "titleZh": "管理面試流程",
      "summary": "Page 29",
      "summaryZh": "第 29 頁",
      "prompt": "I am opening a new job position on the marketing team. Write a compelling role description for a content marketing manager. Highlight key responsibilities [insert] and requirements, including B2B and B2C content creation, a minimum of five years experience, and a portfolio of writing examples. (Gemini in Docs)",
      "promptZh": "我正在行銷團隊開設一個新職位。為內容行銷經理撰寫引人注目的角色描述。 突出顯示主要職責 [insert] 和要求，包括 B2B 和 B2C 內容創建、至少五年的經驗以及寫作範例組合 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 29,
      "keywords": [
        "Manage the interview process",
        "page 29"
      ]
    },
    {
      "id": "card-68",
      "category": "hr",
      "title": "Communicate with candidates",
      "titleZh": "與候選人溝通",
      "summary": "Page 29",
      "summaryZh": "第 29 頁",
      "prompt": "I am writing an email to a job candidate who just finished the interview process. Create a template for an offer letter for the [selected candidate] for the [position] with a request to schedule a call to discuss benefits, compensation, and start date. (Gemini in Docs)",
      "promptZh": "我正在寫一封電子郵件給一位剛完成面試過程的求職者。建立 [selected candidate] 和 [position] 的錄取通知書模板，並請求安排電話討論福利、薪酬和開始日期 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 29,
      "keywords": [
        "Communicate with candidates",
        "page 29"
      ]
    },
    {
      "id": "card-69",
      "category": "hr",
      "title": "Communicate with candidates",
      "titleZh": "與候選人溝通",
      "summary": "Page 29",
      "summaryZh": "第 29 頁",
      "prompt": "I am writing an email to job candidates who finished the interview process, but who were not selected. Help me write a rejection letter for [candidate] for the [position]. Use an empathetic tone. (Gemini in Docs)",
      "promptZh": "我正在給完成面試過程但未被選中的求職者寫一封電子郵件。幫我為[position]寫一封[candidate]的拒絕信。使用善解人意的語氣 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 29,
      "keywords": [
        "Communicate with candidates",
        "page 29"
      ]
    },
    {
      "id": "card-70",
      "category": "hr",
      "title": "Create individualized learning and development plans",
      "titleZh": "制定個人化的學習和發展計劃",
      "summary": "Page 30",
      "summaryZh": "第 30 頁",
      "prompt": "Create a personalized learning and development plan for a new hire who needs to learn about [topic]. Organize it by day and suggest relevant files. (Gemini in Drive)",
      "promptZh": "為需要了解 [topic] 的新員工製定個人化的學習和發展計畫。按天整理並建議相關文件 (Gemini in Drive)",
      "tools": [
        "PDF Source"
      ],
      "page": 30,
      "keywords": [
        "Create individualized learning and development plans",
        "page 30"
      ]
    },
    {
      "id": "card-71",
      "category": "hr",
      "title": "Onboard employees",
      "titleZh": "入職員工",
      "summary": "Page 30",
      "summaryZh": "第 30 頁",
      "prompt": "Create a table that outlines a new employee’s first-week schedule, including key meetings, training sessions, and introductions. Provide a column for key contacts and priority level (low, medium, high) for each activity. (Gemini in Sheets)",
      "promptZh": "建立一個表格，概述新員工第一週的日程安排，包括重要會議、培訓課程和介紹。為每項活動提供關鍵聯絡人和優先順序(低、中、高)的欄位 (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 30,
      "keywords": [
        "Onboard employees",
        "page 30"
      ]
    },
    {
      "id": "card-72",
      "category": "hr",
      "title": "Communicate key findings and draft follow-up surveys",
      "titleZh": "傳達主要調查結果並擬定後續調查",
      "summary": "Page 31",
      "summaryZh": "第 31 頁",
      "prompt": "Design a team-bonding activity, such as an office scavenger hunt, to have team members work together during their team meeting. (Gemini in Docs)",
      "promptZh": "設計團隊凝聚力活動，例如辦公室尋寶遊戲，讓團隊成員在團隊會議期間一起工作 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 31,
      "keywords": [
        "Communicate key findings and draft follow-up surveys",
        "page 31"
      ]
    },
    {
      "id": "card-73",
      "category": "hr",
      "title": "Communicate key findings and draft follow-up surveys",
      "titleZh": "傳達主要調查結果並擬定後續調查",
      "summary": "Page 31",
      "summaryZh": "第 31 頁",
      "prompt": "Draft an email to the new employees on the [team] to meet the rest of their team and explain the team-building purposes of the meeting. (Gemini in Gmail)",
      "promptZh": "在 [team] 上起草一封電子郵件給新員工，與團隊的其他成員會面，並解釋會議的團隊建立目的 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 31,
      "keywords": [
        "Communicate key findings and draft follow-up surveys",
        "page 31"
      ]
    },
    {
      "id": "card-74",
      "category": "hr",
      "title": "Communicate key findings and draft follow-up surveys",
      "titleZh": "傳達主要調查結果並擬定後續調查",
      "summary": "Page 31",
      "summaryZh": "第 31 頁",
      "prompt": "Draft an email to senior leadership that summarizes the key findings from our [report]. Include a short introductory paragraph with bullet points on the most important findings. (Gemini in Docs)",
      "promptZh": "起草一封發送給高階領導層的電子郵件，總結我們 [report] 的主要發現。包括一個簡短的介紹段落，其中包含最重要發現的要點 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 31,
      "keywords": [
        "Communicate key findings and draft follow-up surveys",
        "page 31"
      ]
    },
    {
      "id": "card-75",
      "category": "marketing",
      "title": "Develop a visual identity",
      "titleZh": "開發視覺識別",
      "summary": "Page 32",
      "summaryZh": "第 32 頁",
      "prompt": "Generate ideas for a creative and eye-catching logo for my new business, a coffee shop combined with a video game cafe. Generate a logo considering the following: Dual Concept: The logo needs to clearly signal both the coffee and gaming aspects of the business without being too cluttered. Target Audience: Appeal to a wide range of gamers (casual and enthusiast), as well as coffee lovers seeking a unique hangout spot. Style Options: I’m open to these approaches — let’s get a few examples in each of these three styles to compare: Modern and Playful: Bold colors, fun graphics, maybe a pixel art aesthetic. Retro-Cool: Think classic arcade style — chunky lettering, neon color inspiration. Sleek and Minimalist: Clean lines, geometric shapes, a more subtle nod to both themes. (Gemini Advanced)",
      "promptZh": "為我的新業務(一家咖啡店和電子遊戲咖啡館)設計一個創意且引人注目的標誌。 生成標誌時應考慮以下因素： 雙重概念：標誌需要清楚地表明業務的咖啡和遊戲方面，但又不能太混亂。 目標受眾：吸引廣大的遊戲玩家(休閒玩家和發燒友)以及尋求獨特聚會場所的咖啡愛好者。 風格選項：我對這些方法持開放態度 - 讓我們在這三種風格中分別舉幾個例子來進行比較： 現代且有趣：大膽的色彩、有趣的圖形，也許還有像素藝術美學。復古酷：想想經典的街機風格－厚重的字體、霓虹燈顏色的靈感。 時尚簡約：簡潔的線條、幾何形狀，對這兩個主題的更微妙的認可 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 32,
      "keywords": [
        "Develop a visual identity",
        "page 32"
      ]
    },
    {
      "id": "card-76",
      "category": "marketing",
      "title": "Develop a visual identity",
      "titleZh": "開發視覺識別",
      "summary": "Page 33",
      "summaryZh": "第 33 頁",
      "prompt": "I like the retro-cool options. Can you provide three more in that same style? (Gemini Advanced)",
      "promptZh": "我喜歡復古酷炫的選擇。能再提供三個相同風格的嗎？ (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 33,
      "keywords": [
        "Develop a visual identity",
        "page 33"
      ]
    },
    {
      "id": "card-77",
      "category": "marketing",
      "title": "Develop a visual identity",
      "titleZh": "開發視覺識別",
      "summary": "Page 33",
      "summaryZh": "第 33 頁",
      "prompt": "Write a tagline and 10 potential names for the business to go with these logos. (Gemini Advanced)",
      "promptZh": "寫下與這些標誌搭配的標語和 10 個可能的企業名稱 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 33,
      "keywords": [
        "Develop a visual identity",
        "page 33"
      ]
    },
    {
      "id": "card-78",
      "category": "marketing",
      "title": "Develop brand strategy",
      "titleZh": "制定品牌策略",
      "summary": "Page 33",
      "summaryZh": "第 33 頁",
      "prompt": "I am a brand manager at [company]. Help me define a clear and effective brand architecture for [company], considering its diverse products and service portfolio. For additional context, here is our current brand portfolio: [List all existing brands, products, and services]. Here is our company mission and vision: [Provide a brief overview of the company’s mission and vision]. And these are our target audience(s): [describe target audience(s)]. Our desired brand positioning is [explain how the company wants to be perceived in the market]. (Gemini Advanced)",
      "promptZh": "我是 [company] 的品牌經理。考慮到 [company] 多樣化的產品和服務組合，幫助我為 [company] 定義一個清晰有效的品牌架構。如需了解更多信息，請參閱我們當前的品牌組合：[List all existing brands, products, and services]。 這是我們公司的使命和願景：[Provide a brief overview of the company’s mission and vision]。這些是我們的目標受眾：[describe target audience(s)]。我們預期的品牌定位是[explain how the company wants to be perceived in the market] (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 33,
      "keywords": [
        "Develop brand strategy",
        "page 33"
      ]
    },
    {
      "id": "card-79",
      "category": "marketing",
      "title": "Brainstorm brand partnerships",
      "titleZh": "集思廣益品牌合作關係",
      "summary": "Page 33",
      "summaryZh": "第 33 頁",
      "prompt": "I am a [brand manager] at [company] working to launch a new campaign focused on [topic]. Identify potential types of influencers and complementary brands that [company] could partner with to amplify the [campaign] on social media channels. The goal is to reach a wide audience of [audiences], while building credibility and driving engagement. (Gemini Advanced)",
      "promptZh": "我是 [company] 的 [brand manager]，致力於發起一項針對 [topic] 的新活動。確定 [company] 可以合作的潛在影響者和互補品牌類型，以在社群媒體管道上擴大 [campaign] 的影響力。 目標是吸引 [audiences] 的廣泛受眾，同時建立可信度並提高參與度 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 33,
      "keywords": [
        "Brainstorm brand partnerships",
        "page 33"
      ]
    },
    {
      "id": "card-80",
      "category": "marketing",
      "title": "Conduct market research and identify trends",
      "titleZh": "進行市場研究並確定趨勢",
      "summary": "Page 34",
      "summaryZh": "第 34 頁",
      "prompt": "I need to A/B test new messaging. Here is our messaging: [messaging]. Generate three different variations of ad copy. (Gemini Advanced)",
      "promptZh": "我需要對新訊息進行 A/B 測試。這是我們的消息：[messaging]。產生廣告文案的三種不同變體 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 34,
      "keywords": [
        "Conduct market research and identify trends",
        "page 34"
      ]
    },
    {
      "id": "card-81",
      "category": "marketing",
      "title": "Create and manage content and distribution",
      "titleZh": "創建和管理內容和分發",
      "summary": "Page 34",
      "summaryZh": "第 34 頁",
      "prompt": "Create a blog draft announcing that [name] is joining [company] as [position]. [Share two or three details from their bio, such as their previous position and company, their involvement in professional organizations, etc.]. (Gemini in Docs)",
      "promptZh": "建立部落格草稿，宣布 [name] 將以 [position] 的身份加入 [company]。 [Share two or three details from their bio, such as their previous position and company, their involvement in professional organizations, etc.] (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 34,
      "keywords": [
        "Create and manage content and distribution",
        "page 34"
      ]
    },
    {
      "id": "card-82",
      "category": "marketing",
      "title": "Create and manage content and distribution",
      "titleZh": "創建和管理內容和分發",
      "summary": "Page 34",
      "summaryZh": "第 34 頁",
      "prompt": "Create a project tracker for content amplification and include columns for channel, owner, URL, and priority level (low, medium, high). (Gemini in Sheets)",
      "promptZh": "建立用於內容放大的項目追蹤器，並包含頻道、所有者、URL 和優先順序(低、中、高)列 (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 34,
      "keywords": [
        "Create and manage content and distribution",
        "page 34"
      ]
    },
    {
      "id": "card-83",
      "category": "marketing",
      "title": "Analyze social media trends and other data to reduce",
      "titleZh": "分析社群媒體趨勢和其他數據以減少",
      "summary": "Page 35",
      "summaryZh": "第 35 頁",
      "prompt": "Generate a project tracker using the action items from @[Meeting Notes from Gemini]. (Gemini in Sheets)",
      "promptZh": "使用 @[Meeting Notes from Gemini] 中的操作項目產生專案追蹤器 (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 35,
      "keywords": [
        "Analyze social media trends and other data to reduce",
        "page 35"
      ]
    },
    {
      "id": "card-84",
      "category": "marketing",
      "title": "Perform audience research and develop personas",
      "titleZh": "進行受眾研究並開發角色",
      "summary": "Page 35",
      "summaryZh": "第 35 頁",
      "prompt": "I am a marketing specialist focused on [area] at [company]. I need to conduct in-depth audience research so that I can develop convincing marketing artifacts for [personas]. To start, help me generate a comprehensive profile of [target audience]. Include core demographics and psychographics, online platforms they frequent, key pain points [product] could solve, and language and messaging that resonates with them. (Gemini Advanced)",
      "promptZh": "我是一名行銷專家，專注於 [company] 的 [area]。我需要進行深入的受眾研究，以便為 [personas] 開發令人信服的行銷工件。首先，請幫我產生 [target audience] 的全面設定檔。 包括核心人口統計和心理統計數據、他們經常使用的線上平台、[product] 可以解決的關鍵痛點，以及與他們產生共鳴的語言和訊息 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 35,
      "keywords": [
        "Perform audience research and develop personas",
        "page 35"
      ]
    },
    {
      "id": "card-85",
      "category": "marketing",
      "title": "Create and optimize copy for search engine marketing (SEM)",
      "titleZh": "創建和優化搜尋引擎行銷 (SEM) 文案",
      "summary": "Page 36",
      "summaryZh": "第 36 頁",
      "prompt": "For my SEM campaign, use these keywords as inspiration to generate multiple ad copy variations with different headlines, descriptions, and calls to action for [product]. Use a [tone] tone in the copy. (Gemini Advanced)",
      "promptZh": "對於我的 SEM 廣告系列，使用這些關鍵字作為靈感，為 [product] 產生具有不同標題、描述和號召性用語的多個廣告文案變體。在副本中使用 [tone] 語氣 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 36,
      "keywords": [
        "Create and optimize copy for search engine marketing (SEM)",
        "page 36"
      ]
    },
    {
      "id": "card-86",
      "category": "marketing",
      "title": "Draft customer acquisition communications",
      "titleZh": "起草客戶獲取通訊",
      "summary": "Page 36",
      "summaryZh": "第 36 頁",
      "prompt": "Write three different email subject lines that reference [audience segments] and our [product]. Make them catchy but professional. (Gemini in Docs)",
      "promptZh": "寫三個不同的電子郵件主題行，引用 [audience segments] 和我們的 [product]。讓它們引人入勝但專業 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 36,
      "keywords": [
        "Draft customer acquisition communications",
        "page 36"
      ]
    },
    {
      "id": "card-87",
      "category": "marketing",
      "title": "Draft customer acquisition communications",
      "titleZh": "起草客戶獲取通訊",
      "summary": "Page 36",
      "summaryZh": "第 36 頁",
      "prompt": "Write an email proposing [suggested email subject lines] to the copywriting team. Keep the email short and simple and request feedback by the end of week. Thank them for their help. (Gemini in Gmail)",
      "promptZh": "寫一封電子郵件向文案團隊推薦 [suggested email subject lines]。保持電子郵件簡短，並在周末之前請求回饋。感謝他們的幫助 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 36,
      "keywords": [
        "Draft customer acquisition communications",
        "page 36"
      ]
    },
    {
      "id": "card-88",
      "category": "marketing",
      "title": "Generate inbound marketing campaigns",
      "titleZh": "產生入站行銷活動",
      "summary": "Page 37",
      "summaryZh": "第 37 頁",
      "prompt": "Create compelling copy for a landing page promoting a new [ebook/webinar/free trial and details] designed for an executive target audience. Highlight key benefits and encourage conversions with persuasive calls to action. (Gemini in Docs)",
      "promptZh": "为登陆页面创建引人注目的文案，宣传专为高管目标受众设计的新 [ebook/webinar/free trial and details]。突出关键优势并通过有说服力的号召性用语鼓励转化 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 37,
      "keywords": [
        "Generate inbound marketing campaigns",
        "page 37"
      ]
    },
    {
      "id": "card-89",
      "category": "marketing",
      "title": "Generate inbound marketing campaigns",
      "titleZh": "產生入站行銷活動",
      "summary": "Page 37",
      "summaryZh": "第 37 頁",
      "prompt": "Generate copy for a sequence of five automated emails to nurture leads after they download the ebook on [topic]. Personalize emails and encourage further engagement [with other valuable resources or offers]. (Gemini in Docs)",
      "promptZh": "為一系列五封自動電子郵件產生副本，以在潛在客戶在 [topic] 上下載電子書後培養潛在客戶。個人化電子郵件並鼓勵進一步參與 [with other valuable resources or offers] (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 37,
      "keywords": [
        "Generate inbound marketing campaigns",
        "page 37"
      ]
    },
    {
      "id": "card-90",
      "category": "marketing",
      "title": "Deliver personalized content to customers at scale",
      "titleZh": "大規模向客戶提供個人化內容",
      "summary": "Page 37",
      "summaryZh": "第 37 頁",
      "prompt": "Create a 5-step nurture email cadence to [prospective customers] who have signed up for [our newsletter], with the goal of getting them to [purchase] [product] using @[Product Specific Notes] and @[Product FAQ]. (Gemini in Docs)",
      "promptZh": "向已註冊 [our newsletter] 的 [prospective customers] 創建 5 步培育電子郵件節奏，目標是讓他們使用 @[Product Specific Notes] 和 @[Product FAQ] 達到 [purchase] [product] (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 37,
      "keywords": [
        "Deliver personalized content to customers at scale",
        "page 37"
      ]
    },
    {
      "id": "card-91",
      "category": "marketing",
      "title": "Create visuals for ad campaigns",
      "titleZh": "為廣告活動創造視覺效果",
      "summary": "Page 37",
      "summaryZh": "第 37 頁",
      "prompt": "Help me create inspirational images for a marketing campaign for [type of product]. Images should use [colors] and [natural elements, such as clouds]. Use a [photorealistic] style. (Gemini in Slides)",
      "promptZh": "幫助我為 [type of product] 的行銷活動創造鼓舞人心的圖像。影像應使用 [colors] 和 [natural elements, such as clouds]。使用 [photorealistic] 樣式 (Gemini in Slides)",
      "tools": [
        "PDF Source"
      ],
      "page": 37,
      "keywords": [
        "Create visuals for ad campaigns",
        "page 37"
      ]
    },
    {
      "id": "card-92",
      "category": "marketing",
      "title": "Generate inspiration for your blog",
      "titleZh": "為您的部落格帶來靈感",
      "summary": "Page 38",
      "summaryZh": "第 38 頁",
      "prompt": "Suggest blog post topics that would be interesting for people passionate about travel and the tourism industry. Here’s what I want you to focus on: Make the topics unique. There are lots of tourism blogs out there — let’s come up with fresh angles that would stand out. Keep the topics relevant. Tap into current trends or recent challenges/innovations within the tourism industry when brainstorming. I’d like each topic to include: Target audience: Who would this topic specifically appeal to? Content angle: What makes this post idea unique and engaging? Suggested format: Is this best as a listicle, a how-to guide, an interview piece, etc.? (Gemini Advanced)",
      "promptZh": "建議熱衷於旅行和旅遊業的人們感興趣的部落格文章主題。我希望您專注於以下內容：使主題獨一無二。那裡有很多旅遊部落格——讓我們想出一些脫穎而出的新角度。 保持主題相關。在集思廣益時利用旅遊業的當前趨勢或最新挑戰/創新。我希望每個主題都包含： 目標受眾：這個主題特別吸引誰？ 內容角度：是什麼讓這篇文章的想法獨特且有吸引力？建議的格式：最好將其作為清單、操作指南、訪談文章等嗎？ (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 38,
      "keywords": [
        "Generate inspiration for your blog",
        "page 38"
      ]
    },
    {
      "id": "card-93",
      "category": "marketing",
      "title": "Generate inspiration for your blog",
      "titleZh": "為您的部落格帶來靈感",
      "summary": "Page 38",
      "summaryZh": "第 38 頁",
      "prompt": "Create an image of a plane flying above the clouds over mountains and rivers during sunrise that I can use in the marketing campaign to promote my travel company. (Gemini Advanced)",
      "promptZh": "創建一個飛機在日出時分飛越山脈和河流的雲層的圖像，我可以在行銷活動中使用它來宣傳我的旅遊公司 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 38,
      "keywords": [
        "Generate inspiration for your blog",
        "page 38"
      ]
    },
    {
      "id": "card-94",
      "category": "marketing",
      "title": "Create social media posts",
      "titleZh": "創建社交媒體帖子",
      "summary": "Page 38",
      "summaryZh": "第 38 頁",
      "prompt": "Write three engaging social media posts about [product/service/topic] that would appeal to [target audience]. Keep each social media post to two sentences and include a call to action to visit [our website]. (Gemini in Docs)",
      "promptZh": "撰寫三篇關於 [product/service/topic] 的、吸引 [target audience] 的引人入勝的社交媒體帖子。每個社群媒體貼文保持兩句話，並包含訪問 [our website] 的號召性用語 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 38,
      "keywords": [
        "Create social media posts",
        "page 38"
      ]
    },
    {
      "id": "card-95",
      "category": "marketing",
      "title": "Create social media posts",
      "titleZh": "創建社交媒體帖子",
      "summary": "Page 38",
      "summaryZh": "第 38 頁",
      "prompt": "Create a social media post promoting our upcoming [event name]. Include attention-grabbing language and relevant hashtags for [audience]. (Gemini in Docs)",
      "promptZh": "創建社交媒體貼文宣傳我們即將推出的 [event name]。包括 [audience] 的引人注目的語言和相關主題標籤 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 38,
      "keywords": [
        "Create social media posts",
        "page 38"
      ]
    },
    {
      "id": "card-96",
      "category": "marketing",
      "title": "Create a strategic marketing plan",
      "titleZh": "制定策略行銷計劃",
      "summary": "Page 39",
      "summaryZh": "第 39 頁",
      "prompt": "I’m developing a marketing plan for a new app that provides [functionality]. My target audience is [audience]. Help me create a plan with a focus on [marketing channels]. Here’s what I’d like you to cover: competitor analysis, ideal marketing channel mix with rationale, budget recommendations, key messaging ideas, and proposed campaign timeline with KPIs. (Gemini Advanced)",
      "promptZh": "我正在為一款提供 [functionality] 的新應用程式製定行銷計劃。我的目標受眾是 [audience]。幫助我制定一個以 [marketing channels] 為重點的計劃。 我希望您介紹以下內容：競爭對手分析、理想的行銷管道組合及其基本原理、預算建議、關鍵資訊創意以及建議的行銷活動時間表和 KPI (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 39,
      "keywords": [
        "Create a strategic marketing plan",
        "page 39"
      ]
    },
    {
      "id": "card-97",
      "category": "marketing",
      "title": "Create a strategic marketing plan",
      "titleZh": "制定策略行銷計劃",
      "summary": "Page 39",
      "summaryZh": "第 39 頁",
      "prompt": "Draft an email to the CMO telling them that I will provide a one-pager with a strategic marketing plan for the new app launch project by [date], and it will include an executive summary, overview of the competitive landscape, top marketing channels, and the target demographic for all South American markets. (Gemini in Gmail)",
      "promptZh": "起草一封給 CMO 的電子郵件，告訴他們我將為 [date] 的新應用程式發布專案提供一份包含策略行銷計劃的尋呼機，其中將包括執行摘要、競爭格局概述、頂級行銷管道和目標人群 適用於所有南美洲市場 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 39,
      "keywords": [
        "Create a strategic marketing plan",
        "page 39"
      ]
    },
    {
      "id": "card-98",
      "category": "pm",
      "title": "Generate user acceptance tests",
      "titleZh": "產生用戶驗收測試",
      "summary": "Page 40",
      "summaryZh": "第 40 頁",
      "prompt": "Create a table with 10 user acceptance tests (UAT) for the website registration form. (Gemini Advanced)",
      "promptZh": "為網站註冊表單建立一個包含 10 個使用者驗收測試 (UAT) 的表格 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 40,
      "keywords": [
        "Generate user acceptance tests",
        "page 40"
      ]
    },
    {
      "id": "card-99",
      "category": "pm",
      "title": "Generate user acceptance tests",
      "titleZh": "產生用戶驗收測試",
      "summary": "Page 40",
      "summaryZh": "第 40 頁",
      "prompt": "Draft an email to [my colleague] who is running this UAT and explain what they need to do next. (Gemini Advanced)",
      "promptZh": "起草一封電子郵件給運行此 UAT 的 [my colleague]，並解釋他們下一步需要做什麼 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 40,
      "keywords": [
        "Generate user acceptance tests",
        "page 40"
      ]
    },
    {
      "id": "card-100",
      "category": "pm",
      "title": "Report on project status",
      "titleZh": "專案狀態報告",
      "summary": "Page 41",
      "summaryZh": "第 41 頁",
      "prompt": "Summarize this call transcript in a short paragraph. In bullet points, highlight the action items, decisions made, and owners for each item based off of [call transcript]. (Gemini in Docs)",
      "promptZh": "用一小段話總結這通通話記錄。在要點中，突出顯示基於 [call transcript] 的每個項目的行動項目、所做的決策和所有者 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 41,
      "keywords": [
        "Report on project status",
        "page 41"
      ]
    },
    {
      "id": "card-101",
      "category": "pm",
      "title": "Report on project status",
      "titleZh": "專案狀態報告",
      "summary": "Page 41",
      "summaryZh": "第 41 頁",
      "prompt": "Draft a project status update email template to send to my manager. Include sections for a summary of key accomplishments this week, any challenges faced, and the top three priorities for next week. (Gemini in Docs)",
      "promptZh": "起草專案狀態更新電子郵件範本並發送給我的經理。包括本週主要成就、面臨的任何挑戰以及下週的三個首要任務的摘要部分 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 41,
      "keywords": [
        "Report on project status",
        "page 41"
      ]
    },
    {
      "id": "card-102",
      "category": "pm",
      "title": "Report on project status",
      "titleZh": "專案狀態報告",
      "summary": "Page 41",
      "summaryZh": "第 41 頁",
      "prompt": "Write an invitation for a team lunch to celebrate the progress made on a project and include [date, time, and location]. Thank them for all of their hard work and acknowledge that this has been a challenging project. (Gemini in Gmail)",
      "promptZh": "寫一份團隊午餐邀請，以慶祝專案取得的進展，並包括 [date, time, and location]。感謝他們的辛勤工作，並承認這是一個具有挑戰性的項目 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 41,
      "keywords": [
        "Report on project status",
        "page 41"
      ]
    },
    {
      "id": "card-103",
      "category": "pm",
      "title": "Create a project retrospective",
      "titleZh": "建立專案回顧",
      "summary": "Page 41",
      "summaryZh": "第 41 頁",
      "prompt": "I need to write a report detailing the successes, failures, and lessons learned from [project]. Draft a list of 20 questions to guide a cross-team process investigation. Include questions to uncover what worked, what didn’t, specific process breakdowns, technical issues, communication gaps, or any other potential contributing factors to the problem or success of the project. (Gemini in Docs)",
      "promptZh": "我需要寫一份報告，詳細說明 [project] 的成功、失敗和教訓。起草 20 個問題的清單來指導跨團隊流程調查。 包括一些問題，以揭示哪些有效、哪些無效、具體流程故障、技術問題、溝通差距或任何其他導致問題或專案成功的潛在因素 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 41,
      "keywords": [
        "Create a project retrospective",
        "page 41"
      ]
    },
    {
      "id": "card-104",
      "category": "pm",
      "title": "Develop an issue tracker and related communications",
      "titleZh": "開發問題追蹤器和相關溝通",
      "summary": "Page 42",
      "summaryZh": "第 42 頁",
      "prompt": "Summarize this document in two paragraphs. Include high-level information about the project’s goals, the main contributors, the outcomes of the project, and any key successes or failures. (Gemini in Docs)",
      "promptZh": "用兩段總結本文檔。包括有關專案目標、主要貢獻者、專案成果以及任何關鍵成功或失敗的高級資訊 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 42,
      "keywords": [
        "Develop an issue tracker and related communications",
        "page 42"
      ]
    },
    {
      "id": "card-105",
      "category": "pm",
      "title": "Develop an issue tracker and related communications",
      "titleZh": "開發問題追蹤器和相關溝通",
      "summary": "Page 42",
      "summaryZh": "第 42 頁",
      "prompt": "Create a spreadsheet to track project issues, including descriptions, status, assigned owner, and action items for resolution. (Gemini in Sheets)",
      "promptZh": "建立電子表格來追蹤專案問題，包括描述、狀態、指派的所有者和解決方案的操作項目 (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 42,
      "keywords": [
        "Develop an issue tracker and related communications",
        "page 42"
      ]
    },
    {
      "id": "card-106",
      "category": "pm",
      "title": "Develop an issue tracker and related communications",
      "titleZh": "開發問題追蹤器和相關溝通",
      "summary": "Page 42",
      "summaryZh": "第 42 頁",
      "prompt": "Draft an email template to announce when an issue arises and include causes, solutions, and timelines to resolve it. (Gemini in Docs)",
      "promptZh": "起草電子郵件範本以在出現問題時進行公告，並包括原因、解決方案和解決時間表 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 42,
      "keywords": [
        "Develop an issue tracker and related communications",
        "page 42"
      ]
    },
    {
      "id": "card-107",
      "category": "pm",
      "title": "Develop an issue tracker and related communications",
      "titleZh": "開發問題追蹤器和相關溝通",
      "summary": "Page 42",
      "summaryZh": "第 42 頁",
      "prompt": "Draft an email template to a stakeholder to escalate a critical project issue, outlining the impact and proposed solution. (Gemini in Docs)",
      "promptZh": "起草向利害關係人發送的電子郵件模板，以升級關鍵專案問題，概述影響和建議的解決方案 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 42,
      "keywords": [
        "Develop an issue tracker and related communications",
        "page 42"
      ]
    },
    {
      "id": "card-108",
      "category": "pm",
      "title": "Create a workback schedule",
      "titleZh": "建立返工計劃",
      "summary": "Page 42",
      "summaryZh": "第 42 頁",
      "prompt": "I am a [technical project manager] at [company] overseeing [project and brief project description]. The project has the following scope: [scope]. Our project goals are: [project goals]. Our project deliverables are: [project deliverables]. Our budget is [budget], and our delivery date is [delivery date]. Help me create a workback schedule to keep the team on track. Include dates for key milestones and demos. (Gemini Advanced)",
      "promptZh": "我是 [company] 的 [technical project manager]，負責監督 [project and brief project description]。此項目範圍如下：[scope]。我們的專案目標是：[project goals]。我們的專案可交付成果是：[project deliverables]。我們的預算是[budget]，我們的交貨日期是[delivery date]。 幫助我制定一個返工計劃，讓團隊保持在正軌上。包括關鍵里程碑和演示的日期 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 42,
      "keywords": [
        "Create a workback schedule",
        "page 42"
      ]
    },
    {
      "id": "card-109",
      "category": "sales",
      "title": "Conduct customer research",
      "titleZh": "進行客戶研究",
      "summary": "Page 43",
      "summaryZh": "第 43 頁",
      "prompt": "Write an email to [name], the new [title] at [company]. Congratulate them on their new role. Introduce me as their contact point at [company name]. Invite them to lunch next week and check if they prefer Monday or Tuesday. (Gemini in Gmail)",
      "promptZh": "寫一封電子郵件給 [name]，即 [company] 的新 [title]。祝賀他們擔任新職務。介紹我作為他們在 [company name] 的聯絡人。邀請他們下週共進午餐，看看他們喜歡週一還是週二 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 43,
      "keywords": [
        "Conduct customer research",
        "page 43"
      ]
    },
    {
      "id": "card-110",
      "category": "sales",
      "title": "Conduct customer research",
      "titleZh": "進行客戶研究",
      "summary": "Page 44",
      "summaryZh": "第 44 頁",
      "prompt": "I am an account executive in charge of a new account, [customer name]. I need to do initial research. What is the market strategy of [customer]? (Gemini Advanced)",
      "promptZh": "我是一名客戶經理，負責一個新帳戶 [customer name]。我需要做初步研究。 [customer]的市場策略是什麼？ (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 44,
      "keywords": [
        "Conduct customer research",
        "page 44"
      ]
    },
    {
      "id": "card-111",
      "category": "sales",
      "title": "Conduct customer research",
      "titleZh": "進行客戶研究",
      "summary": "Page 44",
      "summaryZh": "第 44 頁",
      "prompt": "[URLs] Summarize these articles. Provide key insights and contextualize why these announcements are important. (Gemini Advanced)",
      "promptZh": "[URLs] 總結這些文章。提供關鍵見解並說明為何這些公告如此重要 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 44,
      "keywords": [
        "Conduct customer research",
        "page 44"
      ]
    },
    {
      "id": "card-112",
      "category": "sales",
      "title": "Conduct customer research",
      "titleZh": "進行客戶研究",
      "summary": "Page 44",
      "summaryZh": "第 44 頁",
      "prompt": "[YouTube URL] Summarize this interview and tell me more about [executive name]. What does [executive] care about? (Gemini Advanced)",
      "promptZh": "[YouTube URL] 總結一下這次採訪並告訴我更多關於[executive name]的資訊。 [executive]在乎什麼？ (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 44,
      "keywords": [
        "Conduct customer research",
        "page 44"
      ]
    },
    {
      "id": "card-113",
      "category": "sales",
      "title": "Conduct customer research",
      "titleZh": "進行客戶研究",
      "summary": "Page 44",
      "summaryZh": "第 44 頁",
      "prompt": "Tell me how [company] can help [customer company] with achieving their goals. (Gemini Advanced)",
      "promptZh": "告訴我 [company] 如何幫助 [customer company] 實現他們的目標 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 44,
      "keywords": [
        "Conduct customer research",
        "page 44"
      ]
    },
    {
      "id": "card-114",
      "category": "sales",
      "title": "Conduct customer research",
      "titleZh": "進行客戶研究",
      "summary": "Page 44",
      "summaryZh": "第 44 頁",
      "prompt": "Create an email draft for [customer] explaining why [your company] is the perfect partner for them to achieve their market goals. (Gemini in Docs)",
      "promptZh": "為 [customer] 建立電子郵件草稿，解釋為什麼 [your company] 是他們實現市場目標的完美合作夥伴 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 44,
      "keywords": [
        "Conduct customer research",
        "page 44"
      ]
    },
    {
      "id": "card-115",
      "category": "sales",
      "title": "Map customer journeys",
      "titleZh": "繪製客戶旅程地圖",
      "summary": "Page 44",
      "summaryZh": "第 44 頁",
      "prompt": "Create personalized onboarding materials for [customer]. Use @[Standard Onboarding Documents] and @[New Customer Migration Notes] to personalize the assets. (Gemini in Docs)",
      "promptZh": "為 [customer] 創建個人化的入門材料。使用 @[Standard Onboarding Documents] 和 @[New Customer Migration Notes] 對資產進行個人化設定 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 44,
      "keywords": [
        "Map customer journeys",
        "page 44"
      ]
    },
    {
      "id": "card-116",
      "category": "sales",
      "title": "Manage the request for proposal (RFP) process",
      "titleZh": "管理徵求建議書 (RFP) 流程",
      "summary": "Page 45",
      "summaryZh": "第 45 頁",
      "prompt": "I just received an RFP from [company]. Before I dive into the RFP, I want your help in conducting research. Give me a business profile of the company including all of the basics (where they are located, what they provide for customers, who their target audience is, any recent news from the company). Be as detailed as possible as I want to see a full view of [the company]. (Gemini Advanced)",
      "promptZh": "我剛剛收到 [company] 的 RFP。在我深入研究 RFP 之前，我希望您能幫助我進行研究。 給我一份公司的業務概況，包括所有基本資訊(他們位於哪裡、他們為客戶提供什麼、他們的目標受眾是誰、公司的任何最新消息)。盡可能詳細，因為我想看[the company]的全貌 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 45,
      "keywords": [
        "Manage the request for proposal (RFP) process",
        "page 45"
      ]
    },
    {
      "id": "card-117",
      "category": "sales",
      "title": "Manage the request for proposal (RFP) process",
      "titleZh": "管理徵求建議書 (RFP) 流程",
      "summary": "Page 45",
      "summaryZh": "第 45 頁",
      "prompt": "[URL or uploaded file] I am a sales manager at [company], and this is the RFP we’ve received from [company]. Summarize this content in a few paragraphs. What is the customer seeking, what is the budget, and when is a response due by? (Gemini Advanced)",
      "promptZh": "[URL or uploaded file] 我是 [company] 的銷售經理，這是我們從 [company] 收到的 RFP。用幾段話概括一下這個內容。客戶的需求是什麼，預算是多少，何時需要回覆？ (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 45,
      "keywords": [
        "Manage the request for proposal (RFP) process",
        "page 45"
      ]
    },
    {
      "id": "card-118",
      "category": "sales",
      "title": "Access information and tools on your phone while on the go",
      "titleZh": "隨時隨地存取手機上的資訊和工具",
      "summary": "Page 45",
      "summaryZh": "第 45 頁",
      "prompt": "Write a response to this email letting [them] know that I’ve received the message and will take [action] by [Friday]. (Gemini in Gmail)",
      "promptZh": "對此電子郵件進行回复，讓 [them] 知道我已收到該消息並將在 [Friday] 之前獲取 [action] (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 45,
      "keywords": [
        "Access information and tools on your phone while on the go",
        "page 45"
      ]
    },
    {
      "id": "card-119",
      "category": "sales",
      "title": "Develop customer relationships",
      "titleZh": "發展客戶關係",
      "summary": "Page 45",
      "summaryZh": "第 45 頁",
      "prompt": "Write an email inviting people interested in [focus area] to our happy hour taking place on [date, time] at [trade show event]. Include that we specialize in [focus area]. (Gemini in Gmail)",
      "promptZh": "寫一封電子郵件，邀請對 [focus area] 有興趣的人參加我們在 [date, time] 上 [trade show event] 舉辦的歡樂時光。包括我們專注於[focus area] (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 45,
      "keywords": [
        "Develop customer relationships",
        "page 45"
      ]
    },
    {
      "id": "card-120",
      "category": "sales",
      "title": "Develop customer relationships",
      "titleZh": "發展客戶關係",
      "summary": "Page 46",
      "summaryZh": "第 46 頁",
      "prompt": "Draft an email thanking customers for their time at the happy hour on [date, time, location]. End with an invitation to continue the conversations in the next few weeks. Use a friendly tone. (Gemini in Gmail)",
      "promptZh": "起草一封電子郵件，感謝客戶在 [date, time, location] 的歡樂時光度過的時光。最後邀請您在接下來的幾週內繼續進行對話。使用友善的語氣 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 46,
      "keywords": [
        "Develop customer relationships",
        "page 46"
      ]
    },
    {
      "id": "card-121",
      "category": "sales",
      "title": "Develop customer relationships",
      "titleZh": "發展客戶關係",
      "summary": "Page 46",
      "summaryZh": "第 46 頁",
      "prompt": "Draft 10 questions that I can use to survey customers about their recent experience with our [product/service]. Include questions to gauge how useful [the product] is, what they liked, and what they thought could use improvement. (Gemini in Docs)",
      "promptZh": "我可以用草擬的 10 個問題來調查客戶最近使用我們的 [product/service] 的體驗。包括一些問題來衡量 [the product] 的有用性、他們喜歡什麼以及他們認為哪些方面可以改進 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 46,
      "keywords": [
        "Develop customer relationships",
        "page 46"
      ]
    },
    {
      "id": "card-122",
      "category": "sales",
      "title": "Support the sales team",
      "titleZh": "支援銷售團隊",
      "summary": "Page 46",
      "summaryZh": "第 46 頁",
      "prompt": "Draft an email to all Southeast region sales leads. Inform them of [issues]. Advise them to communicate with their teams to contact their customers and offer a 20% discount on a future order as an apology. (Gemini in Gmail)",
      "promptZh": "起草一封發送給所有東南地區銷售線索的電子郵件。通知他們 [issues]。建議他們與團隊溝通聯繫客戶，並為未來的訂單提供 20% 的折扣作為道歉 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 46,
      "keywords": [
        "Support the sales team",
        "page 46"
      ]
    },
    {
      "id": "card-123",
      "category": "sales",
      "title": "Support the sales team",
      "titleZh": "支援銷售團隊",
      "summary": "Page 46",
      "summaryZh": "第 46 頁",
      "prompt": "Draft an email to the regional sales representatives about an urgent meeting that needs to take place next week about the [issues]. Ask them to provide availability on Monday or Tuesday. (Gemini in Gmail)",
      "promptZh": "起草一封電子郵件給區域銷售代表，告知下週需要召開有關 [issues] 的緊急會議。要求他們提供週一或週二的空閒時間 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 46,
      "keywords": [
        "Support the sales team",
        "page 46"
      ]
    },
    {
      "id": "card-124",
      "category": "sales",
      "title": "Coach and train the sales team",
      "titleZh": "輔導和訓練銷售團隊",
      "summary": "Page 46",
      "summaryZh": "第 46 頁",
      "prompt": "Create a half-day agenda for an educational session on our latest technology [products] for sales teams. Include time for the product development team to present and include time for lunch. (Gemini in Docs)",
      "promptZh": "為銷售團隊制定一個為期半天的關於我們最新技術 [products] 的教育課程議程。包括產品開發團隊展示的時間和午餐時間 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 46,
      "keywords": [
        "Coach and train the sales team",
        "page 46"
      ]
    },
    {
      "id": "card-125",
      "category": "sales",
      "title": "Coach and train the sales team",
      "titleZh": "輔導和訓練銷售團隊",
      "summary": "Page 47",
      "summaryZh": "第 47 頁",
      "prompt": "Create a spreadsheet that tracks online courses for sellers. Include columns for the course’s main topic, price, duration, and priority level. (Gemini in Sheets)",
      "promptZh": "建立一個電子表格來追蹤賣家的線上課程。包括課程主題、價格、持續時間和優先順序的列 (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 47,
      "keywords": [
        "Coach and train the sales team",
        "page 47"
      ]
    },
    {
      "id": "card-126",
      "category": "sales",
      "title": "Improve collaboration and execution by customizing sales materials",
      "titleZh": "透過客製化銷售材料來改善協作和執行",
      "summary": "Page 47",
      "summaryZh": "第 47 頁",
      "prompt": "Write a message to [customer] thanking them for their time at our last [meeting]. Provide a quick summary of the meeting and acknowledge any pain points discussed. Ask for additional time to discuss our [solution] using @[Customer Meeting Gemini Notes]. (Gemini in Gmail)",
      "promptZh": "給 [customer] 寫一則訊息，感謝他們在我們最後一次 [meeting] 中度過的時光。提供會議的快速摘要並確認討論的任何痛點。要求更多時間使用 @[Customer Meeting Gemini Notes] 討論我們的 [solution] (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 47,
      "keywords": [
        "Improve collaboration and execution by customizing sales materials",
        "page 47"
      ]
    },
    {
      "id": "card-127",
      "category": "sales",
      "title": "Improve collaboration and execution by customizing sales materials",
      "titleZh": "透過客製化銷售材料來改善協作和執行",
      "summary": "Page 47",
      "summaryZh": "第 47 頁",
      "prompt": "I am an [account manager] and I just finished a call with [customer]. I want to summarize the [pain points] mentioned by [customer] during our last meeting. Provide a list of direct quotes from @[Customer Call Transcript] where [customer] discusses what they are trying to solve. (Gemini in Docs)",
      "promptZh": "我是 [account manager]，我剛完成與 [customer] 的通話。我想總結一下我們上次會議時[customer]提到的[pain points]。提供 @[Customer Call Transcript] 的直接引用列表，其中 [customer] 討論了他們試圖解決的問題 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 47,
      "keywords": [
        "Improve collaboration and execution by customizing sales materials",
        "page 47"
      ]
    },
    {
      "id": "card-128",
      "category": "sales",
      "title": "Improve collaboration and execution by customizing sales materials",
      "titleZh": "透過客製化銷售材料來改善協作和執行",
      "summary": "Page 47",
      "summaryZh": "第 47 頁",
      "prompt": "I need to create convincing reasons why [customer] should adopt [product] to solve for [their pain points]. Write specific reasons why [product] from [company] could help them achieve their [business goals] using @[Product Sales Kit Full Assets]. (Gemini in Docs)",
      "promptZh": "我需要創造令人信服的理由為什麼 [customer] 應該採用 [product] 來解 [their pain points]。寫出 [company] 中的 [product] 可以幫助他們使用 @[Product Sales Kit Full Assets] 來實現 [business goals] 的具體原因 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 47,
      "keywords": [
        "Improve collaboration and execution by customizing sales materials",
        "page 47"
      ]
    },
    {
      "id": "card-129",
      "category": "sales",
      "title": "Build customer relationships",
      "titleZh": "建立客戶關係",
      "summary": "Page 48",
      "summaryZh": "第 48 頁",
      "prompt": "Compose a personalized follow-up email to [client] following an initial conversation. Summarize the key points we discussed and address any outstanding questions. (Gemini in Docs)",
      "promptZh": "在初次對話後，撰寫個人化的後續電子郵件至 [client]。總結我們討論的要點並解決任何懸而未決的問題 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 48,
      "keywords": [
        "Build customer relationships",
        "page 48"
      ]
    },
    {
      "id": "card-130",
      "category": "sales",
      "title": "Build customer relationships",
      "titleZh": "建立客戶關係",
      "summary": "Page 48",
      "summaryZh": "第 48 頁",
      "prompt": "Draft four email templates to check in on my customer weekly now that they have purchased our new [service]. Use one value proposition (cost, ease of use, security, availability, and customization) as the main topic for each email, and include [call to action] in each message. (Gemini in Docs)",
      "promptZh": "既然我的客戶已經購買了我們的新 [service]，請起草四封電子郵件範本以每週檢查他們的情況。使用一個價值主張(成本、易用性、安全性、可用性和自訂)作為每封電子郵件的主要主題，並在每個訊息中包含 [call to action] (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 48,
      "keywords": [
        "Build customer relationships",
        "page 48"
      ]
    },
    {
      "id": "card-131",
      "category": "sales",
      "title": "Prepare for new customer calls",
      "titleZh": "準備迎接新客戶的來電",
      "summary": "Page 48",
      "summaryZh": "第 48 頁",
      "prompt": "Draft a customized script for me to follow during my sales call with a prospect. The call will happen over a video call and is set to last 30 minutes. Make sure to add the following in the script: how [company products/solutions] can help address potential customer’s pain points, how [company]’s delivery system guarantees seamless and timely delivery, competitive pricing and volume-discount table, and space for a customer reference in the [customer’s industry] industry. (Gemini Advanced)",
      "promptZh": "起草一份客製化腳本，供我在與潛在客戶進行銷售拜訪時遵循。通話將透過視訊通話進行，持續時間設定為 30 分鐘。 確保在腳本中添加以下內容：[company products/solutions] 如何幫助解決潛在客戶的痛點、[company] 的交付系統如何保證無縫和及時的交付、有競爭力的定價和批量折扣表以及供客戶參考的空間 [customer’s industry] 產業 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 48,
      "keywords": [
        "Prepare for new customer calls",
        "page 48"
      ]
    },
    {
      "id": "card-132",
      "category": "sales",
      "title": "Prepare for new customer calls",
      "titleZh": "準備迎接新客戶的來電",
      "summary": "Page 48",
      "summaryZh": "第 48 頁",
      "prompt": "Generate an elevator pitch for [product name] and include key benefits, competitive points of differentiation, and the pain points that [product name] solves for. (Gemini in Docs)",
      "promptZh": "為 [product name] 產生電梯推介，包括主要優勢、差異化競爭點以及 [product name] 解決的痛點 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 48,
      "keywords": [
        "Prepare for new customer calls",
        "page 48"
      ]
    },
    {
      "id": "card-133",
      "category": "sales",
      "title": "Prepare for new customer calls",
      "titleZh": "準備迎接新客戶的來電",
      "summary": "Page 49",
      "summaryZh": "第 49 頁",
      "prompt": "I have an upcoming call with a prospect. [Use case] is a new use case for me, and I need help preparing for the call. List the most likely objections [customer] might have for me during a sales call, with suggestions on how to respond to them. I work in [industry], and I am trying to sell [product]. Also provide ideas on how to handle objections and suggest ways to respond. (Gemini Advanced)",
      "promptZh": "我即將與潛在客戶通電話。 [Use case] 對我來說是一個新用例，我需要幫助準備通話。列出 [customer] 在銷售電話中最可能對我提出的反對意見，並提供如何回應這些反對意見的建議。 我在[industry]工作，我正在嘗試銷售[product]。也提供有關如何處理異議的想法並​​提出回應方法 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 49,
      "keywords": [
        "Prepare for new customer calls",
        "page 49"
      ]
    },
    {
      "id": "card-134",
      "category": "sales",
      "title": "Nurture relationships, personalized outreach, and thought leadership",
      "titleZh": "培養關係、個人化外展和思想領導力",
      "summary": "Page 49",
      "summaryZh": "第 49 頁",
      "prompt": "Draft an outreach email template to industry influencers. Express gratitude that we connected at [event], and propose collaboration opportunities such as [opportunities]. (Gemini in Docs)",
      "promptZh": "為產業影響者起草一份外展電子郵件範本。對我們在 [event] 上建立聯繫表示感謝，並提出 [opportunities] 等合作機會 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 49,
      "keywords": [
        "Nurture relationships, personalized outreach, and thought leadership",
        "page 49"
      ]
    },
    {
      "id": "card-135",
      "category": "sales",
      "title": "Nurture relationships, personalized outreach, and thought leadership",
      "titleZh": "培養關係、個人化外展和思想領導力",
      "summary": "Page 49",
      "summaryZh": "第 49 頁",
      "prompt": "Summarize this blog content in bullet points and generate three ideas for follow-up questions I can ask my customers about their thoughts. (Gemini in Docs)",
      "promptZh": "用重點總結此部落格內容，並針對後續問題提出三個想法，我可以向客戶詢問他們的想法 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 49,
      "keywords": [
        "Nurture relationships, personalized outreach, and thought leadership",
        "page 49"
      ]
    },
    {
      "id": "card-136",
      "category": "sales",
      "title": "Generate personalized customer appreciation materials",
      "titleZh": "生成個人化的客戶感謝資料",
      "summary": "Page 49",
      "summaryZh": "第 49 頁",
      "prompt": "Generate a personalized email for [customer] on their one-month anniversary working with [company]. Thank them for being a customer. Ask them if they have any questions. Include information about [other product]. (Gemini in Gmail)",
      "promptZh": "在 [customer] 與 [company] 合作一個月週年紀念日時，為 [customer] 產生一封個人化電子郵件。感謝他們成為客戶。詢問他們是否有任何問題。包括有關 [other product] 的資訊 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 49,
      "keywords": [
        "Generate personalized customer appreciation materials",
        "page 49"
      ]
    },
    {
      "id": "card-137",
      "category": "sales",
      "title": "Generate personalized customer appreciation materials",
      "titleZh": "生成個人化的客戶感謝資料",
      "summary": "Page 49",
      "summaryZh": "第 49 頁",
      "prompt": "Give me a list of gifts to send new clients that are under $200 and can be shipped to offices. (Gemini in Sheets)",
      "promptZh": "給我一份可以送給新客戶的禮物清單，價格不超過 200 美元，並且可以運送到辦公室 (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 49,
      "keywords": [
        "Generate personalized customer appreciation materials",
        "page 49"
      ]
    },
    {
      "id": "card-138",
      "category": "small-business",
      "title": "Create pricing comparison",
      "titleZh": "建立定價比較",
      "summary": "Page 50",
      "summaryZh": "第 50 頁",
      "prompt": "I’m a business owner and I’m trying to determine the right cleaning vendor using @[Company A Proposal] and @[Company B Proposal]. I need someone to come twice a week, and I want them to vacuum, mop, dust, clean the windows, and wipe down all surfaces. If available, include information about the booking and cancellation policy. Create a comparison table between the two companies’ proposals. (Gemini in Docs)",
      "promptZh": "我是企業主，我正在嘗試使用 @[Company A Proposal] 和 @[Company B Proposal] 來確定合適的清潔供應商。我需要有人每週來兩次，我希望他們吸塵、拖地、除塵、清潔窗戶並擦拭所有表面。 如果有，請提供有關預訂和取消政策的資訊。建立兩家公司提案之間的比較表 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 50,
      "keywords": [
        "Create pricing comparison",
        "page 50"
      ]
    },
    {
      "id": "card-139",
      "category": "small-business",
      "title": "Create pricing comparison",
      "titleZh": "建立定價比較",
      "summary": "Page 51",
      "summaryZh": "第 51 頁",
      "prompt": "Write an email to Company A thanking them for their time and their proposal. Ask for a few times to meet to schedule cleanings. (Gemini in Gmail)",
      "promptZh": "給 A 公司寫一封電子郵件，感謝他們的時間和建議。要求幾次見面以安排清潔工作 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 51,
      "keywords": [
        "Create pricing comparison",
        "page 51"
      ]
    },
    {
      "id": "card-140",
      "category": "small-business",
      "title": "Brainstorm and generate marketing content",
      "titleZh": "集思廣益並產生行銷內容",
      "summary": "Page 51",
      "summaryZh": "第 51 頁",
      "prompt": "I own a [type of business] in [location]. I am working on marketing materials to advertise [event/sale] on [services]. I want to focus on using this sale to bring in repeat customers who haven’t purchased in a while and new customers alike. I want the social posts to feel [inspirational] and [fun]. Suggest some social copy I can use on [social platform] with relevant hashtags, suggested newsletter copy, and two email drafts (one for existing customers and one for new customers). (Gemini Advanced)",
      "promptZh": "我在 [location] 中擁有 [type of business]。我正在製作行銷材料，以便在 [services] 上為 [event/sale] 做廣告。我想重點利用這次促銷來吸引一段時間沒有購買的回頭客和新客戶。 我希望社交貼文給人 [inspirational] 和 [fun] 的感覺。建議一些我可以在 [social platform] 上使用的社交副本，其中包含相關主題標籤、建議的新聞通訊副本和兩份電子郵件草稿(一份針對現有客戶，一份針對新客戶) (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 51,
      "keywords": [
        "Brainstorm and generate marketing content",
        "page 51"
      ]
    },
    {
      "id": "card-141",
      "category": "small-business",
      "title": "Brainstorm and generate marketing content",
      "titleZh": "集思廣益並產生行銷內容",
      "summary": "Page 51",
      "summaryZh": "第 51 頁",
      "prompt": "What are some other effective [event/sale] tactics I can use to bring in new customers? I don’t always want to offer discounts. Are there other incentives I am overlooking? (Gemini Advanced)",
      "promptZh": "我可以使用哪些其他有效的 [event/sale] 策略來吸引新客戶？我並不總是想提供折扣。還有其他我忽略的激勵措施嗎？ (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 51,
      "keywords": [
        "Brainstorm and generate marketing content",
        "page 51"
      ]
    },
    {
      "id": "card-142",
      "category": "small-business",
      "title": "Develop a competitive analysis",
      "titleZh": "制定競爭分析",
      "summary": "Page 52",
      "summaryZh": "第 52 頁",
      "prompt": "I am an online business owner. I am considering opening a brick-and-mortar store. Conduct an analysis into the competitive landscape focusing on [focus area]. Provide the strengths and weaknesses of [key competitors] in this area, including their specific strategies, tactics, and results. Identify actionable insights and recommendations for how [my company] can improve its approach and gain a competitive advantage. (Gemini Advanced)",
      "promptZh": "我是一名線上企業主。我正在考慮開設一家實體店。以[focus area]為重點進行競爭格局分析。提供[key competitors]在這方面的優勢和劣勢，包括他們的具體策略、戰術和結果。 確定 [my company] 如何改進其方法並獲得競爭優勢的可行見解和建議 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 52,
      "keywords": [
        "Develop a competitive analysis",
        "page 52"
      ]
    },
    {
      "id": "card-143",
      "category": "small-business",
      "title": "Develop a competitive analysis",
      "titleZh": "制定競爭分析",
      "summary": "Page 52",
      "summaryZh": "第 52 頁",
      "prompt": "Generate a competitive analysis of [company] versus [competitor] within the current market landscape. (Gemini Advanced)",
      "promptZh": "在目前市場格局中產生 [company] 與 [competitor] 的競爭分析 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 52,
      "keywords": [
        "Develop a competitive analysis",
        "page 52"
      ]
    },
    {
      "id": "card-144",
      "category": "small-business",
      "title": "Conduct fundraising and investor relations",
      "titleZh": "進行募款及投資者關係",
      "summary": "Page 52",
      "summaryZh": "第 52 頁",
      "prompt": "Draft a personalized email template to potential investors, highlighting [company’s] unique value proposition and recent progress on [initiatives]. Request a time to meet to discuss opportunities to collaborate in the next month. (Gemini in Docs)",
      "promptZh": "為潛在投資者起草個人化電子郵件模板，強調 [company’s] 獨特的價值主張和 [initiatives] 的最新進展。請求安排時間會面，討論下個月的合作機會 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 52,
      "keywords": [
        "Conduct fundraising and investor relations",
        "page 52"
      ]
    },
    {
      "id": "card-145",
      "category": "small-business",
      "title": "Conduct fundraising and investor relations",
      "titleZh": "進行募款及投資者關係",
      "summary": "Page 52",
      "summaryZh": "第 52 頁",
      "prompt": "Draft an email thanking a potential investor for the call and ask for time to schedule a follow-up meeting to address [questions and concerns]. (Gemini in Docs)",
      "promptZh": "起草一封電子郵件，感謝潛在投資者的來電，並請求時間安排後續會議以解決 [questions and concerns] 問題 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 52,
      "keywords": [
        "Conduct fundraising and investor relations",
        "page 52"
      ]
    },
    {
      "id": "card-146",
      "category": "small-business",
      "title": "Manage time off policies and tracking",
      "titleZh": "管理休假政策和追蹤",
      "summary": "Page 53",
      "summaryZh": "第 53 頁",
      "prompt": "Generate a step-by-step checklist summarizing the company’s time-off request policy. Ensure it is written in plain language and easy for employees to understand. (Gemini in Docs)",
      "promptZh": "產生一份逐步清單，總結公司的休假請求政策。確保它以簡單的語言編寫並且易於員工理解 (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 53,
      "keywords": [
        "Manage time off policies and tracking",
        "page 53"
      ]
    },
    {
      "id": "card-147",
      "category": "small-business",
      "title": "Manage time off policies and tracking",
      "titleZh": "管理休假政策和追蹤",
      "summary": "Page 53",
      "summaryZh": "第 53 頁",
      "prompt": "Create a table that tracks weekly staffing. Create columns for date, name, shift (AM or PM), and notes. (Gemini in Sheets)",
      "promptZh": "建立一個追蹤每週人員配置的表。建立日期、名稱、班次(上午或下午)和註解列 (Gemini in Sheets)",
      "tools": [
        "PDF Source"
      ],
      "page": 53,
      "keywords": [
        "Manage time off policies and tracking",
        "page 53"
      ]
    },
    {
      "id": "card-148",
      "category": "startup",
      "title": "Brainstorm business and strategy",
      "titleZh": "集思廣益業務與策略",
      "summary": "Page 54",
      "summaryZh": "第 54 頁",
      "prompt": "I am a founder at a startup focused on [industry]. I was brainstorming with colleagues about [topic], and we took notes on this whiteboard. Turn these notes into text. (Gemini Advanced)",
      "promptZh": "我是一家專注於 [industry] 的新創公司的創辦人。我正在與同事就 [topic] 進行頭腦風暴，我們在這個白板上做了筆記。將這些筆記變成文字 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 54,
      "keywords": [
        "Brainstorm business and strategy",
        "page 54"
      ]
    },
    {
      "id": "card-149",
      "category": "startup",
      "title": "Brainstorm business and strategy",
      "titleZh": "集思廣益業務與策略",
      "summary": "Page 55",
      "summaryZh": "第 55 頁",
      "prompt": "Suggest follow-up items we could discuss for our [topic of brainstorm session]. What was not covered that could have been, and what are we potentially missing? (Gemini Advanced)",
      "promptZh": "建議我們可以討論 [topic of brainstorm session] 的後續項目。哪些本來可以涵蓋但沒有涵蓋的內容，以及我們可能遺漏的內容？ (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 55,
      "keywords": [
        "Brainstorm business and strategy",
        "page 55"
      ]
    },
    {
      "id": "card-150",
      "category": "startup",
      "title": "Brainstorm business and strategy",
      "titleZh": "集思廣益業務與策略",
      "summary": "Page 55",
      "summaryZh": "第 55 頁",
      "prompt": "Use @[Brainstorm Notes and Ideas 9/1/24] to write a meeting recap to the team using an upbeat and friendly tone. Share some of the ideas I have for our next meeting to discuss [topic]. (Gemini in Gmail)",
      "promptZh": "Use @[Brainstorm Notes and Ideas 9/1/24] to write a meeting recap to the team using an upbeat and friendly tone.分享一些我對下次會議討論 [topic] 的想法 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 55,
      "keywords": [
        "Brainstorm business and strategy",
        "page 55"
      ]
    },
    {
      "id": "card-151",
      "category": "startup",
      "title": "Create an elevator pitch (speech to text)",
      "titleZh": "創建電梯推廣(語音轉文字)",
      "summary": "Page 55",
      "summaryZh": "第 55 頁",
      "prompt": "I’m the founder of [startup] in [industry], and I need help creating a short elevator pitch for [company and product description]. I need to make the pitch relevant to [audience] and I want to especially highlight [key features of product] because I want them to [take this action]. Include a compelling hook and anticipate questions an investor might have. Make the tone professional but relaxed and confident. (Gemini Advanced)",
      "promptZh": "我是 [industry] 中 [startup] 的創辦人，我需要協助為 [company and product description] 創建簡短的電梯推介。我需要讓推介與 [audience] 相關，並且我想特別強調 [key features of product]，因為我希望它們與 [take this action] 相關。 包括一個引人注目的吸引力並預測投資者可能提出的問題。使語氣專業但放鬆且自信 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 55,
      "keywords": [
        "Create an elevator pitch (speech to text)",
        "page 55"
      ]
    },
    {
      "id": "card-152",
      "category": "startup",
      "title": "Develop your personal brand",
      "titleZh": "發展您的個人品牌",
      "summary": "Page 55",
      "summaryZh": "第 55 頁",
      "prompt": "Help me grow my personal brand. I am the founder of [a startup] in [industry]. I am passionate about [topics]. I want to inspire [audience] with business tips and lessons I’ve learned from starting my own company. My goals are to build a following so that I can [generate more media] for the business. What are some ideas you have for how to accomplish this? (Gemini Advanced)",
      "promptZh": "幫助我發展我的個人品牌。我是[industry]中[a startup]的創辦人。我對 [topics] 充滿熱情。我想用我在創辦自己的公司時學到的商業技巧和經驗教訓來激勵 [audience]。 我的目標是建立一個追隨者，這樣我就可以為業務做[generate more media]。對於如何實現這一目標，您有什麼想法？ (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 55,
      "keywords": [
        "Develop your personal brand",
        "page 55"
      ]
    },
    {
      "id": "card-153",
      "category": "startup",
      "title": "Communicate and negotiate with vendors",
      "titleZh": "與供應商溝通、洽談",
      "summary": "Page 56",
      "summaryZh": "第 56 頁",
      "prompt": "I need to make a vendor decision for packaging manufacturing. Create a table that compares the two proposals I’ve received @[Company A’s Proposal] and @[Company B’s Proposal]. (Gemini in Docs)",
      "promptZh": "我需要為包裝製造做出供應商決定。建立一個表格來比較我收到的兩個提案 @[Company A’s Proposal] 和 @[Company B’s Proposal] (Gemini in Docs)",
      "tools": [
        "PDF Source"
      ],
      "page": 56,
      "keywords": [
        "Communicate and negotiate with vendors",
        "page 56"
      ]
    },
    {
      "id": "card-154",
      "category": "startup",
      "title": "Communicate and negotiate with vendors",
      "titleZh": "與供應商溝通、洽談",
      "summary": "Page 56",
      "summaryZh": "第 56 頁",
      "prompt": "Create an email draft to [selected vendor] telling them that I’ve decided to move forward with them as the [packaging] vendor, but I would like to negotiate [a bulk pricing discount]. Use a collaborative tone. (Gemini in Gmail)",
      "promptZh": "建立發送給 [selected vendor] 的電子郵件草稿，告訴他們我已決定作為 [packaging] 供應商與他們繼續合作，但我想與 [a bulk pricing discount] 進行談判。使用協作的語氣 (Gemini in Gmail)",
      "tools": [
        "PDF Source"
      ],
      "page": 56,
      "keywords": [
        "Communicate and negotiate with vendors",
        "page 56"
      ]
    },
    {
      "id": "card-155",
      "category": "startup",
      "title": "Plan and track budgets",
      "titleZh": "計劃和追蹤預算",
      "summary": "Page 56",
      "summaryZh": "第 56 頁",
      "prompt": "Using the attached spreadsheet, identify trends and patterns in our expenses by category over the last three years. Identify areas where costs have increased significantly and investigate potential reasons. (Gemini Advanced)",
      "promptZh": "使用隨附的電子表格，按類別確定過去三年中我們的支出趨勢和模式。確定成本顯著增加的領域並調查潛在原因 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 56,
      "keywords": [
        "Plan and track budgets",
        "page 56"
      ]
    },
    {
      "id": "card-156",
      "category": "startup",
      "title": "Develop a product launch plan",
      "titleZh": "制定產品發布計劃",
      "summary": "Page 57",
      "summaryZh": "第 57 頁",
      "prompt": "I am head of product at [startup] in [industry] industry. We are building a product launch plan for [product]. I want to brainstorm a few different scenarios. We are considering offering the [product] at two different price points [A and B] and we are considering launching in [December or January]. Provide pros and cons of each scenario and suggest different ideas we may not have considered. (Gemini Advanced)",
      "promptZh": "我是 [industry] 產業 [startup] 的產品負責人。我們正在製定 [product] 的產品發布計劃。我想集思廣益一些不同的場景。 我們正在考慮以兩個不同的價格點 [A and B] 提供 [product]，並且我們正在考慮以 [December or January] 推出。提供每種情況的優點和缺點，並提出我們可能沒有考慮到的不同想法 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 57,
      "keywords": [
        "Develop a product launch plan",
        "page 57"
      ]
    },
    {
      "id": "card-157",
      "category": "startup",
      "title": "Develop a product launch plan",
      "titleZh": "制定產品發布計劃",
      "summary": "Page 57",
      "summaryZh": "第 57 頁",
      "prompt": "How do these prices compare to [competitor products’] prices? Detail what pricing strategies [competitors] use for [products], and list any common tactics they use (such as free trials, discounts, etc.). Summarize how they position the product to [audience]. Cite your sources. (Gemini Advanced)",
      "promptZh": "這些價格與 [competitor products’] 價格相比如何？詳細說明 [competitors] 對 [products] 使用的定價策略，並列出他們使用的任何常見策略(例如免費試用、折扣等)。總結他們如何將產品定位為[audience]。引用你的消息來源 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 57,
      "keywords": [
        "Develop a product launch plan",
        "page 57"
      ]
    },
    {
      "id": "card-158",
      "category": "startup",
      "title": "Develop product strategy and roadmap",
      "titleZh": "制定產品策略和路線圖",
      "summary": "Page 57",
      "summaryZh": "第 57 頁",
      "prompt": "Help me clean my [user feedback] survey spreadsheet. Specifically, fill any blank values in the name column with “Anonymous,” then if the [recommend] column shows [Yes], replace that with [Y]. Finally, remove any rows where the satisfaction column is blank. Please generate a new file for me with my cleaned data. (Gemini Advanced)",
      "promptZh": "幫我清理我的 [user feedback] 調查電子表格。具體來說，請用「匿名」填滿名稱列中的任何空白值，然後如果 [recommend] 欄位顯示 [Yes]，請將其替換為 [Y]。最後，刪除滿意度列為空的所有行。 請使用我清理過的資料為我產生一個新檔案 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 57,
      "keywords": [
        "Develop product strategy and roadmap",
        "page 57"
      ]
    },
    {
      "id": "card-159",
      "category": "startup",
      "title": "Develop product strategy and roadmap",
      "titleZh": "制定產品策略和路線圖",
      "summary": "Page 57",
      "summaryZh": "第 57 頁",
      "prompt": "I am head of product at [startup] in the [industry] industry. We are adding [features] to our [product] to address recurring user feedback, including [feedback trends]. Build a high-level roadmap that will keep us on track for a Q4 delivery. Put it in a table format. (Gemini Advanced)",
      "promptZh": "我是 [industry] 產業 [startup] 的產品負責人。我們將 [features] 加入到 [product] 中，以解決經常出現的使用者回饋問題，包括 [feedback trends]。制定一個高級路線圖，使我們能夠順利實現第四季度的交付。將其以表格形式呈現 (Gemini Advanced)",
      "tools": [
        "PDF Source"
      ],
      "page": 57,
      "keywords": [
        "Develop product strategy and roadmap",
        "page 57"
      ]
    }
  ]
};
