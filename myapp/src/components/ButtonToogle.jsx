import { useState } from "react";

import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";


export default function TextStyleToggle() {
   
    const [styles, setStyles] = useState([]);
     let textClasses = "";

    if (styles.includes("bold")) {
        textClasses += " bold";
    }

    if (styles.includes("italic")) {
        textClasses += " italic";
    }

    if (
        styles.includes("underline") &&
        styles.includes("strike")
    ) {
        textClasses += " underline-strike";
    } else if (styles.includes("underline")) {
        textClasses += " underline";
    } else if (styles.includes("strike")) {
        textClasses += " strike";
    }
    return (
        <div className="container mt-5">

            <h2 className="mb-4">
                Text Style Toggle Buttons
            </h2>

            
            <ToggleButtonGroup
                type="checkbox"
                value={styles}
                onChange={(val) => setStyles(val)}
                className="mb-4"
            >

                <ToggleButton
                    id="bold-btn"
                    value="bold"
                    variant="outline-primary"
                >
                    <b>B</b>
                </ToggleButton>

                <ToggleButton
                    id="italic-btn"
                    value="italic"
                    variant="outline-primary"
                >
                    <i>I</i>
                </ToggleButton>

                <ToggleButton
                    id="underline-btn"
                    value="underline"
                    variant="outline-primary"
                >
                    <u>U</u>
                </ToggleButton>

                <ToggleButton
                    id="strike-btn"
                    value="strike"
                    variant="outline-primary"
                >
                    <s>S</s>
                </ToggleButton>

            </ToggleButtonGroup>

            
            <div className="border p-4 bg-light">

                <h4 className={ textClasses}>
                    This is text that changes on toogle!
                </h4>

            </div>

        </div>
    );
}