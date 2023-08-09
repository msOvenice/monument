import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

const Column: FC<PropsWithChildren<{ size: number, isCenter?: boolean, className?: string }>> = ({
    size,
    children,
    isCenter = false,
    className,
}) => {
    return <div 
        style={{
            gridColumn: `span ${size} / span ${size}`
        }}
        className={cn('h-full flex items-center', {
            'justify-center': isCenter
        }, className)}
    >{children}</div>
}

export default Column