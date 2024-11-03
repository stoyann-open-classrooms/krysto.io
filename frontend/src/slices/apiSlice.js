import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Si Event, PlasticColor, PlasticType, Recipes, Veilles sont des chaînes de caractères
const tagTypes = [
  'User',
 
]

const baseQuery = fetchBaseQuery({ baseUrl: process.env.BASE_URL })


export const apiSlice = createApi({
  baseQuery,
  tagTypes,
  endpoints: (builder) => ({}),
})

