import './App.css';
import { MovieList } from './MovieList';
import { Nav } from './Nav/Nav';
import { MovieProvider } from './MovieContext'
import { AddMovie } from './AddMovie';

export const App = () => {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}
