import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchMovie} from "../storage/actions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        marginBottom: '1rem',
        padding: "0",
        margin: "1rem",
        "&:hover": {
            boxShadow: "-2px 3px 7px #999",
            cursor: 'pointer'
        }
    },
    cover: {
        width: 90,
        height: 135
    }
}));


const CacheRow = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const {movie} = props;
    const {details} = movie;

    const classes = useStyles();

    const handleClick = (movie) => {
        dispatch(fetchMovie(movie.details.imdbId));
        window.scrollTo(0,0);
        history.push("/movie/" + movie.details.slug);
    };


    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.root} onClick={e => handleClick(movie)}>
                <CardMedia
                    className={classes.cover}
                    image={details.posterUrl}
                    title={details.title}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h2" variant="h6">
                            { details.title } ({ details.year })
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            <Rating
                                name="half-rating-read"
                                value={details.score}
                                precision={0.5}
                                readOnly
                            />
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </Grid>
    )

};


export default CacheRow;