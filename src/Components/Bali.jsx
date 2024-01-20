import "./Bali.css";
import title from "./bali-island.png";
import bt from "./texture-bottom.png";
const Bali = () => {
  return (
    <div className="bali">
      <div className="image-section">
        <div className="overlay2" />
        <div className="centered-text-bali">
          <img src={title} className="title_img" alt="" />
        </div>
      </div>
      <div>
        <img src={bt} alt="" className="img2" />
      </div>
    </div>
  );
};

export default Bali;
