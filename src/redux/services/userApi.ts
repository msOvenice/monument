import mockFetch from '@/utils/mocks'
import { IHuman, IInfo, INews, IService, TCemetery, TContact, TSocial, TUser } from '@/utils/tests.data'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    fetchFn: mockFetch,
  }),
  endpoints: (builder) => ({
    getCemetery: builder.query<TCemetery[], null>({
      query: () => 'cemetery',
    }),
    getCemeteryInfo: builder.query<TCemetery[], number>({
      query: (id) => ({ url: `cemetery`, params: { id } }),
    }),
    getPeople: builder.query<IHuman[], null>({
      query: () => "people",
    }),
    getInfoServicesData: builder.query<IInfo, null>({
      query: () => "info",
    }),
    getServices: builder.query<IService, null>({
      query: () => "services",
    }),
    getNews: builder.query<INews[], null>({
      query: () => "news",
    }),
    getContacts: builder.query<TContact[], null>({
      query: () => "contacts",
    }),
    getSocial: builder.query<TSocial[], null>({
      query: () => "social",
    }),
    getUserById: builder.query<TUser, { id: string }>({
      query: ({ id }) => `users/${id}`,
    }),
  }),
});

export const { useGetCemeteryQuery, useGetCemeteryInfoQuery, useGetPeopleQuery, useGetUserByIdQuery, useGetServicesQuery, useGetNewsQuery, useGetContactsQuery, useGetSocialQuery, useGetInfoServicesDataQuery } = userApi;
