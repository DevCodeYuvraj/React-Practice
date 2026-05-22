import { Stack } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PencilSquare } from 'react-bootstrap-icons';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
export default function ButtonTypes(){
    return(
        <>
        <h2 className='row container mt-5'>Button Types </h2>
            <Stack direction='horizontal' gap={3}>
                <Button href="#">Link</Button>
                <Button type="submit">Button</Button>
                <Button as="input" type="button" value="Input" />
                <Button as="input" type="submit" value="Submit" />
                <Button as="input" type="reset" value="Reset" />
            </Stack>
            </>
    )
}
