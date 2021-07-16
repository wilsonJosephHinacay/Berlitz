import React, { useState } from 'react'
import Head from 'next/head'
import { Card, Row, Col, Tabs, Typography, Button, Image } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import _ from 'lodash';
import MainLayout from '../components/mainlayout'
import { product, wrapperCol, priceCol, BtnCol } from '../shared/constant';
import numeral from 'numeral';
import { useToasts } from "react-toast-notifications";
import SelectComp from '../components/commons/SelectComp';



const { TabPane } = Tabs;
const { Title, Text } = Typography;

const Home = (props) => {
    const { addToast } = useToasts()
    const [image, setImage] = useState(product?.defaultImage);
    const [loading, setLoading] = useState(false);
    const [btnText, setBtnText] = useState("ADD TO CART");

    const changeImage = (value) => {
        let image = _.find(product?.images, { value: value });
        if (!_.isEmpty(image)) {
            setImage(image);
        }
    }

    const setSelected = _.debounce((value) => {
        setLoading(false);
        setBtnText("VIEW CART");
        addToast(<div>{`Item added to cart!`}</div>, {
            appearance: 'success',
            autoDismiss: true,
        })
        console.log("cart added => ", value)
    }, 2000, {
        trailing: true
    });

    const addToCart = (selected) => {
        setBtnText("LOADING");
        setLoading(true);
        setSelected(selected);
    }

    return <MainLayout {...props}>
        <Head>
            <title>Berlitz</title>
        </Head>
        <div className="main-body">
            <Card>
                <div className="card-body">
                    {_.isEmpty(product) ? ("loading...") : (
                        <Row gutter={[0, 10]}>
                            <Col {...wrapperCol}>
                                <div className="cart-header">
                                    <div><ArrowLeftOutlined /> All products</div>
                                    <div className="title-sub-title">
                                        <Title>{product?.title}</Title>
                                        <Text type="secondary" className="sub-title">
                                            {product?.subTitle}
                                        </Text>
                                    </div>
                                </div>
                                <div className="cart-content">
                                    {!_.isEmpty(product?.tabs) && (
                                        <Tabs defaultActiveKey="desc">
                                            {product.tabs.map((value) => {
                                                return (
                                                    <TabPane tab={value?.title} key={value?.key}>{value?.content}</TabPane>
                                                )
                                            })}
                                        </Tabs>
                                    )}
                                    <div className="content-after-tabs">
                                        <Row>
                                            <Col {...priceCol}><Title level={2}>{numeral(product?.price).format("$0,0.00")}</Title></Col>
                                            {product?.originalPrice && (<Col><Title level={2}><Text className="price-discount" delete>{numeral(product?.originalPrice).format("$0,0.00")}</Text></Title></Col>)}
                                        </Row>
                                        <Row>
                                            <div className="content-select-color">
                                                <SelectComp
                                                    defaultValue={image?.value}
                                                    label={'COLORS'}
                                                    field={'colors'}
                                                    style={{ width: "200px" }}
                                                    size="large"
                                                    choices={product?.colors}
                                                    onChange={val => changeImage(val)}
                                                />
                                            </div>
                                        </Row>
                                    </div>
                                </div>
                                <div className="cart-footer">
                                    <Row>
                                        <Col {...BtnCol}>
                                            <Button loading={loading} type="primary" size="large" block onClick={() => addToCart(product)}>
                                                {btnText}
                                            </Button>
                                        </Col>
                                    </Row>

                                </div>
                            </Col>
                            <Col {...wrapperCol}>
                                <div className="cart-image">
                                    <Image
                                        width={"100%"}
                                        height={"100%"}
                                        src={image?.url}
                                    />
                                </div>
                            </Col>
                        </Row>
                    )}
                </div>
            </Card>
        </div>
    </MainLayout>
};

export default Home;