import ProgressBar from 'react-bootstrap/ProgressBar';
import {useState} from 'react'
function AnimatedExample() {
const [AddProgress,setAddProgress]=useState(5);
const increment5 = () =>{
        if (AddProgress <= 95) setAddProgress(AddProgress + 5);
        else if (count == 100) alert("you cannot increment above 100");
    };
    const decrement5 = () =>{
        if (AddProgress >=5) setAddProgress(AddProgress -5);
        else if (count == 0) alert("you cannot decrement below 0");
    };

  return(
  <>
  <button className="btn btn-success mx-2"onClick={increment5} > Progress +5%</button>

<button className="btn btn-success mx-2"onClick={decrement5} > Progress -5%</button>
<div><h5>completed{AddProgress}%</h5></div>
  <ProgressBar animated now={AddProgress} label={`${AddProgress}%`} /> 
  <br />
  <ProgressBar animated variant="danger"  now={AddProgress} />
  </>
  ) 
};

export default AnimatedExample;