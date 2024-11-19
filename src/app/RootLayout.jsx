import { Outlet } from "react-router-dom";
import { Content, Layout, Wrap } from "./RootLayout.styled";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

const RootLayout = () => {
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
