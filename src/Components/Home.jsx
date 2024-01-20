import React from "react";
import Header from "./Header";
import "./Home.css";
import { Fade } from "react-reveal";
function Home() {
  return (
    <div>
      <Header />
      <div className="overlay" />
      <Fade left>
        <div className="content-container">
          <div className="centered-text">
            <h2>GREAT ART OF BALI</h2>
            <p>
              Telusuri Keindahan Bali Yang <br></br>Belum Pernah Anda Temui
              Sebelumnya
            </p>
          </div>
          <div className="vacations-btn">
            <button className="home-btn" id="home-btn">
              See our vacation
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Home;
