import Canvas from './components/Canvas'
import Table from "./components/Table";
import Input from "./components/Input"
import {useState, useEffect, useRef} from "react";


function App() {

    const canvas = useRef()
    const [items, setItems] = useState({})
    const [rows, setRows] = useState(0)


    useEffect(() => {
        const loadLocalItems = () => {

            const items = JSON.parse(localStorage.getItem('items'))
            setItems(items)

            console.log(localStorage.getItem('items'))
        }

        loadLocalItems()
    },[])



  return (
      <>
          <div className="container">
              <Input setItems={setItems} items={items} rows={rows} setRows={setRows}/>
              <Table items={items}/>
              <Canvas canvas={canvas}/>
          </div>
      </>
  );
}

export default App;
