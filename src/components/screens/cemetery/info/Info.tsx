import Button from '@/components/ui/Button'
import Column from '@/components/ui/Column'
import Row from '@/components/ui/Row'
import { TCemetery } from '@/utils/tests.data'
import Image from 'next/image'
import { FC } from 'react'
import { FiShare } from 'react-icons/fi'
import styles from './Info.module.scss'
import Data from './data/Data'

export interface ICemeteryData {
  data: TCemetery
}

const Info:FC<ICemeteryData> = ({ data }) => {
  return (
    <section className={styles.info}>
      <Row isGrid>
        <Column size={4} className={styles.photo}>
          <Image src={data.images} alt={data.title} width={392} height={392} />
          <Button>
            <FiShare size={22} color='#fff'  />
            Поширити
          </Button>
        </Column>
        <Data data={data} />
      </Row>
    </section>
  )
}

export default Info