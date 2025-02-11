import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { DemoModel } from "../Models/demo"


// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { Pokemon } from './types'

// // Define a service using a base URL and expected endpoints
// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query<Pokemon, string>({
//       query: (name) => `pokemon/${name}`,
//     }),
//     getMyNewCustomEndpoint: builder.query<Pokemon, string>({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// })
// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery, useGetMyNewCustomEndpoint } = pokemonApi


export const demoApi = createApi({
    reducerPath: "api/demo",
    keepUnusedDataFor: 10,
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapiserver.reactbd.com" }),
    endpoints: builder => ({
        demo: builder.query<DemoModel, void>({
            query: (name) => '/smart'
        })
    })
})


export const { useDemoQuery, useLazyDemoQuery } = demoApi;