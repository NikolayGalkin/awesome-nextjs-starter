import type { FC, HTMLAttributes } from 'react'
import Link from 'next/link'

const Header: FC<HTMLAttributes<HTMLElement>> = ({ children, ...rest }) => (
  <header {...rest}>
    <nav>
      <div className="container">
        <div className="flex justify-between">
          <div className="">
            <Link href="/">
              <a>Logo</a>
            </Link>
          </div>
          <div className="">
            <div className="">
              <a href="">For Agent / Broker</a>
            </div>
            <div className="">
              <a href="" className="">
                List your office
              </a>
              <a href="" className="">
                Post a job
              </a>
            </div>
            <div className="">
              <a href="" className="">
                Profile
              </a>
              <a href="" className="">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {children}
  </header>
)

export default Header
