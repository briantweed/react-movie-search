import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import SearchContainer from "./SearchContainer";
import SearchHistoryList from "./SearchHistoryList";


const CacheContainer = () => {

    return (
        <Box>
            <Grid container spacing={2}>

                <SearchContainer/>

                <SearchHistoryList/>

            </Grid>
        </Box>
    );

};


export default CacheContainer;