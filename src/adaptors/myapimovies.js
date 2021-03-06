import {apiCall, capitalize, rating, slugify} from "../helpers";
import {MOVIE_API_TOKEN} from "../constants";


/**
 * Adaptor for MyApiMovies
 *
 * https://www.myapimovies.com/
 */
export class ApiAdaptor {


    constructor() {
        this.basePath = "https://www.myapimovies.com/api/v1/movie";
    }


    /**
     * Return movie search results.
     *
     * @param filter
     * @param page
     * @returns {Promise<*>}
     */
    fetchMovies = async (filter, page) => {
        const url = this.basePath + "/search?exact=true&title=" + filter.title
            + "&year=" + (filter.year ? filter.year : '')
            + "&page=" + page
            + "&token=" + MOVIE_API_TOKEN;
        const data = await apiCall(url);
        return this.formatMovies(data);
    };


    /**
     * Return movie info.
     *
     * @param movieId
     * @returns {Promise<*>}
     */
    fetchMovie = async (movieId) => {
        const detailsUrl = this.basePath + "/" + movieId + "?token=" + MOVIE_API_TOKEN;
        const castUrl = this.basePath + "/" + movieId + "/actors?token=" + MOVIE_API_TOKEN;
        const crewUrl = this.basePath + "/" + movieId + "/crew?token=" + MOVIE_API_TOKEN;

        const details = await apiCall(detailsUrl);
        const cast = await apiCall(castUrl);
        const crew = await apiCall(crewUrl);

        const movie = {};
        movie.details = this.formatDetails(details.data);
        movie.cast = this.formatCast(cast.data);
        movie.crew = this.formatCrew(crew.data);

        return movie;
    };


    /**
     * Format movie search results for display.
     *
     * @param data
     * @returns {*}
     */
    formatMovies = (data) => {
        const {data: movies, ...rest} = data;
        const formattedData = {...rest};
        formattedData.data = movies.map(movie => {
            return {
                ...movie,
                slug: slugify(movie.title),
                runtime: this.formatRuntime(movie.runtime),
                releaseDate: this.formatReleaseDate(movie.releaseDate)
            };
        });
        return formattedData;
    };


    /**
     * Format movie details.
     *
     * @param movie
     */
    formatDetails = (movie) => {
        movie.slug = slugify(movie.title);
        movie.rating = rating(movie.rating);
        return movie;
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
            data.imdbId = person.name.imdbId;
            data.name = person.name.name;
            data.character = person.character;
            return data;
        });
    };


    /**
     * Format cast details.
     *
     * @param cast
     * @returns {*}
     */
    formatCrew = (cast) => {
        return cast.map(person => {
            const data = {};
            data.imdbId = person.name.imdbId;
            data.name = person.name.name;
            data.type = capitalize(person.type);
            return data;
        });
    };


    /**
     * Format running time for display.
     *
     * @param runtime
     * @returns {string}
     */
    formatRuntime = (runtime) => {
        if (runtime) {
            return runtime.replace(" ", "");
        }
        return "n/a";
    };


    /**
     * Format release date for display.
     *
     * @param releaseDate
     * @returns {string}
     */
    formatReleaseDate = (releaseDate) => {
        if (releaseDate) {
            if (releaseDate.length === 4) {
                return releaseDate;
            } else {
                const year = releaseDate.slice(0, 4);
                const month = releaseDate.slice(4, 6);
                const day = releaseDate.slice(6, 8);
                return day + "-" + month + "-" + year;
            }
        }
        return "n/a";
    };

}