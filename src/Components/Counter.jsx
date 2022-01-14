import '../Styles/Counter.scss';
import { useCounter } from '../Contexts/CounterContext';

export function Counter(){
    const [counter,setCounter] = useCounter();

    return(
        <main>
            <h1>Contador Básico</h1>
            <h4>{counter}</h4>
            <button onClick={() => setCounter(counter + 1)}>Aumentar</button>
        </main>
    );
}