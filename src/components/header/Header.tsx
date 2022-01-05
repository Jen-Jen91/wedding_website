import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src="/images/leaves-left.png"
        alt="leaves-left"
        width="300"
        height="150"
      />
      <header>
        <h1 className="header-h1">Jen & Tomek Wedding</h1>
        <h2 className="header-h2">Wednesday 7th September 2022</h2>
        <h3 className="header-h3">Cambo Estate</h3>
      </header>
      <img
        src="/images/leaves-right.png"
        alt="leaves-right"
        width="300"
        height="150"
      />
    </header>
  );
};

export default Header;
