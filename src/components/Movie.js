import React from "react";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import { yellow } from '@material-ui/core/colors';


const Movie = () => {

    const {movie} = useSelector((state) => state.movie);

    if(!movie.hasOwnProperty('movie')) {
        return null;
    }


    const round = (value) => {
        return (Math.round(Number(value) * 2) / 2) / 2;
    };

    
    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(yellow[600]),
            backgroundColor: yellow[600],
            '&:hover': {
                backgroundColor: yellow[700],
            },
        },
    }))(Button);


    return (
        <>
            <Grid item sm={6} md={4} lg={3}>
                <img
                    style={{width: '100%'}}
                    src={movie.posterUrl}
                    alt={movie.title}
                />
            </Grid>

            <Grid item sm={6} md={7} lg={6}>
                <Grid item>
                    <h2>{ movie.title } ({ movie.year })</h2>
                </Grid>
                <Grid item>
                    <Box mb={2}>
                        <Rating
                            name="half-rating-read"
                            value={round(movie.rating)}
                            precision={0.5}
                            readOnly
                        />
                    </Box>
                </Grid>
                <Grid container item spacing={5} xs={12}>
                    <Grid item>{ movie.runtime }</Grid>
                    <Grid item>{ movie.rated }</Grid>
                </Grid>
                <Grid item>
                    <Box my={3}>
                        <p>{ movie.plot }</p>
                    </Box>
                </Grid>
                <Grid item>
                    <ColorButton
                        variant="contained"
                        color="primary"
                        href={movie.imdbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >View on IMDb</ColorButton>
                </Grid>
            </Grid>
        </>
    )

};


export default Movie;