import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchForm from "./SearchForm";
import ErrorMessage from "./ErrorMessage";


const SearchContainer = () => {

    return (
        <>
            <Grid item xs={12}>
                <SearchForm/>
            </Grid>

            <Grid item xs={12}>
                <ErrorMessage/>
            </Grid>
        </>
    )

};


export default SearchContainer;