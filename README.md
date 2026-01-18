# 🚀 Next.js App Router Playground

> A clean and focused **Next.js App Router studio** to explore real-world routing, rendering strategies, and metadata handling — without unnecessary tooling noise.

This repository is built for **learning, experimentation, and showcasing** how modern Next.js apps are structured using the App Router.

---

## 🧠 What You’ll Learn From This Repo

This project demonstrates **core Next.js concepts in a practical, hands-on way**:

* 🧩 **Dynamic Metadata & Fonts**
* ⚡ **CSR vs SSR**
* 🛣️ **Route Grouping**
* 🔁 **Dynamic & Catch-All Routing**
* 🧱 **SSG – Static Site Generation**
* ♻️ **ISR – Incremental Static Regeneration**
* 🤖 **API Routes (Edge-ready handlers)**

> **Prerequisite:**
> Basic to intermediate **React + TypeScript** knowledge.

---

## 📦 Getting Started

This project was created with `bun create next-app@latest`, but you can still use npm/pnpm if you prefer.

```bash
bun install
bun run dev
```

Once the dev server starts, open:

👉 **[http://localhost:3000](http://localhost:3000)**

Edit files inside `src/app` — the App Router will hot-reload automatically while you code.

---

## 🏗️ Project Structure Highlights

### 🎨 Global Layout & Styling

* **Global CSS:** `src/app/globals.css`
* **Root Layout:** `src/app/layout.tsx`

Provides a shared layout and consistent UI across all pages.

---

### 🛣️ Route Groups & Nested Layouts

* Route groups like **`(marketing)`**
* Feature folders such as **`blog`**, **`student`**, and **`title`**

These show how layouts, segments, and metadata compose naturally in the App Router.

---

### 🔁 Dynamic & Catch-All Routes

Examples included:

* `/blog/[id]`
* `/student/[...id]`
* `/users/[userId]`

Perfect for understanding nested navigation and parameterized routes.

---

### 🤖 API Routes (App Router Style)

* `src/app/api/route.ts`
* `src/app/users/[userId]/route.ts`

Demonstrates **edge-ready API handlers** colocated with UI routes.

---

### 🧩 Reusable Components

* `Title` component at
  `src/components/Title/Title.tsx`

Used to test nested layouts and shared UI rendering.

---

## 🧭 Routes You Can Explore

| Route              | Description                          |
| ------------------ | ------------------------------------ |
| `/`                | Entry page using the root layout     |
| `/about`           | Wrapped by `(marketing)` route group |
| `/blog`            | Blog listing page                    |
| `/blog/[id]`       | Dynamic blog post                    |
| `/student`         | Student overview                     |
| `/student/[...id]` | Deep nested student routes           |
| `/title`           | Demonstrates layout sharing          |
| `/api`             | Base API route                       |
| `/users/[userId]`  | Dynamic API route                    |

---

## 🎯 Why This Repo Exists

This project is intentionally:

* ✅ **Minimal**
* ✅ **Readable**
* ✅ **Focused on fundamentals**
* ❌ No heavy UI libraries
* ❌ No unnecessary abstractions

It’s meant to **build intuition** around how Next.js App Router *actually works*.

---

## 🌟 Ideal For

* Students learning **Next.js App Router**
* Developers revising **rendering strategies**
* Showcasing **routing & API knowledge** in portfolios
* Quick experimentation without boilerplate fatigue

---

Happy coding 🚀
Feel free to fork, break things, and learn deeply.

---

If you want next:

* 🔥 A **portfolio-ready README**
* 🧠 Add **architecture diagrams**
* 💼 Make this **placement-friendly**

Just say the word 😄
