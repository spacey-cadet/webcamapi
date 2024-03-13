/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { useGetCategoriesQuery, useGetCountriesQuery,
    useGetContinentsQuery } from "./features/apiSlice";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const SearchCriteriaComponent = () => {
    const { data: countries } = useGetCountriesQuery();
    const { data: categories, isLoading: isLoadingcategories, isError: isErrorCategories } = useGetCategoriesQuery();
    const { data: continents, isLoading: isLoadingContinents, isError: isErrorContinents } = useGetContinentsQuery();

    if (isLoadingContinents) {
        return '...';
    }
    if (isLoadingcategories) {
        return '...';
    }
    if (isErrorCategories) {
        return 'something went wrong :(';
    }
    if (isErrorContinents) {
        return 'something went wrong :(';
    }
    console.log(countries);
    console.log(categories);
    console.log(continents);


    return (
        <main className="landing">
            <div className="searches">
                <div className="continents">
                    <h5>Continents</h5>
                    {
                        continents.length ? (continents.map(continent => (
                            <Link className="link" key={continent.id} to={`continent/${continent.code}/${(continent.name).replace(/\s|\//g, "")}`}>{continent.name}</Link>
                        ))) : (<div>Something went wrong</div>)}
                </div>
                <div className="categories">
                    <h5>Categories</h5>
                    {
                        categories.length ? (categories.map(category => (
                            <Link className="link" key={category.id} to={`category/${category.id}/${(category.name).replace(/\s|\//g, "")}`}>{category.name}</Link>
                        ))) : (<div>Something went wrong</div>)}
                </div>
                <div className="countries">
                    <h5>Countries</h5>
                    {
                        countries.length ? (countries.map(country => (
                            <Link className="link" key={country.code} to={`country/${country.code}/${(country.name).replace(/\s|\//g, "")}`}>{country.name}</Link>
                        ))) : (<div>Something went wrong</div>)
                    }
                </div>
            </div>
            <div className="outlet"><Outlet/></div>
            <div className="nearby">
                <Link to="nearbysearch" className="button link" >See webcams near you</Link>
            </div>
        </main>
    );
};

export default SearchCriteriaComponent;
