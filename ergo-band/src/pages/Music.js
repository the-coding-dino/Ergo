import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import mammothImage from '../assets/Mammoth.png';

function Music() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="music-container" style={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Left Section */}
      <div className="music-left" style={{ flex: 1, backgroundColor: '#f8bb5d', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        
        {/* Hamburger Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          style={{ position: 'absolute', top: '1rem', left: '1rem', color: '#000' }}
        >
          <MenuIcon />
        </IconButton>

        {/* MUI Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/band">Band</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/shop">Shop</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/epk">EPK</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/book">Book Us</Link>
          </MenuItem>
        </Menu>

        {/* Logo */}
        <div className="logo" style={{ marginBottom: '2rem' }}>
          <img src="/path/to/your/logo.png" alt="ERGO Logo" style={{ width: '280px' }} />
        </div>

        {/* Music Content */}
        <div className="music-content" style={{ textAlign: 'center', maxWidth: '500px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Mammoth EP</h1>
          <p style={{ fontSize: '1rem', color: '#000' }}>
            <strong>Mammoth</strong> is ERGO's debut EP, featuring four songs that have developed
            over a decade of experimentation. Representing a metaphorical mammoth
            that has survived calamities, the EP embodies progress and resilience,
            standing strong against changing tides and the test of time.
          </p>
        </div>

        {/* Social Icons */}
        <div className="social-icons" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          {/* Add your social media icons here */}
        </div>
      </div>

      {/* Right Section - Mammoth Image */}
      <div className="music-right" style={{ flex: 1, overflow: 'hidden' }}>
        <img
          src={mammothImage}
          alt="Mammoth"
          style={{ height: '100%', width: '200%', objectFit: 'cover', objectPosition: 'right' }}
        />
      </div>
    </div>
  );
}

export default Music;
