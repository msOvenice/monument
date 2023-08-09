import Wrapper from '@/components/ui/Wrapper'
import Breadcrumbs from '@/components/ui/breadcrumbs/Breadcrumbs'
import { IHuman } from '@/utils/tests.data'
import { FC } from 'react'
import Info from './info/Info'

interface IHumanData {
  data: IHuman | undefined
}

const Memory:FC<IHumanData> = ({ data }) => {
  return (
    data ? (
      <Wrapper>
        <Breadcrumbs path={['Спогади', data.title]} />
        <Info data={data} />
      </Wrapper>
    ) : (
      <p>Loading...</p>
    )
  )
}

export default Memory