import Row from '@/components/ui/Row'
import Wrapper from '@/components/ui/Wrapper'
import BlockMemory from '@/components/ui/elements/blockMemory/BlockMemory'
import { useGetInfoServicesDataQuery } from '@/redux/services/userApi'
import { FC } from 'react'
import style from './Info.module.scss'

const Info:FC = () => {
  const { isLoading, isFetching, data, error } = useGetInfoServicesDataQuery(null);
  
  return (
    <div className={style.info}>
        {error ? (
          <p>Oh no, there was an error</p>
        ) : isFetching || isLoading ? (
          <p>Loading...</p>
        ) : data ? (
          <Wrapper>
            <h3 className={style.title}>ЯК ПРОЧИТАТИ ІНФОРМАЦІЮ З ПАМ'ЯТНИКА, ОСНАЩЕНОГО QR КОДОМ?</h3>
            <div className={style.qrBlock}>
              {data.qr.map((option) => 
                <div key={option.id}>
                  <p>0{option.id}</p>
                  <p>{option.value}</p>
                </div>
              )}
            </div>
            <h3 className={style.title}>ЩО МОЖНА ЗБЕРЕГТИ НА СТОРІНЦІ ПАМ'ЯТІ?<br/>ДІЛИТИСЯ СПОГАДАМИ ПРОСТО</h3>
            <Row isGrid={true} className='gap-10'>
              {data.services.map((service, index) => 
                <BlockMemory service={service} key={index} />
              )}
            </Row>
          </Wrapper>
        ) : null}
    </div>
  )
}

export default Info