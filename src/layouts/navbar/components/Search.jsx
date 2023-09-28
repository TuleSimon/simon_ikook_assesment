import React from 'react'
import style from './Search.module.css'
import SearchIcon from '../../../assets/icons/SearchIcon'

function SearchComponent() {
  return (
    <div className={style.Search}>

    <SearchIcon width={16} height={16} styling={style.SearchIcon}/>
      Search
    </div>
  )
}

export default SearchComponent
