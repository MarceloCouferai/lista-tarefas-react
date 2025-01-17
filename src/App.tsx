import { useEffect, useState } from 'react';
import { Header } from "./components/Header/Header";
import './styles/global.css'
import { Tasks } from './components/Tasks/Tasks';

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log('Executando a função do useEffect');  

    return () => {
      console.log('App desmontado');
    }
  }, [toggle])

  return (
    <>
        <Header />;
        <Tasks />
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  );
}

export default App;
