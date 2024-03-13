/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing';
import SearchCriteria from './searchCriteria';
import CountrytResultComponent from './countryresult';
import CategoryResultComponent from './categoryresult';
import ContinentResultComponent from './continentresult';
import GetLocationComponent from './getlocation';
import NearbyWebcamsComponent from './nearby';
import HeaderComponent from './header';

function App () {
    return (
        <Router>
            <Routes>
                <Route element={<HeaderComponent/>}>
                    <Route path="/" element={<SearchCriteria/>}>
                        <Route index element={<Landing/>}/>
                        <Route path="country/:countrycode/:countryname" element={<CountrytResultComponent/>}/>
                        <Route path="category/:categoryid/:categoryname" element={<CategoryResultComponent/>}/>
                        <Route path="continent/:continentcode/:continentname" element= {<ContinentResultComponent/>}/>
                        <Route path="nearbysearch" element={<GetLocationComponent/>}>
                            <Route path=":nearby" element={<NearbyWebcamsComponent/>}/>
                        </Route>
                        <Route path="geographicalsearch/:bbox" />
                        <Route path=":webcamId"/>
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
