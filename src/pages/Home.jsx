import MetaTitle from "../components/core/MetaTitle";
import { Contact, About, Hero, Target, Service, MyWork, WhyWork, ProjectTogether } from "../data/homeComponents";

function Home() {
  return (
    <>
      <MetaTitle title="Home Page" />

      <Hero />
      <Target />
      <About />
      <Service />
      <MyWork />
      <WhyWork />
      <ProjectTogether />
      <Contact />
    </>
  );
}

export default Home;
