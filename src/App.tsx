import "./App.css";

import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />

      <NavBar />

      <div className="main">
        <p>Main</p>
      </div>

      <Footer />
    </div>
  );
};

export default App;
