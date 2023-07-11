import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Card } from "react-bootstrap"

interface User {
  uid: string,
  name: string,
}

export const Usuario = () => {
  const [user, setUser] = useState<User>();


  const onLogin = () => {
    setUser({
      uid: '001',
      name: 'Adrian Castillo',
    });
  };

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title>Usuario: useState</Card.Title>
        <Card.Text>
          <Button variant="outline-danger" onClick={ onLogin }>
            <FontAwesomeIcon icon={ faUserCircle } size="lg" className="me-2" />
            Login
          </Button>
        </Card.Text>
        <Card.Text>
          <pre>{ JSON.stringify(user) }</pre>
        </Card.Text>        
      </Card.Body>
    </Card>
  )
}
