import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
import Homepage from './pages/homepage';
import ViewProduct from './pages/view-product';
import BaseLayout from './components/layouts/base-layout';
import CompareProduct from './pages/compare-product';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<BaseLayout/>}>
        <Route
          index
          element={<Homepage />}
        />
        <Route
          path='/view/:pid'
          element={<ViewProduct />}
        />
        <Route
          path='/compare/:pid'
          element={<CompareProduct />}
        />
        <Route
          path="*"
          element={<Navigate to="/404" />}
        />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
