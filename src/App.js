import './App.css';
import { BrowserRouter as  Router, Routes,  Route } from 'react-router-dom'
import Landing from './landing';
import SearchCriteria from './searchCriteria';

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<SearchCriteria/>}>
          <Route index element={<Landing/>}/>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
