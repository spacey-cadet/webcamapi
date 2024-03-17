/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const webcationAPI = createApi({
    reducerPath: 'webcationAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.windy.com/',
        prepareHeaders: (headers) => {
            headers.set("x-windy-api-key", "blmpSXSlTuhU1XDQDhec9idg07Ym9hcJ");
        }
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/webcams/api/v3/categories'
        }),
        getContinents: builder.query({
            query: () => '/webcams/api/v3/continents'
        }),
        getCountries: builder.query({
            query: () => '/webcams/api/v3/countries'
        }),
        getRegions: builder.query({
            query: () => '/webcams/api/v3/countries'
        }),
        getWebcamById: builder.query({
            query: (webcamId) => `/webcams/api/v3/webcams/${webcamId}`
        }),
        getWebcams: builder.query({
            query: () => '/webcams/api/v3/webcams?&limit=20&offset=0&include=images'
        }),
        getContinentsWebcams: builder.query({
            query: (continent) => `/webcams/api/v3/webcams?lang=en&continents=${continent}&offset=0&include=images&limit=50`
        }),
        getCountryWebcams: builder.query({
            query: (country) => `/webcams/api/v3/webcams?lang=en&countries=${country}&offset=0&include=images&limit=50`
        }),
        getCategoryWebcams: builder.query({
            query: (category) => `/webcams/api/v3/webcams?lang=en&countries=${category}&offset=0&include=images&limit=50`
        }),
        getNearbyWebcams: builder.query({
            query: (specs) => `/webcams/api/v3/webcams?lang=en&nearby=${specs}&offset=0&include=images&limit=50`
        })
    })
});
export const {
    useGetWebcamsQuery,
    useGetCategoriesQuery,
    useGetContinentsQuery,
    useGetWebcamByIdQuery,
    useGetCountriesQuery,
    useGetRegionsQuery,
    useGetCategoryWebcamsQuery,
    useGetContinentsWebcamsQuery,
    useGetCountryWebcamsQuery,
    useGetNearbyWebcamsQuery
} = webcationAPI;
