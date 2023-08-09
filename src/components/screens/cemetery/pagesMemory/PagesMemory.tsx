import Button from '@/components/ui/Button'
import Column from '@/components/ui/Column'
import Row from '@/components/ui/Row'
import Card from '@/components/ui/card/Card'
import { IHuman } from '@/utils/tests.data'
import { FC } from 'react'
import styles from './PagesMemory.module.scss'

const PagesMemory:FC<{people: IHuman[]}> = ({ people }) => {  
  return (
    <section className={styles.content}>
      <h3 className='customTitle'>Сторінки пам'яті</h3>
      <Row isGrid={true} className={styles.pages}>
        {
          people.slice(0, 4).map((item) => (
            <Column isCenter={true} size={3} key={item.id}>
              <Card data={item} flag='/memories' />
            </Column>
          ))
        }
      </Row>
      <Button>Дивитись усі</Button>
    </section>
  )
}

export default PagesMemory