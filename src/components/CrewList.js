import React from "react";
import shortId from "shortid";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";


const ButtonLink = withStyles(() => ({
    root: {
        textTransform: "inherit",
        textAlign: "left",
        "&:hover": {
            background: 'none',
            textDecoration: 'underline'
        }
    }
}))(Button);


const CrewList = (props) => {

    const {crew} = props;

    return (
        <>
            <h3>Crew</h3>

            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Role</b></TableCell>
                            <TableCell><b>Name</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {crew.map(person => {

                            return (
                                <TableRow key={shortId.generate()}>
                                    <TableCell>{ person.type }</TableCell>
                                    <TableCell>
                                        <ButtonLink
                                            disableRipple
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={'https://www.imdb.com/name/' + person.imdbId}
                                        >{ person.name }</ButtonLink>
                                    </TableCell>
                                </TableRow>
                            )

                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )

};


export default CrewList;