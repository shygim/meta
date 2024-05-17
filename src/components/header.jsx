import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">메인페이지</Link>
        <Link to="/Page01">p1 페이지</Link>
      </nav>
    </header>
  )
}