
import { Boxes } from 'lucide-react'
import SearchForm from '../../components/SearchForm'
import React from 'react'
import  { ThreeDCardDemo } from '../../components/ThreeDCard'
import { auth } from '@/auth'
import { sanityFetch } from '@/sanity/lib/live'
import { PROJECT_QUERY } from '@/sanity/lib/queries'


export default async function Home({searchParam} : {
  searchParam: Promise<{query ? : string}>
}){
const query = (await searchParam).query;
const params ={search : query || null}
const session = await auth();
console.log(session?.id); 

const {data :posts} = await sanityFetch({query : PROJECT_QUERY, params})

return (

  <>
  <div className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
  <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

  <Boxes />
  <h1 className="heading relative">
    Welcome to Project HUb
  </h1>
  <p className="sub-heading relative  ">
  Where the hub of different Projects
  </p>

{/* search bar form  */}

<SearchForm query={query} />


</div>


<section className='section_container'>
<p className='text-30-semibold'>
  Trendy Projects
</p>
<ul className="mt-7 card_grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-1 justify-center">
{
[
  {'id': 1, 'title': 'Project 1', 'description': 'This is a description of project 1'},
  {'id': 2, 'title': 'Project 2', 'description': 'This is a description of project 2'},
  {'id': 3, 'title': 'Project 3', 'description': 'This is a description of project 3'}
].map((item, i) => (
  <ThreeDCardDemo key={item.id}/>
))}
</ul>



</section>


</>

)
}

