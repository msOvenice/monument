import Button from '@/components/ui/Button'
import Row from '@/components/ui/Row'
import { FC } from 'react'
import styles from './Buttons.module.scss'

const Buttons:FC = () => {
  return (
    <Row className={styles.content}>
      <button>Увійти</button>
      <Button>Зареєструватись</Button>
    </Row>
  )
}

export default Buttons