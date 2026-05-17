import { Stack } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { PencilSquare } from 'react-bootstrap-icons';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

function Buttons() {
    const [value, setValue] = useState([1, 4]);


    const handleChange = (val) => setValue(val);
    return (

        <div className='container d-flex row'>

            <h2 className='row'>Button Styles </h2>
            <Stack direction='horizontal' gap={3}>
                <Button className="d-inline-flex align-items-center" variant="primary ">Primary Button</Button>
                <Button variant="primary" className="d-inline-flex align-items-center"><PencilSquare className="me-2" /> Edit Record</Button>
                <Button className="d-inline-flex align-items-center " variant="outline-primary ">Outline Button</Button>
                <Button className="d-inline-flex align-items-center disabled" variant="primary ">Disabled Button</Button>
            </Stack>
            <h2 className='row'>Button Types </h2>
            <Stack direction='horizontal' gap={3}>
                <Button href="#">Link</Button>
                <Button type="submit">Button</Button>
                <Button as="input" type="button" value="Input" />
                <Button as="input" type="submit" value="Submit" />
                <Button as="input" type="reset" value="Reset" />
            </Stack>
            <h2 className='row'>Toggle Buttons</h2>
            <Stack direction='horizontal'>
                <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                    <ToggleButton id="tbg-btn-1" value={1}>
                        B
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-2" value={2} className='fst-italic'>
                        I
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-3" value={3} className='text-decoration-underline'>
                        U
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-4" value={4} className='text-decoration-line-through'>
                        S
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <hr />
            <p>This is the text which reflects above changes</p>

        </div>

    );
}

export default Buttons;