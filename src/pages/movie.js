import React from 'react';
import Helmet from "react-helmet";
import MovieContainer from "../components/MovieContainer";
import {useSelector} from "react-redux";


const MoviePage = () => {

    const {movie} = useSelector((state) => state.movie);
    const {details} = movie;

    const title = details ? details.title : "MovieSearch";

    return (
        <>

            <Helmet>
                <title>{ "SearchForm | " + title }</title>
            </Helmet>

            <MovieContainer/>

        </>
    )

};


export default MoviePage;