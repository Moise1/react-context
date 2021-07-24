import React,{useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = ({children}) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: '2333'
        },
        {
            name: 'Little Man',
            price: '$15',
            id: '2334'
        },
        {
            name: 'Jumanji',
            price: '$17',
            id: '2335'
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {children}
        </MovieContext.Provider>
    )
}
