import { MdOutlineArrowRightAlt } from "react-icons/md";
import Header from "./sectionOne/Header";
import Hand from "./sectionOne/Hand";
import hand_two_fingers from "../../images/hand_two_fingers.png";
import hand_ok from "../../images/hand_ok.png";
import Services from "./sectionTwo/Services";
import Intro from "./sectionTwo/Intro";
import GalleryNav from "./sectionThree/GalleryNav";

const HomePage = () => {
	return (
		<>
			<section className="section-one">
				<Header />
				<h1 className="hero-text">
					Let's create something great together.
				</h1>
				<button className="cta">
					Book a free call <MdOutlineArrowRightAlt />
				</button>
				<Hand
					src={hand_two_fingers}
					alt="hand-peace-sign"
					style="hand-lower-left"
				/>
				<Hand src={hand_ok} alt="hand_ok" style="hand-middle-right" />
			</section>
			<section className="section-two">
				<Services />
				<Intro />
			</section>
			<section className="section-three">
				<header>
					<h2>Our work so far</h2>
					<GalleryNav />
				</header>
			</section>
		</>
	);
};

export default HomePage;
