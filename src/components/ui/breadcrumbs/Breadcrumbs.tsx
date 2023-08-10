import Link from 'next/link'
import { FC } from 'react'
import { RiArrowRightSLine, RiHomeFill } from 'react-icons/ri'
import Row from '../Row'
import styles from './Breadcrumbs.module.scss'

interface Path {
  path: string[];
}

const Breadcrumbs: FC<Path> = ({ path }) => {
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split('/').filter((segment) => segment !== '');

  return (
    <Row className={styles.stroke}>
      <RiHomeFill color='#BFBFBF' size={24} className={styles.home} />
      <Link href={'/'} className={styles.main}>
        Головна
      </Link>
      {path.map((item, index) => (
        <Link href={pathSegments[index] ? `/${pathSegments[index]}` : '/'} className={path.length - 2 < index ? styles.active : styles.passive} key={index}>
          <RiArrowRightSLine size={24} color='#2C2947' className={styles.arrow} />
          {item}
        </Link>
      ))}
    </Row>
  );
};

export default Breadcrumbs;
