import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderComponent.module.css";

function SliderComponent({ arrImage }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1000,
        arrows: false, 
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {arrImage.map((img, index) => (
                    <div key={index}>
                        <a  href={img.href} ><img className={styles.imageSlider} src={img.img} alt="slider" /></a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderComponent;
