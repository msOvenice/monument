import LogoSVG from '@/img/Logo'
import Link from 'next/link'
import { FC } from 'react'

const Logo: FC = () => {
  return (
    <Link href='/' className='flex items-center mr-20'>
      <LogoSVG />
    </Link>
  )
}

export default Logo