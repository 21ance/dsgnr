import Process from "./Process";
import ProcessImage from "../../../images/process/side_image.png";

const SectionFour = () => {
	return (
		<section className="section-four">
			<img src={ProcessImage} alt="" />
			<Process />
			<span>
				Wherever you are in your journey, we’d love to hear from you.
				<button> Book a free call</button>
			</span>
		</section>
	);
};

export default SectionFour;
