import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Dashboard</Link>
        </li>
        <li>
          <Link href='/about'>Marketplace</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav