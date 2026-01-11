---
title: "The difference of class and object in JavaScript"
slug: difference-class-object
date: 2025-11-13
tags: [class, object, oop, JavaScript]
category: "JavaScript"
summary: "This short article roughly tells the difference of class and object in js."
cover_image_url: null


---

# The Difference Between Class and Object in JavaScript

When I first learned JavaScript, I already had some OOP concepts from other courses.  
But as soon as **class** and **object** were introduced in JS, I got confused — they look so similar!  
They both have **properties** and **methods**, so… what’s the difference? I hope you don't have this question as me...

This short article summarizes how I finally understood their relationship, and how you can quickly build the right mental model too.

---

## Answers

Actually the core idea is extremely simple:

- **Class = the model (the parent template).**  
- **Object = the thing created from that model.**

That’s it.

Class tells JavaScript: “Here’s what the object should look like.”  
Object is JavaScript saying: “Okay, here is one of them.”

## An Example 
![Cat class vs Bobo object](../assets/img/blog-img/Cat.png)
```js
class Cat {
  constructor(name, age, favoriteFood) {
    this.name = name;
    this.age = age;
    this.favoriteFood = favoriteFood;
  }

  prey() {
    return `${this.name} hunted a mouse!`;
  }

  meow() {
    return `${this.name} says meow`;
  }
}

const bobo = new Cat("Bobo", 5, "lickable treat");

console.log(bobo.prey());
console.log(bobo.meow());
```

## Overriding methods

One powerful feature of OOP is that an object can override a method defined in its class template.

For example, my cat Bobo probably cannot hunt a real mouse  
(shhh… don’t tell him I said that).

So Bobo’s instance can override the original `prey()` method with his own custom behavior. 

## Overriding methods

```js
const bobo = new Cat("Bobo", 5, "lickable treat");

bobo.prey = function () {
  return "I hunted... a fake mouse toy 😼🧸";
};
```