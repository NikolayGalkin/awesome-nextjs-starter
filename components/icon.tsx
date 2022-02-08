import type { FC } from 'react'
import clsx from 'clsx'
import { IconBaseProps } from 'react-icons'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io'
import { RiPhoneFill } from 'react-icons/ri'

type TColor = 'base' | 'black' | 'white'
type TSize = 'xs' | 'md' | 'lg' | 'xl' | '2xl'

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
  size: TSize
  variant: TSocial | TContact
}

const ColorMap: Record<TColor, string> = {
  base: 'text-base',
  black: 'text-black',
  white: 'text-white',
}

const TextSizeMap: Record<TSize, string> = {
  xs: 'text-md',
  md: 'text-2xl',
  lg: 'text-3xl',
  xl: 'text-4xl',
  '2xl': 'text-5xl',
}

const Icon: FC<IIcon> = ({ variant, className, size = 'md', color = 'black', ...rest }) => {
  const classes = clsx(className, ColorMap[color], TextSizeMap[size])

  const IconMap = {
    [TSocial.Instagram]: AiFillInstagram,
    [TSocial.Facebook]: IoLogoFacebook,
    [TContact.Phone]: RiPhoneFill,
  }

  const Component = IconMap[variant]

  return <Component className={classes} {...rest} />
}

export default Icon
