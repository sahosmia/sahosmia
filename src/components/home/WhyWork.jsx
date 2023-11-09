import { why_work_items,  } from "../../data/dummy";

function WhyWork() {
  return (
    <section className="py-10 sm:py-16 lg:py-28 relative">
      <img
        src="/img/shape-2.png"
        className=" absolute w-20 top-2 right-2"
        alt=""
      />

      <div  className="container flex flex-col lg:flex-row gap-3">
        <div className="pb-48 lg:pb-20 md:mb-16 flex-1 relative after:absolute after:top-24 after:left-2 sm:after:top-40 sm:after:left-20 lg:after:top-36 lg:after:left-0 xl:after:left-20 after:w-6 sm:after:w-10 after:h-6 sm:after:h-10 before:bottom-16 before:right-10 sm:before:right-40 md:before:bottom-20 md:before:right-60 lg:before:right-10 xl:before:right-60 xl:before:bottom-5 before:w-10 before:h-10 md:before:w-20 md:before:h-20 after:bg-main after:rounded before:absolute before:rounded before:border-main before:border-4">
          <img
            className="m-auto block w-3/5 sm:w-auto"
            src="./img/1.png"
            alt=""
          />
          <img
            className="absolute w-3/5 sm:w-auto bottom-10 md:bottom-0 md:left-0"
            src="./img/2.png"
            alt=""
          />
        </div>

        <div className="flex-1">
          <p className="sub-title">Why Work With Me</p>

          <h3 className="section-heading leading-tight mb-3 md:mb-5 ">
            Best result with top user experience
          </h3>
          <p className="text-slate-400 mb-14 pr-16 leading-loose">
            Incidunt iure laboriosam unde perferendis odit pariatur illum sunt
            aspernatur voluptas harum tempora corporis, modi ad quaerat
            inventore.
          </p>

          <div className="flex flex-col gap-12">
            {why_work_items.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-3 md:gap-5">
                <div>
                  <span className="bg-main text-light w-12 md:w-16 h-12 md:h-16 flex justify-center items-center rounded-full text-xl md:text-2xl">
                    <i className={item.icon}></i>
                  </span>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl text-gray-800 font-semibold mb-1 md:mb-2">
                    {item.title}
                  </h5>
                  <p className="text-gray-400 text-sm md:text-base leading-5 md:leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default WhyWork;
