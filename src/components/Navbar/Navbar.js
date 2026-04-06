import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../Assets/Intro/Logo.webp";
import "./Navbar.css";

const pages = [
  { name: "Home", path: "/" },
  { name: "Founder Message", path: "/#founder" }, 
  { name: "Why Us", path: "/#about" },
  { name: "Our Services", path: "/#services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonial", path: "/#testimonial" },
  { name: "Make Payment", path: "/#payment" },
  { name: "Contact Us", path: "/contactus" }
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation(); 

  // ADDED THIS: A smarter memory tracker to know exactly which page we are on
  const isSamePage = useRef(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // ADDED THIS: Checks if the button we clicked is on the same page we are currently looking at
  const handleLinkClick = (path) => {
    const targetBasePage = path.split('#')[0]; // Grabs just the "/" or "/gallery" part
    const currentBasePage = location.pathname;
    
    // If they match, we are on the same page. If not, we are jumping from somewhere else!
    isSamePage.current = (targetBasePage === currentBasePage);

    if (path === "/") {
      window.scrollTo(0, 0);
    }
  };

  // UPDATED THIS: Removed the 400ms delay and added the instant vs smooth logic
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -90; 
    
    // If we are on the same page, slide smoothly. If coming from another page, snap instantly!
    window.scrollTo({ 
      top: yCoordinate + yOffset, 
      behavior: isSamePage.current ? 'smooth' : 'auto' 
    });
  };

  const isLinkActive = (path) => {
    const currentFullPath = location.pathname + location.hash;
    if (path === "/") {
      return currentFullPath === "/";
    }
    return currentFullPath === path;
  };

  return (
    <AppBar
      className="customBackground"
      position="sticky" 
      sx={{ boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#333" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
              PaperProps={{
                style: {
                  borderRadius: "15px",
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
                  padding: "10px 0"
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} className="mobile-menu-item">
                  <Typography
                    component={Link}
                    to={page.path}
                    scroll={el => scrollWithOffset(el)} 
                    onClick={() => handleLinkClick(page.path)} /* APPLIED THE CLICK HANDLER HERE */
                    style={{ 
                      textDecoration: 'none', 
                      color: isLinkActive(page.path) ? "#ec4899" : "#333", 
                      fontWeight: isLinkActive(page.path) ? 600 : 400,
                      width: "100%"
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "center" }}>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </Box>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto", flexWrap: "nowrap" }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                scroll={el => scrollWithOffset(el)} 
                disableRipple
                className={`nav-button ${isLinkActive(page.path) ? "active" : ""}`}
                onClick={() => handleLinkClick(page.path)} /* APPLIED THE CLICK HANDLER HERE */
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;