import Header from "./components/Header"
import Page from "./components/Page"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className="sticky top-0 z-10 bg-barbershop-color-black">
        <div className="invisible md:visible text-lime-100">
          <Header/>
        </div>
      </div>
      <main className="z-0">
        <Page/>
      </main>
      <div className="sticky top-0 z-0 bg-barbershop-color-black text-lime-100">
        <Footer/>
      </div>     
    </>
  )
}

export default App
