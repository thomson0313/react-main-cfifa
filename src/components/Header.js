/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={require("../assets/logo.png")} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#feature">Game Feature</a>
          <a href="#products">Products</a>
          <a href="#roadmap">Roadmap</a>
          <a
            href="https://cfifa.gitbook.io/whitepaper/"
            target="_blank"
            rel="noreferrer"
          >
            Whitepaper
          </a>
          <a
            href="https://twitter.com/cryptofifaworld"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require("../assets/twitter.png")} alt="twitter" />
          </a>
          <a
            href="https://t.me/cfifa_official"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require("../assets/tg.png")} alt="telegram" />
          </a>
          <div className="header-button">
            <a
              href="https://presale.cfifa.finance"
              target="_blank"
              rel="noreferrer"
            >
              Presale
            </a>
          </div>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <img
          src={require("../assets/menu.png")}
          alt="hamburger"
          width="100px"
        />
      </button>
    </header>
  );
}
