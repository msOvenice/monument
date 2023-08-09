import Button from '@/components/ui/Button'
import Row from '@/components/ui/Row'
import SliderSlick from '@/components/ui/Slider'
import Wrapper from '@/components/ui/Wrapper'
import { FC } from 'react'
import styles from './Pages.module.scss'

const Pages:FC = () => {
  return (
    <Wrapper>
      <h2 className='subtitle'>Сторінки пам'яті</h2>
      <Row isGrid={false}>
        <div className={styles.data}>
          <p>Переглядайте сторінки пам’яті наших користувачів</p>
          <Button>Дивитись усі</Button>
        </div>
        <SliderSlick />
      </Row>
    </Wrapper>
  )
}

export default Pages