import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MovieList from "./MovieList";
import MovieBanner from "./MovieBanner";


const MovieContainer = () => {

    return (
        <Box>
            <Grid container spacing={2}>

                <MovieBanner/>

                <MovieList/>

            </Grid>
        </Box>
    );

};


export default MovieContainer;