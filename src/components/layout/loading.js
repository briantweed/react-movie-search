import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";


const Loading = () => {

    const useStyles = makeStyles(() => ({
        root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            width: "100%",
            minHeight: "calc(100vh - 124px)",
            padding: "1rem"
        }
    }));

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <CircularProgress/>
        </div>
    )

};


export default Loading;