import ProgressBar from 'react-bootstrap/ProgressBar';
import {useState} from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
export default function AnimatedExample() {
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
  <ProgressBar className='bar1' animated now={AddProgress} label={`${AddProgress}%`} /> 
  <br />
  <ProgressBar animated variant="danger"  now={AddProgress} />      
  <Card className='cardstyle'>
                    <Card.Title className='cardtitle'><h2>Bootstrap dashboard application</h2> </Card.Title>
                    <Card.Text className='cardtext'>
                        <h5 className='previousprice d-flex row align-start'  >Web Development</h5></Card.Text>
                    <Card.Body className='cardbody'>

                        
                        <Stack className="price" direction='horizontal' gap={2}>₹1,399 <div className="previousprice" ><s>MRP: ₹3,999</s></div></Stack>
                        <ProgressBar animated variant="danger" label={`${AddProgress}%`}  now={AddProgress} /> 
                        <hr />
                        <div className='buttonbackground'>
                            <Stack direction="horizontal" >
                                 
                                <Button className="cartbutton" >Add To Cart</Button>
                                <Button className="buybutton" variant="primary">Buy Now</Button>
                            </Stack>
                        </div>
                    </Card.Body>
                </Card>
  </>
  ) 
};
