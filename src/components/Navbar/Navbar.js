import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  // { name: "About", path: "/about" },
  { name: "Cafe", path: "/cafe" },
  { name: "Services", path: "/services" },
  { name: "Menu", path: "/menu" },
  { name: "Contact Us", path: "/contactus" }
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activePage, setActivePage] = useState("/");
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Update active page when location changes
  React.useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <AppBar
      className="customBackground"
      position="static"
      sx={{ boxShadow: "none", backgroundColor: "transparent" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{
                  mx: 1,
                  color: page.path === activePage ? "red" : "black" // Change color for active page
                }}
                style={{ textTransform: "none", fontSize: "17px" }}
                component={Link}
                to={page.path}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={page.path}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
