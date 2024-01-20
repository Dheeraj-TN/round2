import d1 from "./selfie.jpg";
import d2 from "./culture.jpg";
import d3 from "./event.jpg";
import d4 from "./stay.jpg";
import "./Discover.css";
import { Fade } from "react-reveal";
const Discover = () => {
  return (
    <div className="disc">
      <div className="title-section">
        <h1>DISCOVERY BALI</h1>
        <p>
          Adalah sebuah warisan indahnya alam dan budaya yang masih terjaga di
          Bali yang dapat anda jelajahi
        </p>
      </div>

      {/* Image Section */}
      <Fade bottom>
        <div className="image-container-discover">
          <div className="image-wrapper-disc">
            <img src={d1} alt="Image 1" />
            <h2>DESTINATION</h2>
          </div>
          <div className="image-wrapper-disc">
            <img src={d2} alt="Image 2" />
            <h2>CULTURE</h2>
          </div>
          <div className="image-wrapper-disc">
            <img src={d3} alt="Image 3" />
            <h2>EVENT</h2>
          </div>
          <div className="image-wrapper-disc">
            <img src={d4} alt="Image 4" />
            <h2>WHERE TO STAY</h2>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Discover;
