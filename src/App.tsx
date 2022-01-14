import React from 'react';
import { Counter } from './Components/Counter';

import { CounterContextProvider } from './Contexts/CounterContext';

function App() {
  return (
    <CounterContextProvider>
      <Counter />
    </CounterContextProvider>
  );
}

export default App;
