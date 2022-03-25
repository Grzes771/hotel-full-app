import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { appRoutes, TAppRoute } from "../common/utils/app-routes";
import { Header } from "./header";
import { Footer } from "./footer";
import { ScrollButton } from "./additives/scroll-button";
import SlideMenuUser from "./additives/slide-menu/user-menu";
import SlideMenu from "./additives/slide-menu/admin-menu";

import { Container } from "./index.styles";

export const App = () => {
  const Loading = () => <div>Loading ...</div>;
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Container>
          <Header />
          <Routes>
            {appRoutes.map(({ path, element }: TAppRoute, index: number) => {
              return (
                <Route key={index}>
                  <Route {...{ path, element }} key={path} />
                </Route>
              );
            })}
          </Routes>
          <Footer />
          <ScrollButton />
          <SlideMenu />
          <SlideMenuUser />
        </Container>
      </Suspense>
    </BrowserRouter>
  );
};
