# Scandy — E-commerce SPA

Test assignment for the Scandiweb Junior React Developer program: a single-page e-commerce application built from a Figma design, consuming a GraphQL API.

🔗 **Live demo:** [scandy.onrender.com](https://scandy.onrender.com/tech)
*(hosted on Render free tier — the app may take a few seconds to wake up on first load)*

![Screenshot](public/preview.png)
<!-- заменить на реальный путь к скриншоту/GIF, лежащему в репозитории -->

## Features

- Browsing product categories (tech / clothes / all)
- Product listing with price, name and short attributes
- Product detail page with size/color/capacity selection
- Shopping cart: add/remove items, quantity control, live total
- Cart persists across page navigation
- Currency switcher
<!-- поправьте список под то, что реально реализовано -->

## Tech stack

- **React** — UI
- **MobX** — state management
- **Apollo Client / GraphQL** — data fetching
- **SCSS** — styling
- **ESLint** — code style enforcement

## Getting started

### 1. Run the GraphQL endpoint

```bash
git clone https://github.com/scandiweb/junior-react-endpoint
cd junior-react-endpoint
npm install
npm install apollo-utilities
npm run start
```

### 2. Run the application

```bash
git clone https://github.com/SergeyKagal/scandy
cd scandy
npm install
npm run start
```

The app will be available at `http://localhost:3000`.

## What I'd improve with more time

<!-- по желанию: 2-3 честных пункта — recruiters любят видеть саморефлексию -->
- Add unit tests (Jest / React Testing Library)
- Improve loading/error states for API requests
- ...

## Author

**Sergey Kagal**
[Telegram](https://telegram.me/Sergey_Kagal) · [Portfolio](https://sergeykagal.github.io/zero_cv/)
