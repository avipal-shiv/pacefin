import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

import { API } from "./Backend";

function App() {
  const [webscape, setWebscape] = useState([]);

  useEffect(() => {
    setInterval(()=>{
      PostApi()     
    },5000)

    setInterval(()=>{
      FeachApi()
     
    },3000)

    FeachApi();

    
    
   
  },[]);

  const FeachApi = async () => {
    const result = await axios.get(`${API}list/`);
    setWebscape(result.data);
    console.log(result.data);
    console.log("hello");
  };

  const PostApi = async () => {
    
    console.log(API)
    
    const result = await axios.post(`${API}post/`);

    console.log(result)
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <table class="table table-dark">
          <thead>
            <tr>
              
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">1h</th>
              <th scope="col">24h</th>
              <th scope="col">7days</th>
              <th scope="col">Market Cap</th>
              <th scope="col">Volume</th>
              <th scope="col">Circulating Supply</th>
            </tr>
          </thead>
          <tbody>
            {webscape.map((item, index) => {
              return (
                <tr key={index + 1}>
                  
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.hour}</td>
                  <td>{item.twenty_hours}</td>
                  <td>{item.seven_days}</td>
                  <td>{item.market_cap}</td>
                  <td>{item.volume}</td>
                  <td>{item.circulating_supply}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
