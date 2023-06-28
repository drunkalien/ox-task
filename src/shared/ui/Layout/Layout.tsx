import React from "react";
import { Layout, Space, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

type LayoutProps = {
  children?: React.ReactNode;
};

const AppLayout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth");
    }
  }, [navigate]);

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>
          <Input.Search
            style={{ maxWidth: 300 }}
            placeholder="Search for products"
            onSearch={(value) => navigate(`/search?query=${value}`)}
          />
        </Header>
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Space>
  );
};

export default AppLayout;
