import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Banner";

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
