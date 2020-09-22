import React from 'react';
import Helmet from "react-helmet";
import MoviesContainer from "../components/MoviesContainer";


const Index = () => {

    return (
        <>

            <Helmet>
                <title>MovieSearch | Home</title>
            </Helmet>

            <MoviesContainer/>

        </>
    )

};


export default Index;