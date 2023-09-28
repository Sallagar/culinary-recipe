import { Meal } from "./Meal"
import {  useHistory } from 'react-router-dom';

const MealList = ({meals}) => {
    const {goBack} = useHistory()

    return <>
    <button className='btn blue darken-1' onClick={goBack}>
        Go Back
    </button>

    <div className="list">
        {meals.map((meal) => (
            <Meal key={meal.idMeal} {...meal}/>
        ))}
    </div>
    </>
}

export {MealList}