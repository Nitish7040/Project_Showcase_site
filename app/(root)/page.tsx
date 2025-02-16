
import { Boxes } from 'lucide-react'
import SearchForm from '../../components/SearchForm'
import React from 'react'
import  { ThreeDCardDemo } from '../../components/ThreeDCard'

const page = () => {
  return (
   <>
    <div className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
    <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

    <Boxes />
    <h1 className="heading relative">
      Tailwind is Awesome
    </h1>
    <p className="sub-heading relative  ">
      Framer motion is the best animation library ngl
    </p>

{/* search bar form  */}

<SearchForm />


  </div>


<section className='section_container'>
  <p className='text-30-semibold'>
    Trendy Projects
  </p>
  <ul className="mt-7 card_grid grid grid-cols-1 sm:grid-cols-1 gap-1 justify-center">
  {
  [
    {'id': 1, 'title': 'Project 1', 'description': 'This is a description of project 1'},
    {'id': 2, 'title': 'Project 2', 'description': 'This is a description of project 2'},
    {'id': 3, 'title': 'Project 3', 'description': 'This is a description of project 3'}
  ].map((item, i) => (
    <li key={i} className="border p-2 w-[50%]"> 
      {item.title}
    </li>
  ))}
</ul>

<ThreeDCardDemo />

</section>
  
  
  </>
  )
}

export default page