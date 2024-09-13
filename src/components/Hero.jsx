import React from "react";

const Hero = () => {
  return (
    <>
      <section className="it_solution_hero_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="it_solution_hero_content"
                style={{
                  backgroundImage:
                    "url('assets/images/shapes/it_solution_hero_bg_1.svg')",
                }}
              >
                <div className="heading_focus_text mb-0 d-inline-flex align-items-center">
                  👋 Welcome to
                  <span className="badge bg-secondary text-white">
                    Echo Technologies!
                  </span>
                </div>
                <h1>
                  Grow your business with Us, where innovative IT solutions and
                  organic growth drive your success.
                </h1>
                <p>
                  In today's competitive business, the demand for efficient and
                  cost-effective IT solutions has never been more critical.
                </p>
                <ul className="btns_group unordered_list p-0 justify-content-start">
                  <li>
                    <a className="btn" href="#contact">
                      <span className="btn_label" href="#contact">
                        Get Started
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="review_short_info">
                      <div className="d-flex">
                        <img
                          src="assets/images/icons/icon_stars_trustpilot.svg"
                          alt="Echo - Trustpilot Review"
                        />
                        <span>4.8</span>
                      </div>
                      <div className="review_counter">
                        From <b>200+</b> reviews
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
