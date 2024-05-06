import React from 'react'
import { MovieCard } from '../../components/MovieCard';
import {movies} from '../../constants/moviesMock';
import {Table} from '../../components/Table';
import {calls} from '../../constants/callsMock';
import { useState, useEffect } from 'react';
import { IMovieResponse } from '../types';
import { getPopular, getNowPlaying, getTopRated } from '../../services/movies';
import { Carrousel } from '../../components/Carrousel';

const Home = () => {

  const [popularMovies, setPopularMovies] = useState<IMovieResponse[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<IMovieResponse[]>([]);
  const [nowPlayingMovies, setnowPlayingMovies] = useState<IMovieResponse[]>([]);

  const getPopularMovies = async () => {
    await getPopular()
    .then((data:any) => {
      if (data && data.data) {
        setPopularMovies(data.data.results);
      }
    })
    .catch((err:any)=> {
      console.log(err);
    });
  }

    const getTopRatedMovies = async () => {
      await getTopRated()
      .then((data:any) => {
        if (data && data.data) {
          setTopRatedMovies(data.data.results);
        }
      })
      .catch((err:any)=> {
        console.log(err);
      });
    }
    const getNowPlayingMovies = async () => {
      await getNowPlaying()
      .then((data:any) => {
        if (data && data.data) {
          setnowPlayingMovies(data.data.results);
        }
      })
      .catch((err:any)=> {
        console.log(err);
      });
    }

    useEffect(() => {
      
      getPopularMovies();
      getNowPlayingMovies();
      getTopRatedMovies();
  
    }, []);

  return (
    <div>
      
 
      
      <section className="section">
        <h2 className="text-3xl font-semibold mb-6 text-stone-600">POPULAR</h2>
        <Carrousel movies={popularMovies.filter(movie => movie.vote_average >= 7)} />
      </section>

      <section className="section">
        <h2 className="text-3xl font-semibold mb-6 text-stone-600">TOP RATED</h2>
        <Carrousel movies={topRatedMovies.filter(movie => movie.vote_average >= 7)} />
      </section>


      <section className="section">
        <h2 className="text-3xl font-semibold mb-6 text-stone-600">NOW PLAYING</h2>
        <Carrousel movies={(nowPlayingMovies.filter(movie => movie.vote_average >= 7))} />
      </section>
         

    </div>

  )
}

export default Home
