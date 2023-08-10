import Column from '@/components/ui/Column'
import Row from '@/components/ui/Row'
import Tags from '@/components/ui/Tags'
import ContactDetails from '@/components/ui/elements/contactDetails/ContactDetails'
import { FC } from 'react'
import { IHumanData } from '../Info'
import styles from './Data.module.scss'

const Data:FC<IHumanData> = ({ data }) => {
  return (
    <Column size={8} className={styles.content}>
      <h2 className='smallTitle'>{data.title}</h2>
      <Tags data={data.data} />
      <Row isGrid className={styles.contacts}>
        {data.info.slice(0,3).map((item, index) => 
          <Column size={4}>
            <ContactDetails data={item} key={index} />
          </Column>
        )}
      </Row>
      <Row isGrid className={styles.contacts}>
        {data.info.slice(3,5).map((item, index) => 
          <Column size={6}>
            <ContactDetails data={item} key={index} />
          </Column>
        )}
      </Row>
      <ContactDetails awards={data.awards} />
    </Column>
  )
}

export default Data