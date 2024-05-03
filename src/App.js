
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import NavigationHeader from './navbar';
import Details from './Pages/Details';
import "./styles.css"

function App() { 
  return (
    <div> 
      <div>  
        <NavigationHeader />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favorites" element={<Favorites/>} />  
            <Route path="/Details/:id" element={<Details />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
