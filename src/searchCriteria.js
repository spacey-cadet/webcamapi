import { useGetCategoriesQuery,useGetCountriesQuery,
    useGetContinentsQuery } from "./features/apiSlice"
    import { Outlet } from "react-router"

const SearchCriteria = () => {

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
  
  return (
    <div className="landing">
      <div className="searches">
        <div className='continents'>
          <h5>Continents</h5>
        {continents.map(continent=>(
              <div key={continent.id}>{continent.name}</div>
          ))}
        </div>
        <div className='categories'>
          <h5>Categories</h5>
          {
            categories.map(category=>(
                <div key={category.id}>{category.name}</div>

            ))
          }
        </div>
        <div className='countries'>
          <h5>Countries</h5>
          {
            countries.map(country=>(
                <div key={country.id}>{country.name}</div>
            ))
          }
        </div>
      </div>
      <div className="outlet"><Outlet/></div>
       <div className="coordinates"></div>
      
    </div>
  )
}

export default SearchCriteria