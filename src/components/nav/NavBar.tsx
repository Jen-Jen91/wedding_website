import "./NavBar.css";

interface INavBarProps {
  screenWidth: number;
}

const NavBar = (props: INavBarProps) => {
  const width = props.screenWidth;

  return (
    <nav className="nav-bar">
      <a className="nav-link" href="#Home">
        Home
      </a>
      <a className="nav-link" href="#Story">
        Our Story
      </a>
      <a className="nav-link" href="#Gifts">
        {width >= 360 ? "Gift Registry" : "Gifts"}
      </a>
      <a className="nav-link" href="#Photos">
        Photos
      </a>
      <a className="nav-link" href="#Contact">
        Contact
      </a>
    </nav>
  );
};

export default NavBar;
