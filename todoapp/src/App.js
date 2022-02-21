import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is Practice Todo list</h1>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
