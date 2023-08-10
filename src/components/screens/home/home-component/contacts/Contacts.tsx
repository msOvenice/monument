import Row from '@/components/ui/Row'
import Wrapper from '@/components/ui/Wrapper'
import BlockContacts from '@/components/ui/elements/BlockContacts'
import { FC } from 'react'
import Form from '../../../../ui/elements/form/Form'
import styles from './Contacts.module.scss'

const Contacts: FC = () => {
  return (
    <Wrapper className={styles.contacts}>
      <Row>
        <div>
          <h2 className='subtitle'>Контакти</h2>
          <p className={styles.description}>Якщо ви маєте питання щодо покупки послуги -<br/>зателефонуйте нам</p>
          <BlockContacts />
        </div>
        <Form />
      </Row>
      
    </Wrapper>
  )
}

export default Contacts