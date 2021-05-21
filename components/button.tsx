import { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean
  big?: boolean
}

export const Button: FC<IButton> = ({ children, className, ...rest }) => {
  const styles = clsx(
    className,
    `border-0
      text-white text-sm leading-none
      bg-carolina-blue hover:bg-carolina-blue-light transition-colors duration-300
      w-full py-3
      outline-none focus:outline-clear`
  )

  return (
    <button type="button" className={styles} {...rest}>
      {children}
    </button>
  )
}
