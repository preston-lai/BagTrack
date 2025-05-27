import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'

function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}

function Tracker() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h2 className="text-2xl font-bold">Coin Tracker (Placeholder)</h2>
      <p className="mt-4">This is where your in-progress and exited trades will appear.</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/tracker" element={<Tracker />} />
    </Routes>
  )
}

export default App
