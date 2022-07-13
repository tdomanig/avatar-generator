import {Layout} from './common/components/layout'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

export const AppRouter=()=>{
return(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Outlet></Outlet>
            </Layout>
          }
        >
   
        </Route>
      </Routes>
    </BrowserRouter>
)
}