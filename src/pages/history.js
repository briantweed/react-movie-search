import React from 'react';
import Helmet from "react-helmet";
import SearchHistoryList from "../components/SearchHistoryList";


const History = () => {

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