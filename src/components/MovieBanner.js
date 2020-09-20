import React from "react";
import Grid from "@material-ui/core/Grid";
import MovieSearch from "./MovieSearch";
import ErrorMessage from "./ErrorMessage";


const MovieBanner = () => {

    return (
        <>
            <Grid item xs={12}>
                <MovieSearch/>
            </Grid>

            <Grid item xs={12}>
                <ErrorMessage/>
            </Grid>
        </>
    )

};


export default MovieBanner;