import { Container } from "@mui/material";
import React from "react";

export default function Section({ children, oddBg }) {
	return (
		<section
			style={{ padding: "120px 0" }}
			className={` ${oddBg ? " bg__section" : ""}`}
		>
			<Container>{children}</Container>
		</section>
	);
}
