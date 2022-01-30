import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Grid } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import Youtube from "react-youtube";
import aboutImage from "./assets/images/about/about.jpg";
import AboutList from "./components/AboutList";
import LinkButtons from "./components/LinkButtons";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
export default function About() {
	return (
		<>
			<Section>
				<Grid container columnSpacing={3} rowSpacing={5}>
					<Grid item xs={12} md={6}>
						<Youtube
							className="about__thumb"
							videoId="ydR_M0fw9Xc"
							containerClassName={"about__video"}
						>
							<div className="thumb">
								<img src={aboutImage} alt="images/about" />
								<span className="video__button">
									<PlayArrowIcon sx={{ color: red[100] }} />
								</span>
							</div>
						</Youtube>
					</Grid>
					<Grid item xs={12} md={6}>
						<div className="about__content">
							<SectionHeader
								title="What we are dedicated to support you"
								cate="About Us"
								text="Voluptatibus dolore possimus odit fugit nulla quis iure! Vitae dolor veniam, exercitationem numquam eius commodi sint perferendis consequatur ipsa maxime, obcaecati nam. Voluptatibus dolore possimus odit fugit nulla quis iure! Vitae dolor veniam, exercitationem numquam eius commodi sint perferendis consequatur ipsa maxime, obcaecati nam."
							/>
							<AboutList />
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
						</div>
					</Grid>
				</Grid>
			</Section>
		</>
	);
}
