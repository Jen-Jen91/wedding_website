import "./Header.css";

// TODO: merge with navbar when scrolling down page

const Header = () => {
  return (
    <header className="header">
      <img
        src="/images/leaves-left.png"
        alt="leaves-left"
        width="400"
        height="180"
      />
      <header>
        <h1 className="header-h1">Jen & Tomek Wedding</h1>
        <h2 className="header-h2">Wednesday 7th September 2022</h2>
        <h3 className="header-h3">Cambo Estate</h3>
      </header>
      <img
        src="/images/leaves-right.png"
        alt="leaves-right"
        width="400"
        height="180"
      />
    </header>
  );
};

export default Header;
