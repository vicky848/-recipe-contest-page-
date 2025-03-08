import React from 'react'
import './index.css'

const RecipeCard = (props) => {
    const {recipeDetails} = props 
    const {name,
        chef,
        totalRating,
        avgRating, 
        uploadedOn, 
        mealType,
        dishType,
        testKitchenApproved, 
        contestWinner,
        featured,
        description,
        imgUrl
        } = recipeDetails
  return (
    <li className='recipe-list-item'>
        <div className='recipe-card-container'>
            <img src = {imgUrl} alt='recipe' className='image-recipe'/>
            <div className='text-container'>
                <h2 className='recipe-name-heading'>{name}</h2>
                <p className='recipe-text'>{chef}</p>
                <p className='recipe-text'>Rating:{totalRating}</p>
                <p className='recipe-text'>{avgRating}</p>
                <p className='recipe-text'>{uploadedOn}</p>
                <p className='recipe-text'>{mealType}</p>
                <p className='recipe-text'>{dishType}</p>
                <p className='recipe-text'>{testKitchenApproved}</p>
                <p className='recipe-text'>{contestWinner}</p>
                <p className='recipe-text'>{featured}</p>
                <p className='recipe-text'>{description}</p>

            </div>

        </div>

    </li>
    

  
  )

}
export default RecipeCard