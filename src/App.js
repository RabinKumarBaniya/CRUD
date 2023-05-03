
import Create from './components/Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Read from './components/Read';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Create />}> </Route>
          <Route exact path='/read' element={<Read />}> </Route>
        </Routes>
      </Router>
    </div >

  );
}

export default App;
