import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

const Tag:FC<PropsWithChildren<{ category?: boolean }>> = ({ children, category }) => {
  return (
    <p className={cn(
      category ? 
        'rounded-2xl bg-primary-light px-2 py-[6px] leading-6 tracking-[-0.8px] text-white'
      :
        '' 
    )}>
      {children}
    </p>
  )
}

export default Tag