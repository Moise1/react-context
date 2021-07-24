import React, { useContext } from 'react'
import './Nav.css'
import { MovieContext } from '../MovieContext';

export const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return <nav className="nav" >
        <h3>Moshe</h3>
        <p>Movies list: {movies.length} </p>
    </nav>
}