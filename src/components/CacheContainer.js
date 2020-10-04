import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import SearchContainer from "./SearchContainer";
import CacheList from "./CacheList";


const CacheContainer = () => {

    return (
        <Box>
            <Grid container spacing={2}>

                <SearchContainer/>

                <CacheList/>

            </Grid>
        </Box>
    );

};


export default CacheContainer;