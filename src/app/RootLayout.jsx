import useAuth from "modules/authorization/hooks/useAuth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { LocalStorageService } from "services/localStorage";
import { Content, Layout, Wrap } from "./RootLayout.styled";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

const RootLayout = () => {
  const { refresh } = useAuth();

  useEffect(() => {
    if (LocalStorageService.getItem("token")) {
      refresh();
    }
  }, []);

  return (
    <Layout>
      <Header />
      <Content>
        <Wrap>
          <Outlet />
        </Wrap>
        <SideBar />
      </Content>
    </Layout>
  );
};

export default RootLayout;
