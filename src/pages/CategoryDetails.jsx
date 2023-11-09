import React, { useEffect, useState } from "react";
import MetaTitle from "../components/core/MetaTitle";
import PageBannerTitle from "../components/core/PageBannerTitle";
import { Link, useParams } from "react-router-dom";
import { categories, stories } from "../data/dummy";
import StoryItem from "../components/story/StoryItem";

function CategoryDetails() {
  const { slug } = useParams();

  const category = categories.find(
    (categoryItem) => categoryItem.slug === slug
  );

  const storyList = stories.filter((blog) => blog.category === category.title);
  console.log(storyList);
  return (
    <>
      <MetaTitle title={category.title} />
      <PageBannerTitle title={`Category : ${category.title}`} />

      <div className="py-20">
        <div>
          <div className="container">
            <div className="pb-8 ">
              <ul className="flex gap-2 justify-center">
                {categories.map((category) => (
                  <li key={category.title} className="">
                    <Link
                      to={`/categories/${category.slug}`}
                      className="bg-red-100 font-medium px-5 py-2 rounded shadow"
                    >
                      {category.title}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {storyList.map((story) => (
                <StoryItem key={story.title} item={story} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryDetails;
