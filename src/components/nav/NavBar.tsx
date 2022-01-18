import "./NavBar.css";

interface INavBarProps {
  screenWidth: number;
}

const NavBar = (props: INavBarProps) => {
  const width = props.screenWidth;

  return width >= 610 ? (
    <nav className="nav-bar">
      <a className="nav-link" href="#Home">
        Home
      </a>
      <a className="nav-link" href="#Story">
        Our Story
      </a>
      <a className="nav-link" href="#Wedding">
        Wedding
      </a>
      <a className="nav-link" href="#Venue">
        Venue & Accommodation
      </a>
      <a className="nav-link" href="#Travel">
        Travel
      </a>
      <a className="nav-link" href="#Gifts">
        Gift Registry
      </a>
      <a className="nav-link" href="#Photos">
        Photos
      </a>
      <a className="nav-link" href="#Contact">
        Contact
      </a>
    </nav>
  ) : (
    <nav className="nav-bar">
      <div className="row">
        <a className="nav-link" href="#Home">
          Home
        </a>
        <a className="nav-link" href="#Story">
          {width >= 355 ? "Our Story" : "Story"}
        </a>
        <a className="nav-link" href="#Wedding">
          Wedding
        </a>
        <a className="nav-link" href="#Venue">
          {width >= 355 ? "Venue & Accommodation" : "Venue"}
        </a>
      </div>
      <div className="row">
        <a className="nav-link" href="#Travel">
          Travel
        </a>
        <a className="nav-link" href="#Gifts">
          {width >= 355 ? "Gift Registry" : "Gifts"}
        </a>
        <a className="nav-link" href="#Photos">
          Photos
        </a>
        <a className="nav-link" href="#Contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
