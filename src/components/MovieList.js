import React from "react";
import {useSelector} from "react-redux";
import shortId from "shortid";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MovieRow from "./MovieRow";


const MovieList = () => {

    const {movies, fake} = useSelector((state) => state.results);

    if (!movies.length) {
        return null;
    }


    return (
        <>
            {fake && (
                <Grid container>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <i>these are fake results</i>
                    </Grid>
                </Grid>
            )}

            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Title</b></TableCell>
                            <TableCell><b>Year</b></TableCell>
                            <Hidden xsDown>
                                <TableCell><b>Released</b></TableCell>
                            </Hidden>
                            <Hidden smDown>
                                <TableCell><b>Running Time</b></TableCell>
                            </Hidden>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map(movie => {
                            return (
                                <MovieRow
                                    key={shortId.generate()}
                                    movie={movie}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )

};


export default MovieList;