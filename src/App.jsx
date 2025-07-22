import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import DivinePage from './pages/DivinePage';
import DevilPage from './pages/DevilPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/divine" element={<DivinePage />} />
      <Route path="/devil" element={<DevilPage />} />
    </Routes>
  );
}

export default App;
