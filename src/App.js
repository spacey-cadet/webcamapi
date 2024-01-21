import './App.css';
import { BrowserRouter as  Router, Routes,  Route } from 'react-router-dom'
import Landing from './landing';
import SearchCriteria from './searchCriteria';

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path='/webcams/' element={<SearchCriteria/>}>
          <Route index element={<Landing/>}/>
          <Route path='country/:countryname'/>
          <Route path='category/:countryname'/>
          <Route path='continent/:categoryname'/>
          <Route path='nearbysearch/:nearby'/>
          <Route path='geographicalsearch/:bbox'/>
          <Route path=':webcamId'/>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
