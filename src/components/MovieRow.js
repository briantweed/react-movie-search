import React from "react";
import shortId from "shortid";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {fetchMovie} from "../storage/actions";
import withStyles from "@material-ui/core/styles/withStyles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";


const ButtonLink = withStyles(() => ({
    root: {
        textTransform: "inherit",
        textAlign: "left",
        "&:hover": {
            background: 'none',
            textDecoration: 'underline'
        }
    }
}))(Button);


const MovieRow = (props) => {

    const dispatch = useDispatch();

    const history = useHistory();

    const {movie} = props;

    const handleClick = (movie) => {
        dispatch(fetchMovie(movie.imdbId));

        history.push("/movie/" + movie.slug);
    };


    return (
        <TableRow key={shortId.generate()}>
            <TableCell>
                <ButtonLink disableRipple onClick={e => handleClick(movie)}>{movie.title}</ButtonLink>
            </TableCell>
            <TableCell>{movie.year ? movie.year : "n/a"}</TableCell>
            <Hidden xsDown>
                <TableCell>{ movie.releaseDate }</TableCell>
            </Hidden>
            <Hidden smDown>
                <TableCell>{ movie.runtime }</TableCell>
            </Hidden>
        </TableRow>
    )

};


export default MovieRow;