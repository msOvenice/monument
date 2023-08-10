import { TData } from '@/utils/tests.data'
import { FC } from 'react'
import { IoIosPeople } from 'react-icons/io'
import Flag from '../../../../../img/assets/Flag'
import styles from './TagBig.module.scss'

interface ITagBig {
  first?: boolean,
  card?: boolean,
  data: TData
}

const TagBig:FC<ITagBig> = ({ first, card, data }) => {
  return (
    <div className={
      first ? (
        card ? styles.card : styles.first
      ) : styles.default
    }>
      {data.title === 'people' && <IoIosPeople size={24} color='#5F51FF' />}
      {data.title === 'ukrainian' && <Flag />}
      <p className={styles.text}>{data.value}</p>
    </div>
  )
}

export default TagBig