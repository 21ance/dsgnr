import { MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<>
			<Banner />
			<footer>
				<div className="footer-info">
					<h3>dsgnr.</h3>
					<p>
						Dsgnr. is an award winning creative and design agency based in
						New York, USA.
					</p>
					<button>
						<MdEmail />
						<span>info@dsgnr.com</span>
					</button>
				</div>
				<nav className="footer-nav">
					<Nav
						title="What we do"
						items={["intro", "home", "work", "pricing", "contact us"]}
					/>
					<Nav
						title="Who we are"
						items={["about", "news", "tetimonials"]}
					/>
				</nav>
			</footer>
		</>
	);
};

const Banner = () => {
	return (
		<div className="banner">
			<h2>dsgnr.</h2>
			<span>Grow your business. Build great products</span>
			<button>Book a free call</button>
		</div>
	);
};

const Nav = (props) => {
	const { title, items } = props;
	return (
		<div className="nav-group">
			<h3>{title}</h3>
			{items.map((item) => (
				<span key={item}>{item}</span>
			))}
		</div>
	);
};

export default Footer;
