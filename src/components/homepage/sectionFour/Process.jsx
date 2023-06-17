import iconExec from "../../../images/process/icon-exec.png";
import iconIdea from "../../../images/process/icon-idea.png";
import iconLaunch from "../../../images/process/icon-launch.png";

const Process = () => {
	return (
		<>
			<h2>A simple, yet effective three step process.</h2>
			<div className="process-container">
				<ProcessItem
					src={iconExec}
					alt={iconExec}
					processText="Idea Initiation"
					processDesc="For a start, we’ll uncover what makes you stand apart and creatively position your brand and business."
				/>
				<ProcessItem
					src={iconIdea}
					alt={iconIdea}
					processText="Execution"
					processDesc="To deliver exceptionally, we dig deep into a brand’s essence and values, clearly understand them, then inject them into the design"
				/>
				<ProcessItem
					src={iconLaunch}
					alt={iconLaunch}
					processText="Launch"
					processDesc="We provide full-service solutions to help you launch, market, and grow your business."
				/>
			</div>
		</>
	);
};

const ProcessItem = (props) => {
	const { src, alt, processText, processDesc } = props;

	return (
		<div className="process-item">
			<img src={src} alt={alt} />
			<h3>{processText}</h3>
			<p>{processDesc}</p>
		</div>
	);
};

export default Process;
