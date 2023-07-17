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
                <h1 className="legend">Violin</h1>
                <p className="legend"><span className="text-4xl font-bold">Violin</span> <br /> <br />Violins typically feature hand-carved solid spruce or maple tops, ebony fingerboards, and tailpieces with fine tuners. The instruments are often available in various sizes to accommodate different players, such as 1/4, 1/2, 3/4, and full size</p>
            </div>
            <div>
                <img src={img2} />
                <p className="legend"><span className="text-4xl font-bold">The Parts of an acoustic guitar</span> <br /> <br />Guitar is a musical instrument with a long neck and strings. When you play the guitar, you press the strings with one hand to make a note, and strum with the other hand (unless, of course, you are playing air guitar)</p>
            </div>
            <div>
                <img src={img3} />
                <p className="legend"><span className="text-4xl font-bold">The Parts of an Piano</span> <br /> <br />Piano is a large musical instrument that you play by pressing black and white keys on a keyboard. </p>
            </div>
            <div>
                <img src={img4} />
                <p className="legend"><span className="text-4xl font-bold">The Parts of an discussed drum kit</span> <br /> <br />Two person are discussed  drum kit (also called a drum set, trap set, or simply drums) is a collection of drums, cymbals, and sometimes other auxiliary percussion instruments set up to be played by one person.</p>
            </div>
            <div>
                <img src={img5} />
                <p className="legend"><span className="text-4xl font-bold">The Parts of an Piano</span> <br /> <br />Piano is a large musical instrument that you play by pressing black and white keys on a keyboard. </p>
            </div>
        </Carousel>
    );
};

export default Banner;