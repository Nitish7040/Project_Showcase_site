 "use client";
import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import MDEditor from '@uiw/react-md-editor'

const ProjectForm = () => {
  return (
<>

<form action="/" 
className='project-form'>

<div>
    <label htmlFor="title" className='project-from_label'>
        Title
    </label>
    <Input
    id='title'
    name='title'
    className='project-form_input'
    required
    placeholder='Project Titile'/>
</div>

<div>
    <label htmlFor="Description" className='Project-form_label'>
        Description
    </label>
    <Textarea
    id='Description'
    name='description'
    className='project-form_textarea'
    required
    placeholder='Project Description'/>
</div>

<div>
    <label htmlFor="Category" className='Project-form_label'>
        Category
    </label>
    <Input
    id='Category'
    name='Category'
    className='project-form_input'
    required
    placeholder='Project Category'/>
</div>

<div>
    <label htmlFor="Imgurl" className='Project-form_label'>
        Img URL
    </label>
    <Input
    id='link'
    name='link'
    className='project-form_input'
    required
    placeholder='Project img url'/>
</div>

<div data-color-mode ="light">
    <label htmlFor='details' className='project-form_label'>
        Details
    </label>
    <MDEditor
    id='details'
    preview='edit'
    height={300}
    style={{borderRadius:20 , overflow:'hidden'}}
    textareaProps={{placeholder:'Describe Your Projeect in details'}}
    previewOptions={{disallowedElements:["style"]}}
    />

</div>


</form>



</>
  )
}

export default ProjectForm