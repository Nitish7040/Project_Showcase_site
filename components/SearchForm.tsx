import { Search } from 'lucide-react';
import React from 'react';
import SearchFormReset from './SearchFormReset';

const SearchForm = ({query}  :{query? : string}) => {
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
        {query && (
         <SearchFormReset/>
        )}
        <button type="submit" className="search-btn text-white">
         
       <Search className='size-5'/>
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
