import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountersPage from './pages/CountersPage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/counters' element={<CountersPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}
