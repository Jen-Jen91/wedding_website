import "./NavBar.css";

interface INavBarProps {
  screenWidth: number;
}

const NavBar = (props: INavBarProps) => {
  const width = props.screenWidth;

  return width >= 660 ? (
    <nav className="nav-bar">
      <a className="nav-link" href="#Home">
        Home
      </a>
      <a className="nav-link" href="#Story">
        Our Story
      </a>
      <a className="nav-link" href="#Timetable">
        Timetable
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
      <a className="nav-link" href="#FAQ">
        FAQ
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
          {width >= 360 ? "Our Story" : "Story"}
        </a>
        <a className="nav-link" href="#Timetable">
          Timetable
        </a>
        <a className="nav-link" href="#Venue">
          {width >= 360 ? "Venue & Accommodation" : "Venue"}
        </a>
      </div>
      <div className="row">
        <a className="nav-link" href="#Travel">
          Travel
        </a>
        <a className="nav-link" href="#Gifts">
          {width >= 360 ? "Gift Registry" : "Gifts"}
        </a>
        <a className="nav-link" href="#Photos">
          Photos
        </a>
        <a className="nav-link" href="#FAQ">
          FAQ
        </a>
        <a className="nav-link" href="#Contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
