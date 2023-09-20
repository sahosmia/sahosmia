import React from 'react'

function Target() {
  return (
     <section className="py-10 sm:py-16 lg:py-20 bg-slate-100">
      <div className="container flex flex-col md:flex-row gap-2">
       
        <div
          className="flex flex-col justify-center items-center bg-light border hover:border-white border-1 border-slate-200 rounded-lg p-4 md:p-8 transition ease-in-out duration-300 shadow-sm"
        >
          <i className="fa-solid fa-bullseye pb-5 text-5xl text-main"></i>
          <h4 className="text-2xl font-semibold pb-5">Pixcel Perfect</h4>
          <p className="text-center text-slate-600">
            Lorem, ipsum dolor sit amet adipisicing elit. Delectus iusto natus
            dignissimos excepturi asperiores ab soluta vero omnis, sapiente
            dicta corrupti.
          </p>
        </div>

        
        <div
          className="flex flex-col justify-center items-center bg-light border hover:border-white border-1 border-slate-200 rounded-lg p-4 md:p-8 transition ease-in-out duration-300 shadow-sm"
        >
          <i className="fa-regular fa-sun pb-5 text-5xl text-main"></i>
          <h4 className="text-2xl font-semibold pb-5">High Quality</h4>
          <p className="text-center text-slate-600">
            Lorem, ipsum dolor sit amet adipisicing elit. Delectus iusto natus
            dignissimos excepturi asperiores ab soluta vero omnis, sapiente
            dicta corrupti.
          </p>
        </div>

        
        <div
          className="flex flex-col justify-center items-center bg-light border hover:border-white border-1 border-slate-200 rounded-lg p-4 md:p-8 transition ease-in-out duration-300 shadow-sm"
        >
          <i className="fa-regular fa-lightbulb pb-5 text-5xl text-main"></i>
          <h4 className="text-2xl font-semibold pb-5">Awesome Idea</h4>
          <p className="text-center text-slate-600">
            Lorem, ipsum dolor sit amet adipisicing elit. Delectus iusto natus
            dignissimos excepturi asperiores ab soluta vero omnis, sapiente
            dicta corrupti.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Target