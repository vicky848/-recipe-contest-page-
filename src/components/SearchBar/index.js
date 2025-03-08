import React, { useState } from 'react'
import './index.css'

const SearchBar = ({onSearch}) => {

 const [searchQuery , setSearchQuery] = useState('')

    const handleSearch = (event) => {

        setSearchQuery(event.target.vale)
        onSearch(event.target.value)

    }
  return (
    <div className='search-bar'>
        <input
        type='text'
        placeholder='Search by recipe name, chef name, and description ...'
        value={searchQuery}
        onChange={handleSearch}
        className='search-item'
        />

    </div>
  )
}

export default SearchBar
