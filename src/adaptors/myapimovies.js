import {apiCall} from "../helpers";
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
        movie.details = details.data;
        movie.cast = cast.data;
        movie.crew = crew.data;

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
                runtime: this.formatRuntime(movie.runtime),
                releaseDate: this.formatReleaseDate(movie.releaseDate)
            };
        });
        return formattedData;
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