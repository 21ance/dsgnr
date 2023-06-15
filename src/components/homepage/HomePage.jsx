import Header from "./Header";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Hand from "./Hand";
import hand_two_fingers from "../../images/hand_two_fingers.png";
import hand_ok from "../../images/hand_ok.png";

const HomePage = () => {
	return (
		<section className="section-one">
			<Header />
			<span className="hero-text">Let's create something great together.</span>
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
	);
};

export default HomePage;
