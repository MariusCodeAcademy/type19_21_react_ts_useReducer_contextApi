import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountersPage from './pages/CountersPage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import { useThemeCtx } from './store/ThemeProvider';

export default function App() {
  const themeCtx = useThemeCtx();

  const contStyle: React.CSSProperties = {
    backgroundColor: themeCtx.light,
    color: themeCtx.dark,
  };

  return (
    <div style={contStyle}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/counters' element={<CountersPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}
