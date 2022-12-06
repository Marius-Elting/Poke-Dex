import './App.css';
import { useState } from 'react';
import List from './pages/ListPage/ListPage';

import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage/DetailPage';
import ListPage from './pages/ListPage/ListPage';
import Filter from './components/Filter/Filter';

function App() {
  const [searchterm, setSearchTerm] = useState("?limit=1000&offset=0.");
  // fetch(`https://pokeapi.co/api/v2/pokemon/${searchterm}`)
  //   .then(res => res.json())
  //   .then((res) => {
  //     console.log(res);
  //   });
  function searchByFilter(filter) {
    setSearchTerm(filter);
  }

  return (
    <div className="App">

      {/* <Header />
      <List /> */}
      <Router>
        <Routes>
          <Route path="/" element={<ListPage searchterm={searchterm} />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="/filter" element={<Filter filter={searchByFilter} />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;