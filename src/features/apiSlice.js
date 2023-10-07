import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const webcationAPI = createApi({
    reducerPath: 'webcationAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.windy.com/',
        prepareHeaders: (headers)=>{
            headers.set("x-windy-api-key", "blmpSXSlTuhU1XDQDhec9idg07Ym9hcJ")
        }
    }),
    endpoints: (builder)=>({
        getCategories: builder.query({
            query: ()=> '/webcams/api/v3/categories'
        }),
        getContinents: builder.query({
            query: ()=> '/webcams/api/v3/continents'
        }),
        getCountries: builder.query({
            query: ()=> '/webcams/api/v3/countries'
        }),
        getRegions: builder.query({
            query: ()=> '/webcams/api/v3/countries'
        }),
        getWebcamById: builder.query({
            query: (webcamId)=> `/webcams/api/v3/webcams/${webcamId}`
        }),
        getWebcams: builder.query({
            query: ()=> '/webcams/api/v3/webcams?&limit=20&offset=0&include=images'
        })
    })

    
    
    
})
export const {
    useGetWebcamsQuery,
    useGetCategoriesQuery, 
    useGetContinentsQuery, 
    useGetWebcamByIdQuery,
    useGetCountriesQuery,
    useGetRegionsQuery
} = webcationAPI