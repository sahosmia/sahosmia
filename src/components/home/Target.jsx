import React from "react";
function Target() {
  const targets = [
    {
      icon: "fa-solid fa-bullseye",
      title: "Pixcel Perfect",
      content:
        "Lorem, ipsum dolor sit amet adipisicing elit. Delectus iusto natus dignissimos excepturi asperiores ab soluta vero omnis, sapiente dicta corrupti.",
    },
    {
      icon: "fa-solid fa-bullseye",
      title: "Pixcel Perfect",
      content:
        "Lorem, ipsum dolor sit amet adipisicing elit. Delectus iusto natus dignissimos excepturi asperiores ab soluta vero omnis, sapiente dicta corrupti.",
    },
    {
      icon: "fa-solid fa-bullseye",
      title: "Pixcel Perfect",
      content:
        "Lorem, ipsum dolor sit amet adipisicing elit. Delectus iusto natus dignissimos excepturi asperiores ab soluta vero omnis, sapiente dicta corrupti.",
    },
  ];
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-slate-100">
      <div className="container flex flex-col md:flex-row gap-2">
        {targets.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center bg-light border hover:border-white border-1 border-slate-200 rounded-lg p-4 md:p-8 transition ease-in-out duration-300 shadow-sm"
          >
            <span className=" pb-5 text-5xl text-main">
              <i className={item.icon}></i>
            </span>
            <h4 className="text-2xl font-semibold pb-5">{item.title}</h4>
            <p className="text-center text-slate-600">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Target;
