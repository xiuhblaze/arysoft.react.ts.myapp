import { Col, Container, Row } from "react-bootstrap"
import { Counter } from "./components/Counter"
import { Usuario } from "./components/Usuario"
import { TimerPadre } from "./components/TimerPadre"

function App() {
  
  return (
    <Container>
      <Row>
        <Col xs="12" className="pt-4">
          <h4>React + Typescript</h4>
          <hr className="horizontal dark" />
          <Counter />
          <hr className="horizontal dark" />
          <Usuario />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs="12">
          <h5>useEffect - useRef</h5>
          <hr className="horizontal dark" />
          <TimerPadre />
        </Col>
      </Row>
    </Container>
  )
}

export default App
