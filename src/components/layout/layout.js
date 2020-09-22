import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Navigation from "./navigation";
import Sidebar from "./sidebar";
import Footer from "./footer";


const Layout = (props) => {

    const LayoutContainer = withStyles((theme) => ({
        root: {
            width: 'calc(100% - 50px)',
            [theme.breakpoints.up('sm')]: {
                width: '100%'
            },
            minHeight: "calc(100vh - 92px)",
            paddingTop: "2rem",
            paddingBottom: "2rem"
        }
    }))(Container);



    return (
        <>
            <Navigation/>

            <Box display="flex">

                <Sidebar/>

                <LayoutContainer maxWidth="xl">

                    { props.children }

                </LayoutContainer>

            </Box>

            <Footer/>
        </>
    )

};


export default Layout;