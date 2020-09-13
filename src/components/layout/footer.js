import React from "react";
import {makeStyles} from '@material-ui/core/styles';


const Footer = () => {

    const year = new Date().getFullYear();

    const useStyles = makeStyles(() => ({
        root: {
            background: "#225",
            color: "#fafafa",
            padding: "1rem 3rem",
            boxSizing: "border-box",
            textAlign: "center"
        }
    }));

    const classes = useStyles();


    return (
        <footer className={classes.root}>
            <span>&copy; { year }</span>
        </footer>
    );

};


export default Footer;