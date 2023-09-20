import React, { useEffect, useState } from "react";
import MetaTitle from "../components/core/MetaTitle";
import PageBannerTitle from "../components/core/PageBannerTitle";
import { Link, useParams } from "react-router-dom";
import { categories, stories } from "../data/dummy";

function StoryDetails() {
  const { slug } = useParams();

    const story = stories.find((blog) => blog.slug === slug);
    

  return (
    <>
      <MetaTitle title={story.title} />
      <PageBannerTitle title={story.title} img={story.img} />

      <div className="py-20">
        <div className="container flex ">
          <div>
            <div className="text-center">
              <img
                src={story.img}
                className=" h-96 mb-10 shadow inline-block"
                alt={story.title}
              />
            </div>
            <h1 className="text-4xl font-bold pb-5 ">{story.title}</h1>
            {story.descriptions.map((item) => (
              <p key={item} className="text-gray-400 pb-5">
                {item}
              </p>
            ))}
          </div>

          <div className="w-96 ">
            <div className="bg-gray-100 rounded p-10 last:pb-0">
              <div className="pb-5">
                <h3 className="font-bold text-2xl text-neutral-800 mb-3 relative after:absolute  after:left-0 after:-bottom-2 after:w-10 after:border after:border-red-400">
                  All Story
                </h3>
                <ul>
                  {stories.map((item) => (
                    <li
                      key={item.title}
                      className="border-b-2  py-2 last:border-b-0 line-clamp-1 text-gray-500"
                    >
                      <Link to={`/stories/${item.slug}`}>{item.title} </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pb-5">
                <h3 className="font-bold text-2xl text-neutral-800 mb-3 relative after:absolute  after:left-0 after:-bottom-2 after:w-10 after:border after:border-red-400">
                  Category
                </h3>
                <ul>
                  {categories.map((category) => (
                    <li
                      key={category.title}
                      className="border-b-2 py-2 last:border-b-0 line-clamp-1 text-gray-500"
                    >
                      <Link to={`/categories/${category.slug}`}>
                        {category.title}{" "}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryDetails;
