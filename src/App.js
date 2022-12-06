import './App.css';
import { useState } from 'react';
import List from './pages/ListPage/ListPage';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage/DetailPage';


function App() {
  const [searchterm, setSearchTerm] = useState("?limit=100000&offset=0.");
  fetch(`https://pokeapi.co/api/v2/pokemon/${searchterm}`)
    .then(res => res.json())
    .then((res) => {
      console.log(res);
    });

  return (
    <div className="App">
      {/* <Header />
      <List /> */}
      <Router>
        <Routes>
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;