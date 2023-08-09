"use client"
import Memory from '@/components/screens/memory/Memory'
import { useGetPeopleQuery } from '@/redux/services/userApi'
import { useParams } from 'next/navigation'

const Human = () => {
  const params = useParams()
  const id = Number(params.slug[0])
  const {data: people, isLoading, isError} = useGetPeopleQuery(null)
  const human = people?.find(human => human.id === id)

  return (
    <main>
      <Memory data={human} />
    </main>
  )
}

export default Human