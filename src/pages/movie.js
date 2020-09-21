import React from 'react';
import Helmet from "react-helmet";
import MovieDetails from "../components/MovieDetails";
import {useSelector} from "react-redux";


const MoviePage = () => {

    const {movie} = useSelector((state) => state.movie);
    const {details} = movie;

    const title = details ? details.title : "MovieSearch";

    return (
        <>

            <Helmet>
                <title>{ "MovieSearch | " + title }</title>
            </Helmet>

            <MovieDetails/>

        </>
    )

};


export default MoviePage;