import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import mammothImage from "../assets/mammoth-right.PNG";
import LogoImg from "../assets/Logo.png";
import menuIcon from "../assets/menu.png";

import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/insta.svg";
import spotifyIcon from "../assets/icons/spotify.svg";
import amazonIcon from "../assets/icons/amazon.png";
import youtubeIcon from "../assets/icons/yt.svg";
import musicIcon from "../assets/icons/apple.svg";

function Music() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="music-container"
      style={{ display: "flex", height: "100vh", width: "100%" }}
    >
      {/* Left Section */}
      <div
        className="music-left"
        style={{
          flex: 1,
          backgroundColor: "#f8bb5d",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        {/* Hamburger Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            color: "#000",
          }}
        >
          <MenuIcon />
        </IconButton>

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
            { label: "Shop", path: "#", img: menuIcon },
            { label: "Book Us", path: "#", img: menuIcon },
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

        {/* Music Content */}
        <div
          className="music-content"
          style={{ textAlign: "center", maxWidth: "500px" }}
        >
          <p className="music-typography">
            <strong>Mammoth</strong> is ERGO's debut EP, featuring four songs
            that have developed over a decade of experimentation. Representing a
            metaphorical mammoth that has survived calamities, the EP embodies
            progress and resilience, standing strong against changing tides and
            the test of time.
          </p>
        </div>

        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#002244",
          }}
        >
          Mammoth EP
        </h1>

        {/* Social Icons */}
      
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1.5rem",
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

      {/* Right Section - Mammoth Image */}
      <div className="music-right" style={{ flex: 1, overflow: "hidden" }}>
        <img c src={mammothImage} alt="Mammoth" className="mammoth-image" />
      </div>
    </div>
  );
}

export default Music;
