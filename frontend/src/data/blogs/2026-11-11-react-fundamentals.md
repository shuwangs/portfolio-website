---
title: "React Fundamentals"
slug: react-fundamentals-questions
date: 2026-11-11
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
