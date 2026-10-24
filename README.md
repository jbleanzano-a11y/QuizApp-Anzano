# QUIZORA — Premium Interactive Learning Experience
### Aurora Learning Studio | React + TypeScript + Vite

A modern, highly interactive, and professionally animated **Frontend Development Quiz Application** built strictly adhering to all academic requirements from the Quiz App Activities specification, elevated into a digital learning product.

---

## 🌟 Live Development Server
- **Local URL:** [http://localhost:5173](http://localhost:5173)
- **Port:** `5173`

---

## 🎨 Design Theme: Aurora Learning Studio

The interface follows a midnight-and-aurora visual language:

- **Main Background:** `#080D1C`
- **Secondary Background:** `#111A30`
- **Card Surface:** `#17223B`
- **Primary Accent:** `#8B5CF6` (Vibrant Purple)
- **Secondary Accent:** `#38BDF8` (Sky Cyan)
- **Highlight Accent:** `#A78BFA` (Soft Lilac)
- **Main Text:** `#F8FAFC`
- **Secondary Text:** `#A9B4CC`
- **Border Color:** `#293650`
- **Correct Feedback:** `#22C55E` (Emerald Green)
- **Incorrect Feedback:** `#EF4444` (Rose Red)
- **Warning / Streak:** `#F59E0B` (Amber Flame)

### Typography
- **Space Grotesk:** Hero headings, Question headings, Score numbers, Metrics
- **Plus Jakarta Sans:** Navigation, Answer choices, Buttons, Body text
- **DM Sans:** Secondary badges, Progress indicators, Supporting info
- **JetBrains Mono:** Code snippets and technical preview blocks

---

## 🚀 Key Features

### 1. Interactive Split-Screen Home Page
- **Hero Title:** *"Think Fast. Learn More. Challenge Yourself."*
- **Description:** *"Put your knowledge to the test with an interactive quiz experience designed to make learning engaging, rewarding, and fun."*
- **Quiz Info Badges:** 10 Questions, Multiple Choice, Instant Feedback, Final Score.
- **Visual Composition:** Floating mockup card with live status, interactive satellite badges (Instant Insights, Accuracy Rating), glowing background orbs.
- **Start Quiz Button:** Smooth entrance with hover elevation and seamless transition to the quiz.

### 2. High-Tech Quiz Experience
- **10 Curated Frontend Questions:** Spans HTML5 semantics, modern CSS layout (Grid/Flexbox), JavaScript closures, React Virtual DOM & reconciliation, JSX rules, Component immutability, useEffect hooks & dependencies, State immutability, Responsive viewport meta tag, and the Critical Rendering Path.
- **Interactive Answer Selection:** 4 cards (A, B, C, D) with hover effects, selected state indicators, and keyboard accessibility (`1-4`, `A-D`, `Enter`).
- **Confirmation & Instant Feedback:** Validates answers, locks changes, displays positive reinforcement or polite corrective explanation, and highlights correct options.
- **Streak & Live Scoring:** Prevents duplicate score increments and rewards consecutive correct answers.

### 3. Animated Progress Indicator
- **Formula:** `Progress = (Completed Questions / Total Questions) × 100`
- Gradient track with real-time percentage badge and smooth transition.

### 4. Comprehensive Result Dashboard
- **7 Mandatory Items from PDF:**
  1. Total Questions (10)
  2. Correct Answers
  3. Incorrect Answers
  4. Final Score (e.g. `8 / 10`)
  5. Percentage (e.g. `80%`)
  6. **Retake Quiz Button** (completely resets state, scores, and timer)
  7. **Return Home Button** (navigates back to Home page)
- **Visual Score Ring (`ScoreCircle`):** Dual-gradient circular SVG progress arc with animated percentage counter.
- **Performance Evaluation Tiers:**
  - `90–100%`: Outstanding Performance
  - `70–89%`: Great Job
  - `50–69%`: Good Effort
  - `< 50%`: Keep Practicing
- **Question Review Accordion:** Complete review of all 10 questions showing user's answer, correct answer, and detailed explanation.

### 5. Client-Side Routing (React Router DOM)
- `/`: Home Page
- `/quiz`: Quiz Page
- `/results`: Result Page (with uninitialized route guard)
- `/*`: Custom 404 Not Found Page

---

## 📂 Project Architecture

```text
quizapp/
├── public/
│   ├── favicon.svg              # Custom Aurora SVG Favicon
│   └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Sticky header with live quiz indicators
│   │   │   └── AnimatedBackground.tsx # Ambient moving Aurora gradient orbs
│   │   ├── quiz/
│   │   │   ├── QuestionCard.tsx       # Centered question card with keyboard shortcuts
│   │   │   ├── AnswerOption.tsx       # Reusable interactive answer choice (A, B, C, D)
│   │   │   ├── QuizHeader.tsx         # Question counter, score pill, streak, progress
│   │   │   ├── ProgressBar.tsx        # Animated gradient progress bar
│   │   │   └── FeedbackMessage.tsx    # Instant success/error feedback banner
│   │   ├── results/
│   │   │   ├── ResultCard.tsx         # Summary dashboard with review drawer
│   │   │   ├── ScoreCircle.tsx        # Circular SVG animated score ring
│   │   │   └── StatCard.tsx           # Stat card for Total, Correct, Incorrect, Time
│   │   └── ui/
│   │       ├── QuizButton.tsx         # Reusable animated button with multiple variants
│   │       └── PageTransition.tsx     # Route transition wrapper
│   ├── context/
│   │   └── QuizContext.tsx            # Complete React Context state management
│   ├── data/
│   │   └── questions.ts               # 10 Frontend Development questions
│   ├── pages/
│   │   ├── Home.tsx                   # Hero page
│   │   ├── Quiz.tsx                   # Active quiz page
│   │   ├── Results.tsx                # Results page
│   │   └── NotFound.tsx               # 404 page
│   ├── styles/
│   │   ├── global.css                 # CSS variables, typography, glassmorphism
│   │   ├── animations.css             # Keyframe animations and reduced motion
│   │   └── responsive.css             # Tablet & mobile media queries
│   ├── types/
│   │   └── quiz.ts                    # TypeScript interfaces
│   ├── utils/
│   │   └── scoring.ts                 # Scoring formulas and tier calculations
│   ├── App.tsx                        # Router configuration
│   └── main.tsx                       # Entry point
├── index.html                         # Google Fonts & metadata
├── package.json                       # Dependencies & scripts
├── tsconfig.json                      # Strict TypeScript configuration
└── vite.config.ts                     # Port 5173 configuration
```

---

## 🛠️ Installation & Execution

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will be live at `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
```
Generates an optimized production bundle in the `dist` directory.
