import { ThreeDCardDemo } from '@/components/ThreeDCard';
import { EvervaultCard , Icon} from '@/components/ui/evervault-card';
import React from 'react'

const page = ( {params } : {params : {id: string}}) => {
    const { id } = params;
  return (
   <>
   <section className='profile_container'>

    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col  items-center max-w-sm mx-auto p-4 relative h-[30rem] ">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text="hover" />

      <h2 className="dark:text-white text-black mt-4 text-lg font-bold text-center">
       Name Lastname
      </h2>
      <p className="text-sm border font-semibold dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 line-clamp-2 text-center pb-11 ">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores odit fuga dolorum molestiae nihil sint maiores similique officia quasi eaque velit impedit consequuntur nemo laborum minima accusamus ipsa id adipisci repellat, laboriosam assumenda? Consectetur nihil ea omnis aut dolores libero officia molestiae atque nulla fugit perferendis, amet ducimus tenetur dignissimos.
      </p>
    </div>

<div className='flex-1 flex flex-col gap-5 lg:mt-5'>
<p className='text-30-bold '>
    All Projects
</p>
 <ul className="mt-7 card_grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 justify-center">
  {
  [
    {'id': 1, 'title': 'Project 1', 'description': 'This is a description of project 1'},
    {'id': 2, 'title': 'Project 2', 'description': 'This is a description of project 2'},
    {'id': 3, 'title': 'Project 3', 'description': 'This is a description of project 3'}
  ].map((item, i) => (
    <ThreeDCardDemo key={item.id}/>
  ))}
</ul>

</div>
   </section>
   
   </>
  )
}

export default page