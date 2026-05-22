import ProgressBar from 'react-bootstrap/ProgressBar';
import {useState} from 'react';
import { Card } from 'react-bootstrap';
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
  <ProgressBar className='bar1' animated now={AddProgress} label={`${AddProgress}%`} /> 
  <br />
  <ProgressBar animated variant="danger"  now={AddProgress} />

  <Card className='cardstyle'>
                    <Card.Title className='cardtitle'>Bluetooth Headphones</Card.Title>
                    <Card.Body className='cardbody'>

                        <Card.Text className='cardtext'>
                            Boult Newly Launched Flex On Ear Bluetooth Headphones with 80H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, Bluetooth 5.4, AUX Option, 60ms Low Latency, IPX5 (Jet Black)
                        </Card.Text>
                        <Stack className="price" direction='horizontal' gap={2}>₹1,399 <div className="previousprice" ><s>MRP: ₹3,999</s></div></Stack>
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

export default AnimatedExample;