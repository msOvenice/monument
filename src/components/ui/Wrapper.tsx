import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

const Wrapper: FC<PropsWithChildren<{
    className?: string
}>> = ({ children, className }) => {
  return (
    <div 
        className={cn('max-w-[1288px] w-full mx-auto', className)}
    >
        {children}
    </div>
  )
}

export default Wrapper