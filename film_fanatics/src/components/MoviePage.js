import { useEffect, useState } from "react";
function MoviePage({movie}) {
    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    )

}

export default MoviePage;