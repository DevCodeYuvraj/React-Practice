import ListGroup from 'react-bootstrap/ListGroup';
import { Badge, Stack } from 'react-bootstrap';

function ListGroups() {
    return (
    <Stack direction='vertical'   >
        
        
        <ListGroup as="ul" className="ms-2 me-2 block" >
            
             <ListGroup.Item className="d-flex justify-content-between align-items-start">
                
            
                <div className="ms-2 me-auto">
                    
                    <div className="fw-bold ">Social Media Traffic</div>
                </div>
                

            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                
            
                <div className="ms-2 me-auto">
                    
                    <div><i className="bi bi-facebook text-primary"></i>Facebook</div>
                </div>
                <p>20%</p>

            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div ><i className="bi bi-instagram text-primary"></i>Instagram</div>
                </div>
                <p>20%</p>

            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div ><i className="bi bi-youtube text-primary"></i>YouTube</div>
                </div>
                <p>20%</p>

            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div ><i className="bi bi-twitter-x text-primary"></i>TwitterX</div>
                </div>
                <p>20%</p>

            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div ><i className="bi bi-linkedin text-primary"></i>LinkedIn</div>
                </div>
                <p>20%</p>

            </ListGroup.Item>


            
        </ListGroup>
    </Stack>
    );
}

export default ListGroups;