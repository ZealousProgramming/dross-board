import React from 'react';
import { AppBar, Button, Toolbar, Typography, Link } from '@mui/material';

import { useNavigate } from 'react-router-dom';

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<AppBar
			position="fixed"
			sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
		>
			<Toolbar>
				<Link
					href="/"
					underline="none"
					color="inherit"
					sx={{ flexGrow: 1 }}
				>
					<Typography variant="h6" noWrap component="div">
						dross
					</Typography>
				</Link>
				<Button color="inherit" onClick={() => navigate('/login')}>
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
}
