import React from 'react';
import MovieContainer from "../components/MovieContainer";
import Helmet from "react-helmet";


const Index = () => {

    return (
        <>

            <Helmet>
                <title>MovieSearch | Home</title>
            </Helmet>

            <MovieContainer/>

        </>
    )

};


export default Index;