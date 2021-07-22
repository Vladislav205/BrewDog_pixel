import React from 'react';
import SearchFilter from './SearchFilters/SearchFilters';
import style from './search.module.css';
import Button from '@material-ui/core/Button';

const SearchForm = ({search, getSearch, updateSearch, updateSortABV, updateSortABVdesc, updateSortName, updateSortNamedesc}) => {
  return(
    <div className={style.header}>

      <form onSubmit={getSearch} className="search-form">
       <input
          className={style.searchbar}
          type="text"
          value={search}
          onChange={updateSearch}
       />
       <Button className={style.buttonfilter} type="submit">
         Search
       </Button>
     </form>
     <SearchFilter sortABV={updateSortABV} sortABVdesc={updateSortABVdesc} sortName={updateSortName} sortNamedesc={updateSortNamedesc}/>
    </div>
  )
}

export default SearchForm;
