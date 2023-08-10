import { TAward, TInfo } from '@/utils/tests.data'
import Image from 'next/image'
import { FC } from 'react'
import Column from '../../Column'
import Row from '../../Row'
import styles from './ContactDetails.module.scss'

interface IDetails {
  data?: TInfo,
  awards?: TAward[]
}

const ContactDetails:FC<IDetails> = ({ data, awards }) => {
  return (
    <div 
      className={styles.block}
    >
      <p>{data? data.title : 'Нагороди'}</p>
      <p>
        {awards ?
          awards.map((item, index) => 
            <Row isGrid>
              <Column isCenter size={12 / awards.length}>
                {
                  item.image ?
                    <Image alt={item.title} src='' width={72} height={72} />
                  :
                    <div className={styles.image}></div>
                }
              </Column>
            </Row>
          )
        : data? data.value: ''}
      </p>
    </div>
  )
}

export default ContactDetails