import Movie from './Movie'
import {useEffect, useState} from 'react'

function MovieList() {

    const [movies, setMovies] = useState([])
    const [displayData, setDisplay] = useState(false)

    useEffect(()=>{
        fetch("http://localhost:9292/movies")
        .then(r=>r.json())
        .then(data=> setMovies(data))
    },[])
    useEffect(()=>{
        console.log(movies)
        setDisplay(
            movies.map((movie)=>{
                return <Movie title = {movie.title} release_date = {movie.release_date} cast = {movie.cast} director = {movie.director}  producer = {movie.producer} image_URL = {movie.image_URL} key = {movie.id}/> 
                                }
                        )
                    )
    }, [movies])

    

    return (
        <div>
            {displayData}
        </div>
    )
}

export default MovieList;