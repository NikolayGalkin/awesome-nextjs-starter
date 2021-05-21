import { FC } from 'react'
import clsx from 'clsx'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io'
import { RiPhoneFill } from 'react-icons/ri'
import { IconBaseProps } from 'react-icons'

export enum TSocial {
  Facebook = 'facebook',
  Instagram = 'instagram',
}

export enum TContact {
  Phone = 'phone',
  Email = 'email',
}

interface IIcon extends IconBaseProps {
  variant: TSocial | TContact
}

const Icon: FC<IIcon> = ({ variant, className, size = 'md', color = 'black', ...rest }) => {
  const classes = clsx(
    className,
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

  return (
    <>
      {variant === TSocial.Instagram && <AiFillInstagram className={classes} {...rest} />}
      {variant === TSocial.Facebook && <IoLogoFacebook className={classes} {...rest} />}
      {variant === TContact.Phone && <RiPhoneFill className={classes} {...rest} />}
    </>
  )
}

export default Icon
