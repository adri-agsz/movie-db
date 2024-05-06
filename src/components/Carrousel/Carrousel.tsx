import React from 'react'
import { MovieCard } from '../MovieCard';
import styles from "./Carrousel";

interface Movie {
    title:string;
    id:number;
    poster_path:string;
    vote_average:number;
    genre_ids:number[];

    
}

interface CarrouselProps {
    movies: Movie[];
}

const Carrousel: React.FC<CarrouselProps> = ({ movies }) => {
    return (
      
        <div className="no-scrollbar flex pb-10 gap-x-5 overflow-x-auto">

            {movies.map((movie) => (
                <MovieCard
                movieId={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                genreId={movie.genre_ids[0]}      
                />
            ))}

        </div>
    );
};

export default Carrousel
