import React from 'react';
import Helmet from "react-helmet";
import SearchHistoryList from "../components/SearchHistoryList";
import {useSelector} from "react-redux";


const History = () => {

    const cache = useSelector((state) => state.cache);

    console.log(cache);

    return (
        <>

            <Helmet>
                <title>MovieSearch | Search History</title>
            </Helmet>

            <SearchHistoryList/>

        </>
    )

};


export default History;