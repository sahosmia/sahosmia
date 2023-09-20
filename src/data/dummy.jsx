import { BiCodeAlt } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { PiMonitor } from "react-icons/pi";
import { GoDatabase } from "react-icons/go";
import { TfiPaintBucket } from "react-icons/tfi";

// Menu
export const menus = [
  {
    title: "Home",
    link: "/",
  },

  {
    title: "Protfolio",
    link: "",
  },

  {
    title: "Story",
    link: "stories",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

export const portfolios = [
  {
    title: "Organic Food Prossesing",
    slug: "organic-food-prossesing",
    img: "/img/protfolio/protfolio-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et explicabo vel consequuntur quae. Corrupti hic perspiciatis unde dolore at.",
    tecnology: ["React", "Tailwind"],
    live_url: "www.sahosmia.netlify.com",
    github: "www.github.com/sahosmia",
  },
  {
    title: "Organic Food Prossesing 2",
    slug: "organic-food-prossesing-2",
    img: "/img/protfolio/protfolio-2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et explicabo vel consequuntur quae. Corrupti hic perspiciatis unde dolore at.",
    tecnology: ["React", "Tailwind"],
    live_url: "www.sahosmia.netlify.com",
    github: "www.github.com/sahosmia",
  },
];

export const why_work_items = [
  {
    icon: "fa-regular fa-heart",
    title: "Life time Support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquam placeat? Quae, in illum ratione ipsam sequi expedita doloribus molestiae?",
  },
  {
    icon: "fa-regular fa-face-smile",
    title: "Good Communication",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquam placeat? Quae, in illum ratione ipsam sequi expedita doloribus molestiae?",
  },
  {
    icon: "fa-solid fa-repeat",
    title: "Regular Update",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquam placeat? Quae, in illum ratione ipsam sequi expedita doloribus molestiae?",
  },
];

export const contacts = [
  {
    title: "Location",
    val: "Chuadanga, Bangladesh",
    icon: "fa-solid fa-map",
    color: "#F75023",
    bg: "#FEDFD7",
  },
  {
    title: "Phone",
    val: "01952827301",
    icon: "fa-solid fa-phone",
    color: "#1CBE59",
    bg: "#DDF5E6",
  },
  {
    title: "Email",
    val: "sahosmia.webdev@gmail.com",
    icon: "fa-solid fa-envelope",
    color: "#836AF0",
    bg: "#ECE8FD",
  },
];

export const socials_links = [
  { icon: "fa-brands fa-facebook-f", val: "#" },
  { icon: "fa-brands fa-linkedin-in", val: "#" },
  { icon: "fa-brands fa-twitter", val: "#" },
  { icon: "fa-brands fa-instagram", val: "#" },
  { icon: "fa-brands fa-youtube", val: "#" },
];
// Category
export const categories = [
  { id: 1, title: "Kids", slug: "kids" },
  { id: 2, title: "Animale", slug: "animmale" },
];

// Stories
export const stories = [
  {
    title: "This is Title new",
    slug: "this-is-slug",
    descriptions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem, minus quo similique ipsa totam laboriosam sequi nulla consequatur. Voluptatem?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Amet dolorem, minus quo similique ipsa totam laboriosam sequi nulla consequatur.Voluptatem ?",
    ],
    img: "/img/story/2.jpeg",
    category: "Kids",
  },
  {
    title: "This is Title",
    slug: "this-is-slug-dasf",
    descriptions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem, minus quo similique ipsa totam laboriosam sequi nulla consequatur. Voluptatem?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Amet dolorem, minus quo similique ipsa totam laboriosam sequi nulla consequatur.Voluptatem ?",
    ],
    img: "/img/story/2.jpeg",
    category: "Kids",
  },
  {
    title: "This is Title",
    slug: "this-is-slug-asee",
    descriptions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem, minus quo similique ipsa totam laboriosam sequi nulla consequatur. Voluptatem?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Amet dolorem, minus quo similique ipsa totam laboriosam sequi nulla consequatur.Voluptatem ?",
    ],
    img: "/img/story/1.jpeg",
    category: "Animale",
  },
];

// Service
export const services = [
  {
    icon: <TfiPaintBucket />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur fugiat amet? Iure.",
  },
  {
    icon: <BiCodeAlt />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur fugiat amet? Iure.",
  },
  {
    icon: <PiMonitor />,
    title: "Single Page Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur fugiat amet? Iure.",
  },
  {
    icon: <FaFigma />,
    title: "Figma Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur fugiat amet? Iure.",
  },
  {
    icon: <GoDatabase />,
    title: "Rest Api",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur fugiat amet? Iure.",
  },
];
