import Button from '@/components/ui/Button'
import Column from '@/components/ui/Column'
import Row from '@/components/ui/Row'
import { IHuman } from '@/utils/tests.data'
import Image from 'next/image'
import { FC } from 'react'
import { FiShare } from 'react-icons/fi'
import { MdOutlineQrCode } from 'react-icons/md'
import styles from './Info.module.scss'
import Data from './data/Data'

export interface IHumanData {
  data: IHuman
}

const Info:FC<IHumanData> = ({ data }) => {
  return (
    <section className={styles.info}>
      <Row isGrid={true}>
        <Column isCenter={false} size={4} className={styles.photo}>
          <Image src={data.images} alt={data.title} width={392} height={392} />
          <Button>
            <MdOutlineQrCode size={22} color='#fff'  />
            QR-код
          </Button>
          <Button custom={true}>
            <FiShare size={22} color='#000'  />
            Поширити
          </Button>
        </Column>
        <Data data={data} />
      </Row>
    </section>
  )
}

export default Info