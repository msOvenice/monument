import { IHuman, TCemetery } from '@/utils/tests.data'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import Column from '../../ui/Column'
import Row from '../../ui/Row'
import Wrapper from '../../ui/Wrapper'
import Card from '../../ui/card/Card'
import Header from '../secondHeader/Header'
import styles from './Layout.module.scss'

interface ILayout {
  data: TCemetery[] | IHuman[],
  path: string[]
}

const Layout:FC<ILayout> = ({ data, path }) => {
  const pathname = usePathname()

  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = data ? data.length : 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = data ? data.slice(startIndex, endIndex) : [];

  const visiblePages = 3;

  const firstVisiblePage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const lastVisiblePage = Math.min(totalPages, firstVisiblePage + visiblePages - 1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Wrapper className={styles.layout}>
      <Header path={path} />
      <Row isGrid={true} className={styles.content}>
        {
          paginatedData.map((item) => (
            <Column isCenter={true} size={3} key={item.id}>
              <Card data={item} flag={pathname} />
            </Column>
          ))
        }
      </Row>
      <div className={styles.control}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <RiArrowLeftSLine size={24} color='#000' className={styles.controlIcon} />
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1)
          .filter((page) => page >= firstVisiblePage && page <= lastVisiblePage)
          .map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              disabled={currentPage === page}
              className={`${styles.controlPage} ${
                currentPage === page ? styles.controlPageActive : styles.controlPagePassive
              }`}
            >
              {page}
            </button>
          ))}
        {lastVisiblePage !== totalPages && (
          <>
            <p className='mt-2'>...</p>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`${styles.controlPage} ${
                currentPage === totalPages ? styles.controlPageActive : styles.controlPagePassive
              }`}
            >
              {totalPages}
            </button>
          </>
        )}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={styles.btn}
        >
          <RiArrowRightSLine size={24} color='#000' className={styles.contentIcon} />
        </button>
      </div>
    </Wrapper>
  )
}

export default Layout