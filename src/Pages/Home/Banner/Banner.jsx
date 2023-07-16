import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../../src/assets/home/banner-1.jpg'
import img2 from '../../../../src/assets/home/banner-2.jpg'
import img3 from '../../../../src/assets/home/banner-3.jpg'
import img4 from '../../../../src/assets/home/banner-4.jpg'
import img5 from '../../../../src/assets/home/banner-5.jpg'
const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
            </Carousel>
    );
};

export default Banner;