import { Container, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import images from "./assets/images/banner/banner-bg.png";
function Banner() {
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
					<Typography variant="h5" className="text--base">
						Looking For One Stop Solution Provider?
					</Typography>
					<Typography variant="h2" style={{ color: pink[50] }}>
						360 Degree Solution For Your{" "}
						<span className="text--base">Digital Business</span>
					</Typography>
					<div class="btn__grp">
						<Link to="/about" class="cmn__btn">
							Explore Us
						</Link>
						<Link to="/contact" class="cmn__btn">
							Get In Touch
						</Link>
					</div>
				</Container>
			</section>
		</>
	);
}

export default Banner;
