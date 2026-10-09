import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import RootLayout from '@/components/layout/RootLayout';
import HomePage from '@/pages/HomePage';

export default function App() {

  return (

    <BrowserRouter basename="/contructionui">

      <Routes>

        <Route
          element={<RootLayout />}
        >

          <Route
            path="/"
            element={<HomePage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  );
}