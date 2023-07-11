import { useState } from "react"
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";


export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onAddCounter = (value: number = 1):void => {
    setCounter(counter + value);
  };

  return (
    <div className="mt-5">
      <h5>Counter: useState</h5>
      <p className="text-sm">Valor: { counter }</p>
      <Button variant="outline-primary" onClick={ () => onAddCounter() } className="me-2">
        + 1
      </Button>
      <Button variant="outline-success" onClick={ () => onAddCounter(2) } className="me-2">
        <FontAwesomeIcon icon={ faUser } className="me-2" />
        + 2
      </Button>
      <Button className="btn bg-gradient-primary" onClick={ () => setCounter(0) }>
        <FontAwesomeIcon icon={ faArrowRotateLeft } size="lg" />
      </Button>
    </div>
  )
}
