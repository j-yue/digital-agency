import Nav from "./components/nav";
import Home from "./components/sections/home";
import About from "./components/sections/about";
import Services from "./components/sections/services";
import Works from "./components/sections/works";
import Footer from "./components/sections/footer";

function App() {
  return (
    <>
      <header>
        <Nav
          linkArr={[
            ["Contact Us", "#home"],
            ["About Us", "#about"],
            ["Works", "#works"],
            ["Services", "#services"],
          ]}
        />
      </header>

      <main className="flex flex-col flex-nowrap gap-[11.25rem] md:gap-[15rem] bg-[url('src/assets/background/home-sm.svg')] md:bg-[url('src/assets/background/home-md.svg')] lg:bg-[url('src/assets/background/home-lg.svg')] xl:bg-[url('src/assets/background/home-xl.svg')]">
        <h1 className="sr-only">Pixelate Agency Website</h1>
        <Home />
        <About />
        <Services />
        <Works />
      </main>

      <Footer />
    </>
  );
}

export default App;
