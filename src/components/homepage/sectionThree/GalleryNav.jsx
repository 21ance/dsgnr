import { useState } from "react";

const GalleryNav = () => {
	const [activeNav, setActiveNav] = useState("All");

	return (
		<nav>
			<Nav
				navTitle="All"
				activeNav={activeNav}
				setActiveNav={setActiveNav}
			/>
			<Nav
				navTitle="Branding"
				activeNav={activeNav}
				setActiveNav={setActiveNav}
			/>
			<Nav
				navTitle="Illustration"
				activeNav={activeNav}
				setActiveNav={setActiveNav}
			/>
			<Nav
				navTitle="Product Design"
				activeNav={activeNav}
				setActiveNav={setActiveNav}
			/>
		</nav>
	);
};

const Nav = (props) => {
	const { navTitle, activeNav, setActiveNav } = props;
	return (
		<span
			className={activeNav === navTitle ? "active-link" : ""}
			onClick={() => setActiveNav(navTitle)}
		>
			{navTitle}
		</span>
	);
};

export default GalleryNav;
