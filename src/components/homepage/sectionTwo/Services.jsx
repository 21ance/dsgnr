import IconText from "./IconText";
import codeIcon from "../../../images/services/icon-code.png";
import researchIcon from "../../../images/services/icon-research.png";
import pmIcon from "../../../images/services/icon-pm.png";
import designIcon from "../../../images/services/icon-design.png";

const Services = () => {
	return (
		<div className="services">
			<IconText
				icon={designIcon}
				iconAlt="code-icon"
				text="Exceptional design"
			/>
			<IconText
				icon={researchIcon}
				iconAlt="code-icon"
				text="In-depth research"
			/>
			<IconText
				icon={pmIcon}
				iconAlt="code-icon"
				text="Product management"
			/>
			<IconText
				icon={codeIcon}
				iconAlt="code-icon"
				text="No-code development"
			/>
		</div>
	);
};

export default Services;
