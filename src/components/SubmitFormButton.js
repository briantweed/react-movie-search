import React, {lazy} from "react";
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Tooltip from '@material-ui/core/Tooltip';
import ClearIcon from '@material-ui/icons/Clear';


const SubmitFormButton = (props) => {

    const {loading} = useSelector((state) => state.results);

    const CircularProgress = lazy(() => import("@material-ui/core/CircularProgress"));
    const SearchIcon = lazy(() => import("@material-ui/icons/Search"));


    return (
        <ButtonGroup disableElevation fullWidth variant="contained" color="primary">
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
            <Tooltip
                arrow
                title="clear results"
                placement="top"
            >
                <Button
                    onClick={props.clear}
                    style={{maxWidth: '50px'}}
                ><ClearIcon/></Button>
            </Tooltip>
        </ButtonGroup>

    )

};


export default SubmitFormButton;