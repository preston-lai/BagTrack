export default function Footer() {
  return (
    <footer className="w-full border-t border-border py-6 px-8 bg-background/80 text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
      <div className="font-bold text-lg">BagTrack</div>
      <div className="text-sm">© {new Date().getFullYear()} BagTrack. All rights reserved.</div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-primary transition">Twitter</a>
        <a href="#" className="hover:text-primary transition">Discord</a>
        <a href="#" className="hover:text-primary transition">GitHub</a>
      </div>
    </footer>
  )
} 