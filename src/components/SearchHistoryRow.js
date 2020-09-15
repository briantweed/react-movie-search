import React from "react";
import shortId from "shortid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


const SearchHistoryRow = (props) => {

    const {movie} = props;

    return (
        <TableRow key={shortId.generate()}>
            <TableCell>{ movie.title }</TableCell>
            <TableCell>{ movie.year ? movie.year : '---' }</TableCell>
            <TableCell>{ movie.time }</TableCell>
        </TableRow>
    )

};


export default SearchHistoryRow;