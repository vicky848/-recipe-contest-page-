import React, { useState } from 'react'
import recipes from '../../data.js'
import RecipeCard from '../RecipeCard'
import './index.css'
import SearchBar from '../SearchBar/index.js'
import FilterSidebar from '../FilterSidebar/index.js'
 const RecipeList = () => {

const [filteredRecipe , setFilteredRecipe] = useState(recipes)
const [sortOption, setSortOption] = useState("")


const handleSearch = (searchQuery) => {
    const filtered = recipes.filter((recipe) => 
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||  
       recipe.chef.toLowerCase().includes(searchQuery.toLowerCase()) || 
       recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) 
)
setFilteredRecipe(filtered)

}
const handleFilter = (filters) => {
    let filtered = [...recipes]; 
    if(filters.includes("contestWinner"))
        {
        filtered = filtered.filter((recipe) => 
        recipe.contestWinner)
    } 
    if (filters.includes("featured")){
        filtered = filtered.filter((recipe)=> 
         recipe.featured
        )
    }
    if (filters.includes("testKitchenApproved")){
        filtered = filtered.filter((recipe)=> 
        
        recipe.testKitchenApproved)
    }
    setFilteredRecipe(filtered)

}

 const handleSortChange = (event) => {
   const selectedSortOption = event.target.value
    setSortOption(selectedSortOption)


    const sortedRecipes = (filteredRecipe) => {
        return [...filteredRecipe].sort((a, b) => {
            switch(selectedSortOption) {
                case "newest":
                    return new Date(b.uploadedOn) - new Date(a.uploadedOn);
                case "oldest":
                    return new Date(a.uploadedOn) - new Date(b.uploadedOn);
                case   "highestRated":
                    return b.avgRating - a.avgRating;
                case "lowestRated":
                    return a.avgRating - b.avgRating; 
                    default:
                     return 0 ;
    
            }
    
        })
       
    
    }
    setFilteredRecipe(sortedRecipes)

}








  return (
    <div className='recipe-container'>
       <div>
       <h1 className = "recipe-list-heading">RECIPE</h1>

       {/* SearchBar */}

       <SearchBar 
       onSearch = {handleSearch}
       
       />

     {/* FilterSidebar  */}

       <FilterSidebar
       onFilter = {handleFilter}
       /> 

       <div className='recipe-list'>
        <h2 className='recipes-list-heading'>Recipes</h2>
        <select className='select' onChange={handleSortChange} value={sortOption}>
             <option value="">Sort by</option>
            <option value="newest">Upload Date: Newest</option>  
            <option value="oldest">Upload Date: Oldest</option>
            <option value="heighestRated">Average Rating : Highest</option>
            <option value="lowestRated">Average Rating : Lowest</option>
           
        </select>

       </div>
      
       </div>
        <ul className='recipe-list-container'>
            {
                  filteredRecipe.length > 0 ? (
                    
                filteredRecipe.map((eachRecipeItem) => (
                    <RecipeCard
                    key = {eachRecipeItem.id}
                    recipeDetails = {eachRecipeItem}
                   />
                ))

                  ):(
                    <p>No Recipe Found</p>
                  )


            }

        </ul>
        </div>
   
  )
}

export default RecipeList