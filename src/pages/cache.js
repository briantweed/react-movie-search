import React from 'react';
import Helmet from "react-helmet";
import CacheList from "../components/CacheList";
import SearchContainer from "../components/SearchContainer";


const History = () => {

    return (
        <>

            <Helmet>
                <title>MovieSearch | Cached Movies</title>
            </Helmet>

            <SearchContainer/>

            <CacheList/>

        </>
    )

};


export default History;