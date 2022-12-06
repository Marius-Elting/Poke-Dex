import './App.css';
import { useState } from 'react';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [searchterm, setSearchTerm] = useState("?limit=100000&offset=0.");
  fetch(`https://pokeapi.co/api/v2/pokemon/${searchterm}`)
    .then(res => res.json())
    .then((res) => {
      console.log(res);

    });

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/:id" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
