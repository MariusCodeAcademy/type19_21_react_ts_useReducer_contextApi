import { Link, NavLink } from 'react-router-dom';
import myRoutes from '../routes';
import { useThemeCtx } from '../store/ThemeProvider';

export default function Header() {
  // 1. Priklausomai nuo AuthState rodyti login arba logout mygtukus

  const themeCtx = useThemeCtx();
  return (
    <header style={{ backgroundColor: themeCtx.dark, color: themeCtx.light }} className='header'>
      <div className='container flex'>
        <Link className='logo' to={'/'}>
          Logo
        </Link>
        <nav className='main-nav'>
          {/* {myRoutes.map((rObj) => (
            <NavLink key={rObj.id} to={rObj.to}>
              {rObj.title}
            </NavLink>
          ))} */}
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/counters'}>Counters</NavLink>
          <NavLink to={'/login'}>Login</NavLink>
          <NavLink to={'/login'}>Logout</NavLink>
        </nav>
      </div>
    </header>
  );
}
