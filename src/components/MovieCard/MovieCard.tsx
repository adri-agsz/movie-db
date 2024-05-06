import React from 'react'
import { IMovieCard} from './types'
import { IMAGE_SOURCE } from '../../constants/moviesMock'
import genres from '../../constants/genres.json'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/constants'
import {Pill} from '../Pill'
import { IoIosStar } from "react-icons/io";

const MovieCard:React.FC<IMovieCard>  =({
    title,
    genreId,
    movieId,
    voteAverage,
    posterPath,
}) => {
    const navigate = useNavigate();

    //state

    const poster = IMAGE_SOURCE + posterPath;
    const getGenre = (genreId: number):string => {
        const key = Object.values(genres.genres).find(genre => genre.id === genreId );

        if(key){
            return key.name;
        }

        return "Not classified"
    };

    const navigateMovies = (id:number, movieName:string) => {
        navigate(`${ROUTES.SHOW}${id}`, {state: {movieName}});
    }
    //useeffects
  return (

    <div className="relative min-w-[250px] max-w-[250px] overflow-hidden shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/50"
    onClick={() => navigateMovies(movieId, title)}
    >
        <img src={poster} alt='poster' className="w-full"/>
        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end ">
            <div className="space-y-2 p-4 bg-gradient-to-t from-black">
                <Pill genre={getGenre(genreId)}></Pill>
                <p className="text-white font-semibold">{title}</p>
                
                <div className='flex items-center text-white space-x-1'>
                <IoIosStar/> 
                <p className="text-white"> {((voteAverage / 10)*100).toFixed(0)}%</p>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default MovieCard
