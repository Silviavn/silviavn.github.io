import 'App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
  return (
    <div>
      <nav>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Linkedin</Card.Title>
          <Card.Text>
            Aqui esta mi linkedin para que puedas revisar mi perfil de trabajo
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Preciona aqui </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Mi perfil personal</Card.Title>
          <Card.Text>
          Aqui veras mas informacion personal sobre mi vida 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Preciona aqui</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Git hub</Card.Title>
          <Card.Text>
            Aqui encontraras todos los avances y las cosas que se e logrado hacer programando 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">preciona aqui</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    </nav> 
       </div>
  );
}

export default GroupExample;