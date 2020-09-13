import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navigation from "./navigation";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Box from "@material-ui/core/Box";


const Layout = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: 'calc(100% - 50px)',
            [theme.breakpoints.up('sm')]: {
                width: '100%'
            },
            minHeight: "calc(100vh - 92px)",
            paddingTop: "2rem",
            paddingBottom: "2rem"
        }
    }));

    const classes = useStyles();


    return (
        <>
            <Navigation/>

            <Box display="flex">

                <Sidebar/>

                <Container maxWidth="xl" className={classes.root}>

                    { props.children }

                </Container>

            </Box>

            <Footer/>
        </>
    )

};


export default Layout;