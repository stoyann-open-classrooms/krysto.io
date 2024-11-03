import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './constants'



// Si Event, PlasticColor, PlasticType, Recipes, Veilles sont des chaînes de caractères
const tagTypes = [
  'User',
 
]

const baseQuery = fetchBaseQuery({ baseUrl:BASE_URL })


export const apiSlice = createApi({
  baseQuery,
  tagTypes,
  endpoints: (builder) => ({}),
})

