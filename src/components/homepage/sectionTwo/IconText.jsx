const IconText = (props) => {
	const { icon, iconAlt, text } = props;

	return (
		<div className="icon-text">
			<img src={icon} alt={iconAlt} />
			<span>{text}</span>
		</div>
	);
};

export default IconText;
