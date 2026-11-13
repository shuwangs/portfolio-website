---
title: "React Fundamentals"
slug: react-fundamentals-questions
date: 2026-11-12
tags: [React, Interview, frontend]
description: "Fundamentasl of REACT for interview preparation"
category: "Software Engineering/interview"
cover_image_url: null

---
## 🐟 A Little React Joke Before We Dive In
> 🐟 Why fish doesn't like React?
> 
> Because it has too many hooks!🪝

## Part 1: Basics
### 1. What is React?
React is a JavaScript library for building user interfaces with reusable components. A component describes a portion of the UI based on its props and state. React is used for web applications, and related technologies such as React Native can be used for mobile apps.

### 2. What are React's main features?
> Component-based UI composition.
> Declarative rendering.
> One-way data flow through props.
> State-driven UI updates.
> Hooks for state and lifecycle-related behavior.
> Support for server rendering through compatible framework

- What is Declarative render?
  Declarative rendering means describing what the UI should look like based on the current state, rather than manually specifying how to update the DOM. React automatically updates the UI when the state changes.

  > if a == b render <div> a fancy button </div>

### 3. What are the main advantages of React?  
React promotes reusable components, consistent UI state, and maintainable application structure. Its ecosystem supports routing, testing, accessibility, and data fetching. Performance depends on the application's design; React does not guarantee that every app will be fast.

### 4. What are React's limitations?

React mainly addresses the UI layer. 
For routing, server-side concerns, data fetching, and application architecture, teams often use additional libraries or frameworks. 
React also requires care around state ownership, effects, rendering performance, and accessibility.

### 5. What is JSX?

JSX is a JavaScript syntax extension that allows HTML-like markup inside JavaScript. Build tools transform JSX into JavaScript that creates React elements.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```
**Key point:** JSX is syntax, not HTML or a separate programming language.


### 6. Why can't a browser execute JSX directly?

Browsers execute JavaScript, not JSX syntax. Tools such as Babel or the JSX transform in Vite convert JSX into JavaScript before it runs in the browser.


### 7. What modern JavaScript features do you use with React?

Common features include `import` / `export`, arrow functions, destructuring, template literals, spread syntax, promises, and `async` / `await`.

```jsx
import { useState } from 'react';

