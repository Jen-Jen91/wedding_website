import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";
import Hero from "./components/hero/Hero";
import SectionsList from "./components/sections-list/SectionsList";
import Footer from "./components/footer/Footer";

import useWindowSize from "./hooks/useWindowSize";

const App = () => {
  const windowSize = useWindowSize();

  return (
    <>
      <Header screenWidth={windowSize.width} />

      <NavBar screenWidth={windowSize.width} />

      <Hero />

      <SectionsList />

      <Footer />
    </>
  );
};

export default App;
