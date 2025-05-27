import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
function Homepage() {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen bg-background text-foreground", children: [_jsx("h1", { className: "text-4xl font-bold mb-4", children: "BagTrack" }), _jsx("p", { className: "mb-8 text-lg max-w-xl text-center", children: "Track your meme coin and altcoin swing trades. Log buys/sells, monitor performance, and tag your trades." }), _jsx("a", { href: "/tracker", className: "px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow hover:bg-primary/80 transition", children: "Get Started" })] }));
}
function Tracker() {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen bg-background text-foreground", children: [_jsx("h2", { className: "text-2xl font-bold", children: "Coin Tracker (Placeholder)" }), _jsx("p", { className: "mt-4", children: "This is where your in-progress and exited trades will appear." })] }));
}
function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Homepage, {}) }), _jsx(Route, { path: "/tracker", element: _jsx(Tracker, {}) })] }));
}
export default App;
