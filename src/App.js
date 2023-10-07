import './App.css';
import { BrowserRouter as  Router, Routes,  Route } from 'react-router-dom'
import { useGetCategoriesQuery} from './features/apiSlice';
import Landing from './landing';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Landing/>} 
              loader={useGetCategoriesQuery}/>
      </Routes>
    </Router>


  );
}

export default App;
