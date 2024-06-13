import React from "react";

const App = () => {
  return (
    <div>
      <div class="page_wrapper">
        <div class="backtotop">
          <a href="#" class="scroll">
            <i class="fa-solid fa-arrow-up"></i>
          </a>
        </div>

        <header class="site_header site_header_1">
          <div class="header_top text-center">
            <div class="container"></div>
          </div>
          <div class="header_bottom stricky">
            <div class="container px-5">
              <div class="row align-items-center">
                <div class="col-xl-3 col-lg-2 col-5">
                  <div class="site_logo">
                    <a class="site_link" href="index.html">
                      <img
                        src="assets/images/site_logo/site_logo_3.png"
                        alt="Site Logo – Echo – IT Solutions & Technology, Business Consulting, Software Company Site Template"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-7 col-2">
                  <nav class="main_menu navbar navbar-expand-lg">
                    <div
                      class="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                      id="main_menu_dropdown"
                    >
                      <ul class="main_menu_list unordered_list justify-content-center">
                        <li>
                          <a href="#home">Home</a>
                        </li>
                        <li>
                          <a href="#about">About Us</a>
                        </li>

                        <li>
                          <a href="#services">Services</a>
                        </li>
                        <li>
                          <a href="#port">Portfolio </a>
                        </li>
                        <li>
                          <a href="#test">Testimonial </a>
                        </li>

                        <li>
                          <a href="#contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div class="col-xl-3 col-lg-3 col-5">
                  <ul class="header_btns_group unordered_list justify-content-end">
                    <li>
                      <button
                        class="mobile_menu_btn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#main_menu_dropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <i class="far fa-bars"></i>
                      </button>
                    </li>
                    <li>
                      <a class="btn btn-outline-light" href="#contact">
                        <span class="btn_label" href="#contact">
                          Get Started
                        </span>
                        <span class="btn_icon">
                          <i class="fa-solid fa-arrow-up-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main class="page_content" id="home">
          <section class="it_solution_hero_section">
            <div class="container">
              <div class="row">
                <div class="col-lg-7">
                  <div
                    class="it_solution_hero_content"
                    style={{
                      backgroundImage:
                        "url('assets/images/shapes/it_solution_hero_bg_1.svg')",
                    }}
                  >
                    <div class="heading_focus_text mb-0 d-inline-flex align-items-center">
                      👋 Hi We{" "}
                      <span class="badge bg-secondary text-white">
                        Are Echo
                      </span>
                    </div>
                    <h1>Grow your Business Organic & IT Solution Technology</h1>
                    <p>
                      In today's competitive business, the demand for efficient
                      and cost-effective IT solutions has never been more
                      critical.
                    </p>
                    <ul class="btns_group unordered_list p-0 justify-content-start">
                      <li>
                        <a class="btn" href="#contact">
                          <span class="btn_label" href="#contact">
                            Get Started
                          </span>
                          <span class="btn_icon">
                            <i class="fa-solid fa-arrow-up-right"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <div class="review_short_info">
                          <div class="d-flex">
                            <img
                              src="assets/images/icons/icon_stars_trustpilot.svg"
                              alt="Echo - Trustpilot Review"
                            />
                            <span>4.8</span>
                          </div>
                          <div class="review_counter">
                            From <b>200+</b> reviews
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-5">
                  <ul class="it_solution_hero_images unordered_list">
                    <li>
                      <img
                        src="assets/images/hero/it_solution_hero_image_1.webp"
                        alt="Echo - IT Solution - Hero Image 1"
                      />
                    </li>
                    <li>
                      <div class="worldwide_clients">
                        <div class="counter_value">20+</div>
                        <p>Worldwide Country has lots of clients</p>
                        <ul class="avatar_group unordered_list">
                          <li>
                            <img
                              src="assets/images/avatar/avatar_1.webp"
                              alt="Echo - Avatar Image"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/images/avatar/avatar_2.webp"
                              alt="Echo - Avatar Image"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/images/avatar/avatar_3.webp"
                              alt="Echo - Avatar Image"
                            />
                          </li>
                          <li>5k+</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <ul class="categories unordered_list_block">
                        <li>
                          <a href="#!">
                            <span>Data Security</span>
                            <i class="fa-solid fa-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i class="fa-solid fa-plus"></i>
                            <span>Web Development</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <span>Analytics & Optimization</span>
                            <i class="fa-solid fa-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div>
                        <img
                          src="assets/images/hero/it_solution_hero_image_2.webp"
                          style={{ height: "368px" }}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div id="about" class="py-5"></div>

          <section class="intro_about_section pb-5">
            <div class="container">
              <div class="heading_block mb-0">
                <div class="row justify-content-lg-between">
                  <div class="col-lg-5">
                    <div class="heading_focus_text">
                      About
                      <span class="badge bg-secondary text-white">Echo 🙂</span>
                    </div>
                    <h2 class="heading_text mb-0">
                      We Provide You Flexible Services
                    </h2>
                  </div>
                  <div class="col-lg-6">
                    <p class="heading_description mb-0">
                      At Echo, we pride ourselves on offering dynamic and IT to
                      suit your specific requirements. Our flexible approach
                      means we can adjust our offerings to accommodate your
                      evolving needs, whether you require comprehensive IT
                      infrastructure support, strategic consultancy, software
                      development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="container py-5">
              <div class="row">
                <div class="col-lg-4">
                  <div class="iconbox_block bg-light">
                    <div class="iconbox_icon">
                      <img
                        src="assets/images/icons/icon_clock.svg"
                        alt="Clock SVG Icon"
                      />
                    </div>
                    <div class="iconbox_content">
                      <h3 class="iconbox_title">Our History</h3>
                      <p class="mb-0">
                        Since 2020 we have been a visionary and a reliable
                        software engineering partner for world-class brands.
                        abbreviated as co.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="iconbox_block bg-light">
                    <div class="iconbox_icon bg-warning-subtle">
                      <img
                        src="assets/images/icons/icon_dart_board_2.svg"
                        alt="Dart Board SVG Icon"
                      />
                    </div>
                    <div class="iconbox_content">
                      <h3 class="iconbox_title">Our Mission</h3>
                      <p class="mb-0">
                        A mission statement clarifies what the company wants to
                        achieve, who they want to support, and why they want to
                        support them. On the other hand
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="iconbox_block bg-light">
                    <div class="iconbox_icon bg-secondary-subtle">
                      <img
                        src="assets/images/icons/icon_target.svg"
                        alt="Target SVG Icon"
                      />
                    </div>
                    <div class="iconbox_content">
                      <h3 class="iconbox_title">Our Vision</h3>
                      <p class="mb-0">
                        A vision statement for a company or organization focuses
                        on the potential inherent in the company's future; it's
                        about what they intend to be how you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="service_section py-5 xb-hidden pb-0" id="services">
            <div class="container">
              <div class="heading_block text-center">
                <div class="heading_focus_text">
                  Our
                  <span class="badge bg-secondary text-white">Specialize</span>
                </div>
                <h2 class="heading_text mb-0">Featured Services</h2>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="service_block">
                    <div class="service_image">
                      <img
                        src="assets/images/services/service_image_1.webp"
                        alt="IT Management Services"
                      />
                    </div>
                    <div class="service_content">
                      <h3 class="service_title">
                        <a href="#">IT Management Services</a>
                      </h3>
                      <div class="links_wrapper">
                        <ul class="category_btns_group unordered_list">
                          <li>
                            <a href="#!">Strategy</a>
                          </li>
                          <li>
                            <a href="#!">Consultation</a>
                          </li>
                        </ul>
                        <a class="icon_block" href="#">
                          <i class="fa-regular fa-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="service_block">
                    <div class="service_image">
                      <img
                        src="assets/images/services/service_image_2.webp"
                        alt="IT Management Services"
                      />
                    </div>
                    <div class="service_content">
                      <h3 class="service_title">
                        <a href="#">Data Tracking and Security</a>
                      </h3>
                      <div class="links_wrapper">
                        <ul class="category_btns_group unordered_list">
                          <li>
                            <a href="#!">Management</a>
                          </li>
                          <li>
                            <a href="#!">Transfer</a>
                          </li>
                        </ul>
                        <a class="icon_block" href="#">
                          <i class="fa-regular fa-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="service_block">
                    <div class="service_image">
                      <img
                        src="assets/images/services/service_image_3.webp"
                        alt="IT Management Services"
                      />
                    </div>
                    <div class="service_content">
                      <h3 class="service_title">
                        <a href="#">Website Development</a>
                      </h3>
                      <div class="links_wrapper">
                        <ul class="category_btns_group unordered_list">
                          <li>
                            <a href="#!">Landing Page</a>
                          </li>
                          <li>
                            <a href="#!">Plugins</a>
                          </li>
                        </ul>
                        <a class="icon_block" href="#">
                          <i class="fa-regular fa-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="service_block">
                    <div class="service_image">
                      <img
                        src="assets/images/services/service_image_4.webp"
                        alt="IT Management Services"
                      />
                    </div>
                    <div class="service_content">
                      <h3 class="service_title">
                        <a href="#">Modern Technology Solution</a>
                      </h3>
                      <div class="links_wrapper">
                        <ul class="category_btns_group unordered_list">
                          <li>
                            <a href="#!">Consultation</a>
                          </li>
                          <li>
                            <a href="#!">solution</a>
                          </li>
                        </ul>
                        <a class="icon_block" href="#">
                          <i class="fa-regular fa-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="service_block">
                    <div class="service_image">
                      <img
                        src="assets/images/services/service_image_5.webp"
                        alt="IT Management Services"
                      />
                    </div>
                    <div class="service_content">
                      <h3 class="service_title">
                        <a href="#">UI/UX Design Services</a>
                      </h3>
                      <div class="links_wrapper">
                        <ul class="category_btns_group unordered_list">
                          <li>
                            <a href="#!">Website</a>
                          </li>
                          <li>
                            <a href="#!">Mobile App</a>
                          </li>
                        </ul>
                        <a class="icon_block" href="#">
                          <i class="fa-regular fa-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="client_logo_section py-5 "
            style={{
              backgroundImage: "url('assets/images/shapes/bg_pattern_1.svg')",
            }}
          >
            <div class="container">
              <div class=" pt-0">
                <div class="heading_block text-center">
                  <div class="heading_focus_text mb-0">
                    <span class="badge bg-secondary text-white">Brand We</span>
                    Work With
                  </div>
                </div>
                <div class="client_logo_carousel swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_1.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_2.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_3.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_4.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_5.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_6.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_7.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_1.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_2.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_3.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_4.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_5.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_6.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_7.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_1.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_2.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_3.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_4.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_5.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_6.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="client_logo_item">
                        <img
                          src="assets/images/clients/client_logo_7.webp"
                          alt="Echo - Client Logo Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="about_section section_space">
            <div class="container">
              <div class="row align-items-center justify-content-lg-between">
                <div class="col-lg-6">
                  <div class="about_image_1">
                    <img
                      src="assets/images/about/about_image_9.webp"
                      alt="Echo - About Image"
                    />
                    <img
                      src="assets/images/about/about_image_11.webp"
                      data-parallax='{"y" : 80, "smoothness": 6}'
                      alt="Echo - About Image"
                    />
                    <img
                      src="assets/images/about/about_image_10.webp"
                      data-parallax='{"y" : -80, "smoothness": 6}'
                      alt="Echo - About Image"
                    />
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="about_content">
                    <div class="heading_block">
                      <div class="heading_focus_text">
                        We are 😃
                        <span class="badge bg-secondary text-white">Echo</span>
                      </div>
                      <h2 class="heading_text">
                        Our Commitment to Client Satisfaction
                      </h2>
                      <p class="heading_description mb-0">
                        At Echo, our commitment to client satisfaction is at the
                        core of everything we do. We understand clients'
                        success.
                      </p>
                    </div>
                    <ul class="icon_list unordered_list_block mb-5">
                      <li>
                        <span class="icon_list_icon">
                          <i class="fa-solid fa-circle fa-fw"></i>
                        </span>
                        <span class="icon_list_text">
                          Grow your business the right way.
                        </span>
                      </li>
                      <li>
                        <span class="icon_list_icon">
                          <i class="fa-solid fa-circle fa-fw"></i>
                        </span>
                        <span class="icon_list_text">
                          Let business growth help your business grow.
                        </span>
                      </li>
                      <li>
                        <span class="icon_list_icon">
                          <i class="fa-solid fa-circle fa-fw"></i>
                        </span>
                        <span class="icon_list_text">
                          Helping you to get better.
                        </span>
                      </li>
                    </ul>
                    <ul class="btns_group unordered_list p-0 justify-content-start">
                      <li>
                        <a class="btn" href="#contact">
                          <span class="btn_label" data-text="Get Started">
                            Get Started
                          </span>
                          <span class="btn_icon">
                            <i class="fa-solid fa-arrow-up-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="policy_section">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="iconbox_block layout_icon_left">
                    <div class="iconbox_icon">
                      <img
                        src="assets/images/icons/icon_user_check.svg"
                        alt="User Check SVG Icon"
                      />
                    </div>
                    <div class="iconbox_content">
                      <h3 class="iconbox_title">Expert Team Members</h3>
                      <p class="mb-0">
                        We take pride in assembling a <br /> diverse and highly
                        skilled.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="iconbox_block layout_icon_left">
                    <div class="iconbox_icon bg-warning-subtle">
                      <img
                        src="assets/images/icons/icon_headphone.svg"
                        alt="Headphone SVG Icon"
                      />
                    </div>
                    <div class="iconbox_content">
                      <h3 class="iconbox_title">Fastest Customer Service</h3>
                      <p class="mb-0">
                        We pride ourselves on providing the fastest customer
                        service industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="iconbox_block layout_icon_left">
                    <div class="iconbox_icon bg-secondary-subtle">
                      <img
                        src="assets/images/icons/icon_dollar.svg"
                        alt="Dollar SVG Icon"
                      />
                    </div>
                    <div class="iconbox_content">
                      <h3 class="iconbox_title">reasonable Pricing</h3>
                      <p class="mb-0">
                        We believe in providing reasonable pricing that offers
                        exceptional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="py-5" id="port"></div>

          <section class="portfolio_section xb-hidden pb-0">
            <div class="container">
              <div class="heading_block">
                <div class="row align-items-end">
                  <div class="col-lg-7">
                    <div class="heading_focus_text">
                      <span class="badge bg-secondary text-white">
                        Crafting
                      </span>
                      Success With 😍 Project
                    </div>
                    <h2 class="heading_text">Our Recent Best Works</h2>
                    <p class="heading_description mb-0">
                      Our recent projects highlight our expertise in delivering
                      tailored solutions that meet the unique needs and
                      objectives of our clients,custom software.
                    </p>
                  </div>
                  <div class="col-lg-5 d-none d-lg-flex justify-content-end">
                    {/* <!--                  <a class="btn btn-primary"href="#contact">-->
<!--                    <span class="btn_label" data-text="All Works">All Works</span>-->
<!--                    <span class="btn_icon">-->
<!--                      <i class="fa-solid fa-arrow-up-right"></i>-->
<!--                    </span>-->
<!--                  </a>--> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio_carousel">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="portfolio_block">
                    <div class="portfolio_image">
                      <a class="portfolio_image_wrap bg-light" href="#">
                        <img
                          src="assets/images/portfolio/portfolio_item_image_1.webp"
                          alt="Mobile App Design"
                        />
                      </a>
                    </div>
                    <div class="portfolio_content">
                      <h3 class="portfolio_title">
                        <a href="#">Mobile App Design</a>
                      </h3>
                      <ul class="category_list unordered_list">
                        <li>
                          <a href="portfolio.html">App Design</a>
                        </li>
                      </ul>
                      <a class="btn btn-outline-light" href="#">
                        <span class="btn_label" data-text="Explore">
                          Explore
                        </span>
                        <span class="btn_icon">
                          <i class="fa-solid fa-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="portfolio_block">
                    <div class="portfolio_image">
                      <a class="portfolio_image_wrap bg-light" href="#">
                        <img
                          src="assets/images/portfolio/portfolio_item_image_2.webp"
                          alt="Dashboard Design"
                        />
                      </a>
                    </div>
                    <div class="portfolio_content">
                      <h3 class="portfolio_title">
                        <a href="#">Dashboard Design</a>
                      </h3>
                      <ul class="category_list unordered_list">
                        <li>
                          <a href="portfolio.html">Web Design</a>
                        </li>
                      </ul>
                      <a class="btn btn-outline-light" href="#">
                        <span class="btn_label" data-text="Explore">
                          Explore
                        </span>
                        <span class="btn_icon">
                          <i class="fa-solid fa-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="portfolio_block">
                    <div class="portfolio_image">
                      <a class="portfolio_image_wrap bg-light" href="#">
                        <img
                          src="assets/images/portfolio/portfolio_item_image_3.webp"
                          alt="Technology Solution"
                        />
                      </a>
                    </div>
                    <div class="portfolio_content">
                      <h3 class="portfolio_title">
                        <a href="#">Technology Solution</a>
                      </h3>
                      <ul class="category_list unordered_list">
                        <li>
                          <a href="portfolio.html">3D Design</a>
                        </li>
                      </ul>
                      <a class="btn btn-outline-light" href="#">
                        <span class="btn_label" data-text="Explore">
                          Explore
                        </span>
                        <span class="btn_icon">
                          <i class="fa-solid fa-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="portfolio_block">
                    <div class="portfolio_image">
                      <a class="portfolio_image_wrap bg-light" href="#">
                        <img
                          src="assets/images/portfolio/portfolio_item_image_1.webp"
                          alt="Mobile App Design"
                        />
                      </a>
                    </div>
                    <div class="portfolio_content">
                      <h3 class="portfolio_title">
                        <a href="#">Mobile App Design</a>
                      </h3>
                      <ul class="category_list unordered_list">
                        <li>
                          <a href="portfolio.html">App Design</a>
                        </li>
                      </ul>
                      <a class="btn btn-outline-light" href="#">
                        <span class="btn_label" data-text="Explore">
                          Explore
                        </span>
                        <span class="btn_icon">
                          <i class="fa-solid fa-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="portfolio_block">
                    <div class="portfolio_image">
                      <a class="portfolio_image_wrap bg-light" href="#">
                        <img
                          src="assets/images/portfolio/portfolio_item_image_2.webp"
                          alt="Dashboard Design"
                        />
                      </a>
                    </div>
                    <div class="portfolio_content">
                      <h3 class="portfolio_title">
                        <a href="#">Dashboard Design</a>
                      </h3>
                      <ul class="category_list unordered_list">
                        <li>
                          <a href="portfolio.html">Web Design</a>
                        </li>
                      </ul>
                      <a class="btn btn-outline-light" href="#">
                        <span class="btn_label" data-text="Explore">
                          Explore
                        </span>
                        <span class="btn_icon">
                          <i class="fa-solid fa-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="portfolio_block">
                    <div class="portfolio_image">
                      <a class="portfolio_image_wrap bg-light" href="#">
                        <img
                          src="assets/images/portfolio/portfolio_item_image_3.webp"
                          alt="Technology Solution"
                        />
                      </a>
                    </div>
                    <div class="portfolio_content">
                      <h3 class="portfolio_title">
                        <a href="#">Technology Solution</a>
                      </h3>
                      <ul class="category_list unordered_list">
                        <li>
                          <a href="portfolio.html">3D Design</a>
                        </li>
                      </ul>
                      <a class="btn btn-outline-light" href="#">
                        <span class="btn_label" data-text="Explore">
                          Explore
                        </span>
                        <span class="btn_icon">
                          <i class="fa-solid fa-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="portfolio-swiper-pagination"></div>
            </div>
            <div class="container text-center d-block d-lg-none">
              <div class="btns_group pb-0">
                <a class="btn btn-primary" href="#contact">
                  <span class="btn_label" data-text="All Works">
                    All Works
                  </span>
                  <span class="btn_icon">
                    <i class="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <div class="py-5" id="test"></div>
          <section
            class="review_section pt-5  bg-light"
            style={{
              backgroundImage: "url('assets/images/shapes/bg_pattern_2.svg')",
            }}
          >
            <div class="container">
              <div class="heading_block text-center">
                <div class="heading_focus_text">
                  <span class="badge bg-secondary text-white">Client</span>
                  Testimonial 🙂
                </div>
                <h2 class="heading_text mb-0">What clients say</h2>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="review_block pb-0">
                    <h3 class="review_title">“Amazing services”</h3>
                    <p class="review_commtent">
                      As a startup, we needed a technology partner who could
                      help us bring our vision to life. Itsafe exceeded our
                      expectations with their innovative solutions and proactive
                      approach. They guided us through every step of the
                      process, our journey together.
                    </p>
                    <div class="review_admin">
                      <div class="review_admin_image">
                        <img
                          src="assets/images/avatar/avatar_4.webp"
                          alt="Roman Dymtro"
                        />
                      </div>
                      <div class="review_admin_info">
                        <h4 class="review_admin_name">Roman Dymtro</h4>
                        <span class="review_admin_designation">
                          Director of Marketing
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="review_block pb-0">
                    <h3 class="review_title">“Fast Respond”</h3>
                    <p class="review_commtent">
                      Working with Echo was a seamless experience from start to
                      finish. Their team took the time to understand our
                      business goals and challenges, and they delivered a
                      solution that addressed our needs perfectly. Their
                      professionalism, expertise, and dedication to customer
                      satisfaction were evident throughout the project. We look
                      forward to working with Echo on future initiatives.
                    </p>
                    <div class="review_admin">
                      <div class="review_admin_image">
                        <img
                          src="assets/images/avatar/avatar_6.webp"
                          alt="Bohdan Maksym"
                        />
                      </div>
                      <div class="review_admin_info">
                        <h4 class="review_admin_name">Bohdan Maksym</h4>
                        <span class="review_admin_designation">
                          Monprofit Director
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="review_block pb-0">
                    <h3 class="review_title">“We Are Satisfied’’</h3>
                    <p class="review_commtent">
                      We've been partnering with Echo for several years, and
                      they have consistently delivered exceptional results. From
                      custom software development to cloud services integration,
                      their solutions have helped us stay ahead of the
                      competition and adapt to evolving market demands. Their
                      team's expertise, reliability, and commitment to customer
                      satisfaction make them our go-to IT partner.
                    </p>
                    <div class="review_admin">
                      <div class="review_admin_image">
                        <img
                          src="assets/images/avatar/avatar_5.webp"
                          alt="Michel johnson"
                        />
                      </div>
                      <div class="review_admin_info">
                        <h4 class="review_admin_name">Michel johnson</h4>
                        <span class="review_admin_designation">
                          Tech Startup Founder
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="review_block pb-0">
                    <h3 class="review_title">“Amazing services”</h3>
                    <p class="review_commtent">
                      The team at Echo surpassed our expectations. Their
                      meticulous project management and technical prowess were
                      exceptional. They closely collaborated with us, ensuring a
                      that not only met but exceeded our needs. We are thrilled
                      with the outcome.
                    </p>
                    <div class="review_admin">
                      <div class="review_admin_image">
                        <img
                          src="assets/images/avatar/avatar_7.webp"
                          alt="Anatoliy Vasyl"
                        />
                      </div>
                      <div class="review_admin_info">
                        <h4 class="review_admin_name">Anatoliy Vasyl</h4>
                        <span class="review_admin_designation">
                          Director of Marketing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="contact_section section_space bg-light" id="contact">
            <div class="container">
              <div class="heading_block text-center">
                <h2 class="heading_text mb-0">Contact Us</h2>
                <div class="heading_focus_text">
                  <span class="badge bg-secondary text-white">Today</span>
                </div>
              </div>
              <div class="contact_info_box row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="iconbox_block text-center">
                    <div class="iconbox_icon">
                      <img
                        src="assets/images/icons/icon_map_mark_2.svg"
                        alt="Map Mark SVG Icon"
                      />
                    </div>
                    <div class="iconbox_content">
                      <h3 class="iconbox_title">Location</h3>
                      <p class="mb-0">lorad Address ,Germany</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="iconbox_block text-center">
                    <div class="iconbox_icon">
                      <img
                        src="assets/images/icons/icon_calling_2.svg"
                        alt="Calling SVG Icon"
                      />
                    </div>
                    <div class="iconbox_content">
                      <h3 class="iconbox_title">Contact</h3>
                      <p class="mb-0">+88(0) 555-0108</p>
                      <div class="mb-0">+88(0) 555-01117</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="iconbox_block text-center">
                    <div class="iconbox_icon">
                      <img
                        src="assets/images/icons/icon_mail_3.svg"
                        alt="User Check SVG Icon"
                      />
                    </div>
                    <div class="iconbox_content">
                      <h3 class="iconbox_title">Email</h3>
                      <p class="mb-0">Echo@example.com</p>
                      <p class="mb-0">gmail.@example.com</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="iconbox_block text-center">
                    <div class="iconbox_icon">
                      <img
                        src="assets/images/icons/icon_calendar_2.svg"
                        alt="Calendar SVG Icon"
                      />
                    </div>
                    <div class="iconbox_content">
                      <h3 class="iconbox_title">Visit Between</h3>
                      <p class="mb-0">Mon - Sat: 8.00-5.00</p>
                      <p class="mb-0">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="section_space pb-0">
                <div class="row justify-content-lg-between">
                  <div class="col-lg-7">
                    <div class="contact_form mb-0">
                      <h3 class="details_item_info_title mb-1">
                        Send Us A Message
                      </h3>
                      <p class="mb-5">
                        Give us chance to serve and bring magic to your brand.
                      </p>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="input_title" for="input_name">
                              Full Name
                            </label>
                            <input
                              id="input_name"
                              class="form-control"
                              type="text"
                              name="name"
                              placeholder="Goladra Gomaz"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="input_title" for="input_email">
                              Your Email
                            </label>
                            <input
                              id="input_email"
                              class="form-control"
                              type="email"
                              name="email"
                              placeholder="Echo@example.com"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group">
                            <label class="input_title" for="input_phone">
                              Your Phone
                            </label>
                            <input
                              id="input_phone"
                              class="form-control"
                              type="tel"
                              name="phone"
                              placeholder="+8250-3560 6565"
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group">
                            <label class="input_title" for="input_textarea">
                              Message
                            </label>
                            <textarea
                              id="input_textarea"
                              class="form-control"
                              name="message"
                              placeholder="How can we help you?"
                            ></textarea>
                          </div>
                          <button type="submit" class="btn btn-primary">
                            <span class="btn_label" data-text="Send Message">
                              Send Message
                            </span>
                            <span class="btn_icon">
                              <i class="fa-solid fa-arrow-up-right"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-5">
                    <div class="gmap_canvas ps-lg-5">
                      <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            class="calltoaction_section parallaxie"
            style={{
              backgroundImage:
                "url('assets/images/backgrounds/bg_image_1.webp')",
            }}
          >
            <div class="container text-center">
              <div class="heading_block text-white">
                <h2 class="heading_text">Ready to Work, Let's Chat</h2>
                <p class="heading_description mb-0">
                  Our team of experts is ready to collaborate with you every
                  step of the way, from initial consultation to implementation.
                </p>
              </div>
              <a class="btn btn-primary" href="#contact">
                <span class="btn_label" data-text="Contact Us Today!">
                  Contact Us Today!
                </span>
                <span class="btn_icon">
                  <i class="fa-solid fa-arrow-up-right"></i>
                </span>
              </a>
            </div>
          </section>
        </main>

        <footer class="site_footer footer_layout_1">
          <div
            class="content_box"
            style={{
              backgroundImage: "url('assets/images/shapes/bg_pattern_3.svg')",
            }}
          >
            <div class="container">
              <div class="diract_contact_links text-white">
                <div class="iconbox_block layout_icon_left">
                  <div class="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_mail.svg"
                      alt="Mail SVG Icon"
                    />
                  </div>
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">Write to us</h3>
                    <p class="mb-0">Echo@gmail.com</p>
                  </div>
                </div>
                <div class="iconbox_block layout_icon_left">
                  <div class="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_calling.svg"
                      alt="Calling Check SVG Icon"
                    />
                  </div>
                  <div class="iconbox_content">
                    <h3 class="iconbox_title"> Call Us </h3>
                    <p class="mb-0">+(1) 1230 452 8597</p>
                  </div>
                </div>
                <div class="iconbox_block layout_icon_left">
                  <div class="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_map_mark.svg"
                      alt="Map Mark Check SVG Icon"
                    />
                  </div>
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">Our Office</h3>
                    <p class="mb-0">Random Address,Germany</p>
                  </div>
                </div>
              </div>
              <div class="footer_main_content">
                <div class="row justify-content-lg-between">
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="footer_widget pe-md-3">
                      <h2 class="footer_info_title">Newsletter</h2>
                      <p>
                        Sign up to Echo weekly newsletter to get the latest
                        updates.
                      </p>
                      <form class="footer_newslatter" action="#">
                        <label for="footer_mail_input">
                          <img
                            src="assets/images/icons/icon_mail_2.svg"
                            alt="Mail SVG Icon"
                          />
                        </label>
                        <input
                          id="footer_mail_input"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                        <button type="submit">
                          <i class="fa-solid fa-paper-plane"></i>
                        </button>
                      </form>
                      <ul class="social_links_block unordered_list">
                        <li>
                          <a href="#!">Facebook</a>
                        </li>
                        <li>
                          <a href="#!">Twitter</a>
                        </li>
                        <li>
                          <a href="#!">Linkdin</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="footer_widget">
                      <h3 class="footer_info_title">Services</h3>
                      <ul class="icon_list unordered_list_block">
                        <li>
                          <a href="#!">
                            <span class="icon_list_text">IT Consultation</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <span class="icon_list_text">Cloud Services</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <span class="icon_list_text">
                              AI Machine Learning
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <span class="icon_list_text">Data Security</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <span class="icon_list_text">
                              Software Development
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <span class="icon_list_text">Cyber Security</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="footer_widget">
                      <h3 class="footer_info_title">Information</h3>
                      <ul class="icon_list unordered_list_block">
                        <li>
                          <a href="#about">
                            <span class="icon_list_text">About Echo</span>
                          </a>
                        </li>
                        <li>
                          <a href="#contact">
                            <span class="icon_list_text">Contact</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer_bottom">
            <div class="container d-md-flex align-items-md-center justify-content-md-between">
              <p class="copyright_text m-0">
                Copyright © 2024 Echo, All rights reserved.
              </p>
              <p class="copyright_text m-0">
                Developed by{" "}
                <a href="https://www.behance.net/professionalD" target="_blank">
                  Inaamajay
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
