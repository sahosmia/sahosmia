<<<<<<< HEAD:src/components/home/Skills.jsx
import { skills } from "../../data/dummy";
=======
import { skills } from "@/constants";
import Image from "next/image";
import FaqSide from "@/assets/img/faq2.jpg";
>>>>>>> e18b28c8793390a25c800ebf6f7743165567cfeb:components/home/Skills.jsx

const Skills = () => {
  return (
    <div className="py-10 sm:py-16 lg:py-28 relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center  gap-20">
        <div className="w-full lg:w-1/2">
<<<<<<< HEAD:src/components/home/Skills.jsx
          <img className="w-4/5 flex m-auto" src="/img/faq2.jpg" alt="" />
=======
          <Image
            className="w-4/5 flex m-auto"
            src={FaqSide}
            alt=""
            width={1000}
            height={1000}
          />
>>>>>>> e18b28c8793390a25c800ebf6f7743165567cfeb:components/home/Skills.jsx
        </div>
        <div className="w-full lg:w-2/4 ">
          <div className="w-full lg:w-4/5">
            {skills.map((skill, i) => (
              <div key={i} className="w-full pb-5">
                <div className="flex justify-between">
                  <h5 className="font-medium">{skill.title}</h5>
                  <span className="font-medium">{skill.per}</span>
                </div>
                <div className="bg-gray-200   rounded">
                  <div className=" " style={{ width: `${skill.per}` }}>
                    <div
                      className={`bg-main py-1 w-full rounded skill-bar `}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD:src/components/home/Skills.jsx
}

export default Skills
=======
};

export default Skills;
>>>>>>> e18b28c8793390a25c800ebf6f7743165567cfeb:components/home/Skills.jsx
