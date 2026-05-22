import { useState } from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function RBButtonGroups() {

  const [message, setMessage] = useState(
    "Here, the actions of the above buttons will be reflected."
  );

  const [alignment, setAlignment] = useState("left");

  return (
    <div className="container mt-5">

      <h2 className="mb-3">
        Button Groups
      </h2>

      <ButtonGroup className="mb-4">

        <Button
          variant="primary"
          onClick={() => {
            setAlignment("start");
            setMessage("Left Button Clicked");
          }}
        >
          ☰ Left
        </Button>

        <Button
          variant="primary"
          onClick={() => {
            setAlignment("center");
            setMessage("Center Button Clicked");
          }}
        >
          ☰ Center
        </Button>

        <Button
          variant="primary"
          onClick={() => {
            setAlignment("end");
            setMessage("Right Button Clicked");
          }}
        >
          ☰ Right
        </Button>

      </ButtonGroup>

      <div className="border p-4 bg-light">
        <h5 className={`text-${alignment}`}>
          {message}
        </h5>
      </div>

    </div>
  );
}