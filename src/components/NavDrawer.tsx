import React from "react";
import {
	Box,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
} from "@mui/material";

interface DrawerProperties {
	width: number;
}

const properties: DrawerProperties = { width: 240 };

export default function NavDrawer() {
	return (
		<Drawer
			variant="permanent"
			sx={{
				width: properties.width,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					width: properties.width,
					boxSizing: "border-box",
				},
			}}
		>
			<Toolbar />
			<Box
				sx={{
					overflow: "auto",
					height: "100%",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<List sx={{ flexGrow: 1 }}>
					{["Dashboard", "Issues", "My Tasks"].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>

				<Toolbar />
				<List>
					<ListItem key={"Settings"} disablePadding>
						<ListItemButton>
							<ListItemText primary={"Settings"} />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
}
