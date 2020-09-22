import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MoviesList from "./MoviesList";
import SearchContainer from "./SearchContainer";


const MoviesContainer = () => {

    return (
        <Box>
            <Grid container spacing={2}>

                <SearchContainer/>

                <MoviesList/>

            </Grid>
        </Box>
    );

};


export default MoviesContainer;