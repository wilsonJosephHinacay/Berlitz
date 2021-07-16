import React from 'react'
import Head from 'next/head'
import MainLayout from '../components/mainlayout'
import _ from 'lodash';


const Home = (props) => {

    return <MainLayout account={props.account}>
        <Head>
            <title>Berlitz</title>
        </Head>
        <div>
            Welcome to Next Js
        </div>
    </MainLayout>
};

export default Home;