import React, { useState } from "react";
import ProtfolioItem from "../components/ProtfolioItem";
import { protfolios, technologies } from "../data/dummy";

const Portfolio = () => {
  



  const [tabId, setTabId] = useState(0);
  const handleTab = (id) => {
    setTabId(id);
  };
  return (
    <div>
      <div className="bg-slate-800  pt-44 pb-36 rounded-b-2xl">
        <div className="container text-center">
          <h1 className="text-white font-semibold text-3xl">Profolio</h1>
        </div>
      </div>
      <div className="container py-20">
        <div className="flex items-center justify-center py-20">
          <ul className="flex  gap-5">
            <li
              onClick={() => handleTab(0)}
              className={`${
                tabId == 0 ? "text-main" : "text-white"
              } font-semibold cursor-pointer underline`}
            >
              <button type="button" className="bg-slate-800 px-4 py-2 rounded">
                All
              </button>
            </li>
            {technologies.map((technology, i) => (
              <li
                onClick={() => handleTab(technology.id)}
                key={i}
                className={`${
                  tabId == technology.id ? "text-main" : "text-white"
                } font-semibold cursor-pointer`}
              >
                <button
                  type="button"
                  className="bg-slate-800 px-4 py-2 rounded"
                >
                  {technology.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-28">
          {protfolios.map((protfolio, i) => (
            <React.Fragment key={i}>
              {(protfolio.tecnology.includes(tabId) || tabId == 0) && (
                <ProtfolioItem protfolio={protfolio} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
