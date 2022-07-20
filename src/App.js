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
            if (localStorage.getItem('items')) {
                const items = JSON.parse(localStorage.getItem('items'))
                setRows(Object.keys(items).length)
                setItems(items)
            }
        }

        loadLocalItems()
    },[])



  return (
      <>
          <div className="container">
              <Input setItems={setItems} items={items} rows={rows} setRows={setRows}/>
              <Table items={items}/>
              <Canvas canvas={canvas} items={items}/>
          </div>
      </>
  );
}

export default App;
