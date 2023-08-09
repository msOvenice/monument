import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

const Button: FC<PropsWithChildren<{ className?: string, custom?: boolean }>> = ({
    children,
    className,
    custom
}) => {
    return <button 
        className={cn('px-3 py-[10px] rounded-lg text-lg font-serif leading-5 w-full',
        custom ? 'border-2 border-primary bg-white text-black' : 'bg-primary text-white', 
        className)}
    >{children}</button>
}

export default Button