import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
 
export type Cemetery = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
 };

export const apiSlice = createApi({
 reducerPath: "api",
 baseQuery: fetchBaseQuery({
   baseUrl: "https://api.escuelajs.co/api/v1/",
 }),
 endpoints: (builder) => ({
   getCemenery: builder.query<Cemetery[], null>({
     query: () => "/products?limit=20&offset=10",
   }),
 }),
});
 
// custom hooks based on the methods that we provide
export const { useGetCemeneryQuery } = apiSlice;