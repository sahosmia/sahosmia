import React from "react";

import { stories } from "../data/dummy";
import MetaTitle from "../components/core/MetaTitle";
import { Link } from "react-router-dom";
import PageBannerTitle from "../components/core/PageBannerTitle";
import StoryItem from "../components/story/StoryItem";

function Story() {
  return (
    <>
      <MetaTitle title="Story Page" />

      <PageBannerTitle title="Story" />

      <div className="pb-10">
        <div>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
              {stories.map((story) => (
                <StoryItem key={story.slug} item={story} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;
