# 🖥️ Tiny It UI

A sleek, minimalist frontend for the [Tiny It API](https://github.com/oneirosoft/tinyit-api), built with **React**, **Bun**, and **Vite**. Designed for fast client-side routing and seamless URL shortening via a responsive and accessible interface.

---

## 🚀 Getting Started

### Prerequisites

- [**Bun**](https://bun.sh/docs/installation) – JavaScript runtime (v1.0+)

### 🧪 Running Locally

```bash
bun install
bun run dev
```

The app will start on [http://localhost:5173](http://localhost:5173) by default.

> 🔧 Make sure your API is also running and CORS is correctly configured for development.

---

## ✨ Features

- 📩 Submit long URLs to be shortened
- 🔗 Copyable short links
- 📜 View recent URLs from browser cache
- 🌗 Responsive dark/light theme
- ✅ Clipboard and success feedback
- ⚡ Super-fast SPA via Vite

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:3000/api
```

---

## 📝 License

MIT © 2025 TinyIt Contributors
