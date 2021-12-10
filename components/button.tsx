import clsx from 'clsx'
import type { ButtonHTMLAttributes, FC } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean
  big?: boolean
}

export const Button: FC<IButton> = ({ children, className, block, ...rest }) => {
  const styles = clsx(
    block ?? 'w-full',
    className,
    `border-0
      text-white text-sm leading-none
      bg-carolina-blue hover:bg-carolina-blue-light transition-colors duration-300
      py-3
      outline-none focus:outline-clear`
  )

  return (
    <button type="button" className={styles} {...rest}>
      {children}
    </button>
  )
}
