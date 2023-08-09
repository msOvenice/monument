import { useGetPeopleQuery } from '@/redux/services/userApi'
import { FC } from 'react'
import { Scrollbar } from 'react-scrollbars-custom'
import Slider from 'react-slick'
import Row from './Row'
import Card from './card/Card'

const SliderSlick:FC = () => {
  const { isLoading, isFetching, data, error } = useGetPeopleQuery(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    accessibility: true,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <Scrollbar style={{ width: '1000px', height: '420px' }}>
      <Row isGrid={false}>
        <Slider {...settings}>
          {error ? (
            <p>Oh no, there was an error</p>
          ) : isFetching || isLoading ? (
            <p>Loading...</p> 
          ) : (
            data?.map((item) => (
              <Card data={item} key={item.id} flag='/memories' />
            )))
          }
        </Slider>
        </Row>
    </Scrollbar>
  )
}

export default SliderSlick