import { Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import NavDrawer from "./components/NavDrawer";

export default function App() {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Navbar />
			<NavDrawer />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				<Typography paragraph>Viewport</Typography>
			</Box>
		</Box>
	);
}
