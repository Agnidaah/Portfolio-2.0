import './App.css';
import NavBar from './components/NavBar';
import Records from './components/Records';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Details from './components/Details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<h1>Gurpreet's Portfolio</h1>}></Route>
      <Route path="/details" element={<Details/>}></Route>
      <Route path="/home" element={<Records/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
