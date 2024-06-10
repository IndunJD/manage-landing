import "./components/index.ts"
import "./app.scss"
import {
  Header,
  Hero,
  Services,
  Testimonials,
  GetStarted,
  Footer,
} from "./components/index.ts"

function App() {
  return (
    <div>
      <header className="main-container">
        <Header />
      </header>
      <section className="main-container">
        <Hero />
        <Services />
        <Testimonials />
      </section>
      <section className="sub-container getstarted-container">
        <GetStarted />
      </section>
      <footer className="sub-container footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
