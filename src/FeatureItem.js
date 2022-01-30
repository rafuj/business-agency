import { Typography } from "@mui/material";
import React from "react";

function FeatureItem({ key, title, text }) {
	return (
		<div className="feature-item" key={key}>
			<Typography variant="h5" className="subtitle">
				{title}
			</Typography>
			<Typography>{text}</Typography>
		</div>
	);
}

export default FeatureItem;
