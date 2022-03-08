import Movie from './Movie'
import {useEffect, useState} from 'react'

function MovieList(movies) {
    useEffect(()=>{
        fetch("http://localhost:9292/movies")
        .then(r=>r.json())
        .then(data=> console.log(data))},[])
    return <h1>movie list</h1>
}

export default MovieList;