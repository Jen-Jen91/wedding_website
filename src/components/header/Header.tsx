import "./Header.css";

interface IHeaderProps {
  screenWidth: number;
}

const Header = (props: IHeaderProps) => {
  const width = props.screenWidth;

  return (
    <header className="header">
      {width >= 600 ? (
        <>
          <img
            className="header-img"
            src="/images/leaves-left.png"
            alt="leaves-left"
            width="300"
            height="200"
          />
          <header>
            <h1 className="header-h1">Jen & Tomek Wedding</h1>
            <h2 className="header-h2">Wednesday 7th September 2022</h2>
            <h3 className="header-h3">Cambo Estate</h3>
          </header>
          <img
            className="header-img"
            src="/images/leaves-right.png"
            alt="leaves-right"
            width="300"
            height="200"
          />
        </>
      ) : (
        <>
          <div className="header-img-row">
            <img
              className="header-img"
              src="/images/leaves-left.png"
              alt="leaves-left"
              width="300"
              height="200"
            />
            <img
              className="header-img"
              src="/images/leaves-right.png"
              alt="leaves-right"
              width="300"
              height="200"
            />
          </div>
          <header>
            <h1 className="header-h1">Jen & Tomek Wedding</h1>
            <h2 className="header-h2">Wednesday 7th September 2022</h2>
            <h3 className="header-h3">Cambo Estate</h3>
          </header>
        </>
      )}
    </header>
  );
};

export default Header;
