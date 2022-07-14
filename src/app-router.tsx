import { Layout } from "./common/components/layout";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {
  ShowDifferentAvatar,
  GeneratedImage,
} from "./features/showDifferentAvatar/showDifferentAvatar";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Outlet></Outlet>
            </Layout>
          }
        ></Route>
        <Route
          path="/differentAvatar"
          element={
            <div>
              <ShowDifferentAvatar />
              <GeneratedImage />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
