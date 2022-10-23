import { Box, CssBaseline, Toolbar, Typography, useTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import NavDrawer from './components/NavDrawer';
import LoginPage from './pages/LoginPage';

import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		contrast: Palette['primary'];
	}
	interface PaletteOptions {
		contrast: PaletteOptions['primary'];
	}
}

const mainTheme = createTheme({
	palette: {
		primary: {
			light: '#3f51b5',
			main: '#3f51b5',
		},
		secondary: {
			light: '#f50057',
			main: '#f50057',
		},
		contrast: {
			light: '#fff',
			main: '#fff',
		},
	},
});

export default function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={mainTheme}>
				<div className="app-container">
					<Box sx={{ display: 'flex', height: '100%' }}>
						<Navbar />
						<NavDrawer />
						<Routes>
							<Route path="/login" element={<LoginPage />} />
							<Route
								path="/dashboard"
								element={
									<Box
										component="main"
										sx={{ flexGrow: 1, p: 3 }}
									>
										<Toolbar />
										<Typography paragraph>
											Dashboard ya
										</Typography>
									</Box>
								}
							/>
							<Route
								path="/issues"
								element={
									<Box
										component="main"
										sx={{ flexGrow: 1, p: 3 }}
									>
										<Toolbar />
										<Typography paragraph>
											Issues
										</Typography>
									</Box>
								}
							/>
							<Route
								path="/tasks"
								element={
									<Box
										component="main"
										sx={{ flexGrow: 1, p: 3 }}
									>
										<Toolbar />
										<Typography paragraph>Tasks</Typography>
									</Box>
								}
							/>
							<Route
								path="/settings"
								element={
									<Box
										component="main"
										sx={{ flexGrow: 1, p: 3 }}
									>
										<Toolbar />
										<Typography paragraph>
											Settings
										</Typography>
									</Box>
								}
							/>
							<Route
								path="/"
								element={
									<Box
										component="main"
										sx={{ flexGrow: 1, p: 3 }}
									>
										<Toolbar />
										<Typography paragraph>
											Viewport
										</Typography>
									</Box>
								}
							/>
						</Routes>
					</Box>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}
