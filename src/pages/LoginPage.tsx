import {
	Box,
	Button,
	Link,
	Grid,
	Paper,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

export default function LoginPage() {
	const theme = useTheme();
	return (
		<Grid container>
			<Grid item xs={6}>
				<Toolbar />
				<Grid
					container
					rowSpacing={4}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						paddingTop: 7,
					}}
				>
					<Grid item xs={12}>
						<Typography variant="h4">Sign in</Typography>
					</Grid>

					<Grid item xs={12}>
						<TextField placeholder="Email" variant="filled" />
					</Grid>

					<Grid item xs={12}>
						<TextField placeholder="Password" variant="filled" />
					</Grid>

					<Grid item xs={12}>
						<Button variant="contained">SIGN IN</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				xs={6}
				sx={{
					backgroundColor: '#242424',
				}}
			>
				<Toolbar />
				<Grid
					container
					rowSpacing={4}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						paddingTop: 7,
					}}
				>
					<Grid item xs={12}>
						<Typography
							variant="h4"
							color={theme.palette.primary.contrastText}
						>
							Sign up
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography
							variant="subtitle1"
							color={theme.palette.primary.contrastText}
						>
							Don't have an account? Sign up for FREE
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant="outlined"
							// color="#fff"
							color="contrast"
							onClick={() => {
								alert('SIGNING UP');
							}}
						>
							SIGN UP
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
