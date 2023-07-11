import { Button } from "react-bootstrap"
import { Timer } from "./Timer"
import { useState } from "react"

export const TimerPadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000);

  return (
    <div>
      <span>Milisegundos { milisegundos }</span>
      <Timer milisegundos={ milisegundos } />
      <Button variant="outline-success" className="me-1" onClick={ () => setMilisegundos(1000) }>1000</Button>
      <Button variant="outline-info" onClick={ () => setMilisegundos(2000) }>2000</Button>
    </div>
  )
}
