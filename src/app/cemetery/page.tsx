"use client";
import Layout from '@/components/layout/layoutCustom/Layout'
import { useGetCemeteryQuery } from '@/redux/services/userApi'
import { NextPage } from 'next'

const CemeteryPage: NextPage = () => {
  const { isLoading, isFetching, data, error } = useGetCemeteryQuery(null);
  const path = ['Кладовища'];
  
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

export default CemeteryPage