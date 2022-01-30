import React from "react";
import ListItem from "./ListItem";
export default function AboutList() {
	return (
		<ul className="about__list">
			<ListItem text="Best advisor company with 1000+ happy clients" />
			<ListItem text="We will grow your business in whole world" />
			<ListItem text="We will 100% money back guarantee in 30 days" />
			<ListItem text="We have a strong customer support in 24/7 days" />
		</ul>
	);
}
