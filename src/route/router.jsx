import { Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

// Page
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Story from "../pages/Story";
import StoryDetails from "../pages/StoryDetails";

import Category from "../pages/Category";
import CategoryDetails from "../pages/CategoryDetails";

export default function router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="contact" element={<Contact />} />

        <Route path="stories" element={<Story />} />
        <Route path="stories/:slug" element={<StoryDetails />} />

        <Route path="categories" element={<Category />} />
        <Route path="categories/:slug" element={<CategoryDetails />} />
      </Route>
    </Routes>
  );
}
