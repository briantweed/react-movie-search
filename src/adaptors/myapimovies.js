import {MOVIE_API_TOKEN} from "../constants";
import {apiCall} from "../helpers";


export class ApiAdaptor {

    fetchMovies = async (filter, page) => {
        const url = "https://www.myapimovies.com/api/v1/movie/search?exact=true&title=" + filter.title
            + "&year=" + (filter.year ? filter.year : '')
            + "&page=" + page
            + "&token=" + MOVIE_API_TOKEN;
        const data = await apiCall(url);
        return this.formatMovies(data);
    };

    fetchMovie = async (movieId) => {
        const url = 'http://mymdb.test/api/movies/' + movieId;
        const data = await apiCall(url);
        return data;
    };

    formatMovies = (data) => {
        const {data: movies, ...rest} = data;
        const formattedData = {...rest};
        formattedData.data = movies.map(movie => {
            return {
                ...movie,
                runtime: formatRuntime(movie.runtime),
                releaseDate: formatReleaseDate(movie.releaseDate)
            };
        });
        return formattedData;
    };

}


const formatRuntime = (runtime) => {
    if (runtime) {
        return runtime.replace(" ", "");
    }
    return "n/a";
};


const formatReleaseDate = (releaseDate) => {
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