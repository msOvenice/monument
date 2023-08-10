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
    <Column size={4} className={styles.block}>
      <Row>
        <p>{item.data}</p>
        <Tag category>{item.category}</Tag>
      </Row>
      <Link href={'/'} className={styles.title}>{item.title}</Link>
      <p>{item.description}</p>
      <Link href={'/'}>
        <FiArrowRight size={48} color='#5F51FF' />
      </Link>
    </Column>
  )
}

export default BlockNews