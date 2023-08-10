import Button from '@/components/ui/Button'
import Row from '@/components/ui/Row'
import Wrapper from '@/components/ui/Wrapper'
import BlockService from '@/components/ui/elements/blockService/BlockService'
import { useGetServicesQuery } from '@/redux/services/userApi'
import { FC } from 'react'
import styles from './Services.module.scss'

const Services:FC = () => {
  const { isLoading, isFetching, data, error } = useGetServicesQuery(null);

  return (
    <Wrapper className={styles.section}>
      <h2 className='subtitle'>Послуги</h2>

      {error ? (
          <p>Oh no, there was an error</p>
        ) : isFetching || isLoading ? (
          <p>Loading...</p>
        ) : data ? (
          <BlockService data={data} />
        )
        : null
      }
      
      <Row className={styles.buttons}>
        <Button>Показати усі пакети</Button>
        <Button custom>Скористатись безкоштовним</Button>
      </Row>
    </Wrapper>
  )
}

export default Services