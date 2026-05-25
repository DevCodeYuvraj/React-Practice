import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Badge } from 'react-bootstrap';

export default function AnimatedExample() {
    const [AddProgress, setAddProgress] = useState(5);
    const increment5 = () => {
        if (AddProgress <= 95) setAddProgress(AddProgress + 5);
        else if (count == 100) alert("you cannot increment above 100");
    };
    const decrement5 = () => {
        if (AddProgress >= 5) setAddProgress(AddProgress - 5);
        else if (count == 0) alert("you cannot decrement below 0");
    };

    return (
        <>
            <Stack direction='verticle'>
                <Stack direction='horizontal'><button className="btn btn-primary mx-2" onClick={increment5} > Progress +5%</button>

                    <button className="btn btn-primary mx-2" onClick={decrement5} > Progress -5%</button></Stack>
                <br />
                <div><h5>completed{AddProgress}%</h5></div>
                <ProgressBar className='bar1' animated now={AddProgress} label={`${AddProgress}%`} />
                <br />
                <ProgressBar animated variant="danger" now={AddProgress} />
                <br />
                <Card style={{ width: '17rem', height: '20rem' }}>

                    <Card.Body>
                        <Card.Title>Bootstrap Dashboard Application</Card.Title>
                        <Card.Text className='text-secondary' >
                            Web Developer
                        </Card.Text>
                        <Card.Text className='text-dark' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Card.Text>
                        <Badge bg={AddProgress === 100 ? "success" : "info"}>
                            {AddProgress == 100 ? 'Completed' : 'In Progress'}
                        </Badge>
                        <ProgressBar animated variant='info' now={AddProgress} label={`${AddProgress}%`} />
                        <hr />
                        <Stack direction='horizontal'>
                            <Card.Body>
                                <Card.Title className='text-secondary'><h6>Due Date:</h6></Card.Title>
                                <Card.Text>1 Jan 2022</Card.Text>
                            </Card.Body>
                            <hr className='vr' />
                            <Card.Body>
                                <Card.Title className='text-secondary'><h6>Budget:</h6></Card.Title>
                                <Card.Text >$123,000</Card.Text>
                            </Card.Body>
                        </Stack>
                    </Card.Body>


                </Card>
            </Stack>
        </>
    )
};
