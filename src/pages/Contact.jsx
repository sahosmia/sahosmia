import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import MetaTitle from "../components/core/MetaTitle";


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yg23t95", //
        "template_n7ndesw", // template
        form.current,
        "ymg1a8iPcRXyiDkGd" //public
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("Email Sent Done! I will contact with you within 24 hours");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <MetaTitle title="Contact Page"/>
      <div className="bg-[#FAFAFA]">
        <div className="bg-none lg:bg-no-repeat lg:bg-fit lg:bg-center lg:bg-hero-pattern relative py-5 md:py-10 lg:py-20">
          <div className="container flex flex-col lg:flex-row items-center gap-10">
            <div className="bg-light p-8 m-auto w-full md:w-10/12 lg:w-9/12 rounded-3xl">
              <div className="mb-4 md:mb-8">
                <h2 className="text-[24px] md:text-[40px] font-bold md:pb-4">
                  Get in Touch with Us
                </h2>
                <p className="text-[#999999] text-sm md:text-base px-2 max-w-prose md:w-1/2">
                  We're here to assist you. Reach out to our friendly team for
                  any inquiries or support
                </p>
              </div>

              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="flex flex-col lg:flex-row gap-5 pb-5">
                    <div className="flex-1">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        name="last_name"
                        type="text"
                        placeholder="Last Name"
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-5 pb-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        name="user_email"
                        placeholder="Email"
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      />
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-5 pb-4">
                    <div className="flex-1">
                      <textarea
                        name="message"
                        type="text"
                        rows="4"
                        placeholder="Message"
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="hover:text-main inline-block  text-lg font-medium hover:bg-transparent bg-main text-light border border-main rounded-xl py-5 px-20 transition-all duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
