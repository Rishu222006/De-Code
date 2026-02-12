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
├── back/                                   # Backend API server (Node.js/Express)
│   ├── analyze.js                          # Core analysis logic for code review
│   ├── index.js                            # Express server entry point
│   ├── package.json                        # Backend dependencies
│   ├── routes/                             # API route handlers
│   │   ├── file.js                         # File upload and processing routes
│   │   └── repo.js                         # Repository analysis routes
│   └── url_access/                         # URL and file access utilities
│       ├── file_access.js                  # File reading/access utilities
│       ├── file_list.js                    # File listing and traversal
│       └── urlParser.js                    # URL parsing for repo links
├── front/                                  # Frontend React/Vite application
│   ├── index.html                          # HTML entry point
│   ├── vite.config.js                      # Vite build configuration
│   ├── eslint.config.js                    # ESLint rules configuration
│   ├── package.json                        # Frontend dependencies
│   ├── public/                             # Static assets
│   │   └── vite.svg                        # Vite logo asset
│   └── src/                                # React source code
│       ├── main.jsx                        # React DOM render entry
│       ├── App.jsx                         # Root App component
│       ├── index.css                       # Global styles
│       ├── assets/                         # Media assets (images, SVGs)
│       ├── components/                     # Reusable React components
│       │   ├── Features/                   # Feature-specific components
│       │   │   ├── CodeInputPanel.jsx      # Code input interface
│       │   │   ├── FeaturesSextion.jsx     # Features showcase
│       │   │   └── ReviewPanel.jsx         # Review results display
│       │   ├── layout/                     # Layout wrapper components
│       │   │   ├── Hero.jsx                # Hero section
│       │   │   ├── LayouHeader.jsx         # Header navigation
│       │   │   └── PageWrapper.jsx         # Page layout wrapper
│       │   ├── pages/                      # Full page components
│       │   │   ├── landing_page.jsx        # Home/landing page
│       │   │   └── analysis.jsx            # Analysis results page
│       │   └── ui/                         # Reusable UI components
│       │       ├── Button.jsx              # Button component
│       │       ├── Card.jsx                # Card/container component
│       │       ├── Select.jsx              # Dropdown select component
│       │       └── Textarea.jsx            # Text input component
│       └── utility/                        # Helper utilities
│           └── cn.js                       # Class name utility
├── extra/                                  # Deprecated/experimental files
│   ├── analyze_old.jsx                     # Old analysis component
│   └── protype1.jsx                        # Old prototype component
├── package.json                            # Root workspace configuration
├── README.md                               # Project documentation
└── .gitignore                              # Git ignore rules
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