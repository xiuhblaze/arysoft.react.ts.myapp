import { useReducer } from "react";
import { Button } from "react-bootstrap";

const initialState = {
  contador: 0
};

type CounterActionType = 
  | { type: 'incrementar' }
  | { type: 'decrementar' }
  | { type: 'custom', payload: number }
;

const contadorReducer = (state: typeof initialState, action: CounterActionType) => {

  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1
      }
    case 'decrementar':
      return {
        ...state,
        contador: state.contador - 1
      }
    case 'custom':
      return {
        ...state,
        contador: action.payload
      }
    default:
      return state;
  }
}

export const CounterRed = () => {

  const [counterState, dispatch] = useReducer(contadorReducer, initialState);
  return (
    <>
      <h6>Contador: { counterState.contador }</h6>
      <Button 
        variant="outline-warning" 
        className="me-1"
        onClick={ () => dispatch({ type: 'incrementar' }) }
      >+ 1</Button>
      <Button 
        variant="outline-warning" 
        className="me-1"
        onClick={ () => dispatch({ type: 'decrementar' }) }
      >- 1</Button>
      <Button 
        variant="warning" 
        onClick={ () => dispatch({ type: 'custom', payload: 100 }) }
      >100</Button>
    </>
  )
};