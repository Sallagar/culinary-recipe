import { Link } from "react-router-dom"

const Meal = (props) => {
    const {strMeal, 
        idMeal, 
        strMealThumb
    } = props

    return <div className="card">
    <div className="card-image">
        <Link to={`/meal/${idMeal}`}>
            <img src={strMealThumb}  alt='img'/>
        </Link>
    </div>
    <div className="card-content">
        <span className="card-title">{strMeal}</span>
    </div>
    <div className='card-action'>
        <Link  className='btn blue darken-1' to={`/meal/${idMeal}`} >
            Wath recipe
        </Link>
    </div>
</div>
}

export {Meal}