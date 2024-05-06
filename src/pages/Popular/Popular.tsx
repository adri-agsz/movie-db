import React, {useState, useEffect} from 'react'
import { MovieCard } from '../../components/MovieCard';
import {movies} from '../../constants/moviesMock';
import { Carrousel } from '../../components/Carrousel';
import { getPopular } from '../../services/movies';
import { IMovieCard } from '../../components/MovieCard/types';
import { IMovieResponse } from '../types';

const Popular: React.FC = () => {
  const [movies, setMovies] = useState<IMovieResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorOnRequest, setErrorOnRequest] = useState<boolean>();

  const getPopularMovies = async () => {
    await getPopular()
    .then((data:any) => {
      if (data && data.data) {
        setMovies(data.data.results);
      }
    })
    .catch((err:any)=> {
      console.log(err);
    });
  
  };

  useEffect(() => {
    //setIsLoading(true);
    getPopularMovies();

  }, []);
  //{isLoading && <div>Loading</div>}
  //{errorOnRequest && <div>Error...</div>}
  return (
    <div>
 

      <h2 className="text-3xl font-semibold text-stone-600 ml-6">POPULAR</h2>
      
      <div className = "flex flex-wrap p-5 gap-5">
      {movies?.map(movie => 
      (
      <MovieCard 
        movieId={movie.id}
        posterPath={movie.poster_path}
        title={movie.title}
        voteAverage={movie.vote_average}
        genreId={movie.genre_ids[0]}/>
        ))}
      </div>
      
    </div>

    
  )
}

export default Popular
