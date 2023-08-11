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
      <p>{data ? data.title : 'Нагороди'}</p>
      <div>
        {awards ? (
          <Row isGrid>
            {awards.map((item, index) => 
                <Column size={12 / awards.length} key={index}>
                  {
                    item.image ?
                      <Image alt={item.title} src={item.image} width={72} height={72} />
                    :
                      <div className={styles.image}></div>
                  }
                  <p>{item.title}</p>
                </Column>
            )}
          </Row>
        ) : data ? <p>{data.value}</p> : ''
        }
      </div>
    </div>
  )
}

export default ContactDetails