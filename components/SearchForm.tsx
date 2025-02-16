import { Search } from 'lucide-react';
import React from 'react';

const SearchForm = () => {
  return (
    <form action="/" className="search-form relative">
      <input 
        type="text" 
        name="query" 
        defaultValue="" 
        className="search-input" 
        placeholder="Search projects" 
      />
      <div className="flex gap-2">
        {true && (
          <div>Reset</div>
        )}
        <button type="submit" className="search-btn text-white">
         
       <Search className='size-5'/>
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
