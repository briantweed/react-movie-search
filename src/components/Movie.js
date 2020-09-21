import React from "react";
import shortId from "shortid";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import { yellow } from '@material-ui/core/colors';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {capitalize} from "../helpers";


const Movie = () => {

    const {movie} = useSelector((state) => state.movie);

    const {details, cast, crew} = movie;

    if(!movie) {
        return null;
    }


    const round = (value) => {
        return (Math.round(Number(value) * 2) / 2) / 2;
    };

    
    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(yellow[600]),
            backgroundColor: yellow[600],
            '&:hover': {
                backgroundColor: yellow[700],
            },
        },
    }))(Button);


    return (
        <>
            <Grid item sm={6} md={4} lg={3}>
                <img
                    style={{width: '100%'}}
                    src={details.posterUrl}
                    alt={details.title}
                />
            </Grid>

            <Grid item sm={6} md={7} lg={6}>
                <Grid item>
                    <h2>{ details.title } ({ details.year })</h2>
                </Grid>
                <Grid item>
                    <Box mb={2}>
                        <Rating
                            name="half-rating-read"
                            value={round(details.rating)}
                            precision={0.5}
                            readOnly
                        />
                    </Box>
                </Grid>
                <Grid container item spacing={5} xs={12}>
                    <Grid item>{ details.runtime }</Grid>
                    <Grid item>{ details.rated }</Grid>
                </Grid>
                <Grid item>
                    <Box my={3}>
                        <p>{ details.plot }</p>
                    </Box>
                </Grid>
                <Grid item>
                    <ColorButton
                        variant="contained"
                        color="primary"
                        href={details.imdbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >View on IMDb</ColorButton>
                </Grid>
            </Grid>

            <Grid item container spacing={10}>
                <Grid item xs={12} md={6}>
                    <h3>Cast</h3>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Character</b></TableCell>
                                    <TableCell><b>Actor</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cast.map(cast => {
                                    const {name: actor} = cast;
                                    return (
                                        <TableRow key={shortId.generate()}>

                                            <TableCell>{cast.character}</TableCell>
                                            <TableCell>{actor.name}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Grid item xs={12} md={6}>
                    <h3>Crew</h3>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Name</b></TableCell>
                                    <TableCell><b>Role</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {crew.map(crew => {
                                    const {name: person} = crew;
                                    return (
                                        <TableRow key={shortId.generate()}>
                                            <TableCell>{capitalize(person.name)}</TableCell>
                                            <TableCell>{capitalize(crew.type)}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )

};


export default Movie;