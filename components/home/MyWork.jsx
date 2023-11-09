import { portfolios } from "@/constants";
import Image from "next/image";

function MyWork() {
  return (
    <section
      className="py-10 sm:py-16 lg:py-28  relative overflow-hidden z-10"
      id="protfolio"
    >
      <div className="container mb-5">
        <p className="sub-title">I try to satisfy client by my work</p>
        <h3 className="section-heading">My Work</h3>
      </div>

      <Image
        src="/img/shape.png"
        className=" absolute w-28 bottom-5 left-2"
        alt=""
        width={0}
        height={0}
      />

      <div className="circle absolute w-96 h-96 top-1/2 -right-60  rounded-full -translate-y-1/2 -z-10"></div>
      <div className="container grid grid-cols-1 xl:grid-cols-3 grid-rows-2 gap-8 ">
        {portfolios.map((item, index) => (
          <div
            key={index}
            className={`w-full lg:col-span-2 rounded-lg shadow-lg  mx-auto flex flex-col gap-10 max-md:max-w-sm overflow-hidden bg-light p-5 lg:p-5 ${
              index == 2
                ? "xl:row-start-1 xl:row-end-3 xl:col-start-3 xl:col-end-4 md:flex-row xl:flex-col"
                : "xl:col-span-2 items-center md:flex-row"
            }`}
          >
            <div className="flex-1">
              <Image
                className={`rounded-lg h-60 w-full block  object-cover object-center `}
                src={item.img}
                alt=""
                width={500}
                height={500}
              />
            </div>

            <div className=" flex-1 pr-10">
              <h2 className="pt-4 md:pt-0 text-xl md:text-2xl font-bold text-gray-600 line-clamp-2">
                {item.title}
                {item.title}
              </h2>
              <p className="pt-2 md:pt-4 text-gray-400 line-clamp-3 md:line-clamp-4 text-sm md:text-base">
                {item.description}
              </p>

              <div className="mt-6 md:mt-8 mb-4">
                <a
                  href="#"
                  className="px-4 py-2 bg-main hover:bg-opacity-80 duration-500 text-sm md:text-base font-medium text-light rounded inline"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyWork;
