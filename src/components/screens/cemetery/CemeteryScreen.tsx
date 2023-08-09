import Wrapper from '@/components/ui/Wrapper'
import Breadcrumbs from '@/components/ui/breadcrumbs/Breadcrumbs'
import { IHuman, TCemetery } from '@/utils/tests.data'
import { FC } from 'react'
import Info from './info/Info'
import PagesMemory from './pagesMemory/PagesMemory'

interface ICemeteryData {
  data: TCemetery | undefined,
  people: IHuman[] | undefined
}

const CemeteryScreen:FC<ICemeteryData> = ({ data, people }) => {
  return (
    data ? (
      <Wrapper>
        <Breadcrumbs path={['Кладовища', data.title]} />
        <Info data={data} />
        {people ? <PagesMemory people={people} /> : <p>Loading...</p>}
      </Wrapper>
    ) : <p>Loading...</p>
  )
}

export default CemeteryScreen