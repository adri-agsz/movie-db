export interface IMovieCard {

/**
 * Title of the Movie
 */
    title:string;
    /**
 * Genre of the title
 */
    genreId:number;
    /**
 * Movie id
 */
    movieId:number;
    /**
 * Average rating
 */
    voteAverage:number;
    /**
 * Poster's path
 */
    posterPath:string | null;

}

export interface IGenre {
    id:number;
    name:string;
}