import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import images from "./assets/images/banner/banner-bg.png";
import LinkButtons from "./components/LinkButtons";
function Banner() {
	const theme = createTheme();

	theme.typography.h2 = {
		fontSize: "1.8rem",
		"@media(min-width:600px)": {
			fontSize: "2.5rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "3.4rem",
		},
	};
	theme.typography.h5 = {
		fontSize: "1.1rem",
		"@media(min-width:600px)": {
			fontSize: "1.4rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "1.8rem",
		},
	};

	return (
		<>
			<section
				className="banner-section"
				style={{
					background: `url(${images}) no-repeat center center / cover`,
				}}
			>
				<Container
					sx={{ textAlign: "center", position: "relative", zIndex: "1" }}
				>
					<ThemeProvider theme={theme}>
						<Typography
							variant="h5"
							className="text--base"
							sx={{ mb: 2 }}
						>
							Looking For One Stop Solution Provider?
						</Typography>
						<Typography variant="h2" style={{ color: pink[50] }}>
							360 Degree Solution For Your{" "}
							<span className="text--base">Digital Business</span>
						</Typography>
					</ThemeProvider>
					<div className="btn__grp">
						<LinkButtons
							path="/about"
							className="cmn__btn"
							text="Explore Us"
						/>
						<LinkButtons
							path="/contact"
							className="cmn__btn outline"
							text="Get In Touch"
						/>
					</div>
				</Container>
			</section>
		</>
	);
}

export default Banner;
