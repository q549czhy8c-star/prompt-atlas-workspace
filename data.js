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
      "titleZh": "分類 = 目錄章節",
      "summary": "Cards are grouped by the guide's main table-of-contents sections.",
      "summaryZh": "卡片按指南目錄主章節分組。",
      "prompt": "Administrative support, Communications, Customer service, Executives, Frontline management, Human resources, Marketing, Project management, Sales, Small business owners and entrepreneurs, Startup leaders",
      "promptZh": "Administrative support, Communications, Customer service, Executives, Frontline management, Human resources, Marketing, Project management, Sales, Small business owners and entrepreneurs, Startup leaders",
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
      "titleZh": "主題 = Use case",
      "summary": "Each card title follows the use-case subject from the PDF.",
      "summaryZh": "每張卡的標題跟 PDF 內的 Use case 標題。",
      "prompt": "Examples: Plan business travel, Project management, Develop a product launch plan",
      "promptZh": "Examples: Plan business travel, Project management, Develop a product launch plan",
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
      "titleZh": "Plan agendas (offsite, meetings, and more)",
      "summary": "Page 7",
      "summaryZh": "第 7 頁",
      "prompt": "I am an executive administrator to a team director. Our newly formed team now consists of content marketers, digital marketers, and product marketers. We are gathering for the first time at a three-day offsite in Washington, DC. Plan activities for each day that include team bonding activities and time for deeper strategic work. Create a sample agenda for me. (Gemini Advanced)",
      "promptZh": "I am an executive administrator to a team director. Our newly formed team now consists of content marketers, digital marketers, and product marketers. We are gathering for the first time at a three-day offsite in Washington, DC. Plan activities for each day that include team bonding activities and time for deeper strategic work. Create a sample agenda for me. (Gemini Advanced)",
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
      "titleZh": "Plan agendas (offsite, meetings, and more)",
      "summary": "Page 8",
      "summaryZh": "第 8 頁",
      "prompt": "Suggest three different icebreaker activities that encourage people to learn about their teammates’ preferred working styles, strengths, and goals. Make sure the icebreaker ideas are engaging and can be completed by a group of 25 people in 30 minutes or less. (Gemini Advanced)",
      "promptZh": "Suggest three different icebreaker activities that encourage people to learn about their teammates’ preferred working styles, strengths, and goals. Make sure the icebreaker ideas are engaging and can be completed by a group of 25 people in 30 minutes or less. (Gemini Advanced)",
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
      "titleZh": "Plan agendas (offsite, meetings, and more)",
      "summary": "Page 8",
      "summaryZh": "第 8 頁",
      "prompt": "Organize this agenda in a table format. Include one of your suggested icebreakers for each day. (Gemini Advanced)",
      "promptZh": "Organize this agenda in a table format. Include one of your suggested icebreakers for each day. (Gemini Advanced)",
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
      "titleZh": "Plan agendas (offsite, meetings, and more)",
      "summary": "Page 8",
      "summaryZh": "第 8 頁",
      "prompt": "Use @[2024 H2 Team Vision] to generate a summary for the opening remarks on Day 1 of this agenda. (Gemini in Docs)",
      "promptZh": "Use @[2024 H2 Team Vision] to generate a summary for the opening remarks on Day 1 of this agenda. (Gemini in Docs)",
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
      "titleZh": "Manage multiple email inboxes",
      "summary": "Page 8",
      "summaryZh": "第 8 頁",
      "prompt": "Summarize emails from [manager] from the last week. (Gemini in Gmail)",
      "promptZh": "Summarize emails from [manager] from the last week. (Gemini in Gmail)",
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
      "titleZh": "Manage multiple email inboxes",
      "summary": "Page 8",
      "summaryZh": "第 8 頁",
      "prompt": "Summarize this email thread and list all action items and deadlines. (Gemini in Gmail)",
      "promptZh": "Summarize this email thread and list all action items and deadlines. (Gemini in Gmail)",
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
      "titleZh": "Manage multiple email inboxes",
      "summary": "Page 9",
      "summaryZh": "第 9 頁",
      "prompt": "Generate a response to this email and use @[file name] to describe how the [initiative] can complement the workstream outlined in [colleague’s name]’s message. (Gemini in Gmail)",
      "promptZh": "Generate a response to this email and use @[file name] to describe how the [initiative] can complement the workstream outlined in [colleague’s name]’s message. (Gemini in Gmail)",
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
      "titleZh": "Plan business travel",
      "summary": "Page 9",
      "summaryZh": "第 9 頁",
      "prompt": "I am an executive assistant. I need to create an itinerary for a two-day business trip in [location] during [dates]. My manager is staying at [hotel]. Suggest different options for breakfast and dinner within a 10-minute walk of the hotel, and find one entertainment option such as a movie theater, a local art show, or a popular tourist attraction. Put it in a table for me. (Gemini Advanced)",
      "promptZh": "I am an executive assistant. I need to create an itinerary for a two-day business trip in [location] during [dates]. My manager is staying at [hotel]. Suggest different options for breakfast and dinner within a 10-minute walk of the hotel, and find one entertainment option such as a movie theater, a local art show, or a popular tourist attraction. Put it in a table for me. (Gemini Advanced)",
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
      "titleZh": "Track travel and entertainment budget",
      "summary": "Page 9",
      "summaryZh": "第 9 頁",
      "prompt": "Create a budget tracker for business travel. It should include columns for: date, expense type (meal, entertainment, transportation), vendor name, and a description. (Gemini in Sheets)",
      "promptZh": "Create a budget tracker for business travel. It should include columns for: date, expense type (meal, entertainment, transportation), vendor name, and a description. (Gemini in Sheets)",
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
      "titleZh": "Create a press release",
      "summary": "Page 10",
      "summaryZh": "第 10 頁",
      "prompt": "I’m a PR manager. I need to create a press release with a catchy title. Include quotes from @[VIP Quotes Acquisition]. (Gemini in Docs)",
      "promptZh": "I’m a PR manager. I need to create a press release with a catchy title. Include quotes from @[VIP Quotes Acquisition]. (Gemini in Docs)",
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
      "titleZh": "Create a press release",
      "summary": "Page 11",
      "summaryZh": "第 11 頁",
      "prompt": "Use @[Biography and Mission Statement] to add more information about the company that is being acquired, its mission, and how it got started. (Gemini in Docs)",
      "promptZh": "Use @[Biography and Mission Statement] to add more information about the company that is being acquired, its mission, and how it got started. (Gemini in Docs)",
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
      "titleZh": "Prepare for analyst or press briefings",
      "summary": "Page 11",
      "summaryZh": "第 11 頁",
      "prompt": "Generate a brief template to prepare [spokesperson] for an upcoming media and analyst briefing for @[Product Launch]. Include space for a synopsis, key messages, and supporting data. (Gemini in Docs)",
      "promptZh": "Generate a brief template to prepare [spokesperson] for an upcoming media and analyst briefing for @[Product Launch]. Include space for a synopsis, key messages, and supporting data. (Gemini in Docs)",
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
      "titleZh": "Prepare for analyst or press briefings",
      "summary": "Page 11",
      "summaryZh": "第 11 頁",
      "prompt": "Craft a synopsis of the product launch in three main points using @[Product Launch - Notes]. (Gemini in Docs)",
      "promptZh": "Craft a synopsis of the product launch in three main points using @[Product Launch - Notes]. (Gemini in Docs)",
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
      "titleZh": "Prepare for analyst or press briefings",
      "summary": "Page 11",
      "summaryZh": "第 11 頁",
      "prompt": "Organize my media and analyst contacts from @[Analyst and Journalist Contact Notes] for a new product briefing. I need to keep track of their names, type of contact (analyst or journalist), focus area, the name of the outlet, agency or firm that they work for, and a place where I can indicate the priority level of their attendance at this briefing (low, medium, high). (Gemini in Sheets)",
      "promptZh": "Organize my media and analyst contacts from @[Analyst and Journalist Contact Notes] for a new product briefing. I need to keep track of their names, type of contact (analyst or journalist), focus area, the name of the outlet, agency or firm that they work for, and a place where I can indicate the priority level of their attendance at this briefing (low, medium, high). (Gemini in Sheets)",
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
      "titleZh": "Prepare for analyst or press briefings",
      "summary": "Page 11",
      "summaryZh": "第 11 頁",
      "prompt": "Create a slide describing what [product] is from @[Product Launch - Notes]. Make sure it is short and easily understood by a broad audience. (Gemini in Slides)",
      "promptZh": "Create a slide describing what [product] is from @[Product Launch - Notes]. Make sure it is short and easily understood by a broad audience. (Gemini in Slides)",
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
      "titleZh": "Create mock interview questions to prepare spokespeople",
      "summary": "Page 12",
      "summaryZh": "第 12 頁",
      "prompt": "I am a [PR/AR] manager at [company name]. We just launched [product] and had a briefing where we discussed [key messages]. I am preparing [spokesperson and role/title] for interviews. Generate a list of mock interview questions to help [spokesperson] prepare. Include a mixture of easy and hard questions, with some asking about the basics of [product] and some asking about the long-term vision of [product]. (Gemini Advanced)",
      "promptZh": "I am a [PR/AR] manager at [company name]. We just launched [product] and had a briefing where we discussed [key messages]. I am preparing [spokesperson and role/title] for interviews. Generate a list of mock interview questions to help [spokesperson] prepare. Include a mixture of easy and hard questions, with some asking about the basics of [product] and some asking about the long-term vision of [product]. (Gemini Advanced)",
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
      "titleZh": "Create mock interview questions to prepare spokespeople",
      "summary": "Page 12",
      "summaryZh": "第 12 頁",
      "prompt": "Use @[Product Launch Notes] to write suggested answers for these questions. Write the talking points as if you are [title of spokesperson] at [company]. (Gemini in Docs)",
      "promptZh": "Use @[Product Launch Notes] to write suggested answers for these questions. Write the talking points as if you are [title of spokesperson] at [company]. (Gemini in Docs)",
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
      "titleZh": "Craft internal communications",
      "summary": "Page 12",
      "summaryZh": "第 12 頁",
      "prompt": "I need to draft a company-wide memo unveiling our relaunched intranet. The [new page] addresses [common feedback we heard from employees] and aims to create a more user friendly experience. Draft an upbeat memo announcing [the new site] using @[Intranet Launch Plan Notes]. (Gemini in Docs)",
      "promptZh": "I need to draft a company-wide memo unveiling our relaunched intranet. The [new page] addresses [common feedback we heard from employees] and aims to create a more user friendly experience. Draft an upbeat memo announcing [the new site] using @[Intranet Launch Plan Notes]. (Gemini in Docs)",
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
      "titleZh": "Draft customer communications",
      "summary": "Page 13",
      "summaryZh": "第 13 頁",
      "prompt": "Help me craft an empathetic email response. I am a customer service representative, and I need to create a response to a customer complaint. The customer ordered a pair of headphones that arrived damaged. They’ve already contacted us via email and provided pictures of the damage. I’ve offered a replacement, but they’re requesting an expedited shipping option that isn’t typically included with their order. Include a paragraph that acknowledges their frustration and three bullet points with potential resolutions. (Gemini in Docs)",
      "promptZh": "Help me craft an empathetic email response. I am a customer service representative, and I need to create a response to a customer complaint. The customer ordered a pair of headphones that arrived damaged. They’ve already contacted us via email and provided pictures of the damage. I’ve offered a replacement, but they’re requesting an expedited shipping option that isn’t typically included with their order. Include a paragraph that acknowledges their frustration and three bullet points with potential resolutions. (Gemini in Docs)",
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
      "titleZh": "Draft customer communications",
      "summary": "Page 13",
      "summaryZh": "第 13 頁",
      "prompt": "Suggest 10 alternative options in place of expedited shipping to resolve the customer’s frustration about receiving the damaged package. (Gemini in Docs)",
      "promptZh": "Suggest 10 alternative options in place of expedited shipping to resolve the customer’s frustration about receiving the damaged package. (Gemini in Docs)",
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
      "titleZh": "Respond to complex customer issues using FAQ documents",
      "summary": "Page 14",
      "summaryZh": "第 14 頁",
      "prompt": "Summarize information about [product name] including the product’s specific [return policy], [ingredients], and [certifications]. (Gemini in Drive)",
      "promptZh": "Summarize information about [product name] including the product’s specific [return policy], [ingredients], and [certifications]. (Gemini in Drive)",
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
      "titleZh": "Respond to complex customer issues using FAQ documents",
      "summary": "Page 14",
      "summaryZh": "第 14 頁",
      "prompt": "Generate a response to the customer question about our [return policy] and [product certifications] based on @[Customer FAQ Document]. Use a helpful and professional tone. (Gemini in Gmail)",
      "promptZh": "Generate a response to the customer question about our [return policy] and [product certifications] based on @[Customer FAQ Document]. Use a helpful and professional tone. (Gemini in Gmail)",
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
      "titleZh": "Standardize communication frameworks",
      "summary": "Page 14",
      "summaryZh": "第 14 頁",
      "prompt": "Draft templates for three different types of customer communication. Create templates for apology emails, order confirmation messages, and thank you notes for loyal customers. Keep each template to one paragraph and use a friendly tone. (Gemini in Docs)",
      "promptZh": "Draft templates for three different types of customer communication. Create templates for apology emails, order confirmation messages, and thank you notes for loyal customers. Keep each template to one paragraph and use a friendly tone. (Gemini in Docs)",
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
      "titleZh": "Standardize communication frameworks",
      "summary": "Page 14",
      "summaryZh": "第 14 頁",
      "prompt": "Craft a list of customer communication best practices that can be used to train new team members. Outline three sections, including how to handle happy customer inquiries, neutral customer inquiries, and dissatisfied customer inquiries. (Gemini in Docs)",
      "promptZh": "Craft a list of customer communication best practices that can be used to train new team members. Outline three sections, including how to handle happy customer inquiries, neutral customer inquiries, and dissatisfied customer inquiries. (Gemini in Docs)",
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
      "titleZh": "Standardize communication frameworks",
      "summary": "Page 15",
      "summaryZh": "第 15 頁",
      "prompt": "I am a [customer service manager]. I am trying to create standardized language that the team can use when interacting with customers on phone calls. Generate templates for common call openings, greetings, and closures for a customer service representative at a retail store. These templates should allow for personalization with customer details. The goal is to ensure consistency and professionalism while allowing for differentiation with specific customer information. (Gemini Advanced)",
      "promptZh": "I am a [customer service manager]. I am trying to create standardized language that the team can use when interacting with customers on phone calls. Generate templates for common call openings, greetings, and closures for a customer service representative at a retail store. These templates should allow for personalization with customer details. The goal is to ensure consistency and professionalism while allowing for differentiation with specific customer information. (Gemini Advanced)",
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
      "titleZh": "Improve customer service",
      "summary": "Page 15",
      "summaryZh": "第 15 頁",
      "prompt": "Draft an email to my colleagues proposing a meeting to discuss customer experience improvement initiatives. Request that marketing, sales, and product stakeholders meet in the next week to get a clear sense of roles and responsibilities. (Gemini in Gmail)",
      "promptZh": "Draft an email to my colleagues proposing a meeting to discuss customer experience improvement initiatives. Request that marketing, sales, and product stakeholders meet in the next week to get a clear sense of roles and responsibilities. (Gemini in Gmail)",
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
      "titleZh": "Improve customer service",
      "summary": "Page 15",
      "summaryZh": "第 15 頁",
      "prompt": "Create a table to track the progress and impact of different customer experience improvement tactics using relevant metrics, including support ticket volume and priority level (high, medium, low). (Gemini in Sheets)",
      "promptZh": "Create a table to track the progress and impact of different customer experience improvement tactics using relevant metrics, including support ticket volume and priority level (high, medium, low). (Gemini in Sheets)",
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
      "titleZh": "Analyze customer feedback",
      "summary": "Page 15",
      "summaryZh": "第 15 頁",
      "prompt": "I am a customer support specialist. Using the attached spreadsheet, identify trends and patterns in our [customer feedback] by [category] over [time period]. Identify areas where [customer outreach] has increased significantly and investigate potential reasons. (Gemini Advanced)",
      "promptZh": "I am a customer support specialist. Using the attached spreadsheet, identify trends and patterns in our [customer feedback] by [category] over [time period]. Identify areas where [customer outreach] has increased significantly and investigate potential reasons. (Gemini Advanced)",
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
      "titleZh": "Enable customer self-service",
      "summary": "Page 16",
      "summaryZh": "第 16 頁",
      "prompt": "Summarize this content to write a clear and concise product return policy and outline 5 steps for customers to take in sequential order. (Gemini Docs)",
      "promptZh": "Summarize this content to write a clear and concise product return policy and outline 5 steps for customers to take in sequential order. (Gemini Docs)",
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
      "titleZh": "Enable customer self-service",
      "summary": "Page 16",
      "summaryZh": "第 16 頁",
      "prompt": "Take this content and turn it into a short blog with the title “Resolve Common Issues Without Agent Assistance.” Have separate sections for our return policy, our refund policy, and our store credit policy. (Gemini in Docs)",
      "promptZh": "Take this content and turn it into a short blog with the title “Resolve Common Issues Without Agent Assistance.” Have separate sections for our return policy, our refund policy, and our store credit policy. (Gemini in Docs)",
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
      "titleZh": "Enable customer self-service",
      "summary": "Page 16",
      "summaryZh": "第 16 頁",
      "prompt": "Draft an email template to a customer that highlights self-service resources referencing [blog link] for [support issues]. Thank the customer for their business and assure them of our commitment to meeting their needs. (Gemini in Docs)",
      "promptZh": "Draft an email template to a customer that highlights self-service resources referencing [blog link] for [support issues]. Thank the customer for their business and assure them of our commitment to meeting their needs. (Gemini in Docs)",
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
      "titleZh": "Conduct voice of the customer research",
      "summary": "Page 16",
      "summaryZh": "第 16 頁",
      "prompt": "Request a follow-up conversation on [date] at [time] with this customer who provided negative feedback to understand their concern and offer resolutions. Include example solutions. (Gemini in Gmail)",
      "promptZh": "Request a follow-up conversation on [date] at [time] with this customer who provided negative feedback to understand their concern and offer resolutions. Include example solutions. (Gemini in Gmail)",
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
      "titleZh": "Conduct voice of the customer research",
      "summary": "Page 16",
      "summaryZh": "第 16 頁",
      "prompt": "Create five different questions to customers who have just spoken to an agent on the phone. Questions should gauge how effective the call was, if the customer’s concern was addressed, and if they would recommend our business to others. (Gemini in Docs)",
      "promptZh": "Create five different questions to customers who have just spoken to an agent on the phone. Questions should gauge how effective the call was, if the customer’s concern was addressed, and if they would recommend our business to others. (Gemini in Docs)",
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
      "titleZh": "Communicate on the go",
      "summary": "Page 17",
      "summaryZh": "第 17 頁",
      "prompt": "Draft an email confirming that I will be at the board meeting. Ask if we can adjust the agenda to give 15 minutes to [urgent topics]. (Gemini in Gmail)",
      "promptZh": "Draft an email confirming that I will be at the board meeting. Ask if we can adjust the agenda to give 15 minutes to [urgent topics]. (Gemini in Gmail)",
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
      "titleZh": "Enhance personal productivity and time management",
      "summary": "Page 18",
      "summaryZh": "第 18 頁",
      "prompt": "Generate a response to [person] about [topic]. Include details on [deliverable] and [timeline] using @[Project A Status Report]. (Gemini in Gmail)",
      "promptZh": "Generate a response to [person] about [topic]. Include details on [deliverable] and [timeline] using @[Project A Status Report]. (Gemini in Gmail)",
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
      "titleZh": "Create outlines of presentations in seconds",
      "summary": "Page 18",
      "summaryZh": "第 18 頁",
      "prompt": "I’m the CEO giving a presentation to [audience] at [event], and I want to create a detailed outline for my team to get started. I want to include a few important topics, including [areas of focus] and how our company is innovating with [company initiatives]. I’m envisioning time for a customer Q&A to end the presentation. Include suggested questions we could ask of a customer from the [industry] industry about how they are using our [product] to achieve [business outcome]. (Gemini Advanced)",
      "promptZh": "I’m the CEO giving a presentation to [audience] at [event], and I want to create a detailed outline for my team to get started. I want to include a few important topics, including [areas of focus] and how our company is innovating with [company initiatives]. I’m envisioning time for a customer Q&A to end the presentation. Include suggested questions we could ask of a customer from the [industry] industry about how they are using our [product] to achieve [business outcome]. (Gemini Advanced)",
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
      "titleZh": "Prepare challenging employee communications",
      "summary": "Page 18",
      "summaryZh": "第 18 頁",
      "prompt": "Write two uplifting paragraphs for employees who have just finished a challenging quarter. Acknowledge [difficulties] and emphasize [positives] for the upcoming quarter. Use a tone that is motivating, optimistic, and fosters a sense of unity and collaboration. (Gemini in Docs)",
      "promptZh": "Write two uplifting paragraphs for employees who have just finished a challenging quarter. Acknowledge [difficulties] and emphasize [positives] for the upcoming quarter. Use a tone that is motivating, optimistic, and fosters a sense of unity and collaboration. (Gemini in Docs)",
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
      "titleZh": "Streamline responses on the go",
      "summary": "Page 19",
      "summaryZh": "第 19 頁",
      "prompt": "Draft an email to [project lead] letting them know I will not be in the meeting due to an urgent matter. Ask them to take detailed notes and to ensure the team arrives at a decision on [key topic] in addition to assigning ownership of the postmortem report to [colleague]. (Gemini in Gmail)",
      "promptZh": "Draft an email to [project lead] letting them know I will not be in the meeting due to an urgent matter. Ask them to take detailed notes and to ensure the team arrives at a decision on [key topic] in addition to assigning ownership of the postmortem report to [colleague]. (Gemini in Gmail)",
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
      "titleZh": "Perform market research and campaign planning",
      "summary": "Page 19",
      "summaryZh": "第 19 頁",
      "prompt": "I’m a marketing leader conducting analysis in preparation for next year’s [launch]. Define my target audiences [audiences], for my new line of [product]. Include interests, relevant marketing channels, and top trends that drive their consideration and purchase behavior. (Gemini Advanced)",
      "promptZh": "I’m a marketing leader conducting analysis in preparation for next year’s [launch]. Define my target audiences [audiences], for my new line of [product]. Include interests, relevant marketing channels, and top trends that drive their consideration and purchase behavior. (Gemini Advanced)",
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
      "titleZh": "Perform market research and campaign planning",
      "summary": "Page 19",
      "summaryZh": "第 19 頁",
      "prompt": "Brainstorm value props for my [target audiences] based on features from @[Product Requirements Document]. Include a section on campaign learnings from @[Campaign Performance]. (Gemini in Docs)",
      "promptZh": "Brainstorm value props for my [target audiences] based on features from @[Product Requirements Document]. Include a section on campaign learnings from @[Campaign Performance]. (Gemini in Docs)",
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
      "titleZh": "Brainstorm content and thought leadership",
      "summary": "Page 20",
      "summaryZh": "第 20 頁",
      "prompt": "Generate a list of four relevant and engaging thought leadership blog post ideas for [company] based on trending topics, target audience analysis, and brand keywords. (Gemini in Docs)",
      "promptZh": "Generate a list of four relevant and engaging thought leadership blog post ideas for [company] based on trending topics, target audience analysis, and brand keywords. (Gemini in Docs)",
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
      "titleZh": "Brainstorm content and thought leadership",
      "summary": "Page 20",
      "summaryZh": "第 20 頁",
      "prompt": "Generate three options for a new slogan emphasizing reliability, innovation, and a long history of popularity for [company]. (Gemini in Docs)",
      "promptZh": "Generate three options for a new slogan emphasizing reliability, innovation, and a long history of popularity for [company]. (Gemini in Docs)",
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
      "titleZh": "Brainstorm content and thought leadership",
      "summary": "Page 20",
      "summaryZh": "第 20 頁",
      "prompt": "Create an image of a trade show booth using orange and blue colors. The booth should be modern and showcase interactive computer stations. (Gemini in Slides)",
      "promptZh": "Create an image of a trade show booth using orange and blue colors. The booth should be modern and showcase interactive computer stations. (Gemini in Slides)",
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
      "titleZh": "Conduct competitive analysis",
      "summary": "Page 20",
      "summaryZh": "第 20 頁",
      "prompt": "I am a CMO conducting a competitive analysis. My company is considering expanding into [a new line of business]. Generate a list of the top five competitors in the [industry] industry and include their pricing, strengths, weaknesses, and target audience. (Gemini Advanced)",
      "promptZh": "I am a CMO conducting a competitive analysis. My company is considering expanding into [a new line of business]. Generate a list of the top five competitors in the [industry] industry and include their pricing, strengths, weaknesses, and target audience. (Gemini Advanced)",
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
      "titleZh": "Conduct competitive analysis",
      "summary": "Page 20",
      "summaryZh": "第 20 頁",
      "prompt": "Okay, I am going to try to convince my CEO that we should expand into [line of business]. Draft a concise, competitive strategy outline for the next five years for the [industry] industry across North America markets with potential goals, strategies, and tactics. (Gemini Advanced)",
      "promptZh": "Okay, I am going to try to convince my CEO that we should expand into [line of business]. Draft a concise, competitive strategy outline for the next five years for the [industry] industry across North America markets with potential goals, strategies, and tactics. (Gemini Advanced)",
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
      "titleZh": "Communicate technical topics to non-technical audiences",
      "summary": "Page 21",
      "summaryZh": "第 21 頁",
      "prompt": "I am the CIO at [company], and I am trying to build the case to [adopt generative AI solutions]. I need to explain the technical concept of generative AI to a non-technical audience (the CEO and board). Help me write talking points that will help me convey what generative AI is, ways it could help us digitally transform, and why it’s important to our growth as a company. Include details about how it could potentially refocus our technical talent on more strategic work, help enhance our workforce’s productivity, and help us better serve our global workforce and customers. (Gemini Advanced)",
      "promptZh": "I am the CIO at [company], and I am trying to build the case to [adopt generative AI solutions]. I need to explain the technical concept of generative AI to a non-technical audience (the CEO and board). Help me write talking points that will help me convey what generative AI is, ways it could help us digitally transform, and why it’s important to our growth as a company. Include details about how it could potentially refocus our technical talent on more strategic work, help enhance our workforce’s productivity, and help us better serve our global workforce and customers. (Gemini Advanced)",
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
      "titleZh": "Communicate technical topics to non-technical audiences",
      "summary": "Page 21",
      "summaryZh": "第 21 頁",
      "prompt": "I need to build a presentation to explain a technical topic to a non-technical audience. Generate an [introduction slide] that [describes what generative AI is] using @[Gen AI Explanation Notes]. (Gemini in Slides)",
      "promptZh": "I need to build a presentation to explain a technical topic to a non-technical audience. Generate an [introduction slide] that [describes what generative AI is] using @[Gen AI Explanation Notes]. (Gemini in Slides)",
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
      "titleZh": "Develop technical summaries",
      "summary": "Page 22",
      "summaryZh": "第 22 頁",
      "prompt": "Summarize the key findings and implications of this report for [audience]. Focus on the main [vulnerabilities] identified and the recommended actions to address them. Use a formal tone. (Gemini in Docs)",
      "promptZh": "Summarize the key findings and implications of this report for [audience]. Focus on the main [vulnerabilities] identified and the recommended actions to address them. Use a formal tone. (Gemini in Docs)",
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
      "titleZh": "Track IT assets",
      "summary": "Page 22",
      "summaryZh": "第 22 頁",
      "prompt": "Create a tracker of software licenses for employees and include columns for license types, usage rights, and renewal dates. (Gemini in Sheets)",
      "promptZh": "Create a tracker of software licenses for employees and include columns for license types, usage rights, and renewal dates. (Gemini in Sheets)",
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
      "titleZh": "Demonstrate employee appreciation",
      "summary": "Page 22",
      "summaryZh": "第 22 頁",
      "prompt": "Brainstorm 10 employee appreciation ideas based on diverse employee interests such as cooking, gardening, sports, reading, and traveling. (Gemini in Docs)",
      "promptZh": "Brainstorm 10 employee appreciation ideas based on diverse employee interests such as cooking, gardening, sports, reading, and traveling. (Gemini in Docs)",
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
      "titleZh": "Assess employee satisfaction",
      "summary": "Page 23",
      "summaryZh": "第 23 頁",
      "prompt": "Draft an anonymous employee satisfaction survey with questions and answer options that touch upon key areas like workload, work-life balance, compensation, and career growth opportunities. Ensure the questions are clear, concise, and avoid leading answers. (Gemini in Docs)",
      "promptZh": "Draft an anonymous employee satisfaction survey with questions and answer options that touch upon key areas like workload, work-life balance, compensation, and career growth opportunities. Ensure the questions are clear, concise, and avoid leading answers. (Gemini in Docs)",
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
      "titleZh": "Assess employee satisfaction",
      "summary": "Page 23",
      "summaryZh": "第 23 頁",
      "prompt": "Summarize the results of the employee feedback to identify key themes. (Gemini in Docs)",
      "promptZh": "Summarize the results of the employee feedback to identify key themes. (Gemini in Docs)",
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
      "titleZh": "Find accurate information quickly",
      "summary": "Page 24",
      "summaryZh": "第 24 頁",
      "prompt": "Find the document that details the [company name]’s [holiday] sale details. (Gemini in Drive)",
      "promptZh": "Find the document that details the [company name]’s [holiday] sale details. (Gemini in Drive)",
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
      "titleZh": "Find accurate information quickly",
      "summary": "Page 24",
      "summaryZh": "第 24 頁",
      "prompt": "How much can customers save on [product type] during this sale? (Gemini in Docs)",
      "promptZh": "How much can customers save on [product type] during this sale? (Gemini in Docs)",
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
      "titleZh": "Improve team collaboration by finding",
      "summary": "Page 25",
      "summaryZh": "第 25 頁",
      "prompt": "Find the document that discusses our new return and exchange policies. (Gemini in Drive)",
      "promptZh": "Find the document that discusses our new return and exchange policies. (Gemini in Drive)",
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
      "titleZh": "Improve team collaboration by finding",
      "summary": "Page 25",
      "summaryZh": "第 25 頁",
      "prompt": "Write an email to my new colleagues summarizing @[Updated Return and Exchange Policy H2 2024]. (Gemini in Gmail)",
      "promptZh": "Write an email to my new colleagues summarizing @[Updated Return and Exchange Policy H2 2024]. (Gemini in Gmail)",
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
      "titleZh": "Streamline task management",
      "summary": "Page 25",
      "summaryZh": "第 25 頁",
      "prompt": "I am a retail manager and I need to create a checklist for my opening and closing duties. Create a template with columns for [opening and closing duties] from @[Onboarding New Hire Information]. (Gemini in Sheets)",
      "promptZh": "I am a retail manager and I need to create a checklist for my opening and closing duties. Create a template with columns for [opening and closing duties] from @[Onboarding New Hire Information]. (Gemini in Sheets)",
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
      "titleZh": "Streamline task management",
      "summary": "Page 25",
      "summaryZh": "第 25 頁",
      "prompt": "Write an email to the team telling them what still needs to be done from the AM shift from @[Opening and Closing Duties Tracker]. (Gemini in Gmail)",
      "promptZh": "Write an email to the team telling them what still needs to be done from the AM shift from @[Opening and Closing Duties Tracker]. (Gemini in Gmail)",
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
      "titleZh": "Manage inventory",
      "summary": "Page 26",
      "summaryZh": "第 26 頁",
      "prompt": "How many [units] of [product] do we have left in our inventory? (Gemini in Sheets)",
      "promptZh": "How many [units] of [product] do we have left in our inventory? (Gemini in Sheets)",
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
      "titleZh": "Manage audits",
      "summary": "Page 26",
      "summaryZh": "第 26 頁",
      "prompt": "Create a formula that helps me calculate the difference between two columns. Which items have a discrepancy in [the total number counted] versus [the quantity on hand]? (Gemini in Sheets)",
      "promptZh": "Create a formula that helps me calculate the difference between two columns. Which items have a discrepancy in [the total number counted] versus [the quantity on hand]? (Gemini in Sheets)",
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
      "titleZh": "Manage audits",
      "summary": "Page 26",
      "summaryZh": "第 26 頁",
      "prompt": "I’m a warehouse worker managing an audit. Write a message to my supervisor to let them know that I am looking into the products whose counts are incorrect. (Gemini in Gmail)",
      "promptZh": "I’m a warehouse worker managing an audit. Write a message to my supervisor to let them know that I am looking into the products whose counts are incorrect. (Gemini in Gmail)",
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
      "titleZh": "Welcome new employees",
      "summary": "Page 27",
      "summaryZh": "第 27 頁",
      "prompt": "I am an HR manager, and I am developing a script for my presentation for new hires. I need to create the script for an onboarding presentation about our company’s commitment to employee development and well-being. Help me draft talking points that showcase why employee mentorship and development are core values for our company using @[Mission Statement and Core Values]. (Gemini in Docs)",
      "promptZh": "I am an HR manager, and I am developing a script for my presentation for new hires. I need to create the script for an onboarding presentation about our company’s commitment to employee development and well-being. Help me draft talking points that showcase why employee mentorship and development are core values for our company using @[Mission Statement and Core Values]. (Gemini in Docs)",
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
      "titleZh": "Welcome new employees",
      "summary": "Page 28",
      "summaryZh": "第 28 頁",
      "prompt": "Add four talking points for a new section of the presentation script that explains how we support our employees’ development. Mention our training and certification programs and mentorship opportunities using @[Learning and Development Paths], and write a strong closing statement about our expectation that everyone contributes to a respectful and welcoming workplace. Use a professional tone. (Gemini in Docs)",
      "promptZh": "Add four talking points for a new section of the presentation script that explains how we support our employees’ development. Mention our training and certification programs and mentorship opportunities using @[Learning and Development Paths], and write a strong closing statement about our expectation that everyone contributes to a respectful and welcoming workplace. Use a professional tone. (Gemini in Docs)",
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
      "titleZh": "Report on recruitment metrics",
      "summary": "Page 28",
      "summaryZh": "第 28 頁",
      "prompt": "Help me create a formula to calculate the total total number of [hires] by [department]. (Gemini in Sheets)",
      "promptZh": "Help me create a formula to calculate the total total number of [hires] by [department]. (Gemini in Sheets)",
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
      "titleZh": "Report on recruitment metrics",
      "summary": "Page 28",
      "summaryZh": "第 28 頁",
      "prompt": "In what month did we hire the most people? (Gemini in Sheets)",
      "promptZh": "In what month did we hire the most people? (Gemini in Sheets)",
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
      "titleZh": "Manage the recruiting process",
      "summary": "Page 28",
      "summaryZh": "第 28 頁",
      "prompt": "Create a list of strategies our recruiters can use to improve our existing recruiting process and identify potential job candidates. (Gemini in Docs)",
      "promptZh": "Create a list of strategies our recruiters can use to improve our existing recruiting process and identify potential job candidates. (Gemini in Docs)",
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
      "titleZh": "Manage the interview process",
      "summary": "Page 29",
      "summaryZh": "第 29 頁",
      "prompt": "I am opening a new job position on the marketing team. Write a compelling role description for a content marketing manager. Highlight key responsibilities [insert] and requirements, including B2B and B2C content creation, a minimum of five years experience, and a portfolio of writing examples. (Gemini in Docs)",
      "promptZh": "I am opening a new job position on the marketing team. Write a compelling role description for a content marketing manager. Highlight key responsibilities [insert] and requirements, including B2B and B2C content creation, a minimum of five years experience, and a portfolio of writing examples. (Gemini in Docs)",
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
      "titleZh": "Communicate with candidates",
      "summary": "Page 29",
      "summaryZh": "第 29 頁",
      "prompt": "I am writing an email to a job candidate who just finished the interview process. Create a template for an offer letter for the [selected candidate] for the [position] with a request to schedule a call to discuss benefits, compensation, and start date. (Gemini in Docs)",
      "promptZh": "I am writing an email to a job candidate who just finished the interview process. Create a template for an offer letter for the [selected candidate] for the [position] with a request to schedule a call to discuss benefits, compensation, and start date. (Gemini in Docs)",
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
      "titleZh": "Communicate with candidates",
      "summary": "Page 29",
      "summaryZh": "第 29 頁",
      "prompt": "I am writing an email to job candidates who finished the interview process, but who were not selected. Help me write a rejection letter for [candidate] for the [position]. Use an empathetic tone. (Gemini in Docs)",
      "promptZh": "I am writing an email to job candidates who finished the interview process, but who were not selected. Help me write a rejection letter for [candidate] for the [position]. Use an empathetic tone. (Gemini in Docs)",
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
      "titleZh": "Create individualized learning and development plans",
      "summary": "Page 30",
      "summaryZh": "第 30 頁",
      "prompt": "Create a personalized learning and development plan for a new hire who needs to learn about [topic]. Organize it by day and suggest relevant files. (Gemini in Drive)",
      "promptZh": "Create a personalized learning and development plan for a new hire who needs to learn about [topic]. Organize it by day and suggest relevant files. (Gemini in Drive)",
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
      "titleZh": "Onboard employees",
      "summary": "Page 30",
      "summaryZh": "第 30 頁",
      "prompt": "Create a table that outlines a new employee’s first-week schedule, including key meetings, training sessions, and introductions. Provide a column for key contacts and priority level (low, medium, high) for each activity. (Gemini in Sheets)",
      "promptZh": "Create a table that outlines a new employee’s first-week schedule, including key meetings, training sessions, and introductions. Provide a column for key contacts and priority level (low, medium, high) for each activity. (Gemini in Sheets)",
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
      "titleZh": "Communicate key findings and draft follow-up surveys",
      "summary": "Page 31",
      "summaryZh": "第 31 頁",
      "prompt": "Design a team-bonding activity, such as an office scavenger hunt, to have team members work together during their team meeting. (Gemini in Docs)",
      "promptZh": "Design a team-bonding activity, such as an office scavenger hunt, to have team members work together during their team meeting. (Gemini in Docs)",
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
      "titleZh": "Communicate key findings and draft follow-up surveys",
      "summary": "Page 31",
      "summaryZh": "第 31 頁",
      "prompt": "Draft an email to the new employees on the [team] to meet the rest of their team and explain the team-building purposes of the meeting. (Gemini in Gmail)",
      "promptZh": "Draft an email to the new employees on the [team] to meet the rest of their team and explain the team-building purposes of the meeting. (Gemini in Gmail)",
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
      "titleZh": "Communicate key findings and draft follow-up surveys",
      "summary": "Page 31",
      "summaryZh": "第 31 頁",
      "prompt": "Draft an email to senior leadership that summarizes the key findings from our [report]. Include a short introductory paragraph with bullet points on the most important findings. (Gemini in Docs)",
      "promptZh": "Draft an email to senior leadership that summarizes the key findings from our [report]. Include a short introductory paragraph with bullet points on the most important findings. (Gemini in Docs)",
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
      "titleZh": "Develop a visual identity",
      "summary": "Page 32",
      "summaryZh": "第 32 頁",
      "prompt": "Generate ideas for a creative and eye-catching logo for my new business, a coffee shop combined with a video game cafe. Generate a logo considering the following: Dual Concept: The logo needs to clearly signal both the coffee and gaming aspects of the business without being too cluttered. Target Audience: Appeal to a wide range of gamers (casual and enthusiast), as well as coffee lovers seeking a unique hangout spot. Style Options: I’m open to these approaches — let’s get a few examples in each of these three styles to compare: Modern and Playful: Bold colors, fun graphics, maybe a pixel art aesthetic. Retro-Cool: Think classic arcade style — chunky lettering, neon color inspiration. Sleek and Minimalist: Clean lines, geometric shapes, a more subtle nod to both themes. (Gemini Advanced)",
      "promptZh": "Generate ideas for a creative and eye-catching logo for my new business, a coffee shop combined with a video game cafe. Generate a logo considering the following: Dual Concept: The logo needs to clearly signal both the coffee and gaming aspects of the business without being too cluttered. Target Audience: Appeal to a wide range of gamers (casual and enthusiast), as well as coffee lovers seeking a unique hangout spot. Style Options: I’m open to these approaches — let’s get a few examples in each of these three styles to compare: Modern and Playful: Bold colors, fun graphics, maybe a pixel art aesthetic. Retro-Cool: Think classic arcade style — chunky lettering, neon color inspiration. Sleek and Minimalist: Clean lines, geometric shapes, a more subtle nod to both themes. (Gemini Advanced)",
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
      "titleZh": "Develop a visual identity",
      "summary": "Page 33",
      "summaryZh": "第 33 頁",
      "prompt": "I like the retro-cool options. Can you provide three more in that same style? (Gemini Advanced)",
      "promptZh": "I like the retro-cool options. Can you provide three more in that same style? (Gemini Advanced)",
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
      "titleZh": "Develop a visual identity",
      "summary": "Page 33",
      "summaryZh": "第 33 頁",
      "prompt": "Write a tagline and 10 potential names for the business to go with these logos. (Gemini Advanced)",
      "promptZh": "Write a tagline and 10 potential names for the business to go with these logos. (Gemini Advanced)",
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
      "titleZh": "Develop brand strategy",
      "summary": "Page 33",
      "summaryZh": "第 33 頁",
      "prompt": "I am a brand manager at [company]. Help me define a clear and effective brand architecture for [company], considering its diverse products and service portfolio. For additional context, here is our current brand portfolio: [List all existing brands, products, and services]. Here is our company mission and vision: [Provide a brief overview of the company’s mission and vision]. And these are our target audience(s): [describe target audience(s)]. Our desired brand positioning is [explain how the company wants to be perceived in the market]. (Gemini Advanced)",
      "promptZh": "I am a brand manager at [company]. Help me define a clear and effective brand architecture for [company], considering its diverse products and service portfolio. For additional context, here is our current brand portfolio: [List all existing brands, products, and services]. Here is our company mission and vision: [Provide a brief overview of the company’s mission and vision]. And these are our target audience(s): [describe target audience(s)]. Our desired brand positioning is [explain how the company wants to be perceived in the market]. (Gemini Advanced)",
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
      "titleZh": "Brainstorm brand partnerships",
      "summary": "Page 33",
      "summaryZh": "第 33 頁",
      "prompt": "I am a [brand manager] at [company] working to launch a new campaign focused on [topic]. Identify potential types of influencers and complementary brands that [company] could partner with to amplify the [campaign] on social media channels. The goal is to reach a wide audience of [audiences], while building credibility and driving engagement. (Gemini Advanced)",
      "promptZh": "I am a [brand manager] at [company] working to launch a new campaign focused on [topic]. Identify potential types of influencers and complementary brands that [company] could partner with to amplify the [campaign] on social media channels. The goal is to reach a wide audience of [audiences], while building credibility and driving engagement. (Gemini Advanced)",
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
      "titleZh": "Conduct market research and identify trends",
      "summary": "Page 34",
      "summaryZh": "第 34 頁",
      "prompt": "I need to A/B test new messaging. Here is our messaging: [messaging]. Generate three different variations of ad copy. (Gemini Advanced)",
      "promptZh": "I need to A/B test new messaging. Here is our messaging: [messaging]. Generate three different variations of ad copy. (Gemini Advanced)",
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
      "titleZh": "Create and manage content and distribution",
      "summary": "Page 34",
      "summaryZh": "第 34 頁",
      "prompt": "Create a blog draft announcing that [name] is joining [company] as [position]. [Share two or three details from their bio, such as their previous position and company, their involvement in professional organizations, etc.]. (Gemini in Docs)",
      "promptZh": "Create a blog draft announcing that [name] is joining [company] as [position]. [Share two or three details from their bio, such as their previous position and company, their involvement in professional organizations, etc.]. (Gemini in Docs)",
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
      "titleZh": "Create and manage content and distribution",
      "summary": "Page 34",
      "summaryZh": "第 34 頁",
      "prompt": "Create a project tracker for content amplification and include columns for channel, owner, URL, and priority level (low, medium, high). (Gemini in Sheets)",
      "promptZh": "Create a project tracker for content amplification and include columns for channel, owner, URL, and priority level (low, medium, high). (Gemini in Sheets)",
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
      "titleZh": "Analyze social media trends and other data to reduce",
      "summary": "Page 35",
      "summaryZh": "第 35 頁",
      "prompt": "Generate a project tracker using the action items from @[Meeting Notes from Gemini]. (Gemini in Sheets)",
      "promptZh": "Generate a project tracker using the action items from @[Meeting Notes from Gemini]. (Gemini in Sheets)",
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
      "titleZh": "Perform audience research and develop personas",
      "summary": "Page 35",
      "summaryZh": "第 35 頁",
      "prompt": "I am a marketing specialist focused on [area] at [company]. I need to conduct in-depth audience research so that I can develop convincing marketing artifacts for [personas]. To start, help me generate a comprehensive profile of [target audience]. Include core demographics and psychographics, online platforms they frequent, key pain points [product] could solve, and language and messaging that resonates with them. (Gemini Advanced)",
      "promptZh": "I am a marketing specialist focused on [area] at [company]. I need to conduct in-depth audience research so that I can develop convincing marketing artifacts for [personas]. To start, help me generate a comprehensive profile of [target audience]. Include core demographics and psychographics, online platforms they frequent, key pain points [product] could solve, and language and messaging that resonates with them. (Gemini Advanced)",
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
      "titleZh": "Create and optimize copy for search engine marketing (SEM)",
      "summary": "Page 36",
      "summaryZh": "第 36 頁",
      "prompt": "For my SEM campaign, use these keywords as inspiration to generate multiple ad copy variations with different headlines, descriptions, and calls to action for [product]. Use a [tone] tone in the copy. (Gemini Advanced)",
      "promptZh": "For my SEM campaign, use these keywords as inspiration to generate multiple ad copy variations with different headlines, descriptions, and calls to action for [product]. Use a [tone] tone in the copy. (Gemini Advanced)",
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
      "titleZh": "Draft customer acquisition communications",
      "summary": "Page 36",
      "summaryZh": "第 36 頁",
      "prompt": "Write three different email subject lines that reference [audience segments] and our [product]. Make them catchy but professional. (Gemini in Docs)",
      "promptZh": "Write three different email subject lines that reference [audience segments] and our [product]. Make them catchy but professional. (Gemini in Docs)",
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
      "titleZh": "Draft customer acquisition communications",
      "summary": "Page 36",
      "summaryZh": "第 36 頁",
      "prompt": "Write an email proposing [suggested email subject lines] to the copywriting team. Keep the email short and simple and request feedback by the end of week. Thank them for their help. (Gemini in Gmail)",
      "promptZh": "Write an email proposing [suggested email subject lines] to the copywriting team. Keep the email short and simple and request feedback by the end of week. Thank them for their help. (Gemini in Gmail)",
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
      "titleZh": "Generate inbound marketing campaigns",
      "summary": "Page 37",
      "summaryZh": "第 37 頁",
      "prompt": "Create compelling copy for a landing page promoting a new [ebook/webinar/free trial and details] designed for an executive target audience. Highlight key benefits and encourage conversions with persuasive calls to action. (Gemini in Docs)",
      "promptZh": "Create compelling copy for a landing page promoting a new [ebook/webinar/free trial and details] designed for an executive target audience. Highlight key benefits and encourage conversions with persuasive calls to action. (Gemini in Docs)",
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
      "titleZh": "Generate inbound marketing campaigns",
      "summary": "Page 37",
      "summaryZh": "第 37 頁",
      "prompt": "Generate copy for a sequence of five automated emails to nurture leads after they download the ebook on [topic]. Personalize emails and encourage further engagement [with other valuable resources or offers]. (Gemini in Docs)",
      "promptZh": "Generate copy for a sequence of five automated emails to nurture leads after they download the ebook on [topic]. Personalize emails and encourage further engagement [with other valuable resources or offers]. (Gemini in Docs)",
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
      "titleZh": "Deliver personalized content to customers at scale",
      "summary": "Page 37",
      "summaryZh": "第 37 頁",
      "prompt": "Create a 5-step nurture email cadence to [prospective customers] who have signed up for [our newsletter], with the goal of getting them to [purchase] [product] using @[Product Specific Notes] and @[Product FAQ]. (Gemini in Docs)",
      "promptZh": "Create a 5-step nurture email cadence to [prospective customers] who have signed up for [our newsletter], with the goal of getting them to [purchase] [product] using @[Product Specific Notes] and @[Product FAQ]. (Gemini in Docs)",
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
      "titleZh": "Create visuals for ad campaigns",
      "summary": "Page 37",
      "summaryZh": "第 37 頁",
      "prompt": "Help me create inspirational images for a marketing campaign for [type of product]. Images should use [colors] and [natural elements, such as clouds]. Use a [photorealistic] style. (Gemini in Slides)",
      "promptZh": "Help me create inspirational images for a marketing campaign for [type of product]. Images should use [colors] and [natural elements, such as clouds]. Use a [photorealistic] style. (Gemini in Slides)",
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
      "titleZh": "Generate inspiration for your blog",
      "summary": "Page 38",
      "summaryZh": "第 38 頁",
      "prompt": "Suggest blog post topics that would be interesting for people passionate about travel and the tourism industry. Here’s what I want you to focus on: Make the topics unique. There are lots of tourism blogs out there — let’s come up with fresh angles that would stand out. Keep the topics relevant. Tap into current trends or recent challenges/innovations within the tourism industry when brainstorming. I’d like each topic to include: Target audience: Who would this topic specifically appeal to? Content angle: What makes this post idea unique and engaging? Suggested format: Is this best as a listicle, a how-to guide, an interview piece, etc.? (Gemini Advanced)",
      "promptZh": "Suggest blog post topics that would be interesting for people passionate about travel and the tourism industry. Here’s what I want you to focus on: Make the topics unique. There are lots of tourism blogs out there — let’s come up with fresh angles that would stand out. Keep the topics relevant. Tap into current trends or recent challenges/innovations within the tourism industry when brainstorming. I’d like each topic to include: Target audience: Who would this topic specifically appeal to? Content angle: What makes this post idea unique and engaging? Suggested format: Is this best as a listicle, a how-to guide, an interview piece, etc.? (Gemini Advanced)",
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
      "titleZh": "Generate inspiration for your blog",
      "summary": "Page 38",
      "summaryZh": "第 38 頁",
      "prompt": "Create an image of a plane flying above the clouds over mountains and rivers during sunrise that I can use in the marketing campaign to promote my travel company. (Gemini Advanced)",
      "promptZh": "Create an image of a plane flying above the clouds over mountains and rivers during sunrise that I can use in the marketing campaign to promote my travel company. (Gemini Advanced)",
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
      "titleZh": "Create social media posts",
      "summary": "Page 38",
      "summaryZh": "第 38 頁",
      "prompt": "Write three engaging social media posts about [product/service/topic] that would appeal to [target audience]. Keep each social media post to two sentences and include a call to action to visit [our website]. (Gemini in Docs)",
      "promptZh": "Write three engaging social media posts about [product/service/topic] that would appeal to [target audience]. Keep each social media post to two sentences and include a call to action to visit [our website]. (Gemini in Docs)",
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
      "titleZh": "Create social media posts",
      "summary": "Page 38",
      "summaryZh": "第 38 頁",
      "prompt": "Create a social media post promoting our upcoming [event name]. Include attention-grabbing language and relevant hashtags for [audience]. (Gemini in Docs)",
      "promptZh": "Create a social media post promoting our upcoming [event name]. Include attention-grabbing language and relevant hashtags for [audience]. (Gemini in Docs)",
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
      "titleZh": "Create a strategic marketing plan",
      "summary": "Page 39",
      "summaryZh": "第 39 頁",
      "prompt": "I’m developing a marketing plan for a new app that provides [functionality]. My target audience is [audience]. Help me create a plan with a focus on [marketing channels]. Here’s what I’d like you to cover: competitor analysis, ideal marketing channel mix with rationale, budget recommendations, key messaging ideas, and proposed campaign timeline with KPIs. (Gemini Advanced)",
      "promptZh": "I’m developing a marketing plan for a new app that provides [functionality]. My target audience is [audience]. Help me create a plan with a focus on [marketing channels]. Here’s what I’d like you to cover: competitor analysis, ideal marketing channel mix with rationale, budget recommendations, key messaging ideas, and proposed campaign timeline with KPIs. (Gemini Advanced)",
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
      "titleZh": "Create a strategic marketing plan",
      "summary": "Page 39",
      "summaryZh": "第 39 頁",
      "prompt": "Draft an email to the CMO telling them that I will provide a one-pager with a strategic marketing plan for the new app launch project by [date], and it will include an executive summary, overview of the competitive landscape, top marketing channels, and the target demographic for all South American markets. (Gemini in Gmail)",
      "promptZh": "Draft an email to the CMO telling them that I will provide a one-pager with a strategic marketing plan for the new app launch project by [date], and it will include an executive summary, overview of the competitive landscape, top marketing channels, and the target demographic for all South American markets. (Gemini in Gmail)",
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
      "titleZh": "Generate user acceptance tests",
      "summary": "Page 40",
      "summaryZh": "第 40 頁",
      "prompt": "Create a table with 10 user acceptance tests (UAT) for the website registration form. (Gemini Advanced)",
      "promptZh": "Create a table with 10 user acceptance tests (UAT) for the website registration form. (Gemini Advanced)",
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
      "titleZh": "Generate user acceptance tests",
      "summary": "Page 40",
      "summaryZh": "第 40 頁",
      "prompt": "Draft an email to [my colleague] who is running this UAT and explain what they need to do next. (Gemini Advanced)",
      "promptZh": "Draft an email to [my colleague] who is running this UAT and explain what they need to do next. (Gemini Advanced)",
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
      "titleZh": "Report on project status",
      "summary": "Page 41",
      "summaryZh": "第 41 頁",
      "prompt": "Summarize this call transcript in a short paragraph. In bullet points, highlight the action items, decisions made, and owners for each item based off of [call transcript]. (Gemini in Docs)",
      "promptZh": "Summarize this call transcript in a short paragraph. In bullet points, highlight the action items, decisions made, and owners for each item based off of [call transcript]. (Gemini in Docs)",
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
      "titleZh": "Report on project status",
      "summary": "Page 41",
      "summaryZh": "第 41 頁",
      "prompt": "Draft a project status update email template to send to my manager. Include sections for a summary of key accomplishments this week, any challenges faced, and the top three priorities for next week. (Gemini in Docs)",
      "promptZh": "Draft a project status update email template to send to my manager. Include sections for a summary of key accomplishments this week, any challenges faced, and the top three priorities for next week. (Gemini in Docs)",
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
      "titleZh": "Report on project status",
      "summary": "Page 41",
      "summaryZh": "第 41 頁",
      "prompt": "Write an invitation for a team lunch to celebrate the progress made on a project and include [date, time, and location]. Thank them for all of their hard work and acknowledge that this has been a challenging project. (Gemini in Gmail)",
      "promptZh": "Write an invitation for a team lunch to celebrate the progress made on a project and include [date, time, and location]. Thank them for all of their hard work and acknowledge that this has been a challenging project. (Gemini in Gmail)",
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
      "titleZh": "Create a project retrospective",
      "summary": "Page 41",
      "summaryZh": "第 41 頁",
      "prompt": "I need to write a report detailing the successes, failures, and lessons learned from [project]. Draft a list of 20 questions to guide a cross-team process investigation. Include questions to uncover what worked, what didn’t, specific process breakdowns, technical issues, communication gaps, or any other potential contributing factors to the problem or success of the project. (Gemini in Docs)",
      "promptZh": "I need to write a report detailing the successes, failures, and lessons learned from [project]. Draft a list of 20 questions to guide a cross-team process investigation. Include questions to uncover what worked, what didn’t, specific process breakdowns, technical issues, communication gaps, or any other potential contributing factors to the problem or success of the project. (Gemini in Docs)",
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
      "titleZh": "Develop an issue tracker and related communications",
      "summary": "Page 42",
      "summaryZh": "第 42 頁",
      "prompt": "Summarize this document in two paragraphs. Include high-level information about the project’s goals, the main contributors, the outcomes of the project, and any key successes or failures. (Gemini in Docs)",
      "promptZh": "Summarize this document in two paragraphs. Include high-level information about the project’s goals, the main contributors, the outcomes of the project, and any key successes or failures. (Gemini in Docs)",
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
      "titleZh": "Develop an issue tracker and related communications",
      "summary": "Page 42",
      "summaryZh": "第 42 頁",
      "prompt": "Create a spreadsheet to track project issues, including descriptions, status, assigned owner, and action items for resolution. (Gemini in Sheets)",
      "promptZh": "Create a spreadsheet to track project issues, including descriptions, status, assigned owner, and action items for resolution. (Gemini in Sheets)",
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
      "titleZh": "Develop an issue tracker and related communications",
      "summary": "Page 42",
      "summaryZh": "第 42 頁",
      "prompt": "Draft an email template to announce when an issue arises and include causes, solutions, and timelines to resolve it. (Gemini in Docs)",
      "promptZh": "Draft an email template to announce when an issue arises and include causes, solutions, and timelines to resolve it. (Gemini in Docs)",
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
      "titleZh": "Develop an issue tracker and related communications",
      "summary": "Page 42",
      "summaryZh": "第 42 頁",
      "prompt": "Draft an email template to a stakeholder to escalate a critical project issue, outlining the impact and proposed solution. (Gemini in Docs)",
      "promptZh": "Draft an email template to a stakeholder to escalate a critical project issue, outlining the impact and proposed solution. (Gemini in Docs)",
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
      "titleZh": "Create a workback schedule",
      "summary": "Page 42",
      "summaryZh": "第 42 頁",
      "prompt": "I am a [technical project manager] at [company] overseeing [project and brief project description]. The project has the following scope: [scope]. Our project goals are: [project goals]. Our project deliverables are: [project deliverables]. Our budget is [budget], and our delivery date is [delivery date]. Help me create a workback schedule to keep the team on track. Include dates for key milestones and demos. (Gemini Advanced)",
      "promptZh": "I am a [technical project manager] at [company] overseeing [project and brief project description]. The project has the following scope: [scope]. Our project goals are: [project goals]. Our project deliverables are: [project deliverables]. Our budget is [budget], and our delivery date is [delivery date]. Help me create a workback schedule to keep the team on track. Include dates for key milestones and demos. (Gemini Advanced)",
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
      "titleZh": "Conduct customer research",
      "summary": "Page 43",
      "summaryZh": "第 43 頁",
      "prompt": "Write an email to [name], the new [title] at [company]. Congratulate them on their new role. Introduce me as their contact point at [company name]. Invite them to lunch next week and check if they prefer Monday or Tuesday. (Gemini in Gmail)",
      "promptZh": "Write an email to [name], the new [title] at [company]. Congratulate them on their new role. Introduce me as their contact point at [company name]. Invite them to lunch next week and check if they prefer Monday or Tuesday. (Gemini in Gmail)",
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
      "titleZh": "Conduct customer research",
      "summary": "Page 44",
      "summaryZh": "第 44 頁",
      "prompt": "I am an account executive in charge of a new account, [customer name]. I need to do initial research. What is the market strategy of [customer]? (Gemini Advanced)",
      "promptZh": "I am an account executive in charge of a new account, [customer name]. I need to do initial research. What is the market strategy of [customer]? (Gemini Advanced)",
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
      "titleZh": "Conduct customer research",
      "summary": "Page 44",
      "summaryZh": "第 44 頁",
      "prompt": "[URLs] Summarize these articles. Provide key insights and contextualize why these announcements are important. (Gemini Advanced)",
      "promptZh": "[URLs] Summarize these articles. Provide key insights and contextualize why these announcements are important. (Gemini Advanced)",
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
      "titleZh": "Conduct customer research",
      "summary": "Page 44",
      "summaryZh": "第 44 頁",
      "prompt": "[YouTube URL] Summarize this interview and tell me more about [executive name]. What does [executive] care about? (Gemini Advanced)",
      "promptZh": "[YouTube URL] Summarize this interview and tell me more about [executive name]. What does [executive] care about? (Gemini Advanced)",
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
      "titleZh": "Conduct customer research",
      "summary": "Page 44",
      "summaryZh": "第 44 頁",
      "prompt": "Tell me how [company] can help [customer company] with achieving their goals. (Gemini Advanced)",
      "promptZh": "Tell me how [company] can help [customer company] with achieving their goals. (Gemini Advanced)",
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
      "titleZh": "Conduct customer research",
      "summary": "Page 44",
      "summaryZh": "第 44 頁",
      "prompt": "Create an email draft for [customer] explaining why [your company] is the perfect partner for them to achieve their market goals. (Gemini in Docs)",
      "promptZh": "Create an email draft for [customer] explaining why [your company] is the perfect partner for them to achieve their market goals. (Gemini in Docs)",
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
      "titleZh": "Map customer journeys",
      "summary": "Page 44",
      "summaryZh": "第 44 頁",
      "prompt": "Create personalized onboarding materials for [customer]. Use @[Standard Onboarding Documents] and @[New Customer Migration Notes] to personalize the assets. (Gemini in Docs)",
      "promptZh": "Create personalized onboarding materials for [customer]. Use @[Standard Onboarding Documents] and @[New Customer Migration Notes] to personalize the assets. (Gemini in Docs)",
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
      "titleZh": "Manage the request for proposal (RFP) process",
      "summary": "Page 45",
      "summaryZh": "第 45 頁",
      "prompt": "I just received an RFP from [company]. Before I dive into the RFP, I want your help in conducting research. Give me a business profile of the company including all of the basics (where they are located, what they provide for customers, who their target audience is, any recent news from the company). Be as detailed as possible as I want to see a full view of [the company]. (Gemini Advanced)",
      "promptZh": "I just received an RFP from [company]. Before I dive into the RFP, I want your help in conducting research. Give me a business profile of the company including all of the basics (where they are located, what they provide for customers, who their target audience is, any recent news from the company). Be as detailed as possible as I want to see a full view of [the company]. (Gemini Advanced)",
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
      "titleZh": "Manage the request for proposal (RFP) process",
      "summary": "Page 45",
      "summaryZh": "第 45 頁",
      "prompt": "[URL or uploaded file] I am a sales manager at [company], and this is the RFP we’ve received from [company]. Summarize this content in a few paragraphs. What is the customer seeking, what is the budget, and when is a response due by? (Gemini Advanced)",
      "promptZh": "[URL or uploaded file] I am a sales manager at [company], and this is the RFP we’ve received from [company]. Summarize this content in a few paragraphs. What is the customer seeking, what is the budget, and when is a response due by? (Gemini Advanced)",
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
      "titleZh": "Access information and tools on your phone while on the go",
      "summary": "Page 45",
      "summaryZh": "第 45 頁",
      "prompt": "Write a response to this email letting [them] know that I’ve received the message and will take [action] by [Friday]. (Gemini in Gmail)",
      "promptZh": "Write a response to this email letting [them] know that I’ve received the message and will take [action] by [Friday]. (Gemini in Gmail)",
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
      "titleZh": "Develop customer relationships",
      "summary": "Page 45",
      "summaryZh": "第 45 頁",
      "prompt": "Write an email inviting people interested in [focus area] to our happy hour taking place on [date, time] at [trade show event]. Include that we specialize in [focus area]. (Gemini in Gmail)",
      "promptZh": "Write an email inviting people interested in [focus area] to our happy hour taking place on [date, time] at [trade show event]. Include that we specialize in [focus area]. (Gemini in Gmail)",
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
      "titleZh": "Develop customer relationships",
      "summary": "Page 46",
      "summaryZh": "第 46 頁",
      "prompt": "Draft an email thanking customers for their time at the happy hour on [date, time, location]. End with an invitation to continue the conversations in the next few weeks. Use a friendly tone. (Gemini in Gmail)",
      "promptZh": "Draft an email thanking customers for their time at the happy hour on [date, time, location]. End with an invitation to continue the conversations in the next few weeks. Use a friendly tone. (Gemini in Gmail)",
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
      "titleZh": "Develop customer relationships",
      "summary": "Page 46",
      "summaryZh": "第 46 頁",
      "prompt": "Draft 10 questions that I can use to survey customers about their recent experience with our [product/service]. Include questions to gauge how useful [the product] is, what they liked, and what they thought could use improvement. (Gemini in Docs)",
      "promptZh": "Draft 10 questions that I can use to survey customers about their recent experience with our [product/service]. Include questions to gauge how useful [the product] is, what they liked, and what they thought could use improvement. (Gemini in Docs)",
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
      "titleZh": "Support the sales team",
      "summary": "Page 46",
      "summaryZh": "第 46 頁",
      "prompt": "Draft an email to all Southeast region sales leads. Inform them of [issues]. Advise them to communicate with their teams to contact their customers and offer a 20% discount on a future order as an apology. (Gemini in Gmail)",
      "promptZh": "Draft an email to all Southeast region sales leads. Inform them of [issues]. Advise them to communicate with their teams to contact their customers and offer a 20% discount on a future order as an apology. (Gemini in Gmail)",
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
      "titleZh": "Support the sales team",
      "summary": "Page 46",
      "summaryZh": "第 46 頁",
      "prompt": "Draft an email to the regional sales representatives about an urgent meeting that needs to take place next week about the [issues]. Ask them to provide availability on Monday or Tuesday. (Gemini in Gmail)",
      "promptZh": "Draft an email to the regional sales representatives about an urgent meeting that needs to take place next week about the [issues]. Ask them to provide availability on Monday or Tuesday. (Gemini in Gmail)",
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
      "titleZh": "Coach and train the sales team",
      "summary": "Page 46",
      "summaryZh": "第 46 頁",
      "prompt": "Create a half-day agenda for an educational session on our latest technology [products] for sales teams. Include time for the product development team to present and include time for lunch. (Gemini in Docs)",
      "promptZh": "Create a half-day agenda for an educational session on our latest technology [products] for sales teams. Include time for the product development team to present and include time for lunch. (Gemini in Docs)",
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
      "titleZh": "Coach and train the sales team",
      "summary": "Page 47",
      "summaryZh": "第 47 頁",
      "prompt": "Create a spreadsheet that tracks online courses for sellers. Include columns for the course’s main topic, price, duration, and priority level. (Gemini in Sheets)",
      "promptZh": "Create a spreadsheet that tracks online courses for sellers. Include columns for the course’s main topic, price, duration, and priority level. (Gemini in Sheets)",
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
      "titleZh": "Improve collaboration and execution by customizing sales materials",
      "summary": "Page 47",
      "summaryZh": "第 47 頁",
      "prompt": "Write a message to [customer] thanking them for their time at our last [meeting]. Provide a quick summary of the meeting and acknowledge any pain points discussed. Ask for additional time to discuss our [solution] using @[Customer Meeting Gemini Notes]. (Gemini in Gmail)",
      "promptZh": "Write a message to [customer] thanking them for their time at our last [meeting]. Provide a quick summary of the meeting and acknowledge any pain points discussed. Ask for additional time to discuss our [solution] using @[Customer Meeting Gemini Notes]. (Gemini in Gmail)",
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
      "titleZh": "Improve collaboration and execution by customizing sales materials",
      "summary": "Page 47",
      "summaryZh": "第 47 頁",
      "prompt": "I am an [account manager] and I just finished a call with [customer]. I want to summarize the [pain points] mentioned by [customer] during our last meeting. Provide a list of direct quotes from @[Customer Call Transcript] where [customer] discusses what they are trying to solve. (Gemini in Docs)",
      "promptZh": "I am an [account manager] and I just finished a call with [customer]. I want to summarize the [pain points] mentioned by [customer] during our last meeting. Provide a list of direct quotes from @[Customer Call Transcript] where [customer] discusses what they are trying to solve. (Gemini in Docs)",
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
      "titleZh": "Improve collaboration and execution by customizing sales materials",
      "summary": "Page 47",
      "summaryZh": "第 47 頁",
      "prompt": "I need to create convincing reasons why [customer] should adopt [product] to solve for [their pain points]. Write specific reasons why [product] from [company] could help them achieve their [business goals] using @[Product Sales Kit Full Assets]. (Gemini in Docs)",
      "promptZh": "I need to create convincing reasons why [customer] should adopt [product] to solve for [their pain points]. Write specific reasons why [product] from [company] could help them achieve their [business goals] using @[Product Sales Kit Full Assets]. (Gemini in Docs)",
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
      "titleZh": "Build customer relationships",
      "summary": "Page 48",
      "summaryZh": "第 48 頁",
      "prompt": "Compose a personalized follow-up email to [client] following an initial conversation. Summarize the key points we discussed and address any outstanding questions. (Gemini in Docs)",
      "promptZh": "Compose a personalized follow-up email to [client] following an initial conversation. Summarize the key points we discussed and address any outstanding questions. (Gemini in Docs)",
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
      "titleZh": "Build customer relationships",
      "summary": "Page 48",
      "summaryZh": "第 48 頁",
      "prompt": "Draft four email templates to check in on my customer weekly now that they have purchased our new [service]. Use one value proposition (cost, ease of use, security, availability, and customization) as the main topic for each email, and include [call to action] in each message. (Gemini in Docs)",
      "promptZh": "Draft four email templates to check in on my customer weekly now that they have purchased our new [service]. Use one value proposition (cost, ease of use, security, availability, and customization) as the main topic for each email, and include [call to action] in each message. (Gemini in Docs)",
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
      "titleZh": "Prepare for new customer calls",
      "summary": "Page 48",
      "summaryZh": "第 48 頁",
      "prompt": "Draft a customized script for me to follow during my sales call with a prospect. The call will happen over a video call and is set to last 30 minutes. Make sure to add the following in the script: how [company products/solutions] can help address potential customer’s pain points, how [company]’s delivery system guarantees seamless and timely delivery, competitive pricing and volume-discount table, and space for a customer reference in the [customer’s industry] industry. (Gemini Advanced)",
      "promptZh": "Draft a customized script for me to follow during my sales call with a prospect. The call will happen over a video call and is set to last 30 minutes. Make sure to add the following in the script: how [company products/solutions] can help address potential customer’s pain points, how [company]’s delivery system guarantees seamless and timely delivery, competitive pricing and volume-discount table, and space for a customer reference in the [customer’s industry] industry. (Gemini Advanced)",
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
      "titleZh": "Prepare for new customer calls",
      "summary": "Page 48",
      "summaryZh": "第 48 頁",
      "prompt": "Generate an elevator pitch for [product name] and include key benefits, competitive points of differentiation, and the pain points that [product name] solves for. (Gemini in Docs)",
      "promptZh": "Generate an elevator pitch for [product name] and include key benefits, competitive points of differentiation, and the pain points that [product name] solves for. (Gemini in Docs)",
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
      "titleZh": "Prepare for new customer calls",
      "summary": "Page 49",
      "summaryZh": "第 49 頁",
      "prompt": "I have an upcoming call with a prospect. [Use case] is a new use case for me, and I need help preparing for the call. List the most likely objections [customer] might have for me during a sales call, with suggestions on how to respond to them. I work in [industry], and I am trying to sell [product]. Also provide ideas on how to handle objections and suggest ways to respond. (Gemini Advanced)",
      "promptZh": "I have an upcoming call with a prospect. [Use case] is a new use case for me, and I need help preparing for the call. List the most likely objections [customer] might have for me during a sales call, with suggestions on how to respond to them. I work in [industry], and I am trying to sell [product]. Also provide ideas on how to handle objections and suggest ways to respond. (Gemini Advanced)",
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
      "titleZh": "Nurture relationships, personalized outreach, and thought leadership",
      "summary": "Page 49",
      "summaryZh": "第 49 頁",
      "prompt": "Draft an outreach email template to industry influencers. Express gratitude that we connected at [event], and propose collaboration opportunities such as [opportunities]. (Gemini in Docs)",
      "promptZh": "Draft an outreach email template to industry influencers. Express gratitude that we connected at [event], and propose collaboration opportunities such as [opportunities]. (Gemini in Docs)",
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
      "titleZh": "Nurture relationships, personalized outreach, and thought leadership",
      "summary": "Page 49",
      "summaryZh": "第 49 頁",
      "prompt": "Summarize this blog content in bullet points and generate three ideas for follow-up questions I can ask my customers about their thoughts. (Gemini in Docs)",
      "promptZh": "Summarize this blog content in bullet points and generate three ideas for follow-up questions I can ask my customers about their thoughts. (Gemini in Docs)",
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
      "titleZh": "Generate personalized customer appreciation materials",
      "summary": "Page 49",
      "summaryZh": "第 49 頁",
      "prompt": "Generate a personalized email for [customer] on their one-month anniversary working with [company]. Thank them for being a customer. Ask them if they have any questions. Include information about [other product]. (Gemini in Gmail)",
      "promptZh": "Generate a personalized email for [customer] on their one-month anniversary working with [company]. Thank them for being a customer. Ask them if they have any questions. Include information about [other product]. (Gemini in Gmail)",
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
      "titleZh": "Generate personalized customer appreciation materials",
      "summary": "Page 49",
      "summaryZh": "第 49 頁",
      "prompt": "Give me a list of gifts to send new clients that are under $200 and can be shipped to offices. (Gemini in Sheets)",
      "promptZh": "Give me a list of gifts to send new clients that are under $200 and can be shipped to offices. (Gemini in Sheets)",
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
      "titleZh": "Create pricing comparison",
      "summary": "Page 50",
      "summaryZh": "第 50 頁",
      "prompt": "I’m a business owner and I’m trying to determine the right cleaning vendor using @[Company A Proposal] and @[Company B Proposal]. I need someone to come twice a week, and I want them to vacuum, mop, dust, clean the windows, and wipe down all surfaces. If available, include information about the booking and cancellation policy. Create a comparison table between the two companies’ proposals. (Gemini in Docs)",
      "promptZh": "I’m a business owner and I’m trying to determine the right cleaning vendor using @[Company A Proposal] and @[Company B Proposal]. I need someone to come twice a week, and I want them to vacuum, mop, dust, clean the windows, and wipe down all surfaces. If available, include information about the booking and cancellation policy. Create a comparison table between the two companies’ proposals. (Gemini in Docs)",
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
      "titleZh": "Create pricing comparison",
      "summary": "Page 51",
      "summaryZh": "第 51 頁",
      "prompt": "Write an email to Company A thanking them for their time and their proposal. Ask for a few times to meet to schedule cleanings. (Gemini in Gmail)",
      "promptZh": "Write an email to Company A thanking them for their time and their proposal. Ask for a few times to meet to schedule cleanings. (Gemini in Gmail)",
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
      "titleZh": "Brainstorm and generate marketing content",
      "summary": "Page 51",
      "summaryZh": "第 51 頁",
      "prompt": "I own a [type of business] in [location]. I am working on marketing materials to advertise [event/sale] on [services]. I want to focus on using this sale to bring in repeat customers who haven’t purchased in a while and new customers alike. I want the social posts to feel [inspirational] and [fun]. Suggest some social copy I can use on [social platform] with relevant hashtags, suggested newsletter copy, and two email drafts (one for existing customers and one for new customers). (Gemini Advanced)",
      "promptZh": "I own a [type of business] in [location]. I am working on marketing materials to advertise [event/sale] on [services]. I want to focus on using this sale to bring in repeat customers who haven’t purchased in a while and new customers alike. I want the social posts to feel [inspirational] and [fun]. Suggest some social copy I can use on [social platform] with relevant hashtags, suggested newsletter copy, and two email drafts (one for existing customers and one for new customers). (Gemini Advanced)",
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
      "titleZh": "Brainstorm and generate marketing content",
      "summary": "Page 51",
      "summaryZh": "第 51 頁",
      "prompt": "What are some other effective [event/sale] tactics I can use to bring in new customers? I don’t always want to offer discounts. Are there other incentives I am overlooking? (Gemini Advanced)",
      "promptZh": "What are some other effective [event/sale] tactics I can use to bring in new customers? I don’t always want to offer discounts. Are there other incentives I am overlooking? (Gemini Advanced)",
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
      "titleZh": "Develop a competitive analysis",
      "summary": "Page 52",
      "summaryZh": "第 52 頁",
      "prompt": "I am an online business owner. I am considering opening a brick-and-mortar store. Conduct an analysis into the competitive landscape focusing on [focus area]. Provide the strengths and weaknesses of [key competitors] in this area, including their specific strategies, tactics, and results. Identify actionable insights and recommendations for how [my company] can improve its approach and gain a competitive advantage. (Gemini Advanced)",
      "promptZh": "I am an online business owner. I am considering opening a brick-and-mortar store. Conduct an analysis into the competitive landscape focusing on [focus area]. Provide the strengths and weaknesses of [key competitors] in this area, including their specific strategies, tactics, and results. Identify actionable insights and recommendations for how [my company] can improve its approach and gain a competitive advantage. (Gemini Advanced)",
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
      "titleZh": "Develop a competitive analysis",
      "summary": "Page 52",
      "summaryZh": "第 52 頁",
      "prompt": "Generate a competitive analysis of [company] versus [competitor] within the current market landscape. (Gemini Advanced)",
      "promptZh": "Generate a competitive analysis of [company] versus [competitor] within the current market landscape. (Gemini Advanced)",
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
      "titleZh": "Conduct fundraising and investor relations",
      "summary": "Page 52",
      "summaryZh": "第 52 頁",
      "prompt": "Draft a personalized email template to potential investors, highlighting [company’s] unique value proposition and recent progress on [initiatives]. Request a time to meet to discuss opportunities to collaborate in the next month. (Gemini in Docs)",
      "promptZh": "Draft a personalized email template to potential investors, highlighting [company’s] unique value proposition and recent progress on [initiatives]. Request a time to meet to discuss opportunities to collaborate in the next month. (Gemini in Docs)",
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
      "titleZh": "Conduct fundraising and investor relations",
      "summary": "Page 52",
      "summaryZh": "第 52 頁",
      "prompt": "Draft an email thanking a potential investor for the call and ask for time to schedule a follow-up meeting to address [questions and concerns]. (Gemini in Docs)",
      "promptZh": "Draft an email thanking a potential investor for the call and ask for time to schedule a follow-up meeting to address [questions and concerns]. (Gemini in Docs)",
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
      "titleZh": "Manage time off policies and tracking",
      "summary": "Page 53",
      "summaryZh": "第 53 頁",
      "prompt": "Generate a step-by-step checklist summarizing the company’s time-off request policy. Ensure it is written in plain language and easy for employees to understand. (Gemini in Docs)",
      "promptZh": "Generate a step-by-step checklist summarizing the company’s time-off request policy. Ensure it is written in plain language and easy for employees to understand. (Gemini in Docs)",
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
      "titleZh": "Manage time off policies and tracking",
      "summary": "Page 53",
      "summaryZh": "第 53 頁",
      "prompt": "Create a table that tracks weekly staffing. Create columns for date, name, shift (AM or PM), and notes. (Gemini in Sheets)",
      "promptZh": "Create a table that tracks weekly staffing. Create columns for date, name, shift (AM or PM), and notes. (Gemini in Sheets)",
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
      "titleZh": "Brainstorm business and strategy",
      "summary": "Page 54",
      "summaryZh": "第 54 頁",
      "prompt": "I am a founder at a startup focused on [industry]. I was brainstorming with colleagues about [topic], and we took notes on this whiteboard. Turn these notes into text. (Gemini Advanced)",
      "promptZh": "I am a founder at a startup focused on [industry]. I was brainstorming with colleagues about [topic], and we took notes on this whiteboard. Turn these notes into text. (Gemini Advanced)",
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
      "titleZh": "Brainstorm business and strategy",
      "summary": "Page 55",
      "summaryZh": "第 55 頁",
      "prompt": "Suggest follow-up items we could discuss for our [topic of brainstorm session]. What was not covered that could have been, and what are we potentially missing? (Gemini Advanced)",
      "promptZh": "Suggest follow-up items we could discuss for our [topic of brainstorm session]. What was not covered that could have been, and what are we potentially missing? (Gemini Advanced)",
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
      "titleZh": "Brainstorm business and strategy",
      "summary": "Page 55",
      "summaryZh": "第 55 頁",
      "prompt": "Use @[Brainstorm Notes and Ideas 9/1/24] to write a meeting recap to the team using an upbeat and friendly tone. Share some of the ideas I have for our next meeting to discuss [topic]. (Gemini in Gmail)",
      "promptZh": "Use @[Brainstorm Notes and Ideas 9/1/24] to write a meeting recap to the team using an upbeat and friendly tone. Share some of the ideas I have for our next meeting to discuss [topic]. (Gemini in Gmail)",
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
      "titleZh": "Create an elevator pitch (speech to text)",
      "summary": "Page 55",
      "summaryZh": "第 55 頁",
      "prompt": "I’m the founder of [startup] in [industry], and I need help creating a short elevator pitch for [company and product description]. I need to make the pitch relevant to [audience] and I want to especially highlight [key features of product] because I want them to [take this action]. Include a compelling hook and anticipate questions an investor might have. Make the tone professional but relaxed and confident. (Gemini Advanced)",
      "promptZh": "I’m the founder of [startup] in [industry], and I need help creating a short elevator pitch for [company and product description]. I need to make the pitch relevant to [audience] and I want to especially highlight [key features of product] because I want them to [take this action]. Include a compelling hook and anticipate questions an investor might have. Make the tone professional but relaxed and confident. (Gemini Advanced)",
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
      "titleZh": "Develop your personal brand",
      "summary": "Page 55",
      "summaryZh": "第 55 頁",
      "prompt": "Help me grow my personal brand. I am the founder of [a startup] in [industry]. I am passionate about [topics]. I want to inspire [audience] with business tips and lessons I’ve learned from starting my own company. My goals are to build a following so that I can [generate more media] for the business. What are some ideas you have for how to accomplish this? (Gemini Advanced)",
      "promptZh": "Help me grow my personal brand. I am the founder of [a startup] in [industry]. I am passionate about [topics]. I want to inspire [audience] with business tips and lessons I’ve learned from starting my own company. My goals are to build a following so that I can [generate more media] for the business. What are some ideas you have for how to accomplish this? (Gemini Advanced)",
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
      "titleZh": "Communicate and negotiate with vendors",
      "summary": "Page 56",
      "summaryZh": "第 56 頁",
      "prompt": "I need to make a vendor decision for packaging manufacturing. Create a table that compares the two proposals I’ve received @[Company A’s Proposal] and @[Company B’s Proposal]. (Gemini in Docs)",
      "promptZh": "I need to make a vendor decision for packaging manufacturing. Create a table that compares the two proposals I’ve received @[Company A’s Proposal] and @[Company B’s Proposal]. (Gemini in Docs)",
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
      "titleZh": "Communicate and negotiate with vendors",
      "summary": "Page 56",
      "summaryZh": "第 56 頁",
      "prompt": "Create an email draft to [selected vendor] telling them that I’ve decided to move forward with them as the [packaging] vendor, but I would like to negotiate [a bulk pricing discount]. Use a collaborative tone. (Gemini in Gmail)",
      "promptZh": "Create an email draft to [selected vendor] telling them that I’ve decided to move forward with them as the [packaging] vendor, but I would like to negotiate [a bulk pricing discount]. Use a collaborative tone. (Gemini in Gmail)",
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
      "titleZh": "Plan and track budgets",
      "summary": "Page 56",
      "summaryZh": "第 56 頁",
      "prompt": "Using the attached spreadsheet, identify trends and patterns in our expenses by category over the last three years. Identify areas where costs have increased significantly and investigate potential reasons. (Gemini Advanced)",
      "promptZh": "Using the attached spreadsheet, identify trends and patterns in our expenses by category over the last three years. Identify areas where costs have increased significantly and investigate potential reasons. (Gemini Advanced)",
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
      "titleZh": "Develop a product launch plan",
      "summary": "Page 57",
      "summaryZh": "第 57 頁",
      "prompt": "I am head of product at [startup] in [industry] industry. We are building a product launch plan for [product]. I want to brainstorm a few different scenarios. We are considering offering the [product] at two different price points [A and B] and we are considering launching in [December or January]. Provide pros and cons of each scenario and suggest different ideas we may not have considered. (Gemini Advanced)",
      "promptZh": "I am head of product at [startup] in [industry] industry. We are building a product launch plan for [product]. I want to brainstorm a few different scenarios. We are considering offering the [product] at two different price points [A and B] and we are considering launching in [December or January]. Provide pros and cons of each scenario and suggest different ideas we may not have considered. (Gemini Advanced)",
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
      "titleZh": "Develop a product launch plan",
      "summary": "Page 57",
      "summaryZh": "第 57 頁",
      "prompt": "How do these prices compare to [competitor products’] prices? Detail what pricing strategies [competitors] use for [products], and list any common tactics they use (such as free trials, discounts, etc.). Summarize how they position the product to [audience]. Cite your sources. (Gemini Advanced)",
      "promptZh": "How do these prices compare to [competitor products’] prices? Detail what pricing strategies [competitors] use for [products], and list any common tactics they use (such as free trials, discounts, etc.). Summarize how they position the product to [audience]. Cite your sources. (Gemini Advanced)",
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
      "titleZh": "Develop product strategy and roadmap",
      "summary": "Page 57",
      "summaryZh": "第 57 頁",
      "prompt": "Help me clean my [user feedback] survey spreadsheet. Specifically, fill any blank values in the name column with “Anonymous,” then if the [recommend] column shows [Yes], replace that with [Y]. Finally, remove any rows where the satisfaction column is blank. Please generate a new file for me with my cleaned data. (Gemini Advanced)",
      "promptZh": "Help me clean my [user feedback] survey spreadsheet. Specifically, fill any blank values in the name column with “Anonymous,” then if the [recommend] column shows [Yes], replace that with [Y]. Finally, remove any rows where the satisfaction column is blank. Please generate a new file for me with my cleaned data. (Gemini Advanced)",
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
      "titleZh": "Develop product strategy and roadmap",
      "summary": "Page 57",
      "summaryZh": "第 57 頁",
      "prompt": "I am head of product at [startup] in the [industry] industry. We are adding [features] to our [product] to address recurring user feedback, including [feedback trends]. Build a high-level roadmap that will keep us on track for a Q4 delivery. Put it in a table format. (Gemini Advanced)",
      "promptZh": "I am head of product at [startup] in the [industry] industry. We are adding [features] to our [product] to address recurring user feedback, including [feedback trends]. Build a high-level roadmap that will keep us on track for a Q4 delivery. Put it in a table format. (Gemini Advanced)",
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
