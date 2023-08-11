import { FC } from 'react'
import { BiSolidQuoteSingleLeft } from 'react-icons/bi'
import styles from './Quote.module.scss'

const Quote:FC<{quote: string}> = ({ quote }) => {
  return (
    <blockquote className={styles.quote}>
      <span>
        <BiSolidQuoteSingleLeft size={88} color='#BDB8FF' />
        <BiSolidQuoteSingleLeft size={88} color='#BDB8FF' />
      </span>
      {quote}
    </blockquote>
  )
}

export default Quote