import React from 'react';
import Helmet from "react-helmet";
import HistoryContainer from "../components/HistoryContainer";


const History = () => {

    return (
        <>

            <Helmet>
                <title>MovieSearch | Search History</title>
            </Helmet>

            <HistoryContainer/>
            
        </>
    )

};


export default History;