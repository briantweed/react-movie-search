import React, {lazy} from "react";
import {useDispatch, useSelector} from "react-redux";
import shortId from "shortid";
import {updatePage} from "../storage/actions";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Pagination from "@material-ui/lab/Pagination";
import MovieRow from "./MovieRow";


const MovieList = () => {

    const dispatch = useDispatch();

    const {movies, fake, page, pages} = useSelector((state) => state.results);

    const {loading} = useSelector((state) => state.results);

    const Loading = lazy(() => import("../components/layout/loading"));


    const handlePageChange = (e, page) => {
        dispatch(updatePage(page));
    };


    if (!movies.length) {
        return null;
    }


    return (
        <Grid item xs={12}>

            {loading ? (
                <Loading/>
            ) : (
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
            )}

            <br/>

            {(!fake && pages > 1) &&(
                <Pagination
                    count={pages}
                    page={page}
                    siblingCount={2}
                    variant="outlined"
                    shape="rounded"
                    onChange={handlePageChange}
                />
            )}

        </Grid>
    )

};


export default MovieList;