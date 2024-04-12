import logo from "./logo.svg";
import "./App.css";
import SelectComp from "./components/SelectComp";
import { list } from "./list";
import { useState } from "react";

function App() {
  const [cities, setCities] = useState([]);

  const handleOnchange = (e) => {
    e.preventDefault();
    if(e.target.selectedIndex){
      setCities(list[e.target.selectedIndex].cities);
    }
  };
  return (
    <div className="App">
        <SelectComp
          contents={list}
          callee="state"
          handleOnchange={handleOnchange}
        />
        {
          cities.length > 0 && 
          <SelectComp 
          contents={cities}
          callee="cities"
          />
        }
    </div>
  );
}

export default App;
