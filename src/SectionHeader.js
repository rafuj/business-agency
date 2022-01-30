import { Typography } from "@mui/material";
import React from "react";

export default function SectionHeader({ cate, title, text, center }) {
	return (
		<div className={`section__header ${center && "center"}`}>
			<Typography variant="h6" className="section__cate">
				{cate}
			</Typography>
			<Typography className="section__title" variant="h4">
				{title}
			</Typography>
			<Typography className="section__title" variant="body">
				{text}
			</Typography>
		</div>
	);
}
