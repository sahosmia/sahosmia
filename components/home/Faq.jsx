'use client'
import { faqItems } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const Faq = () => {
  const [isAccrodin, setIsAccrodin] = useState(0);

  const toggleAcrrodin = (i) => {
    if (isAccrodin == i) {
      setIsAccrodin(null);

      return;
    }
    setIsAccrodin(i);
  };
  return (
    <div className="py-10 sm:py-16 lg:py-28 relative">
      <div className="container flex flex-col lg:flex-row items-center  gap-20">
        <div className="w-full lg:w-2/4">
          {faqItems.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg  border w-full mb-5 overflow-hidden"
            >
              <div
                className={`flex items-center justify-between bg-white py-3 px-6 cursor-pointer  ${
                  isAccrodin == i && "border-b"
                }  `}
                onClick={() => toggleAcrrodin(i)}
              >
                <h4
                  className={`font-medium text-lg lg:text-xl  w-4/5 ${
                    isAccrodin == i ? "text-main" : "text-slate-700"
                  }`}
                >
                  {faq.question}
                </h4>
                <span
                  className={`font-medium text-xl ${
                    isAccrodin == i ? "text-main" : "text-slate-700"
                  }`}
                >
                  {isAccrodin == i ? "-" : "+"}
                </span>
              </div>
              <p
                className={`${
                  isAccrodin == i ? " block" : " hidden"
                }  py-5 px-6 text-slate-400`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-2/4">
          <Image className="w-4/5 flex m-auto" src="/assets/img/faq3.jpg" alt="" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
