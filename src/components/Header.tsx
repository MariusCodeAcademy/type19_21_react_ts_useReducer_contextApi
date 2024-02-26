import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <div className='container flex'>
        <Link className='logo' to={'/'}>
          Logo
        </Link>
        <nav className='main-nav'>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/counters'}>Counters</NavLink>
        </nav>
      </div>
    </header>
  );
}
