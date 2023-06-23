import SectionOne from "./sectionOne/SectionOne";
import SectionTwo from "./sectionTwo/SectionTwo";
import SectionThree from "./sectionThree/SectionThree";
import SectionFour from "./sectionFour/SectionFour";
import SectionFive from "./sectionFive/SectionFive";
import PastClients from "../PastClients";
import Footer from "../Footer";

const HomePage = () => {
	return (
		<>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<SectionFive />
			<PastClients />
			<Footer />
		</>
	);
};

export default HomePage;
