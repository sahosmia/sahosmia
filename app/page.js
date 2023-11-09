import {  About,
  Contact,
  Faq,
  Hero,
  MyWork,
  ProjectTogether,
  Service,
  Skills,
  Target,
  WhyWork, } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
       <Hero />
       <Target />
       <About />
       <Skills/>
       <Service /> 
       
       <MyWork />
       <WhyWork />
       {/* 
      <Faq/>
      <ProjectTogether />
      <Contact /> */}
    </>
  )
}
