import { IHuman, TCemetery } from '@/utils/tests.data'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Tags from '../Tags'
import styles from './Card.module.scss'

interface CardData {
  data: TCemetery | IHuman,
  flag: string
}

const Card: FC<CardData> = ({ data, flag }) => {
  return (
    <div className={styles.card}>
      <Image src={data.images} width={280} height={291} alt={data.title} />
      <div className={styles.block}>
        <Link href={`${flag}/${data.id}`}>{data.title}</Link>
        <Tags data={data.data} card />
      </div>
    </div>
  );
};

export default Card;
