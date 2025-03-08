import React, { useState } from 'react'

import './index.css'

const FilterSidebar = ({onFilter}) => {
    const [selectedFilteres, setSelectedFilters ] = useState([])

const handleFilteredChange = (filter) => {
    let updatedFilters = [...selectedFilteres]
    if (updatedFilters.includes(filter)){
        updatedFilters = updatedFilters.filter((item) => 
        item !== filter)

    }else {
        updatedFilters.push(filter)
    }
    setSelectedFilters(updatedFilters)
    onFilter(updatedFilters)



}



const clearFilter = () => {
  setSelectedFilters([])
  onFilter([])

  // Uncheck all checkbox manually in the DOM

  document.querySelectorAll(".filter-input").forEach((checkbox)=>{
    checkbox.checked = false
  })
}



  return (
    <div className='filter-main-container'>
       <div>
       <h3 className='filter-heading'>Filter</h3>
        <div> 
        {/* use clearFilter button fa6/FaFilterCircleXmark using react-icon  */}
          <div className='clear-button'>
          
          <button className='clear-icon'  onClick={clearFilter} >x</button>

          </div>
        <div className ="form-check">
          <input  
          className='filter-input'
           type='checkbox'
            onChange={ () => handleFilteredChange  ("contentWinner")}
            value="" id="flexCheckDefault"
                />  
            <label  htmlFor="contestWinner">
             Contest Winner
            </label>
            </div>




        <div className ="form-check">
         <input 
          className='filter-input'
          type='checkbox'
          onChange={ () => handleFilteredChange ("featured")}  value="" id="flexCheckChecked" />
           <label  htmlFor="fetured">
              Featured
            </label>
         </div>


        <div className ="form-check">
         <input    className='filter-input'
            type='checkbox'
            onChange={ () => handleFilteredChange ("testKitchenApproved")}
            value="" id="testKitchenApproved" />
            <label  htmlFor="testKitchenApproved">
              Test Kitchen Approved
            </label>
               </div>
         </div>       
       </div>
           
    </div>
  )
}

export default FilterSidebar