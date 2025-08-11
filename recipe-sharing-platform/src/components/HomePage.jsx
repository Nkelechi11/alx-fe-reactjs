import { useEffect, useState } from "react"
import recipeData from '../data.json'

const HomePage = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        setRecipes(recipeData);
    }, []);

  return (
    <div className="container mx-auto sm:px-6 lg:px-8 px-4 py-6 lg:py-12" >
        <div classsName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap 4 md:gap-6">
            {recipes.map(recipe => (
                <div key={recipe.id} className="bg-blue rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300"> 
                    <img
                        src={recipe.image}
                        alt= {recipe.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="tex-xl text-green-500 font-semibold mb-2">{recipe.title}</h3>
                        <p className="text-gray-600">{recipe.summary}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HomePage

