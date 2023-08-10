"use client"
import Column from '@/components/ui/Column'
import Row from '@/components/ui/Row'
import Wrapper from '@/components/ui/Wrapper'
import SocialItems from '@/components/ui/elements/SocialItems'
import Form from '@/components/ui/elements/formSmall/Form'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import LogoSVG from '../../../../img/assets/Logo'
import styles from './Footer.module.scss'

const dataFirst = [
  {name: "Спогади", link: "/"},
  {name: "Послуги", link: "/"},
  {name: "Про нас", link: "/"},
  {name: "FAQ", link: "/"},
  {name: "Новини", link: "/"},
]
const dataSecond = [
  {name: "Політика користування", link: "/"},
  {name: "Технічна сторінка", link: "/"},
  {name: "Технічна сторінка", link: "/"},
]

const Footer:FC = () => {
  return (
    <footer className={styles.footer}>
      <Image src={'/SubtractFooter.svg'} width={1053} height={390} alt='substract' className={styles.bg} />
      <Wrapper>
        <Row isGrid className={styles.content}>
          <Column size={2}>
            <LogoSVG text='#ffffff' icon='#ffffff' />
            <SocialItems />
          </Column>
          <Column size={2}>
            {dataFirst.map((data, index) => 
              <Link href={data.link} key={index}>{data.name}</Link>
            )}
          </Column>
          <Column size={4}>
            {dataSecond.map((data, index) => 
              <Link href={data.link} key={index}>{data.name}</Link>
            )}
          </Column>
          <Column size={4}>
            <h2>Підпишіться на нашу розсилку</h2>
            <Form />
          </Column>
        </Row>
        <p>PastQR, 2023</p>
      </Wrapper>
    </footer>
  )
}

export default Footer