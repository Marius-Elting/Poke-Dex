import './App.css';
import { useState } from 'react';

function App() {
  const [searchterm, setSearchTerm] = useState("?limit=100000&offset=0.");
  fetch(`https://pokeapi.co/api/v2/pokemon/${searchterm}`)
    .then(res => res.json())
    .then((res) => {
      console.log(res);
    });

  return (
    <div className="App">

    </div>
  );
}

export default App;
