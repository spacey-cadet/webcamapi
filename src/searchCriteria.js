import { useGetCategoriesQuery,useGetCountriesQuery,
    useGetContinentsQuery } from "./features/apiSlice"
    import { Outlet } from "react-router"
    import { Link } from "react-router-dom"
    import { useState } from "react"


const SearchCriteriaComponent = () => {
  const [SelectedValue, setSelectedValue]= useState({
    country:'', continent: '', category:''
  })
 

  const {data: countries }= useGetCountriesQuery()
  const {data: categories , isLoading: isLoadingcategories, isError: isErrorCategories}= useGetCategoriesQuery()
  const {data: continents , isLoading:isLoadingContinents, isError: isErrorContinents}= useGetContinentsQuery()

    if(isLoadingContinents){
        return '...'
      }
    if(isLoadingcategories){
      return '...'
    }
    if(isErrorCategories){
      return 'something went wrong :('
    }
    if(isErrorContinents){
      return 'something went wrong :('
    }

      console.log(categories)
      console.log(continents)
      console.log(countries)
   
  return (
    <main className="landing">
      <div className="searches">
        <div className='continents'>
          <h5>Continents</h5>
        {
        continents.length ? (continents.map(continent=>(
              <Link key={continent.id} to={`continent/${continent.name}`}>{continent.name}</Link>
          ))) :  (<div>Something went wrong</div>)}
        </div>
        <div className='categories'>
          <h5>Categories</h5>
          {
        categories.length ? (categories.map(category=>(
              <Link key={category.id} to={`category/${category.name}`}>{category.name}</Link>
          ))) :  (<div>Something went wrong</div>)}
        </div>
        <div className='countries'>
          <h5>Countries</h5>
          {
            countries.length ? (countries.map(country=>(
                <Link key={country.id} to={`country/${country.name}`}>{country.name}</Link>
            ))) : (<div>Something went wrong</div>)
          }
        </div>
      </div>
      <div className="outlet"><Outlet/></div>
      <form  className="select">
        <div className='search-dropdown'>
          <select name='continents' onChange={(e)=>setSelectedValue({...SelectedValue,continent: e.target.value })}>
          <label>Select continent :</label>
            {continents.map(object=>(
                <option key={object.code} value={object.name}>{object.name}</option>
                ))}
            </select>
        </div>
        <div className='search-dropdown'>
          <select name='categoreis' onChange={(e)=>setSelectedValue({...SelectedValue,category: e.target.value })}>
          <label>Select category :</label>
            {categories.map(object=>(
                <option key={object.code} value={object.name}>{object.name}</option>
            ))}
          </select>
        </div>
        <div className='search-dropdown'>
          <select name='countries' onChange={(e)=>setSelectedValue({...SelectedValue,country: e.target.value })}>
          <label>Select country :</label>
            {countries.map(object=>(
                <option key={object.code} value={object.name}>{object.name}</option>
                ))}
            </select>
        </div>
        <button>
          <Link to={``}>
              Search webcams
          </Link>
        </button>
      </form>
    </main>
  )
}

export default SearchCriteriaComponent