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
                {/* <img src="assets/images/projects/1.PNG" alt="" /> */}
                {/* <img src="assets/images/projects/2.PNG" alt="" /> */}
                {/* <img src="assets/images/projects/3.PNG" alt="" /> */}
                <img src="assets/images/projects/4.PNG" alt="" />
                <img src="assets/images/projects/5.PNG" alt="" />
                <img src="assets/images/projects/6.png" alt="" />
                <img src="assets/images/projects/8.png" alt="" />
                <img src="assets/images/projects/9.PNG" alt="" />
                <img src="assets/images/projects/10.PNG" alt="" />
                <img src="assets/images/projects/7.png" alt="" />
                <img src="assets/images/projects/11.png" alt="" />
                {/* <img src="assets/images/projects/12.PNG" alt="" /> */}
                {/* <img src="assets/images/projects/13.PNG" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about section">
        <div className="content">
          <div className="services_page_home">
            <div className="box-container grid-40">
              <div className="box">
                <h3>Traaak</h3>
                <p>
                  Traaak is a CRM platform designed for B2B companies, focusing
                  on task and document management. It helps clients track
                  customer activities, stay organized, and ensure that important
                  tasks are never missed.
                </p>
                <p></p>
                <div class="chip">
                  <a href="https://www.traaak.com" target="_blank">
                    www.traaak.com
                  </a>
                </div>
              </div>

              <div className="box">
                <h3> E-Invoicing Solution</h3>
                <p>
                  It offers a comprehensive e-invoicing solution . It ensures
                  invoices are generated in XML format, archived as required,
                  and include QR codes and cryptographic stamps. It supports
                  real-time clearance and supports multilingual formats,
                  including Arabic and Hindi numerals
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
                <h3>Treatfair</h3>
                <p>
                  Treatfair is a comprehensive German website dedicated to
                  connecting doctors with job opportunities across Germany. It
                  features an extensive listing of clinics and medical
                  facilities, along with up-to-date news and information on
                  recent advancements in medicine within the country.
                </p>
                <div class="chip">
                  <a href="https://www.treatfair.org" target="_blank">
                    www.treatfair.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
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
