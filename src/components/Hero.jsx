import React from "react";

const Hero = () => {
  return (
    <>
      <section className="it_solution_hero_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
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
            <div className="col-lg-5">
              <ul
                className="it_solution_hero_images unordered_list"
                style={{ height: "100%" }}
              >
                <li
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    height: "100%",
                  }}
                >
                  <ul
                    className="categories unordered_list_block"
                    style={{ height: "100%" }}
                  >
                    <li>
                      <a href="/" className="cursor-text">
                        <span>Web App Development</span>
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="cursor-text">
                        <i className="fa-solid fa-plus"></i>
                        <span>Mobile App Developement</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="cursor-text">
                        <span>Custom Software Development</span>
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="cursor-text">
                        <span>Digital Marketing</span>
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="cursor-text">
                        <span>Analytics & Optamization</span>
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="cursor-text">
                        <span>UI/UX</span>
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="cursor-text">
                        <span>Data Security</span>
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
