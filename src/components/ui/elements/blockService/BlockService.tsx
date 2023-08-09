import { IService } from '@/utils/tests.data'
import Image from 'next/image'
import { FC } from 'react'
import Button from '../../Button'
import Column from '../../Column'
import Row from '../../Row'
import style from './BlockService.module.scss'

interface Services {
  data: IService
}

const formatToCurrency = (price: number) => {
  const formattedPrice = new Intl.NumberFormat('uk-UA').format(price);
  return `${formattedPrice} UAH`;
};


const BlockService:FC<Services> = ({ data }) => {
  const altText = data.image?.match(/\/([^/]+)\.\w+$/)?.[1] ?? 'Default Alt Text';

  return (
    <Row isGrid={false} className={style.main}>
      <div>
        <div className={style.mainBlock}>
          <Image 
            src={data.image} 
            width={76} 
            height={51} 
            alt={altText} 
          />
          <h3>Розширена сторінка</h3>
        </div>
        <div className={style.service}>
          <p>Все, що є в короткій сторінці, плюс:</p>
          <ul>
            <Row isGrid={true} className={style.items}>
              {data.services.map((service, index) => (
                <Column isCenter={false} size={4} key={index} className='!items-start'>
                  <li>{service}</li>
                </Column>
              )
              )}
            </Row>
          </ul>
        </div>
      </div>
      <div className={style.price}>
        <p>{formatToCurrency(data.price)}</p>
        <Button>Оплатити</Button>
      </div>
    </Row>
  )
}

export default BlockService