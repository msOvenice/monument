import Row from '@/components/ui/Row'
import Wrapper from '@/components/ui/Wrapper'
import { FC } from 'react'
import styles from './Header.module.scss'
import Buttons from './buttons/Buttons'
import Menu from './menu/Menu'

const Header:FC = () => {
  return (
    <header className={styles.content}>
      <Wrapper>
        <Row>
          <Menu />
          <Buttons />
        </Row>
      </Wrapper>
    </header>
  )
}

export default Header