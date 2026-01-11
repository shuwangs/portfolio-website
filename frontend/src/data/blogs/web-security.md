---
title: "Web Security and Authentification "
date: 2025-12-11
tags: [web, security, authentification]
description: ""
---

# Web Security and Authentification 

> A short highlight sentence (optional).  
> Example: “This week I built a Chrome extension that gamifies productivity.”

---

## Overview

Briefly explain:

- Why you wrote this
- What problem you encountered
- What the reader will learn from this blog

---

## Web Security vulnerabilities and attacks

- SQL injections
- Cross - site scripting (XSS)
- Remote File Inclusion
- Cross-site Request Forgery (CSRF)

---

### What is a CSRF attack

CSRF is an attack that tricks logged-in user into performing malicious anction or exposing personal information to the attackers.

#### Exmample 
```html
    <form action="http://bank.com/transfer.do" method="POST">    
    <input type="hidden" name="acct" value="MARIA"/>
    <input type="hidden" name="amount" value="100000"/>
    <input type="submit" value="View my pictures"/>
    </form>
```
I will be crazy if I encounter this, the attacker has borrowed my logged in and transout my money! When I though I was just view my pictures!

## How to Secure fron CSRF
**Encrypted Double Submit Cookie**
**Double Submit Cookie Pattern**

- Create two CSRF tokens - one encrypted and one decrypted.
- Add the decrypted CSRF token to a cookie.
-  Add the encrypted CSRF token in a cookie that is HTTP-only (cannot be used by JavaScript) and Same-Site only (cannot be used by another web application)
- Frontend can read the decrypted CSRF token cookie and add it into the headers of any request made to the backend
- Backend reads the headers of the request and matches the decrypted CSRF token in the headers to the encrypted CSRF token in the cookies

### How to prevent CSRF attacks in Express

