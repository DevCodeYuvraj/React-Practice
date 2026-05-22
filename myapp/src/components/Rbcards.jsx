import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap';
import cardimage1 from "../assets/cardimage1.png";
import cardimage2 from "../assets/(1).png"
import cardimage3 from "../assets/(3).png"
export default function Rbcards() {
    return (
        <>
            <Stack direction='horizontal' gap={1}>
                <Card className='cardstyle'>
                    <Card.Title className='cardtitle'>Bluetooth Headphones</Card.Title>
                    <Card.Img className='cardimg' variant="top" src={cardimage1} />
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
                <Card className='cardstyle'>
                    <Card.Title className='cardtitle'>The Ear Gaming headphones</Card.Title>
                    <Card.Img className='cardimg' variant="top" src={cardimage3} />
                    <Card.Body className='cardbody'>

                        <Card.Text className='cardtext'>
                            Newly Launched BTG Thunder Over The Ear Gaming Headphone with 70H of Playtime, 40mm Titanium Drivers, Dual Pairing Headset, Gaming Mode (40ms Latency) with RGB LEDs, Detachable Mic </Card.Text>
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
                <Card className='cardstyle'>
                    <Card.Title className='cardtitle'>Boat Rockers 450</Card.Title>
                    <Card.Img className='cardimg' variant="top" src={cardimage2} />
                    <Card.Body className='cardbody'>

                        <Card.Text className='cardtext'>
                            boAt Rockerz 450, 15 HRS Battery, 40mm Drivers, Padded Ear Cushions, Integrated Controls, Dual Modes, On Ear Bluetooth Headphones, Wireless Headphone with Mic (Hazel Beige)  </Card.Text>
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

            </Stack>
        </>
    );
}
