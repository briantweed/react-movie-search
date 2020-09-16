import React from "react";
import shortId from "shortid";
import {useDispatch} from "react-redux";
import {deleteSearchItem} from "../storage/actions";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


const SearchHistoryRow = (props) => {

    const dispatch = useDispatch();

    const {movie} = props;

    const handleButtonClick = (id) => {
        dispatch(deleteSearchItem(id))
    };


    return (
        <TableRow key={shortId.generate()}>
            <TableCell>{ movie.title }</TableCell>
            <TableCell>{ movie.year ? movie.year : '---' }</TableCell>
            <TableCell>{ movie.time }</TableCell>
            <TableCell>
                <Tooltip
                    arrow
                    title="delete search"
                    placement="top"
                    enterDelay={500}
                    TransitionComponent={Zoom}
                >
                    <IconButton
                        variant="outlined"
                        color="secondary"
                        fontSize="small"
                        onClick={e => handleButtonClick(movie.id)}
                    ><CloseIcon size={2}/></IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    )

};


export default SearchHistoryRow;