import { Stack } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PencilSquare } from 'react-bootstrap-icons';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
function Buttonstyle(){
    return(
       <>
        <h2 className='row container mt-5'>Button Styles </h2>
            <Stack direction='horizontal' gap={3}>
                <Button className="d-inline-flex align-items-center" variant="primary ">Primary Button</Button>
                <Button variant="primary" className="d-inline-flex align-items-center"><PencilSquare className="me-2" /> Edit Record</Button>
                <Button className="d-inline-flex align-items-center " variant="outline-primary ">Outline Button</Button>
                <Button className="d-inline-flex align-items-center disabled" variant="primary ">Disabled Button</Button>
            </Stack>
            </>
    )
};
export default Buttonstyle;