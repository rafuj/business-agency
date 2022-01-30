import React from "react";
import { Link } from "react-router-dom";

export default function LinkButtons({ path, text, ...rest }) {
	return (
		<Link to={path} {...rest}>
			{text}
		</Link>
	);
}
