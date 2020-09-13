import React from "react";
import {Link} from "react-router-dom";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const FourOhFour = () => {

    const styles = makeStyles(() => ({
        root: {
            marginTop: 50,
            marginBottom: 50,
            textAlign: 'center'
        }
    }));

    const classes = styles();


    return (
        <>
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                    <p>The page you are looking for does not exists</p>
                    <Link to="/">Home</Link>
                </Grid>
            </Grid>
        </>
    )

};


export default FourOhFour;