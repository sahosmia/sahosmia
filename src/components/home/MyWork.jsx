import React from 'react'
import { portfolios } from '../../data/dummy';

function MyWork() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-slate-100" id="protfolio">
      <div className="container mb-5">
        <p className="sub-title">I try to satisfy client by my work</p>
        <h3 className="section-heading">My Work</h3>
      </div>

      <div className="container grid grid-cols-1 gap-5">
        {portfolios.map((item) => (
          <div
            key={item.slug}
            className=" rounded-lg shadow-lg max-md:max-w-sm mx-auto flex gap-5 items-center overflow-hidden bg-light"
          >
            <div className="w-full md:w-1/2 p-6 lg:p-12">
              <img
                className="rounded-lg h-48  w-full block md:hidden object-cover object-center"
                src={item.img}
                alt=""
              />

              <h2 className="pt-4 md:pt-0 text-xl md:text-2xl font-bold text-gray-600 max-md:line-clamp-1">
                {item.title}
              </h2>
              <p className="pt-2 md:pt-4 text-gray-400 line-clamp-3 md:line-clamp-4 text-sm md:text-base">
                {item.description}
              </p>

              <div className="mt-6 md:mt-8 mb-4">
                <a
                  href="#"
                  className="px-5 py-3 bg-main hover:bg-opacity-80 duration-500 text-sm md:text-base font-medium text-light rounded inline"
                >
                  Details
                </a>
              </div>
            </div>

            <div className=" hidden md:block md:w-1/2">
              <div className='text-right'>
                <img
                  className="inline-block h-60 lg:h-72 w-full max-w-lg mx-auto object-cover object-center"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyWork