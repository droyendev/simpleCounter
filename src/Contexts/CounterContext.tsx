import { ReactNode, useContext,createContext,useState } from 'react';


type CounterContextProviderProps = {
    children: ReactNode;
}

const CounterContext = createContext({} as any);


export function CounterContextProvider( props : CounterContextProviderProps ){
    const [ counter,setCounter ] = useState(0);

    return(
        <CounterContext.Provider value={{counter,setCounter}}>
            {props.children}
        </CounterContext.Provider>
    );  
}

export function useCounter(){
    const context = useContext(CounterContext);
    const { counter, setCounter } = context;
    return [counter,setCounter];
}