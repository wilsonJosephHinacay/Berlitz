import React from 'react'
import Head from 'next/head'
import { Card, Row, Col, Tabs } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import _ from 'lodash';
import MainLayout from '../components/mainlayout'

const wrapperCol = {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 12,
    xl: 12,
    xxl: 12
};

const { TabPane } = Tabs;

const Home = (props) => {

    const onChange = () => {
        console.log("changed ...")
    }

    return <MainLayout {...props}>
        <Head>
            <title>Berlitz</title>
        </Head>
        <div className="main-body">
            <Card>
                <div className="card-body">
                    <Row gutter={[0, 10]}>
                        <Col {...wrapperCol}>
                            <div className="cart-header">
                                <span>
                                    <ArrowLeftOutlined /> All Items
                                </span>
                            </div>
                            <div className="cart-content">
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="DESCRIPTION" key="1">
                                        content description
                                    </TabPane>
                                    <TabPane tab="DETAILS" key="2">
                                        content details
                                    </TabPane>
                                </Tabs>
                            </div>
                            <div className="cart-footer">
                                footer
                            </div>
                        </Col>
                        <Col {...wrapperCol}>
                            <div className="cart-image">
                                image
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
    </MainLayout>
};

export default Home;