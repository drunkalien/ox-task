import { Form, Input, Button, Typography, Row, Col } from "antd";
import "./auth.module.css";
import { useAPIMutation } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const { Title, Paragraph } = Typography;

type FormValues = {
  _username: string;
  _password: string;
};

const Auth = () => {
  const authMutation = useAPIMutation({ url: "security/auth_check" });
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const onFinish = async (values: FormValues) => {
    const result = await authMutation.mutateAsync({
      ...values,
      _subdomain: "toko",
    });
    if (result && result.data) {
      localStorage.setItem("token", result.data.token);
      navigate("/");
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="container">
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "100vh", minWidth: "50vh" }}
      >
        <Col span={24}>
          <div style={{ textAlign: "center" }}>
            <Title level={2}>Login</Title>
          </div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, textAlign: "center" }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onFinish}
            layout="vertical"
          >
            <Row justify="center">
              <Col span={16}>
                <Form.Item
                  label="Username"
                  name="_username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  wrapperCol={{ span: 24 }}
                >
                  <Input style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Row justify="center">
              <Col span={16}>
                <Form.Item
                  label="Password"
                  name="_password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                  wrapperCol={{ span: 24 }}
                >
                  <Input.Password style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Row justify="center">
              <Col span={16} style={{ textAlign: "center" }}>
                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          {isError && (
            <Paragraph type="danger">Username or password invalid</Paragraph>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Auth;
