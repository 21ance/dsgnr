import Logo1 from "../images/clients/Logo1.png";
import Logo2 from "../images/clients/Logo2.png";
import Logo3 from "../images/clients/Logo3.png";
import Logo4 from "../images/clients/Logo4.png";
import Logo5 from "../images/clients/Logo5.png";
import Logo6 from "../images/clients/Logo6.png";
import Logo7 from "../images/clients/Logo7.png";
import Logo8 from "../images/clients/Logo8.png";

const PastClients = () => {
	return (
		<section className="past-clients">
			<Client logo={Logo1} />
			<Client logo={Logo2} />
			<Client logo={Logo3} />
			<Client logo={Logo4} />
			<Client logo={Logo5} />
			<Client logo={Logo6} />
			<Client logo={Logo7} />
			<Client logo={Logo8} />
		</section>
	);
};

const Client = (props) => {
	const { logo } = props;

	return (
		<div className="client">
			<img src={logo} alt={logo} />
		</div>
	);
};

export default PastClients;
