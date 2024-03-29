import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';

import { Favorite } from './pages/favorite';
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';
import { NotFound } from './pages/NotFound';

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}