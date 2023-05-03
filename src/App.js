
import Create from './components/Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Router basename='/crud'>
        <Routes>
          <Route exact path='/' element={<Create />}> </Route>
          <Route exact path='/read' element={<Read />}> </Route>
          <Route exact path='/update' element={<Update />}> </Route>
        </Routes>
      </Router>
    </div >

  );
}

export default App;
