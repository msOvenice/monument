import { FC } from 'react'
import Logo from '../../../ui/elements/Logo'
import styles from './Menu.module.scss'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'

const Menu: FC = () => {
    return (
        <div className={styles.menu}>
            <Logo />
            <nav>
                <ul>
                    {menu.map(item => (
                        <MenuItem 
                            key={item.link}
                            item={item}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Menu