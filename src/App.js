import './App.css';
import { BrowserRouter as  Router, Routes,  Route } from 'react-router-dom'
import Landing from './landing';
import SearchCriteria from './searchCriteria';
import CountrytResultComponent from './countryresult';
import CategoryResultComponent from './categoryresult';
import ContinentResultComponent from './continentresult';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SearchCriteria/>}>
          <Route index element={<Landing/>}/>
          <Route path='country/:countrycode/:countryname' element={<CountrytResultComponent/>}/>
          <Route path='category/:categoryid/:categoryname' element={<CategoryResultComponent/>}/>
          <Route path='continent/:continentcode/:continentname' element= {<ContinentResultComponent/>}/>
          <Route path='nearbysearch/:nearby' />
          <Route path='geographicalsearch/:bbox' />
          <Route path=':webcamId'/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
