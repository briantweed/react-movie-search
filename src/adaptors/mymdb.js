import {apiCall, rating} from "../helpers";


/**
 * Adaptor for MyMDb
 *
 * https://github.com/briantweed/MyMDb_V2
 */
export class ApiAdaptor {


    constructor() {
        this.basePath = "http://mymdb.test";
        this.imagePath = this.basePath + "/images/covers";
        this.apiPath = this.basePath + "/api/movies";
        this.imdbPath = "https://www.imdb.com/title";
    }


    /**
     * Return movie search results.
     *
     * @param filter
     * @param page
     * @returns {Promise<*>}
     */
    fetchMovies = async (filter, page) => {
        const url = this.apiPath + '?name=' + filter.title
            + '&released=' + filter.year
            + '&page=' + page;
        const data = await apiCall(url);
        return this.formatMovies(data);
    };


    /**
     * Return movie info.
     *
     * @param movieId
     * @returns {Promise<{}>}
     */
    fetchMovie = async (movieId) => {
        const url = this.apiPath + '/' + movieId;
        const data = await apiCall(url);
        return this.formatMovie(data);
    };


    /**
     * Format movie search results for display.
     *
     * @param incomingData
     * @returns {*}
     */
    formatMovies = (incomingData) => {
        const {movies} = incomingData;
        const {data, ...rest} = movies;
        const formattedData = {...rest};
        formattedData.data = data.map(movie => {
            return {
                imdbId: movie.imdb_id,
                releaseDate: movie.released,
                runtime: this.formatRuntime(movie.running_time),
                title: movie.name,
                slug: movie.slug,
                year: movie.released
            }
        });
        return formattedData;
    };


    /**
     * Format movie info for display.
     *
     * @param incomingData
     * @returns {{}}
     */
    formatMovie = (incomingData) => {
        const {movie} = incomingData;
        const data = {};

        data.details = this.formatDetails(movie);
        data.cast = this.formatCast(movie.cast);
        data.crew = this.formatCrew(movie.crew);

        return data;
    };


    /**
     * Format movie details.
     *
     * @param movie
     * @returns {{}}
     */
    formatDetails = (movie) => {
        const data = {};
        data.imdbId = movie.imdb_id;
        data.imdbUrl = this.formatImdbUrl(movie.imdb_id);
        data.plot = movie.bio;
        data.posterUrl = this.formatPosterUrl(movie.image);
        data.title = movie.name;
        data.slug = movie.slug;
        data.year = movie.released;
        data.rating = rating(movie.rating);
        data.runtime = this.formatRuntime(movie.running_time);
        data.rated = movie.certificate.title;
        return data;
    };


    /**
     * Format cast details.
     *
     * @param cast
     * @returns {*}
     */
    formatCast = (cast) => {
        return cast.map(person => {
            const data = {};
            data.imdbId = person.imdb_id;
            data.name = person.fullname;
            data.character = person.pivot.character;
            return data;
        });
    };


    /**
     * Format crew details.
     *
     * @param crew
     * @returns {*}
     */
    formatCrew = (crew) => {
        return crew.map(person => {
            const data = {};
            data.imdbId = person.imdb_id;
            data.name = person.fullname;
            data.type = person.pivot.position;
            return data;
        });
    };


    /**
     * Format link to IMDb.
     *
     * @param imdbId
     * @returns {string}
     */
    formatImdbUrl = (imdbId) => {
        return this.imdbPath + "/" + imdbId;
    };


    /**
     * Format poster url.
     *
     * @param filename
     * @returns {string}
     */
    formatPosterUrl = (filename) => {
        return this.imagePath + '/' + filename;
    };


    /**
     * Format running time for display.
     *
     * @param runtime
     * @returns {string}
     */
    formatRuntime = (runtime) => {
        if (runtime) {
            return String(runtime).replace(" ", "") + "mins";
        }
        return "n/a";
    };

}