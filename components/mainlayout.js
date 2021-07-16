import React from 'react'
import _ from 'lodash';


const MainLayout = (props) => {
    return <>
        <div>
            {props.children}
        </div>
        <style global jsx>{`
        * {
            margin: 0;
            padding: 0;
        }
               
        html,
        body {
            width: 100%;
            height: 100%;
            background: #ededed !important;
        }

        .ant-card-body {
            margin: 0 !important;
            padding: 0 !important;
        }

        .anticon-arrow-left {
            color: #eee !important;
        }

        .ant-tabs-content-holder,
        .ant-tabs-nav-list {
            margin: 0 40px !important;
        }

        .main-body {
            width: 100%;
            padding: 90px 70px;
        }

        .card-body {
            width: 100%;
        }

        .cart-header {
            padding: 20px 40px;
            height: 200px;
        }
        
        .cart-content {
            height: 400px;
            border-bottom: 1px solid #eeeeee;
        }
        
        .cart-footer {
            padding: 20px 40px;
            height: 100px;
        }

        .cart-image {
            padding: 20px 40px;
            height: 100%;
            border-left: 1px solid #eeeeee;
        }

        @media (min-width: 602px) and (max-width: 1024px) {
            .main-body {
                padding: 90px 40px;
            }
        }

        @media (min-width: 200px) and (max-width: 601px) {
            .main-body {
                padding: 50px 20px;
            }
        }
        `}</style>
    </>
};

export default MainLayout;
