import Button from '@/components/ui/Button'
import Row from '@/components/ui/Row'
import Wrapper from '@/components/ui/Wrapper'
import Image from 'next/image'
import { FC } from 'react'
import styles from './HeaderMain.module.scss'

const HeaderMain:FC = () => {
  return (
    <div className={styles.main}>
      <Wrapper className={styles.mainHeader}>
        <Image src={'/subtract.svg'} width={1288} height={626} alt='substract' />
        <h1>Кращий спосіб зберегти спогади</h1>
        <Row isGrid={false}>
          <button>Дізнатись більше</button>
          <p>СТВОРІТЬ СТОРІНКУ ПАМ'ЯТІ ВАШОГО РІДНОГО. ЗБЕРЕЖІТЬ ІСТОРІЮ ВАШОЇ РОДИНИ ПРЯМО ЗАРАЗ.</p>
        </Row>
      </Wrapper>
      <Wrapper>
        <Row isGrid={false}>
          <div className={styles.pageMemory}>
            <h3>Що таке “Сторінка пам’яті”?</h3>
            <p>Це інтерактивна сторінка в мережі, на якій ви зможете залишити спогади та історію про близьку людину.</p>
            <Button>Дізнатись більше</Button>
          </div>
          <div>
            <h3>Дані будуть збережені впродовж багатьох років зі швидким доступом через QR-код.</h3>
            <p>Це надасть Вам можливість побачити близьку людину, почути її голос, відчути духовний зв'язок та зберегти пам'ять про неї крізь роки.<br/>Mи також можемо встановити пароль для доступу до сторінки пам'яті або ж налаштувати доступ до неї в Інтернеті.</p>
          </div>
        </Row>
      </Wrapper>
    </div>
  )
}

export default HeaderMain