import { BiCodeAlt } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { PiMonitor } from "react-icons/pi";
import { GoDatabase } from "react-icons/go";
import { TfiPaintBucket } from "react-icons/tfi";

import Portfolio1 from "/img/portfolio/protfolio-1.png";
import Portfolio2 from "/img/portfolio/protfolio-2.png";

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
    img: Portfolio1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    tecnology: ["React", "Tailwind"],
    live_url: "www.sahosmia.netlify.com",
    github: "www.github.com/sahosmia",
  },
  {
    title: "Organic Food Prossesing 2",
    slug: "organic-food-prossesing-2",
    img: Portfolio2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    tecnology: ["React", "Tailwind"],
    live_url: "www.sahosmia.netlify.com",
    github: "www.github.com/sahosmia",
  },
  {
    title: "Organic Food Prossesing 2",
    slug: "organic-food-prossesing-2",
    img: Portfolio2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tecnology: ["React", "Tailwind"],
    live_url: "www.sahosmia.netlify.com",
    github: "www.github.com/sahosmia",
  },
];

export const why_work_items = [
  {
    icon: "fa-regular fa-heart",
    title: "Life time Support",
    description: "You will get life time support for your dream project.",
  },
  {
    icon: "fa-regular fa-face-smile",
    title: "Good Communication",
    description: "I will try to give 100% for good comminication.",
  },
  {
    icon: "fa-solid fa-repeat",
    title: "Regular Update",
    description: "You will know every update on my proggress on your project.",
  },
];

export const contacts = [
  {
    title: "Location",
    val: "Chuadanga, Bangladesh",
    icon: "fa-solid fa-map",
    color: "text-[#F75023]",
    bg: "bg-[#FEDFD7]",
  },
  {
    title: "Phone",
    val: "01952827301",
    icon: "fa-solid fa-phone",
    color: "text-[#1CBE59]",
    bg: "bg-[#DDF5E6]",
  },
  {
    title: "Email",
    val: "sahosmia.webdev@gmail.com",
    icon: "fa-solid fa-envelope",
    color: "text-[#836AF0]",
    bg: "bg-[#ECE8FD]",
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
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    icon: <BiCodeAlt />,
    title: "Web Development",
    description:
      "Quaerat consectetur adipisicing elit consequatur fugiat amet? Iure.",
  },
  {
    icon: <PiMonitor />,
    title: "Single Page Application",
    description:
      "Amet consectetur adipisicing elit. Quaerat consequatur amet? Iure.",
  },
  {
    icon: <FaFigma />,
    title: "Figma Design",
    description: "Lorem ipsum dolor sit amet consequatur fugiat amet? Iure.",
  },
  {
    icon: <GoDatabase />,
    title: "Rest Api",
    description:
      "Lorem adipisicing elit. Quaerat consequatur fugiat amet? Iure.",
  },
];

export const skills = [
  { title: "Javascript", per: "70%" },
  { title: "React", per: "85%" },
  { title: "Vue Js", per: "80%" },
  { title: "Next Js", per: "70%" },
  { title: "Php", per: "80%" },
  { title: "Laravel", per: "85%" },
  { title: "Tailwind", per: "90%" },
];

export const faqItems = [
  {
    question: "How can add new project",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quia facilis mollitia provident rerum minus, ratione animi reprehenderit expedita nisi?",
  },
  {
    question: "How can add new project",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quia facilis mollitia provident rerum minus, ratione animi reprehenderit expedita nisi?",
  },
  {
    question: "How can add new project",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quia facilis mollitia provident rerum minus, ratione animi reprehenderit expedita nisi?",
  },
  {
    question: "How can add new project",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quia facilis mollitia provident rerum minus, ratione animi reprehenderit expedita nisi?",
  },
];

export const technologies = [
  { id: 1, title: "React" },
  { id: 2, title: "Vue" },
  { id: 3, title: "Next" },
  { id: 4, title: "Tailwind" },
  { id: 5, title: "Php" },
  { id: 6, title: "Laravel" },
];

export const protfolios = [
  {
    title: "Organic Food Prossesing",
    slug: "organic-food-prossesing",
    thumbnail: "/img/protfolio/protfolio-2.png",
    des: "",
    images: [""],
    liveUrl: "www.sahosmia.netlify.com",
    github: "www.github.com/sahosmia",
    tecnology: [1, 6],
    showStatus: true,
  },
  {
    title: "new",
    slug: "",
    thumbnail: "",
    des: "",
    images: [""],
    liveUrl: "",
    github: "",
    tecnology: [2, 6],
    showStatus: false,
  },
  {
    title: "new",
    slug: "",
    thumbnail: "",
    des: "",
    images: [""],
    liveUrl: "",
    github: "",
    tecnology: [5, 3],
    showStatus: false,
  },
  {
    title: "new",
    slug: "",
    thumbnail: "",
    des: "",
    images: [""],
    liveUrl: "",
    github: "",
    tecnology: [3, 6],
    showStatus: false,
  },
  {
    title: "new",
    slug: "",
    thumbnail: "",
    des: "",
    images: [""],
    liveUrl: "",
    github: "",
    tecnology: [5, 2],
    showStatus: false,
  },
  {
    title: "new",
    slug: "",
    thumbnail: "",
    des: "",
    images: [""],
    liveUrl: "",
    github: "",
    tecnology: [5, 1],
    showStatus: false,
  },
  {
    title: "new",
    slug: "",
    thumbnail: "",
    des: "",
    images: [""],
    liveUrl: "",
    github: "",
    tecnology: [4, 5],
    showStatus: false,
  },
  {
    title: "new",
    slug: "",
    thumbnail: "",
    des: "",
    images: [""],
    liveUrl: "",
    github: "",
    tecnology: [3, 2],
    showStatus: false,
  },
  {
    title: "new",
    slug: "",
    thumbnail: "",
    des: "",
    images: [""],
    liveUrl: "",
    github: "",
    tecnology: [2, 3],
    showStatus: false,
  },
  {
    title: "new",
    slug: "",
    thumbnail: "",
    des: "",
    images: [""],
    liveUrl: "",
    github: "",
    tecnology: [1, 2],
    showStatus: false,
  },
];
