import { TData } from '@/utils/tests.data'
import { FC } from 'react'
import { IoIosPeople } from 'react-icons/io'
import styles from './TagBig.module.scss'
import Flag from '/src/img/Flag.svg'

interface ITagBig {
  first?: boolean,
  data: TData
}

const TagBig:FC<ITagBig> = ({ first, data }) => {
  return (
    <div className={
      first ? styles.first : styles.default
    }>
      {data.title === 'people' && <IoIosPeople size={24} color='#5F51FF' />}
      {data.title === 'ukrainian' && <Flag />}
      <p className={styles.text}>{data.value}</p>
    </div>
  )
}

export default TagBig