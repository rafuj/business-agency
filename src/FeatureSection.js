import React from "react";
import featureImage from "./assets/images/feature/feature.png";
import iconImage from "./assets/images/feature/featureIcon.png";
import data from "./data/feature__data.js";
import FeatureItem from "./FeatureItem";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
function FeatureSection() {
	return (
		<Section oddBg>
			<SectionHeader
				center
				cate="What Provide"
				title="What We Provide"
				text="One of our main focus is on digital item development. Mainly, developing a problem-solving product that solves human problems and some systems to operate businesse."
			/>
			<div className="feature-wrapper">
				<div className="feature-area">
					{data &&
						data
							.map((item, index) => (
								<FeatureItem
									key={index}
									title={item.title}
									text={item.text}
								/>
							))
							.filter((list, i) => i % 2 === 0)}
				</div>
				<div className="feature-thumb">
					<div
						className="thumb"
						style={{
							WebkitMask: `url(${iconImage}) no-repeat center / 100%`,
						}}
					></div>
					<img src={featureImage} alt="feature" />
				</div>
				<div className="feature-area">
					{data &&
						data
							.map((item, index) => (
								<FeatureItem
									key={index}
									title={item.title}
									text={item.text}
								/>
							))
							.filter((list, i) => i % 2 === 1)}
				</div>
			</div>
		</Section>
	);
}

export default FeatureSection;
