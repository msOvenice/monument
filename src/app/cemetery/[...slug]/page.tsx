"use client"
import CemeteryScreen from '@/components/screens/cemetery/CemeteryScreen'
import { useGetCemeteryInfoQuery, useGetPeopleQuery } from '@/redux/services/userApi'
import { NextPage } from 'next'
import { useParams } from 'next/navigation'

const Cemetery: NextPage = () => {
  const params = useParams()
  const id = Number(params.slug[0])
  const {data: allCemeteries, isLoading, isError} = useGetCemeteryInfoQuery(id)
  const cemetery = allCemeteries?.find(cemetery => cemetery.id === id)

  const {data: allPeople} = useGetPeopleQuery(null)
  const people = allPeople?.filter(human => human.cemetary === cemetery?.title)
  
  return (
    <main>
      <CemeteryScreen data={cemetery} people={people} />
    </main>
  )
}

export default Cemetery