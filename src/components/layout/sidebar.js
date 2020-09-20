import React from "react";
import shortId from "shortid";
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import {Link, useLocation} from "react-router-dom";
import routes from "../../routes";
import CounterIcon from "@material-ui/icons/ConfirmationNumber";


const Sidebar = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '50px',
            background: '#446',
            color: '#999',
            [theme.breakpoints.up('md')]: {
                width: '240px'
            },
            "& span": {
                fontSize: '0.9rem',
                display: 'block',
                textTransform: 'uppercase',
                padding: '0.5rem',
            },
            "& > span": {
                fontSize: '0.75rem',
                [theme.breakpoints.up('md')]: {
                    padding: '0.5rem 1rem'
                }
            },
            "& a": {
                width: '100%',
                padding: '0',
                background: 'rgba(0,0,0,0.05)',
                display: 'flex',
                textDecoration: 'none',
                color: '#fafafa',
                boxSizing: 'border-box',
                transition: 'all 0.3s ease-in-out'
            },
            "& a:hover": {
                background: 'rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease-in-out'
            },
            "& a.current": {
                position: 'relative',
                background: 'rgba(0,0,0,0.25)'
            },
            "& a.current::before": {
                content: '""',
                borderStyle: 'solid',
                borderWidth: '4px 6px 4px 0',
                borderColor: 'transparent #ffffff transparent transparent',
                position: 'absolute',
                top: '18px',
                right: 0
            },
            "& a > .icon": {
                width: '50px',
                textAlign: 'center'
            },
            "& a > .link": {
                display: 'none',
                [theme.breakpoints.up('md')]: {
                    flex: '1',
                    display: 'flex',
                    alignItems: 'center'
                },

            }
        },
    }));

    const classes = useStyles();
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <Box className={classes.root}>
            <span>MENU</span>
            {routes.map(link => {

                if (link.sidebar === false) {
                    return null;
                }

                const Icon = link.icon ? link.icon : CounterIcon;
                const isCurrent = currentPath === link.path ? 'current' : '';

                return (
                    <Box key={shortId.generate()}>
                        <Link to={link.path} className={isCurrent}>
                            <span className={'icon'}><Icon/></span>
                            <span className={'link'}>{ link.page }</span>
                        </Link>
                    </Box>
                )

            })}
        </Box>
    );

};


export default Sidebar;