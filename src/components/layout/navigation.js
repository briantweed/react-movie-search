import React from "react";
import {Link} from "react-router-dom";
import shortId from 'shortid';
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import routes from "../../routes";
import MovieIcon from '@material-ui/icons/Movie';


const Navigation = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            background: '#78a1cb',
            height: '38px',
            '& a': {
                textDecoration: 'none',
                height: '38px',
                [theme.breakpoints.up('sm')]: {
                    height: '22px',
                }
            },
            '& a.home': {
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.primary.contrastText
            },
            '& a.page': {
                display: 'none',
                background: '#6c90b6',
                color: theme.palette.primary.contrastText,
                paddingLeft: theme.spacing(3),
                paddingRight: theme.spacing(3),
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(1),
                [theme.breakpoints.up('sm')]: {
                    display: 'inline-block'
                }
            },
            '& a.page:hover': {
                background: '#5a7897',
            }
        }
    }));

    const classes = useStyles();


    return (
        <nav className={classes.root}>
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" justifyContent="flex-start" alignItems="center" pl={2}>
                    <Link to='/' className={'home'}><MovieIcon/><b style={{marginLeft: '5px'}}>MovieSearch</b></Link>
                </Box>
                <Box display="flex" justifyContent="flex-end">
                    {routes.map(link => {
                        return (
                            <Link
                                key={shortId.generate()}
                                to={link.path}
                                className={'page'}
                            >{ link.page }</Link>
                        )
                    })}
                </Box>
            </Box>
        </nav>
    );

};


export default Navigation;