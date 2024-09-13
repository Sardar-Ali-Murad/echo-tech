import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="site_footer footer_layout_1">
        <div
          className="content_box"
          style={{
            backgroundImage: "url('assets/images/shapes/bg_pattern_3.svg')",
          }}
        >
          <div className="container">
            <div className="diract_contact_links text-white">
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_mail.svg"
                    alt="Mail SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Write to us</h3>
                  <p className="mb-0">info@echotechnologies.co</p>
                </div>
              </div>
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_calling.svg"
                    alt="Calling Check SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title"> Call Us </h3>
                  <p className="mb-0">+49 176 70512348</p>
                </div>
              </div>
            </div>
            <div className="footer_main_content">
              <div className="row justify-content-lg-between">
                <div className="col-lg-3 col-md-6 col-sm-6 ">
                  <div className="footer_widget pe-md-3">
                    <h2 className="footer_info_title">Get in Touch</h2>
                    <p>
                      Have any questions or inquiries? Click the link below to
                      send us a message directly.
                    </p>

                    <ul className="social_links_block unordered_list">
                      <li>
                        <a href="mailto:afnanabid@gmail.com">Send A Message</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_info_title">Services</h3>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="icon_list_text color-light">
                          Web App Development
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_text color-light">
                          Mobile App Development
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_text color-light">
                          Custom Software Development
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_text color-light">
                          Digital Marketing
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_text color-light">
                          Analytics & Optimization
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_text color-light">
                          UI/UX
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_text color-light">
                          Data Security
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_info_title">Information</h3>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="icon_list_text color-light">
                          About Echo
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_text color-light">
                          Contact
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
