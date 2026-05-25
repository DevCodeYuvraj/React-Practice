import Figure from 'react-bootstrap/Figure';
import image from "../assets/img.png";
function FigureExample() {
  return (
    <Figure>
      <Figure.Image className='react-image' src={image}
      />
      <Figure.Caption>
        Image Resource: Google.com
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;