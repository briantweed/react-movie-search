import React from 'react';
import Helmet from "react-helmet";
import CacheContainer from "../components/CacheContainer";


const History = () => {

    return (
        <>

            <Helmet>
                <title>MovieSearch | Cached Movies</title>
            </Helmet>

            <CacheContainer/>

        </>
    )

};


export default History;