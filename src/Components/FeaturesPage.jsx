import "./FeaturesPage.css";
import React from "react";
import adv from "./adventurer.png";
import camping from "./camping.png";
import guide from "./guide.png";
import { Fade } from "react-reveal";
const Features = () => {
  return (
    <div>
      {/* First Part with Background Image */}
      <Fade up>
        <div className="feature-section">
          <div className="bg-image"></div>
          <div className="content" id="content">
            <h1>Bali Travel Time</h1>
            <p>
              <b>Bavel</b> merupakan singkatan dari <b>Bali Travel Time</b>{" "}
              merupakan website yang bertujuan mengenalkan pesona keindahan Bali
              mulai dari Wisata dan Budaya. Tidak hanya sarana untuk
              memperkenalkan, <b>Bavel</b> juga menyediakan berbagai layanan
              pemesanan tiket mulai tiket Tour dan tempat penginapan di sekitar
              Bali.
            </p>
          </div>
        </div>
        <Fade up>
          <div className="feature-section-2">
            <div className="feature-item">
              <img src={adv} alt="Feature 1" />
              <h2>ADVENTURE</h2>
              <p>
                Dapatkan pengalaman berpetualang yang belum pernah anda rasakan
                sebelumnya hanya di Bali
              </p>
            </div>
            <div className="feature-item">
              <img src={guide} alt="Feature 2" />
              <h2>GUIDE</h2>
              <p>
                Kami memberikan info - info seputar Bali mulai dari event dan
                destinasi terbaik
              </p>
            </div>
            <div className="feature-item">
              <img src={camping} alt="Feature 3" />
              <h2>STAY</h2>
              <p>
                Anda tidak perlu kawatir akan menetap dimana karna kami
                menyediakan tiket Hotel terbaik
              </p>
            </div>
          </div>
        </Fade>
      </Fade>
    </div>
  );
};

export default Features;
