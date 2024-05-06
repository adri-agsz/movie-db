import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getDetail } from '../../services/movies/getDetail';
import { IMovieDetailResponse, IMovieResponse } from '../types';
import { IMAGE_SOURCE } from '../../constants/moviesMock';
import { Pill } from '../../components/Pill';
import { useCookies } from 'react-cookie';
import { getRecommended } from '../../services/movies';
import { Carrousel } from '../../components/Carrousel';
import { FaStar, FaCalendarAlt, FaMoneyBillAlt, FaFire } from 'react-icons/fa';

const Show: React.FC = () => {

    const [detail, setDetail] = useState<IMovieDetailResponse | null>(null);
    const [recommendedMovies, setRecommendedMovies] = useState<IMovieResponse[]>([]);
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const navigate = useNavigate();

    const [isFavorite, setIsFavorite] = useState(false);
  
    const [favorites, setFavorites] = useState<string>('');
   


    const goBack = () => {
        navigate(-1);
    };





    const addFavorite = () => {
      const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
      const newFavorites = [...favs, id];
      setFavorites(JSON.stringify(newFavorites));
      setIsFavorite(true);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };


    const removeFavorite = () => {
      const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
      const newFavorites = favs.filter((e:string) => e !== id);
      setFavorites(newFavorites);
      setIsFavorite(false);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    const getDetailMovie= async (id:string) => {
      await getDetail(id)
      .then((data:any) => {
        if (data && data.data) {
          setDetail(data.data);
        }
      })
      .catch((err:any)=> {
        console.log(err);
      });
    
    };

    const getRecommendedMovies= async (id:string) => {
      await getRecommended(id)
      .then((data:any) => {
        if (data && data.data) {
          setRecommendedMovies(data.data.results);
          
        }
      })
      .catch((err:any)=> {
        console.log(err);
      });
    
    };

    useEffect(() => {
      if (id) {
        getDetailMovie(id);
        getRecommendedMovies(id);
      }
    }, [id]); 

    useEffect(()=> {
      const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
      if (favs.includes(String(id))) {
          setIsFavorite(true);
      } else {
          setIsFavorite(false);
      }
    }, [id])




    return (
      <div className='p-4'>
        <div className= "flex flex-row space-x-4 mb-4">
            <div className="">
                <img className="rounded-lg " src={IMAGE_SOURCE + detail?.poster_path}></img>
            </div>

            <div className='space-y-5'>
            
            <div className='text-3xl font-bold'>{location.state && location.state.movieName}</div>
            <div className="flex flex-row space-x-4">
              <div className="flex items-center space-x-1">
                <FaStar className='text-yellow-500'/>
                <p>{(detail?.vote_average ? ((detail.vote_average / 10) * 100).toFixed(0)+'%': 'No rating')}</p>
              </div>
              <div className="flex items-center space-x-1">
                <FaFire className='text-red-500' />
                <p>{detail?.popularity}</p>
              </div>
              <div className="flex items-center space-x-1">
                <FaCalendarAlt className='text-blue-500' />
                <p>{detail?.release_date}</p>
              </div >
              <div className="flex items-center space-x-1">
                <FaMoneyBillAlt className='text-green-500'/>
                <p>{detail?.budget}</p>
              </div>
            </div>
              <p className='text-sm'> {detail?.overview}</p>

              <div className='flex flex-row space-x-40'>
                <div className='space-y-4'>
                  <p className="text-xl font-semibold">Genres</p>
                  <div className="flex flex-row">
                  {detail?.genres.map(genre =>
                    (<Pill genre={genre.name}></Pill>)
                  )}
                  </div>

                </div>

                <div className='space-y-4'>
                  <p className="text-xl font-semibold">Favorites</p>

                            {isFavorite ? (
                              <div>
                                <button className='text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white py-1 px-2 rounded-md' onClick={removeFavorite}>Remove from Favorites</button>
                              </div>
                            ) : (
                              <div>
                                <button className='text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white py-1 px-2 rounded-md' onClick={addFavorite}>Add to Favorites</button>
                              </div>
                            )}
                </div>
              </div>
            </div>
            
        </div>
        <div>
            <div>
            <p className="text-3xl font-semibold mb-6 text-stone-600">RECOMMENDATIONS</p>
            <Carrousel movies={recommendedMovies}></Carrousel>
            </div>
         
          </div>
        <button onClick={goBack}>Ir atrás</button>
        
        </div>
    )
}

export default Show;
