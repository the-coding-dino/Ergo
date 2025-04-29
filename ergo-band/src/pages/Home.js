import { Link } from "react-router-dom";
import mammothLeft from "../assets/Mammoth.png"; 
import logoImage from "../assets/Logo.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <img src={mammothLeft} alt="Mammoth Left" className="mammoth-image" />
      </div>
      
      <div className="home-right">
        <img src={logoImage} alt="Logo" className="logo" />

        <nav className="nav-links">
          <Link to="/music">MUSIC</Link>
          <Link to="/band">BAND</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/epk">EPK</Link>
          <Link to="/book">BOOK US</Link>
        </nav>

        <div className="social-icons">
          {/* Insert your social media icons here */}
        </div>
      </div>
    </div>
  );
}

export default Home;
