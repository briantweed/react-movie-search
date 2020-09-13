import React from "react";
import shortId from "shortid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Hidden from "@material-ui/core/Hidden";


const MovieRow = (props) => {

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


    return (
        <TableRow key={shortId.generate()}>
            <TableCell>
                {movie.imdbId ? (
                    <a target="_blank" rel="noreferrer noopener"href={"https://www.imdb.com/title/" + movie.imdbId}>{movie.title}</a>
                ) : (
                    <>{ movie.title }</>
                )}
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