import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact_section section_space bg-light" id="contact">
        <div className="container">
          <div className="section_space pb-0">
            <div className="row justify-content-lg-between">
              <div className="col-lg-7">
                <div className="contact_form mb-0">
                  <h3 className="details_item_info_title mb-1">
                    Send Us A Message
                  </h3>
                  <p className="mb-5">
                    Give us chance to serve and bring magic to your brand.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input_title" for="input_name">
                          Full Name
                        </label>
                        <input
                          id="input_name"
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Goladra Gomaz"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input_title" for="input_email">
                          Your Email
                        </label>
                        <input
                          id="input_email"
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Echo@example.com"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="input_title" for="input_phone">
                          Your Phone
                        </label>
                        <input
                          id="input_phone"
                          className="form-control"
                          type="tel"
                          name="phone"
                          placeholder="+8250-3560 6565"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="input_title" for="input_textarea">
                          Message
                        </label>
                        <textarea
                          id="input_textarea"
                          className="form-control"
                          name="message"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        <span className="btn_label" data-text="Send Message">
                          Send Message
                        </span>
                        <span className="btn_icon">
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="gmap_canvas ps-lg-5">
                  <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
