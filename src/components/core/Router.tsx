import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Favorites from '../pages/Favorites';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:artworkId" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
