import React from "react";
import shortId from "shortid";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {capitalize} from "../helpers";


const CrewList = (props) => {

    const {crew} = props;


    return (
        <>
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
        </>
    )

};


export default CrewList;