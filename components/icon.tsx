import type { FC } from 'react'
import clsx from 'clsx'
import { IconBaseProps } from 'react-icons'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io'
import { RiPhoneFill } from 'react-icons/ri'

export enum TSocial {
  Facebook,
  Instagram,
}

export enum TContact {
  Phone,
  Email,
}

interface IIcon extends IconBaseProps {
  color: TColor
  variant: TSocial | TContact
}

type TColor = 'base' | 'black' | 'white'

const ColorMap: Record<TColor, string> = {
  base: 'text-base',
  black: 'text-black',
  white: 'text-white',
}

const TextSizeMap: Record<string, string> = {
  xs: 'text-md',
  md: 'text-2xl',
  lg: 'text-3xl',
  xl: 'text-4xl',
  '2xl': 'text-5xl',
}

const Icon: FC<IIcon> = ({ variant, className, size = 'md', color = 'black', ...rest }) => {
  const classes = clsx(
    className,
    ColorMap[color],
    TextSizeMap[size],
    {
      'text-base': color === 'base',
      'text-black': color === 'black',
      'text-white': color === 'white',
    },
    {
      'text-md': size === 'xs',
      'text-2xl': size === 'md',
      'text-3xl': size === 'lg',
      'text-4xl': size === 'xl',
      'text-5xl': size === '2xl',
    }
  )

  const IconMap = {
    [TSocial.Instagram]: AiFillInstagram,
    [TSocial.Facebook]: IoLogoFacebook,
    [TContact.Phone]: RiPhoneFill,
  }

  const Component = IconMap[variant]

  return <Component className={classes} {...rest} />
}

export default Icon
