import Column from '@/components/ui/Column'
import Row from '@/components/ui/Row'
import Tags from '@/components/ui/Tags'
import ContactDetails from '@/components/ui/elements/contactDetails/ContactDetails'
import { FC } from 'react'
import { ICemeteryData } from '../Info'
import styles from './Data.module.scss'

const Data:FC<ICemeteryData> = ({ data }) => {
  return (
    <Column isCenter={false} size={8} className={styles.content}>
      <h2 className='smallTitle'>{data.title}</h2>
      <Tags data={data.data} />
      <Row className={styles.contacts}>
        {data.info.map((item, index) => 
          <ContactDetails data={item} key={index} />
        )}
      </Row>
      <p className={styles.description}>{data.description}</p>
    </Column>
  )
}

export default Data