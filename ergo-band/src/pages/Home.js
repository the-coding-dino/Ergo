import { Link } from "react-router-dom";
import mammothImage from "../assets/mammoth-left.PNG";
import LogoImg from "../assets/Logo.png";

import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/insta.svg";
import spotifyIcon from "../assets/icons/spotify.svg";
import amazonIcon from "../assets/icons/amazon.png";
import youtubeIcon from "../assets/icons/yt.svg";
import musicIcon from "../assets/icons/apple.svg";

function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <img src={mammothImage} alt="Mammoth" className="mammoth-image" />
      </div>
      <div className="home-right">
        <div className="logo" style={{ marginBottom: "2rem" }}>
          <img src={LogoImg} alt="ERGO Logo" style={{ width: "280px" }} />
        </div>

        <nav className="nav-links">
          <Link to="/music">MUSIC</Link>
          <Link to="/band">BAND</Link>
          <Link to="#">SHOP</Link>
          <Link to="#">EPK</Link>
          <Link to="/book">BOOK US</Link>
        </nav>
<br/>
<br/>
<br/>
<br/>
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1.5rem",
            display: "flex",
            gap: "1.5rem",
          }}
        >
          <img src={facebookIcon} alt="Facebook" style={{ width: "30px" }} />
          <img src={instagramIcon} alt="Instagram" style={{ width: "30px" }} />
          <img src={spotifyIcon} alt="Spotify" style={{ width: "30px" }} />
          {/* <img src={amazonIcon} alt="Spotify" style={{ width: "30px" }} /> */}
          <img src={youtubeIcon} alt="YouTube" style={{ width: "30px" }} />
          <img src={musicIcon} alt="Music" style={{ width: "30px" }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
