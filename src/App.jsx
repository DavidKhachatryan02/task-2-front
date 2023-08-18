import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROOT_ROUTES } from './constants/routes.jsx';

const router = createBrowserRouter(ROOT_ROUTES);


function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
