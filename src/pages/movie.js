import React from 'react';
import Helmet from "react-helmet";
import MovieDetails from "../components/MovieDetails";
import {useSelector} from "react-redux";


const MoviePage = () => {

    const {movie} = useSelector((state) => state.movie);

    return (
        <>

            <Helmet>
                <title>{ "MovieSearch | " + movie }</title>
            </Helmet>

            <MovieDetails/>

        </>
    )

};


export default MoviePage;