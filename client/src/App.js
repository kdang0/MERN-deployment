import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Add from './views/Add';
import Update from './views/Update';
import Display from './views/Display';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Add/>} path="/pirates/add"/>
        <Route element={<Update/>} path="/pirates/update/:id"/>
        <Route element={<Display/>} path="/pirates/display/:id"/>
      </Routes>
    </div>
  );
}

export default App;
