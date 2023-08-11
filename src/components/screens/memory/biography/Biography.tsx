import Column from '@/components/ui/Column'
import Row from '@/components/ui/Row'
import Wrapper from '@/components/ui/Wrapper'
import Quote from '@/components/ui/elements/quote/Quote'
import Image from 'next/image'
import { FC } from 'react'
import { IHumanData } from '../info/Info'
import styles from './Biography.module.scss'

const Biography:FC<IHumanData> = ({ data }) => {
  const {biography, test1, test2, quote, test3} = data

  const renderParagraphs = (text: string) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };

  return (
    <Wrapper>
      <section className={styles.biography}>
        <Row>
          <h2 className='customTitle'>Біографія</h2>
          <p>{biography}</p>
        </Row>
        {test1 ? (
          <>
          <Row>
            <h3 className='smallTitle'>Заголовок</h3>
            <p>{test1.text}</p>
          </Row>
          <Row isGrid className={styles.photos}>
            <Column size={5} className={styles.img}>
              <Image src={test1.photos[0].url} alt='alt' width={504} height={410} />
              <p>{test1.photos[0].description}</p>
            </Column>
            <Column size={7} className={styles.img}>
              <Image src={test1.photos[1].url} alt='alt' width={728} height={410} />
              <p>{test1.photos[1].description}</p>
            </Column>
          </Row>
          </>
        ) : <></>}
        {test2 ? (
          <>
          <Row className={styles.test}>
            <div className={styles.smallPhoto}>
              <h3 className='smallTitle'>Заголовок</h3>
              <div className={styles.img}>
                <Image src={test2.photo.url} alt='alt' width={279} height={410} />
                <p>{test2.photo.description}</p>
              </div>
            </div>
            <div className={styles.textBlock}>{renderParagraphs(test2.text)}</div>
          </Row>
          </>
        ) : <></>}
        {quote ? <Quote quote={quote} /> : <></>}
        {test3 ? (
          <div className={styles.columnContainer}>
          <p className={styles.columnedText}>
            {test3.text}
          </p>
        </div>
        
        
        ) : <></>}
      </section>
    </Wrapper>
  )
}

export default Biography