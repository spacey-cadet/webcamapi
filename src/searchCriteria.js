import { useGetCategoriesQuery,useGetCountriesQuery,
    useGetContinentsQuery } from "./features/apiSlice"
    import { Outlet } from "react-router"
    import { useState } from "react"

const SearchCriteria = () => {
  const [SelectedValue, setSelectedValue]= useState('')
 

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
   
  function SelectComponent({array, label}){
        return( <select value={SelectedValue} onChange={(e)=>handleSelectChange(e)}>
                <label>Select {label}:</label>
                {array.map(object=>(
                  Object.entries(object).map(([key, value])=>(
                    <option key={key} value={key}>{value}</option>
                  )) 
                ))
                }
                <p>{SelectedValue}</p>
              </select>)
  }

  const  handleSelectChange=(event)=>{
    const value=event.target.value
    setSelectedValue(value)
  }
      
  
  return (
    <main className="landing">
      <div className="searches">
        <div className='continents'>
          <h5>Continents</h5>
        {
        continents.length ? (continents.map(continent=>(
              <div key={continent.id}>{continent.name}</div>
          ))) :  (<div>Something went wrong</div>)}
        </div>
        <div className='categories'>
          <h5>Categories</h5>
          {
        categories.length ? (categories.map(category=>(
              <div key={category.id}>{category.name}</div>
          ))) :  (<div>Something went wrong</div>)}
        </div>
        <div className='countries'>
          <h5>Countries</h5>
          {
            countries.length ? (countries.map(country=>(
                <div key={country.id}>{country.name}</div>
            ))) : (<div>Something went wrong</div>)
          }
        </div>
      </div>
      <div className="select">
        <div className='search-dropdown'>
            <SelectComponent array={continents} label='continents'/>
        </div>
        <div className='search-dropdown'>
            <SelectComponent array={countries} label='countries'/>
        </div>
        <div className='search-dropdown'>
            <SelectComponent array={categories} label='categories'/>
        </div>
      </div>
      <div className="outlet"><Outlet/></div>
    </main>
  )
}

export default SearchCriteria