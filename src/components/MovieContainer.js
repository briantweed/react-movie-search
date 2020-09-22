import React, {lazy} from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {useSelector} from "react-redux";
import SearchContainer from "./SearchContainer";


const MovieContainer = () => {

    const {loading} = useSelector((state) => state.movie);

    const Movie = lazy(() => import("./Movie"));

    const Loading = lazy(() => import("./layout/loading"));


    return (
        <Box>
            <Grid container spacing={5}>

                <SearchContainer/>

                {loading ? (
                    <Loading/>
                ) : (
                    <Movie/>
                )}

            </Grid>
        </Box>
    );

};


export default MovieContainer;