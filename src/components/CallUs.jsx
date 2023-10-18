/* eslint-disable @next/next/no-img-element */
import { PhoneOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import callUs from "../assets/images/callus.jpg";

import Image from "next/image";

const CallUs = () => {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 8px" }}>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        justify="center"
      >
        <Col className="gutter-row" span={18}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontSize: 24,
                opacity: "0.7",

                fontFamily: "sans-serif",
              }}
            >
              Can’t find your desired service? <br /> Let us know 24/7 In.
            </h3>

            <div style={{ padding: 10 }}>
              <Button style={{ margin: 10 }} type="primary">
                Request a service{" "}
              </Button>
              <Button>
                <PhoneOutlined style={{ marginRight: 6 }} /> 01648886671
              </Button>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <img
            src="https://i.ibb.co/7ncPy8c/callus.png"
            alt="callUs"
            style={{ width: 400, marginTop: "-150px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default CallUs;
