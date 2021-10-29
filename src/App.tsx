import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />

      <div className="main">
        <p>Main</p>
      </div>

      <Footer />
    </div>
  );
};

export default App;
