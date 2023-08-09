import { INews } from '@/utils/tests.data'
import Link from 'next/link'
import { FC } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Column from '../../Column'
import Row from '../../Row'
import Tag from '../Tag'
import styles from './BlockNews.module.scss'

interface IBlockNews {
  item: INews
}

const BlockNews:FC<IBlockNews> = ({ item }) => {
  return (
    <Column size={4} isCenter={false} className={styles.block}>
      <Row isGrid={false}>
        <p>{item.data}</p>
        <Tag category={true}>{item.category}</Tag>
      </Row>
      <Link href={'/'} className='mb-6 text-3xl font-serif leading-[38.4px]'>{item.title}</Link>
      <p className='leading-7 text-[17px] mb-6'>{item.description}</p>
      <Link href={'/'} className='mr-auto'><FiArrowRight size={48} color='#5F51FF' /></Link>
    </Column>
  )
}

export default BlockNews