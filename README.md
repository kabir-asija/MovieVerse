# 🎬 MovieVerse

## About

MovieVerse is a full-featured React.js application that allows users to browse movies, book tickets, and generate invoices, offering an intuitive and seamless movie ticket booking experience.

Deployed on **GitHub Pages**:  
🔗 [View Live Site](https://kabir-asija.github.io/MovieVerse/)

---

## 📦 Tech Stack

- ⚛️ React.js
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌐 GitHub Pages (hosting)
- 📦 gh-pages (deployment)

---

## 🛠️ Installation

1. **Clone the repo:**

```bash
git clone https://github.com/<your-username>/MovieVerse.git
cd MovieVerse


Install dependencies:

npm install


Run the development server:

npm run dev


Open http://localhost:5173/
 to view the app locally.

🚀 Deployment (GitHub Pages)

To build and deploy the app:

npm run build
npm run deploy


The app will be live at:
(https://kabir-asija.github.io/MovieVerse/)

📁 Project Structure
MovieVerse/
├── public/
│   └── Logo.png
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── tailwind.config.js

🌐 Router Setup

React Router is configured with a basename for GitHub Pages:

vite.config.js

export default defineConfig({
  base: '/MovieVerse/',
  plugins: [react()],
})


main.jsx

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/MovieVerse">
    <App />
  </BrowserRouter>
);

📃 License

This project is open source under the MIT License
.

🙌 Acknowledgements

React

Vite

Tailwind CSS
