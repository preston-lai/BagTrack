export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b">
      <div className="font-bold text-xl">BagTrack</div>
      <div className="flex gap-6 text-base">
        <a href="#features" className="hover:text-primary transition">Features</a>
        <a href="#login" className="hover:text-primary transition">Login</a>
      </div>
    </nav>
  )
} 