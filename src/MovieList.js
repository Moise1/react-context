import React, { useContext } from 'react'
import {Movie} from './Movie';
import { MovieContext } from './MovieContext';

export const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <>
            {
                movies.map(m => <Movie key={m.id} name={m.name} price={m.price} />)
            }
        </>
    )
}
