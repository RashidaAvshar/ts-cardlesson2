import { useEffect, useState } from "react";
import Card from "./component/Card";
import { Iproduct } from "./model";
import axios from "axios";

function App() {
  const [data, setData] = useState<Iproduct[]>([])
  const [loading, setLoading] = useState<Boolean>(false)

 async function getProducts (){
  try{
    setLoading(true)
    const response = await axios.get("https://fakestoreapi.com/products")
  setData(response.data)
  setLoading(false)
  }catch{
    console.log("error")
  }  
  }

  useEffect(()=>{
    getProducts()
  }, [])

  return (
    <div className="container">
      {loading ? "loading..." : (data.map((item)=> {
        return <Card key={item.id} data={item}/>
      }))      
    }
    </div>
  );
}

export default App;
