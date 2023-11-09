import React from 'react'

function About() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 relative" id="about">
      <div className="absolute rounded-full w-5 h-5 bg-orange-300  top-64 left-40"></div>
      <div className="absolute rounded-full w-3 h-3 bg-pink-300  bottom-64 right-40"></div>
      <div className="absolute rounded border-2 border-red-600 w-10 h-10 bottom-96 right-96 -z-10"></div>
      <div className="absolute rounded-full border border-teal-600 w-6 h-6 bottom-2 right-2/3 -z-10"></div>

      <div className="container flex flex-col-reverse lg:flex-row gap-3">
        <div className="flex-1">
          <p className="sub-title">About me</p>

          <h3 className="section-heading leading-tight mb-4">
            Developer For You
          </h3>
          <p className="text-slate-600 mb-8">
            Incidunt iure laboriosam unde perferendis odit pariatur illum sunt
            aspernatur voluptas harum tempora corporis, modi ad quaerat
            inventore.
          </p>

          <div className="flex flex-wrap flex-row gap-8 mb-8">
            <div className="flex-shrink-1 flex-grow basis-[45%] w-1/2">
              <h6 className="font-bold text-base text-opacity-80">Name</h6>
              <p className="text-slate-500">Sahos Mia</p>
            </div>

            <div className="flex-shrink-1 flex-grow basis-[45%] w-1/2">
              <h6 className="font-bold text-base text-opacity-80">Location</h6>
              <p className="text-slate-500">Bangladesh</p>
            </div>

            <div className="flex-shrink-1 flex-grow basis-[45%]">
              <h6 className="font-bold text-base text-opacity-80">Phone</h6>
              <p className="text-slate-500">01952827301</p>
            </div>

            <div className="flex-shrink-1 flex-grow basis-[45%]">
              <h6 className="font-bold text-base text-opacity-80">Education</h6>
              <p className="text-slate-500">Bsc in CSE</p>
            </div>

            <div className="flex-shrink-1 flex-grow basis-[45%]">
              <h6 className="font-bold text-base text-opacity-80">Email</h6>
              <p className="text-slate-500">sahosmia.webdev@gmail.com</p>
            </div>

            <div className="flex-shrink-1 flex-grow basis-[45%]">
              <h6 className="font-bold text-base text-opacity-80">Freelance</h6>
              <p className="text-slate-500">Available</p>
            </div>
          </div>

          <button className="btn uppercase text-light py-3 px-5 rounded">
            Download CV
          </button>
        </div>

        <div className="flex-1">
          <img className="w-3/5 block m-auto" src="/img/avatar.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About