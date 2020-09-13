import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MovieList from "./MovieList";
import ErrorMessage from "./ErrorMessage";
import MovieSearch from "./MovieSearch";


const MovieContainer = () => {

    return (
        <Box>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <MovieSearch/>
                </Grid>

                <Grid item xs={12}>
                    <ErrorMessage/>
                </Grid>

                <Grid item xs={12}>
                    <MovieList/>
                </Grid>

            </Grid>
        </Box>
    );

};


export default MovieContainer;