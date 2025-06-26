import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ContactForm from "./ContactForm";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 360px)");
	const [showContactForm, setShowContactForm] = useState(false);

	const handleShowContactForm = () => {
		document.activeElement?.blur(); // Remove focus from the triggering element. This removes Blocked aria-hidden on an element error in the console
		setShowContactForm(true);
	};
  const handleCloseContactForm = () => setShowContactForm(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
		<div className="container-fluid flex justify-center navbar-shadow" style={{ zIndex: 1400 }}>
			<div className="container max-w-full px-0 lg:px-5 overflow-hidden">
				<AppBar position="static" sx={{ all: "unset" }}>
					<Toolbar>
						<Typography variant="h6" sx={{ flexGrow: 1 }}>
							<Link to="/" style={{ textDecoration: "none", color: "inherit" }} className="font-bold">
								<div className="logo-container flex items-center justify-center rotateY">
									<div className="semi-circle"></div>
									<div className="letter-p">P</div>
								</div>
							</Link>
						</Typography>
						
						{/* Animated Menu Icon */}
						<IconButton
							edge="end"
							color="inherit"
							aria-label="menu"
							sx={{
								display: isSmallScreen ? "block" : "none",
								transition: "transform 0.3s ease-in-out",
								transform: mobileOpen ? "rotate(360deg)" : "rotate(0deg)",
								zIndex: 1301,
							}}
							onClick={handleDrawerToggle}
						>
							{mobileOpen ? <CloseIcon sx={{ fontSize: "35px" }} /> : <MenuIcon sx={{ fontSize: "35px" }} />}
						</IconButton>

						{/* Visible only on big screens */}
						{!isSmallScreen && (
							<div className="flex gap-x-4">
								{[
									{ label: "About", path: "/about" },
									{ label: "Blog", path: "/blog" },
									{ label: "Portfolio", path: "/portfolio" },
									{ label: "Contact", path: "" },
								].map(({ label, path }) => (
									<Button
										color="inherit"
										key={label}
										sx={{ fontSize: "14px" }}
										onClick={label === "Contact" ? handleShowContactForm : undefined} // Open modal if Contact is clicked
									>
										{label !== "Contact" ? (
										<Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
											{label}
										</Link>
										) : (
										label
										)}
									</Button>
								))}
							</div>
						)}

						{/* Sidebar Drawer */}
						<Drawer 
							anchor="right" 
							open={mobileOpen} 
							onClose={handleDrawerToggle}
							PaperProps={{
								sx: {
									width: isVerySmallScreen ? "100%" : "300px",
								},
							}}
						>
							<div className="mt-10 px-2 pt-5">
								<List>
									{[
										{ label: "About", path: "/about" },
										{ label: "Blog", path: "/blog" },
										{ label: "Portfolio", path: "/portfolio" },
										{ label: "Contact", path: "" },
									].map(({ label, path }) => (
										<ListItem disablePadding key={label} sx={{ borderBottom: "1px solid #ccc" }}>
											<ListItemButton
												component={label !== "Contact" ? Link : undefined}
												to={label !== "Contact" ? path : undefined}
												onClick={label === "Contact" ? handleShowContactForm : handleDrawerToggle} // Open modal if Contact is clicked
											>
												<ListItemText
													primary={label}
													sx={{ textAlign: "center" }}
													primaryTypographyProps={{ fontSize: "20px" }}
												/>
											</ListItemButton>
										</ListItem>
									))}
								</List>
							</div>
						</Drawer>
						<ContactForm open={showContactForm} onClose={handleCloseContactForm} />
					</Toolbar>
				</AppBar>
			</div>
		</div>
    </>
  );
};

export default Navbar;