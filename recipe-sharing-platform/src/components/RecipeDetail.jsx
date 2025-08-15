import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import recipeData from '../data.json'

const RecipeDetail = () => {
    const {id} = useParams();
    console.log('RecipeDetail loaded, ID:', id)
    const [recipe, setRecipe] = useState(null)
    
    useEffect(() => {
        console.log('Looking for recipe with ID:' , id);
    const foundRecipe = recipeData.find(recipe => recipe.id === parseInt(id));
    console.log('Founf recipe:', foundRecipe);
    setRecipe(foundRecipe);
        }, [id]);

        if (!recipe) {
        return <div>Loading...</div>
        }
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 px-4 py-6 lg:py-12 max-w-4xl">
        <div className='mb-8' >
        <img src={recipe.image} alt={recipe.title}  
        className='w-full h-64 md:h-80 lg:h-96 object-cover rounded lg shadow-lg mb-6'/>

        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>{recipe.title}</h1>
        <p className='text-lg text-grey-600 leading-relaxed'>{recipe.summary}</p>
        </div>


        <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Ingredients</h2>
        <ul className='space-y-2'>
            {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className='flex items-center text-gray-700'>
                    <span className='w- h-2'>{ingredient}</span>
                </li>
            ))}
        </ul>
        </div>

        <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Instructions</h2>
        <ol className='space-y-4'>
            {recipe.instructions.map((step, index) => (
                <li key={index} className='flex items-start text-gray-700'>
                    <span className='leading-relaxed'>{step}</span>
                </li>
            ))}
        </ol>
        </div>
    </div>
  )
}

export default RecipeDetail
