import React from "react";
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from '@material-ui/icons/Clear';
import CircularProgress from "@material-ui/core/CircularProgress";


const SubmitFormButton = (props) => {

    const {loading} = useSelector((state) => state.results);

    return (
        <ButtonGroup disableElevation variant="contained" color="primary">
            <Button type={loading ? 'button' : 'submit'}>
                {loading ? (
                    <>
                        <CircularProgress size={18} style={{color: 'white', marginRight: '0.5rem'}} /> loading
                    </>
                ) : (
                    <>
                        <SearchIcon style={{marginRight: '0.5rem'}} />search
                    </>
                )}
            </Button>
            <Tooltip title="clear results">
                <Button
                    onClick={props.clear}
                ><ClearIcon/></Button>
            </Tooltip>
        </ButtonGroup>

    )

};


export default SubmitFormButton;