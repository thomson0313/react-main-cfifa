import React from "react";
import { Grid } from "@material-ui/core";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-top">
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <div className="links">
                <div className="links-content">
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
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={6}>
              <div className="footer-logo">
                <img src={require("../assets/logo2.png")} alt="logo" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <div className="social-medias">
                <div className="social-medias-title">Join Us</div>
                <div className="social-medias-content-1">
                  <div className="email">
                    <a
                      href="mailto:online@cfifa.finance"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={require("../assets/email.png")}
                        alt="email"
                        width="70px"
                      />
                    </a>
                  </div>
                  <div className="telegram">
                    <a
                      href="https://t.me/cfifa_official"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={require("../assets/tg_ball.png")}
                        alt="tg"
                        width="70px"
                      />
                    </a>
                  </div>
                  <div className="twitter">
                    <a
                      href="https://twitter.com/cryptofifaworld"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={require("../assets/twitter_ball.png")}
                        alt="twitter"
                        width="70px"
                      />
                    </a>
                  </div>
                </div>
                <div className="social-medias-content-2">
                  <div className="medium">
                    <a
                      href="https://cfifa.medium.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={require("../assets/medium.png")}
                        alt="medium"
                        width="70px"
                        style={{
                          border: "1px white solid",
                          borderRadius: "10px",
                        }}
                      />
                    </a>
                  </div>
                  <div className="linkedin">
                    <a
                      href="https://www.linkedin.com/company/cfifa"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={require("../assets/linkedin.png")}
                        alt="linkedin"
                        width="70px"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="footer-content-bottom">
          Copyright © Crypto FIFA World. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
