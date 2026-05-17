import Breadcrumb from "react-bootstrap/Breadcrumb";
import { href, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
function Breadcrumbtask() {
  return (
    
    <Breadcrumb style={{"--bs-breadcrumb-divider": "'⏭️'"}}>
      <Breadcrumb.Item href="#" >Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcrumbtask;