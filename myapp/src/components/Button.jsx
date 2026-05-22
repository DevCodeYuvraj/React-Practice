import { Stack } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PencilSquare } from 'react-bootstrap-icons';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Buttonstyle from './ButtonStyle';
import ButtonTypes from './ButtonTypes';
import ButtonToogle from './ButtonToogle';
import RBButtonGroups from './ButtonAlignment';
function Buttons() {
    const [value, setValue] = useState([1, 4]);
    const handleChange = (val) => setValue(val);
    return (

        <div className='container d-flex row'>

            <Buttonstyle/>
            <ButtonTypes/>
            <ButtonToogle/>
            <RBButtonGroups/>


            
        </div>

    );
}

export default Buttons;