import React from 'react';
import Helmet from "react-helmet";
import SearchHistoryList from "../components/SearchHistoryList";
import CacheList from "../components/CacheList";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";


const History = () => {

    return (
        <>

            <Helmet>
                <title>MovieSearch | Search History</title>
            </Helmet>

            <Box mb={5}>
                <Box mb={2}>
                    <Typography component="h5" variant="h5"><b>Movie History</b></Typography>
                </Box>
                <CacheList/>
            </Box>

            <Divider />

            <Box my={5}>
                <Box mb={2}>
                    <Typography component="h5" variant="h5"><b>Search History</b></Typography>
                </Box>
                <SearchHistoryList/>
            </Box>

        </>
    )

};


export default History;