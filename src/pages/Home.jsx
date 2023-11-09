import MetaTitle from "../components/core/MetaTitle";
import Faq from "../components/home/Faq";
import Skills from "../components/home/Skills";
import { Contact, About, Hero, Target, Service, MyWork, WhyWork, ProjectTogether } from "../data/homeComponents";

function Home() {
  return (
    <>
      <MetaTitle title="Home Page" />

      <Hero />
      <Target />
      <About />
      <Skills/>
      <Service />
      <MyWork />
      <WhyWork />
      <Faq/>
      <ProjectTogether />
      <Contact />
    </>
  );
}

export default Home;
