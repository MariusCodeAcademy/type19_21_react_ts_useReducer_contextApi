import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to={'/'}>Logo</Link>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/counters'}>Counters</NavLink>
      </nav>
    </header>
  );
}
