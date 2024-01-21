import { useGetCategoriesQuery,useGetCountriesQuery,
    useGetContinentsQuery } from "./features/apiSlice"
    import { Outlet } from "react-router"
    import { Link } from "react-router-dom"


const SearchCriteriaComponent = () => {
  
 

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
              <Link className='link' key={continent.id} to={`continent/${continent.name}`}>{continent.name}</Link>
          ))) :  (<div>Something went wrong</div>)}
        </div>
        <div className='categories'>
          <h5>Categories</h5>
          {
        categories.length ? (categories.map(category=>(
              <Link className='link'  key={category.id} to={`category/${category.name}`}>{category.name}</Link>
          ))) :  (<div>Something went wrong</div>)}
        </div>
        <div className='countries'>
          <h5>Countries</h5>
          {
            countries.length ? (countries.map(country=>(
                <Link className='link' key={country.id} to={`country/${country.name}`}>{country.name}</Link>
            ))) : (<div>Something went wrong</div>)
          }
        </div>
      </div>
      <div className="outlet"><Outlet/></div>
      <div className="nearby">
        <h4>See webcams near you</h4>
      </div>
    </main>
  )
}

export default SearchCriteriaComponent