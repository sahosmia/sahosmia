import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { contacts } from "../../data/dummy";
import Image from "next/image";

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
    <section id="contact" className="py-10 sm:py-16 lg:py-28 relative">
      <Image
        src="/assets/img/(26).png"
        className=" absolute  top-20 right-0 w-40 "
        alt=""
        width={0}
        height={0}
      />
      <Image
        src="/assets/img/buble-2.png"
        className=" absolute  top-52 right-1/3 w-3"
        alt=""
        width={0}
        height={0}
      />
      <Image
        src="/assets/img/buble-2.png"
        className=" absolute  bottom-52 left-1/4 w-3"
        alt=""
        width={0}
        height={0}
      />
      <Image
        src="/assets/img/(4).png"
        className=" w-5 rotate-12 absolute  top-80 left-1/3"
        alt=""
        width={0}
        height={0}
      />
      <Image
        src="/assets/img/(24).png"
        className=" w-5 rotate-12 absolute  top-80 left-48"
        alt=""
        width={0}
        height={0}
      />
      <Image
        src="/assets/img/(4).png"
        className=" w-5 absolute  bottom-40 right-40"
        alt=""
        width={0}
        height={0}
      />

      <div className="container text-center">
        <p className="sub-title">Feel free to contact me anytimes</p>
        <h3 className="section-heading">Get in Touch</h3>
      </div>

      <div className="container flex flex-col md:flex-row gap-10 py-10">
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          {contacts.map((contact) => (
            <div
              key={contact.title}
              className="flex items-center gap-2 md:gap-5"
            >
              <span
                className={`flex justify-center items-center ${contact.color} ${contact.bg} text-md md:text-xl w-12 md:w-16   h-12 md:h-16 rounded-full`}
              >
                <i className={contact.icon}></i>
              </span>
              <div className="flex flex-col">
                <h6 className="text-md md:text-lg  font-semibold text-gray-700">
                  {contact.title}
                </h6>
                <p className="text-slate-400 break-words text-sm md:text-base">
                  {contact.val}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row justify-around w-full gap-5">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Your Name"
                  className="w-full md:w-1/2 outline outline-1 outline-slate-300 focus:outline-main focus:outline-1 rounded py-4 px-3"
                />

                <input
                  type="text"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-full md:w-1/2 outline outline-1 outline-slate-300 focus:outline-main focus:outline-1 rounded py-4 px-3"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-around w-full gap-5">
                <input
                  type="text"
                  name="user_phone"
                  placeholder="Your Phone"
                  className="w-full md:w-1/2 outline outline-1 outline-slate-300 focus:outline-main focus:outline-1 rounded py-4 px-3"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  className="w-full md:w-1/2 outline outline-1 outline-slate-300 focus:outline-main focus:outline-1 rounded py-4 px-3"
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Write Your Massage Here"
                  className="w-full outline outline-1 outline-slate-300 focus:outline-main focus:outline-1 rounded py-4 px-3"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="shadow bg-main btn text-light rounded-full px-14 py-4 w-full sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
