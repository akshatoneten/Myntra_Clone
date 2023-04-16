import './App.css';
import { Route , Routes } from 'react-router-dom';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Homeliving from './components/Homeliving';
import Mainheader from './components/Mainheader';
import Home from './components/Home';
import Beauty from './components/Beauty';
import Studio from './components/Studio';
import Notfound from './components/Notfound';

function App() {
  return (
    <div >    

    <Routes>
          <Route path="/" element={<Mainheader></Mainheader>}>
              <Route index element={<Home/>}></Route>
              <Route path="/Women" element={<Women/>}></Route>
              <Route path="/Kids" element={<Kids/>}></Route>
              <Route path="/Homeliving" element={<Homeliving/>}></Route>
              <Route path="/Men" element={<Men/>}></Route>
              <Route path="/Beauty" element={<Beauty/>}></Route>
              <Route path="/Studio" element={<Studio/>}></Route>
              <Route path="*" element ={<Notfound/>}></Route>
          </Route>
    </Routes>
    </div>
  );
}

export default App;
