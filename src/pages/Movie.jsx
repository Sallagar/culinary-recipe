import { useParams, useHistory, useRouteMatch, useLocation } from "react-router-dom/cjs/react-router-dom.min"

const Movie = () => {
    const {title} = useParams()
    const {goBack} = useHistory()
    const value = useRouteMatch()
    const value2 = useLocation()
    console.log(value)
    console.log(value2)
    return <>
        <h1>Some movie {title}</h1>
        <button className="btn blue darken-1" onClick={goBack}>Go back</button>
    </>
}

export {Movie}