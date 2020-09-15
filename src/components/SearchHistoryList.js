import React from "react";
import {useSelector} from "react-redux";
import shortId from "shortid";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import SearchHistoryRow from "./SearchHistoryRow";


const SearchHistoryList = () => {

    const history = useSelector((state) => state.history);

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Title</b></TableCell>
                        <TableCell><b>Year</b></TableCell>
                        <TableCell><b>Date</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {history.map(movie => {
                        return (
                            <SearchHistoryRow
                                key={shortId.generate()}
                                movie={movie}
                            />
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )

};


export default SearchHistoryList;