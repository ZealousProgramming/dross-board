import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
	return (
		<AppBar
			position="fixed"
			sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
		>
			<Toolbar>
				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{ flexGrow: 1 }}
				>
					dross
				</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
}
