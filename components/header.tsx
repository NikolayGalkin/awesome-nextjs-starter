import { FC, HTMLAttributes } from 'react'

const Header: FC<HTMLAttributes<HTMLElement>> = ({ children, ...rest }) => <header {...rest}>{children}</header>

export default Header
