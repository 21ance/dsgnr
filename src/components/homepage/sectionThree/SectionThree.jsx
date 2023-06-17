import GalleryNav from "./GalleryNav";
import Gallery from "./Gallery";
import { useState } from "react";

const SectionThree = () => {
	const [activeNav, setActiveNav] = useState("All");

	return (
		<section className="section-three">
			<header>
				<h2>Our work so far</h2>
				<GalleryNav activeNav={activeNav} setActiveNav={setActiveNav} />
			</header>
			<Gallery activeNav={activeNav} />
		</section>
	);
};

export default SectionThree;
