import Button from '@/components/ui/Button'
import Row from '@/components/ui/Row'
import Wrapper from '@/components/ui/Wrapper'
import BlockNews from '@/components/ui/elements/blockNews/BlockNews'
import { useGetNewsQuery } from '@/redux/services/userApi'
import Link from 'next/link'
import { FC } from 'react'
import styles from './News.module.scss'

const News:FC = () => {
  const { isLoading, isFetching, data, error } = useGetNewsQuery(null);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error</div>;
  } else if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const lastIndex = data.length - 1;
  const lastElement = data[lastIndex];
  const restElements = data.slice(0, lastIndex).reverse();
  
  return (
    <Wrapper className={styles.news}>
      <Row isGrid={false} className={styles.newsTitleBlock}>
        <h2 className='subtitle'>Новини для вас</h2>
        <div>
          <p>Читайте останні новини, оновлення та дізнавайтесь про нові події на PastQR</p>
          <Button>Дізнатись більше</Button>
        </div>
      </Row>
      <div>
        <div className={styles.newsLast}>
          <p>{lastElement.data}</p>
          <Link href={'/'}>{lastElement.title}</Link>
          <p>{lastElement.description}</p>
        </div>
        <Row isGrid={true}>
          {restElements.map((item, index) => (
            <BlockNews item={item} key={index} />
          ))}
        </Row>
      </div>
    </Wrapper>
  )
}

export default News