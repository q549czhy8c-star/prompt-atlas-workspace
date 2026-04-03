const promptAtlasData = {
  categories: [
    {
      id: "fundamentals",
      name: "Prompt Foundations",
      nameZh: "提示詞基礎",
      summary:
        "Core practices for writing better prompts in Workspace-style assistants.",
      summaryZh: "適用於 Workspace 類 AI 助手的核心提示詞寫法。",
    },
    {
      id: "admin",
      name: "Administrative Support",
      nameZh: "行政支援",
      summary: "Agenda planning, inbox triage, travel support, and coordination.",
      summaryZh: "議程安排、郵件整理、差旅協調與行政統籌。",
    },
    {
      id: "communications",
      name: "Communications",
      nameZh: "企業傳訊",
      summary: "Press, internal messaging, executive narratives, and spokespeople prep.",
      summaryZh: "新聞稿、內部溝通、高層信息與發言人準備。",
    },
    {
      id: "customer-service",
      name: "Customer Service",
      nameZh: "客戶服務",
      summary: "Response drafting, issue resolution, feedback analysis, and self-service.",
      summaryZh: "回覆起草、複雜問題處理、回饋分析與自助支援。",
    },
    {
      id: "executives",
      name: "Executives",
      nameZh: "管理層",
      summary: "Mobile communication, briefings, research, and sharper decision support.",
      summaryZh: "流動溝通、簡報整理、研究摘要與決策支援。",
    },
    {
      id: "frontline",
      name: "Frontline Management",
      nameZh: "前線管理",
      summary: "Fast lookup, task flow, inventory visibility, and audit support.",
      summaryZh: "快速查找、任務流程、庫存掌握與稽核支援。",
    },
    {
      id: "hr",
      name: "Human Resources",
      nameZh: "人力資源",
      summary: "Hiring, onboarding, survey design, and employee communications.",
      summaryZh: "招聘、入職、員工調查與人事溝通。",
    },
    {
      id: "marketing",
      name: "Marketing",
      nameZh: "市場營銷",
      summary: "Brand strategy, campaigns, audience research, and content generation.",
      summaryZh: "品牌策略、活動策劃、受眾研究與內容生成。",
    },
    {
      id: "pm",
      name: "Project Management",
      nameZh: "項目管理",
      summary: "Status reporting, testing, retrospectives, and workback planning.",
      summaryZh: "狀態報告、測試規劃、回顧總結與倒排時程。",
    },
    {
      id: "sales",
      name: "Sales",
      nameZh: "銷售",
      summary: "Account research, proposals, calls, and relationship building.",
      summaryZh: "客戶研究、提案流程、通話準備與關係建立。",
    },
    {
      id: "small-business",
      name: "Small Business",
      nameZh: "小型企業",
      summary: "Pricing, productivity, lightweight marketing, and vendor coordination.",
      summaryZh: "價格比較、個人生產力、輕量營銷與供應商協調。",
    },
    {
      id: "startup",
      name: "Startup Leaders",
      nameZh: "創業領導者",
      summary: "Strategy shaping, fundraising stories, launch planning, and roadmap thinking.",
      summaryZh: "策略構思、募資敘事、產品上市與路線圖思考。",
    },
  ],
  tips: [
    {
      id: "tip-persona",
      category: "fundamentals",
      title: "Set a Persona",
      titleZh: "先設定角色",
      summary: "Tell the assistant who it should act like before asking for work.",
      summaryZh: "先告訴 AI 應以甚麼角色思考，再提出任務要求。",
      prompt:
        "Act as an operations lead supporting a regional team. Draft a concise update for stakeholders.",
      promptZh: "請以區域營運主管身份思考，為持份者起草一份精簡更新。",
      tools: ["Docs", "Gmail"],
      page: 2,
      keywords: ["persona", "role", "task"],
    },
    {
      id: "tip-context",
      category: "fundamentals",
      title: "Add Context",
      titleZh: "加入背景",
      summary: "Include audience, timing, source documents, and constraints.",
      summaryZh: "加入受眾、時間、來源文件與限制條件，輸出會更貼近需要。",
      prompt:
        "Using the Q2 review deck and meeting notes, summarize the top three risks for the VP audience.",
      promptZh: "根據 Q2 回顧簡報與會議筆記，為 VP 受眾整理三個主要風險。",
      tools: ["Docs", "Drive", "Gemini"],
      page: 2,
      keywords: ["context", "constraints", "documents"],
    },
    {
      id: "tip-format",
      category: "fundamentals",
      title: "Request a Format",
      titleZh: "指定輸出格式",
      summary: "Ask for bullets, tables, summaries, timelines, or email-ready copy.",
      summaryZh: "直接指定要子彈點、表格、摘要、時間線或可直接寄出的文案。",
      prompt:
        "Convert the meeting recap into a two-column table with owner and next step.",
      promptZh: "把會議總結改寫成兩欄表格，包含負責人與下一步。",
      tools: ["Docs", "Sheets"],
      page: 2,
      keywords: ["format", "table", "bullets"],
    },
    {
      id: "tip-iterate",
      category: "fundamentals",
      title: "Iterate Fast",
      titleZh: "快速迭代",
      summary: "Treat prompting like conversation: refine tone, depth, and structure.",
      summaryZh: "把提示詞當成對話，不斷微調語氣、深度與結構。",
      prompt:
        "Make this sharper for executives, then rewrite it in a warmer tone for managers.",
      promptZh: "先把內容改得更適合高層閱讀，再重寫成較溫暖的管理層語氣。",
      tools: ["Gemini", "Gmail"],
      page: 3,
      keywords: ["iterate", "refine", "tone"],
    },
  ],
  cards: [
    {
      id: "admin-agenda",
      category: "admin",
      title: "Plan a multi-day offsite agenda",
      titleZh: "規劃多日團隊聚會議程",
      summary:
        "Build a balanced agenda with strategy blocks, team bonding, and logistical pacing.",
      summaryZh: "建立兼顧策略討論、團隊互動與節奏安排的多日議程。",
      prompt:
        "You are supporting a newly formed cross-functional team. Draft a three-day offsite agenda with strategic workshops, informal bonding, and clear session goals for each day.",
      promptZh:
        "你正在支援一個新成立的跨職能團隊。請起草一份三日 offsite 議程，包含策略工作坊、非正式團隊交流，以及每天清晰的會議目標。",
      tools: ["Gemini", "Docs"],
      page: 7,
      keywords: ["agenda", "offsite", "meeting", "strategy"],
    },
    {
      id: "admin-inbox",
      category: "admin",
      title: "Triage a busy executive inbox",
      titleZh: "整理高層繁忙郵箱",
      summary:
        "Summarize priority messages, deadlines, and follow-ups after travel or leave.",
      summaryZh: "在出差或休假後，快速整理優先郵件、截止日期與待跟進事項。",
      prompt:
        "Review this recent email activity and produce a priority inbox summary with urgent threads, action items, and draft reply suggestions.",
      promptZh:
        "請整理近期郵件活動，輸出一份優先郵箱摘要，列出緊急郵件串、行動項目，以及可直接使用的回覆建議。",
      tools: ["Gmail"],
      page: 8,
      keywords: ["email", "inbox", "triage", "follow-up"],
    },
    {
      id: "admin-travel",
      category: "admin",
      title: "Coordinate business travel plans",
      titleZh: "協調商務差旅安排",
      summary:
        "Turn meeting goals and timing constraints into a clean travel itinerary.",
      summaryZh: "把會議目標與時間限制整理成清晰的差旅行程。",
      prompt:
        "Create a business travel plan for a two-day client trip including meeting windows, transit buffers, meal suggestions, and a concise itinerary table.",
      promptZh:
        "請為兩日客戶出差建立商務行程，包含會議時段、交通緩衝、用餐建議，以及精簡的行程表。",
      tools: ["Docs", "Sheets"],
      page: 9,
      keywords: ["travel", "itinerary", "logistics", "table"],
    },
    {
      id: "communications-press",
      category: "communications",
      title: "Draft a press release",
      titleZh: "起草新聞稿",
      summary:
        "Shape a clear announcement with headline, quote, boilerplate, and media angle.",
      summaryZh: "以清楚結構撰寫公告，包含標題、引言、公司簡介與媒體角度。",
      prompt:
        "Draft a press release announcing our new service launch. Include a strong headline, customer value, executive quote, and a crisp closing boilerplate.",
      promptZh:
        "請起草一份宣布新服務推出的新聞稿，包含有力標題、客戶價值、管理層引言，以及精簡的公司 boilerplate。",
      tools: ["Docs"],
      page: 10,
      keywords: ["press release", "announcement", "launch", "media"],
    },
    {
      id: "communications-briefing",
      category: "communications",
      title: "Prepare an analyst briefing pack",
      titleZh: "準備分析師簡報素材",
      summary:
        "Turn long source material into briefing notes, key messages, and likely questions.",
      summaryZh: "把長篇資料整理成簡報重點、核心訊息與可能被問到的問題。",
      prompt:
        "Summarize the product update, market context, and financial highlights into a briefing pack with key talking points and anticipated analyst questions.",
      promptZh:
        "請把產品更新、市場背景與財務亮點整理成分析師簡報素材，包含重點說法與預期問題。",
      tools: ["Docs", "Drive"],
      page: 11,
      keywords: ["analyst", "briefing", "talking points", "questions"],
    },
    {
      id: "communications-internal",
      category: "communications",
      title: "Craft an internal leadership message",
      titleZh: "撰寫內部領導層訊息",
      summary:
        "Translate sensitive updates into calm, transparent communication for employees.",
      summaryZh: "把敏感更新轉化成冷靜、透明、適合員工閱讀的內部溝通。",
      prompt:
        "Draft an internal note from leadership explaining the upcoming organizational change, the reason behind it, what employees should expect next, and where to ask questions.",
      promptZh:
        "請以領導層名義撰寫一封內部訊息，說明即將發生的組織變動、背後原因、員工接下來會遇到甚麼，以及可向哪裡提問。",
      tools: ["Docs", "Gmail"],
      page: 12,
      keywords: ["internal comms", "leadership", "change", "employee"],
    },
    {
      id: "service-customer-comms",
      category: "customer-service",
      title: "Draft empathetic customer responses",
      titleZh: "起草具同理心的客戶回覆",
      summary:
        "Build replies that acknowledge frustration while moving the issue toward resolution.",
      summaryZh: "撰寫既能體諒客戶情緒，又能推進問題解決的回覆。",
      prompt:
        "Write a customer response that acknowledges the issue, explains the next step clearly, and offers a realistic resolution timeline in a calm, supportive tone.",
      promptZh:
        "請撰寫一封客戶回覆，先同理問題，再清楚說明下一步，並以冷靜支持的語氣提供合理的解決時間表。",
      tools: ["Gmail", "Docs"],
      page: 13,
      keywords: ["support", "response", "empathy", "timeline"],
    },
    {
      id: "service-faq",
      category: "customer-service",
      title: "Answer complex issues from FAQ material",
      titleZh: "利用 FAQ 資料回答複雜問題",
      summary:
        "Synthesize several knowledge sources into one structured answer for the customer.",
      summaryZh: "把多份知識來源整合成一個清晰、完整的客戶答覆。",
      prompt:
        "Using the FAQ, policy notes, and support history, create one clear response that answers all parts of the customer's question and flags any information that still needs confirmation.",
      promptZh:
        "請根據 FAQ、政策說明與支援紀錄，整合成一份完整回覆，回答客戶所有問題，並標示仍需確認的資訊。",
      tools: ["Docs", "Drive", "Gmail"],
      page: 14,
      keywords: ["faq", "knowledge base", "complex issue", "support"],
    },
    {
      id: "service-feedback",
      category: "customer-service",
      title: "Analyze customer feedback themes",
      titleZh: "分析客戶回饋主題",
      summary:
        "Cluster comments into recurring complaints, wins, and product opportunities.",
      summaryZh: "把回饋聚類成常見投訴、亮點與產品改善機會。",
      prompt:
        "Review this batch of customer feedback and group it into recurring themes, sentiment signals, urgent product issues, and suggested action owners.",
      promptZh:
        "請分析這批客戶回饋，整理成重複主題、情緒訊號、緊急產品問題，以及建議跟進負責人。",
      tools: ["Sheets", "Docs"],
      page: 15,
      keywords: ["feedback", "sentiment", "themes", "analysis"],
    },
    {
      id: "executive-mobile",
      category: "executives",
      title: "Communicate on the go",
      titleZh: "在流動情境下快速溝通",
      summary:
        "Convert rough notes into polished responses while traveling or between meetings.",
      summaryZh: "在出差或趕會議途中，把零散想法快速整理成得體回覆。",
      prompt:
        "Turn these short voice-note style ideas into a concise executive email with a decisive tone, one clear ask, and three supporting points.",
      promptZh:
        "請把這些語音筆記式的零散想法整理成一封精簡的高層電郵，語氣果斷，有一個明確請求與三個支持要點。",
      tools: ["Gmail", "Docs"],
      page: 17,
      keywords: ["mobile", "executive", "email", "voice notes"],
    },
    {
      id: "executive-deck",
      category: "executives",
      title: "Build presentation outlines quickly",
      titleZh: "快速建立簡報大綱",
      summary:
        "Turn a topic, audience, and decision goal into a board-ready narrative arc.",
      summaryZh: "根據主題、受眾與決策目標，快速整理出適合高層的簡報脈絡。",
      prompt:
        "Create a presentation outline for senior leadership on this initiative. Include a compelling opening, current state, options, recommendation, and decision slide.",
      promptZh:
        "請為高層建立此專案的簡報大綱，包含有力開場、現況、選項、建議方案與決策頁。",
      tools: ["Slides", "Docs"],
      page: 18,
      keywords: ["presentation", "outline", "leadership", "decision"],
    },
    {
      id: "executive-trends",
      category: "executives",
      title: "Summarize technology or market trends",
      titleZh: "整理科技或市場趨勢",
      summary:
        "Compress broad research into executive takeaways, implications, and watchouts.",
      summaryZh: "把廣泛研究壓縮成高層可快速理解的重點、影響與風險提示。",
      prompt:
        "Summarize the latest market and technology developments for an executive audience. Focus on what matters now, what to monitor next, and possible business implications.",
      promptZh:
        "請為高層整理最新市場與科技發展，重點說明當下重要事項、下一步要觀察的變化，以及可能的商業影響。",
      tools: ["Gemini", "Docs"],
      page: 21,
      keywords: ["trends", "market", "technology", "executive summary"],
    },
    {
      id: "frontline-lookup",
      category: "frontline",
      title: "Find accurate information quickly",
      titleZh: "快速找到準確資訊",
      summary:
        "Pull together policy or promotion details for fast customer-facing answers.",
      summaryZh: "快速彙整政策或促銷細節，幫前線人員即時回應客戶。",
      prompt:
        "Search the available product and policy information, then provide a short answer I can use with a customer, plus the source details I should double-check.",
      promptZh:
        "請搜尋現有產品與政策資訊，提供一段我可直接對客使用的簡短答覆，並列出需要再次核對的來源重點。",
      tools: ["Gemini", "Drive"],
      page: 24,
      keywords: ["lookup", "policy", "customer answer", "accuracy"],
    },
    {
      id: "frontline-tasks",
      category: "frontline",
      title: "Streamline daily task management",
      titleZh: "精簡每日任務管理",
      summary:
        "Organize open work into priorities, blockers, owners, and next actions.",
      summaryZh: "把待辦工作整理成優先級、阻礙、負責人與下一步。",
      prompt:
        "Turn this list of open store or shift tasks into a prioritized action tracker with urgency, owner, status, and recommended next step.",
      promptZh:
        "請把這份門店或班次待辦清單整理成具優先順序的行動追蹤表，包含緊急程度、負責人、狀態與建議下一步。",
      tools: ["Sheets"],
      page: 25,
      keywords: ["tasks", "tracker", "priorities", "operations"],
    },
    {
      id: "frontline-inventory",
      category: "frontline",
      title: "Check and explain inventory status",
      titleZh: "檢視並說明庫存狀態",
      summary:
        "Summarize stock levels, low-stock risk, and recommended actions for the floor team.",
      summaryZh: "總結庫存水平、缺貨風險與前線團隊應採取的行動。",
      prompt:
        "Review this inventory sheet and highlight low-stock items, reorder priorities, and any customer-facing risks we should communicate today.",
      promptZh:
        "請分析這份庫存表，指出低庫存項目、補貨優先順序，以及今天需要對客說明的風險。",
      tools: ["Sheets"],
      page: 26,
      keywords: ["inventory", "stock", "reorder", "risk"],
    },
    {
      id: "hr-welcome",
      category: "hr",
      title: "Welcome new employees",
      titleZh: "歡迎新員工",
      summary:
        "Create warm onboarding communication with timeline, contacts, and expectations.",
      summaryZh: "建立溫暖清晰的入職溝通，包含時間表、聯絡窗口與預期安排。",
      prompt:
        "Draft a welcome message for a new employee that covers their first-week schedule, who they will meet, what to prepare, and where to ask for help.",
      promptZh:
        "請起草一封新員工歡迎訊息，說明首週安排、會見對象、需準備事項，以及遇到問題可向哪裡求助。",
      tools: ["Docs", "Gmail"],
      page: 27,
      keywords: ["welcome", "onboarding", "employee", "schedule"],
    },
    {
      id: "hr-recruitment",
      category: "hr",
      title: "Report on recruitment metrics",
      titleZh: "匯報招聘指標",
      summary:
        "Turn hiring data into a readable summary of pipeline health and bottlenecks.",
      summaryZh: "把招聘數據整理成易讀摘要，呈現招聘漏斗健康度與瓶頸。",
      prompt:
        "Analyze our recruiting metrics and produce a short summary covering funnel conversion, time-to-fill, bottlenecks, and recommendations for the next month.",
      promptZh:
        "請分析我們的招聘指標，整理成精簡摘要，涵蓋漏斗轉換率、招聘周期、主要瓶頸與下月建議。",
      tools: ["Sheets", "Docs"],
      page: 28,
      keywords: ["recruiting", "metrics", "pipeline", "hiring"],
    },
    {
      id: "hr-interview",
      category: "hr",
      title: "Manage the interview process",
      titleZh: "管理面試流程",
      summary:
        "Generate structured interview kits, candidate communications, and follow-ups.",
      summaryZh: "生成結構化面試題庫、候選人溝通與跟進內容。",
      prompt:
        "Create an interview plan for this role with competencies to assess, sample questions, interviewer assignments, and follow-up email templates.",
      promptZh:
        "請為此職位建立面試方案，包含要評估的能力、示例問題、面試官分工，以及跟進電郵範本。",
      tools: ["Docs", "Gmail"],
      page: 29,
      keywords: ["interview", "candidate", "questions", "follow-up"],
    },
    {
      id: "marketing-identity",
      category: "marketing",
      title: "Develop a visual identity brief",
      titleZh: "建立視覺識別 brief",
      summary:
        "Translate business positioning into art direction, color mood, and design cues.",
      summaryZh: "把品牌定位轉化成視覺方向、色彩情緒與設計線索。",
      prompt:
        "Create a visual identity brief for our brand, including personality, color direction, typography mood, visual references, and what the identity should avoid.",
      promptZh:
        "請為品牌建立一份視覺識別 brief，包含品牌性格、色彩方向、字體氣質、視覺參考，以及應避免的風格。",
      tools: ["Docs", "Slides"],
      page: 32,
      keywords: ["brand", "identity", "visual", "creative brief"],
    },
    {
      id: "marketing-brand-strategy",
      category: "marketing",
      title: "Shape a brand strategy",
      titleZh: "制定品牌策略",
      summary:
        "Clarify audience, positioning, proof points, and message pillars from source notes.",
      summaryZh: "根據資料釐清受眾、定位、佐證點與品牌信息支柱。",
      prompt:
        "Based on our customer notes and product strengths, draft a brand strategy outline with target audience, positioning statement, message pillars, and differentiation.",
      promptZh:
        "請根據客戶筆記與產品優勢，起草一份品牌策略大綱，涵蓋目標受眾、定位語句、訊息支柱與差異化。",
      tools: ["Docs", "Drive"],
      page: 33,
      keywords: ["brand strategy", "positioning", "messaging", "audience"],
    },
    {
      id: "marketing-social",
      category: "marketing",
      title: "Create social media content",
      titleZh: "生成社交媒體內容",
      summary:
        "Draft platform-aware content ideas with consistent tone and CTA variations.",
      summaryZh: "按平台特性生成內容靈感，維持一致品牌語氣與不同 CTA 版本。",
      prompt:
        "Generate a week of social post ideas for this campaign, with a distinct angle for each post, a suggested CTA, and a tone that matches our brand voice.",
      promptZh:
        "請為此活動生成一週社交帖文構思，每篇有不同切入角度、建議 CTA，並符合品牌語氣。",
      tools: ["Docs"],
      page: 38,
      keywords: ["social", "campaign", "content", "cta"],
    },
    {
      id: "pm-uat",
      category: "pm",
      title: "Generate user acceptance tests",
      titleZh: "生成用戶驗收測試",
      summary:
        "Turn requirements into test scenarios, edge cases, and sign-off criteria.",
      summaryZh: "把需求轉化成測試場景、邊界情況與驗收標準。",
      prompt:
        "Based on these feature requirements, generate user acceptance test scenarios with expected outcomes, edge cases, and release sign-off criteria.",
      promptZh:
        "請根據這份功能需求，生成用戶驗收測試場景，包含預期結果、邊界情況與上線簽核標準。",
      tools: ["Docs", "Sheets"],
      page: 40,
      keywords: ["uat", "testing", "requirements", "quality"],
    },
    {
      id: "pm-status",
      category: "pm",
      title: "Write a project status update",
      titleZh: "撰寫項目狀態更新",
      summary:
        "Summarize progress, risks, decisions, and asks for stakeholders without noise.",
      summaryZh: "簡潔整理進度、風險、決策與需要支援的事項，避免資訊雜訊。",
      prompt:
        "Draft a weekly project update for stakeholders with accomplishments, risks, decisions needed, upcoming milestones, and any blockers requiring help.",
      promptZh:
        "請起草一份每週項目更新給持份者，包含已完成事項、風險、待決策點、即將到來的里程碑，以及需要協助的阻礙。",
      tools: ["Docs", "Gmail"],
      page: 41,
      keywords: ["status", "stakeholders", "risks", "milestones"],
    },
    {
      id: "pm-workback",
      category: "pm",
      title: "Create a workback schedule",
      titleZh: "建立倒排工作計畫",
      summary:
        "Start from a fixed launch date and derive milestones, dependencies, and owners.",
      summaryZh: "由固定推出日期反推所需里程碑、依賴關係與負責人。",
      prompt:
        "Build a workback schedule for this launch date, listing major milestones, dependencies, owners, review checkpoints, and risk flags.",
      promptZh:
        "請為這個推出日期建立倒排工作計畫，列出主要里程碑、依賴關係、負責人、審核節點與風險提示。",
      tools: ["Sheets", "Docs"],
      page: 42,
      keywords: ["workback", "launch", "dependencies", "timeline"],
    },
    {
      id: "sales-research",
      category: "sales",
      title: "Conduct account research",
      titleZh: "進行客戶研究",
      summary:
        "Prepare a quick profile with pain points, triggers, and likely value angles.",
      summaryZh: "快速整理客戶背景、痛點、觸發因素與可能的價值切入點。",
      prompt:
        "Create an account research brief on this prospect, including business priorities, possible pain points, likely buying triggers, and a tailored outreach angle.",
      promptZh:
        "請建立這位潛在客戶的研究摘要，包含業務重點、可能痛點、購買觸發點，以及客製化接觸角度。",
      tools: ["Docs", "Gemini"],
      page: 43,
      keywords: ["prospect", "account research", "pain points", "outreach"],
    },
    {
      id: "sales-rfp",
      category: "sales",
      title: "Support the RFP process",
      titleZh: "支援 RFP 提案流程",
      summary:
        "Organize requirements, response themes, and gaps before the team drafts the proposal.",
      summaryZh: "在正式撰寫提案前，先整理需求、回應主題與缺口。",
      prompt:
        "Review this RFP and summarize key requirements, evaluation criteria, response themes, missing inputs, and the best way to structure our reply.",
      promptZh:
        "請審閱這份 RFP，整理出關鍵需求、評分標準、回應主軸、缺少資訊，以及最合適的回覆結構。",
      tools: ["Docs", "Drive"],
      page: 45,
      keywords: ["rfp", "proposal", "requirements", "structure"],
    },
    {
      id: "sales-calls",
      category: "sales",
      title: "Prepare for a new customer call",
      titleZh: "準備新客戶會議",
      summary:
        "Shape a discovery call around context, trust-building, and next-step momentum.",
      summaryZh: "把首次探索會議設計成兼顧背景理解、建立信任與推進下一步。",
      prompt:
        "Prepare a 30-minute discovery call plan for this prospect with opening questions, business hypothesis, credibility points, and a suggested next-step close.",
      promptZh:
        "請為這位潛在客戶準備一個 30 分鐘探索會議方案，包含開場問題、業務假設、可信度亮點與建議收尾。",
      tools: ["Docs", "Meet"],
      page: 48,
      keywords: ["discovery call", "sales", "questions", "prospect"],
    },
    {
      id: "smallbiz-pricing",
      category: "small-business",
      title: "Create pricing comparisons",
      titleZh: "建立價格比較",
      summary:
        "Compare packages, tradeoffs, and value propositions in a customer-friendly way.",
      summaryZh: "用客戶容易理解的方式比較方案、取捨與價值差異。",
      prompt:
        "Compare these three pricing options in a table with features, tradeoffs, ideal customer type, and a recommendation for budget-conscious buyers.",
      promptZh:
        "請以表格比較這三個價格方案，包含功能、取捨、適合客群，以及對預算敏感買家的建議。",
      tools: ["Sheets", "Docs"],
      page: 50,
      keywords: ["pricing", "comparison", "table", "budget"],
    },
    {
      id: "smallbiz-marketing",
      category: "small-business",
      title: "Brainstorm lightweight marketing ideas",
      titleZh: "發想輕量營銷內容",
      summary:
        "Generate practical content ideas that fit small teams with limited time and budget.",
      summaryZh: "生成適合小團隊、低時間與低預算情境的實用營銷內容。",
      prompt:
        "Suggest simple marketing ideas we can execute this month with a small team, limited budget, and a need for fast customer visibility.",
      promptZh:
        "請建議一些本月可執行的簡單營銷點子，前提是團隊小、預算有限，而且需要快速提升曝光。",
      tools: ["Docs", "Gemini"],
      page: 51,
      keywords: ["small team", "marketing", "budget", "ideas"],
    },
    {
      id: "smallbiz-vendor",
      category: "small-business",
      title: "Negotiate with vendors and track budgets",
      titleZh: "與供應商談判並追蹤預算",
      summary:
        "Prepare negotiation notes, cost watchouts, and spend tracking from scattered inputs.",
      summaryZh: "從零散資料中整理議價重點、成本風險與支出追蹤。",
      prompt:
        "Turn these vendor quotes and constraints into a negotiation prep sheet with target pricing, tradeoff levers, budget impact, and questions to ask each supplier.",
      promptZh:
        "請把這些供應商報價與限制整理成談判準備表，包含目標價格、可談判籌碼、預算影響，以及要向各供應商提出的問題。",
      tools: ["Sheets", "Docs"],
      page: 56,
      keywords: ["vendor", "budget", "negotiation", "quotes"],
    },
    {
      id: "startup-strategy",
      category: "startup",
      title: "Brainstorm business and strategy options",
      titleZh: "構思商業與策略選項",
      summary:
        "Explore multiple strategic directions with assumptions, upside, and risk.",
      summaryZh: "從多個方向思考策略，並標示假設、潛在收益與風險。",
      prompt:
        "Generate three strategic paths for our startup over the next 12 months. For each path, explain the core assumption, upside, downside, and what we would need to validate first.",
      promptZh:
        "請為我們的初創公司提出未來 12 個月的三條策略路徑，並分別說明核心假設、潛在收益、風險，以及最先要驗證的事項。",
      tools: ["Gemini", "Docs"],
      page: 54,
      keywords: ["startup", "strategy", "options", "validation"],
    },
    {
      id: "startup-pitch",
      category: "startup",
      title: "Develop an elevator pitch",
      titleZh: "撰寫電梯簡報",
      summary:
        "Condense the company story into a short, memorable, investor-ready narrative.",
      summaryZh: "把公司故事壓縮成短而有記憶點、適合投資人聽的敘事。",
      prompt:
        "Write an elevator pitch for our startup that explains the problem, the product, the market opportunity, and why now in under 60 seconds.",
      promptZh:
        "請為我們的初創公司撰寫一段電梯簡報，在 60 秒內說清楚問題、產品、市場機會，以及為何是現在。",
      tools: ["Docs"],
      page: 55,
      keywords: ["pitch", "investor", "story", "startup"],
    },
    {
      id: "startup-launch",
      category: "startup",
      title: "Build a product launch plan",
      titleZh: "建立產品上市計畫",
      summary:
        "Map launch goals, channels, milestones, owners, and post-launch checks.",
      summaryZh: "整理產品上市目標、渠道、里程碑、負責人與上線後檢查點。",
      prompt:
        "Create a product launch plan that includes goals, target audience, launch channels, internal dependencies, success metrics, and a first-week follow-up checklist.",
      promptZh:
        "請建立一份產品上市計畫，包含目標、目標受眾、推出渠道、內部依賴項、成功指標，以及首週跟進清單。",
      tools: ["Docs", "Sheets"],
      page: 57,
      keywords: ["launch", "product", "metrics", "checklist"],
    },
  ],
};
