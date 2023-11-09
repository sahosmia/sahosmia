import React from "react";
import { Link } from "react-router-dom";

function StoryItem({ item }) {
  return (
    <Link
      to={`/stories/${item.slug}`}
      className="overflow-hidden rounded-lg border max-lg:max-w-sm mx-auto hover:-translate-y-4 duration-300 hover:shadow-2xl"
    >
      <div>
        <img
          src={item.img}
          alt={item.slug}
          className="h-56 w-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between">
          <p className="font-medium text-sm mb-2 text-main text-opacity-90">
            {item.category}
          </p>
        </div>
        <h2 className="text-2xl font-bold pb-5">{item.title}</h2>
        <p className="line-clamp-3 text-gray-400 mb-2 text-sm">
          {item.descriptions[0]}
        </p>
      </div>
    </Link>
  );
}

export default StoryItem;