export default function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```
### 8. How is React different from Angular?

React is a UI library that can be combined with other tools. Angular is a more comprehensive framework with built-in conventions and features for application development. React typically uses one-way props and explicit state changes; Angular supports additional mechanisms such as template binding and dependency injection. Both can support client-side and server-side rendering.


## Part 2 — Components, Props, and State

### 9. What does it mean that React is component-based?

A React interface is composed of smaller components that can be reused and tested independently. For example, a diary app might have `DiaryList`, `DiaryCard`, and `DiaryEditor` components.



### 10. How do you nest components?

Render a child component inside a parent component's JSX.

```jsx
function DiaryPage() {
  return (
    <main>
      <Header />
      <DiaryList />
    </main>
  );
}
```

### 11. How do you organize and modularize React code?

Keep related functionality in files or folders and use ES module `import` / `export`. Extract reusable components and custom Hooks when they have a clear responsibility; avoid splitting a simple component into many files without a reason.


### 12. What are props?

Props are read-only inputs provided to a component by its parent. They let parents customize children without requiring the children to mutate parent data. A child can communicate upward by calling a callback function passed as a prop.

### 13. What is state in React?

State is data a component remembers between renders. Updating state tells React that the UI may need to change.

```jsx
const [isEditing, setIsEditing] = useState(false);
```

**Exaple in tails-tales** "I use state for information that changes through user interactions, such as the current draft, loading status, or whether an editor is open."

### 14. What is the difference between props and state?

| Props                                                | State                                                             |
| ---------------------------------------------------- | ----------------------------------------------------------------- |
| Received from a parent                               | Owned by a component (or shared through a state mechanism)        |
| **Immutable**(read-only; the child cannot change it) | **Mutable** through React state setters or other state mechanisms |
| Used to configure a component                        | Used for data that changes over time                              |
| Re-renders when the parent passes new prop value     | Re-renders automatically when state is updated                    |

Neither props nor state should be mutated directly.


### 15. How do you update component state?

Use a state setter such as `setCount`, rather than assigning to the variable directly. Use a functional update when the next state depends on the previous state.

```jsx
setCount(previous => previous + 1);
```
For objects and arrays, create updated copies rather than mutating the existing state.


### 16. How are arrow functions useful in React?  *(Original Q18)*

Arrow functions provide concise callback syntax and capture the lexical `this` value. 
They are often used in event handlers and array transformations.

```jsx
<button onClick={() => setIsEditing(true)}>Edit</button>
```

> ***key point*** 在 JavaScript 中，普通函数的 this 取决于它如何被调用，而箭头函数的 this 来自外层作用域。
> A regular function's this depends on how the function is called, while an arrow function inherits this from its surrounding lexical scope.

### 17. What is the difference between stateful and stateless components?

Historically, this referred to class components with state versus function components without state. Today, **function components can also have state using Hooks**. The more useful distinction is whether a component owns state or receives all necessary data through props.

> - Stateful Component：有自己的 State，可以管理数据变化。
> - Stateless Component：不管理自己的 State，通常通过 Props 接收数据并显示。

-  Stateless Component
```js
function DiaryCard({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
```
-  Statefull Component
```js
function DiaryCard({ title, content }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
       Content
    </div>
  );
}
```


### 18. What is the purpose of `render()`?

In a **class component**, `render()` returns the React elements to display. In a **function component**, the function body itself returns the UI. Rendering should be pure: for the same props and state, it should produce the same output and avoid side effects.

```jsx
function DiaryTitle({ title }) {
  return <h2>{title}</h2>;
}
```

## Level 3 — User Interaction and Forms

### 19. What are events in React?

Events represent user interactions such as clicking, typing, or submitting a form. React uses camelCase event props such as `onClick`, `onChange`, and `onSubmit`.

### 20. How do you handle an event?

Pass a function as the event handler rather than calling it immediately during render.

```jsx
function SaveButton({ onSave }) {
  return <button onClick={onSave}>Save</button>;
}
```


### 21. How do you create forms in React?

Forms use standard HTML inputs plus handlers for changes and submission. React can manage input values through state or read values from the form when submitted.

```jsx
function DiaryForm() {
  const [title, setTitle] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.log(title);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}
```

### 22. What is the difference between controlled and uncontrolled inputs?

A **controlled input** gets its current value from React state and reports changes through a handler. An **uncontrolled input** keeps its live value in the DOM, and the application can read it through form APIs or a ref.


## Part 4 — Reuse, Performance, and Keys

### 23. What are Synthetic Events?

React provides an event interface that normalizes common event behavior across browsers. The handler receives an event object with methods such as `preventDefault()` and `stopPropagation()`.

### 24. What are refs in React?

A ref lets a component hold a mutable value or reference a DOM node without requiring that value to trigger a re-render. The `useRef` Hook is commonly used for DOM focus and persistent mutable values.

### 25. When should you use refs?

Use refs for focusing an input, measuring a DOM element, interacting with media, or integrating with an imperative third-party library. Do not use a ref as a replacement for state when a change should update the UI.
```jsx
const inputRef = useRef(null);
<button onClick={() => inputRef.current?.focus()}>Focus</button>
<input ref={inputRef} />
```

## Level 4 — State Lifecycles and Rendering

### 26. What are the stages of a component's lifecycle?

The main phases are **mount**, **update**, and **unmount**. In function components, rendering describes the UI, while effects can synchronize with external systems and perform cleanup when dependencies change or the component unmounts.


### 27. How do lifecycle methods relate to Hooks?

Older class components use methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. Function components commonly use `useEffect` for synchronization with external systems.

```jsx
useEffect(() => {
  const controller = new AbortController();
  fetch('/api/diaries', { signal: controller.signal })
    .then(res => res.json())
    .then(setDiaries)
    .catch(err => {
      if (err.name !== 'AbortError') console.error(err);
    });

  return () => controller.abort();
}, []);
```

## Part 3 — Events, Refs, and Forms

### 28. What is the difference between the Real DOM and the Virtual DOM?  *(Original Q1)*

The **real DOM** is the browser's actual representation of an HTML document. A **virtual DOM** is an in-memory description of what the UI should look like. React compares new and previous render results and commits the necessary changes to the real DOM.

"React lets me describe the UI based on state. When state changes, React reconciles the updated tree and applies the required DOM changes. This helps me avoid manually manipulating the DOM."

> The virtual DOM is **not automatically faster in every situation**, and its memory use is not necessarily lower than the real DOM's.

### 29. How does the Virtual DOM work?

When props or state change, React renders the affected components to produce an updated element tree. During **reconciliation**, it determines what changed; during the **commit phase**, it updates the DOM as needed. Stable keys help React preserve the identity of list items.



### 30. Why are keys important when rendering lists?

Keys give React stable identities for sibling elements. Use a stable identifier from your data, rather than an array index when items can be reordered, inserted, or deleted.

```jsx
{diaries.map(diary => (
  <DiaryCard key={diary.id} diary={diary} />
))}
```

Keys are not directly available as a normal `props.key` inside the child component.


## 🐡 One Last React Joke 🐠
> 🌊 Why do React developers love fishing?
>
> Because they're already experts at using hooks! 🎣