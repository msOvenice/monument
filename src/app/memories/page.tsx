"use client";
import Layout from '@/components/layout/layoutCustom/Layout'
import { useGetPeopleQuery } from '@/redux/services/userApi'
import { NextPage } from 'next'

const MemoriesPage: NextPage = () => {
  const { isLoading, isFetching, data, error } = useGetPeopleQuery(null);
  const path = ['Спогади'];
  
  return (
    error ? (
      <p>Oh no, there was an error</p>
    ) : isFetching || isLoading ? (
      <p>Loading...</p>
    ) : (
      <main>
        <Layout data={data ?? []} path={path} />
      </main>
    )
  )
}

export default MemoriesPage