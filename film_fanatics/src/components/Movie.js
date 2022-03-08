import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";

function Movie({title, release_date, cast, director, producer, image_URL}) {
    const [details, setDetails] = useState(true)

  //changes value of isBio on click
  const handleClick = ()=>{
    setDetails(!details)
  }
    
    
    return(
        <li className="cards__item" >
        <div className="card" onClick={handleClick}>
            <img className="card_image" alt = {title} src = {image_URL} />
            <div className="card__content">
          <div className="card__title">{title}</div>
          <p className="card__text">{details ? `director: ${director}\n producer: ${producer}` : cast}</p>
          <div className="card__detail">
            <p>release_date: {release_date}</p>
          </div>
        </div>
        </div>
        </li>
    ) 
}

export default Movie;