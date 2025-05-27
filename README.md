# BagTrack – Micro SaaS for Crypto Swing Traders

BagTrack is a minimal, user-friendly web app for swing traders in crypto (altcoins, meme coins, etc) who want to easily record and track their trades. The app lets you log trade entries (price, market cap, date), view trade history, and organize your trades for better performance review.

---

## Project Structure

```
/src/app
  /components
    Navbar.tsx
    Hero.tsx
    Features.tsx
  page.tsx
  layout.tsx
  globals.css
```

---

## Features

- **Log Trade Entries:**
  - Record entry price, market cap, and date for any altcoin or meme coin trade.
- **View Trade History:**
  - See a complete history of your trades and review past performance.
- **Tag & Organize Coins:**
  - Add tags to your trades for better organization and faster searching.
- **Minimal, Modern UI:**
  - Clean SaaS-style homepage with a hero section, features, and easy navigation.

---

## Tech Stack

- [Next.js 14+](https://nextjs.org/) (App Router)
- [React 19+](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) for modern, accessible UI components

---

## Getting Started

1. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/yourusername/bagtrack.git
   cd bagtrack
   npm install
   # or
   yarn install
   ```
2. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Customization
- Update the hero, features, and navigation in `/src/app/components/` as needed.
- Add new features or connect to a backend for persistent trade storage.

---

## License
MIT
