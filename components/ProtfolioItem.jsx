import React from 'react'
import { Link } from 'react-router-dom';

const ProtfolioItem = ({protfolio}) => {
  return (
    <div className=" rounded-lg bg-white shadow-xl">
      <a href="#!">
        <img
          className="rounded-t-lg"
          src={protfolio.thumbnail}
          alt=""
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
         {protfolio.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600">
         {protfolio.des}
        </p>

        <Link
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium capitalize leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 shadow bg-main"
          to={`/protfolios/${protfolio.slug}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default ProtfolioItem