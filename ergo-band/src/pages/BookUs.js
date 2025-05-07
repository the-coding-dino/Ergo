import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import LogoImg from "../assets/Logo.png";
import mammothRightImage from "../assets/mammoth-right.PNG";
import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/insta.svg";
import spotifyIcon from "../assets/icons/spotify.svg";
import amazonIcon from "../assets/icons/amazon.png";
import youtubeIcon from "../assets/icons/yt.svg";
import musicIcon from "../assets/icons/apple.svg";

import menuIcon from "../assets/menu.png";

function BookUs() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      {/* Left Side - Contact Content */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#f5b14c",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
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

        {/* Center Content */}
        <div style={{ textAlign: "center" }}>
          <img
            src={LogoImg}
            alt="ERGO Logo"
            style={{ width: "180px", marginBottom: "2rem" }}
          />
          <h2 className="contact">BOOKINGS / CONTACT</h2>
          <p className="contact">+91 8095411746</p>
          <p className="contact">thebandergo@gmail.com</p>
        </div>

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

      {/* Right Side - Mammoth Image */}
      <div className="music-right" style={{ flex: 1, overflow: "hidden" }}>
        <img
          c
          src={mammothRightImage}
          alt="Mammoth"
          className="mammoth-image"
        />
      </div>
    </div>
  );
}

export default BookUs;
