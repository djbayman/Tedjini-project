import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import bricsImg from "../assets/302047241_450081353808820_7246286999325033076_n.jpg";
import hotelImg from "../assets/2023-11-27.jpg";
import jebsImg from "../assets/shutterstock_1704977827.webp";

const Carousel = () => {
  return (
    // <div className="">
    <MDBCarousel showControls pause={false} showIndicators interval={3000} fade>
      <MDBCarouselItem itemId={1}>
        <img
          src={bricsImg}
          className="block w-full"
          style={{ height: "calc(100vh - 10vh)" }}
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          src={hotelImg}
          className="block w-full"
          style={{ height: "calc(100vh - 10vh)" }}
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          src={jebsImg}
          className="block w-full"
          style={{ height: "calc(100vh - 10vh)" }}
          alt="..."
        />
      </MDBCarouselItem>
    </MDBCarousel>
    // </div>
  );
};

export default Carousel;
