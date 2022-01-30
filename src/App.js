import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import FeatureSection from "./FeatureSection";
import PricingPlan from "./PricingPlan";

export default function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Banner />
								<About />
								<FeatureSection />
								<PricingPlan />
							</>
						}
					/>
					<Route
						path="/about"
						element={
							<>
								<Banner />
							</>
						}
					/>
					<Route
						path="/contact"
						element={
							<>
								<Banner />
							</>
						}
					/>
				</Routes>
			</Router>
		</>
	);
}
