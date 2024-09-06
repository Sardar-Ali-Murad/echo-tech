import React from "react";
import "./index.css";

const About = () => {
  return (
    <div className="home_about_wrap main-bg">
      <section className="about section" id="about">
        <h1 className="heading mb-30"> Our Recent Work Showcase</h1>
        <div className="row">
          <div className="video">
            <div className="grid_container">
              <div class="image-container">
                <img src="assets/images/projects/1.PNG" alt="" />
                <img src="assets/images/projects/2.PNG" alt="" />
                <img src="assets/images/projects/3.PNG" alt="" />
                <img src="assets/images/projects/4.PNG" alt="" />
                <img src="assets/images/projects/5.PNG" alt="" />
                <img src="assets/images/projects/6.png" alt="" />
                <img src="assets/images/projects/8.png" alt="" />
                <img src="assets/images/projects/9.PNG" alt="" />
                <img src="assets/images/projects/10.PNG" alt="" />
                <img src="assets/images/projects/7.png" alt="" />
              </div>
            </div>
          </div>
          <div className="content">
            <div>
              <h3>We will provide you the best work which you dreamt for!</h3>
              <p>
                Our dedicated team ensures top-quality results, transforming
                your ideas into reality with unmatched professionalism and care.
              </p>
              <a className="btn main-bg" href="#contact">
                <span className="btn_label" data-text="Get Started">
                  Get Started
                </span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </a>
            </div>
            <div className="services_page_home">
              <div className="box-container">
                <div className="box">
                  <h3>Treatfair</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <div class="chip">
                    <a href="https://www.treatfair.org" target="_blank">
                      www.treatfair.org
                    </a>
                  </div>
                </div>

                <div className="box">
                  <h3>Traaak</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <div class="chip">
                    <a href="https://www.traaak.com" target="_blank">
                      www.traaak.com
                    </a>
                  </div>
                </div>

                <div className="box">
                  <h3>Abilite</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <div class="chip">
                    <a
                      href="https://gofatoorah.azurewebsites.net"
                      target="_blank"
                    >
                      gofatoorah.azurewebsites.net
                    </a>
                  </div>
                </div>

                <div className="box">
                  <h3>E-Envoices</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <div class="chip">
                    <a href="https://abilite.co" target="_blank">
                      abilite.co
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <h3>4+</h3>
            <p>working since</p>
          </div>

          <div className="box">
            <h3>80+</h3>
            <p>successfull deals</p>
          </div>

          <div className="box">
            <h3>100+</h3>
            <p>satisfied customers</p>
          </div>

          <div className="box">
            <h3>30+</h3>
            <p>active developers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
