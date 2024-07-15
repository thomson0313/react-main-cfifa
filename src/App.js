import React from "react";
import { Grid } from "@material-ui/core";
import Marquee from "react-fast-marquee";
import Iframe from "react-iframe";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        <div className="Home">
          <div className="home-content container">
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div className="home-content-left">
                  <h1>
                    <div>Crypto FIFA World</div>
                    <div>The great innovation </div>
                    <div>of the FIFA</div>
                  </h1>
                  <p>
                    The birth of the great online FIFA game with more new
                    features on the cryptocurrency.
                    <br />
                    CFIFA will be our life all over the world soon !!!{" "}
                  </p>
                  <a
                    href="https://t.me/cfifa_official"
                    target="_blank"
                    rel="noreferrer"
                  >
                    JOIN US
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div className="home-content-right">
                  <div className="home-card cfifa-card">
                    <div className="cfifa-card-inner">
                      <div className="cfifa-card-front">
                        <img
                          src={require("./assets/home_1.png")}
                          alt="athlete"
                        ></img>
                      </div>
                      <div className="cfifa-card-back">
                        <div className="card-title">CFIFA NEWS</div>
                        <div className="card-content">
                          🔥 CFIFA Private Sale is Live🔥
                          <br />
                          <br />
                          CFIFA is excited to announce that its Private sale has
                          started on September 17th at 1:00 P.M. (UTC) and live
                          it now.
                          <br />
                          <a
                            href="https://presale.cfifa.finance"
                            target="_blank"
                            rel="noreferrer"
                          >
                            https://presale.cfifa.finance
                          </a>
                          <br />
                          <br />
                          💥Price: 1 BNB = 1,400,000 $CFIFA
                          <br />
                          💥Min/Max Cap: 200/500 BNB <br />
                          💥Total Amount: 700,000,000 $CFIFA
                          <br />
                          💥Min Allocation: 0.2 BNB
                          <br />
                          💥Venue: https://presale.cfifa.finance
                          <br />
                          <br />
                          Be a part of the CFIFA ecosystem. 🚀🚀 🚀🚀 🚀🚀
                        </div>
                        <div className="card-link">
                          Read this article for more information👇
                          <a
                            href="https://cfifa.medium.com/cfifa-private-sale-instruction-8b415f09b9c"
                            target="_blank"
                            rel="noreferrer"
                          >
                            https://cfifa.medium.com/cfifa-private-sale-instruction-8b415f09b9c
                          </a>
                        </div>
                        <div>
                          📣📣 CFIFA public sale will start after this private
                          sale 📣📣
                        </div>
                        <div className="card-date">
                          Date: 18th of September 2022
                        </div>
                        <div className="card-author">
                          @Updated by CFIFA & CFIFA team@
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="slider">
          <div className="maquee">
            <div className="maquee-container">
              <Marquee speed={200} gradientWidth={80}>
                <div className="maquee-body">
                  <span>
                    WELCOME TO THE CFIFA
                    <img
                      src={require("./assets/Token.png")}
                      alt="token"
                      width="150px"
                      style={{ marginLeft: "75px", marginRight: "75px" }}
                    />
                    Crypto FIFA World
                  </span>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
        <div className="about" id="about">
          <div className="about-content container">
            <Grid container>
              <Grid item xm={12} sm={12} md={6} lg={6}>
                <div className="about-content-left">
                  <h1>
                    About the <span style={{ color: "#e8d98b" }}>CFIFA</span>
                  </h1>
                  <div className="text-underline"></div>
                  <p>
                    CFIFA is the unique global online FIFA that everyone can
                    play, bet, get rewards and join the committee to earn. As
                    P2E(Play-to-Earn) and E2E(Earn-to-Earn) game with unique
                    features, The CFIFA is organized and performed by CFIFA
                    committee, both athletes and bettors can play at the same
                    time. We aim to build the global community through 8.0
                    billion over the world including the committee, athletes
                    bettors and investors.
                  </p>
                  <a
                    href="https://presale.cfifa.finance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buy CFIFA Token
                  </a>
                </div>
              </Grid>
              <Grid item xm={12} sm={12} md={6} lg={6}>
                <div className="about-content-right">
                  <img
                    src={require("./assets/home.png")}
                    alt="athlete"
                    width="100%"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="feature" id="feature">
          <div className="feature-content container">
            <div className="feature-title">
              <h1>
                CFIFA game <span style={{ color: "#e8d98b" }}>Features</span>
              </h1>
              <div className="text-underline"></div>
            </div>
            <div className="feature-body">
              <Grid container>
                <Grid item xm={12} sm={12} md={6} lg={6}>
                  <div className="feature-card cfifa-card">
                    <div className="cfifa-card-inner">
                      <div className="cfifa-card-front feature-card-front">
                        <img src={require("./assets/e2e.png")} alt="e2e"></img>
                      </div>
                      <div className="cfifa-card-back feature-card-back">
                        <div className="card-topic-img">
                          <img src={require("./assets/e2e.png")} alt="e2e" />
                        </div>
                        <div className="card-title">E2E MODEL</div>
                        <div className="card-content">
                          It is based on 2 elements one element makes incentives
                          to another one to earn much more. CFIFA committee
                          which let members can earn much more than athletes or
                          bettors provide incentives to athletes or bettors,
                          which means athletes or bettors try to earn to be a
                          committee member because committee members can raise
                          their profit much more than others(athletes/bettors).
                        </div>
                        <div
                          className="card-author"
                          style={{ marginTop: "30px" }}
                        >
                          @Updated by CFIFA & CFIFA team@
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xm={12} sm={12} md={6} lg={6}>
                  <div className="feature-card cfifa-card">
                    <div className="cfifa-card-inner">
                      <div className="cfifa-card-front feature-card-front">
                        <img
                          src={require("./assets/multi.png")}
                          alt="multi"
                        ></img>
                      </div>
                      <div className="cfifa-card-back feature-card-back">
                        <div className="card-topic-img">
                          <img src={require("./assets/multi.png")} alt="e2e" />
                        </div>
                        <div className="card-title">Multi Player</div>
                        <div className="card-content">
                          As a multiplayer game, the capacity is more than
                          10,000 members at the same time, and is supposed that
                          the max capacity will be more than 100,000 in a day
                          once the ecosystem is activated.
                        </div>
                        <div
                          className="card-author"
                          style={{ marginTop: "30px" }}
                        >
                          @Updated by CFIFA & CFIFA team@
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xm={12} sm={12} md={6} lg={6}>
                  <div className="feature-card cfifa-card">
                    <div className="cfifa-card-inner">
                      <div className="cfifa-card-front feature-card-front">
                        <img src={require("./assets/vc.jpg")} alt="e2e"></img>
                      </div>
                      <div className="cfifa-card-back feature-card-back">
                        <div className="card-topic-img">
                          <img src={require("./assets/vc.jpg")} alt="e2e" />
                        </div>
                        <div className="card-title">
                          VC (Voice Chat) Function
                        </div>
                        <div className="card-content">
                          You can keep in touch via the voice chat function
                          while taking part in the game at any time. It makes
                          you feel that you are doing it in a live atmosphere
                          and so it will be more effective for players.
                        </div>
                        <div
                          className="card-author"
                          style={{ marginTop: "30px" }}
                        >
                          @Updated by CFIFA & CFIFA team@
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xm={12} sm={12} md={6} lg={6}>
                  <div className="feature-card cfifa-card">
                    <div className="cfifa-card-inner">
                      <div className="cfifa-card-front feature-card-front">
                        <img
                          src={require("./assets/nft.png")}
                          alt="multi"
                        ></img>
                      </div>
                      <div className="cfifa-card-back feature-card-back">
                        <div className="card-topic-img">
                          <img src={require("./assets/nft.png")} alt="e2e" />
                        </div>
                        <div className="card-title">NFT accessories</div>
                        <div className="card-content">
                          All football accessories will be as NFT. Once you took
                          part in the game as an athlete(not a bettor), you will
                          gain some NFTs such as uniform, shoes, socks, and so
                          on.
                          <br />
                          <br />
                          Note: Then you can buy/trade with those NFTs in the
                          NFT marketplace which will be released further.
                        </div>
                        <div
                          className="card-author"
                          style={{ marginTop: "30px" }}
                        >
                          @Updated by CFIFA & CFIFA team@
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="presale-join">
              <div className="presale-join-title">Presale</div>
              <div className="presale-join-content">
                The CFIFA is planning to perform 2 type of presale.
                <br /> Just Private sale and Public sale.
              </div>
            </div>
            <div className="presale-join-ball">
              <img src={require("./assets/footer_ball.png")} alt="ball" />
            </div>
            <div className="presale-join-button">
              <a
                href="https://presale.cfifa.finance"
                target="_blank"
                rel="noreferrer"
              >
                Join our Presale
              </a>
            </div>
          </div>
        </div>
        <div className="products" id="products">
          <div className="products-content container">
            <div className="products-title">
              <h1>
                Our <span style={{ color: "#e8d98b" }}>Products</span>
              </h1>
              <div className="text-underline"></div>
            </div>
            <div className="products-body">
              <img
                src={require("./assets/dex.png")}
                alt="dex"
                width="300px"
                style={{ marginBottom: "-10%" }}
              />
              <img
                src={require("./assets/staking.png")}
                alt="staking"
                width="300px"
                style={{ marginBottom: "-20%" }}
              />
              <img
                src={require("./assets/nft_market.png")}
                alt="nft_market"
                width="300px"
              />
              <img
                src={require("./assets/launchpad.png")}
                alt="launchpad"
                width="300px"
                style={{ marginBottom: "-30%" }}
              />
            </div>
          </div>
        </div>
        <div className="roadmap" id="roadmap">
          <div className="roadmap-content container">
            <div className="roadmap-title">
              <h1>
                The <span style={{ color: "#e8d98b" }}>Roadmap</span>
              </h1>
              <div className="text-underline"></div>
            </div>
            <div className="roadmap-body">
              <Iframe
                url="https://cfifa.gitbook.io/whitepaper/development/roadmap"
                // src="./assets/launchpad.png"
                // width="100%"
                // height="500px"
                className="roadmap-iframe"
                display="initial"
                position="relative"
                loading="true"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
