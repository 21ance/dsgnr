import Img1 from "../../../images/gallery/img01.jpg";
import Img2 from "../../../images/gallery/img02.jpg";
import Img3 from "../../../images/gallery/img03.jpg";
import Img4 from "../../../images/gallery/img04.jpg";
import Img5 from "../../../images/gallery/img05.jpg";
import Img6 from "../../../images/gallery/img06.jpg";
import Img7 from "../../../images/gallery/img07.jpg";

const Gallery = (props) => {
	const { activeNav } = props;
	const allImageArray = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];
	const brandingArray = [Img2, Img3, Img4];
	const illustrationArray = [Img1, Img5];
	const productDesignArray = [Img7, Img6];
	return (
		<>
			{activeNav == "All" && <Images imageArray={allImageArray} />}
			{activeNav == "Branding" && <Images imageArray={brandingArray} />}
			{activeNav == "Illustration" && (
				<Images imageArray={illustrationArray} />
			)}
			{activeNav == "Product Design" && (
				<Images imageArray={productDesignArray} />
			)}
		</>
	);
};

const Images = (props) => {
	const { imageArray } = props;
	return (
		<article className="image-container">
			{imageArray.map((image) => {
				return <img src={image} key={image} />;
			})}
		</article>
	);
};

export default Gallery;
