import type { FC, HTMLAttributes } from 'react'

const Footer: FC<HTMLAttributes<HTMLElement>> = ({ children, ...rest }) => <footer {...rest}>{children}</footer>

export default Footer
