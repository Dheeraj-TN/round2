import React, { useState, useEffect } from "react";
import "./Header.css";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <a>Bali Travel Time</a>
      </div>
      <nav>
        <ul>
          {scrolled ? (
            <>
              <li>
                <a href="#" style={{ color: "black" }}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "black" }}>
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "black" }}>
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "black" }}>
                  CONTACT
                </a>
              </li>
              <button
                style={{ border: "1px solid #ea1350", color: " #ea1350" }}
                className="login-btn"
              >
                LOGIN
              </button>
            </>
          ) : (
            <>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
              <button className="login-btn">LOGIN</button>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
