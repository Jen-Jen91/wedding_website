import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-banner">
      <img
        className="hero-img"
        src="/images/hero-1.jpg"
        alt="jen-and-tomek-1"
        width="33.33%"
        height="auto"
      />
      <img
        className="hero-img"
        src="/images/hero-2.jpg"
        alt="jen-and-tomek-2"
        width="33.33%"
        height="auto"
      />
      <img
        className="hero-img"
        src="/images/hero-3.JPG"
        alt="jen-and-tomek-3"
        width="33.33%"
        height="auto"
      />
    </div>
  );
};

export default Hero;
