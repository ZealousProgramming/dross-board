import React from 'react';
import {
	Box,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

interface DrawerProperties {
	width: number;
}

interface RouteButton {
	text: string;
	route: string;
}

const properties: DrawerProperties = { width: 240 };

const routeButtons: RouteButton[] = [
	{
		text: 'Dashboard',
		route: '/dashboard',
	},
	{
		text: 'Issues',
		route: '/issues',
	},
	{
		text: 'My Tasks',
		route: '/tasks',
	},
];

const settingsButton: RouteButton = {
	text: 'Settings',
	route: '/settings',
};

export default function NavDrawer() {
	const navigate = useNavigate();

	const navigateToPage = (route: string) => {
		navigate(route);
	};

	return (
		<Drawer
			variant="permanent"
			sx={{
				width: properties.width,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					width: properties.width,
					boxSizing: 'border-box',
				},
			}}
		>
			<Toolbar />
			<Box
				sx={{
					overflow: 'auto',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<List sx={{ flexGrow: 1 }}>
					{routeButtons.map((button, index) => (
						<ListItem key={button.text} disablePadding>
							<ListItemButton
								onClick={() => navigateToPage(button.route)}
							>
								<ListItemText primary={button.text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>

				<Toolbar />
				<List>
					<ListItem key={settingsButton.text} disablePadding>
						<ListItemButton
							onClick={() => navigateToPage(settingsButton.route)}
						>
							<ListItemText primary={settingsButton.text} />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
}
