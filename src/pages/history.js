import React from 'react';
import Helmet from "react-helmet";
import SearchHistoryList from "../components/SearchHistoryList";
import SearchContainer from "../components/SearchContainer";


const History = () => {

    return (
        <>

            <Helmet>
                <title>MovieSearch | Search History</title>
            </Helmet>

            <SearchContainer/>

            <SearchHistoryList/>

        </>
    )

};


export default History;