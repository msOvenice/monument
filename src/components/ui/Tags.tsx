import { TData } from '@/utils/tests.data'
import { FC } from 'react'
import Row from './Row'
import TagBig from './elements/tagBig/TagBig'

interface IData {
  data: TData[]
  card?: boolean
}

const Tags:FC<IData> = ({ data, card }) => {  
  const itemsToMap = card ? data.slice(0, 2) : data

  return (
    <Row isGrid={false}>
        {itemsToMap.map((item, index) =>
          index == 0 ?
            <TagBig first={true} data={item} key={index} />
          : 
            <TagBig data={item} key={index} />
        )}
      </Row>
  )
}

export default Tags