import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import LinkButtons from "./components/LinkButtons";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function PricingPlan() {
	return (
		<>
			<Section>
				<SectionHeader
					center
					cate="Pricing Plan"
					title="Our Campaign Packages"
					text="One of our main focus is on digital item development. Mainly, developing a problem-solving product that solves human problems and some systems to operate businesse."
				/>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={12} md={3}>
							<Typography className="plan__item">
								<div className="plan__header">
									<h5 className="plan__title">
										PR9 - DA (Domain Authority) 70+
									</h5>
									<div className="plan__header-price">
										<div className="price">
											<span className="d-block title">
												<i className="lab la-accessible-icon"></i>
											</span>
										</div>
									</div>
								</div>
								<div className="plan__body">
									<ul>
										<li>
											<i className="las la-check"></i> DA 70+ links
											typically equal the PR9
										</li>
										<li>
											<i className="las la-times"></i> TOP DA (Domain
											Authority) sites DA 70 to DA 100
										</li>
										<li>
											<i className="las la-times"></i> Mix contextual
											&amp; profiles links
										</li>
										<li>
											<i className="las la-check"></i> Minimum
											Quantity : 10
										</li>
										<li>
											<i className="las la-check"></i> Price Per
											Quantity : $1
										</li>
									</ul>
									<div className="text-center">
										<LinkButtons
											to="/"
											className="cmn__btn"
											text="order now"
										></LinkButtons>
									</div>
								</div>
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Section>
		</>
	);
}

export default PricingPlan;
