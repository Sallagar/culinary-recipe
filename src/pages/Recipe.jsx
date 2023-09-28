import { useParams, useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMealById } from '../api'
import { Preloader } from "../components/Preloader"

const Recipe = () => {
    const [recipe, setRecipe] = useState([])
    const {goBack} = useHistory()
    const {id} = useParams()

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [id])

    return <>
    {!recipe.idMeal ? <Preloader /> : (
        <div className="recipe">
            <h1>{recipe.strMeal}</h1>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h6>Category: {recipe.strCategory}</h6>
           {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}

            <table className="striped">
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    Object.keys(recipe).map(key => {
                        if(key.includes('Ingredient') && recipe[key]) {
                            return(
                                <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>{
                                        recipe[`strMeasure${key.slice(
                                                13
                                            )}`]
                                        }</td>
                                </tr>
                            )
                        }
                        return null
                    })
                    }
                    
                </tbody>
            </table>

            <p>{recipe.strInstructions}</p>
            {recipe.strYoutube ? (
                <div className="row">
                    <h5>Video Recipe</h5>
                    <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
                </div>
            
            ) : null}
            
        </div>
    )}
    
    <button className='btn blue darken-1' onClick={goBack}>
        Go Back
    </button>
    </>

}

export {Recipe}