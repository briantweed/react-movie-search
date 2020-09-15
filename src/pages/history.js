import React from 'react';
import Helmet from "react-helmet";
import SearchHistoryList from "../components/SearchHistoryList";


const Text = () => {

    return (
        <>

            <Helmet>
                <title>MovieSearch | Search History</title>
            </Helmet>

            <h2>Search History</h2>

            <SearchHistoryList/>

        </>
    )

};


export default Text;