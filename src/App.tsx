import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Process } from "./components/Process"
import { About, Contact } from "./components/About"
import { Footer } from "./components/Footer"
import { MetaAdsManagerMock } from "./components/meta-ads/MetaAdsManagerMock"

function MetaAdsExportView() {
  return (
    <div className="min-h-dvh bg-[#e4e6eb] p-6 md:p-10">
      <MetaAdsManagerMock className="mx-auto max-w-[1180px]" />
    </div>
  )
}

export default function App() {
  if (typeof window !== "undefined" && window.location.hash === "#meta-ads") {
    return <MetaAdsExportView />
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
