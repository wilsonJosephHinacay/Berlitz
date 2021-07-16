import React from 'react'
import _ from 'lodash';


const MainLayout = (props) => {
    return <>
        <div>
            {props.children}
        </div>
        <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * {
            margin: 0;
            padding: 0;
        }
               
        html,
        body {
            width: 100%;
            height: 100%;
            background: #ededed !important;
            font-family: 'Poppins', sans-serif !important;
        }

        .ant-card-body {
            margin: 0 !important;
            padding: 0 !important;
        }

        .anticon-arrow-left {
            color: #cacaca !important;
        }

        .ant-tabs-tab-active > .ant-tabs-tab-btn {
            color: #000 !important;
        }

        .ant-tabs-tab-btn {
            color: #cacaca !important;
        }

        
        .ant-tabs-nav-list {
            margin: 0 40px !important;
        }

        .ant-tabs-content-holder {
             margin: 15px 40px !important;
        }

        .ant-tabs-tabpane {
            line-height: 26px !important;
        }

        .ant-btn-lg {
            height: 50px !important;
            padding: 11.4px 20px !important;
            font-size: 12px !important;
            border-radius: 4px !important;
        }

        .main-body {
            width: 100%;
            padding: 70px 60px;
        }

        .card-body {
            width: 100%;
        }

        .cart-header {
            padding: 20px 40px;
        }

        .title-sub-title {
            margin-top: 45px;
        }

        .sub-title {
            position:relative !important;
            top: -15px !important;
            color: #cacaca !important;
        }

        .price-discount {
            color: #cacaca !important;
        }
        
        .cart-content {
            border-bottom: 1px solid #eeeeee;
        }

        .content-after-tabs {
            padding: 20px 40px;
        }
        
        .cart-footer {
            padding: 20px 40px;
            height: 100px;
        }

        .cart-image {
            height: 100%;
            border-left: 1px solid #eeeeee;
        }

        .form-label {
            font-weight: 500;
            color: #000;
        }

        .content-select-color {
            padding: 30px 0;
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
