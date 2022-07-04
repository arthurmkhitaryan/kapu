import React from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

//styles
import * as S from "./DashboardLayout.styles";
import {Header} from "../Header";
import {Footer} from "../Footer";

export const DashboardLayout = () => {
  // const dispatch = useDispatch();
  // const categories = useSelector((state) => state.category.categories);

  // useEffect(() => {
  //   dispatch(getCategoriesAction());
  // }, []);


  return (
    <S.DashboardLayoutWrapper>
      <S.DashboardLayoutHeader>
        <Header />
      </S.DashboardLayoutHeader>
      <S.DashboardLayoutContent>
        <Outlet />
      </S.DashboardLayoutContent>
      <S.DashboardLayoutFooter>
        <Footer />
      </S.DashboardLayoutFooter>
    </S.DashboardLayoutWrapper>
  );
};
