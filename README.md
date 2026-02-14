# ET-hackathon

This repository contains the code for a code reviewer a tool designed to help you with your coding journey and improve effectively.

# How it is Different:
    - Our code reviewer not only identifies bugs but also future scalibility issues as well as technical debt.
    - It classifies this problem into Easy, Medium or Hard to fix categories.
    - Also another future feature is suggesting the fix to these issues in terms of code and not only explanation.

# Tech Stack Used: 
    - HTML
    - Tailwind CSS
    - React.js
    - Node.js
    - Express.js
    - Other utilities have also been used such as lucide-react, multer, etc.

# File Tree:

```
ET-hackathon/
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── back/
│   ├── package.json
│   ├── package-lock.json
│   ├── analyze.js
│   ├── index.js
│   ├── routes/
│   │   ├── file.js
│   │   └── repo.js
│   └── url_access/
│       ├── file_access.js
│       ├── file_list.js
│       └── urlParser.js
├── extra/
│   ├── analyze_old.jsx
│   ├── Home.jsx
│   └── protype1.jsx
└── front/
    ├── .gitignore
    ├── README.md
    ├── package.json
    ├── package-lock.json
    ├── eslint.config.js
    ├── index.html
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── assets/
        │   └── react.svg
        ├── utility/
        │   ├── cn.js
        │   └── HomeData.js
        └── components/
            ├── ui/
            │   ├── Button.jsx
            │   ├── Card.jsx
            │   ├── Select.jsx
            │   └── Textarea.jsx
            ├── Home/
            │   ├── Hero.jsx
            │   ├── Home.jsx
            │   └── Editor/
            │       ├── CodeBlock.jsx
            │       ├── CodeLine.jsx
            │       └── EditorPreview.jsx
            │   └── Features/
            │       ├── FeatureCard.jsx
            │       └── Features.jsx
            └── Analysis/
                ├── analysis.jsx
                ├── layout/
                │   ├── Hero.jsx
                │   ├── LayouHeader.jsx
                │   └── PageWrapper.jsx
                └── Features/
                    ├── CodeInputPanel.jsx
                    ├── FeaturesSection.jsx
                    └── ReviewPanel.jsx
```

# To View project: 
    - for frontend, run following commands: 
        cd front
        npm i
        npm run dev 
    - for backend, run following commands:
        cd back 
        npm i
        npx nodemon index.js

    To use the reviewer, run both the servers simultaneously and then open frontend in browser.

# Contributing Guidelines:
    - Only contribute to branch - 'frontend'. Do not directly commit to main.
    - Try to test code for bugs before committing.
    - Avoid making unnecessary commits.
    - Refrain from making new branches until and unless necessary.