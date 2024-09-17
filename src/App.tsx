import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import GamesList from './pages/GamesList';
import GameView from './pages/GameView';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/games" />,
    },
    {
      path: "/games",
      element: <GamesList />,
    },
    {
      path: "/games/:id",
      element: <GameView />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
