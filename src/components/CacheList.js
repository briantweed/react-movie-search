import React from "react";
import {useSelector} from "react-redux";
import shortId from "shortid";
import Grid from "@material-ui/core/Grid";
import CacheRow from "./CacheRow";


const CacheList = () => {

    let cache = useSelector((state) => state.cache).sort((a, b) => {
        return a.details.title > b.details.title ? 1 : -1;
    });


    return (
        <Grid container>
            {cache.map(movie => {
                return (
                    <CacheRow
                        key={shortId.generate()}
                        movie={movie}
                    />
                )
            })}
        </Grid>
    )

};


export default CacheList;