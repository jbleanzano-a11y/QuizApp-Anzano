import type { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    category: 'HTML & Semantic Web',
    question: 'Which HTML5 semantic element is best suited for wrapping self-contained, independently distributable content such as a blog post or news article?',
    options: [
      '<section>',
      '<article>',
      '<aside>',
      '<main>'
    ],
    correctAnswer: 1,
    explanation: 'The <article> element represents a self-contained composition in a document that is intended to be independently distributable or reusable, such as a forum post or blog entry.',
    codeSnippet: `<article class="post-preview">
  <h2>Understanding Semantic HTML</h2>
  <p>Semantic tags improve accessibility & SEO.</p>
</article>`
  },
  {
    id: 2,
    category: 'CSS Modern Layouts',
    question: 'In modern CSS, which property and value combination creates a two-dimensional grid container where children can align across both columns and rows?',
    options: [
      'display: flex',
      'display: inline-block',
      'display: grid',
      'display: flow-root'
    ],
    correctAnswer: 2,
    explanation: 'CSS Grid (`display: grid`) is a two-dimensional layout system designed for managing both rows and columns simultaneously, unlike Flexbox which is primarily one-dimensional.',
    codeSnippet: `.quiz-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}`
  },
  {
    id: 3,
    category: 'JavaScript Fundamentals',
    question: 'What is a JavaScript closure and how does it function when a function is returned from another function?',
    options: [
      'A method to immediately terminate the execution of the call stack',
      'A function bundled together with references to its surrounding lexical environment',
      'A global variable declaration that prevents memory leaks',
      'A syntax error caused by unclosed curly braces in a callback'
    ],
    correctAnswer: 1,
    explanation: 'A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In JavaScript, closures give an inner function access to an outer function’s scope even after the outer function has executed.',
    codeSnippet: `function createCounter() {
  let count = 0;
  return () => ++count; // Accesses lexical scope
}
const counter = createCounter();`
  },
  {
    id: 4,
    category: 'React Architecture',
    question: 'How does React optimize UI updates using the Virtual DOM and its Reconciliation algorithm?',
    options: [
      'By replacing the entire browser DOM tree on every state change',
      'By converting all JSX into native machine code before execution',
      'By computing a lightweight memory diff and applying only the minimal necessary DOM mutations',
      'By delegating all UI rendering directly to GPU WebGL shaders'
    ],
    correctAnswer: 2,
    explanation: 'React maintains a Virtual DOM in memory. When state updates, it generates a new Virtual DOM tree, runs the reconciliation (diffing) algorithm against the previous tree, and batches minimal mutations to the real browser DOM.',
    codeSnippet: `// React Reconciliation in action:
// 1. Trigger State Update
// 2. Render Virtual DOM Tree
// 3. Diff with Previous Virtual DOM
// 4. Batch Commit to Browser DOM`
  },
  {
    id: 5,
    category: 'JSX Syntax & Rules',
    question: 'Why must multiple JSX elements returned from a React component be wrapped in a single root element or Fragment (<>...</>)?',
    options: [
      'Browsers can only render one <div> element per webpage',
      'JSX transpiles to React.createElement function calls which can return only one value',
      'CSS specificity rules require every HTML tag to have an ancestor parent',
      'JavaScript arrays cannot contain string literals without wrapping'
    ],
    correctAnswer: 1,
    explanation: 'Under the hood, JSX compiles into JavaScript function calls (`React.createElement` or `jsx` runtime). A JavaScript function can only return a single expression value, necessitating a single parent container or React Fragment.',
    codeSnippet: `// JSX:
return (
  <>
    <Header />
    <MainContent />
  </>
);`
  },
  {
    id: 6,
    category: 'React Components',
    question: 'In React, what fundamental rule governs "props" passed down from a parent component to a child component?',
    options: [
      'Props can be directly mutated by the child component at any time',
      'Props are read-only (immutable) and should never be modified by the child',
      'Props can only contain primitive data types like strings and numbers',
      'Props must always be synchronized through local storage'
    ],
    correctAnswer: 1,
    explanation: 'React embraces pure functions and unidirectional data flow. All React components must act like pure functions with respect to their props: props are strictly read-only and immutable from the child’s perspective.',
    codeSnippet: `interface CardProps {
  readonly title: string;
  readonly score: number;
}
function Card({ title, score }: CardProps) {
  // Read props, do NOT mutate props!
  return <div>{title}: {score}</div>;
}`
  },
  {
    id: 7,
    category: 'React Hooks',
    question: 'What is the purpose of the dependency array in React’s useEffect hook?',
    options: [
      'It lists the external CSS libraries imported into the component',
      'It controls which state or prop changes will re-trigger the effect callback',
      'It defines the order in which child components will render',
      'It prevents any garbage collection during the component lifecycle'
    ],
    correctAnswer: 1,
    explanation: 'The dependency array tells React to re-run the effect function only if one of the specified dependency values has changed since the previous render. An empty array `[]` ensures the effect runs only once after the initial mount.',
    codeSnippet: `useEffect(() => {
  document.title = \`Question \${currentId} - Quizora\`;
}, [currentId]); // Runs only when currentId changes`
  },
  {
    id: 8,
    category: 'State Management',
    question: 'Why is it crucial to treat React state immutably when updating objects or arrays (e.g., using the spread operator)?',
    options: [
      'Direct mutations prevent React from detecting state changes via reference equality checks',
      'JavaScript immediately throws a fatal runtime exception on object mutations',
      'Mutating state deletes the component from the browser history stack',
      'Immutability is purely stylistic and has no effect on component re-rendering'
    ],
    correctAnswer: 0,
    explanation: 'React compares previous and new state objects using shallow reference equality (`Object.is`). If you mutate state directly, the memory reference remains identical, so React assumes nothing changed and skips re-rendering the UI.',
    codeSnippet: `// Correct immutable update:
setAnswers(prev => [...prev, newAnswer]);

// INCORRECT mutation:
// prev.push(newAnswer); setAnswers(prev);`
  },
  {
    id: 9,
    category: 'Responsive Web Design',
    question: 'What is the primary role of the `<meta name="viewport" content="width=device-width, initial-scale=1.0">` tag in responsive web development?',
    options: [
      'It forces mobile browsers to render in desktop landscape resolution',
      'It sets the viewport width to match the screen width of the device and prevents auto-zooming out',
      'It disables CSS media queries for devices with retina displays',
      'It accelerates internet download speeds on cellular networks'
    ],
    correctAnswer: 1,
    explanation: 'Without this meta tag, mobile browsers default to rendering pages at an expanded desktop viewport (often 980px) and scale it down. The tag instructs the browser to set the viewport width to the device’s physical screen width at a 1:1 scale.',
    codeSnippet: `<meta 
  name="viewport" 
  content="width=device-width, initial-scale=1.0" 
/>`
  },
  {
    id: 10,
    category: 'Web Performance & Standards',
    question: 'During browser page rendering, what is the Critical Rendering Path sequence required to display pixels on screen?',
    options: [
      'DOM Tree -> CSSOM Tree -> Render Tree -> Layout -> Paint',
      'Paint -> Layout -> Render Tree -> CSSOM -> DOM',
      'HTML Parse -> Service Worker -> WebAssembly -> Paint',
      'JavaScript Engine -> Database Query -> Cache -> Canvas'
    ],
    correctAnswer: 0,
    explanation: 'The Critical Rendering Path processes the HTML to build the DOM, parses CSS to construct the CSSOM, combines them into the Render Tree, computes physical coordinates during Layout (reflow), and draws pixels during Paint.',
    codeSnippet: `// Critical Rendering Path Sequence:
// 1. Construct DOM (Document Object Model)
// 2. Construct CSSOM (CSS Object Model)
// 3. Generate Render Tree
// 4. Compute Layout (Geometry)
// 5. Paint Pixels to Frame`
  }
];
