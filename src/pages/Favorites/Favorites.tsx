import React, { useEffect, useState } from 'react';
import { IMovieDetailResponse } from '../types';
import { MovieCard } from '../../components/MovieCard';
import { getDetail } from '../../services/movies/getDetail';

const Favorites = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [shows, setShows] = useState<IMovieDetailResponse[]>([]);
    const favorites: string = localStorage.getItem("favorites") || "";

    const runGetFavorites = async () => {
        setLoading(true);
        if (favorites.length) {
            const favoritesArray = JSON.parse(favorites);
            const newShows = await Promise.all(
                favoritesArray.map(async (favorite: string) => {
                    try {
                        const res = await getDetail(String(favorite));
                        return res.data;
                    } catch (err) {
                        console.log(err, "err");
                        return null;
                    }
                })
            );
            setShows(newShows.filter(show => show !== null));
        }
        setLoading(false);
    }

    useEffect(() => {
        runGetFavorites();
    }, []);

    return (
        <div>
            <div className="section">
            <h2 className="text-3xl font-semibold text-stone-600">MY FAVORITES</h2>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : favorites && favorites.length > 0 ? (
                shows.length > 0 ? (
                    <div className = "flex flex-wrap p-5 gap-5">
                        {shows.map((show: IMovieDetailResponse) => (
                            <MovieCard
                                key={show.id}
                                movieId={show.id}
                                title={show.title}
                                genreId={show.genres[0].id}
                                voteAverage={show.vote_average}
                                posterPath={show.poster_path}
                            />
                        ))}
                    </div>
                ) : (
                    <div>Oops, you don't have any favorites.</div>
                )
            ) : (
                <div>No favorites found.</div>
            )}
        </div>
    );
}

export default Favorites;