import Slider from "react-slick";
import AvatarMale from "../../../images/avatar/male.png";
import AvatarFemale from "../../../images/avatar/female.png";
import QuoteLeft from "../../../images/left_quote.png";

const Testimonial = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	return (
		<Slider {...settings} className="testimonial-carousel">
			<Quote
				text="I would like to say that this experience was great. The team was very professional and answered all our questions and was committed to completing our project on time. We are happy to have worked with dsgnr. and would hire them again and would recommend them to anyone else looking for a designer and developer. They know their stuff!"
				avatar={AvatarMale}
				author="Milton Austin"
				autorTitle="Product Manager, Slack"
			/>
			<Quote
				text="Great work ethic and very reliable! Brooklyn was our logo designer. She walked us through many iterations and guided us on all aspects of the process. Very professional, will use them again soon!”"
				avatar={AvatarFemale}
				author="Jane Cooper"
				autorTitle="Co-founder, catco."
			/>

			<Quote
				text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum repellendus magni amet aut earum odio excepturi? Numquam dignissimos sunt harum doloribus voluptate eius perferendis sed ullam, consequatur rerum consequuntur impedit.
        Dolores fuga eos ullam repellendus quo dolor dicta consequatur animi? Quas magni quisquam reprehenderit tempora excepturi eos, dolor ipsum! Repellendus nesciunt maxime eaque cupiditate, iste unde suscipit at molestiae ullam."
				avatar={AvatarMale}
				author="Lorem ipsum dolor"
				autorTitle="Morbi volutpat quis"
			/>
		</Slider>
	);
};

const Quote = (props) => {
	const { text, avatar, author, autorTitle } = props;
	return (
		<div className="testimonial-quote">
			<img src={QuoteLeft} alt="quote" />
			<p>{text}</p>
			<div className="avatar">
				<img src={avatar} alt={avatar} />
				<h3>{author}</h3>
				<span>{autorTitle}</span>
			</div>
		</div>
	);
};

export default Testimonial;
