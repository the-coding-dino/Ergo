import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import mammothLeftImage from "../assets/mammoth-left.PNG";
import LogoImg from "../assets/Logo.png";
import vocalsIcon from "../assets/profile.jpg";
import bassIcon from "../assets/profile.jpg";
import guitarIcon from "../assets/profile.jpg";
import drumsIcon from "../assets/profile.jpg";

import mammothRightImage from "../assets/mammoth-right.PNG";
import menuIcon from "../assets/menu.png";
import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/insta.svg";
import spotifyIcon from "../assets/icons/spotify.svg";
import amazonIcon from "../assets/icons/amazon.png";
import youtubeIcon from "../assets/icons/yt.svg";
import musicIcon from "../assets/icons/apple.svg";

function Band() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      {/* Left Side - Image */}
      <div className="home-left">
        <img src={mammothLeftImage} alt="Mammoth" className="mammoth-image" />
      </div>

      {/* Right Side - Content */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#f5b14c",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Hamburger Menu */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: "#000",
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown Menu */}
        {/* <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link
              to="/band"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Band
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link
              to="/music"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Music
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link
              to="/shop"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Shop
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link
              to="/book"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Book Us
            </Link>
          </MenuItem>
        </Menu> */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              backgroundColor: "transparent", // Matches your design
              borderRadius: "0 20px 20px 0",
              padding: "1.5rem 1rem",
              width: "220px",
            },
          }}
        >
          <h2 className="contact">Ergo</h2>
          <hr />
          {[
            { label: "Home", path: "/", img: menuIcon },
            { label: "Band", path: "/band", img: menuIcon },
            { label: "Music", path: "/music", img: menuIcon },
            { label: "Shop", path: "/shop", img: menuIcon },
            { label: "Book Us", path: "/book", img: menuIcon },
          ].map(({ label, path, img }) => (
            <MenuItem
              key={label}
              onClick={handleMenuClose}
              sx={{
                gap: 1,
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={img}
                alt={label}
                style={{ width: 18, height: 18, marginRight: 8 }}
              />
              <Link
                to={path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {label}
              </Link>
            </MenuItem>
          ))}
        </Menu>

        {/* Logo */}
        <div className="logo" style={{ marginBottom: "2rem" }}>
          <img src={LogoImg} alt="ERGO Logo" style={{ width: "280px" }} />
        </div>

        {/* Description */}
        <p
          style={{
            maxWidth: "500px",
            fontSize: "1.2rem",
            marginBottom: "2rem",
            color: "#000",
          }}
        >
          Based in Bangalore, India, ERGO captures the essence of Indian music
          while blending it with Western influences, creating a rock sound that
          continuously evolves and progresses over time.
        </p>

        {/* Band Members */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          {[
            { icon: vocalsIcon, role: "Vocals", name: "Prince" },
            { icon: bassIcon, role: "Bass Guitar", name: "Ronak" },
            { icon: guitarIcon, role: "Guitars", name: "Rahul" },
            { icon: drumsIcon, role: "Drums", name: "Rohit" },
          ].map((member) => (
            <div key={member.name} style={{ textAlign: "center" }}>
              <img
                src={member.icon}
                alt={member.role}
                style={{ width: "60px", borderRadius: "50%" }}
              />
              <div style={{ fontWeight: "bold", fontSize: "1.0rem" }}>
                {member.role}
              </div>
              <div style={{ fontSize: "0.9rem" }}>{member.name}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1.5rem",
            display: "flex",
            gap: "1.5rem",
          }}
        >
          <img src={facebookIcon} alt="Facebook" style={{ width: "35px" }} />
          <img src={instagramIcon} alt="Instagram" style={{ width: "35px" }} />
          <img src={spotifyIcon} alt="Spotify" style={{ width: "35px" }} />
          {/* <img src={amazonIcon} alt="Spotify" style={{ width: "35px" }} /> */}
          <img src={youtubeIcon} alt="YouTube" style={{ width: "35px" }} />
          <img src={musicIcon} alt="Music" style={{ width: "35px" }} />
        </div>
      </div>
    </div>
  );
}

export default Band;
