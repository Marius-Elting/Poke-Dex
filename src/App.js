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
  const [searchterm, setSearchTerm] = useState("pokemon/?limit=905&offset=0.");

  function searchByFilter(filter) {
    setSearchTerm(filter);
    console.log({ filter });
  }

  return (
    <div className="App">

      {/* <Header />
      <List /> */}
      <Router>
        <Routes>
          <Route path="/" element={<ListPage searchterm={searchterm} />} />
          <Route path="/pokemon/:id" element={<DetailPage />} />
          <Route path="/filter" element={<Filter filter={searchByFilter} />} />
          <Route path="/123dw" element={<PokeElement />} />

        </Routes>
      </Router>


    </div>
  );
}

export default App;