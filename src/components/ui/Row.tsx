import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

const Row: FC<PropsWithChildren<{
    className?: string,
    isGrid?: boolean
}>> = ({ children, className, isGrid = false }) => {
  return (
    <div
        className={
          isGrid ? 
            cn('grid w-full grid-cols-12 h-full items-center', className) 
          : cn('flex items-center justify-between', className)
        }
    >
        {children}
    </div>
  )
}

export default Row