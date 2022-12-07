import './App.css';
import { useState } from 'react';
import List from './pages/ListPage/ListPage';

import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage/DetailPage';
import ListPage from './pages/ListPage/ListPage';
import Filter from './components/Filter/Filter';
import PokeElement from './components/PokeElement/Pokelement';

function App() {
  const [linkSearch, setlinkSearch] = useState("pokemon/?limit=905&offset=0.");
  const [searchTerm, setSearchTerm] = useState("");

  function searchByFilter(filter = "pokemon/?limit=905&offset=0.") {
    setlinkSearch(filter);
    console.log({ filter });
  }

  function searchPokemon(searchTerm) {
    console.log(searchTerm);
    setSearchTerm(searchTerm);

  }

  function reset() {
    setlinkSearch("pokemon/?limit=905&offset=0.");
    setSearchTerm("");
    document.getElementById("searchInput").value = "";
  }



  return (
    <div className="App">

      {/* <Header />
      <List /> */}
      <Router>
        <Routes>
          <Route path="/" element={<><Header filter={searchByFilter} search={searchPokemon} resetButton={reset} /> <ListPage searchTerm={searchTerm} searchLink={linkSearch} /></>} />
          <Route path="/:pokemon/:id" element={<><Header search={searchPokemon} resetButton={reset} /><DetailPage /></>} />
          <Route path="/filter" element={<Filter filter={searchByFilter} />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;