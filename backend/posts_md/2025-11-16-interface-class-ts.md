---
title: "Interface vs. Class in TypeScript — A StudyCat Case Study"
slug: interface-class-typescript
date: 2025-11-16
tags: [TypeScript, Interface, Class, Chrome Extension]
category: Typescript
summary: "Understanding interface vs. class through a real example: saving data in a Chrome extension."

cover_image_url: null

---


# Interface vs. class in typescript
*A practical lesson from building my StudyCat Chrome extension*

> Today I was trying to store some data in `chrome.storage` for my StudyCat Chrome extension. Very quickly, I hit a classic TypeScript question:
> **How should I structure my data so that it stays persistent and easy to manage?**
> `chrome.storage` stores everything as JSON in a simple `{ key: value }` format. Each  value has to be JSON-serializable: numbers, strings, booleans, arrays, or plain objects — but **not** class instances, and definitely not functions or methods.
>
> At first I thought: “Why not just save everything separately? I only need a few pieces of data anyway: `totalCoins`, a `blacklist` array, and a `sessionHistory` array.”

---

## 1. What chrome.storage actually stores
Under the hood, `chrome.storage` is basically a key–value store.

Each call like this:

```ts
chrome.storage.sync.set({
  studyCatState: {
    coins: 12,
    currentMood: "HAPPY",
    blacklist: ["youtube.com", "twitter.com"],
  },
});
ends up being stored as JSON, something like:
```json
{
  "studyCatState": {
    "coins": 12,
    "currentMood": "HAPPY",
    "blacklist": ["youtube.com", "twitter.com"]
  }
}
```

- Why you wrote this
- What problem you encountered
- What the reader will learn from this blog

---
### 2. My first idea: save everything separately
My first naive idea was:

```ts
chrome.storage.sync.set({ coins: 10 });
chrome.storage.sync.set({ blacklist: ["youtube.com"] });
chrome.storage.sync.set({ sessionHistory: [...] });
```
But this approach doesn’t scale well.
If I keep adding more features and more fields (like totalCoins, blacklist, streak, etc.),
I’ll have to update multiple chrome.storage calls in different places.
Very soon, it becomes a maintenance headache.

So I started thinking: I need one “container” to hold all the data for me instead of scattering keys everywhere.
My first instinct was: “This sounds like a job for a class.”

## Here Comes State, Object, Class, Interface, State class
|**Concept** | **Definition** | **Examples** |
|------------|-------------|------------|
| State   | Pure data / information that describes your app at a moment in time. No methods, no behavior. | `{coins: 5, catMood: "happy"}`|
| Object |A concrete value in JS — can contain data + methods |  `{name:"bobo", meow(){...}`|
| Class | or creating objects with behavior. Describes how objects are constructed and what methods they have.| `class Cat {}` |
| Interface | A type-only structure that describes the shape of a plain object. No runtime output. Perfect for JSON-like data.| nterface User { name: string } (TypeScript) |
| State Class |A class used to manage state: load, save, update, validate. Wraps behavior around plain JSON state.| `class AppState { count = 0; save() {...} }` |

A “State Class” is not a special TypeScript feature.  
It’s simply a normal `class` whose job is to **manage state**, not to *be* the state.

The state itself stays a **plain object** (described by an interface),  
while the class provides all the behavior around it — loading, updating, saving.

This is why my StudyCat extension uses:

- `interface StudyCatState` → the structure of the JSON state  
- `class StudyCatStorage` → the place where all state logic lives
  
## One last comparison — Interface vs. Class

|             | **Interface** | **Class** |
|------------|-------------|------------|
| Essence   | Type constraint / Contract ｜ Actual code implementation | 
| After compilation | Disappears (doesn't exist at runtime)|Exists (real JavaScript code) |
| Purpose | Define "shape" / Define structure| Create objects / Instantiate |
|What it can do| Only describe structure | Can have concrete logic |
｜Can it have logic? | No | YES|
I am deciding to give interface a try for the stability and better maintenance.
- Use interfaces for anything that will be saved, sent, or shared as plain JSON
- Use classes only when you need logic or behavior
- Keep the two separate to avoid messy state management later
- 
I’m going to adopt more interfaces in my project —
for stability, clarity, and easier maintenance as StudyCat grows.

If you're curious about how I structure my extension or want more posts like this,
feel free to follow along on my blog!

