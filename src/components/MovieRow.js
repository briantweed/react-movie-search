import React from "react";
import shortId from "shortid";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {fetchMovieDetails} from "../storage/actions";
import withStyles from "@material-ui/core/styles/withStyles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import {slugify} from "../helpers";


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


    const formatReleaseDate = (releaseDate) => {
        if (releaseDate) {
            if (releaseDate.length === 4) {
                return releaseDate;
            } else {
                const year = releaseDate.slice(0, 4);
                const month = releaseDate.slice(4, 6);
                const day = releaseDate.slice(6, 8);
                return day + "-" + month + "-" + year;
            }
        }
        return "n/a";
    };


    const formatRuntime = (runtime) => {
        if (runtime) {
            return runtime.replace(" ", "");
        }
        return "n/a";
    };


    const handleClick = (movie) => {
        dispatch(fetchMovieDetails(movie.imdbId));

        history.push("/movie/" + slugify(movie.title));
    };


    return (
        <TableRow key={shortId.generate()}>
            <TableCell>
                <ButtonLink disableRipple onClick={e => handleClick(movie)}>{movie.title}</ButtonLink>
            </TableCell>
            <TableCell>{movie.year ? movie.year : "n/a"}</TableCell>
            <Hidden xsDown>
                <TableCell>{formatReleaseDate(movie.releaseDate)}</TableCell>
            </Hidden>
            <Hidden smDown>
                <TableCell>{formatRuntime(movie.runtime)}</TableCell>
            </Hidden>
        </TableRow>
    )

};


export default MovieRow;