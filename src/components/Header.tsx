import { Link, NavLink } from 'react-router-dom';
import myRoutes from '../routes';

export default function Header() {
  return (
    <header className='header'>
      <div className='container flex'>
        <Link className='logo' to={'/'}>
          Logo
        </Link>
        <nav className='main-nav'>
          {myRoutes.map((rObj) => (
            <NavLink key={rObj.id} to={rObj.to}>
              {rObj.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
