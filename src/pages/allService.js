/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/Layout/MainLayout";
import { useGetAllSubCategoryServiceQuery } from "@/redux/slice/subCategoryService/subCategorySlice";
import { Card, Col, List, Row, Spin, Typography } from "antd";
import React from "react";
import styles from "@/styles/AllService.module.css";
import Link from "next/link";
import { SafetyOutlined } from "@ant-design/icons";
import Loading from "@/components/ui/Loading";

const { Meta } = Card;

const AllService = () => {
  const { data, isLoading } = useGetAllSubCategoryServiceQuery();

  if (isLoading) {
    return <Loading />;
  }
  // console.log(data?.data);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <Row gutter={16}>
        <Col md={8} lg={8} span={8}>
          <div
            style={{
              fontWeight: 600,
              textAlign: "center",
              fontSize: 26,
              paddingBottom: "16px",
            }}
          >
            All Services
          </div>
          <List
            className={styles.serviceContainer}
            size="large"
            dataSource={data?.data}
            renderItem={(item) => (
              <Link href={`#${item._id}`}>
                <List.Item
                  className={styles.serviceList}
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {item.name}
                </List.Item>
              </Link>
            )}
          />
        </Col>
        <Col
          style={{
            overflow: "auto",
            height: "100vh",
            position: "sticky",
            top: 0,
            bottom: 0,
            left: 0,
          }}
          md={16}
          lg={16}
          span={16}
        >
          {data?.data.map((item) => (
            <div
              key={item._id}
              style={{
                padding: 16,
                marginTop: 16,
                textAlign: "left",
              }}
            >
              <div style={{ margin: 16 }}>
                <Typography
                  id={`${item._id}`}
                  style={{ fontSize: 20, fontWeight: 600, color: "tomato" }}
                >
                  {console.log(item.name)}
                </Typography>
              </div>
              <div style={{ margin: 16 }}>
                <Link href={`/serviceDetails/${item._id}`}>
                  <Card
                    hoverable
                    style={{ maxWidth: 240 }}
                    cover={
                      <img
                        alt="example"
                        style={{ height: 150 }}
                        src={item.images}
                      />
                    }
                  >
                    <Meta title={item.name} description="" />
                  </Card>
                </Link>
              </div>
              <div>
                <List
                  size="small"
                  header={
                    <Typography style={{ fontWeight: 500 }}>
                      Features
                    </Typography>
                  }
                  dataSource={item.features}
                  renderItem={(item) => (
                    <List.Item style={{ fontWeight: 400 }}>
                      <Typography
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {" "}
                        <SafetyOutlined
                          style={{
                            fontSize: 16,
                            marginRight: 8,
                            display: "inline-block",
                          }}
                        />
                        <span style={{ display: "inline-block" }}> {item}</span>
                      </Typography>
                    </List.Item>
                  )}
                />
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default AllService;

AllService.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
