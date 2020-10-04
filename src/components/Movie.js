import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPreviousMovieDetails, fetchNextMovieDetails} from "../storage/actions";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import {yellow} from '@material-ui/core/colors';
import CastList from "./CastList";
import CrewList from "./CrewList";


const Movie = () => {

    const dispatch = useDispatch();

    const {movie} = useSelector((state) => state.movie);

    const {details, cast, crew} = movie;

    if(!movie.details) {
        return null;
    }


    const getPreviousMovie = (id) => {
        dispatch(fetchPreviousMovieDetails(id));
    };


    const getNextMovie = (id) => {
        dispatch(fetchNextMovieDetails(id));
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

            <Grid item xs={12}>
                <button onClick={e => getPreviousMovie(details.imdbId)}>previous</button>
                <button onClick={e => getNextMovie(details.imdbId)}>next</button>
            </Grid>

            <Grid item sm={6} md={4} lg={3}>
                <img
                    style={{width: '100%'}}
                    src={details.posterUrl}
                    alt={details.title}
                />
            </Grid>

            <Grid item sm={6} md={7} lg={6}>
                <Grid item>
                    <h2>{ details.title } ({ details.year })</h2>
                </Grid>
                <Grid item>
                    <Box mb={2}>
                        <Rating
                            name="half-rating-read"
                            value={details.rating}
                            precision={0.5}
                            readOnly
                        />
                    </Box>
                </Grid>
                <Grid container item spacing={5} xs={12}>
                    <Grid item>{ details.runtime }</Grid>
                    <Grid item>{ details.rating }</Grid>
                </Grid>
                <Grid item>
                    <Box my={3}>
                        <p>{ details.plot }</p>
                    </Box>
                </Grid>
                <Grid item>
                    <ColorButton
                        variant="contained"
                        color="primary"
                        href={details.imdbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >View on IMDb</ColorButton>
                </Grid>
            </Grid>

            <Grid item container>
                <Grid item xs={12} md={5}>
                    <Box mb={8}>
                        <CastList cast={cast}/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={1}/>
                <Grid item xs={12} md={5}>
                    <Box mb={8}>
                        <CrewList crew={crew}/>
                    </Box>
                </Grid>
            </Grid>

        </>
    )

};


export default Movie;