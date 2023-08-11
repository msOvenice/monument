import Wrapper from '@/components/ui/Wrapper'
import Breadcrumbs from '@/components/ui/breadcrumbs/Breadcrumbs'
import { IDetailHuman } from '@/utils/tests.data'
import { FC } from 'react'
import Biography from './biography/Biography'
import Info from './info/Info'

interface IHumanData {
  data: IDetailHuman | undefined
}

const Memory:FC<IHumanData> = ({ data }) => {
  return (
    data ? (
      <>
        <Wrapper>
          <Breadcrumbs path={['Спогади', data.name]} />
          <Info data={data} />
        </Wrapper>
        <Biography data={data} />
      </>
    ) : (
      <p>Loading...</p>
    )
  )
}

export default Memory