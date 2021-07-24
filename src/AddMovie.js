import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'
import './css/addmovie.css';

export const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [, setMovies] = useContext(MovieContext);

    const updateName = e => setName(e.target.value);
    const updatePrice = e => setPrice(e.target.value);
   
    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name, price} ])
    }
   
    return (
        <form onSubmit={addMovie} className="add-movie">
            <input type="text" name="name" value={name} onChange={updateName} placeholder="New movie's name..."/>
            <input type="text" name="price" value={price} onChange={updatePrice} placeholder="New movie's price..."/>
            <button>Add Movie</button>
        </form>
    )
}
