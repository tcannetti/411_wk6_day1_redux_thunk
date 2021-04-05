import React from 'react'
import { useState } from "react"
import { Button, Container, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import { MoreVert } from "@material-ui/icons"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

const Import = (props) => {
    // fill out this component
    const [anchorElement, setAnchorElement] = useState(null);

    const handleClick = (event) => {
        setAnchorElement(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorElement(null)
    };

    return (
        <Container>
            <Button variant='contained' color="primary" onClick={props.fetchMakes}>Import</Button>
            <h2>Count:{props.makes.length}</h2>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((car, index)=> (
                        <TableRow key={index}>
                            <TableCell>{car.MakeId}</TableCell>
                            <TableCell>{car.MakeName}</TableCell>
                            <TableCell>
                                <MoreVert aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}></MoreVert>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Menu
                id='simple-menu'
                anchorElement={anchorElement}
                keepMounted
                open={Boolean(anchorElement)}
                onClick={handleClose}>
                <MenuItem onClick={props.deleteMake}>Delete</MenuItem>
            </Menu>
        </Container>
    )
}

export default Import