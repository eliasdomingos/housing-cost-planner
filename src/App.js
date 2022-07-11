import {useRef} from "react";
import Canvas from './components/Canvas'
import Table from "./components/Table";
import Input from "./components/Input"
import {useState} from "react";


function App() {

  const canvas = useRef()
    const [items, setItems] = useState({})



  return (
      <>
          <Input setItems={setItems}/>
        <Table/>
        <Canvas canvas={canvas}/>
      </>
  );
}

export default App;
