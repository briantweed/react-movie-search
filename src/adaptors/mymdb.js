import {apiCall} from "../helpers";


export class ApiAdaptor {

    constructor() {
        this.base = "http://mymdb.test";
        this.url = this.base + "/api/movies";
    }

    fetchMovies = async (filter, page) => {
        const url = this.url + '?name=' + filter.title
            + '&released=' + filter.year
            + '&page=' + page;
        const data = await apiCall(url);
        return this.formatMovies(data);
    };

    fetchMovie = async (movieId) => {
        const url = this.url + '/' + movieId;
        const data = await apiCall(url);
        return this.formatMovie(data);
    };

    formatMovies = (incomingData) => {
        const {movies} = incomingData;
        const {data, ...rest} = movies;
        const formattedData = {...rest};
        formattedData.data = data.map(movie => {
            return {
                imdbId: movie.imdb_id,
                releaseDate: movie.released,
                runtime: formatRuntime(movie.running_time),
                title: movie.name,
                year: movie.released
            }
        });
        return formattedData;
    };

    formatMovie = (incomingData) => {
        const {movie} = incomingData;
        const data = {};
        const details = {};

        details.imdbId = movie.imbd_id;
        details.plot = movie.bio;
        details.posterUrl = this.base + '/' + movie.image;
        details.title = movie.name;
        details.year = movie.released;
        details.rating = movie.rating;
        details.runtime = formatRuntime(movie.running_time);
        details.rated = movie.certificate.title;

        data.details = details;
        data.cast = [];//this.formatCast(movie.cast);
        data.crew = [];//this.formatCrew(movie.crew);
        return data;
    };

    formatCast = (incomingData) => {
        return [];
    };

    formatCrew = (incomingData) => {
        return [];
    };

}


const formatRuntime = (runtime) => {
    if (runtime) {
        return String(runtime).replace(" ", "") + "mins";
    }
    return "n/a";
};