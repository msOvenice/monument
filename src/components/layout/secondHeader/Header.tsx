import Button from '@/components/ui/Button'
import Row from '@/components/ui/Row'
import Breadcrumbs from '@/components/ui/breadcrumbs/Breadcrumbs'
import { FC } from 'react'
import { FaFilter } from 'react-icons/fa'
import { RiRoadMapFill } from 'react-icons/ri'
import styles from './Header.module.scss'

interface IHeader {
  path: string[]
}

const Header:FC<IHeader> = ({ path }) => {
  const headerTitle = [...path]

  return (
    <>
      <Breadcrumbs path={path} />
      <Row isGrid={false} className={styles.content}>
        <h2 className='subtitle'>{headerTitle.pop()}</h2>
        <nav>
          <Button>
            <FaFilter size={22} color='#fff' className={styles.icon} />
            Фільтр
          </Button>
          <Button custom={true}>
            <RiRoadMapFill size={22} color='#000' className={styles.icon} />
            Карта
          </Button>
        </nav>
      </Row>
    </>
  )
}

export default Header