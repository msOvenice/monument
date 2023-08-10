import { TServices } from '@/utils/tests.data'
import { FC } from 'react'
import Column from '../../Column'
import styles from './BlockMemory.module.scss'

interface Memory {
  service: TServices
}

const BlockMemory:FC<Memory> = ({ service }) => {
  return (
    <Column size={4} className={styles.block}>
      <div>
        <p>{service.title}</p>
      </div>
      <p>{service.description}</p>
    </Column>
  )
}

export default BlockMemory