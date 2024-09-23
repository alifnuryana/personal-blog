---
title: "Day 1: Introduction to Vite"
description: Understand what Vite is, its purpose in modern front-end development, and why it's considered faster and more efficient than traditional bundlers like Webpack.
# duration: 5min
date: 2024-09-23
---

## **Day 1: Introduction to Vite**

### 🎯 Objective:

Understand what Vite is, its purpose in modern front-end development, and why it's considered faster and more efficient than traditional bundlers like Webpack.

---

### 🤔 **What is Vite?**

Vite is a next-generation front-end build tool that focuses on speed and performance. It achieves this by:

1. Using **native ES modules** in the browser for development, which eliminates the need for bundling the entire project upfront.
2. Offering a fast **development server** with **Hot Module Replacement (HMR)**, so changes you make to your code are instantly reflected in the browser without needing a full reload.
3. Leveraging **Rollup** for optimized production builds with minimal configuration.

### 💡 **Key Benefits of Vite**:

1. **Instant server start** – no waiting for the entire project to compile.
2. **Faster Hot Module Replacement (HMR)** – instant updates without page reload.
3. **On-demand code compilation** – only the code that’s currently needed is compiled.
4. **Optimized builds** for production using Rollup, with support for tree-shaking and code splitting.
5. **Framework-agnostic** – works with Vue, React, Svelte, and plain JavaScript projects.

### ⚖️ **Difference Between Vite and Traditional Bundlers (e.g., Webpack)**:

- **Webpack**:

  - Bundles the entire application upfront, which can result in slow startup times during development.
  - Uses custom module resolution and requires loaders or plugins to handle modern JavaScript features.

  <!-- ![Bundle Based Dev Server](./bundle-based-dev-server.png) -->

- **Vite**:

  - Serves the project using **ES modules** directly in the browser for development, which dramatically reduces the time needed to start the server.
  - Code is compiled on-demand, speeding up changes and refreshes.
  - Handles modern JavaScript out of the box with no need for additional loaders or plugins.

  <!-- ![Native ESM Based Dev Server](./native-esm-based-dev-server.png) -->

---

### 🚀 **Getting Started with Vite (No Code Yet)**:

#### Step 1: Read the Vite Documentation

- Start by reading [Vite's official documentation](https://vitejs.dev/guide/) to understand its goals and features.
- Make sure to understand how Vite works, especially the **native ESM development server** and **production bundling**.

#### Step 2: Watch Vite Overview Video

- To get a quick understanding, watch an introductory video on YouTube that covers the basics of Vite, such as:

  - **What is Vite?**
  - **How does it improve the development process?**
  - **How does it speed up production builds?**

Here’s a [Vite Introduction Video](https://youtu.be/DkGV5F4XnfQ?si=ThaLwvLGc9ggwlXZ) that walks through its key features.

#### Step 3: Understand Vite’s Key Features

- **ES Modules (ESM)**: Vite uses ES modules in the browser natively, which makes the initial server start instant. You’ll need to be familiar with ES module syntax (i.e., using `import` and `export` instead of CommonJS `require`).

  - **Example**:

    ```js
    // ES Module import
    import { createApp } from 'vue'
    import App from './App.vue'

    createApp(App).mount('#app')
    ```

- **Hot Module Replacement (HMR)**: Vite enables live reloading and instant updates to specific modules without refreshing the whole page.

- **Rollup for Production**: Once your app is ready for deployment, Vite switches to **Rollup** for bundling, giving you optimized, minified files.

---

### 📋 **Today’s Tasks**:

#### 1. **Understand the Purpose of Build Tools**:

- If you're not already familiar with the concept, read about **bundlers** and **build tools** like Webpack, Parcel, and Rollup. Understand why Vite was created and how it solves problems associated with slower build times and large project structures.

#### 2. **Familiarize Yourself with ESM**:

- Read up on **ECMAScript Modules (ESM)**, which is the foundation of Vite's performance in development mode. You can find documentation and examples [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

#### 3. **Prepare for Installation**:

- Before you start setting up Vite (tomorrow), ensure you have **Node.js** installed on your machine. You can check if it’s installed by running:
  ```bash
  node -v
  npm -v
  ```

#### 4. **Join the Vite Community**:

- Join the **Vite Discord** server or follow Vite on GitHub to stay up-to-date with changes and get support from the community. Here’s the [Discord link](https://discord.com/invite/RPqRhB6m8E).

---

### ✅ **End of Day 1 Checklist**:

By the end of today, you should:

- Understand the key benefits of Vite compared to traditional bundlers.
- Know the difference between how Vite and Webpack work (e.g., instant server start, HMR).
- Have read Vite’s documentation and watched an introductory video.
- Be familiar with ES modules (import/export syntax).

**Up Next (Day 2)**: Tomorrow, you'll set up Vite and create your first project. You'll explore how Vite works and experience its fast development server firsthand.
