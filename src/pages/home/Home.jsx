import Hero from "./hero"
import Features from "./Features"
import HowItWorks from "./HowItWorks"
import CTA from "./CTA"
import Footer from "@/components/Footer"

function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}

export default Home