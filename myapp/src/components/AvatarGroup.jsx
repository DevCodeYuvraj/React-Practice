import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Stack } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import profilepicture from "../assets/profile.png"

function ShapeExample() {
    return (
        <Container>
            <Stack direction='horizontal' >
                <Stack direction="horizontal" className='block'>
                    <Row >
                        <h5>Avatar with name</h5>
                        <div xs={6} md={4}>
                            <Stack className='avatar-group' direction='horizontal'><Image className='profile' src={profilepicture} roundedCircle /><p className='profilename'>Yuvraj singh</p></Stack>
                        </div>
                        <div xs={6} md={4}>
                            <Stack className='avatar-group' direction='horizontal'><Image className='profile' src={profilepicture} roundedCircle /><p className='profilename'>Pradeep singh</p></Stack>
                        </div>
                    </Row>
                </Stack>
                <Stack direction='vertical' >
                    <h5>Avatar Sizes</h5>
                    <Stack direction='horizontal'>
                        <Image className='profile1' src={profilepicture} roundedCircle />
                        <Image className='profile2' src={profilepicture} roundedCircle />
                        <Image className='profile3' src={profilepicture} roundedCircle />
                        <Image className='profile4' src={profilepicture} roundedCircle />
                        <Image className='profile5' src={profilepicture} roundedCircle />
                        <Image className='profile6' src={profilepicture} roundedCircle />
                    </Stack>
                </Stack>
                <Stack direction='vertical' >
                    <h5>Avatar Group</h5>
                    <Stack direction='horizontal'>
                        <Image className='overlap' src={profilepicture} roundedCircle />
                        <Image className='overlap' src={profilepicture} roundedCircle />
                        <Image className='overlap' src={profilepicture} roundedCircle />
                        <Image className='overlap' src={profilepicture} roundedCircle />
                        <Image className='overlap' src={profilepicture} roundedCircle />
                        <Image className='overlap' src={profilepicture} roundedCircle />
                    </Stack>
                </Stack>
            </Stack>

        </Container>
    );
}

export default ShapeExample;