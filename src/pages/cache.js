import React from 'react';
import Helmet from "react-helmet";
import CacheList from "../components/CacheList";


const History = () => {

    return (
        <>

            <Helmet>
                <title>MovieSearch | Cached Movies</title>
            </Helmet>

            <CacheList/>

        </>
    )

};


export default History;