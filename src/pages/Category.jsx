import { useParams } from "react-router-dom";
import { getFilteredCategories } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

const Category = () => {
    const {name} = useParams()
    const [meals, setMeals] = useState([])

    useEffect (() => {
        getFilteredCategories(name).then(data => setMeals(data.meals))
    }, [name])

    return <>
        {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
}

export {Category}